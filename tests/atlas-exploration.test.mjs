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
  const { buildTaxonomyTree } = await server.ssrLoadModule('/src/domain/taxonomy.ts');
  const visit = (nodes) => {
    const tiles = domain.layoutTaxonomyTiles(nodes, 320, 220);
    assert.equal(tiles.length, nodes.length);
    for (const tile of tiles) {
      assert.ok(tile.x >= 0 && tile.y >= 0 && tile.width >= 0 && tile.height >= 0);
      assert.ok(tile.x + tile.width <= 320 && tile.y + tile.height <= 220);
      if (tile.node.kind === 'taxon') visit(tile.node.children);
    }
  };
  visit(buildTaxonomyTree(species));
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
  assert.equal(document.querySelectorAll('.exploration-list > button').length, 1, 'zoom keeps the chosen point list');
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

test('single-screen taxonomy drills through existing ranks, opens species and returns to overview', async (context) => {
  const { root, species, AtlasExploration } = await setup(context);
  // A documented path with no assigned order must remain navigable.
  const item = species.find((item) => item.slug === 'kowalevsky-acorn-worm');
  assert.ok(item && !item.taxonomy.order);
  let opened;
  await act(() => root.render(createElement(AtlasExploration, { items: [item], mode: 'compact', onOpenSpecies: (value) => { opened = value; } })));
  const rankCount = Object.values(item.taxonomy).length;
  for (let i = 1; i < rankCount; i++) await act(() => document.querySelector('.exploration-tile').click());
  assert.equal(document.querySelectorAll('.exploration-breadcrumb button').length, rankCount + 2);
  await act(() => document.querySelector('.exploration-tile').click());
  await act(() => document.querySelector('.exploration-preview button').click());
  assert.equal(opened.slug, item.slug);
  await act(() => document.querySelector('.exploration-breadcrumb button').click());
  assert.equal(document.querySelectorAll('.exploration-breadcrumb button').length, 3);
});

test('regional navigation, point previews and keyboard exploration preserve species access', async (context) => {
  const { root, species, AtlasExploration, domain } = await setup(context);
  const panda = species.find((item) => item.slug === 'giant-panda');
  const missing = { ...panda, slug: 'unmapped', names: { ...panda.names, zh: '未标点物种' }, distribution: { ...panda.distribution, center: undefined } };
  await act(() => root.render(createElement(AtlasExploration, { items: [panda, missing], mode: 'geography', onOpenSpecies() {} })));
  const asia = [...document.querySelectorAll('.exploration-regions button')].find((button) => button.textContent === '亚洲');
  await act(() => asia.click());
  assert.equal(asia.getAttribute('aria-pressed'), 'true');
  assert.equal(document.querySelector('.exploration-map__controls span').textContent, '2×');
  assert.equal(document.querySelectorAll('.exploration-list > button').length, 2, 'region shortcuts reposition the map without filtering the catalogue');
  const surface = document.querySelector('.exploration-map__surface');
  const regionalTransform = surface.getAttribute('transform');
  const map = document.querySelector('.exploration-map > svg');
  await act(() => map.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })));
  assert.notEqual(surface.getAttribute('transform'), regionalTransform);
  assert.equal(document.querySelector('.exploration-map__identity strong').textContent, '自由探索');
  const marker = document.querySelector('.exploration-marker');
  await act(() => marker.dispatchEvent(new window.FocusEvent('focusin', { bubbles: true })));
  assert.match(document.querySelector('.exploration-map__tooltip').textContent, /大熊猫/);
  await act(() => marker.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true })));
  assert.equal(document.querySelector('.exploration-map__tooltip'), null);
  assert.match(document.querySelector('.exploration-field-note').textContent, /°N.*°E/);
  assert.equal(document.querySelectorAll('.exploration-list > button').length, 1);
  await act(() => map.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true })));
  assert.equal(document.querySelector('.exploration-map__controls span').textContent, '1×');
  assert.equal(document.querySelector('.exploration-field-note'), null);
  const pandaButton = [...document.querySelectorAll('.exploration-list > button')].find((button) => button.textContent.includes('大熊猫'));
  await act(() => pandaButton.click());
  assert.equal(document.querySelector('.exploration-marker').getAttribute('aria-pressed'), 'true');
  const point = domain.projectSpecies(panda);
  assert.equal(surface.getAttribute('transform'), `translate(${500 + Math.max(-500, Math.min(500, (500 - point[0]) * 2))} ${260 + Math.max(-260, Math.min(260, (260 - point[1]) * 2))}) scale(2) translate(-500 -260)`);
  const missingButton = [...document.querySelectorAll('.exploration-list > button')].find((button) => button.textContent.includes('未标点物种'));
  const locatedTransform = surface.getAttribute('transform');
  await act(() => missingButton.click());
  assert.equal(surface.getAttribute('transform'), locatedTransform, 'unmapped species do not move the map');
  assert.match(document.querySelector('.exploration-field-note').textContent, /暂无代表坐标/);
  assert.equal(document.querySelector('.exploration-selected-point'), null);
});

test('native fullscreen follows browser exit and keeps the map selection', async (context) => {
  const { root, species, AtlasExploration } = await setup(context);
  const panda = species.find((item) => item.slug === 'giant-panda');
  let fullscreenElement = null;
  Object.defineProperty(document, 'fullscreenElement', { configurable: true, get: () => fullscreenElement });
  document.exitFullscreen = async () => {
    fullscreenElement = null;
    document.dispatchEvent(new window.Event('fullscreenchange'));
  };
  let opened;
  await act(() => root.render(createElement(AtlasExploration, { items: [panda], mode: 'geography', onOpenSpecies: (item) => { opened = item; } })));
  const workspace = document.querySelector('.exploration-workspace');
  workspace.requestFullscreen = async () => {
    fullscreenElement = workspace;
    document.dispatchEvent(new window.Event('fullscreenchange'));
  };
  await act(() => document.querySelector('.exploration-list > button').click());
  const transform = document.querySelector('.exploration-map__surface').getAttribute('transform');
  await act(async () => document.querySelector('[aria-label="全屏展示地理分布"]').click());
  assert.equal(document.fullscreenElement, workspace);
  assert.ok(workspace.classList.contains('is-fullscreen'));
  assert.equal(document.querySelector('[aria-label="退出全屏展示"]').getAttribute('aria-pressed'), 'true');
  assert.equal(document.querySelector('.exploration-map__surface').getAttribute('transform'), transform);
  await act(() => document.querySelector('.exploration-map > svg').dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true })));
  assert.equal(document.querySelector('.exploration-map__surface').getAttribute('transform'), transform, 'Escape in fullscreen does not reset the map');
  await act(async () => document.exitFullscreen()); // Browser Esc exits independently of the component button.
  assert.ok(!workspace.classList.contains('is-fullscreen'));
  assert.equal(document.querySelector('.exploration-list > button').getAttribute('aria-pressed'), 'true');
  await act(async () => document.querySelector('[aria-label="全屏展示地理分布"]').click());
  await act(async () => document.querySelector('[aria-label="退出全屏展示"]').click());
  assert.equal(document.fullscreenElement, null);
  await act(async () => document.querySelector('[aria-label="全屏展示地理分布"]').click());
  await act(async () => document.querySelector('.exploration-preview button').click());
  assert.equal(document.fullscreenElement, null, 'opening a profile leaves fullscreen so the profile remains visible');
  assert.equal(opened.slug, panda.slug);
});

test('fullscreen fallback supports Escape, focus containment and scroll restoration', async (context) => {
  const { root, species, AtlasExploration } = await setup(context);
  const panda = species.find((item) => item.slug === 'giant-panda');
  await act(() => root.render(createElement(AtlasExploration, { items: [panda], mode: 'geography', onOpenSpecies() {} })));
  const workspace = document.querySelector('.exploration-workspace');
  const button = document.querySelector('[aria-label="全屏展示地理分布"]');
  document.body.style.overflow = 'scroll';
  await act(async () => button.click());
  assert.ok(workspace.classList.contains('is-page-fullscreen'));
  assert.equal(workspace.getAttribute('aria-modal'), 'true');
  assert.equal(document.body.style.overflow, 'hidden');
  const last = [...workspace.querySelectorAll('button:not(:disabled), input, select, [tabindex="0"]')].at(-1);
  await act(() => last.focus());
  const tab = new window.KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
  await act(() => last.dispatchEvent(tab));
  assert.equal(tab.defaultPrevented, true);
  assert.equal(document.activeElement, button);
  await act(() => document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true })));
  assert.ok(!workspace.classList.contains('is-fullscreen'));
  assert.equal(document.body.style.overflow, 'scroll');
  assert.equal(document.activeElement, button);
  workspace.requestFullscreen = async () => { throw new Error('Fullscreen blocked'); };
  await act(async () => button.click());
  assert.ok(workspace.classList.contains('is-page-fullscreen'), 'native rejection still allows viewport expansion');
  await act(() => root.unmount());
  assert.equal(document.body.style.overflow, 'scroll');
});

test('compact overview links tile previews to the list and clears selection when navigating back', async (context) => {
  const { root, species, AtlasExploration } = await setup(context);
  const panda = species.find((item) => item.slug === 'giant-panda');
  const worm = species.find((item) => item.slug === 'kowalevsky-acorn-worm');
  let resize;
  globalThis.ResizeObserver = class {
    constructor(callback) { resize = callback; }
    observe() {}
    disconnect() {}
  };
  await act(() => root.render(createElement(AtlasExploration, { items: [panda, worm], mode: 'compact', onOpenSpecies() {} })));
  assert.equal(document.querySelector('.exploration-compact__context > span > strong').textContent, '2');
  assert.ok(document.querySelector('.exploration-compact__welcome'));
  const firstTile = document.querySelector('.exploration-tile');
  const name = firstTile.querySelector('strong').textContent;
  const tone = firstTile.className.match(/exploration-tile--\d/)[0];
  await act(() => firstTile.dispatchEvent(new window.MouseEvent('pointerover', { bubbles: true })));
  assert.equal(document.querySelector('.exploration-taxon-note > strong').textContent, name);
  assert.match(document.querySelector('.exploration-taxon-note p').textContent, /大熊猫/);
  const highlightedRow = document.querySelector('.exploration-list > button.is-highlighted');
  assert.equal(highlightedRow.querySelector('.exploration-compact__name').firstChild.textContent, name);
  // Narrow cells keep the same identity, while the list exposes full names and actions.
  await act(() => resize([{ contentRect: { width: 80, height: 40 } }]));
  assert.equal(document.querySelector('.exploration-tile').className.match(/exploration-tile--\d/)[0], tone);
  assert.ok(document.querySelector('.exploration-tile--tiny'));
  assert.equal(document.querySelectorAll('.exploration-list > button').length, 2);
  await act(() => document.querySelector('.exploration-taxon-note button').click());
  assert.equal(document.activeElement, document.querySelector('.exploration-tiles'), 'drill-down keeps keyboard focus within the overview');
  assert.equal(document.querySelector('.exploration-compact__context h3').firstChild.textContent, name);
  assert.equal(document.querySelector('.exploration-breadcrumb [aria-current="location"]').firstElementChild.tagName.toLowerCase(), 'svg');
  for (let depth = 0; depth < 8; depth++) {
    const tile = document.querySelector('.exploration-tile');
    if (tile.hasAttribute('aria-pressed')) break;
    await act(() => tile.click());
  }
  const speciesTile = document.querySelector('.exploration-tile');
  assert.equal(speciesTile.getAttribute('aria-pressed'), 'false');
  await act(() => speciesTile.focus());
  await act(() => speciesTile.click());
  assert.equal(document.querySelector('.exploration-tile.is-selected').getAttribute('aria-pressed'), 'true');
  assert.equal(document.querySelector('.exploration-list > button').getAttribute('aria-pressed'), 'true');
  assert.match(document.querySelector('.exploration-preview').textContent, /大熊猫/);
  await act(() => document.querySelector('.exploration-breadcrumb button').click());
  assert.equal(document.querySelector('.exploration-preview'), null);
  assert.equal(document.querySelector('.exploration-taxon-note'), null);
  assert.ok(document.querySelector('.exploration-compact__welcome'));
  assert.equal(document.querySelectorAll('.exploration-list > button').length, 2);
  assert.equal(document.querySelector('.exploration-breadcrumb button:last-child').disabled, true);
});

function mapPointer(map, type, x, y, pointerId = 1, pointerType = 'mouse') {
  const event = new window.MouseEvent(type, { bubbles: true, cancelable: true, clientX: x, clientY: y, button: 0 });
  Object.defineProperties(event, { pointerId: { value: pointerId }, pointerType: { value: pointerType } });
  map.dispatchEvent(event);
}

function mockMapGeometry(map) {
  map.getBoundingClientRect = () => ({ left: 0, top: 0, width: 1000, height: 520 });
  const captured = new Set();
  map.setPointerCapture = (id) => captured.add(id);
  map.hasPointerCapture = (id) => captured.has(id);
  map.releasePointerCapture = (id) => captured.delete(id);
  return captured;
}

function readCamera() {
  const transform = document.querySelector('.exploration-map__surface').getAttribute('transform');
  const values = [...transform.matchAll(/-?\d+(?:\.\d+)?(?:e[-+]?\d+)?/gi)].map((match) => Number(match[0]));
  return { x: values[0] - 500, y: values[1] - 260, zoom: values[2] };
}

test('map wheel zoom anchors the pointer and leaves ordinary page scrolling alone', async (context) => {
  const { root, species, AtlasExploration } = await setup(context);
  await act(() => root.render(createElement(AtlasExploration, { items: species.slice(0, 3), mode: 'geography', onOpenSpecies() {} })));
  const map = document.querySelector('.exploration-map > svg');
  mockMapGeometry(map);
  const wheel = (extra = {}) => new window.WheelEvent('wheel', { bubbles: true, cancelable: true, clientX: 650, clientY: 300, deltaY: -100, ...extra });
  const pageScroll = wheel();
  await act(() => map.dispatchEvent(pageScroll));
  assert.equal(pageScroll.defaultPrevented, false);
  await act(() => map.focus());
  const zoomGesture = wheel();
  await act(async () => { map.dispatchEvent(zoomGesture); await new Promise((resolve) => window.requestAnimationFrame(resolve)); });
  assert.equal(zoomGesture.defaultPrevented, true, 'an engaged map must handle wheel zoom');
  const camera = readCamera();
  assert.ok(camera.zoom > 1 && camera.zoom < 2, 'wheel zoom is continuous, not a 2x jump');
  assert.ok(Math.abs(500 + camera.x + 150 * camera.zoom - 650) < 0.001, 'pointer stays over the same longitude');
  assert.ok(Math.abs(260 + camera.y + 40 * camera.zoom - 300) < 0.001, 'pointer stays over the same latitude');
});

test('map drag captures immediately, respects bounds and survives pointer cancellation', async (context) => {
  const { root, species, AtlasExploration } = await setup(context);
  await act(() => root.render(createElement(AtlasExploration, { items: species.slice(0, 3), mode: 'geography', onOpenSpecies() {} })));
  const map = document.querySelector('.exploration-map > svg');
  const captured = mockMapGeometry(map);
  await act(() => document.querySelector('[aria-label="放大地图"]').click());
  await act(() => mapPointer(map, 'pointerdown', 400, 250));
  assert.ok(captured.has(1), 'release outside the map must still finish the gesture');
  await act(async () => { mapPointer(map, 'pointermove', 10000, 10000); await new Promise((resolve) => window.requestAnimationFrame(resolve)); });
  const camera = readCamera();
  assert.ok(Math.abs(camera.x) <= 500 && Math.abs(camera.y) <= 260, 'drag cannot move the entire map out of view at 2x');
  await act(() => mapPointer(map, 'pointercancel', 10000, 10000));
  const stopped = readCamera();
  await act(() => mapPointer(map, 'pointermove', 0, 0));
  assert.deepEqual(readCamera(), stopped);
  assert.equal(document.querySelector('.exploration-map.is-dragging'), null);
});

test('zoom preserves a chosen point list and never silently chooses the first species of a cluster', async (context) => {
  const { root, species, AtlasExploration } = await setup(context);
  const panda = species.find((item) => item.slug === 'giant-panda');
  const neighbor = { ...panda, slug: 'neighbor', names: { ...panda.names, zh: '同点位物种' } };
  await act(() => root.render(createElement(AtlasExploration, { items: [panda, neighbor], mode: 'geography', onOpenSpecies() {} })));
  await act(() => document.querySelector('.exploration-marker').dispatchEvent(new window.MouseEvent('click', { bubbles: true })));
  assert.ok(!document.querySelector('.exploration-field-note'), 'a multi-species point requires an explicit species choice');
  await act(() => document.querySelectorAll('.exploration-list > button')[1].click());
  await act(() => document.querySelector('[aria-label="放大地图"]').click());
  assert.match(document.querySelector('.exploration-sidebar__heading').textContent, /点位内的物种/);
  assert.equal(document.querySelectorAll('.exploration-list > button')[1].getAttribute('aria-pressed'), 'true');
});

async function nextMapFrame(action) {
  await act(async () => { action(); await new Promise((resolve) => window.requestAnimationFrame(resolve)); });
}

test('pinch zoom, one-finger continuation and drag click suppression stay independent of keyboard selection', async (context) => {
  const { root, species, AtlasExploration } = await setup(context);
  const panda = species.find((item) => item.slug === 'giant-panda');
  await act(() => root.render(createElement(AtlasExploration, { items: [panda], mode: 'geography', onOpenSpecies() {} })));
  const map = document.querySelector('.exploration-map > svg');
  mockMapGeometry(map);
  await act(() => {
    mapPointer(map, 'pointerdown', 400, 260, 1, 'touch');
    mapPointer(map, 'pointerdown', 600, 260, 2, 'touch');
  });
  await nextMapFrame(() => mapPointer(map, 'pointermove', 800, 260, 2, 'touch'));
  assert.equal(readCamera().zoom, 2);
  const pinched = readCamera();
  await act(() => mapPointer(map, 'pointerup', 800, 260, 2, 'touch'));
  await nextMapFrame(() => mapPointer(map, 'pointermove', 450, 260, 1, 'touch'));
  assert.equal(readCamera().x, pinched.x + 50, 'remaining finger continues panning without a jump');
  await act(() => mapPointer(map, 'pointerup', 450, 260, 1, 'touch'));
  const marker = document.querySelector('.exploration-marker');
  await act(() => marker.dispatchEvent(new window.MouseEvent('click', { bubbles: true, detail: 1 })));
  assert.ok(!document.querySelector('.exploration-field-note'), 'the click after a gesture must not select');
  await act(() => marker.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true })));
  assert.ok(document.querySelector('.exploration-field-note'), 'keyboard activation still works after a gesture');
  const beforeClear = readCamera();
  await act(() => map.dispatchEvent(new window.MouseEvent('click', { bubbles: true, detail: 0 })));
  assert.ok(!document.querySelector('.exploration-field-note'));
  assert.deepEqual(readCamera(), beforeClear, 'clearing a selection does not reset the camera');
});

test('double-click anchors zoom and lost capture stops further movement', async (context) => {
  const { root, species, AtlasExploration } = await setup(context);
  await act(() => root.render(createElement(AtlasExploration, { items: species.slice(0, 3), mode: 'geography', onOpenSpecies() {} })));
  const map = document.querySelector('.exploration-map > svg');
  mockMapGeometry(map);
  await act(() => map.dispatchEvent(new window.MouseEvent('dblclick', { bubbles: true, cancelable: true, clientX: 600, clientY: 300 })));
  assert.deepEqual(readCamera(), { x: -100, y: -40, zoom: 2 });
  await act(() => mapPointer(map, 'pointerdown', 400, 250));
  await nextMapFrame(() => mapPointer(map, 'pointermove', 450, 250));
  await act(() => mapPointer(map, 'lostpointercapture', 450, 250));
  const stopped = readCamera();
  await nextMapFrame(() => mapPointer(map, 'pointermove', 650, 250));
  assert.deepEqual(readCamera(), stopped);
  assert.ok(!document.querySelector('.exploration-map.is-dragging'));
});

test('camera math handles letterboxed SVGs and keeps the world visible over repeated zooms', async (context) => {
  const { server } = await setup(context);
  const { mapPoint, zoomCamera, constrainCamera } = await server.ssrLoadModule('/src/domain/map-camera.ts');
  assert.deepEqual(mapPoint({ x: 260, y: 420 }, { left: 10, top: 20, width: 500, height: 800 }), { x: 500, y: 260 });
  let camera = { x: 0, y: 0, zoom: 1 };
  for (const zoom of [1.2, 2, 4, 8, 4, 2, 1]) {
    camera = zoomCamera(camera, zoom, { x: 600, y: 300 });
    assert.ok(Math.abs(camera.x) <= 500 * (zoom - 1));
    assert.ok(Math.abs(camera.y) <= 260 * (zoom - 1));
  }
  assert.deepEqual(camera, { x: 0, y: 0, zoom: 1 });
  assert.deepEqual(constrainCamera({ x: 10000, y: -10000, zoom: 2 }), { x: 500, y: -260, zoom: 2 });
});

test('captured marker taps select the original point without relying on the retargeted click', async (context) => {
  const { root, species, AtlasExploration } = await setup(context);
  const panda = species.find((item) => item.slug === 'giant-panda');
  await act(() => root.render(createElement(AtlasExploration, { items: [panda], mode: 'geography', onOpenSpecies() {} })));
  const map = document.querySelector('.exploration-map > svg');
  const captured = mockMapGeometry(map);
  const marker = document.querySelector('.exploration-marker');
  await act(() => mapPointer(marker, 'pointerdown', 500, 260));
  assert.ok(captured.has(1), 'the stable SVG owns capture, even when starting on a marker');
  await act(() => mapPointer(map, 'pointerup', 500, 260));
  await act(() => map.dispatchEvent(new window.MouseEvent('click', { bubbles: true, detail: 1 })));
  assert.match(document.querySelector('.exploration-field-note').textContent, /大熊猫/);
  const tappedCamera = readCamera();
  await act(() => map.dispatchEvent(new window.MouseEvent('dblclick', { bubbles: true, detail: 2, clientX: 500, clientY: 260 })));
  assert.deepEqual(readCamera(), tappedCamera, 'a captured marker double tap must not zoom the map background');
  await act(() => {
    mapPointer(map, 'pointerdown', 500, 260);
    mapPointer(map, 'pointerup', 500, 260);
    map.dispatchEvent(new window.MouseEvent('click', { bubbles: true, detail: 1 }));
  });
  assert.ok(!document.querySelector('.exploration-field-note'), 'a new background tap must not reuse the previous marker');
});

test('animated camera keeps marker size and position synchronized and gestures interrupt it', async (context) => {
  const { root, species, AtlasExploration } = await setup(context);
  const frames = new Map();
  let nextId = 0;
  window.requestAnimationFrame = (callback) => { frames.set(++nextId, callback); return nextId; };
  window.cancelAnimationFrame = (id) => frames.delete(id);
  window.matchMedia = () => ({ matches: true });
  const tick = async (now) => {
    const pending = [...frames.values()]; frames.clear();
    await act(() => pending.forEach((callback) => callback(now)));
  };
  await act(() => root.render(createElement(AtlasExploration, { items: species.slice(0, 2), mode: 'geography', onOpenSpecies() {} })));
  const map = document.querySelector('.exploration-map > svg');
  mockMapGeometry(map);
  await act(() => document.querySelector('[aria-label="放大地图"]').click());
  await act(() => document.querySelector('[aria-label="放大地图"]').click());
  await tick(performance.now() + 400);
  assert.equal(readCamera().zoom, 4, 'rapid zoom clicks accumulate while the camera is animating');
  await act(() => document.querySelector('[aria-label="缩小地图"]').click());
  await tick(performance.now() + 100);
  const mid = readCamera();
  assert.ok(mid.zoom > 2 && mid.zoom < 4);
  const markerScale = Number(map.style.getPropertyValue('--map-marker-scale'));
  assert.ok(Math.abs(markerScale * mid.zoom - 1) < 0.000001, 'marker scale follows the rendered camera on each animation frame');
  await act(() => window.dispatchEvent(new window.Event('blur')));
  assert.equal(frames.size, 0, 'window blur cancels an unfinished animation');
  await act(() => document.querySelector('[aria-label="放大地图"]').click());
  await tick(performance.now() + 400);
  assert.ok(Math.abs(readCamera().zoom - Math.min(8, mid.zoom * 2)) < 0.000001, 'the next action starts from the interrupted camera');
  await act(() => document.querySelector('[aria-label="缩小地图"]').click());
  await tick(performance.now() + 100);
  await act(() => mapPointer(map, 'pointerdown', 500, 260));
  assert.equal(frames.size, 0, 'starting a gesture cancels the camera animation');
  await act(() => mapPointer(map, 'pointercancel', 500, 260));
});

test('cluster selection shows canonical covers and names only for its species, with usable fallbacks', async (context) => {
  const { root, species, domain, AtlasExploration } = await setup(context);
  const panda = species.find((item) => item.slug === 'giant-panda');
  const tiger = { ...species.find((item) => item.slug === 'tiger'), distribution: panda.distribution };
  const noCover = { ...panda, slug: 'no-cover', names: { ...panda.names, zh: '无封面示例' }, media: { alt: '' } };
  const distant = { ...panda, slug: 'distant', names: { ...panda.names, zh: '其他点位示例' }, distribution: { ...panda.distribution, center: { lat: -45, lng: -80 } } };
  const items = [panda, tiger, noCover, distant];
  let opened;
  await act(() => root.render(createElement(AtlasExploration, { items, mode: 'geography', onOpenSpecies: (item) => { opened = item; } })));
  assert.equal(document.querySelectorAll('.exploration-list img').length, 0, 'the full catalogue must not load every cover before a point is chosen');
  const group = domain.clusterSpecies(items, 1).find((entry) => entry.items.some((item) => item.slug === panda.slug));
  const marker = [...document.querySelectorAll('.exploration-marker')].find((element) => element.getAttribute('data-cluster-key') === group.key);
  await act(() => marker.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true })));
  const cards = [...document.querySelectorAll('.exploration-species-card')];
  assert.equal(cards.length, 3);
  assert.deepEqual(cards.map((card) => card.querySelector('strong').textContent), [panda.names.zh, tiger.names.zh, noCover.names.zh]);
  for (const [index, item] of [panda, tiger].entries()) {
    const image = cards[index].querySelector('.atlas-image__photo');
    assert.equal(image.getAttribute('src'), item.media.image);
    assert.equal(image.getAttribute('alt'), item.media.alt);
    assert.equal(image.getAttribute('loading'), 'lazy');
    assert.equal(image.getAttribute('decoding'), 'async');
  }
  assert.match(cards[2].textContent, /暂无封面/);
  assert.ok(!document.querySelector('.exploration-species-grid').textContent.includes(distant.names.zh));
  await act(() => cards[1].querySelector('.atlas-image__photo').dispatchEvent(new window.Event('error')));
  assert.equal(cards[1].querySelector('.atlas-image').getAttribute('data-status'), 'error');
  assert.ok(cards[1].querySelector('.atlas-image__placeholder'));
  await act(() => cards[1].click());
  assert.equal(cards[1].getAttribute('aria-pressed'), 'true');
  await act(() => document.querySelector('.exploration-preview button').click());
  assert.equal(opened.slug, tiger.slug, 'cover cards retain the selected profile action');
  await act(() => document.querySelector('[aria-label="放大地图"]').click());
  assert.equal(document.querySelectorAll('.exploration-species-card').length, 3, 'zoom preserves the picture list');
  await act(() => document.querySelector('.exploration-sidebar__heading button').click());
  assert.equal(document.querySelectorAll('.exploration-species-card').length, 0);
  assert.equal(document.querySelectorAll('.exploration-list > button').length, items.length);
});


test('search preserves the camera through empty results and clears stale point selection', async (context) => {
  const { root, species, AtlasExploration } = await setup(context);
  const panda = species.find((item) => item.slug === 'giant-panda');
  await act(() => root.render(createElement(AtlasExploration, { items: species, mode: 'geography', onOpenSpecies() {} })));
  await act(() => document.querySelector('[aria-label="放大地图"]').click());
  const map = document.querySelector('.exploration-map > svg');
  const before = readCamera();
  await act(() => document.querySelector('.exploration-marker').dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true })));
  const input = document.querySelector('.exploration-tools input');
  const setValue = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  const search = async (value) => act(() => {
    setValue.call(input, value);
    input.dispatchEvent(new window.Event('input', { bubbles: true }));
  });
  await search('does-not-exist-12345');
  assert.equal(document.querySelector('.exploration-map > svg'), map, 'zero results keep the map mounted');
  assert.deepEqual(readCamera(), before);
  assert.equal(document.querySelectorAll('.exploration-marker').length, 0);
  assert.ok(document.querySelector('.exploration-empty'));
  assert.equal(document.querySelector('.exploration-map-actions button').disabled, true);
  await search(panda.names.zh);
  assert.equal(document.querySelector('.exploration-map > svg'), map);
  assert.deepEqual(readCamera(), before);
  assert.equal(document.querySelectorAll('.exploration-list > button').length, 1);
  assert.equal(document.querySelector('.is-point-selection'), null);
  await act(() => document.querySelector('.exploration-map-actions button').click());
  assert.equal(readCamera().zoom, 4);
  assert.equal(document.querySelector('.exploration-map__identity strong').textContent, '结果定位');
});

test('cancelled marker contact cannot select a species or clear an existing selection', async (context) => {
  const { root, species, AtlasExploration } = await setup(context);
  const panda = species.find((item) => item.slug === 'giant-panda');
  await act(() => root.render(createElement(AtlasExploration, { items: [panda], mode: 'geography', onOpenSpecies() {} })));
  const map = document.querySelector('.exploration-map > svg');
  mockMapGeometry(map);
  await act(() => mapPointer(document.querySelector('.exploration-marker'), 'pointerdown', 500, 260));
  await act(() => mapPointer(map, 'pointercancel', 500, 260));
  await act(() => map.dispatchEvent(new window.MouseEvent('click', { bubbles: true, detail: 1 })));
  assert.equal(document.querySelector('.exploration-field-note'), null);
  await act(() => document.querySelector('.exploration-marker').dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true })));
  await act(() => mapPointer(map, 'pointerdown', 500, 260));
  await act(() => mapPointer(map, 'lostpointercapture', 500, 260));
  await act(() => map.dispatchEvent(new window.MouseEvent('click', { bubbles: true, detail: 1 })));
  assert.match(document.querySelector('.exploration-field-note').textContent, /大熊猫/);
});

test('cluster expansion fits representative points and preserves its candidate list', async (context) => {
  const { root, species, AtlasExploration, server } = await setup(context);
  const panda = species.find((item) => item.slug === 'giant-panda');
  const neighbor = { ...panda, slug: 'coincident-neighbor' };
  const missing = { ...panda, slug: 'missing', distribution: { ...panda.distribution, center: undefined } };
  await act(() => root.render(createElement(AtlasExploration, { items: [panda, neighbor, missing], mode: 'geography', onOpenSpecies() {} })));
  await act(() => document.querySelector('.exploration-marker').dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true })));
  await act(() => document.querySelector('.exploration-map-actions button:last-child').click());
  assert.equal(readCamera().zoom, 8, 'coincident coordinates zoom to the limit and remain selectable in the list');
  assert.equal(document.querySelectorAll('.exploration-species-card').length, 2);
  const { fitMapPoints } = await server.ssrLoadModule('/src/domain/map-camera.ts');
  assert.equal(fitMapPoints([]), undefined);
  const points = [{ x: 300, y: 170 }, { x: 650, y: 350 }];
  const camera = fitMapPoints(points);
  for (const point of points) {
    const x = 500 + camera.x + (point.x - 500) * camera.zoom;
    const y = 260 + camera.y + (point.y - 260) * camera.zoom;
    assert.ok(x >= 80 && x <= 920 && y >= 80 && y <= 440);
  }
});

test('camera-only frames do not mutate cluster contents or rebuild catalogue rows', async (context) => {
  const { root, species, AtlasExploration } = await setup(context);
  await act(() => root.render(createElement(AtlasExploration, { items: species, mode: 'geography', onOpenSpecies() {} })));
  const map = document.querySelector('.exploration-map > svg');
  mockMapGeometry(map);
  await act(() => document.querySelector('[aria-label="放大地图"]').click());
  const markers = [...document.querySelectorAll('.exploration-marker')];
  const rows = [...document.querySelectorAll('.exploration-list > button')];
  const changes = [];
  const observer = new window.MutationObserver((records) => changes.push(...records));
  markers.forEach((marker) => observer.observe(marker, { subtree: true, childList: true, attributes: true }));
  rows.forEach((row) => observer.observe(row, { subtree: true, childList: true, attributes: true }));
  await act(() => mapPointer(map, 'pointerdown', 500, 260));
  await nextMapFrame(() => mapPointer(map, 'pointermove', 550, 260));
  await act(() => mapPointer(map, 'pointerup', 550, 260));
  assert.equal(readCamera().x, 50);
  await nextMapFrame(() => map.dispatchEvent(new window.WheelEvent('wheel', { bubbles: true, cancelable: true, clientX: 500, clientY: 260, deltaY: -20 })));
  assert.ok(readCamera().zoom > 2 && readCamera().zoom < 4);
  observer.disconnect();
  assert.equal(changes.length, 0, 'camera transforms are shared; marker subtrees and catalogue rows stay untouched');
  assert.deepEqual([...document.querySelectorAll('.exploration-marker')], markers);
});


test('keyboard focus brings hidden points into view and supports map shortcuts on markers', async (context) => {
  const { root, species, AtlasExploration } = await setup(context);
  const panda = species.find((item) => item.slug === 'giant-panda');
  await act(() => root.render(createElement(AtlasExploration, { items: [panda], mode: 'geography', onOpenSpecies() {} })));
  const map = document.querySelector('.exploration-map > svg');
  mockMapGeometry(map);
  const europe = [...document.querySelectorAll('.exploration-regions button')].find((button) => button.textContent === '欧洲');
  await act(() => europe.click());
  const beforeFocus = readCamera();
  const marker = document.querySelector('.exploration-marker');
  await act(() => marker.focus());
  assert.notDeepEqual(readCamera(), beforeFocus, 'offscreen focus pans the representative point into view');
  const beforePan = readCamera();
  await act(() => marker.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })));
  assert.equal(readCamera().x, beforePan.x - 60);
  assert.equal(document.activeElement, map, 'navigation retains focus on the stable map');
  await act(() => map.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Home', bubbles: true })));
  assert.deepEqual(readCamera(), { x: 0, y: 0, zoom: 1 });
});
