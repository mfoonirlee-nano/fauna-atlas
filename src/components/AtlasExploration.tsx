import { useCallback, useMemo, useRef, useState } from 'react';
import { geoGraticule10, geoPath } from 'd3-geo';
import { ArrowLeft, ArrowUpRight, Minus, Plus, RotateCcw, Search } from 'lucide-react';
import type { SpeciesSummary } from '../types/species';
import { buildTaxonomyTree, getSpeciesTaxonomyPath, type TaxonomyTreeNode } from '../domain/taxonomy';
import { clusterSpecies, layoutTaxonomyTiles, mapProjection, projectSpecies, searchExploration } from '../domain/atlas-exploration';
import landJson from '../data/maps/land.geojson?raw';
import './AtlasExploration.css';

const path = geoPath(mapProjection);
const landPath = path(JSON.parse(landJson)) ?? '';
const gridPath = path(geoGraticule10()) ?? '';
const spherePath = path({ type: 'Sphere' }) ?? '';
const ranks = { kingdom: '界', phylum: '门', class: '纲', order: '目', family: '科', genus: '属', species: '种' };

interface Props {
  readonly items: readonly SpeciesSummary[];
  readonly mode: 'geography' | 'compact';
  readonly onOpenSpecies: (item: SpeciesSummary) => void;
}

function SpeciesPreview({ item, onOpenSpecies }: { item?: SpeciesSummary; onOpenSpecies: Props['onOpenSpecies'] }) {
  if (!item) return <p className="exploration-preview">选择一个物种，查看地区和分类路径。</p>;
  return <div className="exploration-preview">
    <strong>{item.names.zh}</strong><i lang="la">{item.scientificName}</i>
    <p>{item.distribution.regions.join('、')}</p>
    <p className="exploration-preview__path">{getSpeciesTaxonomyPath(item).map((entry) => entry.taxon.zhName).join(' › ')}</p>
    <button type="button" onClick={() => onOpenSpecies(item)}>打开物种档案 <ArrowUpRight size={15} /></button>
  </div>;
}

function Geography({ items, onOpenSpecies }: Omit<Props, 'mode'>) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [clusterKey, setClusterKey] = useState<string>();
  const [selectedSlug, setSelectedSlug] = useState<string>();
  const drag = useRef<{ x: number; y: number; panX: number; panY: number; moved: boolean; active: boolean } | null>(null);
  const svg = useRef<SVGSVGElement>(null);
  const groups = useMemo(() => clusterSpecies(items, zoom), [items, zoom]);
  const activeGroup = groups.find((group) => group.key === clusterKey);
  const list = activeGroup?.items ?? items;
  const selected = items.find((item) => item.slug === selectedSlug);
  const mappedCount = groups.reduce((sum, group) => sum + group.items.length, 0);
  const select = (item: SpeciesSummary) => {
    setSelectedSlug(item.slug);
    const point = projectSpecies(item);
    if (point) setPan({ x: (500 - point[0]) * zoom, y: (260 - point[1]) * zoom });
  };
  const changeZoom = (next: number) => {
    const value = Math.max(1, Math.min(8, next));
    setPan((current) => value === 1 ? { x: 0, y: 0 } : { x: current.x * value / zoom, y: current.y * value / zoom });
    setZoom(value); setClusterKey(undefined);
  };
  const reset = () => { setZoom(1); setPan({ x: 0, y: 0 }); setClusterKey(undefined); };
  return <div className="exploration-body">
    <div className="exploration-map">
      <div className="exploration-map__controls" role="group" aria-label="地图缩放">
        <button type="button" aria-label="放大地图" disabled={zoom === 8} onClick={() => changeZoom(zoom * 2)}><Plus size={18} /></button>
        <button type="button" aria-label="缩小地图" disabled={zoom === 1} onClick={() => changeZoom(zoom / 2)}><Minus size={18} /></button>
        <button type="button" aria-label="恢复世界地图" onClick={reset}><RotateCcw size={17} /></button>
        <span>{zoom}×</span>
      </div>
      <svg ref={svg} viewBox="0 0 1000 520" aria-label="动物代表分布点地图，可拖动地图并点击聚合点选择物种" onPointerDown={(event) => {
        if (event.button !== 0) return;
        drag.current = { x: event.clientX, y: event.clientY, panX: pan.x, panY: pan.y, moved: false, active: true };
      }} onPointerMove={(event) => {
        if (!drag.current?.active || zoom === 1) return;
        const dx = event.clientX - drag.current.x, dy = event.clientY - drag.current.y;
        if (Math.abs(dx) + Math.abs(dy) < 5 && !drag.current.moved) return;
        drag.current.moved = true;
        event.currentTarget.setPointerCapture(event.pointerId);
        const rect = event.currentTarget.getBoundingClientRect();
        const scale = Math.max(1000 / rect.width, 520 / rect.height);
        setPan({ x: Math.max(-500 * zoom, Math.min(500 * zoom, drag.current.panX + dx * scale)),
          y: Math.max(-260 * zoom, Math.min(260 * zoom, drag.current.panY + dy * scale)) });
      }} onPointerUp={(event) => {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
        if (drag.current) drag.current.active = false;
        // Keep the moved flag through the ensuing click so a drag never selects a point.
      }} onPointerCancel={() => { drag.current = null; }}>
        <g transform={`translate(${500 + pan.x} ${260 + pan.y}) scale(${zoom}) translate(-500 -260)`}>
          <path className="exploration-ocean" d={spherePath} />
          <path className="exploration-graticule" d={gridPath} />
          <path className="exploration-land" d={landPath} />
          {groups.map((group) => <g key={group.key} transform={`translate(${group.x} ${group.y}) scale(${1 / zoom})`}
            className={`exploration-marker${activeGroup?.key === group.key ? ' is-active' : ''}`}
            role="button" tabIndex={0} aria-pressed={activeGroup?.key === group.key}
            aria-label={`${group.items.length} 个物种：${group.items.slice(0, 3).map((item) => item.names.zh).join('、')}`}
            onClick={() => { if (drag.current?.moved) return; setClusterKey(group.key); setSelectedSlug(group.items[0]?.slug); }}
            onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setClusterKey(group.key); setSelectedSlug(group.items[0]?.slug); } }}>
            <circle r={Math.min(21, 12 + Math.log2(group.items.length + 1) * 2)} />
            <text textAnchor="middle" dy=".35em">{group.items.length}</text>
          </g>)}
          {selected && projectSpecies(selected) && <g className="exploration-selected-point" transform={`translate(${projectSpecies(selected)!.join(' ')}) scale(${1 / zoom})`}>
            <circle r="26" /><circle r="5" />
          </g>}
        </g>
      </svg>
      <p className="exploration-map__caption">{mappedCount} 个物种有代表坐标 · {items.length - mappedCount} 个物种暂未标点<br />放大后拖动地图；点按数字，浏览该处的物种。</p>
    </div>
    <aside className="exploration-sidebar">
      <div className="exploration-sidebar__heading"><span>{activeGroup ? '选中点位' : '搜索结果'} · {list.length}</span>
        {activeGroup && <button type="button" onClick={() => setClusterKey(undefined)}>查看全部</button>}</div>
      <div className="exploration-list">{list.map((item) => <button type="button" key={item.slug}
        aria-pressed={selected?.slug === item.slug} onClick={() => select(item)}>
        <span>{item.names.zh}<i lang="la">{item.scientificName}</i></span>
        <small>{projectSpecies(item) ? item.distribution.regions[0] : '暂无代表坐标'}</small>
      </button>)}</div>
      <SpeciesPreview item={selected} onOpenSpecies={onOpenSpecies} />
    </aside>
  </div>;
}

function CompactTaxonomy({ items, onOpenSpecies }: Omit<Props, 'mode'>) {
  const tree = useMemo(() => buildTaxonomyTree(items), [items]);
  const overviewKeys = tree.length === 1 ? [tree[0]!.key] : [];
  const [focusKeys, setFocusKeys] = useState<string[]>(() => overviewKeys);
  const [selectedSlug, setSelectedSlug] = useState<string>();
  const [size, setSize] = useState({ width: 800, height: 480 });
  // Callback ref cleans up its observer when React detaches the surface.
  const measure = useCallback((element: HTMLDivElement | null) => {
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry) setSize({ width: Math.max(1, entry.contentRect.width), height: Math.max(1, entry.contentRect.height) });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  let children: readonly TaxonomyTreeNode[] = tree;
  const trail: TaxonomyTreeNode[] = [];
  for (const key of focusKeys) {
    const node = children.find((child) => child.key === key);
    if (!node || node.kind === 'species') break;
    trail.push(node); children = node.children;
  }
  const tiles = useMemo(() => layoutTaxonomyTiles(children, size.width, size.height), [children, size]);
  const selected = items.find((item) => item.slug === selectedSlug);
  const activate = (node: TaxonomyTreeNode) => {
    if (node.kind === 'species') setSelectedSlug(node.species.slug);
    else { setFocusKeys([...trail.map((entry) => entry.key), node.key]); setSelectedSlug(undefined); }
  };
  return <>
    <nav className="exploration-breadcrumb" aria-label="当前分类路径">
      <button type="button" onClick={() => { setFocusKeys(overviewKeys); setSelectedSlug(undefined); }}>动物总览</button>
      {trail.map((node, index) => <button type="button" key={node.key} onClick={() => setFocusKeys(trail.slice(0, index + 1).map((entry) => entry.key))}>
        <span aria-hidden="true">› </span>{node.kind === 'taxon' ? node.taxon.zhName : ''}</button>)}
      <button type="button" disabled={trail.length <= overviewKeys.length} onClick={() => setFocusKeys(trail.slice(0, -1).map((node) => node.key))}><ArrowLeft size={14} /> 返回上一级</button>
    </nav>
    <div className="exploration-body">
      <div className="exploration-tiles" ref={measure} aria-label="按已收录物种数量划分面积的分类总览">
        {tiles.map((tile, index) => <button type="button" key={tile.node.key}
          className={`exploration-tile exploration-tile--${index % 5}${tile.width < 72 || tile.height < 54 ? ' exploration-tile--small' : ''}`}
          style={{ left: tile.x, top: tile.y, width: tile.width, height: tile.height }}
          aria-label={`${tile.node.kind === 'taxon' ? tile.node.taxon.zhName : tile.node.species.names.zh}，${ranks[tile.node.rank]}，${tile.node.speciesCount} 个物种`}
          title={tile.node.kind === 'taxon' ? tile.node.taxon.zhName : tile.node.species.names.zh}
          onClick={() => activate(tile.node)}>
          <small>{ranks[tile.node.rank]} · {tile.node.speciesCount}</small>
          <strong>{tile.node.kind === 'taxon' ? tile.node.taxon.zhName : tile.node.species.names.zh}</strong>
          <i lang="la">{tile.node.kind === 'taxon' ? tile.node.taxon.scientificName : tile.node.species.scientificName}</i>
        </button>)}
      </div>
      <aside className="exploration-sidebar">
        <div className="exploration-sidebar__heading"><span>当前分类单元 · {children.length}</span></div>
        <div className="exploration-list">{children.map((node) => <button type="button" key={node.key} onClick={() => activate(node)}>
          <span>{node.kind === 'taxon' ? node.taxon.zhName : node.species.names.zh}
            <i lang="la">{node.kind === 'taxon' ? node.taxon.scientificName : node.species.scientificName}</i></span>
          <small>{ranks[node.rank]} · {node.speciesCount}</small>
        </button>)}</div>
        <SpeciesPreview item={selected} onOpenSpecies={onOpenSpecies} />
      </aside>
    </div>
  </>;
}

export function AtlasExploration({ items, mode, onOpenSpecies }: Props) {
  const [query, setQuery] = useState('');
  const [realm, setRealm] = useState('');
  const results = useMemo(() => searchExploration(items, query, realm), [items, query, realm]);
  const geography = mode === 'geography';
  return <section className="atlas-exploration" aria-labelledby="exploration-title">
    <div className="exploration-workspace">
      <header className="exploration-heading">
        <div><p>{geography ? 'GEOGRAPHIC ATLAS' : 'TAXONOMY MOSAIC'}</p><h2 id="exploration-title">{geography ? '沿着地图，认识动物' : '在一屏里，探索动物分类'}</h2></div>
        <span aria-live="polite">{results.length} / {items.length} 个物种</span>
      </header>
      <div className="exploration-tools">
        <label><Search size={17} /><input aria-label="检索图谱中的动物、分类或地区" placeholder="搜索动物、分类或地区…" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
        <select aria-label="筛选生态环境" value={realm} onChange={(event) => setRealm(event.target.value)}>
          <option value="">全部生态环境</option><option value="terrestrial">陆地</option><option value="freshwater">淡水</option><option value="marine">海洋</option>
        </select>
        {(query || realm) && <button type="button" onClick={() => { setQuery(''); setRealm(''); }}>清除筛选</button>}
      </div>
      {results.length ? geography
        ? <Geography key={`${query}:${realm}`} items={results} onOpenSpecies={onOpenSpecies} />
        : <CompactTaxonomy key={`${query}:${realm}`} items={results} onOpenSpecies={onOpenSpecies} />
        : <div className="exploration-empty" role="status">没有找到匹配的动物。试试动物中文名、学名或地区名称。</div>}
      <footer className="exploration-footnote">{geography
        ? '点位仅表示档案的代表位置，不代表完整分布范围或野外观察记录。底图：Natural Earth。'
        : '点击色块逐级进入分类单元，面包屑可返回。面积表示本图册收录的物种数量；分类归属不表示亲缘远近。'}</footer>
    </div>
  </section>;
}
