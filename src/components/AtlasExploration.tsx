import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { geoGraticule10, geoPath } from 'd3-geo';
import { ArrowLeft, ArrowUpRight, Compass, Globe2, MapPin, Maximize2, Minimize2, Minus, Plus, RotateCcw, Search } from 'lucide-react';
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

const mapViews = [
  { name: '全球', center: [0, 0], zoom: 1 },
  { name: '亚洲', center: [100, 30], zoom: 2 },
  { name: '非洲', center: [20, 0], zoom: 2 },
  { name: '欧洲', center: [20, 50], zoom: 4 },
  { name: '美洲', center: [-85, 10], zoom: 2 },
  { name: '大洋洲', center: [140, -25], zoom: 4 },
];
const realmNames = { terrestrial: '陆地', freshwater: '淡水', marine: '海洋' };
function coordinates(item: SpeciesSummary) {
  const point = item.distribution.center;
  return point && projectSpecies(item) ? `${Math.abs(point.lat).toFixed(1)}°${point.lat < 0 ? 'S' : 'N'} / ${Math.abs(point.lng).toFixed(1)}°${point.lng < 0 ? 'W' : 'E'}` : '暂无代表坐标';
}

function Geography({ items, onOpenSpecies }: Omit<Props, 'mode'>) {
  const gradientId = useId();
  const [viewName, setViewName] = useState('全球');
  const [hoverKey, setHoverKey] = useState<string>();
  const [isDragging, setIsDragging] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [clusterKey, setClusterKey] = useState<string>();
  const [selectedSlug, setSelectedSlug] = useState<string>();
  const drag = useRef<{ x: number; y: number; panX: number; panY: number; moved: boolean; active: boolean } | null>(null);
  const svg = useRef<SVGSVGElement>(null);
  const groups = useMemo(() => clusterSpecies(items, zoom), [items, zoom]);
  const hoveredGroup = groups.find((group) => group.key === hoverKey);
  const activeGroup = groups.find((group) => group.key === clusterKey);
  const list = activeGroup?.items ?? items;
  const selected = items.find((item) => item.slug === selectedSlug);
  const mappedCount = groups.reduce((sum, group) => sum + group.items.length, 0);
  const select = (item: SpeciesSummary) => {
    setSelectedSlug(item.slug); setHoverKey(undefined);
    const point = projectSpecies(item);
    if (point) {
      setViewName('物种定位');
      setPan({ x: (500 - point[0]) * zoom, y: (260 - point[1]) * zoom });
    }
  };
  const changeZoom = (next: number) => {
    const value = Math.max(1, Math.min(8, next));
    setPan((current) => value === 1 ? { x: 0, y: 0 } : { x: current.x * value / zoom, y: current.y * value / zoom });
    setZoom(value); setClusterKey(undefined); setHoverKey(undefined);
    if (value === 1) setViewName('全球');
  };
  const reset = () => { setZoom(1); setPan({ x: 0, y: 0 }); setClusterKey(undefined); setSelectedSlug(undefined); setHoverKey(undefined); setViewName('全球'); };
  const focusView = (view: typeof mapViews[number]) => {
    if (view.zoom === 1) { reset(); return; }
    const point = mapProjection(view.center as [number, number]);
    if (!point) return;
    setZoom(view.zoom); setPan({ x: (500 - point[0]) * view.zoom, y: (260 - point[1]) * view.zoom });
    setClusterKey(undefined); setSelectedSlug(undefined); setHoverKey(undefined); setViewName(view.name);
  };
  const activateGroup = (group: typeof groups[number]) => {
    setClusterKey(group.key); setSelectedSlug(group.items[0]?.slug); setHoverKey(undefined);
  };
  return <div className="exploration-geography">
    <nav className="exploration-regions" aria-label="地图区域定位">
      <span><Compass size={15} /> 快速定位</span>
      {mapViews.map((view) => <button type="button" key={view.name} aria-pressed={viewName === view.name} onClick={() => focusView(view)}>{view.name}</button>)}
    </nav>
    <div className="exploration-body">
      <div className={`exploration-map${isDragging ? ' is-dragging' : ''}`}>
        <div className="exploration-map__identity"><Globe2 size={20} /><div><strong>{viewName}</strong><span>代表点位 · {groups.length} 处</span></div></div>
        <div className="exploration-map__controls" role="group" aria-label="地图缩放">
          <button type="button" aria-label="放大地图" disabled={zoom === 8} onClick={() => changeZoom(zoom * 2)}><Plus size={18} /></button>
          <button type="button" aria-label="缩小地图" disabled={zoom === 1} onClick={() => changeZoom(zoom / 2)}><Minus size={18} /></button>
          <button type="button" aria-label="恢复世界地图" onClick={reset}><RotateCcw size={17} /></button>
          <span>{zoom}×</span>
        </div>
        <svg ref={svg} viewBox="0 0 1000 520" tabIndex={0} aria-label="动物代表分布点地图，可拖动地图并点击聚合点选择物种" onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          const directions: Record<string, [number, number]> = { ArrowLeft: [60, 0], ArrowRight: [-60, 0], ArrowUp: [0, 60], ArrowDown: [0, -60] };
          const offset = directions[event.key];
          if (offset && zoom > 1) {
            event.preventDefault(); setHoverKey(undefined); setViewName('自由探索');
            setPan((current) => ({ x: Math.max(-500 * zoom, Math.min(500 * zoom, current.x + offset[0])), y: Math.max(-260 * zoom, Math.min(260 * zoom, current.y + offset[1])) }));
          }
          if (event.key === '+' || event.key === '=') { event.preventDefault(); changeZoom(zoom * 2); }
          if (event.key === '-') { event.preventDefault(); changeZoom(zoom / 2); }
          if (event.key === 'Escape' && !event.currentTarget.closest('.is-fullscreen')) reset();
        }} onPointerDown={(event) => {
          if (event.button !== 0) return;
          drag.current = { x: event.clientX, y: event.clientY, panX: pan.x, panY: pan.y, moved: false, active: true };
        }} onPointerMove={(event) => {
          if (!drag.current?.active || zoom === 1) return;
          const dx = event.clientX - drag.current.x, dy = event.clientY - drag.current.y;
          if (Math.abs(dx) + Math.abs(dy) < 5 && !drag.current.moved) return;
          drag.current.moved = true; setIsDragging(true); setHoverKey(undefined); setViewName('自由探索');
          event.currentTarget.setPointerCapture(event.pointerId);
          const rect = event.currentTarget.getBoundingClientRect();
          const scale = Math.max(1000 / rect.width, 520 / rect.height);
          setPan({ x: Math.max(-500 * zoom, Math.min(500 * zoom, drag.current.panX + dx * scale)),
            y: Math.max(-260 * zoom, Math.min(260 * zoom, drag.current.panY + dy * scale)) });
        }} onPointerUp={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
          if (drag.current) drag.current.active = false;
          setIsDragging(false);
          // Keep the moved flag through the ensuing click so a drag never selects a point.
        }} onPointerCancel={() => { drag.current = null; setIsDragging(false); }}>
          <defs>
            <radialGradient id={gradientId}><stop offset="0%" stopColor="#254f50" /><stop offset="100%" stopColor="#102e35" /></radialGradient>
          </defs>
          <g className="exploration-map__surface" transform={`translate(${500 + pan.x} ${260 + pan.y}) scale(${zoom}) translate(-500 -260)`}>
            <path className="exploration-ocean" d={spherePath} style={{ fill: `url(#${gradientId})` }} />
            <path className="exploration-graticule" d={gridPath} />
            <path className="exploration-land" d={landPath} />
            {groups.map((group) => <g key={group.key} transform={`translate(${group.x} ${group.y}) scale(${1 / zoom})`}
              className={`exploration-marker${activeGroup?.key === group.key || group.items.some((item) => item.slug === selectedSlug) ? ' is-active' : ''}`}
              role="button" tabIndex={0} aria-pressed={activeGroup?.key === group.key || group.items.some((item) => item.slug === selectedSlug)}
              aria-label={`${group.items.length} 个物种：${group.items.slice(0, 3).map((item) => item.names.zh).join('、')}`}
              onPointerEnter={() => { if (!drag.current?.active) setHoverKey(group.key); }} onPointerLeave={() => setHoverKey(undefined)}
              onFocus={() => setHoverKey(group.key)} onBlur={() => setHoverKey(undefined)}
              onClick={() => { if (drag.current?.moved) return; activateGroup(group); }}
              onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activateGroup(group); } }}>
              <circle className="exploration-marker__halo" r={Math.min(29, 20 + Math.log2(group.items.length + 1) * 2)} />
              <circle className="exploration-marker__core" r={Math.min(21, 12 + Math.log2(group.items.length + 1) * 2)} />
              <text textAnchor="middle" dy=".35em">{group.items.length}</text>
            </g>)}
            {selected && projectSpecies(selected) && <g className="exploration-selected-point" transform={`translate(${projectSpecies(selected)!.join(' ')}) scale(${1 / zoom})`}>
              <circle r="26" /><circle r="5" />
            </g>}
          </g>
        </svg>
        {hoveredGroup && <div className="exploration-map__tooltip" role="status">
          <span><MapPin size={13} /> {hoveredGroup.items.length} 个物种 · 代表点位</span>
          <strong>{hoveredGroup.items.slice(0, 3).map((item) => item.names.zh).join('、')}{hoveredGroup.items.length > 3 ? '…' : ''}</strong>
          <small>{hoveredGroup.items[0]?.distribution.regions[0]} · 点按查看物种</small>
        </div>}
        <div className="exploration-map__legend"><span /> 代表点位 <span /> 已选物种</div>
        <p className="exploration-map__caption">{mappedCount} 个物种有代表坐标 · {items.length - mappedCount} 个物种暂未标点<br />点按数字查看物种 · 放大后拖动或用方向键移动</p>
      </div>
      <aside className="exploration-sidebar">
        <div className="exploration-sidebar__heading"><span>{activeGroup ? '点位内的物种' : '探索物种'} · {list.length}</span>
          {activeGroup && <button type="button" onClick={() => setClusterKey(undefined)}>查看全部</button>}</div>
        <div className="exploration-list">{list.map((item) => <button type="button" key={item.slug}
          aria-pressed={selected?.slug === item.slug} onClick={() => select(item)}>
          <span className="exploration-list__pin"><MapPin size={15} /></span>
          <span className="exploration-list__name">{item.names.zh}<i lang="la">{item.scientificName}</i><em>{projectSpecies(item) ? item.distribution.regions[0] : '暂无代表坐标'}</em></span>
          <ArrowUpRight size={14} className="exploration-list__arrow" />
        </button>)}</div>
        {selected ? <div className="exploration-field-note" key={selected.slug}>
          <div className="exploration-field-note__label"><MapPin size={13} /> 物种定位 <span>{coordinates(selected)}</span></div>
          <SpeciesPreview item={selected} onOpenSpecies={onOpenSpecies} />
          <div className="exploration-realm-tags">{selected.distribution.realms.map((realm) => <span key={realm}>{realmNames[realm]}</span>)}</div>
        </div> : <div className="exploration-map__invitation"><Compass size={28} /><strong>从一个点位开始</strong><p>悬停或聚焦数字预览物种，点按后查看地区与档案。</p></div>}
      </aside>
    </div>
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
  const workspace = useRef<HTMLDivElement>(null);
  const fullscreenButton = useRef<HTMLButtonElement>(null);
  const [fullscreenMode, setFullscreenMode] = useState<'native' | 'page'>();
  const [query, setQuery] = useState('');
  const [realm, setRealm] = useState('');
  const results = useMemo(() => searchExploration(items, query, realm), [items, query, realm]);
  const geography = mode === 'geography';
  useEffect(() => {
    const element = workspace.current;
    const syncFullscreen = () => {
      if (document.fullscreenElement === element) setFullscreenMode('native');
      else setFullscreenMode((current) => current === 'native' ? undefined : current);
    };
    document.addEventListener('fullscreenchange', syncFullscreen);
    return () => {
      document.removeEventListener('fullscreenchange', syncFullscreen);
      if (document.fullscreenElement === element) void document.exitFullscreen().catch(() => {});
    };
  }, []);
  useEffect(() => {
    if (fullscreenMode !== 'page') return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    fullscreenButton.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault(); event.stopPropagation(); setFullscreenMode(undefined);
        fullscreenButton.current?.focus();
      }
      if (event.key === 'Tab') {
        const controls = [...(workspace.current?.querySelectorAll<HTMLElement>('button:not(:disabled), input, select, [tabindex="0"]') ?? [])];
        const first = controls[0], last = controls.at(-1);
        if (event.shiftKey && (document.activeElement === first || !workspace.current?.contains(document.activeElement))) {
          event.preventDefault(); last?.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !workspace.current?.contains(document.activeElement))) {
          event.preventDefault(); first?.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKey, true);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey, true);
    };
  }, [fullscreenMode]);
  const exitFullscreen = async () => {
    if (document.fullscreenElement === workspace.current) await document.exitFullscreen();
    setFullscreenMode(undefined);
    fullscreenButton.current?.focus();
  };
  const toggleFullscreen = async () => {
    if (fullscreenMode) { await exitFullscreen(); return; }
    try {
      if (workspace.current?.requestFullscreen) await workspace.current.requestFullscreen();
      else setFullscreenMode('page');
    } catch {
      // Keep viewport expansion available when native fullscreen is unavailable.
      setFullscreenMode('page');
    }
  };
  const openSpecies = async (item: SpeciesSummary) => {
    if (fullscreenMode) await exitFullscreen();
    onOpenSpecies(item);
  };
  return <section className={`atlas-exploration${geography ? ' atlas-exploration--geography' : ''}`} aria-labelledby="exploration-title">
    <div ref={workspace} className={`exploration-workspace${fullscreenMode ? ' is-fullscreen' : ''}${fullscreenMode === 'page' ? ' is-page-fullscreen' : ''}`}
      role={fullscreenMode === 'page' ? 'dialog' : undefined} aria-modal={fullscreenMode === 'page' ? true : undefined}
      aria-labelledby={fullscreenMode === 'page' ? 'exploration-title' : undefined}>
      <header className="exploration-heading">
        <div><p>{geography ? 'GEOGRAPHIC ATLAS' : 'TAXONOMY MOSAIC'}</p><h2 id="exploration-title">{geography ? '沿着地图，认识动物' : '在一屏里，探索动物分类'}</h2></div>
        <div className="exploration-heading__actions">
          <span aria-live="polite">{results.length} / {items.length} 个物种</span>
          {geography && <button ref={fullscreenButton} type="button" className="exploration-fullscreen-button"
            aria-label={fullscreenMode ? '退出全屏展示' : '全屏展示地理分布'} aria-pressed={Boolean(fullscreenMode)}
            onClick={() => { void toggleFullscreen(); }}>
            {fullscreenMode ? <Minimize2 size={16} /> : <Maximize2 size={16} />}<span>{fullscreenMode ? '退出全屏' : '全屏展示'}</span>
          </button>}
        </div>
      </header>
      <div className="exploration-tools">
        <label><Search size={17} /><input aria-label="检索图谱中的动物、分类或地区" placeholder="搜索动物、分类或地区…" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
        <select aria-label="筛选生态环境" value={realm} onChange={(event) => setRealm(event.target.value)}>
          <option value="">全部生态环境</option><option value="terrestrial">陆地</option><option value="freshwater">淡水</option><option value="marine">海洋</option>
        </select>
        {(query || realm) && <button type="button" onClick={() => { setQuery(''); setRealm(''); }}>清除筛选</button>}
      </div>
      {results.length ? geography
        ? <Geography key={`${query}:${realm}`} items={results} onOpenSpecies={openSpecies} />
        : <CompactTaxonomy key={`${query}:${realm}`} items={results} onOpenSpecies={openSpecies} />
        : <div className="exploration-empty" role="status">没有找到匹配的动物。试试动物中文名、学名或地区名称。</div>}
      <footer className="exploration-footnote">{geography
        ? '点位仅表示档案的代表位置，不代表完整分布范围或野外观察记录。底图：Natural Earth。'
        : '点击色块逐级进入分类单元，面包屑可返回。面积表示本图册收录的物种数量；分类归属不表示亲缘远近。'}</footer>
    </div>
  </section>;
}
