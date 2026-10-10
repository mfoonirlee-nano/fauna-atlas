import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir, unlink } from 'node:fs/promises';
import test from 'node:test';
import { JSDOM } from 'jsdom';
import { transformWithOxc } from 'vite';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';

test('long taxonomy toggles and previews keep canvas allocation within the scroll viewport', async () => {
  const source = await readFile(new URL('../src/components/TaxonomyDiagram.tsx', import.meta.url), 'utf8');
  const { code } = await transformWithOxc(source, 'TaxonomyDiagram.tsx', { jsx: { runtime: 'automatic' } });
  const directory = new URL('../node_modules/.tmp/', import.meta.url);
  await mkdir(directory, { recursive: true });
  const compiled = new URL('taxonomy-diagram-performance.mjs', directory);
  const compiledFiles = [compiled];
  await writeFile(compiled, code);
  const dom = new JSDOM('<div id="scroll"><div id="root"></div></div>');
  const previous = new Map();
  const install = (key, value) => {
    previous.set(key, Object.getOwnPropertyDescriptor(globalThis, key));
    Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
  };
  const frames = new Map();
  let frameId = 0;
  dom.window.requestAnimationFrame = (callback) => { frames.set(++frameId, callback); return frameId; };
  dom.window.cancelAnimationFrame = (id) => frames.delete(id);
  dom.window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
  Object.defineProperty(dom.window, 'devicePixelRatio', { value: 2 });
  install('window', dom.window);
  install('document', dom.window.document);
  install('getComputedStyle', dom.window.getComputedStyle);
  install('IS_REACT_ACT_ENVIRONMENT', true);
  install('ResizeObserver', class { observe() {} disconnect() {} });
  const scroller = document.getElementById('scroll');
  scroller.className = 'taxonomy-panel__scroll';
  Object.defineProperties(scroller, { clientWidth: { value: 1260 }, clientHeight: { value: 700 } });
  Object.defineProperties(dom.window.HTMLElement.prototype, {
    clientWidth: { configurable: true, get() { return 1260; } },
    clientHeight: { configurable: true, get() { return parseFloat(this.style.height) || 700; } },
  });
  let allocations = 0;
  for (const dimension of ['width', 'height']) {
    const descriptor = Object.getOwnPropertyDescriptor(dom.window.HTMLCanvasElement.prototype, dimension);
    Object.defineProperty(dom.window.HTMLCanvasElement.prototype, dimension, {
      configurable: true,
      get: descriptor.get,
      set(value) { allocations++; descriptor.set.call(this, value); },
    });
  }
  let strokes = 0;
  dom.window.HTMLCanvasElement.prototype.getContext = () => ({
    setTransform() {}, clearRect() {}, translate() {}, beginPath() {}, moveTo() {}, bezierCurveTo() {},
    stroke() { strokes++; },
  });
  const root = createRoot(document.getElementById('root'));
  const flush = async () => act(async () => {
    const pending = [...frames.values()];
    frames.clear();
    for (const callback of pending) callback(0);
  });
  try {
    const { TaxonomyDiagram } = await import(compiled.href);
    const nodes = [
      { id: 'a', kind: 'taxon', rankLabel: '纲', zhName: '测试纲', scientificName: 'Test', x: 0.1, y: 0.01, leafSlugs: ['sample'] },
      { id: 'b', kind: 'taxon', rankLabel: '目', zhName: '测试目', scientificName: 'Test', x: 0.3, y: 0.02, leafSlugs: ['sample'] },
      { id: 'c', kind: 'taxon', rankLabel: '科', zhName: '测试科', scientificName: 'Test', x: 0.5, y: 0.9, leafSlugs: ['sample'] },
    ];
    const edges = [{ id: 'ab', from: 'a', to: 'b', leafSlugs: ['sample'] }, { id: 'bc', from: 'b', to: 'c', leafSlugs: ['sample'] }];
    const render = async (height, activeSlug) => {
      await act(async () => root.render(React.createElement(TaxonomyDiagram, {
        nodes, edges, height, activeSlug, layout: 'overview', theme: 'light', ariaLabel: 'test', onOpenSpecies() {},
      })));
      await flush();
    };
    await render(28000);
    const canvas = document.querySelector('canvas');
    assert.ok(canvas.width * canvas.height <= 1260 * 700 * 4,
      `canvas should fit visible viewport; allocated ${canvas.width} × ${canvas.height}`);
    const initialAllocations = allocations;
    await render(14000);
    await render(28000, 'sample');
    assert.equal(allocations, initialAllocations, 'toggle and preview should reuse the viewport backing store');
    scroller.scrollTop = 24000;
    strokes = 0;
    await act(async () => scroller.dispatchEvent(new dom.window.Event('scroll')));
    await flush();
    assert.ok(strokes > 0, 'scrolling should redraw the crossing branch');
    assert.equal(allocations, initialAllocations, 'scrolling should reuse the backing store');
    scroller.scrollTop = 26000;
    strokes = 0;
    await act(async () => {
      for (let index = 0; index < 10; index++) scroller.dispatchEvent(new dom.window.Event('scroll'));
    });
    assert.equal(frames.size, 1, 'a burst of scroll events should schedule one draw');
    await flush();
    assert.equal(strokes, 0, 'edges outside the viewport should skip painting');
    scroller.scrollTop = 0;

    // Exercise the real overview's disclosure handler and layout anchoring.
    const modules = [
      ['src/domain/taxonomy.ts', 'taxonomy-performance.mjs'],
      ['src/domain/taxonomy-overview.ts', 'taxonomy-overview-performance.mjs'],
      ['src/components/PrototypeSwitcher.tsx', 'prototype-switcher-performance.mjs'],
      ['src/components/TaxonomyExplorer.tsx', 'taxonomy-explorer-performance.mjs'],
    ];
    for (const [path, output] of modules) {
      const input = await readFile(new URL(`../${path}`, import.meta.url), 'utf8');
      const result = await transformWithOxc(input, path, { jsx: { runtime: 'automatic' } });
      const moduleCode = result.code
        .replace(/import\.meta\.env\.DEV/g, 'false')
        .replace(/import ["']\.\/TaxonomyExplorer\.css["'];?/, '')
        .replace(/(["'])(?:\.\.\/domain\/|\.\/)(taxonomy|taxonomy-overview)\1/g, '"./$2-performance.mjs"')
        .replace(/(["'])\.\/TaxonomyDiagram\1/g, '"./taxonomy-diagram-performance.mjs"')
        .replace(/(["'])\.\/PrototypeSwitcher\1/g, '"./prototype-switcher-performance.mjs"');
      const file = new URL(output, directory);
      compiledFiles.push(file);
      await writeFile(file, moduleCode);
    }
    const { TaxonomyExplorer } = await import(new URL('taxonomy-explorer-performance.mjs', directory).href);
    const items = Array.from({ length: 80 }, (_, index) => {
      const family = Math.floor(index / 20);
      return {
        slug: `sample-${index}`, names: { zh: `测试动物${index}` }, scientificName: `Species ${index}`,
        taxonomy: Object.fromEntries(['kingdom', 'phylum', 'class', 'order', 'family', 'genus'].map((rank) => {
          const name = `${rank}${rank === 'family' || rank === 'genus' ? family : ''}`;
          return [rank, { zhName: name, scientificName: name }];
        })),
      };
    });
    await act(async () => root.render(React.createElement(TaxonomyExplorer, {
      items, theme: 'light', onOpenSpecies() {},
    })));
    await flush();
    const overviewScroller = document.querySelector('#root .taxonomy-panel__scroll');
    const familyButton = [...document.querySelectorAll('[data-taxonomy-node]')]
      .find((button) => button.getAttribute('aria-label').includes('family1分类单元'));
    assert.ok(familyButton);
    const position = () => {
      const host = familyButton.closest('.taxonomy-diagram');
      return parseFloat(familyButton.style.getPropertyValue('--diagram-y')) / 100
        * parseFloat(host.style.height) - overviewScroller.scrollTop;
    };
    overviewScroller.scrollTop = position() - 300;
    const viewportY = position();
    const previousCanvasAllocations = allocations;
    for (let index = 0; index < 6; index++) {
      await act(async () => familyButton.click());
      await flush();
      assert.equal(familyButton.getAttribute('aria-expanded'), index % 2 === 0 ? 'false' : 'true');
      assert.ok(Math.abs(position() - viewportY) < 0.01,
        `toggle ${index}: expected viewport Y ${viewportY}, got ${position()}, scroll ${overviewScroller.scrollTop}`);
    }
    assert.equal(allocations, previousCanvasAllocations, 'real branch toggles should reuse the canvas');
  } finally {
    await act(async () => root.unmount());
    dom.window.close();
    for (const [key, descriptor] of previous) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    }
    await Promise.all(compiledFiles.map((file) => unlink(file)));
  }
});
