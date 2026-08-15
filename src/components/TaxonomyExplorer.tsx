import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { useMemo } from 'react';
import {
  buildTaxonomyTree,
  type TaxonomyRank,
  type TaxonomyTaxonNode,
  type TaxonomyTreeNode,
} from '../domain/taxonomy';
import type { Species } from '../types';
import './TaxonomyExplorer.css';

interface TaxonomyExplorerProps {
  readonly items: readonly Species[];
  readonly onOpenSpecies: (item: Species) => void;
}

type DisplayRank = TaxonomyRank | 'species';

const rankLabels: Record<DisplayRank, { readonly zh: string; readonly en: string }> = {
  kingdom: { zh: '界', en: 'Kingdom' },
  phylum: { zh: '门', en: 'Phylum' },
  class: { zh: '纲', en: 'Class' },
  order: { zh: '目', en: 'Order' },
  family: { zh: '科', en: 'Family' },
  genus: { zh: '属', en: 'Genus' },
  species: { zh: '种', en: 'Species' },
};

function countTaxonNodes(nodes: readonly TaxonomyTreeNode[]): number {
  return nodes.reduce(
    (count, node) =>
      node.kind === 'taxon' ? count + 1 + countTaxonNodes(node.children) : count,
    0,
  );
}

function SpeciesLeaf({
  node,
  onOpenSpecies,
}: {
  readonly node: Extract<TaxonomyTreeNode, { readonly kind: 'species' }>;
  readonly onOpenSpecies: (item: Species) => void;
}) {
  const { species: item } = node;
  const rank = rankLabels.species;

  return (
    <li className="taxonomy-tree__item taxonomy-tree__item--species">
      <button
        className="taxonomy-species"
        type="button"
        onClick={() => onOpenSpecies(item)}
        aria-label={`打开${item.names.zh}（${item.scientificName}）物种档案`}
      >
        <span className="taxonomy-node__marker" aria-hidden="true" />
        <span className="taxonomy-node__rank">
          <span>{rank.zh}</span>
          <small>{rank.en}</small>
        </span>
        <span className="taxonomy-node__name">
          <strong>{item.names.zh}</strong>
          <i lang="la">{item.scientificName}</i>
        </span>
        <span className="taxonomy-species__action" aria-hidden="true">
          查看档案
          <ArrowUpRight size={16} strokeWidth={1.7} />
        </span>
      </button>
    </li>
  );
}

function TaxonBranch({
  node,
  onOpenSpecies,
}: {
  readonly node: TaxonomyTaxonNode;
  readonly onOpenSpecies: (item: Species) => void;
}) {
  const rank = rankLabels[node.rank];
  const startsOpen = node.rank === 'kingdom' || node.rank === 'phylum';

  return (
    <li className={`taxonomy-tree__item taxonomy-tree__item--${node.rank}`}>
      <details className="taxonomy-branch" open={startsOpen}>
        <summary className="taxonomy-node">
          <span className="taxonomy-node__toggle" aria-hidden="true">
            <ChevronRight size={17} strokeWidth={1.8} />
          </span>
          <span className="taxonomy-node__rank">
            <span>{rank.zh}</span>
            <small>{rank.en}</small>
          </span>
          <span className="taxonomy-node__name">
            <strong>{node.taxon.zhName}</strong>
            <i lang="la">{node.taxon.scientificName}</i>
          </span>
          <span
            className="taxonomy-node__count"
            aria-label={`${node.speciesCount} 个后代物种`}
          >
            <strong>{String(node.speciesCount).padStart(2, '0')}</strong>
            <small>种</small>
          </span>
        </summary>

        <ul className="taxonomy-tree__children">
          {node.children.map((child) =>
            child.kind === 'taxon' ? (
              <TaxonBranch key={child.key} node={child} onOpenSpecies={onOpenSpecies} />
            ) : (
              <SpeciesLeaf key={child.key} node={child} onOpenSpecies={onOpenSpecies} />
            ),
          )}
        </ul>
      </details>
    </li>
  );
}

export function TaxonomyExplorer({ items, onOpenSpecies }: TaxonomyExplorerProps) {
  const tree = useMemo(() => buildTaxonomyTree(items), [items]);
  const taxonCount = countTaxonNodes(tree);

  return (
    <section
      className="taxonomy-explorer"
      id="taxonomy"
      aria-labelledby="taxonomy-title"
      aria-describedby="taxonomy-description"
    >
      <header className="taxonomy-explorer__heading">
        <div>
          <p className="taxonomy-explorer__kicker">TAXONOMY MAP · 分类图谱</p>
          <h2 id="taxonomy-title">沿着分类的枝干，认识每一种动物。</h2>
        </div>
        <div className="taxonomy-explorer__introduction">
          <p id="taxonomy-description">
            从界到种，逐级展开分类关系；点击物种名称，可以继续阅读它的完整档案。
          </p>
          <dl className="taxonomy-explorer__stats">
            <div>
              <dt>已关联物种</dt>
              <dd>{String(items.length).padStart(2, '0')}</dd>
            </div>
            <div>
              <dt>分类单元</dt>
              <dd>{String(taxonCount).padStart(2, '0')}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="taxonomy-explorer__canvas">
        <div className="taxonomy-explorer__canvas-header">
          <p>CLASSIFICATION INDEX · {String(items.length).padStart(2, '0')} SPECIES</p>
          <div className="taxonomy-explorer__legend" aria-label="图例">
            <span><i aria-hidden="true" />分类单元</span>
            <span><i aria-hidden="true" />物种档案</span>
          </div>
        </div>

        {tree.length > 0 ? (
          <ul className="taxonomy-tree">
            {tree.map((node) => (
              <TaxonBranch key={node.key} node={node} onOpenSpecies={onOpenSpecies} />
            ))}
          </ul>
        ) : (
          <div className="taxonomy-explorer__empty">
            <span aria-hidden="true">∅</span>
            <p>还没有可以关联到分类图谱的物种。</p>
          </div>
        )}
      </div>
    </section>
  );
}
