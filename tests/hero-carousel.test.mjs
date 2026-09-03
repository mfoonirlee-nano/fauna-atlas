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

function projectSourceBounds(bounds, crop) {
  return {
    left: (bounds.left - crop.left) * crop.scale,
    top: (bounds.top - crop.top) * crop.scale,
    right: (bounds.right - crop.left) * crop.scale,
    bottom: (bounds.bottom - crop.top) * crop.scale,
  };
}

function transformBounds(bounds, { viewportWidth, viewportHeight }, { scale, translateX }) {
  const centerX = viewportWidth / 2;
  const centerY = viewportHeight / 2;
  return {
    left: centerX + (bounds.left - centerX) * scale + viewportWidth * translateX,
    top: centerY + (bounds.top - centerY) * scale,
    right: centerX + (bounds.right - centerX) * scale + viewportWidth * translateX,
    bottom: centerY + (bounds.bottom - centerY) * scale,
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

test('legacy tall covers keep their identity-bearing heads inside responsive hero animation frames', async () => {
  const sourceSize = { sourceWidth: 1536, sourceHeight: 1024 };
  const heroViewports = [
    { viewportWidth: 320, viewportHeight: 760 },
    { viewportWidth: 390, viewportHeight: 760 },
    { viewportWidth: 1366, viewportHeight: 768 },
    { viewportWidth: 1920, viewportHeight: 900 },
    { viewportWidth: 2560, viewportHeight: 900 },
    { viewportWidth: 3840, viewportHeight: 900 },
  ];
  const animationEndpoints = [
    { name: 'settled', scale: 1, translateX: 0 },
    { name: 'initial-from', scale: 1.04, translateX: 0 },
    { name: 'enter-forward-from', scale: 1.025, translateX: 0.05 },
    { name: 'leave-forward-to', scale: 1.015, translateX: -0.04 },
    { name: 'enter-backward-from', scale: 1.025, translateX: -0.05 },
    { name: 'leave-backward-to', scale: 1.015, translateX: 0.04 },
  ];
  const endpointStyles = [
    /@keyframes hero-enter \{\s*from \{ transform: scale\(1\.04\);/,
    /@keyframes hero-enter-forward \{\s*from \{ transform: translate3d\(5%, 0, 0\) scale\(1\.025\);/,
    /@keyframes hero-leave-forward \{[^}]+\}\s*to \{ transform: translate3d\(-4%, 0, 0\) scale\(1\.015\);/,
    /@keyframes hero-enter-backward \{\s*from \{ transform: translate3d\(-5%, 0, 0\) scale\(1\.025\);/,
    /@keyframes hero-leave-backward \{[^}]+\}\s*to \{ transform: translate3d\(4%, 0, 0\) scale\(1\.015\);/,
  ];
  for (const endpointStyle of endpointStyles) assert.match(stylesSource, endpointStyle);
  assert.match(stylesSource, /\.hero__image \{[^}]+transform-origin: center center;/);

  // These head-only cases preserve earlier fixes. New or changed covers must
  // register full-subject bounds under the species cover rule.
  const cases = [
    {
      slug: 'golden-snub-nosed-monkey',
      sha256: '4d76b2c5973e9367d977eeb3852b42dcf66535ae245d66764accf38571b356aa',
      head: { left: 1017, top: 390, right: 1163, bottom: 518 },
    },
    {
      slug: 'red-crowned-crane',
      sha256: '21e458d0fbd383df212e4e2bffe1cbbccdbb849a67f199103af93cade7fd470e',
      head: { left: 900, top: 351, right: 1028, bottom: 429 },
    },
  ];

  for (const { slug, sha256, head } of cases) {
    const item = species.find((candidate) => candidate.slug === slug);
    const focalPoint = item?.media.focalPoint;
    assert.ok(focalPoint, `${slug} hero focal point`);
    const imageBytes = await readFile(new URL(`../public/${item.media.image.slice(2)}`, import.meta.url));
    assert.equal(createHash('sha256').update(imageBytes).digest('hex'), sha256, `${slug} reviewed cover hash`);
    for (const viewport of heroViewports) {
      const crop = coverSourceCrop({ ...sourceSize, ...viewport, focalPoint });
      const projectedHead = projectSourceBounds(head, crop);
      for (const endpoint of animationEndpoints) {
        const animatedHead = transformBounds(projectedHead, viewport, endpoint);
        const margins = {
          top: animatedHead.top,
          right: viewport.viewportWidth - animatedHead.right,
          bottom: viewport.viewportHeight - animatedHead.bottom,
          left: animatedHead.left,
        };
        for (const [edge, margin] of Object.entries(margins)) {
          assert.ok(
            margin >= 24,
            `${slug} head needs 24px ${edge} clearance at ${viewport.viewportWidth}x${viewport.viewportHeight} ${endpoint.name}; got ${margin.toFixed(1)}px`,
          );
        }
      }
    }
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
