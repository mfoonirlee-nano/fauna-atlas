import {
  ArrowDown,
  ArrowRight,
  Bird,
  Bookmark,
  Bug,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Feather,
  Fish,
  Globe2,
  Heart,
  Leaf,
  Menu,
  Maximize2,
  Moon,
  Pause,
  PawPrint,
  Play,
  Search,
  Shell,
  Sparkles,
  Sun,
  Waves,
  X,
} from 'lucide-react';
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
  type RefObject,
} from 'react';
import { TaxonomyExplorer } from './components/TaxonomyExplorer';
import { species } from './data';
import {
  shouldAutoplayCarousel,
  stepCarouselIndex,
} from './domain/carousel';
import {
  buildSpeciesImageFrames,
  type SpeciesImageFrame,
} from './domain/image-viewer';
import type { IucnStatusCode, Species } from './types';

type Theme = 'light' | 'dark';
type HeroDirection = -1 | 1;

interface HeroCarouselFrame {
  readonly activeIndex: number;
  readonly previousIndex: number | null;
  readonly direction: HeroDirection;
  readonly revision: number;
}

const HERO_ROTATION_DELAY_MS = 6500;
const HERO_TRANSITION_DURATION_MS = 900;

const statusMeta: Record<
  IucnStatusCode,
  { short: string; label: string; tone: 'safe' | 'watch' | 'risk' | 'critical' | 'muted' }
> = {
  EX: { short: 'EX', label: '灭绝', tone: 'critical' },
  EW: { short: 'EW', label: '野外灭绝', tone: 'critical' },
  CR: { short: 'CR', label: '极危', tone: 'critical' },
  EN: { short: 'EN', label: '濒危', tone: 'risk' },
  VU: { short: 'VU', label: '易危', tone: 'risk' },
  NT: { short: 'NT', label: '近危', tone: 'watch' },
  LC: { short: 'LC', label: '无危', tone: 'safe' },
  DD: { short: 'DD', label: '数据缺乏', tone: 'muted' },
  NE: { short: 'NE', label: '未评估', tone: 'muted' },
};

const trendLabels = {
  increasing: '正在增长',
  stable: '相对稳定',
  decreasing: '持续下降',
  unknown: '趋势未知',
} as const;

const realmLabels = {
  terrestrial: '陆地',
  freshwater: '淡水',
  marine: '海洋',
} as const;

const visualTones = [
  'lichen',
  'tide',
  'clay',
  'moss',
  'dusk',
  'sand',
] as const;

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const saved = window.localStorage.getItem('fauna-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialBookmarks(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const saved = JSON.parse(window.localStorage.getItem('fauna-bookmarks') ?? '[]');
    return Array.isArray(saved) ? saved.filter((item): item is string => typeof item === 'string') : [];
  } catch {
    return [];
  }
}

function getInitialReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getInitialPageVisibility() {
  if (typeof document === 'undefined') return true;
  return !document.hidden;
}

type ClassIcon = ComponentType<{ size?: number; strokeWidth?: number }>;

const classIconsByScientificName: Readonly<Record<string, ClassIcon>> = {
  Aves: Bird,
  Actinopterygii: Fish,
  Chondrichthyes: Fish,
  Leptocardii: Fish,
  Sarcopterygii: Fish,
  Insecta: Bug,
  Arachnida: Bug,
  Chilopoda: Bug,
  Diplopoda: Bug,
  Branchiopoda: Shell,
  Cephalopoda: Shell,
  Gastropoda: Shell,
  Malacostraca: Shell,
  Polychaeta: Waves,
  Polyplacophora: Shell,
  Scaphopoda: Shell,
  Anthozoa: Waves,
  Echinoidea: Waves,
  Ophiuroidea: Waves,
  Hydrozoa: Waves,
  Scyphozoa: Waves,
  Mammalia: PawPrint,
};

function classIcon(scientificName: string): ClassIcon {
  return classIconsByScientificName[scientificName] ?? Leaf;
}

function formatClassName(value: string) {
  return value.replace(/纲$/, '');
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${value}T00:00:00`));
}

function focalPointStyle(focalPoint?: { readonly x: number; readonly y: number }) {
  const x = focalPoint?.x ?? 0.5;
  const y = focalPoint?.y ?? 0.5;
  return {
    '--focal-x': `${x <= 1 ? x * 100 : x}%`,
    '--focal-y': `${y <= 1 ? y * 100 : y}%`,
  } as CSSProperties;
}

function formatCoordinates(center: Species['distribution']['center']) {
  if (!center) return 'RANGE DATA';
  return `${Math.abs(center.lat).toFixed(1)}°${center.lat >= 0 ? 'N' : 'S'} · ${Math.abs(center.lng).toFixed(1)}°${
    center.lng >= 0 ? 'E' : 'W'
  }`;
}

function scrollToAtlas() {
  document.querySelector('#atlas')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-mark${compact ? ' brand-mark--compact' : ''}`} aria-hidden="true">
      <svg className="brand-mark__icon" viewBox="0 0 64 64" focusable="false">
        <circle className="brand-mark__orbit" cx="32" cy="32" r="22" />
        <path
          className="brand-mark__leaf"
          d="M20.5 40.5C20.6 28.1 28.2 19.8 42.2 19C42 32.1 34.2 40.3 20.5 40.5Z"
        />
        <path
          className="brand-mark__vein"
          d="M20.5 43.4C23.8 33.7 30.5 26.2 40.8 20.6"
        />
        <path
          className="brand-mark__twig"
          d="M23.3 40.7C28.9 41.2 33.7 43.2 37.8 46.2"
        />
        <circle className="brand-mark__star" cx="48.5" cy="15.5" r="3.75" />
      </svg>
    </span>
  );
}

function TaxonArtwork({ item, index, large = false }: { item: Species; index: number; large?: boolean }) {
  const Icon = classIcon(item.taxonomy.class.scientificName);
  const hasPhoto = Boolean(item.media.image);
  const tone = visualTones[index % visualTones.length];

  return (
    <div
      className={`taxon-art taxon-art--${tone}${large ? ' taxon-art--large' : ''}${
        hasPhoto ? ' taxon-art--photo' : ''
      }`}
      style={focalPointStyle(item.media.focalPoint)}
    >
      {item.media.image ? (
        <img src={item.media.image} alt={item.media.alt} />
      ) : (
        <>
          <span className="taxon-art__coordinates" aria-hidden="true">
            {item.distribution.center
              ? `${Math.abs(item.distribution.center.lat).toFixed(1)}°${
                  item.distribution.center.lat >= 0 ? 'N' : 'S'
                } · ${Math.abs(item.distribution.center.lng).toFixed(1)}°${
                  item.distribution.center.lng >= 0 ? 'E' : 'W'
                }`
              : item.distribution.realms.map((realm) => realmLabels[realm]).join(' · ')}
          </span>
          <span className="taxon-art__ring" aria-hidden="true" />
          <Icon size={large ? 112 : 74} strokeWidth={0.75} />
          <span className="taxon-art__latin" aria-hidden="true">
            {item.taxonomy.genus.scientificName.slice(0, 2).toUpperCase()}
          </span>
        </>
      )}
      <span className="taxon-art__realm" aria-hidden="true">
        {item.distribution.realms.map((realm) => realmLabels[realm]).join(' / ')}
      </span>
    </div>
  );
}

interface SpeciesGalleryProps {
  readonly item: Species;
  readonly onOpenImage: (frameIndex: number, trigger: HTMLButtonElement) => void;
}

function SpeciesGallery({ item, onOpenImage }: SpeciesGalleryProps) {
  const gallery = item.media.gallery;
  if (!gallery?.length) return null;

  const hasCover = Boolean(item.media.image);
  const frameCount = gallery.length + (hasCover ? 1 : 0);
  const galleryNumberOffset = hasCover ? 2 : 1;
  const galleryFrameOffset = hasCover ? 1 : 0;

  return (
    <section className="detail-gallery" aria-labelledby="detail-gallery-title">
      <div className="detail-gallery__heading">
        <div>
          <p className="section-kicker">IMAGE NOTES · 影像观察</p>
          <h3 id="detail-gallery-title">镜头里的{item.names.zh}</h3>
        </div>
        <p>
          <strong>{String(frameCount).padStart(2, '0')}</strong>
          <span>{hasCover ? 'FRAMES · 含封面' : 'FRAMES · 观察图'}</span>
        </p>
      </div>
      <div className="detail-gallery__grid">
        {gallery.map((image, imageIndex) => (
          <figure
            key={image.image}
            className={imageIndex === 0 ? 'detail-gallery__item detail-gallery__item--wide' : 'detail-gallery__item'}
          >
            <button
              type="button"
              className="detail-gallery__image"
              style={focalPointStyle(image.focalPoint)}
              onClick={(event) => onOpenImage(imageIndex + galleryFrameOffset, event.currentTarget)}
              aria-label={`全屏查看${item.names.zh}影像：${image.title}`}
            >
              <img src={image.image} alt={image.alt} loading="lazy" decoding="async" />
              <span className="detail-gallery__zoom" aria-hidden="true">
                <Maximize2 size={16} />
                全屏查看
              </span>
            </button>
            <figcaption>
              <span>{String(imageIndex + galleryNumberOffset).padStart(2, '0')}</span>
              <div>
                <strong>{image.title}</strong>
                {image.caption && <p>{image.caption}</p>}
                {(image.credit ?? item.media.credit) && <small>{image.credit ?? item.media.credit}</small>}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

interface SpeciesImageViewerProps {
  readonly item: Species;
  readonly frames: readonly SpeciesImageFrame[];
  readonly activeIndex: number;
  readonly dialogRef: RefObject<HTMLDivElement | null>;
  readonly onClose: () => void;
  readonly onSelect: (index: number) => void;
}

function SpeciesImageViewer({
  item,
  frames,
  activeIndex,
  dialogRef,
  onClose,
  onSelect,
}: SpeciesImageViewerProps) {
  const frame = frames[activeIndex];
  if (!frame) return null;

  const status = statusMeta[item.conservation.code];
  const previousIndex = stepCarouselIndex(activeIndex, -1, frames.length);
  const nextIndex = stepCarouselIndex(activeIndex, 1, frames.length);
  const previousFrame = frames[previousIndex];
  const nextFrame = frames[nextIndex];
  const viewerTitleId = `image-viewer-title-${item.slug}`;
  const viewerDescriptionId = `image-viewer-description-${item.slug}`;

  return (
    <div
      className={`image-viewer${frames.length > 1 ? '' : ' image-viewer--single'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={viewerTitleId}
      aria-describedby={viewerDescriptionId}
      ref={dialogRef}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <header className="image-viewer__topbar">
        <div className="image-viewer__brand">
          <BrandMark compact />
          <span>FAUNA / IMMERSIVE IMAGE FILE</span>
        </div>
        <div className="image-viewer__topbar-meta" role="status" aria-live="polite" aria-atomic="true">
          第 {activeIndex + 1} 张，共 {frames.length} 张：{frame.title}
        </div>
        <button type="button" className="image-viewer__close" onClick={onClose} aria-label="关闭全屏影像" autoFocus>
          <X size={21} />
        </button>
      </header>

      <div className="image-viewer__main">
        <figure
          className="image-viewer__stage"
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <span className="image-viewer__coordinates" aria-hidden="true">
            {formatCoordinates(item.distribution.center)}
          </span>
          <img
            key={frame.id}
            src={frame.image}
            alt={frame.alt}
            style={focalPointStyle(frame.focalPoint)}
            decoding="async"
          />
          {frames.length > 1 && previousFrame && nextFrame && (
            <div className="image-viewer__navigation" role="group" aria-label="影像切换">
              <button
                type="button"
                onClick={() => onSelect(previousIndex)}
                aria-label={`上一张：${previousFrame.title}`}
              >
                <ChevronLeft size={23} />
              </button>
              <button
                type="button"
                onClick={() => onSelect(nextIndex)}
                aria-label={`下一张：${nextFrame.title}`}
              >
                <ChevronRight size={23} />
              </button>
            </div>
          )}
        </figure>

        <aside className="image-viewer__info">
          <p className="section-kicker">
            {frame.kind === 'cover' ? 'COVER IMAGE · 封面影像' : 'IMAGE NOTE · 影像观察'}
          </p>
          <p className="image-viewer__scientific">{item.scientificName}</p>
          <h2 id={viewerTitleId}>{item.names.zh}影像档案</h2>
          <p className="image-viewer__english">{item.names.en}</p>

          <div className="image-viewer__frame-heading">
            <span>{String(activeIndex + 1).padStart(2, '0')}</span>
            <h3>{frame.title}</h3>
          </div>
          <p id={viewerDescriptionId} className="image-viewer__caption">{frame.caption}</p>

          <dl className="image-viewer__facts">
            <div>
              <dt>保护状态</dt>
              <dd><span className={`status-badge status-badge--${status.tone}`}>{status.short}</span>{status.label}</dd>
            </div>
            <div>
              <dt>观察区域</dt>
              <dd>{item.distribution.regions.slice(0, 2).join('、')}</dd>
            </div>
            <div>
              <dt>核心生境</dt>
              <dd>{item.habitats[0]?.name ?? '尚待记录'}</dd>
            </div>
            {frame.credit && (
              <div>
                <dt>影像来源</dt>
                <dd>{frame.credit}</dd>
              </div>
            )}
          </dl>
        </aside>
      </div>

      {frames.length > 1 && (
        <nav className="image-viewer__rail" aria-label="全部影像">
          {frames.map((candidate, index) => (
            <button
              type="button"
              key={candidate.id}
              className={index === activeIndex ? 'is-active' : ''}
              onClick={() => onSelect(index)}
              aria-label={`查看第 ${index + 1} 张：${candidate.title}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <img src={candidate.image} alt="" style={focalPointStyle(candidate.focalPoint)} loading="lazy" decoding="async" />
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

interface SpeciesCardProps {
  item: Species;
  index: number;
  saved: boolean;
  onOpen: (item: Species) => void;
  onToggleSaved: (slug: string) => void;
}

function SpeciesCard({ item, index, saved, onOpen, onToggleSaved }: SpeciesCardProps) {
  const status = statusMeta[item.conservation.code];

  return (
    <article className="species-card">
      <TaxonArtwork item={item} index={index} large />
      <div className="species-card__content">
        <div className="species-card__eyebrow">
          <span>NO. {String(index + 1).padStart(2, '0')}</span>
          <span className={`status-dot status-dot--${status.tone}`}>
            {status.short} · {status.label}
          </span>
        </div>
        <div>
          <p className="species-card__latin">{item.scientificName}</p>
          <h3>{item.names.zh}</h3>
          <p className="species-card__english">{item.names.en}</p>
        </div>
        <p className="species-card__summary">{item.summary}</p>
        <div className="species-card__meta">
          <span>{formatClassName(item.taxonomy.class.zhName)}</span>
          <span>{item.habitats[0]?.name ?? item.distribution.regions[0]}</span>
        </div>
      </div>
      <button
        type="button"
        className="species-card__open"
        onClick={() => onOpen(item)}
        aria-label={`查看${item.names.zh}的完整档案`}
      />
      <button
        type="button"
        className={`bookmark-button${saved ? ' bookmark-button--saved' : ''}`}
        onClick={() => onToggleSaved(item.slug)}
        aria-label={saved ? `取消收藏${item.names.zh}` : `收藏${item.names.zh}`}
        aria-pressed={saved}
      >
        {saved ? <Check size={16} /> : <Bookmark size={16} />}
      </button>
      <span className="species-card__arrow" aria-hidden="true">
        <ArrowRight size={18} />
      </span>
    </article>
  );
}

interface SpeciesDetailProps {
  item: Species;
  index: number;
  saved: boolean;
  onClose: () => void;
  onToggleSaved: (slug: string) => void;
}

function SpeciesDetail({ item, index, saved, onClose, onToggleSaved }: SpeciesDetailProps) {
  const status = statusMeta[item.conservation.code];
  const imageFrames = useMemo(() => buildSpeciesImageFrames(item), [item]);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const imageViewerRef = useRef<HTMLDivElement>(null);
  const lastImageTriggerRef = useRef<HTMLButtonElement | null>(null);
  const focusRestoreFrameRef = useRef<number | undefined>(undefined);

  const openImageViewer = useCallback((frameIndex: number, trigger: HTMLButtonElement) => {
    if (!imageFrames[frameIndex]) return;
    lastImageTriggerRef.current = trigger;
    setActiveImageIndex(frameIndex);
  }, [imageFrames]);

  const closeImageViewer = useCallback(() => {
    setActiveImageIndex(null);
    if (focusRestoreFrameRef.current !== undefined) {
      window.cancelAnimationFrame(focusRestoreFrameRef.current);
    }
    focusRestoreFrameRef.current = window.requestAnimationFrame(() => {
      lastImageTriggerRef.current?.focus();
      focusRestoreFrameRef.current = undefined;
    });
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => () => {
    if (focusRestoreFrameRef.current !== undefined) {
      window.cancelAnimationFrame(focusRestoreFrameRef.current);
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        if (activeImageIndex !== null) {
          closeImageViewer();
        } else {
          onClose();
        }
        return;
      }

      if (
        activeImageIndex !== null
        && imageFrames.length > 1
        && !event.altKey
        && !event.ctrlKey
        && !event.metaKey
        && !event.shiftKey
      ) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          const step = event.key === 'ArrowLeft' ? -1 : 1;
          setActiveImageIndex((current) => (
            current === null ? null : stepCarouselIndex(current, step, imageFrames.length)
          ));
          return;
        }
      }

      const activeDialog = activeImageIndex === null ? dialogRef.current : imageViewerRef.current;
      if (event.key !== 'Tab' || !activeDialog) return;
      const focusableElements = Array.from(
        activeDialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [contenteditable="true"], [tabindex]:not([tabindex="-1"])',
        ),
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);
      if (!firstElement || !lastElement) return;

      if (!activeDialog.contains(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? lastElement : firstElement).focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [activeImageIndex, closeImageViewer, imageFrames.length, onClose]);

  return (
    <>
      <div className="detail-backdrop" role="presentation" onMouseDown={onClose}>
        <div
          className="detail-panel"
          role="dialog"
          aria-modal={activeImageIndex === null}
          aria-labelledby="detail-title"
          inert={activeImageIndex !== null}
          ref={dialogRef}
          onMouseDown={(event) => event.stopPropagation()}
        >
        <div className="detail-panel__topbar">
          <div className="detail-panel__brand">
            <BrandMark compact />
            <span>FAUNA / SPECIES FILE</span>
          </div>
          <div className="detail-panel__actions">
            <button
              type="button"
              className={`round-button${saved ? ' round-button--active' : ''}`}
              onClick={() => onToggleSaved(item.slug)}
              aria-label={saved ? `取消收藏${item.names.zh}` : `收藏${item.names.zh}`}
              aria-pressed={saved}
            >
              {saved ? <Heart size={18} fill="currentColor" /> : <Heart size={18} />}
            </button>
            <button type="button" className="round-button" onClick={onClose} aria-label="关闭物种档案" autoFocus>
              <X size={19} />
            </button>
          </div>
        </div>

        <div className="detail-hero">
          {item.media.image ? (
            <>
              <TaxonArtwork item={item} index={index} large />
              <button
                type="button"
                className="detail-hero__image-trigger"
                onClick={(event) => openImageViewer(0, event.currentTarget)}
                aria-label={`全屏查看${item.names.zh}封面影像`}
              >
                <span className="detail-hero__zoom" aria-hidden="true">
                  <Maximize2 size={17} />
                  全屏查看
                </span>
              </button>
            </>
          ) : (
            <TaxonArtwork item={item} index={index} large />
          )}
          {item.media.image && item.media.credit && <span className="detail-hero__credit">{item.media.credit}</span>}
          <div className="detail-hero__title">
            <div className="detail-hero__status">
              <span className={`status-badge status-badge--${status.tone}`}>{status.short}</span>
              <span>{status.label}</span>
              <span className="detail-hero__divider">/</span>
              <span>{trendLabels[item.conservation.trend]}</span>
            </div>
            <p>{item.scientificName}</p>
            <h2 id="detail-title">{item.names.zh}</h2>
            <span className="detail-hero__english">{item.names.en}</span>
          </div>
        </div>

        <div className="detail-body">
          <div className="detail-lead">
            <p className="section-kicker">FIELD NOTE · 物种手记</p>
            <p className="detail-lead__copy">{item.description}</p>
            <div className="detail-tags">
              {item.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          </div>

          {item.featuredStats.length > 0 && (
            <section className="detail-stats" aria-label="关键数据">
              {item.featuredStats.slice(0, 4).map((stat) => (
                <div key={stat.key}>
                  <span>{stat.label}</span>
                  <strong>
                    {stat.value}
                    {stat.unit && <small>{stat.unit}</small>}
                  </strong>
                  {stat.note && <p>{stat.note}</p>}
                </div>
              ))}
            </section>
          )}

          <SpeciesGallery item={item} onOpenImage={openImageViewer} />

          <div className="detail-grid">
            <section className="detail-section">
              <p className="section-kicker">01 / 栖息与分布</p>
              <h3>它们生活在哪里</h3>
              <p>{item.distribution.range}</p>
              <dl className="detail-facts">
                <div>
                  <dt>生态域</dt>
                  <dd>{item.distribution.realms.map((realm) => realmLabels[realm]).join('、')}</dd>
                </div>
                <div>
                  <dt>主要区域</dt>
                  <dd>{item.distribution.regions.join('、')}</dd>
                </div>
                <div>
                  <dt>核心生境</dt>
                  <dd>{item.habitats.map((habitat) => habitat.name).join('、')}</dd>
                </div>
              </dl>
            </section>

            <section className="detail-section">
              <p className="section-kicker">02 / 行为与食性</p>
              <h3>吃什么，怎么活</h3>
              <p>{item.diet.description}</p>
              <dl className="detail-facts">
                <div>
                  <dt>主要食物</dt>
                  <dd>{item.diet.foods.join('、')}</dd>
                </div>
                {item.activity && item.activity.length > 0 && (
                  <div>
                    <dt>活动节律</dt>
                    <dd>{item.activity.join('、')}</dd>
                  </div>
                )}
              </dl>
            </section>
          </div>

          {item.storySections && item.storySections.length > 0 && (
            <section className="detail-story" aria-labelledby="detail-story-title">
              <div className="detail-story__heading">
                <p className="section-kicker">03 / 生命史</p>
                <h3 id="detail-story-title">从身体，到下一代</h3>
              </div>
              <div className="detail-story__grid">
                {item.storySections.map((section, sectionIndex) => (
                  <article key={section.key}>
                    <span>{String(sectionIndex + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="section-kicker">{section.label}</p>
                      <h4>{section.title}</h4>
                      <p>{section.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          <section className="detail-section detail-section--facts">
            <p className="section-kicker">{item.storySections?.length ? '04' : '03'} / 自然观察</p>
            <h3>值得记住的事实</h3>
            <ol className="fact-list">
              {item.keyFacts.map((fact, factIndex) => (
                <li key={fact}>
                  <span>{String(factIndex + 1).padStart(2, '0')}</span>
                  <p>{fact}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="conservation-callout">
            <div>
              <p className="section-kicker">CONSERVATION · 共同守护</p>
              <h3>看见威胁，也看见出路</h3>
              <p>
                {item.threats.length > 0
                  ? `当前主要威胁包括${item.threats.join('、')}。`
                  : '持续观察种群与栖息地变化，是理解它们处境的第一步。'}
              </p>
            </div>
            <ul>
              {item.conservationActions.slice(0, 3).map((action) => (
                <li key={action}>
                  <Sparkles size={15} />
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="source-section">
            <div>
              <p className="section-kicker">SOURCES · 资料来源</p>
              <h3>让每条记录有迹可循</h3>
            </div>
            <div className="source-list">
              {item.sources.map((source) => (
                <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
                  <span>{source.title}</span>
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
            <p className="source-section__updated">
              最近更新于 {formatDate(item.updatedAt)} ·{' '}
              {item.conservation.assessedYear === undefined
                ? 'IUCN 尚未评估'
                : `保护等级评估年份 ${item.conservation.assessedYear}`}
            </p>
          </section>
        </div>
      </div>
      </div>

      {activeImageIndex !== null && (
        <SpeciesImageViewer
          item={item}
          frames={imageFrames}
          activeIndex={activeImageIndex}
          dialogRef={imageViewerRef}
          onClose={closeImageViewer}
          onSelect={setActiveImageIndex}
        />
      )}
    </>
  );
}

interface HeroCarouselProps {
  readonly items: readonly Species[];
  readonly isObscured: boolean;
  readonly onOpenSpecies: (item: Species) => void;
}

function HeroCarousel({ items, isObscured, onOpenSpecies }: HeroCarouselProps) {
  const heroSlides = useMemo(() => items.filter((item) => Boolean(item.media.image)), [items]);
  const [frame, setFrame] = useState<HeroCarouselFrame>({
    activeIndex: 0,
    previousIndex: null,
    direction: 1,
    revision: 0,
  });
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const [pointerOver, setPointerOver] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialReducedMotion);
  const [pageVisible, setPageVisible] = useState(getInitialPageVisibility);
  const [inViewport, setInViewport] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const pointerFocusRef = useRef(false);
  const frameRef = useRef(frame);
  const mountedRef = useRef(true);
  const transitionLockRef = useRef(false);
  const transitionTimerRef = useRef<number | undefined>(undefined);
  const imagePreparationRef = useRef(new Map<string, Promise<boolean>>());
  const autoplayActiveRef = useRef(false);
  const slideCount = heroSlides.length;
  frameRef.current = frame;

  const autoplayActive = shouldAutoplayCarousel({
    slideCount,
    paused: autoplayPaused,
    reducedMotion: prefersReducedMotion,
    interacting: pointerOver,
    pageVisible,
    inViewport,
    obscured: isObscured,
  });
  autoplayActiveRef.current = autoplayActive;

  const prepareHeroImage = useCallback((index: number) => {
    const source = heroSlides[index]?.media.image;
    if (!source || typeof window === 'undefined') return Promise.resolve(false);

    const existing = imagePreparationRef.current.get(source);
    if (existing) return existing;

    const preparation = new Promise<boolean>((resolve) => {
      const image = new window.Image();
      let finished = false;
      const finish = async (loaded: boolean) => {
        if (finished) return;
        finished = true;
        if (!loaded) {
          imagePreparationRef.current.delete(source);
          resolve(false);
          return;
        }
        try {
          if (typeof image.decode === 'function') await image.decode();
          resolve(true);
        } catch {
          imagePreparationRef.current.delete(source);
          resolve(false);
        }
      };
      image.addEventListener('load', () => { void finish(true); }, { once: true });
      image.addEventListener('error', () => { void finish(false); }, { once: true });
      image.src = source;
      if (image.complete) void finish(image.naturalWidth > 0);
    });

    imagePreparationRef.current.set(source, preparation);
    return preparation;
  }, [heroSlides]);

  const moveHero = useCallback(async (step: HeroDirection, userInitiated: boolean) => {
    if (slideCount <= 1 || transitionLockRef.current) return;
    transitionLockRef.current = true;
    setTransitioning(true);
    if (userInitiated) setAutoplayPaused(true);

    const currentFrame = frameRef.current;
    const nextIndex = stepCarouselIndex(currentFrame.activeIndex, step, slideCount);
    const imageReady = await prepareHeroImage(nextIndex);

    if (!mountedRef.current) return;
    if (!imageReady) {
      transitionLockRef.current = false;
      setTransitioning(false);
      return;
    }
    if (!userInitiated && !autoplayActiveRef.current) {
      transitionLockRef.current = false;
      setTransitioning(false);
      return;
    }
    const nextFrame: HeroCarouselFrame = {
      activeIndex: nextIndex,
      previousIndex: currentFrame.activeIndex,
      direction: step,
      revision: currentFrame.revision + 1,
    };
    frameRef.current = nextFrame;
    setFrame(nextFrame);

    if (transitionTimerRef.current !== undefined) window.clearTimeout(transitionTimerRef.current);
    const transitionDuration = prefersReducedMotion ? 0 : HERO_TRANSITION_DURATION_MS;
    transitionTimerRef.current = window.setTimeout(() => {
      transitionLockRef.current = false;
      setTransitioning(false);
      setFrame((current) => {
        if (current.revision !== nextFrame.revision) return current;
        const settled = { ...current, previousIndex: null };
        frameRef.current = settled;
        return settled;
      });
    }, transitionDuration);
  }, [prepareHeroImage, prefersReducedMotion, slideCount]);

  useEffect(() => {
    if (!autoplayActive) return;
    const timer = window.setTimeout(() => { void moveHero(1, false); }, HERO_ROTATION_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [autoplayActive, frame.activeIndex, moveHero]);

  useEffect(() => {
    if (typeof window === 'undefined' || slideCount <= 1) return;
    for (const step of [-1, 1] as const) {
      void prepareHeroImage(stepCarouselIndex(frame.activeIndex, step, slideCount));
    }
  }, [frame.activeIndex, prepareHeroImage, slideCount]);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    const resetPointerFocus = () => { pointerFocusRef.current = false; };
    window.addEventListener('pointerup', resetPointerFocus);
    window.addEventListener('pointercancel', resetPointerFocus);
    window.addEventListener('blur', resetPointerFocus);
    return () => {
      window.removeEventListener('pointerup', resetPointerFocus);
      window.removeEventListener('pointercancel', resetPointerFocus);
      window.removeEventListener('blur', resetPointerFocus);
    };
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || !heroRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInViewport((entry?.intersectionRatio ?? 1) >= 0.08),
      { threshold: 0.08 },
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      transitionLockRef.current = false;
      if (transitionTimerRef.current !== undefined) window.clearTimeout(transitionTimerRef.current);
    };
  }, []);

  const heroSpecies = heroSlides[frame.activeIndex] ?? items[0];
  const previousSpecies = frame.previousIndex === null ? undefined : heroSlides[frame.previousIndex];
  const heroIndex = heroSpecies ? items.findIndex((item) => item.slug === heroSpecies.slug) : 0;
  const previousName = heroSlides[stepCarouselIndex(frame.activeIndex, -1, slideCount)]?.names.zh;
  const nextName = heroSlides[stepCarouselIndex(frame.activeIndex, 1, slideCount)]?.names.zh;
  const directionClass = frame.direction === 1 ? 'forward' : 'backward';

  return (
    <section
      ref={heroRef}
      className="hero"
      id="top"
      role="region"
      aria-labelledby="hero-carousel-label"
      aria-roledescription="轮播图"
      onMouseEnter={() => setPointerOver(true)}
      onMouseLeave={() => {
        setPointerOver(false);
        pointerFocusRef.current = false;
      }}
      onPointerDownCapture={() => { pointerFocusRef.current = true; }}
      onPointerUpCapture={() => { pointerFocusRef.current = false; }}
      onPointerCancelCapture={() => { pointerFocusRef.current = false; }}
      onLostPointerCapture={() => { pointerFocusRef.current = false; }}
      onClickCapture={() => { pointerFocusRef.current = false; }}
      onFocusCapture={() => {
        if (!pointerFocusRef.current) setAutoplayPaused(true);
      }}
    >
      <span id="hero-carousel-label" className="sr-only">动物封面</span>
      <div
        className="hero-carousel__visual"
        aria-live={autoplayActive ? 'off' : 'polite'}
      >
        {previousSpecies?.media.image && (
          <img
            key={`previous-${frame.revision}-${previousSpecies.slug}`}
            className={`hero__image hero__image--leaving-${directionClass}`}
            src={previousSpecies.media.image}
            alt=""
            style={focalPointStyle(previousSpecies.media.focalPoint)}
            decoding="async"
            aria-hidden="true"
          />
        )}
        {heroSpecies && (
          <div
            key={`slide-${frame.revision}-${heroSpecies.slug}`}
            className="hero-carousel__slide"
            role="group"
            aria-roledescription="幻灯片"
            aria-label={`第 ${frame.activeIndex + 1} 张，共 ${slideCount} 张：${heroSpecies.names.zh}`}
          >
            <img
              className={`hero__image ${
                frame.revision === 0
                  ? 'hero__image--initial'
                  : frame.previousIndex !== null
                    ? `hero__image--entering-${directionClass}`
                    : 'hero__image--settled'
              }`}
              src={heroSpecies.media.image ?? './images/fauna-hero.webp'}
              alt={heroSpecies.media.alt}
              style={focalPointStyle(heroSpecies.media.focalPoint)}
              decoding="async"
              loading="eager"
              fetchPriority={frame.revision === 0 ? 'high' : 'auto'}
            />
          </div>
        )}
      </div>
      <div className="hero__veil" />
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__copy">
          <p className="hero__kicker"><span /> A LIVING INDEX OF EARTH</p>
          <h1 id="hero-title">在万物之间，<br />重新认识世界。</h1>
          <p className="hero__intro">
            一部持续生长的现代生物电子图册。记录名字，也记录每一种生命与地球相连的方式。
          </p>
          <button type="button" className="primary-cta" onClick={scrollToAtlas}>
            <span>开始探索</span>
            <ArrowDown size={17} />
          </button>
        </div>

        {heroSpecies && (
          <div className="hero-carousel__panel">
            <button type="button" className="hero-specimen" onClick={() => onOpenSpecies(heroSpecies)}>
              <span className="hero-specimen__index">
                本期观察 / {String(heroIndex + 1).padStart(3, '0')}
              </span>
              <span className="hero-specimen__line" />
              <span className="hero-specimen__latin">{heroSpecies.scientificName}</span>
              <strong>{heroSpecies.names.zh}</strong>
              <span className="hero-specimen__meta">
                {heroSpecies.distribution.regions[0]} · {statusMeta[heroSpecies.conservation.code].label}
              </span>
              <ArrowRight size={20} />
            </button>

            <button
              type="button"
              className="hero-carousel__mobile-specimen"
              onClick={() => onOpenSpecies(heroSpecies)}
              aria-label={`查看${heroSpecies.names.zh}的完整档案`}
            >
              <span>查看当前动物</span>
              <strong>{heroSpecies.names.zh}</strong>
              <ArrowRight size={18} aria-hidden="true" />
            </button>

            {slideCount > 1 && (
              <div className="hero-carousel__controls" role="group" aria-label="封面轮播控制">
                <button
                  type="button"
                  onClick={() => { void moveHero(-1, true); }}
                  aria-label={`上一种动物${previousName ? `：${previousName}` : ''}`}
                  aria-disabled={transitioning}
                >
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <span className="hero-carousel__status" aria-hidden="true">
                  <span>{String(frame.activeIndex + 1).padStart(2, '0')} / {String(slideCount).padStart(2, '0')}</span>
                  <strong>{heroSpecies.names.zh}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => setAutoplayPaused((paused) => !paused)}
                  aria-label={
                    prefersReducedMotion
                      ? '已根据系统设置停止自动播放'
                      : autoplayPaused
                        ? '继续播放封面轮播'
                        : '暂停封面轮播'
                  }
                  disabled={prefersReducedMotion}
                >
                  {autoplayPaused || prefersReducedMotion
                    ? <Play size={16} aria-hidden="true" />
                    : <Pause size={16} aria-hidden="true" />}
                </button>
                <button
                  type="button"
                  onClick={() => { void moveHero(1, true); }}
                  aria-label={`下一种动物${nextName ? `：${nextName}` : ''}`}
                  aria-disabled={transitioning}
                >
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="hero__footnote">
        <span>{formatCoordinates(heroSpecies?.distribution.center)}</span>
        <span>{heroSpecies?.distribution.regions.slice(0, 2).join(' · ') ?? 'MOUNTAIN BIOREGION'}</span>
        <span>VOL. 01 / 2026</span>
      </div>
    </section>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [query, setQuery] = useState('');
  const [activeClass, setActiveClass] = useState('全部');
  const [activeStatus, setActiveStatus] = useState('ALL');
  const [selected, setSelected] = useState<Species | null>(null);
  const [bookmarks, setBookmarks] = useState<string[]>(getInitialBookmarks);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('fauna-theme', theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem('fauna-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    let focusTimer: number | undefined;
    const handleShortcut = (event: globalThis.KeyboardEvent) => {
      if (selected) return;
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        scrollToAtlas();
        focusTimer = window.setTimeout(() => searchRef.current?.focus(), 450);
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => {
      window.removeEventListener('keydown', handleShortcut);
      if (focusTimer !== undefined) window.clearTimeout(focusTimer);
    };
  }, [selected]);

  const classNames = useMemo(
    () => ['全部', ...Array.from(new Set(species.map((item) => item.taxonomy.class.zhName)))],
    [],
  );

  const filteredSpecies = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('zh-CN');
    return species.filter((item) => {
      const matchesClass = activeClass === '全部' || item.taxonomy.class.zhName === activeClass;
      const matchesStatus = activeStatus === 'ALL' || item.conservation.code === activeStatus;
      const searchable = [
        item.names.zh,
        item.names.en,
        item.scientificName,
        ...item.names.aliases ?? [],
        ...Object.values(item.taxonomy).flatMap((taxon) => [taxon.zhName, taxon.scientificName]),
        ...item.tags,
        ...item.distribution.regions,
        ...item.habitats.map((habitat) => habitat.name),
      ]
        .join(' ')
        .toLocaleLowerCase('zh-CN');
      return matchesClass && matchesStatus && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeClass, activeStatus, query]);

  const regionCount = new Set(species.flatMap((item) => item.distribution.regions)).size;
  const threatenedCount = species.filter((item) => ['CR', 'EN', 'VU'].includes(item.conservation.code)).length;

  const openSpecies = useCallback((item: Species) => {
    lastFocusedElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSelected(item);
  }, []);

  const closeSpecies = useCallback(() => {
    setSelected(null);
    window.requestAnimationFrame(() => lastFocusedElementRef.current?.focus());
  }, []);

  const toggleBookmark = (slug: string) => {
    setBookmarks((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug],
    );
  };

  const clearFilters = () => {
    setQuery('');
    setActiveClass('全部');
    setActiveStatus('ALL');
  };

  const onNavClick = () => setMobileMenuOpen(false);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#taxonomy">跳到分类图谱</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Fauna Atlas 首页">
          <BrandMark />
          <span className="brand__type">
            <strong>FAUNA</strong>
            <span>ATLAS</span>
          </span>
        </a>

        <nav className={`site-nav${mobileMenuOpen ? ' site-nav--open' : ''}`} aria-label="主导航">
          <a href="#taxonomy" onClick={onNavClick}>分类图谱</a>
          <a href="#atlas" onClick={onNavClick}>探索图鉴</a>
          <a href="#mission" onClick={onNavClick}>我们为何记录</a>
          <a href="#about" onClick={onNavClick}>关于项目</a>
          <span className="site-nav__edition">简体中文 · CN</span>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-button"
            onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
            aria-label={theme === 'light' ? '切换为深色模式' : '切换为浅色模式'}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            type="button"
            className="menu-button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? '关闭导航' : '打开导航'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <HeroCarousel
          items={species}
          isObscured={selected !== null || mobileMenuOpen}
          onOpenSpecies={openSpecies}
        />

        <section className="atlas-intro" aria-label="图册概览">
          <div className="atlas-intro__statement">
            <Globe2 size={24} strokeWidth={1.4} />
            <p>从高山到深海，<br />每一次相遇都有坐标。</p>
          </div>
          <div className="atlas-intro__stats">
            <div><strong>{String(species.length).padStart(2, '0')}</strong><span>首批物种档案</span></div>
            <div><strong>{String(regionCount).padStart(2, '0')}</strong><span>覆盖地理分区</span></div>
            <div><strong>{String(threatenedCount).padStart(2, '0')}</strong><span>受威胁物种</span></div>
          </div>
        </section>

        <TaxonomyExplorer items={species} theme={theme} onOpenSpecies={openSpecies} />

        <section className="atlas-section" id="atlas" aria-labelledby="atlas-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">EXPLORE THE ATLAS · 探索图鉴</p>
              <h2 id="atlas-title">今天，想认识谁？</h2>
            </div>
            <p>按名字、学名、分类、栖息地或保护等级，找到一条通往自然的路径。</p>
          </div>

          <div className="atlas-tools">
            <label className="search-field" htmlFor="species-search">
              <Search size={19} />
              <input
                ref={searchRef}
                id="species-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="搜索物种、分类或栖息地…"
              />
              <kbd>⌘ K</kbd>
            </label>
            <label className="status-select">
              <span className="sr-only">按保护状态筛选</span>
              <select value={activeStatus} onChange={(event) => setActiveStatus(event.target.value)}>
                <option value="ALL">全部保护状态</option>
                <option value="CR">CR · 极危</option>
                <option value="EN">EN · 濒危</option>
                <option value="VU">VU · 易危</option>
                <option value="NT">NT · 近危</option>
                <option value="LC">LC · 无危</option>
                <option value="DD">DD · 数据缺乏</option>
                <option value="NE">NE · 未评估</option>
              </select>
              <ChevronDown size={16} aria-hidden="true" />
            </label>
          </div>

          <div className="class-filter" aria-label="按生物分类筛选">
            {classNames.map((className) => (
              <button
                type="button"
                key={className}
                className={activeClass === className ? 'is-active' : ''}
                onClick={() => setActiveClass(className)}
                aria-pressed={activeClass === className}
              >
                {formatClassName(className)}
                {className !== '全部' && (
                  <span>{species.filter((item) => item.taxonomy.class.zhName === className).length}</span>
                )}
              </button>
            ))}
          </div>

          <div className="result-summary" aria-live="polite">
            <span>SHOWING {String(filteredSpecies.length).padStart(2, '0')}</span>
            <span className="result-summary__line" />
            <span>{query || activeClass !== '全部' || activeStatus !== 'ALL' ? '筛选结果' : '全部记录'}</span>
          </div>

          {filteredSpecies.length > 0 ? (
            <div className="species-grid">
              {filteredSpecies.map((item) => {
                const itemIndex = species.findIndex((candidate) => candidate.slug === item.slug);
                return (
                  <div className="species-grid__item" key={item.slug}>
                    <SpeciesCard
                      item={item}
                      index={itemIndex}
                      saved={bookmarks.includes(item.slug)}
                      onOpen={openSpecies}
                      onToggleSaved={toggleBookmark}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="empty-state">
              <span>∅</span>
              <h3>这片区域还没有记录</h3>
              <p>换一个名字或筛选条件，也许会遇见另一种生命。</p>
              <button type="button" onClick={clearFilters}>清除筛选</button>
            </div>
          )}
        </section>

        <section className="mission-section" id="mission" aria-labelledby="mission-title">
          <div className="mission-section__index" aria-hidden="true">01</div>
          <div className="mission-section__content">
            <p className="section-kicker">WHY WE RECORD · 为何记录</p>
            <h2 id="mission-title">先看见，<br />才有可能在意。</h2>
            <p>
              生物多样性不是抽象的数字。它是夜里振翅的声音、潮池里微小的呼吸，也是我们尚未学会称呼的邻居。Fauna Atlas 用可信、清晰、温柔的方式，让每一条记录成为理解的开始。
            </p>
          </div>
          <div className="mission-principles">
            <div><span>01</span><strong>科学可信</strong><p>保留学名、评估年份与资料出处。</p></div>
            <div><span>02</span><strong>持续生长</strong><p>档案共用一副骨架，增删修订都轻便。</p></div>
            <div><span>03</span><strong>尊重生命</strong><p>不暴露敏感坐标，不消费濒危处境。</p></div>
          </div>
        </section>

        <section className="newsletter" id="about" aria-labelledby="newsletter-title">
          <div className="newsletter__orb" aria-hidden="true"><Feather size={82} strokeWidth={0.7} /></div>
          <div>
            <p className="section-kicker">THE ATLAS IS GROWING · 图册仍在生长</p>
            <h2 id="newsletter-title">把自然，放回日常视野。</h2>
          </div>
          <div className="newsletter__aside">
            <p>Fauna Atlas 正在从第一批物种开始。未来将加入地点、观察记录与更完整的分类关系。</p>
            <button type="button" onClick={scrollToAtlas}>
              浏览首批档案 <ArrowRight size={17} />
            </button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand"><BrandMark /><span>FAUNA ATLAS</span></div>
        <p>一部持续生长的现代生物电子图册。</p>
        <div className="site-footer__meta">
          <span>MADE FOR THE LIVING WORLD</span>
          <span>© 2026 FAUNA ATLAS</span>
        </div>
      </footer>

      {selected && (
        <SpeciesDetail
          item={selected}
          index={Math.max(0, species.findIndex((item) => item.slug === selected.slug))}
          saved={bookmarks.includes(selected.slug)}
          onClose={closeSpecies}
          onToggleSaved={toggleBookmark}
        />
      )}
    </div>
  );
}

export default App;
