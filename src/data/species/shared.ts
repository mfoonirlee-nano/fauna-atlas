import type { ConservationStatus, IucnStatusCode, PopulationTrend, SpeciesTaxonomy, Taxon } from '../../types/species.ts';

export const CONTENT_DATE = '2026-08-02' as const;

export const iucnLabels: Record<IucnStatusCode, { zh: string; en: string }> = {
  EX: { zh: '灭绝', en: 'Extinct' },
  EW: { zh: '野外灭绝', en: 'Extinct in the Wild' },
  CR: { zh: '极危', en: 'Critically Endangered' },
  EN: { zh: '濒危', en: 'Endangered' },
  VU: { zh: '易危', en: 'Vulnerable' },
  NT: { zh: '近危', en: 'Near Threatened' },
  LC: { zh: '无危', en: 'Least Concern' },
  DD: { zh: '数据缺乏', en: 'Data Deficient' },
  NE: { zh: '未评估', en: 'Not Evaluated' },
};

export const taxon = (scientificName: string, zhName: string): Taxon => ({
  scientificName,
  zhName,
});

export const animalTaxonomy = (
  phylum: Taxon,
  className: Taxon,
  order: Taxon,
  family: Taxon,
  genus: Taxon,
): SpeciesTaxonomy => ({
  kingdom: taxon('Animalia', '动物界'),
  phylum,
  class: className,
  order,
  family,
  genus,
});

export const conservation = (
  code: IucnStatusCode,
  trend: PopulationTrend,
  assessedYear?: number,
  criteria?: string,
): ConservationStatus => ({
  system: 'IUCN Red List',
  code,
  label: iucnLabels[code],
  trend,
  ...(assessedYear === undefined ? {} : { assessedYear }),
  ...(criteria === undefined ? {} : { criteria }),
  assessor:
    code === 'NE'
      ? 'IUCN Red List (not evaluated)'
      : 'International Union for Conservation of Nature (IUCN)',
});
