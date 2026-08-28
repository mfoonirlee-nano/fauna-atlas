import type {
  TaxonomySpeciesNode,
  TaxonomyTaxonNode,
  TaxonomyTree,
  TaxonomyTreeNode,
} from './taxonomy';

/** One class-ranked branch used to seed the overview's default disclosure state. */
export interface TaxonomyOverviewBranch {
  readonly key: string;
  readonly node: TaxonomyTaxonNode;
  readonly species: readonly TaxonomySpeciesNode[];
}

/** One collapsed classification unit occupying a visible diagram row. */
export interface TaxonomyOverviewTaxonRow {
  readonly kind: 'taxon';
  readonly key: string;
  readonly node: TaxonomyTaxonNode;
  readonly leafSlugs: readonly string[];
}

/** One visible species profile occupying a diagram row. */
export interface TaxonomyOverviewSpeciesRow {
  readonly kind: 'species';
  readonly key: string;
  readonly leaf: TaxonomySpeciesNode;
}

export type TaxonomyOverviewRow =
  | TaxonomyOverviewTaxonRow
  | TaxonomyOverviewSpeciesRow;

export interface TaxonomyOverviewProjection {
  readonly branches: readonly TaxonomyOverviewBranch[];
  readonly rows: readonly TaxonomyOverviewRow[];
  readonly collapsedTaxonKeys: readonly string[];
}

function collectSpeciesProfiles(
  nodes: readonly TaxonomyTreeNode[],
): TaxonomySpeciesNode[] {
  return nodes.flatMap((node) =>
    node.kind === 'species' ? [node] : collectSpeciesProfiles(node.children),
  );
}

function collectTaxa(
  nodes: readonly TaxonomyTreeNode[],
): TaxonomyTaxonNode[] {
  return nodes.flatMap((node) =>
    node.kind === 'species' ? [] : [node, ...collectTaxa(node.children)],
  );
}

function collectClassTaxa(
  nodes: readonly TaxonomyTreeNode[],
): TaxonomyTaxonNode[] {
  return collectTaxa(nodes).filter((node) => node.rank === 'class');
}

function overviewRowKey(
  kind: TaxonomyOverviewRow['kind'],
  nodeKey: string,
): string {
  return `taxonomy-overview:${JSON.stringify([kind, nodeKey])}`;
}

/** Toggles one known classification unit without mutating the current set. */
export function toggleOverviewTaxon(
  currentKeys: ReadonlySet<string>,
  nodeKey: string,
  knownTaxonKeys: ReadonlySet<string>,
): ReadonlySet<string> {
  if (!knownTaxonKeys.has(nodeKey)) return currentKeys;

  const nextKeys = new Set(currentKeys);
  if (nextKeys.has(nodeKey)) nextKeys.delete(nodeKey);
  else nextKeys.add(nodeKey);
  return nextKeys;
}

/**
 * Projects the classification tree into its visible frontier. Species profiles
 * and collapsed classification units each occupy one row. A collapsed parent
 * hides its descendants without discarding their independent collapsed state.
 */
export function projectTaxonomyOverview(
  tree: TaxonomyTree,
  collapsedTaxonKeys: ReadonlySet<string> = new Set(),
): TaxonomyOverviewProjection {
  const taxa = collectTaxa(tree);
  const resolvedCollapsedTaxonKeys = taxa
    .filter((node) => collapsedTaxonKeys.has(node.key))
    .map((node) => node.key);
  const collapsedKeySet = new Set(resolvedCollapsedTaxonKeys);
  const branches = collectClassTaxa(tree).map((node) => ({
    key: node.key,
    node,
    species: collectSpeciesProfiles(node.children),
  }));

  const projectNode = (node: TaxonomyTreeNode): TaxonomyOverviewRow[] => {
    if (node.kind === 'species') {
      return [{
        kind: 'species',
        key: overviewRowKey('species', node.key),
        leaf: node,
      }];
    }

    if (collapsedKeySet.has(node.key)) {
      return [{
        kind: 'taxon',
        key: overviewRowKey('taxon', node.key),
        node,
        leafSlugs: collectSpeciesProfiles(node.children).map(
          ({ species }) => species.slug,
        ),
      }];
    }

    return node.children.flatMap(projectNode);
  };

  return {
    branches,
    rows: tree.flatMap(projectNode),
    collapsedTaxonKeys: resolvedCollapsedTaxonKeys,
  };
}
