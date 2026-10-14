import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { geoGraticule10, geoPath } from 'd3-geo';
import { ArrowLeft, ArrowUpRight, BookOpen, ChevronRight, Compass, Globe2, MapPin, Maximize2, Minimize2, Minus, Network, Plus, RotateCcw, Search } from 'lucide-react';
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

function nodeName(node: TaxonomyTreeNode) {
  return node.kind === 'taxon' ? node.taxon.zhName : node.species.names.zh;
}

function tileTone(node: TaxonomyTreeNode) {
  let hash = 0;
  for (const letter of node.key) hash = (hash * 31 + letter.charCodeAt(0)) >>> 0;
  return hash % 5;
}

function sampleSpecies(node: TaxonomyTreeNode, limit = 3): SpeciesSummary[] {
  if (node.kind === 'species') return [node.species];
  const samples: SpeciesSummary[] = [];
  for (const child of node.children) {
    samples.push(...sampleSpecies(child, limit - samples.length));
    if (samples.length >= limit) break;
  }
  return samples;
}

function CompactTaxonomy({ items, onOpenSpecies }: Omit<Props, 'mode'>) {
  const tree = useMemo(() => buildTaxonomyTree(items), [items]);
  const overviewKeys = tree.length === 1 ? [tree[0]!.key] : [];
  const [focusKeys, setFocusKeys] = useState<string[]>(() => overviewKeys);
  const [selectedSlug, setSelectedSlug] = useState<string>();
  const [previewKey, setPreviewKey] = useState<string>();
  const [size, setSize] = useState({ width: 800, height: 480 });
  const surface = useRef<HTMLDivElement | null>(null);
  const previousPath = useRef(focusKeys.join('/'));
  // Callback ref cleans up its observer when React detaches the surface.
  const measure = useCallback((element: HTMLDivElement | null) => {
    surface.current = element;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry) setSize({ width: Math.max(1, entry.contentRect.width), height: Math.max(1, entry.contentRect.height) });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const pathKey = focusKeys.join('/');
    if (previousPath.current !== pathKey) surface.current?.focus({ preventScroll: true });
    previousPath.current = pathKey;
  }, [focusKeys]);
  let children: readonly TaxonomyTreeNode[] = tree;
  const trail: TaxonomyTreeNode[] = [];
  for (const key of focusKeys) {
    const node = children.find((child) => child.key === key);
    if (!node || node.kind === 'species') break;
    trail.push(node); children = node.children;
  }
  const tiles = useMemo(() => layoutTaxonomyTiles(children, size.width, size.height), [children, size]);
  const selected = items.find((item) => item.slug === selectedSlug);
  const current = trail.at(-1);
  const currentCount = children.reduce((sum, node) => sum + node.speciesCount, 0);
  const preview = children.find((node) => node.key === previewKey);
  const previewSpecies = selected && (!preview || (preview.kind === 'species' && preview.species.slug === selected.slug)) ? selected : undefined;
  const navigate = (keys: string[]) => {
    setFocusKeys(keys); setSelectedSlug(undefined); setPreviewKey(undefined);
  };
  const activate = (node: TaxonomyTreeNode) => {
    if (node.kind === 'species') { setSelectedSlug(node.species.slug); setPreviewKey(node.key); }
    else navigate([...trail.map((entry) => entry.key), node.key]);
  };
  const inspect = (node: TaxonomyTreeNode) => { setPreviewKey(node.key); };
  return <div className="exploration-compact">
    <nav className="exploration-breadcrumb" aria-label="当前分类路径">
      <button type="button" onClick={() => navigate(overviewKeys)}>动物总览</button>
      {trail.map((node, index) => <button type="button" key={node.key}
        aria-current={index === trail.length - 1 ? 'location' : undefined}
        onClick={() => navigate(trail.slice(0, index + 1).map((entry) => entry.key))}>
        <ChevronRight size={12} aria-hidden="true" />{nodeName(node)}<small>{ranks[node.rank]}</small></button>)}
      <button type="button" disabled={trail.length <= overviewKeys.length} onClick={() => navigate(trail.slice(0, -1).map((node) => node.key))}><ArrowLeft size={14} /> 返回上一级</button>
    </nav>
    <div className="exploration-compact__context" aria-live="polite">
      <div><span className="exploration-compact__symbol"><Network size={22} /></span><div>
        <h3>{current ? nodeName(current) : '动物总览'}<small>{current ? ranks[current.rank] : '总览'}</small></h3>
        <p>{current?.kind === 'taxon' ? <i lang="la">{current.taxon.scientificName}</i> : '从这里开始，看看动物如何归类'}</p>
      </div></div>
      <span><strong>{currentCount}</strong> 个物种 <span aria-hidden="true">·</span> {children.length} 个{children.every((node) => node.kind === 'species') ? '物种档案' : '分类单元'}</span>
    </div>
    <div className="exploration-body">
      <div className="exploration-tiles" ref={measure} tabIndex={-1} aria-label="按已收录物种数量划分面积的分类总览">
        {tiles.map((tile) => {
          const node = tile.node;
          const isSelected = node.kind === 'species' && selectedSlug === node.species.slug;
          const small = tile.width < 110 || tile.height < 85;
          const tiny = tile.width < 64 || tile.height < 38;
          return <button type="button" key={node.key}
            className={`exploration-tile exploration-tile--${tileTone(node)}${small ? ' exploration-tile--small' : ''}${tiny ? ' exploration-tile--tiny' : ''}${previewKey === node.key ? ' is-highlighted' : ''}${isSelected ? ' is-selected' : ''}`}
            style={{ left: tile.x, top: tile.y, width: tile.width, height: tile.height }}
            aria-label={`${nodeName(node)}，${ranks[node.rank]}，${node.speciesCount} 个物种`}
            aria-pressed={node.kind === 'species' ? isSelected : undefined}
            title={`${nodeName(node)} · ${node.speciesCount} 个物种`}
            onPointerEnter={() => inspect(node)} onFocus={() => inspect(node)} onClick={() => activate(node)}>
            <span className="exploration-tile__top"><small>{ranks[node.rank]}</small><span>{node.speciesCount}<em> 个物种</em></span></span>
            <span className="exploration-tile__name"><strong>{nodeName(node)}</strong><i lang="la">{node.kind === 'taxon' ? node.taxon.scientificName : node.species.scientificName}</i></span>
            <span className="exploration-tile__action">{node.kind === 'taxon' ? '进去看看' : '认识这个物种'}<ArrowUpRight size={15} /></span>
            {node.kind === 'taxon' ? <Network className="exploration-tile__drawing" aria-hidden="true" /> : <BookOpen className="exploration-tile__drawing" aria-hidden="true" />}
          </button>;
        })}
      </div>
      <aside className="exploration-sidebar">
        <div className="exploration-sidebar__heading"><span>{children.every((node) => node.kind === 'species') ? '认识这些物种' : '选择一个分类单元'} <small>{children.length}</small></span><Network size={15} /></div>
        <div className="exploration-list">{children.map((node) => <button type="button" key={node.key}
          className={`${previewKey === node.key ? 'is-highlighted' : ''} exploration-compact__row--${tileTone(node)}`}
          aria-pressed={node.kind === 'species' ? selectedSlug === node.species.slug : undefined}
          onPointerEnter={() => inspect(node)} onFocus={() => inspect(node)} onClick={() => activate(node)}>
          <span className="exploration-compact__rank">{ranks[node.rank]}</span>
          <span className="exploration-compact__name">{nodeName(node)}<i lang="la">{node.kind === 'taxon' ? node.taxon.scientificName : node.species.scientificName}</i></span>
          <span className="exploration-compact__count">{node.speciesCount}<ChevronRight size={13} /></span>
        </button>)}</div>
        <div className="exploration-compact__preview">
          {previewSpecies ? <SpeciesPreview item={previewSpecies} onOpenSpecies={onOpenSpecies} /> : preview ? <div className="exploration-taxon-note" key={preview.key}>
            <span>{ranks[preview.rank]} · {preview.speciesCount} 个已收录物种</span>
            <strong>{nodeName(preview)}</strong>
            <p>{preview.kind === 'taxon' ? '你可以在这里认识' : '物种档案'}：{sampleSpecies(preview).map((item) => item.names.zh).join('、')}{preview.speciesCount > 3 ? '…' : ''}</p>
            <button type="button" onClick={() => activate(preview)}>{preview.kind === 'taxon' ? '探索这个分类单元' : '查看物种信息'}<ArrowUpRight size={14} /></button>
          </div> : <div className="exploration-compact__welcome"><BookOpen size={25} /><strong>挑一块色彩，进去看看</strong><p>大色块里收录了更多物种。悬停或聚焦色块先看介绍，再点按逐级探索。</p></div>}
        </div>
      </aside>
    </div>
    <p className="exploration-compact__hint"><span><span /> 色块面积对应已收录物种数量</span><span>小色块也可以从列表进入</span></p>
  </div>;
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
  return <section className={`atlas-exploration${geography ? ' atlas-exploration--geography' : ' atlas-exploration--compact'}`} aria-labelledby="exploration-title">
    <div ref={workspace} className={`exploration-workspace${fullscreenMode ? ' is-fullscreen' : ''}${fullscreenMode === 'page' ? ' is-page-fullscreen' : ''}`}
      role={fullscreenMode === 'page' ? 'dialog' : undefined} aria-modal={fullscreenMode === 'page' ? true : undefined}
      aria-labelledby={fullscreenMode === 'page' ? 'exploration-title' : undefined}>
      <header className="exploration-heading">
        <div><p>{geography ? 'GEOGRAPHIC ATLAS' : 'TAXONOMY MOSAIC'}</p><h2 id="exploration-title">{geography ? '沿着地图，认识动物' : '一屏看见动物的多样'}</h2></div>
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
