import { useEffect, useRef, type CSSProperties } from 'react';
import type { Species } from '../types';

export type TaxonomyDiagramLayout = 'overview' | 'path' | 'focus' | 'mobile-path';

export interface TaxonomyDiagramNode {
  readonly id: string;
  readonly kind: 'taxon' | 'species';
  readonly rankLabel: string;
  readonly zhName: string;
  readonly scientificName: string;
  readonly x: number;
  readonly y: number;
  readonly leafSlugs: readonly string[];
  readonly labelPosition?: 'above' | 'below';
  readonly species?: Species;
}

export interface TaxonomyDiagramEdge {
  readonly id: string;
  readonly from: string;
  readonly to: string;
  readonly leafSlugs: readonly string[];
  /** Ranked taxon nodes intentionally compressed between the visible endpoints. */
  readonly collapsedRanks?: readonly string[];
}

interface TaxonomyDiagramProps {
  readonly nodes: readonly TaxonomyDiagramNode[];
  readonly edges: readonly TaxonomyDiagramEdge[];
  readonly height: number;
  readonly layout: TaxonomyDiagramLayout;
  readonly theme: 'light' | 'dark';
  readonly activeSlug?: string;
  readonly ariaLabel: string;
  readonly onActivateSpecies?: (item: Species) => void;
  readonly onOpenSpecies: (item: Species) => void;
}

function nodePositionStyle(node: TaxonomyDiagramNode): CSSProperties {
  return {
    '--diagram-x': `${node.x * 100}%`,
    '--diagram-y': `${node.y * 100}%`,
  } as CSSProperties;
}

export function TaxonomyDiagram({
  nodes,
  edges,
  height,
  layout,
  theme,
  activeSlug,
  ariaLabel,
  onActivateSpecies,
  onOpenSpecies,
}: TaxonomyDiagramProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    let animationFrame = 0;

    const draw = () => {
      const width = host.clientWidth;
      const canvasHeight = host.clientHeight;
      if (width <= 0 || canvasHeight <= 0) return;

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(canvasHeight * pixelRatio);

      const context = canvas.getContext('2d');
      if (!context) return;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, canvasHeight);
      context.lineCap = 'round';
      context.lineJoin = 'round';

      const styles = getComputedStyle(host);
      const quietLine = styles.getPropertyValue('--taxonomy-diagram-line').trim() || 'rgba(23, 63, 53, 0.25)';
      const activeLine = styles.getPropertyValue('--taxonomy-diagram-active').trim() || '#9e593f';
      const nodeById = new Map(nodes.map((node) => [node.id, node]));

      const traceEdge = (edge: TaxonomyDiagramEdge) => {
        const from = nodeById.get(edge.from);
        const to = nodeById.get(edge.to);
        if (!from || !to) return;

        const fromX = from.x * width;
        const fromY = from.y * canvasHeight;
        const toX = to.x * width;
        const toY = to.y * canvasHeight;
        const horizontal = Math.abs(toX - fromX) >= Math.abs(toY - fromY);

        context.beginPath();
        context.moveTo(fromX, fromY);
        if (horizontal) {
          const bendX = fromX + (toX - fromX) * 0.52;
          context.bezierCurveTo(bendX, fromY, bendX, toY, toX, toY);
        } else {
          const bendY = fromY + (toY - fromY) * 0.52;
          context.bezierCurveTo(fromX, bendY, toX, bendY, toX, toY);
        }
        context.stroke();
      };

      const strokeEdge = (edge: TaxonomyDiagramEdge) => {
        context.setLineDash(edge.collapsedRanks?.length ? [4, 6] : []);
        traceEdge(edge);
      };

      context.strokeStyle = quietLine;
      context.lineWidth = 1;
      for (const edge of edges) strokeEdge(edge);

      if (activeSlug) {
        context.strokeStyle = activeLine;
        context.lineWidth = 2.25;
        for (const edge of edges) {
          if (edge.leafSlugs.includes(activeSlug)) strokeEdge(edge);
        }
      }
      context.setLineDash([]);
    };

    const scheduleDraw = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(draw);
    };

    const resizeObserver = new ResizeObserver(scheduleDraw);
    let resolutionQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
    const handleResolutionChange = () => {
      resolutionQuery.removeEventListener('change', handleResolutionChange);
      resolutionQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
      resolutionQuery.addEventListener('change', handleResolutionChange);
      scheduleDraw();
    };

    resizeObserver.observe(host);
    resolutionQuery.addEventListener('change', handleResolutionChange);
    window.addEventListener('resize', scheduleDraw);
    scheduleDraw();

    return () => {
      resizeObserver.disconnect();
      resolutionQuery.removeEventListener('change', handleResolutionChange);
      window.removeEventListener('resize', scheduleDraw);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [activeSlug, edges, nodes, theme]);

  return (
    <div
      ref={hostRef}
      className={`taxonomy-diagram taxonomy-diagram--${layout}`}
      style={{ height }}
      role="group"
      aria-label={ariaLabel}
    >
      <canvas ref={canvasRef} className="taxonomy-diagram__canvas" aria-hidden="true" />
      {nodes.map((node) =>
        node.kind === 'species' && node.species ? (
          <button
            key={node.id}
            type="button"
            className={`taxonomy-diagram__node taxonomy-diagram__node--species${
              activeSlug === node.species.slug ? ' is-active' : ''
            }`}
            style={nodePositionStyle(node)}
            data-label-position={node.labelPosition}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') onActivateSpecies?.(node.species!);
            }}
            onFocus={() => onActivateSpecies?.(node.species!)}
            onClick={() => {
              if (onActivateSpecies && activeSlug !== node.species!.slug) {
                onActivateSpecies(node.species!);
                return;
              }
              onOpenSpecies(node.species!);
            }}
            aria-label={
              onActivateSpecies && activeSlug !== node.species.slug
                ? `选择${node.species.names.zh}以查看完整分类路径`
                : `打开${node.species.names.zh}（${node.species.scientificName}）物种档案`
            }
          >
            <span className="taxonomy-diagram__marker" aria-hidden="true" />
            <span className="taxonomy-diagram__node-copy">
              <small>{node.rankLabel}</small>
              <strong>{node.zhName}</strong>
              <i lang="la">{node.scientificName}</i>
            </span>
          </button>
        ) : (
          <div
            key={node.id}
            className="taxonomy-diagram__node taxonomy-diagram__node--taxon"
            style={nodePositionStyle(node)}
            data-label-position={node.labelPosition}
            aria-hidden="true"
          >
            <span className="taxonomy-diagram__marker" />
            <span className="taxonomy-diagram__node-copy">
              <small>{node.rankLabel}</small>
              <strong>{node.zhName}</strong>
              <i lang="la">{node.scientificName}</i>
            </span>
          </div>
        ),
      )}
    </div>
  );
}
