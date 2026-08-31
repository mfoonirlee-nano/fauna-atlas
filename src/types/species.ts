/** A short bilingual label used by filters and detail pages. */
export interface LocalizedText {
  readonly zh: string;
  readonly en: string;
}

export type IucnStatusCode =
  | 'EX'
  | 'EW'
  | 'CR'
  | 'EN'
  | 'VU'
  | 'NT'
  | 'LC'
  | 'DD'
  | 'NE';

export type PopulationTrend = 'increasing' | 'stable' | 'decreasing' | 'unknown';
export type EcologicalRealm = 'terrestrial' | 'freshwater' | 'marine';
export type MeasurementUnit = 'mm' | 'cm' | 'm' | 'g' | 'kg' | 't';

export type DietType =
  | 'herbivore'
  | 'carnivore'
  | 'omnivore'
  | 'insectivore'
  | 'piscivore'
  | 'nectarivore'
  | 'filter-feeder'
  | 'bacterivore'
  | 'detritivore';

export interface Taxon {
  readonly scientificName: string;
  readonly zhName: string;
}

export interface SpeciesTaxonomy {
  readonly kingdom: Taxon;
  readonly phylum: Taxon;
  readonly class: Taxon;
  readonly order: Taxon;
  readonly family: Taxon;
  readonly genus: Taxon;
}

export interface ConservationStatus {
  readonly system: 'IUCN Red List';
  readonly code: IucnStatusCode;
  readonly label: LocalizedText;
  readonly trend: PopulationTrend;
  /** Year of the assessment represented by this record, not the import year. Absent for NE. */
  readonly assessedYear?: number;
  readonly criteria?: string;
  readonly assessor: string;
}

export interface GeoPoint {
  readonly lat: number;
  readonly lng: number;
}

export interface SpeciesDistribution {
  readonly realms: readonly EcologicalRealm[];
  readonly continents: readonly string[];
  readonly regions: readonly string[];
  readonly countries: readonly string[];
  readonly endemicTo?: readonly string[];
  readonly range: string;
  /** Representative map focus; it must not be interpreted as the full range. */
  readonly center?: GeoPoint;
}

export interface Habitat {
  readonly name: string;
  readonly realm: EcologicalRealm;
  readonly description: string;
  readonly isPrimary?: boolean;
}

export interface MeasurementRange {
  readonly min?: number;
  readonly max?: number;
  readonly typical?: number;
  readonly unit: MeasurementUnit;
  readonly note?: string;
}

export interface SpeciesMeasurements {
  readonly length?: MeasurementRange;
  readonly height?: MeasurementRange;
  readonly weight?: MeasurementRange;
  readonly wingspan?: MeasurementRange;
}

export interface SpeciesDiet {
  readonly types: readonly DietType[];
  readonly foods: readonly string[];
  readonly description: string;
}

/** Numeric, normalized fields intended for sorting, ranges and comparisons. */
export interface SpeciesMetrics {
  readonly adultLengthCm?: readonly [min: number, max: number];
  readonly adultMassKg?: readonly [min: number, max: number];
  readonly lifespanYears?: readonly [min: number, max: number];
  readonly wingspanCm?: readonly [min: number, max: number];
  readonly topSpeedKph?: number;
  readonly maxDiveDepthM?: number;
  readonly elevationM?: readonly [min: number, max: number];
  readonly estimatedMatureIndividuals?: readonly [min: number, max: number];
}

/** Ready-to-render display stats. Numeric equivalents belong in `metrics`. */
export interface FeaturedStat {
  readonly key: string;
  readonly label: string;
  readonly value: string;
  readonly unit?: string;
  readonly note?: string;
}

export interface SpeciesGalleryImage {
  readonly image: `./images/${string}.webp`;
  readonly alt: string;
  readonly title: string;
  readonly caption?: string;
  /** Normalized image focal point: both axes use the inclusive range 0..1. */
  readonly focalPoint?: { readonly x: number; readonly y: number };
  readonly credit?: string;
}

export interface SpeciesMedia {
  /** Optional project-local runtime asset; absent entries use generated taxon artwork. */
  readonly image?: `./images/${string}.webp`;
  readonly alt: string;
  /** Normalized image focal point: both axes use the inclusive range 0..1. */
  readonly focalPoint?: { readonly x: number; readonly y: number };
  readonly credit?: string;
  /** Additional detail-page images; the cover image is not repeated here. */
  readonly gallery?: readonly SpeciesGalleryImage[];
}

/** Optional long-form chapters for species with a complete editorial profile. */
export interface SpeciesStorySection {
  readonly key: string;
  readonly label: string;
  readonly title: string;
  readonly body: string;
}

export type SourceKind =
  | 'conservation'
  | 'taxonomy'
  | 'distribution'
  | 'ecology'
  | 'general';

export interface SpeciesSource {
  readonly title: string;
  readonly url: string;
  readonly kind: SourceKind;
  readonly accessedAt?: `${number}-${number}-${number}`;
}

export interface Species {
  readonly id: string;
  readonly slug: string;
  readonly names: LocalizedText & { readonly aliases?: readonly string[] };
  readonly scientificName: string;
  readonly taxonomy: SpeciesTaxonomy;
  readonly conservation: ConservationStatus;
  readonly distribution: SpeciesDistribution;
  readonly habitats: readonly Habitat[];
  readonly measurements: SpeciesMeasurements;
  readonly diet: SpeciesDiet;
  readonly activity?: readonly string[];
  readonly tags: readonly string[];
  readonly summary: string;
  readonly description: string;
  readonly storySections?: readonly SpeciesStorySection[];
  readonly keyFacts: readonly string[];
  readonly threats: readonly string[];
  readonly conservationActions: readonly string[];
  readonly metrics: SpeciesMetrics;
  readonly featuredStats: readonly FeaturedStat[];
  readonly media: SpeciesMedia;
  readonly sources: readonly SpeciesSource[];
  readonly featured?: boolean;
  readonly publishedAt: `${number}-${number}-${number}`;
  readonly updatedAt: `${number}-${number}-${number}`;
}
