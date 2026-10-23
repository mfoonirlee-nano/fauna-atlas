import { geoEqualEarth } from 'd3-geo';
import type { SpeciesSummary } from '../types/species';

export interface MapGroup { key: string; x: number; y: number; items: SpeciesSummary[] }

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
  const result = [...groups.values()].map((group) => ({
    ...group, x: group.x / group.items.length, y: group.y / group.items.length,
  }));
  // Adjacent grid cells can put their centroids on the same border. Merge those
  // neighbours so circles remain distinct, including at narrow viewport scales.
  const separation = 44 / Math.max(Number.EPSILON, zoom);
  let merged = true;
  while (merged) {
    merged = false;
    for (let i = 0; i < result.length; i++) {
      const a = result[i]!;
      for (let j = i + 1; j < result.length; j++) {
        const b = result[j]!;
        if (Math.hypot(a.x - b.x, a.y - b.y) >= separation) continue;
        const count = a.items.length + b.items.length;
        a.x = (a.x * a.items.length + b.x * b.items.length) / count;
        a.y = (a.y * a.items.length + b.y * b.items.length) / count;
        a.items = [...a.items, ...b.items];
        result.splice(j, 1); merged = true; j--;
      }
    }
  }
  return result;
}
