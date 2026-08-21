import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

async function importCompiledModule(relativePath) {
  const fileUrl = new URL(relativePath, import.meta.url);
  const code = await readFile(fileUrl, 'utf8');
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`;
  return import(moduleUrl);
}

const [viewerModule, speciesModule, appSource, stylesSource] = await Promise.all([
  importCompiledModule('../node_modules/.tmp/image-viewer-test/domain/image-viewer.js'),
  importCompiledModule('../node_modules/.tmp/image-viewer-test/data/species.js'),
  readFile(new URL('../src/App.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/styles.css', import.meta.url), 'utf8'),
]);

const { buildSpeciesImageFrames } = viewerModule;
const { species } = speciesModule;

test('image viewer frames keep the cover first and preserve gallery metadata', () => {
  for (const item of species) {
    const frames = buildSpeciesImageFrames(item);
    const coverOffset = item.media.image ? 1 : 0;
    const expectedLength = coverOffset + (item.media.gallery?.length ?? 0);

    assert.equal(frames.length, expectedLength, item.slug);
    if (item.media.image) {
      assert.equal(frames[0]?.kind, 'cover', `${item.slug} cover kind`);
      assert.equal(frames[0]?.image, item.media.image, `${item.slug} cover image`);
      assert.equal(frames[0]?.caption, item.summary, `${item.slug} cover summary`);
    }

    for (const [index, image] of (item.media.gallery ?? []).entries()) {
      const frame = frames[index + coverOffset];
      assert.equal(frame?.kind, 'gallery', `${item.slug} gallery ${index + 1} kind`);
      assert.equal(frame?.image, image.image, `${item.slug} gallery ${index + 1} image`);
      assert.equal(frame?.title, image.title, `${item.slug} gallery ${index + 1} title`);
      assert.equal(frame?.caption, image.caption ?? item.summary, `${item.slug} gallery ${index + 1} caption`);
      assert.equal(frame?.credit, image.credit ?? item.media.credit, `${item.slug} gallery ${index + 1} credit`);
    }

    assert.equal(new Set(frames.map((frame) => frame.id)).size, frames.length, `${item.slug} frame ids`);
    for (const frame of frames) {
      assert.match(frame.image, /^\.\/images\/.+\.webp$/, `${frame.id} local image`);
      assert.ok(frame.alt.trim(), `${frame.id} alt`);
      assert.ok(frame.title.trim(), `${frame.id} title`);
      if (!frame.focalPoint) continue;
      assert.ok(frame.focalPoint.x >= 0 && frame.focalPoint.x <= 1, `${frame.id} focal x`);
      assert.ok(frame.focalPoint.y >= 0 && frame.focalPoint.y <= 1, `${frame.id} focal y`);
    }
  }

  const sample = species[0];
  assert.ok(sample);
  const galleryOnlyFrames = buildSpeciesImageFrames({
    ...sample,
    media: {
      alt: sample.media.alt,
      credit: sample.media.credit,
      gallery: sample.media.gallery,
    },
  });
  assert.equal(galleryOnlyFrames[0]?.kind, 'gallery');
  assert.equal(galleryOnlyFrames.length, sample.media.gallery?.length ?? 0);

  const emptyFrames = buildSpeciesImageFrames({
    ...sample,
    media: { alt: sample.media.alt },
  });
  assert.deepEqual(emptyFrames, []);
});

test('detail images expose semantic full-screen viewer controls', () => {
  assert.match(appSource, /className="detail-hero__image-trigger"/);
  assert.match(appSource, /className="detail-gallery__image"/);
  assert.match(appSource, /aria-label=\{`全屏查看\$\{item\.names\.zh\}/);
  assert.match(appSource, /className=\{`image-viewer[^\n]+[\s\S]*?role="dialog"[\s\S]*?aria-modal="true"/);
  assert.match(appSource, /imageIndex \+ galleryFrameOffset/);
  assert.match(appSource, /aria-label="关闭全屏影像"/);
  assert.match(appSource, /aria-label="全部影像"/);
  assert.match(appSource, /aria-live="polite"/);
});

test('the topmost dialog owns keyboard input and returns focus one layer at a time', () => {
  assert.match(appSource, /if \(activeImageIndex !== null\) \{\s*closeImageViewer\(\);\s*\} else \{\s*onClose\(\);/s);
  assert.match(appSource, /event\.key === 'ArrowLeft' \|\| event\.key === 'ArrowRight'/);
  assert.match(appSource, /activeImageIndex === null \? dialogRef\.current : imageViewerRef\.current/);
  assert.match(appSource, /lastImageTriggerRef\.current\?\.focus\(\)/);
  assert.match(appSource, /inert=\{activeImageIndex !== null\}/);
  assert.match(appSource, /aria-modal=\{activeImageIndex === null\}/);
  assert.match(appSource, /event\.target === event\.currentTarget/);
});

test('viewer fills the viewport, preserves the whole photo and adapts on narrow screens', () => {
  assert.match(stylesSource, /\.image-viewer\s*{[^}]*position:\s*fixed[^}]*z-index:\s*200[^}]*inset:\s*0/s);
  assert.match(stylesSource, /\.image-viewer__stage > img\s*{[^}]*object-fit:\s*contain/s);
  assert.match(stylesSource, /\.detail-backdrop\s*{[^}]*z-index:\s*100/s);
  assert.match(stylesSource, /\.image-viewer--single\s*{[^}]*grid-template-rows:\s*70px minmax\(0, 1fr\)/s);
  assert.match(stylesSource, /\.image-viewer__main\s*{[^}]*grid-template-columns:\s*minmax\(0, 1fr\) clamp\(320px, 27vw, 420px\)/s);
  assert.match(stylesSource, /@media \(max-width: 760px\)[\s\S]*?\.image-viewer__main\s*{[^}]*grid-template-columns:\s*1fr/s);
});
