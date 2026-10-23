export interface MapCamera { x: number; y: number; zoom: number }
export interface MapPoint { x: number; y: number }

export const worldCamera: MapCamera = { x: 0, y: 0, zoom: 1 };

/** Keep the projected world rectangle covering the logical viewport at every zoom. */
export function constrainCamera(camera: MapCamera): MapCamera {
  const zoom = Math.max(1, Math.min(8, camera.zoom));
  const maxX = 500 * (zoom - 1), maxY = 260 * (zoom - 1);
  return { zoom, x: Math.max(-maxX, Math.min(maxX, camera.x)), y: Math.max(-maxY, Math.min(maxY, camera.y)) };
}

/** Match the canvas's undistorted world fit, including any letterboxed space. */
export function mapPoint(client: MapPoint, rect: Pick<DOMRect, 'left' | 'top' | 'width' | 'height'>): MapPoint {
  const scale = Math.min(rect.width / 1000, rect.height / 520) || 1;
  return { x: (client.x - rect.left - (rect.width - 1000 * scale) / 2) / scale,
    y: (client.y - rect.top - (rect.height - 520 * scale) / 2) / scale };
}

export function zoomCamera(camera: MapCamera, zoom: number, anchor: MapPoint = { x: 500, y: 260 }): MapCamera {
  const next = Math.max(1, Math.min(8, zoom));
  const ratio = next / camera.zoom;
  return constrainCamera({ zoom: next, x: anchor.x - 500 - (anchor.x - 500 - camera.x) * ratio,
    y: anchor.y - 260 - (anchor.y - 260 - camera.y) * ratio });
}

/** Fit representative points with room for markers, including coincident points. */
export function fitMapPoints(points: readonly MapPoint[], maxZoom = 8): MapCamera | undefined {
  if (!points.length) return undefined;
  let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;
  for (const point of points) {
    left = Math.min(left, point.x); right = Math.max(right, point.x);
    top = Math.min(top, point.y); bottom = Math.max(bottom, point.y);
  }
  const zoom = Math.max(1, Math.min(maxZoom, 840 / Math.max(1, right - left), 360 / Math.max(1, bottom - top)));
  return constrainCamera({ zoom, x: (500 - (left + right) / 2) * zoom, y: (260 - (top + bottom) / 2) * zoom });
}
