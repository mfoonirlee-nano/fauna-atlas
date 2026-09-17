import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

async function importCompiledModule(relativePath) {
  const fileUrl = new URL(relativePath, import.meta.url);
  const code = await readFile(fileUrl, 'utf8');
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`;
  return import(moduleUrl);
}

const [carouselModule, speciesModule, appSource, stylesSource] = await Promise.all([
  importCompiledModule('../node_modules/.tmp/carousel-test/domain/carousel.js'),
  importCompiledModule('../node_modules/.tmp/carousel-test/data/species.js'),
  readFile(new URL('../src/App.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/styles.css', import.meta.url), 'utf8'),
]);

const { shouldAutoplayCarousel, stepCarouselIndex, wrapCarouselIndex } = carouselModule;
const { species } = speciesModule;

// Source review records remain valid; the full-bleed hero intentionally crops these covers.
const regeneratedCovers = JSON.parse(await readFile(new URL('./fixtures/regenerated-covers.json', import.meta.url), 'utf8'));
const originalCovers = JSON.parse(await readFile(new URL('./fixtures/original-covers.json', import.meta.url), 'utf8'));
const reviewedCovers = { ...regeneratedCovers, ...originalCovers };
const { coverSubjects } = await importCompiledModule('../node_modules/.tmp/carousel-test/data/cover-subjects.js');

function coverSourceCrop({ sourceWidth, sourceHeight, viewportWidth, viewportHeight, focalPoint }) {
  const scale = Math.max(viewportWidth / sourceWidth, viewportHeight / sourceHeight);
  const visibleWidth = viewportWidth / scale;
  const visibleHeight = viewportHeight / scale;

  return {
    scale,
    left: (sourceWidth - visibleWidth) * focalPoint.x,
    top: (sourceHeight - visibleHeight) * focalPoint.y,
    right: sourceWidth - (sourceWidth - visibleWidth) * (1 - focalPoint.x),
    bottom: sourceHeight - (sourceHeight - visibleHeight) * (1 - focalPoint.y),
  };
}

test('carousel indexes wrap in both directions and tolerate an empty list', () => {
  assert.equal(wrapCarouselIndex(-1, 14), 13);
  assert.equal(stepCarouselIndex(13, 1, 14), 0);
  assert.equal(stepCarouselIndex(0, -1, 14), 13);
  assert.equal(stepCarouselIndex(0, 1, 1), 0);
  assert.equal(stepCarouselIndex(7, 1, 0), 0);
});

test('autoplay runs only while the carousel can change unobtrusively', () => {
  const ready = {
    slideCount: 14,
    paused: false,
    reducedMotion: false,
    interacting: false,
    pageVisible: true,
    inViewport: true,
    obscured: false,
  };

  assert.equal(shouldAutoplayCarousel(ready), true);
  assert.equal(shouldAutoplayCarousel({ ...ready, slideCount: 1 }), false);
  assert.equal(shouldAutoplayCarousel({ ...ready, paused: true }), false);
  assert.equal(shouldAutoplayCarousel({ ...ready, reducedMotion: true }), false);
  assert.equal(shouldAutoplayCarousel({ ...ready, interacting: true }), false);
  assert.equal(shouldAutoplayCarousel({ ...ready, pageVisible: false }), false);
  assert.equal(shouldAutoplayCarousel({ ...ready, inViewport: false }), false);
  assert.equal(shouldAutoplayCarousel({ ...ready, obscured: true }), false);
});

test('every catalogue animal contributes one local cover to the hero rotation', () => {
  assert.ok(species.length > 1);
  assert.equal(species.filter((item) => item.media.image).length, species.length);
  assert.equal(new Set(species.map((item) => item.media.image)).size, species.length);
  for (const item of species) {
    assert.match(item.media.image, /^\.\/images\/.+\.webp$/);
    if (!item.media.focalPoint) continue;
    assert.ok(item.media.focalPoint.x >= 0 && item.media.focalPoint.x <= 1, `${item.slug} focal x`);
    assert.ok(item.media.focalPoint.y >= 0 && item.media.focalPoint.y <= 1, `${item.slug} focal y`);
  }
});

test('hero carousel exposes controls and disables automatic motion when requested', () => {
  assert.match(appSource, /aria-roledescription="轮播图"/);
  assert.match(appSource, /aria-roledescription="幻灯片"/);
  assert.match(appSource, /id="hero-carousel-label"[^>]*>动物封面</);
  assert.match(appSource, /aria-label="封面轮播控制"/);
  assert.match(appSource, /暂停封面轮播/);
  assert.match(appSource, /继续播放封面轮播/);
  assert.match(appSource, /hero-carousel__mobile-specimen/);
  assert.equal((appSource.match(/hero__title-line/g) ?? []).length, 2);
  assert.match(appSource, /prefers-reduced-motion: reduce/);
  assert.match(appSource, /visibilitychange/);
  assert.match(appSource, /IntersectionObserver/);
  assert.match(appSource, /window\.clearTimeout\(timer\)/);
  assert.doesNotMatch(appSource, /aria-pressed=\{autoplayPaused/);
  assert.match(stylesSource, /hero-enter-forward/);
  assert.match(stylesSource, /@keyframes hero-title-line-enter/);
  assert.match(stylesSource, /-webkit-text-fill-color: rgba\(245, 242, 232, 0\.12\)/);
  assert.match(stylesSource, /font-size: clamp\(2\.35rem, 12vw, 4rem\)/);
  assert.match(stylesSource, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(stylesSource, /\.hero__title-line > span \{\s*animation: none;/);
});

test('reviewed covers retain exactly six images per species and use the canonical cover', async () => {
  const { readdir } = await import('node:fs/promises');
  const reviewed = reviewedCovers;
  for (const [slug, { cover }] of Object.entries(reviewed)) {
    const item = species.find((item) => item.slug === slug);
    const directory = new URL(`../public/images/species/${slug}/`, import.meta.url);
    const files = (await readdir(directory)).filter((file) => /\.(webp|png|jpe?g)$/i.test(file));
    assert.equal(files.length, 6, `${slug} has six images`);
    assert.ok(files.includes(item.media.image.split('/').at(-1)), `${slug} retains its canonical cover`);
    const bytes = await readFile(new URL(`../public/${item.media.image.slice(2)}`, import.meta.url));
    assert.equal(createHash('sha256').update(bytes).digest('hex'), cover.sha256);
  }
  assert.match(appSource, /src=\{heroSpecies.media.image/);
  assert.doesNotMatch(appSource, /heroArt|hero-desktop|hero-mobile/);
});

test('hero covers fill the entire canvas without bounded subject frames', () => {
  assert.match(stylesSource, /\.hero__image \{[^}]*inset: 0;[^}]*width: 100%;[^}]*height: 100%;[^}]*object-fit: cover;/);
  assert.doesNotMatch(appSource + stylesSource, /hero-subject-frame|hero--framed|heroSubjectStyle/);
  assert.match(appSource, /focalPointStyle\(previousSpecies.media.focalPoint\)/);
  assert.match(appSource, /focalPointStyle\(heroSpecies.media.focalPoint\)/);
  // Scaling from the center preserves coverage during each transition.
  for (const name of ['hero-enter', 'hero-enter-forward', 'hero-leave-forward', 'hero-enter-backward', 'hero-leave-backward']) {
    const animation = stylesSource.slice(stylesSource.indexOf(`@keyframes ${name} {`)).split('\n  }')[0];
    assert.doesNotMatch(animation, /translate/);
    const scales = [...animation.matchAll(/scale\(([\d.]+)\)/g)].map((match) => Number(match[1]));
    assert.equal(scales.length, 2);
    assert.ok(scales.every((scale) => scale >= 1));
  }
  assert.deepEqual(Object.keys(coverSubjects).sort(), Object.keys(reviewedCovers).sort());
});

test('new animal covers retain a complete right-side source silhouette', () => {
  for (const slug of ['blue-tit', 'laughing-kookaburra', 'european-bee-eater', 'toucan-barbet', 'common-raven', 'european-robin', 'chimpanzee', 'bornean-orangutan', 'cockatiel', 'mute-swan', 'indian-peafowl', 'sulphur-crested-cockatoo', 'eurasian-hoopoe', 'southern-cassowary', 'eurasian-eagle-owl', 'white-stork', 'pond-slider', 'leopard-gecko', 'frilled-lizard', 'corn-snake', 'whites-tree-frog', 'oriental-fire-bellied-newt', 'ocean-sunfish', 'largetooth-sawfish', 'menelaus-blue-morpho', 'european-stag-beetle', 'american-lobster', 'giant-peacock-moth', 'striped-skunk', 'caracal', 'leopard', 'chinese-tree-frog', 'american-bullfrog', 'atlantic-salmon', 'green-tree-python', 'arctic-fox', 'american-black-bear', 'sun-bear', 'jaguar', 'puma', 'serval', 'eurasian-lynx', 'gray-wolf', 'african-wild-dog', 'spotted-hyena', 'honey-badger', 'wolverine', 'european-badger', 'south-american-coati', 'sperm-whale', 'pygmy-hippopotamus', 'black-rhinoceros', 'king-penguin', 'adelie-penguin', 'gentoo-penguin', 'african-penguin']) {
    const { width, height, bounds } = reviewedCovers[slug].cover;
    assert.ok(bounds.left >= width * .4, `${slug}: quiet left side`);
    assert.ok((bounds.left + bounds.right) / 2 >= width * .6, `${slug}: right-side center`);
    assert.ok(bounds.top > 0 && bounds.bottom < height && bounds.right < width, `${slug}: real source margin`);
  }
});

for (const [slug, { cover }] of Object.entries(reviewedCovers)) {
  test(`${slug}: canonical cover fills desktop and mobile hero viewports`, () => {
    assert.deepEqual(coverSubjects[slug], { width: cover.width, height: cover.height, bounds: cover.bounds });
    const item = species.find((item) => item.slug === slug);
    for (const [viewportWidth, viewportHeight] of [[320, 760], [390, 760], [1366, 768], [1920, 900], [2560, 900], [3840, 900]]) {
      const crop = coverSourceCrop({
        sourceWidth: cover.width, sourceHeight: cover.height,
        viewportWidth, viewportHeight,
        focalPoint: item.media.focalPoint ?? { x: 0.5, y: 0.5 },
      });
      assert.ok(crop.left >= -1e-6 && crop.top >= -1e-6);
      assert.ok(crop.right <= cover.width + 1e-6 && crop.bottom <= cover.height + 1e-6);
      assert.ok(Math.abs((crop.right - crop.left) * crop.scale - viewportWidth) < 1e-6);
      assert.ok(Math.abs((crop.bottom - crop.top) * crop.scale - viewportHeight) < 1e-6);
    }
  });
}
