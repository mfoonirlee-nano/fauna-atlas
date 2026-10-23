import { geoGraticule10, geoPath } from 'd3-geo';
import { mapProjection, type MapGroup } from '../domain/atlas-exploration';
import type { MapCamera, MapPoint } from '../domain/map-camera';
import landJson from '../data/maps/land.geojson?raw';

const path = geoPath(mapProjection);
const geometry = { land: path(JSON.parse(landJson)) ?? '', grid: path(geoGraticule10()) ?? '', sphere: path({ type: 'Sphere' }) ?? '' };
const labels = [
  { name: '北美洲', coordinates: [-106, 45] }, { name: '南美洲', coordinates: [-61, -20] },
  { name: '欧 洲', coordinates: [22, 53] }, { name: '非 洲', coordinates: [18, 7] },
  { name: '亚 洲', coordinates: [100, 45] }, { name: '大洋洲', coordinates: [135, -25] },
  { name: '太 平 洋', coordinates: [-145, -8], ocean: true },
  { name: '大 西 洋', coordinates: [-29, 7], ocean: true },
  { name: '印 度 洋', coordinates: [77, -24], ocean: true },
].map((label) => ({ ...label, point: mapProjection(label.coordinates as [number, number])! }));

export interface MapViewport { width: number; height: number }
export interface MapScene {
  camera: MapCamera;
  viewport: MapViewport;
  groups: readonly MapGroup[];
  activeSlugs: ReadonlySet<string>;
  hoverKey?: string;
  selectedPoint?: readonly [number, number];
}

export function mapScreenPoint(point: MapPoint, camera: MapCamera, viewport: MapViewport): MapPoint {
  const scale = Math.min(viewport.width / 1000, viewport.height / 520);
  return { x: viewport.width / 2 + (camera.x + (point.x - 500) * camera.zoom) * scale,
    y: viewport.height / 2 + (camera.y + (point.y - 260) * camera.zoom) * scale };
}

export function markerRadius(count: number) { return Math.min(22, 9 + Math.log2(count + 1) * 2.3); }

/** Hit areas use CSS pixels, exactly like the symbols, independently of DPR and zoom. */
export function hitMapGroup(point: MapPoint, scene: Pick<MapScene, 'camera' | 'viewport' | 'groups'>) {
  let nearest: MapGroup | undefined, distance = Infinity;
  for (const group of scene.groups) {
    const screen = mapScreenPoint(group, scene.camera, scene.viewport);
    const next = Math.hypot(point.x - screen.x, point.y - screen.y);
    if (next <= Math.max(22, markerRadius(group.items.length) + 5) && next < distance) { nearest = group; distance = next; }
  }
  return nearest;
}

function prepare(canvas: HTMLCanvasElement, viewport: MapViewport, ratio: number) {
  const width = Math.max(1, Math.round(viewport.width * ratio)), height = Math.max(1, Math.round(viewport.height * ratio));
  if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; }
  const context = canvas.getContext('2d');
  if (!context) return;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, viewport.width, viewport.height);
  return context;
}

/** Compile the geographic paths once; hover updates only the transparent marker layer. */
export function createCanvasMapRenderer(base: HTMLCanvasElement, overlay: HTMLCanvasElement) {
  const shapes = { land: new Path2D(geometry.land), grid: new Path2D(geometry.grid), sphere: new Path2D(geometry.sphere) };
  let previousBase = '';
  let previousGroups: readonly MapGroup[] | undefined;
  return (scene: MapScene, devicePixelRatio = 1) => {
    const { camera, viewport } = scene;
    const ratio = Math.max(1, Math.min(3, devicePixelRatio || 1));
    const scale = Math.min(viewport.width / 1000, viewport.height / 520);
    const baseKey = `${viewport.width}:${viewport.height}:${ratio}:${camera.x}:${camera.y}:${camera.zoom}`;
    if (baseKey !== previousBase || previousGroups !== scene.groups) {
      const ctx = prepare(base, viewport, ratio);
      if (ctx) {
        previousBase = baseKey;
        previousGroups = scene.groups;
        const water = ctx.createLinearGradient(0, 0, 0, viewport.height);
        water.addColorStop(0, '#dcece8'); water.addColorStop(1, '#c3dad7');
        ctx.fillStyle = water; ctx.fillRect(0, 0, viewport.width, viewport.height);
        ctx.save();
        ctx.translate(viewport.width / 2 + camera.x * scale, viewport.height / 2 + camera.y * scale);
        ctx.scale(scale * camera.zoom, scale * camera.zoom); ctx.translate(-500, -260);
        ctx.fillStyle = '#e5eeeb'; ctx.fill(shapes.sphere);
        ctx.strokeStyle = '#b9d1cc'; ctx.lineWidth = .65 / (scale * camera.zoom); ctx.stroke(shapes.grid);
        ctx.save(); ctx.translate(0, 1.8 / (scale * camera.zoom));
        ctx.fillStyle = '#91ada54a'; ctx.fill(shapes.land); ctx.restore();
        ctx.fillStyle = '#f4f0e1'; ctx.fill(shapes.land);
        ctx.strokeStyle = '#a3b4a3'; ctx.lineWidth = .85 / (scale * camera.zoom); ctx.stroke(shapes.land);
        ctx.restore();
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        for (const label of labels) {
          const point = mapScreenPoint({ x: label.point[0], y: label.point[1] }, camera, viewport);
          if (point.x < 40 || point.x > viewport.width - 40 || point.y < 20 || point.y > viewport.height - 20) continue;
          ctx.font = `${label.ocean ? '400' : '500'} ${label.ocean ? 11 : 12}px system-ui, sans-serif`;
          const labelHalfWidth = ctx.measureText(label.name).width / 2;
          if (scene.groups.some((group) => {
            const marker = mapScreenPoint(group, camera, viewport), radius = markerRadius(group.items.length);
            return Math.abs(marker.x - point.x) < labelHalfWidth + radius + 5 && Math.abs(marker.y - point.y) < radius + 12;
          })) continue;
          ctx.fillStyle = label.ocean ? '#729590' : '#7b856e';
          ctx.fillText(label.name, point.x, point.y);
        }
      }
    }
    const ctx = prepare(overlay, viewport, ratio);
    if (!ctx) return false;
    const drawGroup = (group: MapGroup) => {
      const point = mapScreenPoint(group, camera, viewport), radius = markerRadius(group.items.length);
      if (point.x < -30 || point.x > viewport.width + 30 || point.y < -30 || point.y > viewport.height + 30) return;
      const active = group.items.some((item) => scene.activeSlugs.has(item.slug)), hovered = group.key === scene.hoverKey;
      if (active || hovered) {
        ctx.beginPath(); ctx.arc(point.x, point.y, radius + 6, 0, Math.PI * 2);
        ctx.fillStyle = active ? '#c4774140' : '#315c4b26'; ctx.fill();
      }
      ctx.beginPath(); ctx.arc(point.x, point.y + 2, radius + 1, 0, Math.PI * 2); ctx.fillStyle = '#213f3826'; ctx.fill();
      ctx.beginPath(); ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = active ? '#ae6035' : hovered ? '#244c3e' : '#3f6a54'; ctx.fill();
      ctx.strokeStyle = '#fffdf3'; ctx.lineWidth = hovered ? 2.5 : 1.5; ctx.stroke();
      if (group.items.length === 1) {
        ctx.beginPath(); ctx.arc(point.x, point.y, 3, 0, Math.PI * 2); ctx.fillStyle = '#fff9e6'; ctx.fill();
      } else {
        ctx.font = '600 11px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillStyle = '#fff9e6'; ctx.fillText(String(group.items.length), point.x, point.y + .5);
      }
    };
    // Selected and hovered groups stay legible above their neighbours.
    for (const group of scene.groups) if (group.key !== scene.hoverKey) drawGroup(group);
    const hovered = scene.groups.find((group) => group.key === scene.hoverKey);
    if (hovered) drawGroup(hovered);
    if (scene.selectedPoint) {
      const point = mapScreenPoint({ x: scene.selectedPoint[0], y: scene.selectedPoint[1] }, camera, viewport);
      ctx.beginPath(); ctx.arc(point.x, point.y, 26, 0, Math.PI * 2); ctx.strokeStyle = '#b65f31'; ctx.lineWidth = 2; ctx.stroke();
      ctx.beginPath(); ctx.arc(point.x, point.y, 4, 0, Math.PI * 2); ctx.fillStyle = '#fff7e8'; ctx.fill();
    }
    return true;
  };
}
