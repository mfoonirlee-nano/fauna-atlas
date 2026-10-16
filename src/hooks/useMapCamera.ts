import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { constrainCamera, mapPoint, worldCamera, zoomCamera, type MapCamera, type MapPoint } from '../domain/map-camera';

interface Contact { start: MapPoint; point: MapPoint }

/** A single camera drives the surface and markers together, including animation. */
export function useMapCamera() {
  const svg = useRef<SVGSVGElement>(null);
  const current = useRef(worldCamera);
  const destination = useRef(worldCamera);
  const [camera, setCamera] = useState(worldCamera);
  const [interacting, setInteracting] = useState(false);
  const [viewportScale, setViewportScale] = useState(1);
  const contacts = useRef(new Map<number, Contact>());
  const gesture = useRef<{ camera: MapCamera; center: MapPoint; distance: number } | undefined>(undefined);
  const suppressClick = useRef(false);
  const animation = useRef<number | undefined>(undefined);
  const renderFrame = useRef<number | undefined>(undefined);
  const wheelEnd = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const stopAnimation = useCallback(() => {
    if (animation.current !== undefined) window.cancelAnimationFrame(animation.current);
    animation.current = undefined;
  }, []);
  const publish = useCallback((next: MapCamera, deferred = false) => {
    current.current = constrainCamera(next);
    if (deferred) {
      destination.current = current.current;
      if (renderFrame.current === undefined) renderFrame.current = window.requestAnimationFrame(() => {
        renderFrame.current = undefined; setCamera(current.current);
      });
    } else {
      if (renderFrame.current !== undefined) window.cancelAnimationFrame(renderFrame.current);
      renderFrame.current = undefined; setCamera(current.current);
    }
  }, []);
  const moveTo = useCallback((next: MapCamera, animate = true) => {
    stopAnimation();
    const target = constrainCamera(next), from = current.current;
    destination.current = target;
    if (!animate || !window.matchMedia?.('(prefers-reduced-motion: no-preference)').matches) {
      publish(target); return;
    }
    const start = performance.now();
    const frame = (now: number) => {
      const t = Math.min(1, (now - start) / 240), eased = 1 - (1 - t) ** 3;
      publish({ x: from.x + (target.x - from.x) * eased, y: from.y + (target.y - from.y) * eased,
        zoom: from.zoom + (target.zoom - from.zoom) * eased });
      animation.current = t < 1 ? window.requestAnimationFrame(frame) : undefined;
    };
    animation.current = window.requestAnimationFrame(frame);
  }, [publish, stopAnimation]);
  const zoomTo = useCallback((value: number, anchor?: MapPoint, animate = true) => {
    moveTo(zoomCamera(animate ? destination.current : current.current, value, anchor), animate);
  }, [moveTo]);
  const rebase = () => {
    const points = [...contacts.current.values()].map((contact) => contact.point);
    const a = points[0], b = points[1];
    gesture.current = a ? { camera: current.current,
      center: b ? { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 } : a,
      distance: b ? Math.hypot(b.x - a.x, b.y - a.y) : 0 } : undefined;
  };
  const pointerDown = (event: ReactPointerEvent<SVGSVGElement>) => {
    if (event.button !== 0 || contacts.current.size >= 2) return;
    stopAnimation();
    destination.current = current.current;
    clearTimeout(wheelEnd.current);
    if (!contacts.current.size) suppressClick.current = false;
    const point = mapPoint({ x: event.clientX, y: event.clientY }, event.currentTarget.getBoundingClientRect());
    contacts.current.set(event.pointerId, { start: point, point });
    // Markers may unmount during reclustering; capture on the stable SVG instead.
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.focus({ preventScroll: true });
    if (contacts.current.size === 2) { suppressClick.current = true; setInteracting(true); }
    rebase();
  };
  const pointerMove = (event: ReactPointerEvent<SVGSVGElement>) => {
    const contact = contacts.current.get(event.pointerId), base = gesture.current;
    if (!contact || !base) return;
    const rect = event.currentTarget.getBoundingClientRect();
    contact.point = mapPoint({ x: event.clientX, y: event.clientY }, rect);
    const screenScale = Math.min(rect.width / 1000, rect.height / 520) || 1;
    if (!suppressClick.current && Math.hypot(contact.point.x - contact.start.x, contact.point.y - contact.start.y) * screenScale < 5) return;
    suppressClick.current = true; setInteracting(true);
    const [a, b] = [...contacts.current.values()].map((entry) => entry.point);
    if (!a) return;
    const center = b ? { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 } : a;
    const zoomed = zoomCamera(base.camera, b && base.distance > 0
      ? base.camera.zoom * Math.hypot(b.x - a.x, b.y - a.y) / base.distance : base.camera.zoom, base.center);
    publish({ ...zoomed, x: zoomed.x + center.x - base.center.x, y: zoomed.y + center.y - base.center.y }, true);
  };
  const pointerEnd = (event: ReactPointerEvent<SVGSVGElement>) => {
    if (!contacts.current.delete(event.pointerId)) return;
    if (event.type === 'pointercancel' || event.type === 'lostpointercapture') suppressClick.current = true;
    const target = event.currentTarget;
    if (target.hasPointerCapture?.(event.pointerId)) target.releasePointerCapture(event.pointerId);
    publish(current.current); rebase();
    if (!contacts.current.size) setInteracting(false);
  };
  useEffect(() => {
    const element = svg.current;
    if (!element) return;
    const wheel = (event: WheelEvent) => {
      if (!element.contains(document.activeElement) && !event.ctrlKey && !event.metaKey) return;
      event.preventDefault();
      if (contacts.current.size) return;
      stopAnimation();
      setInteracting(true);
      clearTimeout(wheelEnd.current);
      wheelEnd.current = setTimeout(() => { if (!contacts.current.size) setInteracting(false); }, 140);
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? element.clientHeight : 1);
      const anchor = mapPoint({ x: event.clientX, y: event.clientY }, element.getBoundingClientRect());
      publish(zoomCamera(current.current, current.current.zoom * Math.exp(-Math.max(-100, Math.min(100, delta)) * .002), anchor), true);
    };
    const cancel = () => {
      for (const id of contacts.current.keys()) {
        if (element.hasPointerCapture?.(id)) element.releasePointerCapture(id);
      }
      contacts.current.clear(); gesture.current = undefined; suppressClick.current = true;
      clearTimeout(wheelEnd.current); stopAnimation(); destination.current = current.current; setInteracting(false);
    };
    const resize = () => {
      const rect = element.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) setViewportScale(Math.min(rect.width / 1000, rect.height / 520));
    };
    const observer = new ResizeObserver(resize);
    observer.observe(element); resize();
    element.addEventListener('wheel', wheel, { passive: false });
    window.addEventListener('blur', cancel);
    return () => {
      element.removeEventListener('wheel', wheel); window.removeEventListener('blur', cancel);
      observer.disconnect(); clearTimeout(wheelEnd.current);
      stopAnimation();
      if (renderFrame.current !== undefined) window.cancelAnimationFrame(renderFrame.current);
    };
  }, [publish, stopAnimation]);
  return { svg, camera, current, destination, interacting, viewportScale, contacts, suppressClick, moveTo, zoomTo,
    pointerHandlers: { onPointerDown: pointerDown, onPointerMove: pointerMove,
      onPointerUp: pointerEnd, onPointerCancel: pointerEnd, onLostPointerCapture: pointerEnd } };
}
