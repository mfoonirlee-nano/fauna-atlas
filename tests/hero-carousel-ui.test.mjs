import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';
import { act, createElement } from 'react';
import { createRoot } from 'react-dom/client';

const styles = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8');

async function mountCarousel(context, { reducedMotion = false, decode = () => Promise.resolve() } = {}) {
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
  const server = await createServer({ server: { middlewareMode: true, watch: null, hmr: false }, appType: 'custom' });
  const root = createRoot(document.getElementById('root'));
  context.after(async () => {
    await act(() => root.unmount());
    await server.close();
    dom.window.close();
    globals.forEach((key, index) => saved[index] ? Object.defineProperty(globalThis, key, saved[index]) : delete globalThis[key]);
  });
  const { HeroCarousel } = await server.ssrLoadModule('/src/App.tsx');
  const items = ['first', 'second', 'third'].map((slug) => ({
    slug, names: { zh: slug }, scientificName: slug, conservation: { code: "LC" },
    distribution: { regions: [], center: { lat: 0, lng: 0 } },
    media: { image: `./images/${slug}.webp`, alt: slug },
  }));
  await act(() => root.render(createElement(HeroCarousel, { items, isObscured: false, onOpenSpecies() {} })));
  const cover = () => document.querySelector('.hero-carousel__slide:not([aria-hidden="true"]) .hero__image');
  const click = (direction) => act(async () => document.querySelector(`[aria-label^="${direction === 1 ? '下一种' : '上一种'}动物"]`).click());
  const runTimer = (delay) => act(async () => {
    const entry = [...timers].find(([, timer]) => timer.delay === delay);
    assert.ok(entry, `a ${delay} ms timer is scheduled`);
    timers.delete(entry[0]);
    entry[1].callback();
  });
  return { cover, click, runTimer, timers, dom };
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
