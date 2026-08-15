import type { Species, Taxon } from '../types/species';

/** The classification ranks represented by taxon nodes, from root to leaf. */
export const TAXONOMY_RANKS = [
  'kingdom',
  'phylum',
  'class',
  'order',
  'family',
  'genus',
] as const;

export type TaxonomyRank = (typeof TAXONOMY_RANKS)[number];

export interface TaxonomyPathEntry {
  /** Stable identity containing this taxon's complete scientific parent path. */
  readonly key: string;
  readonly rank: TaxonomyRank;
  readonly taxon: Taxon;
}

export interface TaxonomyTaxonNode extends TaxonomyPathEntry {
  readonly kind: 'taxon';
  /** Number of species leaves below this node. */
  readonly speciesCount: number;
  readonly children: readonly TaxonomyTreeNode[];
}

export interface TaxonomySpeciesNode {
  readonly kind: 'species';
  /** Stable identity containing the complete scientific taxonomy path. */
  readonly key: string;
  readonly rank: 'species';
  readonly species: Species;
  readonly speciesCount: 1;
  readonly children: readonly [];
}

export type TaxonomyTreeNode = TaxonomyTaxonNode | TaxonomySpeciesNode;
export type TaxonomyTree = readonly TaxonomyTaxonNode[];

export class TaxonomyConflictError extends Error {
  override readonly name = 'TaxonomyConflictError';
}

type KeyRank = TaxonomyRank | 'species';
type KeySegment = readonly [rank: KeyRank, scientificName: string];

interface TaxonIdentity {
  readonly parentKey: string | null;
  readonly zhName: string;
}

interface MutableTaxonomyTaxonNode {
  kind: 'taxon';
  key: string;
  rank: TaxonomyRank;
  taxon: Taxon;
  speciesCount: number;
  children: TaxonomyTreeNode[];
}

function taxonomyKey(path: readonly KeySegment[]): string {
  return `taxonomy:${JSON.stringify(path)}`;
}

function taxonIdentityKey(rank: TaxonomyRank, scientificName: string): string {
  return JSON.stringify([rank, scientificName]);
}

/**
 * Returns one species profile's six taxon ancestors in canonical rank order.
 * Keys include the full parent path, so names reused in another branch cannot
 * collide in renderers or indexes.
 */
export function getSpeciesTaxonomyPath(species: Species): readonly TaxonomyPathEntry[] {
  const path: KeySegment[] = [];

  return TAXONOMY_RANKS.map((rank) => {
    const taxon = species.taxonomy[rank];
    path.push([rank, taxon.scientificName]);

    return {
      key: taxonomyKey(path),
      rank,
      taxon,
    };
  });
}

/**
 * Builds a taxonomy forest without mutating the supplied species profiles.
 * Siblings keep their first-occurrence input order. A scientific taxon name at
 * a given rank must always have the same Chinese name and direct parent.
 */
export function buildTaxonomyTree(species: readonly Species[]): TaxonomyTree {
  const roots: MutableTaxonomyTaxonNode[] = [];
  const nodesByKey = new Map<string, MutableTaxonomyTaxonNode>();
  const identities = new Map<string, TaxonIdentity>();
  const speciesKeys = new Set<string>();

  for (const profile of species) {
    const path = getSpeciesTaxonomyPath(profile);
    let parent: MutableTaxonomyTaxonNode | undefined;

    for (const entry of path) {
      const parentKey = parent?.key ?? null;
      const identityKey = taxonIdentityKey(entry.rank, entry.taxon.scientificName);
      const knownIdentity = identities.get(identityKey);

      if (knownIdentity) {
        if (knownIdentity.zhName !== entry.taxon.zhName) {
          throw new TaxonomyConflictError(
            `${entry.rank} taxon "${entry.taxon.scientificName}" has conflicting Chinese names ` +
              `"${knownIdentity.zhName}" and "${entry.taxon.zhName}".`,
          );
        }

        if (knownIdentity.parentKey !== parentKey) {
          throw new TaxonomyConflictError(
            `${entry.rank} taxon "${entry.taxon.scientificName}" has conflicting parents ` +
              `"${knownIdentity.parentKey ?? '<root>'}" and "${parentKey ?? '<root>'}".`,
          );
        }
      } else {
        identities.set(identityKey, {
          parentKey,
          zhName: entry.taxon.zhName,
        });
      }

      let node = nodesByKey.get(entry.key);

      if (!node) {
        node = {
          kind: 'taxon',
          key: entry.key,
          rank: entry.rank,
          taxon: entry.taxon,
          speciesCount: 0,
          children: [],
        };
        nodesByKey.set(entry.key, node);

        if (parent) {
          parent.children.push(node);
        } else {
          roots.push(node);
        }
      }

      node.speciesCount += 1;
      parent = node;
    }

    const keySegments: KeySegment[] = path.map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]);
    keySegments.push(['species', profile.scientificName]);
    const speciesKey = taxonomyKey(keySegments);

    if (speciesKeys.has(speciesKey)) {
      throw new TaxonomyConflictError(
        `Species "${profile.scientificName}" occurs more than once under the same taxonomy path.`,
      );
    }
    speciesKeys.add(speciesKey);

    const leaf: TaxonomySpeciesNode = {
      kind: 'species',
      key: speciesKey,
      rank: 'species',
      species: profile,
      speciesCount: 1,
      children: [],
    };

    parent?.children.push(leaf);
  }

  return roots;
}
