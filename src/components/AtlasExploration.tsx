import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight, BookOpen, ChevronRight, Compass, Focus, Globe2, MapPin, Maximize2, Minimize2, Minus, Plus, RotateCcw, Search } from 'lucide-react';
import type { SpeciesSummary } from '../types/species';
import { buildTaxonomyTree, getSpeciesTaxonomyPath, type TaxonomyTreeNode } from '../domain/taxonomy';
import { clusterSpecies, mapProjection, projectSpecies, searchExploration } from '../domain/atlas-exploration';
import { useMapCamera } from '../hooks/useMapCamera';
import { fitMapPoints, mapPoint, worldCamera, type MapCamera } from '../domain/map-camera';
import { AtlasImage } from './AtlasImage';
import { CanvasMap } from './CanvasMap';
import { hitMapGroup } from './canvas-map-renderer';
import './AtlasExploration.css';

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
  const helpId = useId();
  const [viewName, setViewName] = useState('全球');
  const [hoverKey, setHoverKey] = useState<string>();
  const controller = useMapCamera();
  const { surface, camera, interacting, moveTo, zoomTo, current: cameraRef } = controller;
  const { zoom } = camera;
  const speciesList = useRef<HTMLDivElement>(null);
  const [pointSlugs, setPointSlugs] = useState<readonly string[]>();
  const [selectedSlug, setSelectedSlug] = useState<string>();
  // Recluster only at fixed zoom levels; continuous gestures keep marker identities stable.
  const clusterZoom = 2 ** Math.floor(Math.log2(zoom * controller.viewportScale));
  const groups = useMemo(() => clusterSpecies(items, clusterZoom), [items, clusterZoom]);
  const pickGroup = (event: { clientX: number; clientY: number }) => {
    const rect = surface.current?.getBoundingClientRect();
    if (!rect || !rect.width || !rect.height) return;
    return hitMapGroup({ x: event.clientX - rect.left, y: event.clientY - rect.top }, {
      camera: cameraRef.current, viewport: { width: rect.width, height: rect.height }, groups,
    });
  };
  const pressedGroup = useRef<typeof groups[number] | undefined>(undefined);
  const lastTapOnMarker = useRef(false);
  const hoveredGroup = groups.find((group) => group.key === hoverKey);
  const pointSet = useMemo(() => new Set(pointSlugs), [pointSlugs]);
  const list = useMemo(() => pointSlugs ? items.filter((item) => pointSet.has(item.slug)) : items, [items, pointSlugs, pointSet]);
  const selected = items.find((item) => item.slug === selectedSlug);
  const mappedCount = useMemo(() => groups.reduce((sum, group) => sum + group.items.length, 0), [groups]);
  const selectedPoint = selected && projectSpecies(selected);
  const navigate = useCallback((next: MapCamera, name = '自由探索') => {
    setHoverKey(undefined); setViewName(name); moveTo(next);
  }, [moveTo]);
  const select = useCallback((item: SpeciesSummary) => {
    setSelectedSlug(item.slug); setHoverKey(undefined);
    const point = projectSpecies(item);
    if (point) {
      const nextZoom = Math.max(2, cameraRef.current.zoom);
      navigate({ zoom: nextZoom, x: (500 - point[0]) * nextZoom, y: (260 - point[1]) * nextZoom }, '物种定位');
    }
  }, [cameraRef, navigate]);
  const changeZoom = (next: number) => {
    setHoverKey(undefined); setViewName(next <= 1 ? '全球' : '自由探索'); zoomTo(next);
  };
  const reset = () => {
    navigate(worldCamera, '全球'); setPointSlugs(undefined); setSelectedSlug(undefined);
  };
  const focusView = (view: typeof mapViews[number]) => {
    if (view.zoom === 1) { reset(); return; }
    const point = mapProjection(view.center as [number, number]);
    if (!point) return;
    navigate({ zoom: view.zoom, x: (500 - point[0]) * view.zoom, y: (260 - point[1]) * view.zoom }, view.name);
  };
  const activateGroup = useCallback((group: typeof groups[number]) => {
    setPointSlugs(group.items.map((item) => item.slug)); setHoverKey(undefined);
    setSelectedSlug(group.items.length === 1 ? group.items[0]?.slug : undefined);
  }, []);
  const fitItems = (values: readonly SpeciesSummary[], maxZoom = 8) => {
    const points = values.flatMap((item) => { const point = projectSpecies(item); return point ? [{ x: point[0], y: point[1] }] : []; });
    const next = fitMapPoints(points, maxZoom);
    if (next) navigate(next, '结果定位');
  };
  // Filtering updates the catalogue without destroying the camera or gesture listeners.
  useEffect(() => {
    setPointSlugs(undefined); setSelectedSlug(undefined); setHoverKey(undefined);
    pressedGroup.current = undefined;
    setViewName(cameraRef.current.zoom <= 1 ? '全球' : '自由探索');
    moveTo(cameraRef.current, false);
  }, [items, cameraRef, moveTo]);
  useEffect(() => {
    if (interacting) { setHoverKey(undefined); setViewName('自由探索'); }
  }, [interacting]);
  useEffect(() => {
    const list = speciesList.current;
    if (!list) return;
    const row = list.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (!row) { list.scrollTop = 0; return; }
    const top = row.getBoundingClientRect().top - list.getBoundingClientRect().top + list.scrollTop;
    if (top < list.scrollTop) list.scrollTop = top;
    else if (top + row.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTop = top + row.offsetHeight - list.clientHeight;
  }, [selectedSlug, pointSlugs]);
  // Camera frames should not rebuild the full species list.
  const rows = useMemo(() => list.map((item) => <button type="button" key={item.slug}
    className={pointSlugs ? 'exploration-species-card' : undefined}
    aria-pressed={selectedSlug === item.slug} onClick={() => select(item)}>
    {pointSlugs ? <span className="exploration-species-card__cover">
      {item.media.image
        ? <AtlasImage src={item.media.image} alt={item.media.alt || `${item.names.zh}封面`} loading="lazy" decoding="async" />
        : <span className="exploration-species-card__missing"><BookOpen size={24} /><span>暂无封面</span></span>}
    </span> : <span className="exploration-list__pin"><MapPin size={15} /></span>}
    <span className="exploration-list__name">{pointSlugs ? <strong>{item.names.zh}</strong> : item.names.zh}<i lang="la">{item.scientificName}</i><em>{projectSpecies(item) ? item.distribution.regions[0] : '暂无代表坐标'}</em></span>
    <ArrowUpRight size={14} className="exploration-list__arrow" />
  </button>), [list, selectedSlug, select, pointSlugs]);
  const markers = useMemo(() => groups.map((group) => <button type="button" key={group.key}
    data-cluster-key={group.key}
    className={`exploration-marker${group.items.some((item) => item.slug === selectedSlug || pointSet.has(item.slug)) ? ' is-active' : ''}`}
    tabIndex={0} aria-pressed={group.items.some((item) => item.slug === selectedSlug || pointSet.has(item.slug))}
    aria-label={`${group.items.length} 个物种：${group.items.slice(0, 3).map((item) => item.names.zh).join('、')}`}
    onPointerEnter={() => { if (!controller.contacts.current.size) setHoverKey(group.key); }} onPointerLeave={() => setHoverKey(undefined)}
    onFocus={() => {
      const current = cameraRef.current;
      const x = 500 + current.x + (group.x - 500) * current.zoom;
      const y = 260 + current.y + (group.y - 260) * current.zoom;
      if (x < 30 || x > 970 || y < 30 || y > 490) {
        navigate({ zoom: current.zoom, x: (500 - group.x) * current.zoom, y: (260 - group.y) * current.zoom });
      }
      setHoverKey(group.key);
    }} onBlur={() => setHoverKey(undefined)}
    onClick={(event) => {
      event.stopPropagation();
      if (event.detail > 0 && controller.suppressClick.current) return;
      activateGroup(group);
    }}
    onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopPropagation(); activateGroup(group); } }}>
    {group.items.length} 个物种：{group.items.slice(0, 3).map((item) => item.names.zh).join('、')}
  </button>), [groups, selectedSlug, pointSet, controller.contacts, activateGroup, cameraRef, navigate]);

  return <div className="exploration-geography">
    <nav className="exploration-regions" aria-label="地图区域定位">
      <span><Compass size={15} /> 快速定位</span>
      {mapViews.map((view) => <button type="button" key={view.name} aria-pressed={viewName === view.name} onClick={() => focusView(view)}>{view.name}</button>)}
    </nav>
    <div className="exploration-map-actions">
      <span>{items.length} 个匹配物种 · {mappedCount} 个可定位</span>
      <button type="button" disabled={!mappedCount} onClick={() => fitItems(items, 4)}><Focus size={15} />定位全部结果</button>
      {pointSlugs && list.length > 1 && <button type="button" onClick={() => fitItems(list)}><Plus size={15} />展开所选点位</button>}
    </div>
    <div className="exploration-body">
      <div className={`exploration-map${interacting ? ' is-dragging' : ''}`}>
        <div className="exploration-map__toolbar">
          <div className="exploration-map__identity"><Globe2 size={20} /><div><strong>{viewName}</strong><span>代表点位 · {groups.length} 处</span></div></div>
          <div className="exploration-map__controls" role="group" aria-label="地图缩放">
            <button type="button" aria-label="放大地图" disabled={zoom >= 8} onClick={() => changeZoom(controller.destination.current.zoom * 2)}><Plus size={18} /></button>
            <button type="button" aria-label="缩小地图" disabled={zoom <= 1} onClick={() => changeZoom(controller.destination.current.zoom / 2)}><Minus size={18} /></button>
            <button type="button" aria-label="恢复世界地图" onClick={reset}><RotateCcw size={17} /></button>
            <span>{Number(zoom.toFixed(1))}×</span>
          </div>
        </div>
        <div ref={surface} className={`exploration-map__surface${hoverKey ? ' is-hovering' : ''}`} tabIndex={0}
          role="group" aria-label="动物代表分布点地图，可拖动地图并点击聚合点选择物种" aria-describedby={`${helpId}-help`}
          {...controller.pointerHandlers}
          onPointerDown={(event) => {
            if (!controller.contacts.current.size) {
              const key = (event.target as Element).closest('.exploration-marker')?.getAttribute('data-cluster-key');
              pressedGroup.current = groups.find((group) => group.key === key) ?? pickGroup(event);
            }
            controller.pointerHandlers.onPointerDown(event);
          }}
          onPointerMove={(event) => {
            controller.pointerHandlers.onPointerMove(event);
            if (!controller.contacts.current.size && event.pointerType !== 'touch') setHoverKey(pickGroup(event)?.key);
          }}
          onPointerLeave={() => { if (!controller.contacts.current.size) setHoverKey(undefined); }}
          onDoubleClick={(event) => {
            if ((event.target as Element).closest('.exploration-marker') || pickGroup(event) || (event.detail > 0 && lastTapOnMarker.current)) return;
            event.preventDefault(); setHoverKey(undefined); setViewName('自由探索');
            zoomTo(controller.current.current.zoom * (event.shiftKey ? .5 : 2), mapPoint({ x: event.clientX, y: event.clientY }, event.currentTarget.getBoundingClientRect()));
          }}
          onClick={(event) => {
            if (event.detail > 0 && controller.suppressClick.current) { pressedGroup.current = undefined; return; }
            const key = (event.target as Element).closest('.exploration-marker')?.getAttribute('data-cluster-key');
            const group = groups.find((entry) => entry.key === key) ?? (event.detail > 0 ? pressedGroup.current ?? pickGroup(event) : undefined);
            pressedGroup.current = undefined;
            lastTapOnMarker.current = Boolean(group);
            if (group) { activateGroup(group); return; }
            setPointSlugs(undefined); setSelectedSlug(undefined); setHoverKey(undefined);
          }}
          onKeyDown={(event) => {
            const directions: Record<string, [number, number]> = { ArrowLeft: [60, 0], ArrowRight: [-60, 0], ArrowUp: [0, 60], ArrowDown: [0, -60] };
            const offset = directions[event.key], current = controller.current.current;
            if (offset || ['+', '=', '-', 'Home', 'Escape'].includes(event.key)) event.currentTarget.focus({ preventScroll: true });
            if (offset) { event.preventDefault(); navigate({ ...current, x: current.x + offset[0], y: current.y + offset[1] }); }
            if (event.key === '+' || event.key === '=') { event.preventDefault(); changeZoom(controller.destination.current.zoom * 2); }
            if (event.key === '-') { event.preventDefault(); changeZoom(controller.destination.current.zoom / 2); }
            if (event.key === 'Home' || (event.key === 'Escape' && !event.currentTarget.closest('.is-fullscreen'))) { event.preventDefault(); reset(); }
          }}>
          <CanvasMap controller={controller} scene={{ groups, activeSlugs: new Set([...pointSet, ...(selectedSlug ? [selectedSlug] : [])]), hoverKey, selectedPoint }}>
            {markers}
          </CanvasMap>
        </div>
        {hoveredGroup && !interacting && <div className="exploration-map__tooltip" role="status">
          <span><MapPin size={13} /> {hoveredGroup.items.length} 个物种 · 代表点位</span>
          <strong>{hoveredGroup.items.slice(0, 3).map((item) => item.names.zh).join('、')}{hoveredGroup.items.length > 3 ? '…' : ''}</strong>
          <small>{hoveredGroup.items[0]?.distribution.regions[0]} · 点按查看物种</small>
        </div>}
        <div className="exploration-map__footer">
          <div className="exploration-map__legend"><span /> 代表点位 <span /> 已选物种</div>
          <p id={`${helpId}-help`} className="exploration-map__caption">{mappedCount} 个物种有代表坐标 · {items.length - mappedCount} 个物种暂未标点<br />点按标记查看物种 · 点击地图后滚轮缩放 · 双指缩放 / 拖动 · 方向键平移 / + − 缩放</p>
        </div>
      </div>
      <aside className={`exploration-sidebar${pointSlugs ? ' is-point-selection' : ''}`} aria-label="地图物种列表">
        <div className="exploration-sidebar__heading"><span>{pointSlugs ? '点位内的物种' : '探索物种'} · {list.length}</span>
          {pointSlugs && <button type="button" onClick={() => setPointSlugs(undefined)}>查看全部</button>}</div>
        <div className={`exploration-list${pointSlugs ? ' exploration-species-grid' : ''}`} ref={speciesList}>{rows}
          {!list.length && <p className="exploration-empty" role="status">没有找到匹配的动物。试试其他名称或清除筛选。</p>}
        </div>
        {selected ? <div className="exploration-field-note" key={selected.slug}>
          <div className="exploration-field-note__label"><MapPin size={13} /> {selectedPoint ? '物种定位' : '未标点档案'} <span>{coordinates(selected)}</span></div>
          <SpeciesPreview item={selected} onOpenSpecies={onOpenSpecies} />
          <div className="exploration-realm-tags">{selected.distribution.realms.map((realm) => <span key={realm}>{realmNames[realm]}</span>)}</div>
        </div> : pointSlugs ? <p className="exploration-species-grid__hint" role="status">点按动物图片或名字，查看地区与档案。</p>
          : <div className="exploration-map__invitation"><Compass size={28} /><strong>从一个点位开始</strong><p>悬停或聚焦标记预览物种，点按后查看地区与档案。</p></div>}
      </aside>
    </div>
  </div>;
}

function nodeName(node: TaxonomyTreeNode) {
  return node.kind === 'taxon' ? node.taxon.zhName : node.species.names.zh;
}

function representativeSpecies(node: TaxonomyTreeNode): SpeciesSummary {
  if (node.kind === 'species') return node.species;
  // Prefer an existing cover, without loading complete species profiles.
  const candidates = node.children.map(representativeSpecies);
  return candidates.find((item) => item.media.image) ?? candidates[0]!;
}

function TaxonomyPortrait({ node, onActivate }: { node: TaxonomyTreeNode; onActivate: () => void }) {
  const animal = representativeSpecies(node);
  return <button type="button" className="taxonomy-portrait" onClick={onActivate}
    aria-label={node.kind === 'taxon' ? `探索${nodeName(node)}，${ranks[node.rank]}，已收录 ${node.speciesCount} 个物种` : `打开${nodeName(node)}物种档案`}>
    <span className="taxonomy-portrait__image">
      {animal.media.image
        ? <AtlasImage src={animal.media.image} alt={animal.media.alt || animal.names.zh} loading="lazy" decoding="async" />
        : <span className="taxonomy-portrait__missing"><BookOpen size={28} /><span>暂无图片</span></span>}
    </span>
    <span className="taxonomy-portrait__body">
      <span className="taxonomy-portrait__name"><strong>{nodeName(node)}</strong><small>{ranks[node.rank]}</small></span>
      <i lang="la">{node.kind === 'taxon' ? node.taxon.scientificName : animal.scientificName}</i>
      <span className="taxonomy-portrait__example">{node.kind === 'taxon' ? `图中：${animal.names.zh}` : animal.distribution.regions.join('、')}</span>
      <span className="taxonomy-portrait__action">{node.kind === 'taxon' ? `已收录 ${node.speciesCount} 个物种` : '打开物种档案'}<ArrowUpRight size={15} aria-hidden="true" /></span>
    </span>
  </button>;
}

function CompactTaxonomy({ items, onOpenSpecies }: Omit<Props, 'mode'>) {
  const tree = useMemo(() => buildTaxonomyTree(items), [items]);
  const overviewKeys = tree.length === 1 ? [tree[0]!.key] : [];
  const [focusKeys, setFocusKeys] = useState<string[]>(() => overviewKeys);
  const heading = useRef<HTMLDivElement>(null);
  const previousPath = useRef(focusKeys.join('/'));
  useEffect(() => {
    const pathKey = focusKeys.join('/');
    if (previousPath.current !== pathKey) heading.current?.focus();
    previousPath.current = pathKey;
  }, [focusKeys]);
  let children: readonly TaxonomyTreeNode[] = tree;
  const trail: TaxonomyTreeNode[] = [];
  for (const key of focusKeys) {
    const node = children.find((child) => child.key === key);
    if (!node || node.kind === 'species') break;
    trail.push(node); children = node.children;
  }
  const current = trail.at(-1);
  const currentCount = children.reduce((sum, node) => sum + node.speciesCount, 0);
  const isOverview = trail.length === overviewKeys.length;
  const navigate = (keys: string[]) => setFocusKeys(keys);
  const activate = (node: TaxonomyTreeNode, parent?: TaxonomyTreeNode) => {
    if (node.kind === 'species') onOpenSpecies(node.species);
    else navigate([...trail.map((entry) => entry.key), ...(parent ? [parent.key] : []), node.key]);
  };
  return <div className="exploration-compact">
    <nav className="exploration-breadcrumb" aria-label="当前分类路径">
      <button type="button" onClick={() => navigate(overviewKeys)}>动物总览</button>
      {trail.map((node, index) => <button type="button" key={node.key}
        aria-current={index === trail.length - 1 ? 'location' : undefined}
        onClick={() => navigate(trail.slice(0, index + 1).map((entry) => entry.key))}>
        <ChevronRight size={12} aria-hidden="true" />{nodeName(node)}<small>{ranks[node.rank]}</small></button>)}
      <button type="button" disabled={isOverview} onClick={() => navigate(trail.slice(0, -1).map((node) => node.key))}><ArrowLeft size={14} /> 返回上一级</button>
    </nav>
    <div className="exploration-compact__context" ref={heading} tabIndex={-1}>
      <div><p>{isOverview ? '从门开始，认识动物的分类组成' : '沿着分类归属，继续探索'}</p>
        <h3>{isOverview ? '动物总览' : current ? nodeName(current) : '动物总览'}</h3>
        {!isOverview && current?.kind === 'taxon' && <i lang="la">{current.taxon.scientificName}</i>}
      </div>
      <p role="status">已收录 <strong>{currentCount}</strong> 个物种 · {children.length} 个{children.every((node) => node.kind === 'species') ? '物种档案' : '分类单元'}</p>
    </div>
    <div className="taxonomy-collections" aria-label="分类组成与代表动物">
      {children.map((node) => node.kind === 'species'
        ? <TaxonomyPortrait key={node.key} node={node} onActivate={() => activate(node)} />
        : <section key={node.key} className={`taxonomy-collection${node.children.length > 3 ? ' taxonomy-collection--wide' : ''}`} aria-label={nodeName(node)}>
          <header className="taxonomy-collection__heading">
            <div><span>{ranks[node.rank]}</span><h4><button type="button" onClick={() => activate(node)}>{nodeName(node)}<ChevronRight size={18} aria-hidden="true" /></button></h4><i lang="la">{node.taxon.scientificName}</i></div>
            <p>已收录 <strong>{node.speciesCount}</strong> 个物种</p>
          </header>
          <div className="taxonomy-collection__grid">
            {node.children.map((child) => <TaxonomyPortrait key={child.key} node={child} onActivate={() => activate(child, node)} />)}
          </div>
        </section>)}
    </div>
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
        <div><p>{geography ? 'GEOGRAPHIC ATLAS' : 'TAXONOMY COLLECTIONS'}</p><h2 id="exploration-title">{geography ? '沿着地图，认识动物' : '从分类，认识动物'}</h2></div>
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
      {geography ? <Geography items={results} onOpenSpecies={openSpecies} /> : results.length
        ? <CompactTaxonomy key={`${query}:${realm}`} items={results} onOpenSpecies={openSpecies} />
        : <div className="exploration-empty" role="status">没有找到匹配的动物。试试动物中文名、学名或地区名称。</div>}
      <footer className="exploration-footnote">{geography
        ? '点位仅表示档案的代表位置，不代表完整分布范围或野外观察记录。底图：Natural Earth。'
        : '图片展示分类单元中的代表动物，数量仅统计本图册已收录物种。点击分类继续探索，面包屑可返回；分类归属不表示亲缘远近。'}</footer>
    </div>
  </section>;
}
