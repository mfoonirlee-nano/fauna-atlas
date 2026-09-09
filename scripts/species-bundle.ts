import type { Plugin } from 'vite';
import { species as profiles } from '../src/data/species.ts';
import type { Species, SpeciesSummary } from '../src/types/species.ts';

const species: readonly Species[] = profiles;

const catalogueId = 'virtual:species-catalogue';
const profilePrefix = 'virtual:species-profile/';

/** Keep editorial data as the single source; ship only one full profile per request. */
export function speciesBundle(): Plugin {
  return {
    name: 'species-bundle',
    resolveId(id) {
      if (id === catalogueId || id.startsWith(profilePrefix)) return `\0${id}`;
    },
    load(id) {
      if (id === `\0${catalogueId}`) {
        const summaries: SpeciesSummary[] = species.map((item) => ({
          id: item.id,
          slug: item.slug,
          names: item.names,
          scientificName: item.scientificName,
          taxonomy: item.taxonomy,
          conservation: { code: item.conservation.code },
          distribution: { regions: item.distribution.regions, realms: item.distribution.realms, center: item.distribution.center },
          habitats: item.habitats.map(({ name }) => ({ name })),
          tags: item.tags,
          summary: item.summary,
          media: { image: item.media.image, alt: item.media.alt, focalPoint: item.media.focalPoint },
        }));
        // Reuse taxonomy objects shared by many species instead of serializing every lineage.
        const taxa = [...new Map(summaries.flatMap(({ taxonomy }) =>
          Object.values(taxonomy).map((taxon) => [JSON.stringify(taxon), taxon] as const),
        )).values()];
        const indexes = new Map(taxa.map((taxon, index) => [JSON.stringify(taxon), index]));
        const catalogue = summaries.map((item) => ({ ...item, taxonomy: Object.fromEntries(
          Object.entries(item.taxonomy).map(([rank, taxon]) => [rank, indexes.get(JSON.stringify(taxon))]),
        ) }));
        const loaders = species.map(({ slug }) =>
          `${JSON.stringify(slug)}:()=>import(${JSON.stringify(profilePrefix + slug)})`,
        ).join(',');
        return `const taxa=${JSON.stringify(taxa)};
          export const species=${JSON.stringify(catalogue)}.map(item=>({...item,taxonomy:Object.fromEntries(Object.entries(item.taxonomy).map(([rank,index])=>[rank,taxa[index]]))}));
          const loaders={${loaders}};
          export async function loadSpecies(slug){
            if(!Object.hasOwn(loaders,slug)) throw new Error('Unknown species');
            return (await loaders[slug]()).default;
          }`;
      }
      if (id.startsWith(`\0${profilePrefix}`)) {
        const slug = id.slice(profilePrefix.length + 1);
        const item = species.find((candidate) => candidate.slug === slug);
        if (!item) this.error(`Unknown species profile: ${slug}`);
        return `export default ${JSON.stringify(item)};`;
      }
    },
  };
}
