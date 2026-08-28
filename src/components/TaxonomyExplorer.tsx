// PROTOTYPE — Three homepage taxonomy directions, switchable with ?variant=A|B|C.
import { ArrowUpRight } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  TAXONOMY_RANKS,
  buildTaxonomyTree,
  getSpeciesTaxonomyPath,
  type TaxonomyRank,
  type TaxonomySpeciesNode,
  type TaxonomyTaxonNode,
  type TaxonomyTree,
  type TaxonomyTreeNode,
} from '../domain/taxonomy';
import {
  projectTaxonomyOverview,
  type TaxonomyOverviewBranch,
  type TaxonomyOverviewProjection,
} from '../domain/taxonomy-overview';
import type { Species } from '../types';
import { PrototypeSwitcher, type PrototypeVariant } from './PrototypeSwitcher';
import {
  TaxonomyDiagram,
  type TaxonomyDiagramEdge,
  type TaxonomyDiagramNode,
} from './TaxonomyDiagram';
import './TaxonomyExplorer.css';

interface TaxonomyExplorerProps {
  readonly items: readonly Species[];
  readonly theme: 'light' | 'dark';
  readonly onOpenSpecies: (item: Species) => void;
}

interface VariantProps extends TaxonomyExplorerProps {
  readonly tree: TaxonomyTree;
}

interface DiagramData {
  readonly nodes: readonly TaxonomyDiagramNode[];
  readonly edges: readonly TaxonomyDiagramEdge[];
}

type DisplayRank = TaxonomyRank | 'species';
type PrototypeVariantKey = 'A' | 'B' | 'C';

const rankLabels: Record<DisplayRank, { readonly zh: string; readonly en: string }> = {
  kingdom: { zh: '界', en: 'Kingdom' },
  phylum: { zh: '门', en: 'Phylum' },
  class: { zh: '纲', en: 'Class' },
  order: { zh: '目', en: 'Order' },
  family: { zh: '科', en: 'Family' },
  genus: { zh: '属', en: 'Genus' },
  species: { zh: '种', en: 'Species' },
};

const prototypeVariants = [
  { key: 'A', label: '横向图谱总览' },
  { key: 'B', label: '单一物种路径' },
  { key: 'C', label: '按纲聚焦浏览' },
] as const satisfies readonly PrototypeVariant[];

const overviewRowPitch = 58;

function isPrototypeVariantKey(value: string | null): value is PrototypeVariantKey {
  return value === 'A' || value === 'B' || value === 'C';
}

function readPrototypeVariant(): PrototypeVariantKey {
  if (!import.meta.env.DEV || typeof window === 'undefined') return 'A';
  const value = new URLSearchParams(window.location.search).get('variant')?.toUpperCase() ?? null;
  return isPrototypeVariantKey(value) ? value : 'A';
}

function collectSpeciesNodes(nodes: readonly TaxonomyTreeNode[]): TaxonomySpeciesNode[] {
  return nodes.flatMap((node) =>
    node.kind === 'species' ? [node] : collectSpeciesNodes(node.children),
  );
}

function collectTaxonNodes(nodes: readonly TaxonomyTreeNode[]): TaxonomyTaxonNode[] {
  return nodes.flatMap((node) =>
    node.kind === 'taxon' ? [node, ...collectTaxonNodes(node.children)] : [],
  );
}

function makeOverviewDiagram(
  tree: TaxonomyTree,
  overview: TaxonomyOverviewProjection,
  { showSummaries = true }: { readonly showSummaries?: boolean } = {},
  columns: readonly [number, number, number, number, number, number, number] = [
    0.035,
    0.165,
    0.295,
    0.425,
    0.555,
    0.685,
    0.79,
  ],
): DiagramData {
  const diagramRows = showSummaries
    ? overview.rows
    : overview.rows.filter((row) => row.kind === 'species');
  const rowYByKey = new Map(
    diagramRows.map((row, index) => [
      row.key,
      diagramRows.length <= 1 ? 0.5 : 0.045 + (index / (diagramRows.length - 1)) * 0.91,
    ]),
  );
  const summaryRowByBranchKey = new Map(
    diagramRows
      .filter((row) => row.kind === 'summary')
      .map((row) => [row.branchKey, row]),
  );
  const speciesRowByLeafKey = new Map(
    diagramRows
      .filter((row) => row.kind === 'species')
      .map((row) => [row.leaf.key, row]),
  );
  const speciesYBySlug = new Map(
    diagramRows
      .filter((row) => row.kind === 'species')
      .map((row) => [row.leaf.species.slug, rowYByKey.get(row.key) ?? 0.5]),
  );
  const summaryYByBranchKey = new Map(diagramRows
    .filter((row) => row.kind === 'summary')
    .map((row) => [row.branchKey, rowYByKey.get(row.key) ?? 0.5]));
  const branchKeyBySlug = new Map(
    overview.branches.flatMap((branch) =>
      branch.species.map((leaf) => [leaf.species.slug, branch.key] as const),
    ),
  );
  const overviewBranchByKey = new Map(overview.branches.map((branch) => [branch.key, branch]));
  const nodes: TaxonomyDiagramNode[] = [];
  const edges: TaxonomyDiagramEdge[] = [];

  const meanVisibleY = (node: TaxonomyTaxonNode): number => {
    const descendantSlugs = new Set(
      collectSpeciesNodes(node.children).map((leaf) => leaf.species.slug),
    );
    const positions = [...descendantSlugs]
      .map((slug) => speciesYBySlug.get(slug))
      .filter((position): position is number => position !== undefined);

    if (TAXONOMY_RANKS.indexOf(node.rank) <= TAXONOMY_RANKS.indexOf('class')) {
      const branchKeys = new Set(
        [...descendantSlugs]
          .map((slug) => branchKeyBySlug.get(slug))
          .filter((key): key is string => key !== undefined),
      );
      for (const branchKey of branchKeys) {
        const summaryY = summaryYByBranchKey.get(branchKey);
        if (summaryY !== undefined) positions.push(summaryY);
      }
    }

    if (positions.length === 0) return 0.5;
    return positions.reduce((total, position) => total + position, 0) / positions.length;
  };

  const addTaxon = (node: TaxonomyTaxonNode) => {
    const leafSlugs = collectSpeciesNodes(node.children).map((leaf) => leaf.species.slug);
    const rankIndex = TAXONOMY_RANKS.indexOf(node.rank);
    nodes.push({
      id: node.key,
      kind: 'taxon',
      rankLabel: rankLabels[node.rank].zh,
      zhName: node.taxon.zhName,
      scientificName: node.taxon.scientificName,
      x: columns[rankIndex] ?? columns[0],
      y: meanVisibleY(node),
      leafSlugs,
    });
  };

  const addEdge = (
    from: TaxonomyTaxonNode,
    to: TaxonomyTaxonNode | TaxonomySpeciesNode,
    collapsedRanks: readonly string[] = [],
  ) => {
    const leafSlugs = to.kind === 'species'
      ? [to.species.slug]
      : collectSpeciesNodes(to.children).map((leaf) => leaf.species.slug);
    edges.push({
      id: `${from.key}→${to.key}`,
      from: from.key,
      to: to.key,
      leafSlugs,
      collapsedRanks,
    });
  };

  const addSummary = (branch: TaxonomyOverviewBranch) => {
    const row = summaryRowByBranchKey.get(branch.key);
    if (!row) return;

    const expanded = overview.expandedBranchKey === branch.key;
    const leafSlugs = branch.species.map((leaf) => leaf.species.slug);
    const summaryLeafSlugs = expanded ? [] : leafSlugs;
    nodes.push({
      id: row.key,
      kind: 'summary',
      rankLabel: `${branch.node.taxon.zhName} · ${expanded ? '收起' : '展开'}`,
      zhName: `${branch.node.speciesCount} 份物种档案`,
      scientificName: branch.node.taxon.scientificName,
      x: columns[6],
      y: rowYByKey.get(row.key) ?? 0.5,
      leafSlugs: summaryLeafSlugs,
      summary: {
        branchKey: branch.key,
        branchName: branch.node.taxon.zhName,
        speciesCount: branch.node.speciesCount,
        expanded,
      },
    });
    if (!expanded) {
      edges.push({
        id: `${branch.key}→${row.key}`,
        from: branch.key,
        to: row.key,
        leafSlugs: summaryLeafSlugs,
        collapsedRanks: ['目', '科', '属', '种'],
      });
    }
  };

  const projectNode = (
    node: TaxonomyTreeNode,
    visibleParent: TaxonomyTaxonNode,
    collapsedRanks: readonly string[],
  ) => {
    if (node.kind === 'species') {
      const row = speciesRowByLeafKey.get(node.key);
      if (!row) return;

      nodes.push({
        id: node.key,
        kind: 'species',
        rankLabel: rankLabels.species.zh,
        zhName: node.species.names.zh,
        scientificName: node.species.scientificName,
        x: columns[6],
        y: rowYByKey.get(row.key) ?? 0.5,
        leafSlugs: [node.species.slug],
        species: node.species,
      });
      addEdge(visibleParent, node, collapsedRanks);
      return;
    }

    if (node.rank === 'class') {
      addTaxon(node);
      addEdge(visibleParent, node, collapsedRanks);

      const branch = overviewBranchByKey.get(node.key);
      if (!branch) return;
      addSummary(branch);
      if (overview.expandedBranchKey === branch.key) {
        for (const child of node.children) projectNode(child, node, []);
      }
      return;
    }

    const isStructuralLevel = node.rank === 'phylum';
    const isTrueBranch = node.children.length > 1;

    if (isStructuralLevel || isTrueBranch) {
      addTaxon(node);
      addEdge(visibleParent, node, collapsedRanks);
      for (const child of node.children) projectNode(child, node, []);
      return;
    }

    const nextCollapsedRanks = [...collapsedRanks, rankLabels[node.rank].zh];
    for (const child of node.children) projectNode(child, visibleParent, nextCollapsedRanks);
  };

  for (const root of tree) {
    addTaxon(root);
    for (const child of root.children) projectNode(child, root, []);
  }

  return { nodes, edges };
}

function makeLineageDiagram(
  item: Species,
  leaf: TaxonomySpeciesNode,
  orientation: 'horizontal' | 'vertical' = 'horizontal',
): DiagramData {
  const entries = getSpeciesTaxonomyPath(item);
  const vertical = orientation === 'vertical';
  const nodes: TaxonomyDiagramNode[] = entries.map((entry, index) => ({
    id: entry.key,
    kind: 'taxon',
    rankLabel: rankLabels[entry.rank].zh,
    zhName: entry.taxon.zhName,
    scientificName: entry.taxon.scientificName,
    x: vertical ? 0.09 : 0.055 + index * 0.148,
    y: vertical ? 0.06 + index * 0.147 : 0.5,
    leafSlugs: [item.slug],
    labelPosition: vertical ? undefined : index % 2 === 0 ? 'above' : 'below',
  }));

  nodes.push({
    id: leaf.key,
    kind: 'species',
    rankLabel: rankLabels.species.zh,
    zhName: item.names.zh,
    scientificName: item.scientificName,
    x: vertical ? 0.09 : 0.943,
    y: vertical ? 0.942 : 0.5,
    leafSlugs: [item.slug],
    labelPosition: vertical ? undefined : 'above',
    species: item,
  });

  const edges: TaxonomyDiagramEdge[] = [];
  for (let index = 1; index < nodes.length; index += 1) {
    const from = nodes[index - 1];
    const to = nodes[index];
    if (!from || !to) continue;
    edges.push({
      id: `${from.id}→${to.id}`,
      from: from.id,
      to: to.id,
      leafSlugs: [item.slug],
    });
  }

  return { nodes, edges };
}

function CompletePath({
  item,
  compact = false,
  onOpenSpecies,
}: {
  readonly item: Species;
  readonly compact?: boolean;
  readonly onOpenSpecies?: (item: Species) => void;
}) {
  const entries = getSpeciesTaxonomyPath(item);

  return (
    <div className={`taxonomy-path${compact ? ' taxonomy-path--compact' : ''}`}>
      <div className="taxonomy-path__identity">
        <span>完整分类路径</span>
        <strong>{item.names.zh}</strong>
        <i lang="la">{item.scientificName}</i>
        {onOpenSpecies && (
          <button type="button" onClick={() => onOpenSpecies(item)}>
            查看档案 <ArrowUpRight size={14} />
          </button>
        )}
      </div>
      <ol>
        {entries.map((entry) => (
          <li key={entry.key}>
            <small>{rankLabels[entry.rank].zh} · {rankLabels[entry.rank].en}</small>
            <span>{entry.taxon.zhName}</span>
            <i lang="la">{entry.taxon.scientificName}</i>
          </li>
        ))}
        <li>
          <small>{rankLabels.species.zh} · {rankLabels.species.en}</small>
          <span>{item.names.zh}</span>
          <i lang="la">{item.scientificName}</i>
        </li>
      </ol>
    </div>
  );
}

function AccessibleTaxonomyPaths({ items }: { readonly items: readonly Species[] }) {
  return (
    <div className="sr-only">
      <h3>物种档案完整分类路径</h3>
      <ul>
        {items.map((item) => (
          <li key={item.slug}>
            {[
              ...getSpeciesTaxonomyPath(item).map(
                (entry) => `${rankLabels[entry.rank].zh}：${entry.taxon.zhName}（${entry.taxon.scientificName}）`,
              ),
              `${rankLabels.species.zh}：${item.names.zh}（${item.scientificName}）`,
            ].join('，')}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DiagramDisclaimer() {
  return (
    <p className="taxonomy-disclaimer">
      虚线表示已折叠的分类阶元或纲分支；所有枝线只表示当前图册收录口径下的分类归属，长度与位置不表示演化时间、祖先关系或亲缘远近。
    </p>
  );
}

function MobileLineageMap({
  items,
  tree,
  activeItem,
  branches,
  activeBranchKey,
  label,
  theme,
  showSelector = true,
  onSelectBranch,
  onSelectSpecies,
  onOpenSpecies,
}: {
  readonly items: readonly Species[];
  readonly tree: TaxonomyTree;
  readonly activeItem?: Species;
  readonly branches?: readonly TaxonomyOverviewBranch[];
  readonly activeBranchKey?: string;
  readonly label: string;
  readonly theme: 'light' | 'dark';
  readonly showSelector?: boolean;
  readonly onSelectBranch?: (branchKey: string) => void;
  readonly onSelectSpecies: (item: Species) => void;
  readonly onOpenSpecies: (item: Species) => void;
}) {
  const leaf = activeItem
    ? collectSpeciesNodes(tree).find((node) => node.species.slug === activeItem.slug)
    : undefined;
  const diagram = useMemo(
    () => activeItem && leaf
      ? makeLineageDiagram(activeItem, leaf, 'vertical')
      : { nodes: [], edges: [] },
    [activeItem, leaf],
  );

  return (
    <div className="taxonomy-mobile-map">
      <div className="taxonomy-mobile-map__header">
        <p>{label}</p>
        <span>{activeItem?.names.zh ?? '暂无物种档案'}</span>
      </div>
      {branches && branches.length > 0 && activeBranchKey && onSelectBranch && (
        <label className="taxonomy-mobile-branch-select">
          <span>按纲浏览</span>
          <select
            value={activeBranchKey}
            onChange={(event) => onSelectBranch(event.currentTarget.value)}
          >
            {branches.map((branch) => (
              <option key={branch.key} value={branch.key}>
                {branch.node.taxon.zhName} · {branch.node.speciesCount} 份
              </option>
            ))}
          </select>
        </label>
      )}
      {showSelector && items.length > 0 && (
        <div className="taxonomy-mobile-species-tabs" role="group" aria-label="选择物种档案">
          {items.map((item) => (
            <button
              key={item.slug}
              type="button"
              className={item.slug === activeItem?.slug ? 'is-active' : ''}
              onClick={() => onSelectSpecies(item)}
              aria-pressed={item.slug === activeItem?.slug}
            >
              {item.names.zh}
            </button>
          ))}
        </div>
      )}
      <div className="taxonomy-mobile-map__diagram-scroll">
        {activeItem ? (
          <TaxonomyDiagram
            nodes={diagram.nodes}
            edges={diagram.edges}
            height={560}
            layout="mobile-path"
            theme={theme}
            activeSlug={activeItem.slug}
            ariaLabel={`${activeItem.names.zh}从界到种的纵向完整分类路径`}
            onOpenSpecies={onOpenSpecies}
          />
        ) : (
          <div className="taxonomy-explorer__empty">还没有可以呈现的物种档案。</div>
        )}
      </div>
      {activeItem && <p className="taxonomy-mobile-map__hint">点按路径末端的物种名称，打开完整档案。</p>}
    </div>
  );
}

function VariantA({ items, tree, theme, onOpenSpecies }: VariantProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasMountedOverviewRef = useRef(false);
  const collapsedOverview = useMemo(() => projectTaxonomyOverview(tree), [tree]);
  const initialSlug = items[0]?.slug ?? '';
  const initialBranchKey = collapsedOverview.branches.find((branch) =>
    branch.species.some((leaf) => leaf.species.slug === initialSlug),
  )?.key ?? collapsedOverview.branches[0]?.key ?? null;
  const scrollTargetBranchKeyRef = useRef<string | null>(initialBranchKey);
  const [expandedBranchKey, setExpandedBranchKey] = useState<string | null>(initialBranchKey);
  const [selectedSlug, setSelectedSlug] = useState(initialSlug);
  const [previewSlug, setPreviewSlug] = useState<string | undefined>(undefined);
  const overview = useMemo(
    () => projectTaxonomyOverview(tree, expandedBranchKey),
    [expandedBranchKey, tree],
  );
  const selectedItem = items.find((item) => item.slug === selectedSlug) ?? items[0];
  const activeItem = items.find((item) => item.slug === previewSlug) ?? selectedItem;
  const selectedBranch = overview.branches.find((branch) =>
    branch.species.some((leaf) => leaf.species.slug === selectedItem?.slug),
  ) ?? overview.branches[0];
  const mobileItems = selectedBranch?.species.map((leaf) => leaf.species) ?? [];
  const expandedBranch = overview.branches.find(
    (branch) => branch.key === overview.expandedBranchKey,
  );
  const diagram = useMemo(
    () => makeOverviewDiagram(tree, overview),
    [overview, tree],
  );
  const diagramHeight = Math.max(560, overview.rows.length * overviewRowPitch + 80);

  useEffect(() => {
    if (!hasMountedOverviewRef.current) {
      hasMountedOverviewRef.current = true;
      return undefined;
    }
    const targetBranchKey = scrollTargetBranchKeyRef.current;
    if (!targetBranchKey) return undefined;

    const animationFrame = window.requestAnimationFrame(() => {
      const scroller = scrollRef.current;
      if (!scroller) return;
      const summary = [...scroller.querySelectorAll<HTMLElement>('[data-taxonomy-branch]')]
        .find((element) => element.dataset.taxonomyBranch === targetBranchKey);
      if (!summary) return;

      const targetTop = summary.offsetTop + summary.offsetHeight / 2 - scroller.clientHeight / 2;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      scroller.scrollTo({
        top: Math.max(0, targetTop),
        behavior: reduceMotion ? 'auto' : 'smooth',
      });
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [expandedBranchKey]);

  const toggleBranch = (branchKey: string) => {
    const branch = overview.branches.find((candidate) => candidate.key === branchKey);
    if (!branch) return;

    const nextBranchKey = overview.expandedBranchKey === branchKey ? null : branchKey;
    if (
      nextBranchKey
      && !branch.species.some((leaf) => leaf.species.slug === selectedItem?.slug)
    ) {
      setSelectedSlug(branch.species[0]?.species.slug ?? '');
    }
    scrollTargetBranchKeyRef.current = branchKey;
    setPreviewSlug(undefined);
    setExpandedBranchKey(nextBranchKey);
  };

  const selectMobileBranch = (branchKey: string) => {
    const branch = overview.branches.find((candidate) => candidate.key === branchKey);
    if (!branch) return;
    scrollTargetBranchKeyRef.current = branchKey;
    setPreviewSlug(undefined);
    setSelectedSlug(branch.species[0]?.species.slug ?? '');
    setExpandedBranchKey(branchKey);
  };

  const selectSpecies = (item: Species) => {
    setPreviewSlug(undefined);
    setSelectedSlug(item.slug);
  };

  return (
    <section
      className="taxonomy-explorer taxonomy-explorer--overview"
      id="taxonomy"
      aria-labelledby="taxonomy-title"
      aria-describedby="taxonomy-description"
    >
      <header className="taxonomy-explorer__heading">
        <div>
          <p className="taxonomy-explorer__kicker">TAXONOMY MAP · 分类图谱</p>
          <h2 id="taxonomy-title">从动物界到物种档案，一眼看清归属路径。</h2>
        </div>
        <div className="taxonomy-explorer__introduction">
          <p id="taxonomy-description">
            按纲收起物种档案，一次展开一个分支；悬停可预览路径，点击可固定选择并在下方读取全部七阶归属。
          </p>
          <div className="taxonomy-explorer__legend" aria-label="图例">
            <span><i aria-hidden="true" />分类单元</span>
            <span><i aria-hidden="true" />物种档案</span>
            <span className="taxonomy-explorer__legend-fold"><i aria-hidden="true" />已折叠分支</span>
          </div>
        </div>
      </header>

      <div className="taxonomy-panel taxonomy-panel--overview taxonomy-desktop-map">
        <div className="taxonomy-panel__header">
          <div className="taxonomy-panel__header-copy">
            <p>COMPRESSED OVERVIEW · {String(items.length).padStart(2, '0')} PROFILES</p>
            <span className="taxonomy-panel__branch-status" aria-live="polite">
              {expandedBranch
                ? `${expandedBranch.node.taxon.zhName}已展开 · ${expandedBranch.node.speciesCount} 份`
                : `${overview.branches.length} 个纲分支均已收起`}
            </span>
          </div>
          <div className="taxonomy-panel__ranks" aria-hidden="true">
            <span>界</span><span>门</span><span>纲</span><span>目</span><span>科</span><span>属</span><span>种</span>
          </div>
        </div>
        {items.length > 0 ? (
          <>
            <div ref={scrollRef} className="taxonomy-panel__scroll">
              <TaxonomyDiagram
                nodes={diagram.nodes}
                edges={diagram.edges}
                height={diagramHeight}
                layout="overview"
                theme={theme}
                activeSlug={activeItem?.slug}
                selectedSlug={selectedItem?.slug}
                ariaLabel="按纲折叠、一次展开一个分支的分类图谱总览"
                onActivateSpecies={(item) => setPreviewSlug(item.slug)}
                onDeactivateSpecies={() => setPreviewSlug(undefined)}
                onSelectSpecies={selectSpecies}
                onToggleBranch={toggleBranch}
                onOpenSpecies={onOpenSpecies}
              />
            </div>
            {activeItem && (
              <CompletePath key={activeItem.slug} item={activeItem} onOpenSpecies={onOpenSpecies} />
            )}
          </>
        ) : (
          <div className="taxonomy-explorer__empty">还没有可以关联到分类图谱的物种档案。</div>
        )}
      </div>

      <MobileLineageMap
        items={mobileItems}
        tree={tree}
        activeItem={selectedItem}
        branches={overview.branches}
        activeBranchKey={selectedBranch?.key}
        label="MOBILE PATH · 选择物种档案"
        theme={theme}
        onSelectBranch={selectMobileBranch}
        onSelectSpecies={selectSpecies}
        onOpenSpecies={onOpenSpecies}
      />

      <DiagramDisclaimer />
      <AccessibleTaxonomyPaths items={items} />
      <p className="sr-only" aria-live="polite">
        {selectedItem ? `已选择${selectedItem.names.zh}，下方显示完整分类路径。` : ''}
      </p>
    </section>
  );
}

function VariantB({ items, tree, theme, onOpenSpecies }: VariantProps) {
  const [selectedSlug, setSelectedSlug] = useState(items[0]?.slug ?? '');
  const selectedItem = items.find((item) => item.slug === selectedSlug) ?? items[0];
  const selectedLeaf = selectedItem
    ? collectSpeciesNodes(tree).find((leaf) => leaf.species.slug === selectedItem.slug)
    : undefined;
  const diagram = useMemo(
    () => selectedItem && selectedLeaf
      ? makeLineageDiagram(selectedItem, selectedLeaf)
      : { nodes: [], edges: [] },
    [selectedItem, selectedLeaf],
  );

  return (
    <section
      className="taxonomy-explorer taxonomy-explorer--lineage"
      id="taxonomy"
      aria-labelledby="taxonomy-title"
      aria-describedby="taxonomy-description"
    >
      <header className="taxonomy-lineage__heading">
        <div>
          <p className="taxonomy-explorer__kicker">TAXONOMY MAP · 分类图谱</p>
          <h2 id="taxonomy-title">一次，只看清一条完整路径。</h2>
        </div>
        <p id="taxonomy-description">
          先选择一个物种档案，再沿七个等距阶元阅读它的完整分类归属。
        </p>
      </header>

      <div className="taxonomy-lineage__layout">
        <aside className="taxonomy-species-index" aria-label="选择物种档案">
          <div className="taxonomy-species-index__heading">
            <span>SPECIES INDEX</span>
            <strong>{String(items.length).padStart(2, '0')}</strong>
          </div>
          <div className="taxonomy-species-index__list">
            {items.map((item, index) => (
              <button
                key={item.slug}
                type="button"
                className={item.slug === selectedItem?.slug ? 'is-active' : ''}
                onClick={() => setSelectedSlug(item.slug)}
                aria-pressed={item.slug === selectedItem?.slug}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span><strong>{item.names.zh}</strong><i lang="la">{item.scientificName}</i></span>
              </button>
            ))}
          </div>
        </aside>

        <div className="taxonomy-lineage__panel">
          {selectedItem ? (
            <>
              <div className="taxonomy-lineage__identity">
                <div>
                  <span>SELECTED PROFILE · 当前档案</span>
                  <h3>{selectedItem.names.zh}</h3>
                  <i lang="la">{selectedItem.scientificName}</i>
                </div>
                <button type="button" onClick={() => onOpenSpecies(selectedItem)}>
                  查看档案 <ArrowUpRight size={16} />
                </button>
              </div>
              <div className="taxonomy-lineage__stage-scroll taxonomy-desktop-map">
                <TaxonomyDiagram
                  nodes={diagram.nodes}
                  edges={diagram.edges}
                  height={330}
                  layout="path"
                  theme={theme}
                  activeSlug={selectedItem.slug}
                  ariaLabel={`${selectedItem.names.zh}从界到种的完整分类路径`}
                  onOpenSpecies={onOpenSpecies}
                />
              </div>
              <MobileLineageMap
                items={items}
                tree={tree}
                activeItem={selectedItem}
                label="VERTICAL PATH · 完整七阶"
                theme={theme}
                showSelector={false}
                onSelectSpecies={(item) => setSelectedSlug(item.slug)}
                onOpenSpecies={onOpenSpecies}
              />
            </>
          ) : (
            <div className="taxonomy-explorer__empty">还没有可以呈现的物种档案。</div>
          )}
          <DiagramDisclaimer />
        </div>
      </div>

      <AccessibleTaxonomyPaths items={items} />
    </section>
  );
}

function VariantC({ items, tree, theme, onOpenSpecies }: VariantProps) {
  const classes = useMemo(
    () => collectTaxonNodes(tree).filter((node) => node.rank === 'class'),
    [tree],
  );
  const [activeClassKey, setActiveClassKey] = useState(classes[0]?.key ?? '');
  const activeClass = classes.find((node) => node.key === activeClassKey) ?? classes[0];
  const classLeaves = useMemo(
    () => activeClass ? collectSpeciesNodes(activeClass.children) : [],
    [activeClass],
  );
  const classItems = useMemo(() => classLeaves.map((leaf) => leaf.species), [classLeaves]);
  const [activeSlug, setActiveSlug] = useState(classLeaves[0]?.species.slug ?? '');
  const activeItem = classLeaves.find((leaf) => leaf.species.slug === activeSlug)?.species
    ?? classLeaves[0]?.species;
  const focusedTree = useMemo(
    () => buildTaxonomyTree(classItems),
    [classItems],
  );
  const focusedOverview = useMemo(() => {
    const collapsed = projectTaxonomyOverview(focusedTree);
    return projectTaxonomyOverview(focusedTree, collapsed.branches[0]?.key);
  }, [focusedTree]);
  const diagram = useMemo(
    () => makeOverviewDiagram(focusedTree, focusedOverview, { showSummaries: false }),
    [focusedOverview, focusedTree],
  );
  const diagramHeight = Math.max(300, classLeaves.length * 52 + 64);

  const selectClass = (node: TaxonomyTaxonNode) => {
    const firstLeaf = collectSpeciesNodes(node.children)[0];
    setActiveClassKey(node.key);
    setActiveSlug(firstLeaf?.species.slug ?? '');
  };

  return (
    <section
      className="taxonomy-explorer taxonomy-explorer--focus"
      id="taxonomy"
      aria-labelledby="taxonomy-title"
      aria-describedby="taxonomy-description"
    >
      <div className="taxonomy-focus__heading">
        <div>
          <p className="taxonomy-explorer__kicker">TAXONOMY LENS · 分类镜头</p>
          <h2 id="taxonomy-title">先按纲定位，再沿枝干认识物种。</h2>
        </div>
        <p id="taxonomy-description">
          每次只展开一组物种档案，让真实分叉保持清楚；虚线折叠的单一路径仍在图谱下方完整呈现。
        </p>
      </div>

      <div className="taxonomy-class-tabs" role="group" aria-label="按纲切换分类图谱">
        {classes.map((node) => (
          <button
            key={node.key}
            type="button"
            className={node.key === activeClass?.key ? 'is-active' : ''}
            onClick={() => selectClass(node)}
            aria-pressed={node.key === activeClass?.key}
          >
            <span>{node.taxon.zhName.replace(/纲$/, '')}</span>
            <small>已收录 {node.speciesCount}</small>
          </button>
        ))}
      </div>

      <MobileLineageMap
        items={classItems}
        tree={focusedTree}
        activeItem={activeItem}
        label={`${activeClass?.taxon.zhName ?? '当前纲'} · 选择物种`}
        theme={theme}
        onSelectSpecies={(item) => setActiveSlug(item.slug)}
        onOpenSpecies={onOpenSpecies}
      />

      <div className="taxonomy-focus__panel taxonomy-desktop-map">
        <div className="taxonomy-panel__header">
          <p>{activeClass?.taxon.scientificName.toUpperCase() ?? 'CLASS'} · FOCUSED VIEW</p>
          <span>{activeClass?.taxon.zhName ?? '分类单元'}</span>
        </div>
        {items.length > 0 ? (
          <>
            <div className="taxonomy-panel__scroll">
              <TaxonomyDiagram
                nodes={diagram.nodes}
                edges={diagram.edges}
                height={diagramHeight}
                layout="focus"
                theme={theme}
                activeSlug={activeItem?.slug}
                selectedSlug={activeItem?.slug}
                ariaLabel={`${activeClass?.taxon.zhName ?? '当前纲'}下保留真实分叉的分类图谱`}
                onActivateSpecies={(item) => setActiveSlug(item.slug)}
                onSelectSpecies={(item) => setActiveSlug(item.slug)}
                onOpenSpecies={onOpenSpecies}
              />
            </div>
            {activeItem && (
              <CompletePath item={activeItem} compact onOpenSpecies={onOpenSpecies} />
            )}
          </>
        ) : (
          <div className="taxonomy-explorer__empty">还没有可以关联到分类图谱的物种档案。</div>
        )}
      </div>

      <DiagramDisclaimer />
      <AccessibleTaxonomyPaths items={items} />
    </section>
  );
}

export function TaxonomyExplorer({ items, theme, onOpenSpecies }: TaxonomyExplorerProps) {
  const tree = useMemo(() => buildTaxonomyTree(items), [items]);
  const [variant, setVariant] = useState<PrototypeVariantKey>(readPrototypeVariant);

  useEffect(() => {
    if (!import.meta.env.DEV) return undefined;
    const syncVariant = () => setVariant(readPrototypeVariant());
    window.addEventListener('popstate', syncVariant);
    return () => window.removeEventListener('popstate', syncVariant);
  }, []);

  const changeVariant = useCallback((key: string) => {
    if (!isPrototypeVariantKey(key)) return;
    setVariant(key);
    if (!import.meta.env.DEV) return;

    const url = new URL(window.location.href);
    url.searchParams.set('variant', key);
    window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
  }, []);

  const props = { items, tree, theme, onOpenSpecies };

  return (
    <>
      {(!import.meta.env.DEV || variant === 'A') && <VariantA {...props} />}
      {import.meta.env.DEV && variant === 'B' && <VariantB {...props} />}
      {import.meta.env.DEV && variant === 'C' && <VariantC {...props} />}
      {import.meta.env.DEV && (
        <PrototypeSwitcher variants={prototypeVariants} current={variant} onChange={changeVariant} />
      )}
    </>
  );
}
