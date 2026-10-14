import { geoEqualEarth } from 'd3-geo';
import { hierarchy, treemap } from 'd3-hierarchy';
import type { SpeciesSummary } from '../types/species';
import type { TaxonomyTreeNode } from './taxonomy';

export const mapProjection = geoEqualEarth().scale(175).translate([500, 260]);

export function searchExploration(items: readonly SpeciesSummary[], query: string, realm: string) {
  const term = query.trim().toLocaleLowerCase();
  return items.filter((item) =>
    (!realm || item.distribution.realms.includes(realm as 'terrestrial' | 'freshwater' | 'marine')) &&
    (!term || [item.names.zh, item.names.en, ...(item.names.aliases ?? []), item.scientificName,
      ...item.distribution.regions, ...item.tags, ...item.habitats.map((habitat) => habitat.name),
      ...Object.values(item.taxonomy).map((taxon) => `${taxon.zhName} ${taxon.scientificName}`),
    ].join(' ').toLocaleLowerCase().includes(term)),
  );
}

export function projectSpecies(item: SpeciesSummary): [number, number] | undefined {
  const point = item.distribution.center;
  if (!point || !Number.isFinite(point.lat) || !Number.isFinite(point.lng) ||
    Math.abs(point.lat) > 90 || Math.abs(point.lng) > 180) return undefined;
  return mapProjection([point.lng, point.lat]) ?? undefined;
}

/** Screen-space aggregation; only documented representative points participate. */
export function clusterSpecies(items: readonly SpeciesSummary[], zoom: number) {
  const groups = new Map<string, { key: string; x: number; y: number; items: SpeciesSummary[] }>();
  for (const item of items) {
    const point = projectSpecies(item);
    if (!point) continue;
    const key = `${Math.floor(point[0] * zoom / 44)}:${Math.floor(point[1] * zoom / 44)}`;
    const group = groups.get(key) ?? { key, x: 0, y: 0, items: [] };
    group.x += point[0]; group.y += point[1]; group.items.push(item);
    groups.set(key, group);
  }
  return [...groups.values()].map((group) => ({
    ...group, x: group.x / group.items.length, y: group.y / group.items.length,
  }));
}

/** Lay out immediate children only, so every level stays readable in one viewport. */
export function layoutTaxonomyTiles(nodes: readonly TaxonomyTreeNode[], width: number, height: number) {
  const root = hierarchy<{ children?: readonly TaxonomyTreeNode[]; node?: TaxonomyTreeNode }>(
    { children: nodes },
    (data) => data.children?.map((node) => ({ node })),
  ).sum((data) => data.node?.speciesCount ?? 0).sort((a, b) => (b.value ?? 0) - (a.value ?? 0));
  return treemap<typeof root.data>().size([width, height]).paddingInner(5).round(true)(root)
    .children?.map((tile) => ({ node: tile.data.node!, x: tile.x0, y: tile.y0,
      width: tile.x1 - tile.x0, height: tile.y1 - tile.y0 })) ?? [];
}
