import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';
import { act, createElement } from 'react';

async function setup(context, hash = '#microbes') {
  const dom = new JSDOM('<div id="root"></div>', { url: `https://atlas.test/nested/${hash}`, pretendToBeVisual: true });
  const keys = ['window', 'document', 'IS_REACT_ACT_ENVIRONMENT', 'ResizeObserver'];
  const previous = keys.map((key) => Object.getOwnPropertyDescriptor(globalThis, key));
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  globalThis.ResizeObserver = class { observe() {} disconnect() {} };
  dom.window.ResizeObserver = globalThis.ResizeObserver;
  window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
  const { createRoot } = await import('react-dom/client');
  const server = await createServer({ server: { middlewareMode: true, watch: null, hmr: false }, appType: 'custom' });
  const root = createRoot(document.getElementById('root'));
  context.after(async () => {
    await act(() => root.unmount());
    await server.close();
    dom.window.close();
    keys.forEach((key, index) => previous[index] ? Object.defineProperty(globalThis, key, previous[index]) : delete globalThis[key]);
  });
  return { server, root, dom };
}

test('the topic contains exactly the ten todo organisms and none enter the animal catalogue', async (context) => {
  const { server } = await setup(context);
  const { microbeTopics } = await server.ssrLoadModule('/src/topics/microbes/content.ts');
  const { species } = await server.ssrLoadModule('virtual:species-catalogue');
  const completed = await readFile(new URL('../docs/microbes-topic.md', import.meta.url), 'utf8');
  const todo = await readFile(new URL('../docs/todo.md', import.meta.url), 'utf8');
  assert.doesNotMatch(todo, /- \[x\]/);
  assert.equal(microbeTopics.length, 10);
  assert.equal(new Set(microbeTopics.map((item) => item.slug)).size, 10);
  assert.deepEqual(['bacteria', 'fungus', 'protist'].map((group) => microbeTopics.filter((item) => item.group === group).length), [6, 1, 3]);
  for (const item of microbeTopics) {
    assert.ok(!todo.includes(`- [ ] ${item.name} *${item.scientificName}*`), `${item.name} must not remain pending`);
    assert.ok(completed.includes(`- [x] ${item.name} *${item.scientificName}*`), `${item.name} is archived as complete`);
    assert.ok(!species.some((animal) => animal.scientificName === item.scientificName));
    assert.ok(item.sources.length > 0);
    for (const source of item.sources) assert.equal(new URL(source.url).protocol, 'https:');
  }
  assert.match(microbeTopics.find((item) => item.slug === 'lactobacillus-delbrueckii').introduction, /subsp\. bulgaricus/);
  assert.match(microbeTopics.find((item) => item.slug === 'giardia-duodenalis').parentNote, /Giardia lamblia.*Giardia intestinalis/);
});

test('group filters, reading sections and empty search recovery work on the independent page', async (context) => {
  const { server, root, dom } = await setup(context);
  const { default: MicrobesPage } = await server.ssrLoadModule('/src/topics/microbes/MicrobesPage.tsx');
  await act(() => root.render(createElement(MicrobesPage)));
  assert.equal(document.querySelectorAll('[data-topic]').length, 10);
  assert.equal(document.querySelectorAll('.microbe-image .atlas-image__photo').length, 10);
  for (const picture of document.querySelectorAll('.microbe-image .atlas-image__photo')) {
    assert.match(picture.getAttribute('src'), /^\.\/images\/microbes\//);
    assert.match(picture.getAttribute('alt'), /AI 科学重建.*不按比例/);
    assert.equal(picture.getAttribute('loading'), 'lazy');
  }
  assert.equal(document.querySelectorAll('figure svg[role="img"]').length, 10);
  for (const svg of document.querySelectorAll('figure svg')) {
    assert.match(document.getElementById(svg.getAttribute('aria-labelledby')).textContent, /非显微照片，不按比例/);
  }
  assert.equal(document.querySelector('#atlas'), null);
  assert.equal(document.querySelector('#taxonomy'), null);
  const buttons = () => [...document.querySelectorAll('.microbes-filters button')];
  await act(() => buttons().find((button) => button.textContent === '细菌').click());
  assert.equal(document.querySelectorAll('[data-topic]').length, 6);
  assert.equal(buttons().find((button) => button.textContent === '细菌').getAttribute('aria-pressed'), 'true');
  await act(() => buttons().find((button) => button.textContent === '真菌').click());
  assert.equal(document.querySelectorAll('[data-topic]').length, 1);
  const details = document.querySelector('details');
  await act(() => details.querySelector('summary').click());
  assert.equal(details.open, true);
  assert.match(details.textContent, /不尝生面团/);
  const input = document.querySelector('input[type="search"]');
  await act(() => {
    Object.getOwnPropertyDescriptor(dom.window.HTMLInputElement.prototype, 'value').set.call(input, '没有这个名字');
    input.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
  });
  assert.equal(document.querySelectorAll('[data-topic]').length, 0);
  await act(() => document.querySelector('.microbes-empty button').click());
  assert.equal(document.querySelectorAll('[data-topic]').length, 10);
  assert.equal(document.querySelector('input').value, '');
  assert.ok(dom.window.location.pathname.endsWith('/nested/'));
});

test('every topic has one distinct retained WebP bound to its decoded dimensions and hash', async (context) => {
  const { server } = await setup(context);
  const { microbeTopics } = await server.ssrLoadModule('/src/topics/microbes/content.ts');
  const { microbeImages } = await server.ssrLoadModule('/src/topics/microbes/media.ts');
  const { images } = JSON.parse(await readFile(new URL('../src/assets/source/microbes/accepted-images.json', import.meta.url), 'utf8'));
  const expected = microbeTopics.map((item) => item.slug).sort();
  assert.deepEqual(Object.keys(microbeImages).sort(), expected);
  assert.deepEqual(images.map((item) => item.slug).sort(), expected);
  assert.equal(new Set(images.map((item) => item.sha256)).size, 10);
  for (const item of images) {
    assert.deepEqual(microbeImages[item.slug], { src: item.src, alt: item.alt, width: item.width, height: item.height });
    const path = new URL(`../public/${item.src.slice(2)}`, import.meta.url);
    const bytes = await readFile(path);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), item.sha256);
    const decoded = execFileSync('magick', ['identify', '-ping', '-format', '%w %h', path.pathname], { encoding: 'utf8' }).trim();
    assert.equal(decoded, `${item.width} ${item.height}`);
    assert.equal(item.width / item.height, 1.5);
    const files = await readdir(new URL(`../public/images/microbes/${item.slug}/`, import.meta.url));
    assert.deepEqual(files, ['01-observation.webp']);
  }
});

test('route matching keeps animal anchors separate from the topic', async (context) => {
  const { server } = await setup(context);
  const { isMicrobesRoute } = await server.ssrLoadModule('/src/AtlasRouter.tsx');
  for (const hash of ['#microbes', '#microbes/content']) assert.equal(isMicrobesRoute(hash), true);
  for (const hash of ['', '#top', '#atlas', '#taxonomy', '#microbes-other']) assert.equal(isMicrobesRoute(hash), false);
});

test('direct topic entry and navigation back and forward mount one page at a time', async (context) => {
  const { server, root, dom } = await setup(context);
  const { AtlasRouter } = await server.ssrLoadModule('/src/AtlasRouter.tsx');
  // Preload modules via the same server so React.lazy can settle inside act.
  await server.ssrLoadModule('/src/topics/microbes/MicrobesPage.tsx');
  await act(async () => root.render(createElement(AtlasRouter)));
  assert.ok(document.querySelector('.microbes-page'));
  assert.equal(document.querySelector('.hero'), null);
  assert.match(document.title, /微生物专题/);
  assert.equal(document.activeElement.id, 'microbes-title');
  await server.ssrLoadModule('/src/App.tsx');
  await act(async () => {
    dom.window.history.pushState(null, '', '#atlas');
    window.dispatchEvent(new dom.window.HashChangeEvent('hashchange'));
  });
  assert.equal(document.querySelector('.microbes-page'), null);
  assert.ok(document.querySelector('#atlas'));
  assert.ok(document.querySelector('.site-nav a[href="#microbes"]'));
  await act(async () => {
    dom.window.history.replaceState(null, '', '#microbes');
    window.dispatchEvent(new dom.window.HashChangeEvent('hashchange'));
  });
  assert.ok(document.querySelector('.microbes-page'));
  assert.equal(document.querySelector('#atlas'), null);
});
