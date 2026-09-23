import type { Plugin } from 'vite';
import { species as profiles } from '../src/data/species.ts';
import type { Species, SpeciesSummary } from '../src/types/species.ts';

const species: readonly Species[] = profiles;

const catalogueId = 'virtual:species-catalogue';
const profilePrefix = 'virtual:species-profile/';
const taxonomyRanks = ['kingdom', 'phylum', 'class', 'order', 'family', 'genus'] as const;

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
        // Intern repeated labels; unique text costs less when kept inline.
        const labelCounts = new Map<string, number>();
        for (const label of summaries.flatMap(({ distribution, habitats, tags }) => [
          ...distribution.regions, ...distribution.realms, ...habitats.map(({ name }) => name), ...tags,
        ])) labelCounts.set(label, (labelCounts.get(label) ?? 0) + 1);
        const labels = [...labelCounts].filter(([, count]) => count > 1).map(([label]) => label);
        const labelIndexes = new Map(labels.map((label, index) => [label, index]));
        const encodeLabels = (values: readonly string[]) => values.map((value) => labelIndexes.get(value) ?? value);
        // Ship the six rank names once; retain their order when restoring each lineage.
        // Restore redundant ids and compact text field names on the client.
        const catalogue = summaries.map(({ id, names, scientificName, summary, conservation, distribution, taxonomy, media, habitats, tags, ...item }) => ({ ...item,
          l: [names.zh, names.en, ...(names.aliases === undefined ? [] : [names.aliases])],
          // The genus already exists in the shared taxonomy; retain unusual names verbatim.
          n: scientificName.startsWith(`${taxonomy.genus.scientificName} `)
            ? scientificName.slice(taxonomy.genus.scientificName.length + 1) : [scientificName],
          s: summary, c: conservation.code,
          // Distribution keys repeat for every species; encode optional center last.
          d: [encodeLabels(distribution.regions), encodeLabels(distribution.realms), ...(distribution.center === undefined ? [] : [distribution.center])],
          // The standard cover filename and focal point use compact sentinels.
          m: [media.image?.startsWith(`./images/species/${item.slug}/`)
            && !media.image.slice(`./images/species/${item.slug}/`.length).includes('/')
            ? media.image.endsWith('/01-cover.webp')
              ? 1 : media.image.slice(`./images/species/${item.slug}/`.length, -'.webp'.length)
            : media.image,
            media.alt, media.focalPoint
              ? media.focalPoint.x === 0.7 && media.focalPoint.y === 0.5
                ? 1 : [media.focalPoint.x, media.focalPoint.y]
              : undefined],
          h: encodeLabels(habitats.map(({ name }) => name)), g: encodeLabels(tags),
          ...(id === item.slug ? {} : { id }),
          t: taxonomyRanks.map((rank) => indexes.get(JSON.stringify(taxonomy[rank]))),
        }));
        // Match catalogue order so the loader table does not repeat every slug.
        const loaders = species.map(({ slug }) =>
          `()=>import(${JSON.stringify(profilePrefix + slug)})`,
        ).join(',');
        // Encode shared taxa as pairs so field names are emitted only once.
        return `const taxa=${JSON.stringify(taxa.map(({ scientificName, zhName }) => [scientificName, zhName]))}.map(([scientificName,zhName])=>({scientificName,zhName}));
          const ranks=${JSON.stringify(taxonomyRanks)};
          const labels=${JSON.stringify(labels)};
          const restoreLabels=values=>values.map(value=>typeof value==='number'?labels[value]:value);
          export const species=${JSON.stringify(catalogue)}.map(({l,n,s,c,d,t,m,h,g,...item})=>({...item,id:item.id??item.slug,names:{zh:l[0],en:l[1],...(l.length>2?{aliases:l[2]}:{})},scientificName:Array.isArray(n)?n[0]:taxa[t[5]].scientificName+' '+n,summary:s,
            conservation:{code:c},distribution:{regions:restoreLabels(d[0]),realms:restoreLabels(d[1]),...(d.length>2?{center:d[2]}:{})},media:{image:m[0]===1||(m[0]&&!m[0].includes('/'))?'./images/species/'+item.slug+'/'+(m[0]===1?'01-cover':m[0])+'.webp':m[0]??undefined,alt:m[1],focalPoint:m[2]===1?{x:0.7,y:0.5}:m[2]?{x:m[2][0],y:m[2][1]}:undefined},habitats:restoreLabels(h).map(name=>({name})),tags:restoreLabels(g),
            taxonomy:Object.fromEntries(ranks.map((rank,index)=>[rank,taxa[t[index]]]))}));
          const imports=[${loaders}];
          const loaders=new Map(species.map((item,index)=>[item.slug,imports[index]]));
          export async function loadSpecies(slug){
            const load=loaders.get(slug);
            if(!load) throw new Error('Unknown species');
            return (await load()).default;
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
