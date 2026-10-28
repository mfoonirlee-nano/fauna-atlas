import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';
import { act, createElement } from 'react';
import { createRoot } from 'react-dom/client';

const styles = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8');

async function mountCarousel(context, { reducedMotion = false, decode = () => Promise.resolve(), slugs = ['first', 'second', 'third'] } = {}) {
  const dom = new JSDOM('<div id="root"></div>', { url: 'https://atlas.test/', pretendToBeVisual: true });
  const globals = ['window', 'document', 'IS_REACT_ACT_ENVIRONMENT'];
  const saved = globals.map((key) => Object.getOwnPropertyDescriptor(globalThis, key));
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  const timers = new Map();
  let timerId = 0;
  dom.window.setTimeout = (callback, delay) => { timers.set(++timerId, { callback, delay }); return timerId; };
  dom.window.clearTimeout = (id) => timers.delete(id);
  dom.window.matchMedia = () => ({ matches: reducedMotion, addEventListener() {}, removeEventListener() {} });
  dom.window.Image = class {
    complete = true;
    naturalWidth = 1536;
    addEventListener() {}
    decode = decode;
  };
  const observers = [];
  dom.window.ResizeObserver = class {
    constructor(callback) { this.callback = callback; observers.push(this); }
    observe(target) { this.target = target; }
    disconnect() { this.disconnected = true; }
  };
  const server = await createServer({ server: { middlewareMode: true, watch: null, hmr: false }, appType: 'custom' });
  const root = createRoot(document.getElementById('root'));
  context.after(async () => {
    await act(() => root.unmount());
    await server.close();
    dom.window.close();
    globals.forEach((key, index) => saved[index] ? Object.defineProperty(globalThis, key, saved[index]) : delete globalThis[key]);
  });
  const { HeroCarousel } = await server.ssrLoadModule('/src/App.tsx');
  const items = slugs.map((slug) => ({
    slug, names: { zh: slug }, scientificName: slug, conservation: { code: "LC" },
    distribution: { regions: [], center: { lat: 0, lng: 0 } },
    media: { image: `./images/${slug}.webp`, alt: slug },
  }));
  await act(() => root.render(createElement(HeroCarousel, { items, isObscured: false, onOpenSpecies() {} })));
  // Flush the same lazy metadata module requested by the mounted cover.
  await act(async () => { await server.ssrLoadModule('/src/data/cover-subjects.ts'); });
  const cover = () => document.querySelector('.hero-carousel__slide:not([aria-hidden="true"]) .hero__image');
  const click = (direction) => act(async () => document.querySelector(`[aria-label^="${direction === 1 ? '下一种' : '上一种'}动物"]`).click());
  const runTimer = (delay) => act(async () => {
    const entry = [...timers].find(([, timer]) => timer.delay === delay);
    assert.ok(entry, `a ${delay} ms timer is scheduled`);
    timers.delete(entry[0]);
    entry[1].callback();
  });
  return { cover, click, runTimer, timers, dom, observers };
}

for (const mode of ['forward', 'backward', 'autoplay', 'reduced-motion']) {
  test(`${mode}: switching preserves the painted cover and settling preserves the incoming node`, async (context) => {
    const { cover, click, runTimer, dom } = await mountCarousel(context, { reducedMotion: mode === 'reduced-motion' });
    const outgoing = cover();
    await act(() => outgoing.dispatchEvent(new dom.window.Event('load')));
    if (mode === 'autoplay') await runTimer(6500);
    else await click(mode === 'backward' ? -1 : 1);
    assert.ok(outgoing.isConnected, 'switching must retain the painted cover instead of mounting a loading placeholder');
    assert.equal(outgoing.closest('[aria-hidden]').getAttribute('aria-hidden'), 'true');
    assert.equal(document.querySelectorAll('.hero-carousel__visual .atlas-image__placeholder').length, 0);
    const incoming = cover();
    assert.notEqual(incoming, outgoing);
    // Clicking again while the transition is in progress cannot replace either layer.
    await click(1);
    assert.equal(cover(), incoming);
    assert.ok(outgoing.isConnected);
    await runTimer(mode === 'reduced-motion' ? 0 : 900);
    assert.equal(cover(), incoming, 'settling must retain the incoming image node');
    assert.equal(outgoing.isConnected, false);
    assert.equal(document.querySelectorAll('.hero-carousel__slide').length, 1);
    // Revisit the previous cover to catch role-dependent keys across repeated changes.
    await click(mode === 'backward' ? 1 : -1);
    assert.ok(incoming.isConnected);
    await runTimer(mode === 'reduced-motion' ? 0 : 900);
    assert.equal(cover().getAttribute('src'), outgoing.getAttribute('src'));
  });
}

test('a delayed or failed decode leaves the painted cover intact and permits retry', async (context) => {
  const pending = [];
  const { cover, click, runTimer } = await mountCarousel(context, {
    decode: () => new Promise((resolve, reject) => pending.push({ resolve, reject })),
  });
  const outgoing = cover();
  await click(1);
  assert.equal(cover(), outgoing);
  assert.equal(document.querySelectorAll('.hero-carousel__slide').length, 1);
  // The carousel prepares the previous cover first, then the next cover.
  await act(async () => pending[1].reject(new Error('decode failed')));
  assert.equal(cover(), outgoing);
  assert.equal(document.querySelector('[aria-label^="下一种动物"]').getAttribute('aria-disabled'), 'false');
  await click(1);
  assert.equal(cover(), outgoing);
  await act(async () => pending[2].resolve());
  assert.ok(outgoing.isConnected);
  assert.notEqual(cover(), outgoing);
  await runTimer(900);
  assert.equal(outgoing.isConnected, false);
});

test('crossfade keeps an opaque cover underneath the entering image', () => {
  for (const direction of ['forward', 'backward']) {
    const endpoints = (name) => [...styles.matchAll(new RegExp(`@keyframes ${name} \\{([\\s\\S]*?)\\n  \\}`, 'g'))][0][1]
      .match(/opacity: [\d.]+/g).map((value) => Number(value.split(': ')[1]));
    const enter = endpoints(`hero-enter-${direction}`);
    const leave = endpoints(`hero-leave-${direction}`);
    for (const progress of [0, 0.25, 0.5, 0.75, 1]) {
      const incoming = enter[0] + (enter[1] - enter[0]) * progress;
      const outgoing = leave[0] + (leave[1] - leave[0]) * progress;
      assert.equal(incoming + outgoing * (1 - incoming), 1, `${direction}: background leaks through at ${progress}`);
    }
  }
});


test('reviewed covers resize in place and release observers when slides leave', async (context) => {
  const { cover, observers, click, runTimer } = await mountCarousel(context, { slugs: ['giant-panda', 'red-crowned-crane'] });
  const image = cover();
  const observer = observers[0];
  await act(() => observer.callback([{ contentRect: { width: 700, height: 500 } }]));
  assert.ok(image.classList.contains('hero__image--fitted'));
  const firstWidth = parseFloat(image.style.getPropertyValue('--hero-image-width'));
  assert.ok(firstWidth > 0);
  await act(() => observer.callback([{ contentRect: { width: 350, height: 500 } }]));
  assert.equal(cover(), image);
  assert.ok(parseFloat(image.style.getPropertyValue('--hero-image-width')) < firstWidth);
  assert.equal(image.closest('.hero-carousel__slide').querySelector('.hero__backdrop').style.backgroundImage, 'url("./images/giant-panda.webp")');
  await click(1);
  assert.equal(observer.disconnected, undefined);
  await runTimer(900);
  assert.equal(observer.disconnected, true);
});

test('unreviewed covers retain contain fallback after resize', async (context) => {
  const { cover, observers } = await mountCarousel(context);
  await act(() => observers[0].callback([{ contentRect: { width: 700, height: 500 } }]));
  assert.equal(cover().classList.contains('hero__image--fitted'), false);
});

test('unverified assessments and draft illustrations never appear as an IUCN result or public image', async (context) => {
  const { renderToStaticMarkup } = await import('react-dom/server');
  const server = await createServer({ server: { middlewareMode: true, watch: null, hmr: false }, appType: 'custom' });
  context.after(() => server.close());
  const { SpeciesDetail, HeroCarousel, default: App } = await server.ssrLoadModule('/src/App.tsx');
  const { species, loadSpecies } = await server.ssrLoadModule('virtual:species-catalogue');
  const unverified = species.filter((item) => item.conservation.code === 'UNVERIFIED');
  assert.equal(unverified.length, 10);
  const pending = [];
  for (const summary of unverified) {
    const item = await loadSpecies(summary.slug);
    const html = renderToStaticMarkup(createElement(SpeciesDetail, { item, index: 0, saved: false, onClose() {}, onToggleSaved() {} }));
    assert.match(html, /保护评估待核实/);
    assert.match(html, /尚未核实可追溯的保护评估/);
    assert.doesNotMatch(html, /IUCN 尚未评估/);
    if (item.pendingMedia) {
      pending.push(summary);
      assert.equal(summary.media.image, undefined, summary.slug);
      assert.match(html, /配图正在核验，暂不展示/);
      assert.ok(!html.includes('images/species/' + item.slug + '/'), `${item.slug}: no draft image in rendered detail`);
      assert.doesNotMatch(html, /class="detail-gallery"/);
    } else {
      assert.ok(html.includes(summary.media.image));
      assert.doesNotMatch(html, /配图正在核验，暂不展示/);
    }
  }
  assert.equal(pending.length, 2);
  const published = unverified.find((item) => item.media.image);
  const carousel = renderToStaticMarkup(createElement(HeroCarousel, { items: [...pending, published], isObscured: false, onOpenSpecies() {} }));
  assert.ok(carousel.includes(published.media.image));
  for (const item of pending) assert.ok(!carousel.includes('images/species/' + item.slug + '/'));
  const app = renderToStaticMarkup(createElement(App));
  assert.match(app, /value="UNVERIFIED"/);
  assert.match(app, /value="NE"/);
});
