import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from 'react';

const Animals = lazy(() => import('./App'));
const Microbes = lazy(() => import('./topics/microbes/MicrobesPage'));

export function isMicrobesRoute(hash: string) {
  return hash === '#microbes' || hash.startsWith('#microbes/');
}

class PageBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return <main className="page-notice" role="alert">
      <h1>页面暂时未能加载</h1>
      <p>请检查网络后重新加载。</p>
      <button type="button" onClick={() => window.location.reload()}>重新加载</button>
      <a href="#atlas">返回动物图鉴</a>
    </main>;
    return this.props.children;
  }
}

function ReadyPage({ microbes }: { microbes: boolean }) {
  useEffect(() => {
    document.title = microbes ? '微生物专题 · Fauna Atlas' : 'Fauna Atlas · 万物生灵图册';
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) target.scrollIntoView?.({ block: 'start' });
    if (microbes) document.querySelector<HTMLElement>('#microbes-title')?.focus({ preventScroll: true });
  }, [microbes]);
  return microbes ? <Microbes /> : <Animals />;
}

export function AtlasRouter() {
  const [microbes, setMicrobes] = useState(() => isMicrobesRoute(window.location.hash));
  useEffect(() => {
    const update = () => setMicrobes(isMicrobesRoute(window.location.hash));
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  return <PageBoundary key={String(microbes)}>
    <Suspense fallback={<main className="page-notice" role="status">正在加载页面…</main>}>
      <ReadyPage microbes={microbes} />
    </Suspense>
  </PageBoundary>;
}
