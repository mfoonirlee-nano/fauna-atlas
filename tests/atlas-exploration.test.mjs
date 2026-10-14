import assert from 'node:assert/strict';
import test from 'node:test';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';
import { act, createElement } from 'react';

async function setup(context) {
  const dom = new JSDOM('<div id="root"></div>', { url: 'https://atlas.test/', pretendToBeVisual: true });
  const keys = ['window', 'document', 'IS_REACT_ACT_ENVIRONMENT', 'ResizeObserver'];
  const previous = keys.map((key) => Object.getOwnPropertyDescriptor(globalThis, key));
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  globalThis.ResizeObserver = class { observe() {} disconnect() {} };
  const { createRoot } = await import('react-dom/client');
  const root = createRoot(document.getElementById('root'));
  const server = await createServer({ server: { middlewareMode: true, watch: null, hmr: false }, appType: 'custom' });
  context.after(async () => {
    await act(() => root.unmount());
    await server.close(); dom.window.close();
    keys.forEach((key, index) => previous[index] ? Object.defineProperty(globalThis, key, previous[index]) : delete globalThis[key]);
  });
  const { species } = await server.ssrLoadModule('virtual:species-catalogue');
  const domain = await server.ssrLoadModule('/src/domain/atlas-exploration.ts');
  const { AtlasExploration } = await server.ssrLoadModule('/src/components/AtlasExploration.tsx');
  return { root, server, species, domain, AtlasExploration };
}

test('map aggregation preserves documented points and search includes taxonomy and ecology', async (context) => {
  const { domain, species, server } = await setup(context);
  const panda = species.find((item) => item.slug === 'giant-panda');
  assert.ok(domain.searchExploration(species, '食肉目', '').some((item) => item.slug === panda.slug));
  assert.deepEqual(domain.searchExploration([panda], '大熊猫', 'marine'), []);
  const invalid = { ...panda, slug: 'invalid', distribution: { ...panda.distribution, center: { lat: 100, lng: 0 } } };
  const missing = { ...panda, slug: 'missing', distribution: { ...panda.distribution, center: undefined } };
  assert.equal(domain.projectSpecies(invalid), undefined);
  assert.equal(domain.projectSpecies(missing), undefined);
  for (const zoom of [1, 2, 4, 8]) {
    const groups = domain.clusterSpecies([...species, missing, invalid], zoom);
    const slugs = groups.flatMap((group) => group.items.map((item) => item.slug));
    assert.equal(slugs.length, species.filter((item) => domain.projectSpecies(item)).length);
    assert.equal(new Set(slugs).size, slugs.length);
    assert.ok(groups.every((group) => Number.isFinite(group.x) && Number.isFinite(group.y)));
  }
});

test('geographic map clusters, zoom, coordinate omissions and profile actions work', async (context) => {
  const { root, species, AtlasExploration } = await setup(context);
  const panda = species.find((item) => item.slug === 'giant-panda');
  const missing = { ...panda, slug: 'missing', names: { ...panda.names, zh: '无坐标示例' }, distribution: { ...panda.distribution, center: undefined } };
  let opened;
  await act(() => root.render(createElement(AtlasExploration, { items: [panda, missing], mode: 'geography', onOpenSpecies: (item) => { opened = item; } })));
  assert.match(document.querySelector('.exploration-map__caption').textContent, /1 个物种有代表坐标.*1 个物种暂未标点/);
  assert.ok(document.querySelector('.exploration-land').getAttribute('d').length > 1000);
  await act(() => document.querySelector('.exploration-marker').dispatchEvent(new window.MouseEvent('click', { bubbles: true })));
  assert.equal(document.querySelectorAll('.exploration-list > button').length, 1);
  await act(() => document.querySelector('.exploration-preview button').click());
  assert.equal(opened.slug, panda.slug);
  await act(() => document.querySelector('[aria-label="放大地图"]').click());
  assert.equal(document.querySelector('.exploration-map__controls span').textContent, '2×');
  assert.equal(document.querySelectorAll('.exploration-list > button').length, 2);
  await act(() => document.querySelector('[aria-label="恢复世界地图"]').click());
  assert.equal(document.querySelector('.exploration-map__controls span').textContent, '1×');
  const selector = document.querySelector('[aria-label="筛选生态环境"]');
  await act(() => {
    selector.value = 'marine';
    selector.dispatchEvent(new window.Event('change', { bubbles: true }));
  });
  assert.ok(document.querySelector('.exploration-empty'));
  await act(() => [...document.querySelectorAll('button')].find((button) => button.textContent === '清除筛选').click());
  assert.equal(document.querySelectorAll('.exploration-list > button').length, 2);
});
