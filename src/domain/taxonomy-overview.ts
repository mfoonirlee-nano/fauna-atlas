import type {
  TaxonomySpeciesNode,
  TaxonomyTaxonNode,
  TaxonomyTree,
  TaxonomyTreeNode,
} from './taxonomy';

/** One class-ranked branch in the classification diagram overview. */
export interface TaxonomyOverviewBranch {
  readonly key: string;
  readonly node: TaxonomyTaxonNode;
  readonly species: readonly TaxonomySpeciesNode[];
}

/** A collapsed class summary that remains visible in every projection. */
export interface TaxonomyOverviewSummaryRow {
  readonly kind: 'summary';
  readonly key: string;
  readonly branchKey: string;
  readonly leafSlugs: readonly string[];
}

/** One species profile shown below its expanded class summary. */
export interface TaxonomyOverviewSpeciesRow {
  readonly kind: 'species';
  readonly key: string;
  readonly branchKey: string;
  readonly leaf: TaxonomySpeciesNode;
}

export type TaxonomyOverviewRow =
  | TaxonomyOverviewSummaryRow
  | TaxonomyOverviewSpeciesRow;

export interface TaxonomyOverviewProjection {
  readonly branches: readonly TaxonomyOverviewBranch[];
  readonly rows: readonly TaxonomyOverviewRow[];
  readonly expandedBranchKey: string | null;
}

function collectSpeciesProfiles(
  nodes: readonly TaxonomyTreeNode[],
): TaxonomySpeciesNode[] {
  return nodes.flatMap((node) =>
    node.kind === 'species' ? [node] : collectSpeciesProfiles(node.children),
  );
}

function collectClassTaxa(
  nodes: readonly TaxonomyTreeNode[],
): TaxonomyTaxonNode[] {
  return nodes.flatMap((node) => {
    if (node.kind === 'species') return [];
    return node.rank === 'class'
      ? [node]
      : collectClassTaxa(node.children);
  });
}

function overviewRowKey(
  kind: TaxonomyOverviewRow['kind'],
  branchKey: string,
  leafKey?: string,
): string {
  return `taxonomy-overview:${JSON.stringify(
    leafKey ? [kind, branchKey, leafKey] : [kind, branchKey],
  )}`;
}

/**
 * Projects the classification tree into class summary rows and, for one valid
 * expanded class, its species profile rows. Missing and unknown keys produce
 * the collapsed projection.
 */
export function projectTaxonomyOverview(
  tree: TaxonomyTree,
  expandedBranchKey: string | null = null,
): TaxonomyOverviewProjection {
  const branches = collectClassTaxa(tree).map((node) => ({
    key: node.key,
    node,
    species: collectSpeciesProfiles(node.children),
  }));
  const resolvedExpandedBranchKey = branches.some(
    ({ key }) => key === expandedBranchKey,
  )
    ? expandedBranchKey
    : null;
  const rows = branches.flatMap<TaxonomyOverviewRow>((branch) => {
    const summary: TaxonomyOverviewSummaryRow = {
      kind: 'summary',
      key: overviewRowKey('summary', branch.key),
      branchKey: branch.key,
      leafSlugs: branch.species.map(({ species }) => species.slug),
    };

    if (branch.key !== resolvedExpandedBranchKey) return [summary];

    return [
      summary,
      ...branch.species.map<TaxonomyOverviewSpeciesRow>((leaf) => ({
        kind: 'species',
        key: overviewRowKey('species', branch.key, leaf.key),
        branchKey: branch.key,
        leaf,
      })),
    ];
  });

  return {
    branches,
    rows,
    expandedBranchKey: resolvedExpandedBranchKey,
  };
}
