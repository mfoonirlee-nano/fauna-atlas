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

test('family exploration filters, reading chapters, illustrations, processes and feedback work', async (context) => {
  const { server, root, dom } = await setup(context);
  const { default: MicrobesPage } = await server.ssrLoadModule('/src/topics/microbes/MicrobesPage.tsx');
  await act(() => root.render(createElement(MicrobesPage)));
  const click = async (selector, text) => {
    const button = [...document.querySelectorAll(selector)].find(button => button.textContent.includes(text));
    assert.ok(button, `button exists: ${text}`);
    await act(() => button.click());
  };
  assert.equal(document.querySelectorAll('[data-topic]').length, 10);
  assert.equal(document.querySelectorAll('.microbe-reader').length, 1);
  assert.match(document.querySelector('#microbe-reader-title').textContent, /酿酒酵母/);
  assert.match(document.querySelector('.microbe-image .atlas-image__photo').getAttribute('src'), /02-story\.webp$/);
  assert.match(document.querySelector('.microbe-image .atlas-image__photo').getAttribute('alt'), /AI 科普插画.*非显微照片/);
  assert.equal(document.querySelector('.microbe-diagram'), null);
  assert.equal(document.querySelector('.life-process svg'), null);
  assert.equal(document.querySelector('#atlas'), null);
  assert.equal(document.querySelector('#taxonomy'), null);
  await click('.discovery-dates button', '1857');
  assert.match(document.querySelector('.discovery-story').textContent, /巴斯德/);
  await click('.feature-buttons button', '细胞旁的小芽');
  assert.match(document.querySelector('.feature-explanation').textContent, /新的酵母细胞/);
  await click('.picture-zoom', '放大');
  assert.ok(document.querySelector('.microbe-reader--expanded'));
  assert.equal(document.querySelector('.picture-zoom').getAttribute('aria-expanded'), 'true');
  await click('.picture-zoom', '收起');
  assert.equal(document.querySelector('.microbe-reader--expanded'), null);
  await click('.observation-switch button', '看细胞插画');
  const picture = document.querySelector('.microbe-image .atlas-image__photo');
  assert.match(picture.getAttribute('src'), /01-observation\.webp$/);
  assert.match(picture.getAttribute('alt'), /AI 科学重建.*不按比例/);
  assert.equal(picture.getAttribute('loading'), 'lazy');
  await click('.observation-switch button', '看生活插画');
  await click('.reader-chapters button', '它的日子怎么过');
  assert.match(document.querySelector('#reader-chapter').textContent, /椭圆细胞.*芽.*出芽/);
  await click('.reader-pagination button', '它会带来什么');
  assert.match(document.querySelector('#reader-chapter').textContent, /烤.*小孔/);
  await click('.life-process__steps button', '面包里留下小孔');
  assert.match(document.querySelector('.life-process__explanation').textContent, /成人烤/);
  await click('.microbe-quiz button', '叶子');
  assert.match(document.querySelector('.quiz-feedback').textContent, /再想一想.*二氧化碳/);
  await click('.microbe-quiz button', '气体');
  assert.match(document.querySelector('.quiz-feedback').textContent, /对，是这样/);
  await act(() => document.querySelector('.reader-sources summary').click());
  assert.equal(document.querySelector('.reader-sources').open, true);
  assert.match(document.querySelector('.reader-sources').textContent, /不尝生面团/);
  await click('.scene-picker button', '厨房');
  assert.equal(document.querySelectorAll('[data-topic]').length, 3);
  await click('.microbes-filters button', '细菌');
  assert.equal(document.querySelectorAll('[data-topic]').length, 2);
  assert.match(document.querySelector('#microbe-reader-title').textContent, /嗜热链球菌/);
  assert.equal(document.querySelector('.quiz-feedback'), null);
  assert.equal(document.querySelector('.reader-chapters [aria-pressed="true"]').textContent, '01我们怎么认识它');
  await click('.next-organism', '下一种');
  assert.match(document.querySelector('#microbe-reader-title').textContent, /德氏乳杆菌/);
  assert.equal(document.activeElement.id, 'microbe-reader-title');
  await click('.scene-picker button', '一滴水');
  assert.equal(document.querySelectorAll('[data-topic]').length, 0);
  await click('.microbes-empty button', '查看全部');
  assert.equal(document.querySelectorAll('[data-topic]').length, 10);
  const input = document.querySelector('input[type="search"]');
  await act(() => {
    Object.getOwnPropertyDescriptor(dom.window.HTMLInputElement.prototype, 'value').set.call(input, '没有这个名字');
    input.dispatchEvent(new dom.window.Event('input', { bubbles: true }));
  });
  assert.equal(document.querySelectorAll('[data-topic]').length, 0);
  assert.equal(document.querySelector('.microbe-reader'), null);
  await click('.microbes-empty button', '查看全部');
  assert.equal(document.querySelector('input').value, '');
  await click('.open-reader', '一起读');
  assert.equal(document.activeElement.id, 'microbe-reader-title');
  assert.ok(dom.window.location.pathname.endsWith('/nested/'));
});

test('each organism has sourced reading content and switching organisms resets exploration state', async (context) => {
  const { server, root } = await setup(context);
  const { default: MicrobesPage } = await server.ssrLoadModule('/src/topics/microbes/MicrobesPage.tsx');
  const { microbeTopics } = await server.ssrLoadModule('/src/topics/microbes/content.ts');
  const { learningStories } = await server.ssrLoadModule('/src/topics/microbes/learning.ts');
  assert.deepEqual(Object.keys(learningStories).sort(), microbeTopics.map(item => item.slug).sort());
  await act(() => root.render(createElement(MicrobesPage)));
  for (const item of microbeTopics) {
    const story = learningStories[item.slug];
    assert.equal(story.process.length, 3);
    assert.equal(story.processNotes.length, 3);
    assert.ok(story.quiz.correct === 0 || story.quiz.correct === 1);
    await act(() => document.querySelector(`[data-topic="${item.slug}"]`).click());
    assert.equal(document.querySelector('#microbe-reader-title').textContent, item.name);
    assert.equal(document.querySelector('.feature-buttons [aria-pressed="true"]').textContent, story.pictureNotes[0].label);
    assert.equal(document.querySelector('.quiz-feedback'), null);
    for (const [index, field] of ['discovery', 'habits', 'role', 'care'].entries()) {
      await act(() => document.querySelectorAll('.reader-chapters button')[index].click());
      assert.ok(document.querySelector('#reader-chapter').textContent.includes(story[field].replaceAll('\n\n', '')));
    }
    await act(() => document.querySelectorAll('.life-process__steps button')[2].click());
    await act(() => document.querySelectorAll('.microbe-quiz button')[story.quiz.correct].click());
    assert.ok(document.querySelector('.quiz-feedback').textContent.includes(story.quiz.explanation));
    for (const source of story.sources ?? []) assert.equal(new URL(source.url).protocol, 'https:');
  }
});

test('original cell illustrations retain their decoded dimensions and hashes', async (context) => {
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
    assert.deepEqual(files.sort(), ['01-observation.webp', '02-story.webp']);
  }
});

test('generated story illustrations are distinct, traceable and bound to decoded assets', async (context) => {
  const { server } = await setup(context);
  const { microbeTopics } = await server.ssrLoadModule('/src/topics/microbes/content.ts');
  const { microbeStoryImages } = await server.ssrLoadModule('/src/topics/microbes/media.ts');
  const { images } = JSON.parse(await readFile(new URL('../src/assets/source/microbes/story-images.json', import.meta.url), 'utf8'));
  const generation = JSON.parse(await readFile(new URL('../src/assets/source/microbes/story-generation.json', import.meta.url), 'utf8'));
  assert.equal(generation.method, 'built-in image_gen');
  assert.deepEqual(images.map(item => item.slug).sort(), microbeTopics.map(item => item.slug).sort());
  assert.equal(new Set(images.map(item => item.sha256)).size, 10);
  for (const item of images) {
    assert.ok(generation.images.some(record => record.slug === item.slug && record.prompt.includes('scientific-educational')));
    assert.deepEqual(microbeStoryImages[item.slug], { src: item.src, alt: item.alt, width: item.width, height: item.height });
    assert.match(item.alt, /AI 科普插画.*非显微照片.*不按比例/);
    const path = new URL(`../public/${item.src.slice(2)}`, import.meta.url);
    const bytes = await readFile(path);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), item.sha256);
    assert.equal(bytes.length, item.bytes);
    assert.equal(execFileSync('magick', ['identify', '-ping', '-format', '%w %h', path.pathname], { encoding: 'utf8' }).trim(), `${item.width} ${item.height}`);
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
