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

test('new generated covers keep the complete subject inside every hero animation frame', async () => {
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
  // These are the occupied component rectangles at each supported layout.
  // The assertion below adds the 24px safety gap; expanding the rectangles
  // here as well would count that clearance twice.
  const composedSafeAreas = new Map([
    ['320x760', [
      { name: 'mobile carousel panel', left: 32, top: 92, right: 302, bottom: 188 },
      { name: 'mobile hero copy', left: 0, top: 390, right: 320, bottom: 682 },
    ]],
    ['390x760', [
      { name: 'mobile carousel panel', left: 102, top: 92, right: 372, bottom: 188 },
      { name: 'mobile hero copy', left: 0, top: 390, right: 390, bottom: 682 },
    ]],
    ['1366x768', [
      { name: 'desktop hero copy', left: 0, top: 0, right: 832, bottom: 768 },
      { name: 'desktop carousel panel', left: 1038, top: 430, right: 1279, bottom: 663 },
    ]],
    ['1920x900', [
      { name: 'desktop hero copy', left: 0, top: 0, right: 1127, bottom: 900 },
      { name: 'desktop carousel panel', left: 1386, top: 560, right: 1626, bottom: 795 },
    ]],
    ['2560x900', [
      { name: 'desktop hero copy', left: 0, top: 0, right: 1447, bottom: 900 },
      { name: 'desktop carousel panel', left: 1706, top: 560, right: 1946, bottom: 795 },
    ]],
    ['3840x900', [
      { name: 'desktop hero copy', left: 0, top: 0, right: 2087, bottom: 900 },
      { name: 'desktop carousel panel', left: 2346, top: 560, right: 2586, bottom: 795 },
    ]],
  ]);
  const cases = [
    { slug: 'common-kingfisher', sha256: 'e606ce34900ade7ba646150e1dcf375ccd2ceb4c93a88466edfc7923e7e47a0a', fullBody: {"left": 1174, "top": 327, "right": 1246, "bottom": 393}, composedSafeAreas },
    { slug: 'mandarin-duck', sha256: 'a02217a6ba74ac5de2bd0a072ed28263ec8ea80294d6781d3ee148d4002af8f7', fullBody: {"left": 1172, "top": 394, "right": 1266, "bottom": 473}, composedSafeAreas },
    { slug: 'barn-swallow', sha256: 'a93909baf070c9a764c9675255e83a4d2e950b24ed560086d49a9c1de54ce15b', fullBody: {"left": 1172, "top": 358, "right": 1262, "bottom": 420}, composedSafeAreas },
    { slug: 'cheetah', sha256: 'baf32e943693378fffcf5f5e1bf10888c1864047141bf74461c6bed5a30a0a98', fullBody: {"left": 1086, "top": 360, "right": 1228, "bottom": 462}, composedSafeAreas },
    { slug: 'ring-tailed-lemur', sha256: '3054aac8204a0fb5d6f286d83df882148566d76f0c3dba86c08e2a0535403c1d', fullBody: {"left": 1178, "top": 344, "right": 1288, "bottom": 451}, composedSafeAreas },
    { slug: 'greater-flamingo', sha256: '4d36e7b70bf05c972fcb54caa51fb602ee21c1ba6a34f11431c2f975858a8c85', fullBody: {"left": 1236, "top": 336, "right": 1292, "bottom": 434}, composedSafeAreas },
    { slug: 'budgerigar', sha256: '60a0c527e5cefb24e0fbab50d5fe12c50f47cccfaff28da1b002f5897ff1677e', fullBody: {"left": 1216, "top": 302, "right": 1297, "bottom": 453}, composedSafeAreas },
    { slug: 'toco-toucan', sha256: '236c416bead0c08d8ec26aa3b926f391ebfb06d91e14aa6cd813e7e60622f861', fullBody: {"left": 1200, "top": 324, "right": 1276, "bottom": 424}, composedSafeAreas },
    { slug: 'bobbit-worm', sha256: 'b437d90d4330ffcd7905c56212a9820c38f318453ef104be71de2a9c1c6d50b7', fullBody: { left: 1070, top: 326, right: 1267, bottom: 438 }, composedSafeAreas },
    { slug: 'reticulated-giraffe', sha256: '8092bc44613f340c635cb783a8e9b64df001233c390bb95260e6f2f5237fc944', fullBody: { left: 1208, top: 363, right: 1258, bottom: 439 }, composedSafeAreas },
    { slug: 'hippopotamus', sha256: '56e93675c7dc76de596f9820289aac31f1c71fe2d81606438eb7670b3a6c78a7', fullBody: { left: 1140, top: 372, right: 1294, bottom: 440 }, composedSafeAreas },
    { slug: 'vampire-squid', sha256: '1bca74b8338918adc7dd20bf95e44b25ae4fb5aa0ab0bc055c682ace44692658', fullBody: { left: 1055, top: 314, right: 1295, bottom: 433 }, composedSafeAreas },
    { slug: 'australian-box-jellyfish', sha256: '8d51c0fdd087585c2fbff24f4ccd7a274df6c67ee4df3748d47ac7e591a80417', fullBody: { left: 1180, top: 317, right: 1313, bottom: 430 }, composedSafeAreas },
    { slug: 'sacculina-carcini', sha256: 'a5abff44770cc6f7e8c614a9a6ecccf48797e2bea3e3dd668f5ed6d2337a85d4', fullBody: { left: 1090, top: 335, right: 1300, bottom: 444 }, composedSafeAreas },
    { slug: 'scaly-foot-snail', sha256: 'b1c0ca58a5d7edda84846f83f5c635ad3f7c2ea4fc24015876f06166133caafb', fullBody: { left: 1195, top: 308, right: 1325, bottom: 395 }, composedSafeAreas },
    { slug: 'bootlace-worm', sha256: 'a2db469566eab5849f68940a6f44f0749cd88a73728cc4f2c08c436bcce360f4', fullBody: { left: 1225, top: 402, right: 1302, bottom: 456 }, composedSafeAreas },
    { slug: 'tongue-eating-louse', sha256: 'a0b4ecb0e3cf356dfa0d8fb2d9ae25617a1f828c3458108346321e0c0253fb83', fullBody: { left: 1108, top: 325, right: 1295, bottom: 410 }, composedSafeAreas },
    { slug: 'giant-vinegaroon', sha256: 'e7660ea355796dbcce959a3855c1f140c2774b6cbf30cc3f3f9635755505e8c4', fullBody: { left: 1126, top: 321, right: 1220, bottom: 390 }, composedSafeAreas },
    { slug: 'trichoplax-adhaerens', sha256: '1f08c615aedebc60bf4874c2ef629c3cc04d04372d3a475546ba773ac90fda61', fullBody: { left: 1075, top: 337, right: 1208, bottom: 435 }, composedSafeAreas },
    {
      slug: 'ramazzottius-varieornatus',
      sha256: 'a1ff461d20b6e49cbae3431cfd7d96c47289182a570648e5780c148f13d94aa9',
      fullBody: { left: 1188, top: 408, right: 1328, bottom: 467 },
      composedSafeAreas,
    },
    {
      slug: 'totoro-velvet-worm',
      sha256: '9601f3a4a024a3eb67d6f2b80994426012a50951cf2cc0f32b5a486a000fed25',
      fullBody: { left: 1134, top: 375, right: 1284, bottom: 413 },
      composedSafeAreas,
    },
    {
      slug: 'plains-zebra',
      sha256: '78a91deecad8048f30422ca6d9ba1a223fabf45376226d48e335ea9a192445b3',
      fullBody: { left: 1137, top: 329, right: 1233, bottom: 416 },
      composedSafeAreas,
    },
    {
      slug: 'banded-archerfish',
      sha256: '5d5954eb1057b0c9aa59c1661f3291ee090b7765b1d8e7f55c754884cbc400ae',
      fullBody: { left: 1183, top: 350, right: 1305, bottom: 402 },
      composedSafeAreas,
    },
    {
      slug: 'white-spotted-pufferfish',
      sha256: '3e23beca69d1204b606e3ddcc43a93e54330260f953beb81bdb05b5588557942',
      fullBody: { left: 1212, top: 348, right: 1363, bottom: 413 },
      composedSafeAreas,
    },
    {
      slug: 'electric-eel',
      sha256: '314edef747eac64bbe6e30b2d7b7cac202aa8f0c44382f8fe3eea99cda12d766',
      fullBody: { left: 1218, top: 323, right: 1412, bottom: 395 },
      composedSafeAreas,
    },
    {
      slug: 'leafy-seadragon',
      sha256: '08cbece33dfc08ed562b1cfd8b3ccd0a20ac23c6b056826265e8120eda01badf',
      fullBody: { left: 1142, top: 324, right: 1253, bottom: 397 },
      composedSafeAreas,
    },
    {
      slug: 'barreleye',
      sha256: 'b0d49814ffda461cfdf7a61f46de776cfac47644eaaf053de772826c48aac1ed',
      fullBody: { left: 1130, top: 328, right: 1258, bottom: 393 },
      composedSafeAreas,
    },
    {
      slug: 'darwins-frog',
      sha256: '7447ef467e913e22fc80b712b0bdcb3923ede4b8881dcae7d126611460553123',
      fullBody: { left: 1165, top: 300, right: 1350, bottom: 400 },
      composedSafeAreas,
    },
    {
      slug: 'superb-lyrebird',
      sha256: '4e87b6137edd07bee2d95db6ee68eba161bcd179a3102efc7318bea3f0b96ee1',
      fullBody: { left: 930, top: 395, right: 1100, bottom: 710 },
    },
    {
      slug: 'ocellaris-clownfish',
      sha256: '70fd1d363900d1a3b4e0afa314b0007199ed8f4e8fbc75976207530add6ad756',
      fullBody: { left: 1080, top: 325, right: 1270, bottom: 415 },
      composedSafeAreas,
    },
    {
      slug: 'purple-frog',
      sha256: 'd112b046ee8428674e26db4d1795cac2320202a7906b024c236611989f7674df',
      fullBody: { left: 1090, top: 348, right: 1270, bottom: 452 },
      composedSafeAreas,
    },
    {
      slug: 'hairy-frog',
      sha256: '7f04b42b9b71f451a01a3a296558230dbc7092b8a381545c6ccb1490389c0dd4',
      fullBody: { left: 1122, top: 322, right: 1284, bottom: 410 },
      composedSafeAreas,
    },
    {
      slug: 'spider-tailed-horned-viper',
      sha256: 'ef6fde6b403090d9e6ed5a305f840a88b36a96618043923dd19b9ba51d2be0d1',
      fullBody: { left: 1035, top: 330, right: 1238, bottom: 445 },
      composedSafeAreas,
    },
    {
      slug: 'garden-snail',
      sha256: '0bb8712030196d2b9413bc36c2872af539d8d9be43d79a48a1eb1cc89551ae24',
      fullBody: { left: 1145, top: 328, right: 1295, bottom: 405 },
      composedSafeAreas,
    },
    {
      slug: 'oilbird',
      sha256: '8dfb97785b0950e8322632d5b5996a28d0a36587d6a7a7df7533298bb470d511',
      fullBody: { left: 870, top: 374, right: 1010, bottom: 615 },
    },
    {
      slug: 'great-hornbill',
      sha256: '24c14fb5074994fb3ddc816f7dc23b46ccd5cc450928c11bebc52436972acf1c',
      fullBody: { left: 975, top: 297, right: 1120, bottom: 618 },
    },
    {
      slug: 'meerkat',
      sha256: '5c8c1d8a8e3b1043ca339a2bf3bfe3a8904d3e4616b557ea1df332cf7a77289c',
      fullBody: { left: 1055, top: 465, right: 1210, bottom: 755 },
    },
    {
      slug: 'shoebill',
      sha256: '384e0758e7b41f817603a6e57e363c2724b51f5cb9fbeb9f2fcd3fdba7246064',
      fullBody: { left: 1055, top: 415, right: 1195, bottom: 625 },
    },
    {
      slug: 'thorny-devil',
      sha256: '3a49e9ca0dd36d2a13a30e5bf4f6306faacdac1d79c9423bce98cd5454de0213',
      fullBody: { left: 1050, top: 305, right: 1325, bottom: 410 },
      composedSafeAreas,
    },
    {
      slug: 'texas-horned-lizard',
      sha256: 'be75b3a7fc30544d9064b5fe19f8818f0fbf06fd92cb43626a01dfe9d08997d0',
      fullBody: { left: 1103, top: 374, right: 1380, bottom: 484 },
      composedSafeAreas,
    },
    {
      slug: 'common-pillbug',
      sha256: 'a9cb1433aa1b867af6c936dd7934f0557e2b41aee9b4e4c19f9c76c4e3768c8f',
      fullBody: { left: 1215, top: 339, right: 1380, bottom: 410 },
      composedSafeAreas,
    },
    {
      slug: 'himalayan-marmot',
      sha256: 'cd34976979ce00d87703a0c0fa2a560a3b87f2d42e18cd9c52c83bba29de2551',
      fullBody: { left: 1132, top: 312, right: 1305, bottom: 390 },
      composedSafeAreas,
    },
    {
      slug: 'common-raccoon',
      sha256: 'fe4efd53e9041d14197d8af9c5c8e75bbacc177b26b53b1c5ad4bee529424281',
      fullBody: { left: 1060, top: 315, right: 1225, bottom: 414 },
      composedSafeAreas,
    },
  ];

  for (const { slug, sha256, fullBody, composedSafeAreas } of cases) {
    const item = species.find((candidate) => candidate.slug === slug);
    const focalPoint = item?.media.focalPoint;
    assert.ok(focalPoint, `${slug} hero focal point`);
    const imageBytes = await readFile(new URL(`../public/${item.media.image.slice(2)}`, import.meta.url));
    assert.equal(createHash('sha256').update(imageBytes).digest('hex'), sha256, `${slug} reviewed cover hash`);

    for (const viewport of heroViewports) {
      const crop = coverSourceCrop({ ...sourceSize, ...viewport, focalPoint });
      const projectedBody = projectSourceBounds(fullBody, crop);
      for (const endpoint of animationEndpoints) {
        const animatedBody = transformBounds(projectedBody, viewport, endpoint);
        const margins = {
          top: animatedBody.top,
          right: viewport.viewportWidth - animatedBody.right,
          bottom: viewport.viewportHeight - animatedBody.bottom,
          left: animatedBody.left,
        };
        for (const [edge, margin] of Object.entries(margins)) {
          assert.ok(
            margin >= 24,
            `${slug} full body needs 24px ${edge} clearance at ${viewport.viewportWidth}x${viewport.viewportHeight} ${endpoint.name}; got ${margin.toFixed(1)}px`,
          );
        }

        const viewportKey = `${viewport.viewportWidth}x${viewport.viewportHeight}`;
        for (const safeArea of composedSafeAreas?.get(viewportKey) ?? []) {
          const separations = {
            above: safeArea.top - animatedBody.bottom,
            right: animatedBody.left - safeArea.right,
            below: animatedBody.top - safeArea.bottom,
            left: safeArea.left - animatedBody.right,
          };
          const clearance = Math.max(...Object.values(separations));
          assert.ok(
            clearance >= 24,
            `${slug} full body needs 24px clearance from ${safeArea.name} at ${viewportKey} ${endpoint.name}; got ${clearance.toFixed(1)}px`,
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
