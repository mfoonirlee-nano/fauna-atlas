import type { Plugin } from 'vite';
import { species as profiles } from '../src/data/species.ts';
import type { Species, SpeciesSummary } from '../src/types/species.ts';

const species: readonly Species[] = profiles;

const catalogueId = 'virtual:species-catalogue';
const loadersId = 'virtual:species-loaders';
const profilePrefix = 'virtual:species-profile/';
const taxonomyRanks = ['kingdom', 'phylum', 'class', 'order', 'family', 'genus'] as const;

/** Keep editorial data as the single source; ship only one full profile per request. */
export function speciesBundle(): Plugin {
  return {
    name: 'species-bundle',
    resolveId(id) {
      if (id === catalogueId || id === loadersId || id.startsWith(profilePrefix)) return `\0${id}`;
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
        // A tag equal to the Chinese name reuses that name through the -1 sentinel.
        const labelCounts = new Map<string, number>();
        for (const label of summaries.flatMap(({ names, distribution, habitats, tags }) => [
          ...distribution.regions, ...habitats.map(({ name }) => name), ...tags.filter((tag) => tag !== names.zh),
        ])) labelCounts.set(label, (labelCounts.get(label) ?? 0) + 1);
        const labels = [...labelCounts].filter(([, count]) => count > 1).map(([label]) => label);
        const labelIndexes = new Map(labels.map((label, index) => [label, index]));
        const encodeLabels = (values: readonly string[]) => values.map((value) => labelIndexes.get(value) ?? value);
        // A single region or habitat does not need its own array wrapper on the wire.
        const compactLabels = (values: (string | number)[]) => values.length === 1 ? values[0] : values;
        // Share repeated alt-text suffixes while preserving the species name verbatim.
        const altCounts = new Map<string, number>();
        for (const { names, media } of summaries) {
          if (media.alt.startsWith(names.zh)) {
            const suffix = media.alt.slice(names.zh.length);
            altCounts.set(suffix, (altCounts.get(suffix) ?? 0) + 1);
          }
        }
        const altSuffixes = [...altCounts].filter(([, count]) => count > 1).map(([suffix]) => suffix);
        const altIndexes = new Map(altSuffixes.map((suffix, index) => [suffix, index]));
        const conservationCodes = [...new Set(summaries.map(({ conservation }) => conservation.code))];
        // Marine, freshwater and terrestrial combinations repeat across the catalogue.
        const realmSets = [...new Map(summaries.map(({ distribution }) =>
          [JSON.stringify(distribution.realms), distribution.realms] as const,
        )).values()];
        const realmIndexes = new Map(realmSets.map((realms, index) => [JSON.stringify(realms), index]));
        // Ship the six rank names once; retain their order when restoring each lineage.
        // Restore redundant ids and compact text field names on the client.
        const catalogue = summaries.map(({ id, names, scientificName, summary, conservation, distribution, taxonomy, media, habitats, tags, ...item }) => ({ ...item,
          l: [names.zh, names.en === item.slug.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')
            ? 1 : names.en, ...(names.aliases === undefined ? [] : [names.aliases])],
          // The genus already exists in the shared taxonomy; retain unusual names verbatim.
          n: scientificName.startsWith(`${taxonomy.genus.scientificName} `)
            ? scientificName.slice(taxonomy.genus.scientificName.length + 1) : [scientificName],
          s: summary.startsWith(names.zh) ? [summary.slice(names.zh.length)] : summary, c: conservationCodes.indexOf(conservation.code),
          // Distribution keys repeat for every species; encode optional center last.
          d: [compactLabels(encodeLabels(distribution.regions)), realmIndexes.get(JSON.stringify(distribution.realms)), ...(distribution.center === undefined ? [] : [distribution.center])],
          // The standard cover filename and focal point use compact sentinels.
          m: [media.image?.startsWith(`./images/species/${item.slug}/`)
            && !media.image.slice(`./images/species/${item.slug}/`.length).includes('/')
            ? media.image.endsWith('/01-cover.webp')
              ? 1 : media.image.slice(`./images/species/${item.slug}/`.length, -'.webp'.length)
            : media.image,
            media.alt.startsWith(names.zh)
              ? altIndexes.get(media.alt.slice(names.zh.length)) ?? media.alt : media.alt, media.focalPoint
              ? media.focalPoint.x === 0.7 && media.focalPoint.y === 0.5
                ? 1 : [media.focalPoint.x, media.focalPoint.y]
              : undefined],
          h: encodeLabels(habitats.map(({ name }) => name)), g: tags.map((tag) => tag === names.zh ? -1 : labelIndexes.get(tag) ?? tag),
          // Older profiles derive their id from the scientific name; keep exceptions verbatim.
          ...(id === item.slug ? {} : { id: id === `species-${scientificName.toLowerCase().replaceAll(' ', '-')}` ? 1 : id }),
          t: taxonomyRanks.map((rank) => indexes.get(JSON.stringify(taxonomy[rank]))),
        }));
        // Many species share kingdom through order; serialize those four ranks once.
        const lineages = [...new Map(catalogue.map(({ t }) =>
          [JSON.stringify(t.slice(0, 4)), t.slice(0, 4)] as const,
        )).values()];
        const lineageIndexes = new Map(lineages.map((lineage, index) => [JSON.stringify(lineage), index]));
        // Standard cover filenames, alt suffixes and focal points repeat together.
        // Intern those tuples without changing the restored catalogue metadata.
        const mediaCounts = new Map<string, number>();
        for (const { m } of catalogue) {
          const key = JSON.stringify(m);
          mediaCounts.set(key, (mediaCounts.get(key) ?? 0) + 1);
        }
        const mediaPresets = [...mediaCounts].filter(([, count]) => count > 1).map(([key]) => JSON.parse(key));
        const mediaIndexes = new Map(mediaPresets.map((media, index) => [JSON.stringify(media), index]));
        // Positional rows avoid repeating keys. The common name + primary habitat
        // tag pair can be restored from fields already present in the same row.
        const rows = catalogue.map(({ slug, l, n, s, c, d, t, m, h, g, id }) =>
          [slug, l, n, s, c, d, [lineageIndexes.get(JSON.stringify(t.slice(0, 4))), ...t.slice(4)], mediaIndexes.get(JSON.stringify(m)) ?? m, compactLabels(h),
            g.length === 2 && g[0] === -1 && g[1] === h[0] ? 1 : g, ...(id === undefined ? [] : [id])],
        );
        // Species slugs share words across the catalogue. Keep repeated words once.
        const wordCounts = new Map<string, number>();
        for (const { slug } of catalogue) for (const word of slug.split('-')) {
          wordCounts.set(word, (wordCounts.get(word) ?? 0) + 1);
        }
        const slugWords = [...wordCounts].filter(([word, count]) =>
          count > 1 && word.length > 3,
        ).map(([word]) => word);
        const slugWordIndexes = new Map(slugWords.map((word, index) => [word, index]));
        const compactRows = rows.map(([slug, ...fields]) => {
          const parts = (slug as string).split('-').map((word) => slugWordIndexes.get(word) ?? word);
          return [parts.some((part) => typeof part === 'number') ? parts : slug, ...fields];
        });
        // Delimited taxon pairs avoid an array wrapper per shared label. Reuse
        // identical labels and shorten the common Chinese genus suffix on the
        // wire. Preserve delimiter-bearing labels as arrays for lossless text.
        const taxonPairs = taxa.map(({ scientificName, zhName }) =>
          scientificName.includes('|') || zhName.includes('|') || zhName.includes('~')
            ? [scientificName, zhName]
            : scientificName === zhName ? scientificName
              : `${scientificName}|${zhName.endsWith('属') ? zhName.slice(0, -1) + '~' : zhName}`,
        );
        // A delimited string removes a JSON array wrapper for each taxon. Keep
        // the array representation when a label needs structured escaping.
        const packedTaxa = taxonPairs.every((pair) => typeof pair === 'string' && !pair.includes('\n'))
          ? taxonPairs.join('\n') : taxonPairs;
        // Repeated Chinese phrases cost three UTF-8 bytes per character. Encode
        // them once with unused private-use characters, restoring before JSON
        // parsing so browsing text and search remain byte-for-byte unchanged.
        let packedRows = JSON.stringify(compactRows);
        const phrases: string[] = [];
        if (!/[\uE000-\uE3FF]/u.test(packedRows)) {
          const counts = new Map<string, number>();
          for (const run of packedRows.match(/[\u3400-\u9FFF]{2,}/gu) ?? []) {
            for (let size = 2; size <= Math.min(16, run.length); size++) {
              for (let start = 0; start + size <= run.length; start++) {
                const phrase = run.slice(start, start + size);
                counts.set(phrase, (counts.get(phrase) ?? 0) + 1);
              }
            }
          }
          const candidates = [...counts].map(([phrase, count]) => ({
            phrase, saving: (phrase.length * 3 - 3) * count - phrase.length * 3 - 3,
          })).filter(({ saving }) => saving > 0).sort((a, b) => b.saving - a.saving);
          for (const { phrase } of candidates) {
            if (phrases.length === 1024) break;
            const count = packedRows.split(phrase).length - 1;
            if ((phrase.length * 3 - 3) * count <= phrase.length * 3 + 3) continue;
            packedRows = packedRows.replaceAll(phrase, String.fromCharCode(0xE000 + phrases.length));
            phrases.push(phrase);
          }
        }
        return `const packedTaxa=${JSON.stringify(packedTaxa)};
          const taxa=(typeof packedTaxa==='string'?packedTaxa.split('\\n'):packedTaxa).map(pair=>{if(Array.isArray(pair))return pair;const [name,label=name]=pair.split('|');return [name,label.endsWith('~')?label.slice(0,-1)+'属':label];}).map(([scientificName,zhName=scientificName])=>({scientificName,zhName}));
          const ranks=${JSON.stringify(taxonomyRanks)};
          const lineages=${JSON.stringify(lineages)};
          const labels=${JSON.stringify(labels)};
          const altSuffixes=${JSON.stringify(altSuffixes)};
          const conservationCodes=${JSON.stringify(conservationCodes)};
          const realmSets=${JSON.stringify(realmSets)};
          const mediaPresets=${JSON.stringify(mediaPresets)};
          const slugWords=${JSON.stringify(slugWords)};
          const restoreLabels=(values,name)=>(Array.isArray(values)?values:[values]).map(value=>value===-1?name:typeof value==='number'?labels[value]:value);
          const phrases=${JSON.stringify(phrases)};
          const rows=JSON.parse(${JSON.stringify(packedRows)}.replace(/[\\uE000-\\uE3FF]/g,char=>phrases[char.charCodeAt(0)-0xE000]??char));
          export const species=rows.map(row=>{if(Array.isArray(row[0])) row[0]=row[0].map(word=>typeof word==='number'?slugWords[word]:word).join('-');if(typeof row[7]==='number') row[7]=mediaPresets[row[7]];return row;}).map(([slug,l,n,s,c,d,t,m,h,g,id])=>({slug,id:id===1?'species-'+(Array.isArray(n)?n[0]:taxa[t[2]].scientificName+' '+n).toLowerCase().replaceAll(' ','-'):id??slug,names:{zh:l[0],en:l[1]===1?slug.split('-').map(word=>word[0].toUpperCase()+word.slice(1)).join(' '):l[1],...(l.length>2?{aliases:l[2]}:{})},scientificName:Array.isArray(n)?n[0]:taxa[t[2]].scientificName+' '+n,summary:Array.isArray(s)?l[0]+s[0]:s,
            conservation:{code:conservationCodes[c]},distribution:{regions:restoreLabels(d[0]),realms:realmSets[d[1]],...(d.length>2?{center:d[2]}:{})},media:{image:m[0]===1||(m[0]&&!m[0].includes('/'))?'./images/species/'+slug+'/'+(m[0]===1?'01-cover':m[0])+'.webp':m[0]??undefined,alt:typeof m[1]==='number'?l[0]+altSuffixes[m[1]]:m[1],focalPoint:m[2]===1?{x:0.7,y:0.5}:m[2]?{x:m[2][0],y:m[2][1]}:undefined},habitats:restoreLabels(h).map(name=>({name})),tags:g===1?[l[0],restoreLabels(h)[0]]:restoreLabels(g,l[0]),
            taxonomy:Object.fromEntries([...lineages[t[0]],...t.slice(1)].flatMap((taxon,index)=>taxon===null?[]:[[ranks[index],taxa[taxon]]]))}));
          const indexes=new Map(species.map((item,index)=>[item.slug,index]));
          export async function loadSpecies(slug){
            const index=indexes.get(slug);
            if(index===undefined) throw new Error('Unknown species');
            const {default:imports}=await import(${JSON.stringify(loadersId)});
            return (await imports[index]()).default;
          }`;
      }
      if (id === `\0${loadersId}`) {
        // Download the import table when a profile opens. Its order matches the
        // catalogue; the table contains no editorial profiles or duplicate slugs.
        const loaders = species.map(({ slug }) =>
          `()=>import(${JSON.stringify(profilePrefix + slug)})`,
        ).join(',');
        return `export default [${loaders}];`;
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
