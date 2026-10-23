import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { createCanvasMapRenderer, type MapScene } from './canvas-map-renderer';
import type { useMapCamera } from '../hooks/useMapCamera';

interface Props {
  controller: ReturnType<typeof useMapCamera>;
  scene: Omit<MapScene, 'camera' | 'viewport'>;
  children: ReactNode;
}

/** Canvas owns drawing frames; React owns selection and the accessible controls. */
export function CanvasMap({ controller, scene, children }: Props) {
  const base = useRef<HTMLCanvasElement>(null), overlay = useRef<HTMLCanvasElement>(null);
  const renderer = useRef<ReturnType<typeof createCanvasMapRenderer> | undefined>(undefined);
  const { current, viewport, subscribe, surface } = controller;
  useLayoutEffect(() => {
    if (!base.current || !overlay.current) return;
    renderer.current ??= createCanvasMapRenderer(base.current, overlay.current);
    const draw = () => {
      if (surface.current) surface.current.dataset.camera = JSON.stringify(current.current);
      renderer.current?.({ ...scene, camera: current.current, viewport }, window.devicePixelRatio);
    };
    draw();
    const unsubscribe = subscribe(draw);
    window.addEventListener('resize', draw);
    return () => { unsubscribe(); window.removeEventListener('resize', draw); };
  }, [current, viewport, subscribe, surface, scene]);
  return <>
    <canvas ref={base} className="exploration-map__canvas exploration-map__basemap" aria-hidden="true" />
    <canvas ref={overlay} className="exploration-map__canvas exploration-map__points" aria-hidden="true" />
    <div className="exploration-map__accessible-points" aria-label="代表点位，可用 Tab 键选择">{children}</div>
  </>;
}
