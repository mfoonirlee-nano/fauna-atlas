import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { JSDOM } from 'jsdom';
import { createServer } from 'vite';
import { act, createElement } from 'react';
import { createRoot } from 'react-dom/client';

const { species } = await import('../node_modules/.tmp/taxonomy-test/data/species.js');
const selected = ['giant-panda', 'emperor-penguin', 'monarch-butterfly', 'common-octopus', 'woolly-mammoth'];
const keys = ['identity', 'body', 'habitat', 'foraging', 'dailyLife', 'growth', 'ecology', 'survival'];
const get = (slug) => species.find((item) => item.slug === slug);

test('only the five selected animals gain complete, sourced learning chapters and existing public images', async () => {
  assert.deepEqual(species.filter((s) => s.learning).map((s) => s.slug).sort(), [...selected].sort());
  for (const slug of selected) {
    const item = get(slug), learning = item.learning;
    assert.deepEqual(learning.sections.map((s) => s.key), keys, slug);
    assert.ok(learning.introduction.trim());
    const urls = new Set(item.sources.map((source) => source.url));
    assert.equal(urls.size, item.sources.length, `${slug}: duplicate source`);
    for (const section of learning.sections) {
      assert.ok(section.paragraphs.length || section.bodyParts?.length, `${slug}/${section.key}`);
      assert.ok(section.sources.length, `${slug}/${section.key}: missing evidence`);
      for (const url of section.sources) assert.ok(urls.has(url), `${slug}: missing source ${url}`);
    }
    const publishedImages = new Set([item.media.image, ...item.media.gallery.map((m) => m.image)]);
    assert.ok(learning.observation.questions.length);
    for (const image of learning.observation.images) {
      assert.ok(publishedImages.has(image), image);
      await readFile(new URL(`../public/${image.slice(2)}`, import.meta.url));
    }
    for (const q of learning.observation.questions) assert.ok(q.question.trim() && q.answer.trim());
    assert.doesNotMatch(JSON.stringify(learning), /本轮|本稿|编辑稿|本样板|\[[PEMOW]\d+\]/);
  }
});

test('learning preserves assessment scope, extinction evidence, uncertainty and insect life stages', () => {
  const text = (slug, key) => JSON.stringify(get(slug).learning.sections.find((s) => s.key === key));
  assert.match(text('monarch-butterfly', 'survival'), /2021.*无危.*2023.*易危/);
  assert.match(text('common-octopus', 'survival'), /2016.*2018.*物种范围/);
  assert.match(text('monarch-butterfly', 'growth'), /卵、幼虫、蛹、成虫/);
  assert.match(text('monarch-butterfly', 'growth'), /不是.*茧/);
  assert.match(text('woolly-mammoth', 'dailyLife'), /不足以/);
  assert.match(text('woolly-mammoth', 'growth'), /乳汁残留/);
  assert.equal(get('woolly-mammoth').conservation.system, 'Historical and fossil evidence');
  assert.equal(get('woolly-mammoth').conservation.assessedYear, undefined);
  assert.equal(get('woolly-mammoth').distribution.center, undefined);
  assert.equal(get('emperor-penguin').conservation.code, 'EN');
});

async function mount(context, initialSlug) {
  const dom = new JSDOM('<div id="root"></div>', { url: 'https://atlas.test/nested/', pretendToBeVisual: true });
  const names = ['window', 'document', 'IS_REACT_ACT_ENVIRONMENT'];
  const saved = names.map((key) => Object.getOwnPropertyDescriptor(globalThis, key));
  Object.assign(globalThis, { window: dom.window, document: dom.window.document, IS_REACT_ACT_ENVIRONMENT: true });
  window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
  window.ResizeObserver = class { observe() {} disconnect() {} };
  const scrolled = [];
  window.HTMLElement.prototype.scrollIntoView = function (options) { scrolled.push([this.id, options]); };
  const frames = new Map(); let next = 0;
  window.requestAnimationFrame = (callback) => { frames.set(++next, callback); return next; };
  window.cancelAnimationFrame = (id) => frames.delete(id);
  const server = await createServer({ server: { middlewareMode: true, watch: null, hmr: false }, appType: 'custom' });
  const root = createRoot(document.getElementById('root'));
  context.after(async () => {
    await act(() => root.unmount()); await server.close(); dom.window.close();
    names.forEach((key, i) => saved[i] ? Object.defineProperty(globalThis, key, saved[i]) : delete globalThis[key]);
  });
  const { SpeciesDetail } = await server.ssrLoadModule('/src/App.tsx');
  let closed = 0;
  const render = async (slug) => act(async () => {
    root.render(createElement(SpeciesDetail, { item: get(slug), index: 0, saved: false, onClose() { closed++; }, onToggleSaved() {} }));
    await server.ssrLoadModule('/src/components/SpeciesLearningReader.tsx');
  });
  await render(initialSlug);
  return { dom, render, scrolled, closed: () => closed, flushFrames: () => act(() => { for (const callback of frames.values()) callback(); frames.clear(); }) };
}

test('children can navigate chapters, reveal answers and follow scoped source links while originals stay available', async (context) => {
  const { scrolled, render } = await mount(context, 'monarch-butterfly');
  assert.equal(document.querySelectorAll('.learning-reader__chapter').length, 9);
  const survival = document.getElementById('learning-monarch-butterfly-survival');
  const toc = [...document.querySelectorAll('.learning-reader__toc button')];
  await act(() => toc[7].click());
  assert.equal(document.activeElement, survival);
  assert.deepEqual(scrolled.at(-1), [survival.id, { block: 'start', behavior: 'instant' }]);
  const question = document.querySelector('.learning-reader__question');
  assert.equal(question.open, false);
  await act(() => question.querySelector('summary').click());
  assert.equal(question.open, true);
  assert.match(question.textContent, /乳草/);
  assert.equal(document.querySelector('.learning-background').open, false);
  assert.ok([...document.querySelectorAll('.learning-background h4')].some((e) => e.textContent.includes('命名')));
  const section = survival.closest('section');
  assert.ok(section.querySelector(`a[href="${get('monarch-butterfly').learning.sections[7].sources[2]}"]`));
  assert.equal(document.querySelectorAll('.learning-reader__image').length, 2);
  assert.doesNotMatch(document.querySelector('.detail-hero__status').textContent, /LC|无危/);
  await render('woolly-mammoth');
  assert.match(document.querySelector('.detail-hero__status').textContent, /灭绝/);
  assert.equal(document.querySelector('.learning-reader__question').open, false, 'new animal starts with answers closed');
  assert.match(document.querySelector('.learning-reader__image-note').textContent, /复原/);
});

test('observation zoom uses the existing viewer and Escape restores focus before closing the profile', async (context) => {
  const state = await mount(context, 'giant-panda');
  const trigger = document.querySelector('.learning-reader__image');
  await act(() => trigger.click());
  assert.match(document.querySelector('.image-viewer__stage .atlas-image__photo').getAttribute('src'), /02-bamboo-feeding.webp$/);
  assert.equal(document.querySelector('.detail-panel').getAttribute('aria-modal'), 'false');
  await act(() => document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true })));
  await state.flushFrames();
  assert.equal(document.querySelector('.image-viewer'), null);
  assert.equal(document.activeElement, trigger);
  assert.equal(state.closed(), 0);
  await act(() => document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true })));
  assert.equal(state.closed(), 1);
});

test('animals without learning content retain the original detail, stats, stories and gallery', async (context) => {
  await mount(context, 'red-panda');
  assert.equal(document.querySelector('.learning-reader'), null);
  assert.equal(document.querySelector('.learning-background'), null);
  assert.equal(document.querySelector('.detail-lead__copy').textContent, get('red-panda').description);
  assert.equal(document.querySelectorAll('.detail-story__grid article').length, get('red-panda').storySections.length);
  assert.equal(document.querySelectorAll('.detail-gallery__image').length, get('red-panda').media.gallery.length);
  assert.match(document.querySelector('.detail-hero__status').textContent, /EN|濒危/);
});
