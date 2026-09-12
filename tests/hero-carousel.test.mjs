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
    { slug: 'common-wombat', sha256: 'b106cfc14f2379d4c91d0263b708580af9935f6ddec16ec37156e4d348a5cb70', fullBody: {"left": 1158, "top": 398, "right": 1275, "bottom": 465}, composedSafeAreas },
    { slug: 'quokka', sha256: '95c64650fa2d44ab25777d7749d7a5f143106ff562dc87da8ea72096a2c6d2b9', fullBody: {"left": 1116, "top": 347, "right": 1238, "bottom": 444}, composedSafeAreas },
    { slug: 'reindeer', sha256: 'bf2188d790fe5a7033d75f294cae7c567f13adf640548ebb004c6317755e79ee', fullBody: {"left": 1175, "top": 377, "right": 1268, "bottom": 475}, composedSafeAreas },
    { slug: 'red-fox', sha256: 'a50656b23476bf2e44834e3aa7edea5e4cdedb388e94e0438b5e0265bfaccb2f', fullBody: {"left": 1144, "top": 408, "right": 1262, "bottom": 480}, composedSafeAreas },
    { slug: 'california-sea-lion', sha256: '20a40c2a84e100df0bc8dba38c8d7cb274245e258e74a3e03b662327892d2cd0', fullBody: {"left": 1098, "top": 360, "right": 1186, "bottom": 432}, composedSafeAreas },
    { slug: 'fire-salamander', sha256: 'a02ad3f4e9e1375a91f1ff2ef399a87db5648bfe3356a2cae66079ed634bfb6c', fullBody: {"left": 1038, "top": 320, "right": 1193, "bottom": 411}, composedSafeAreas },
    { slug: 'malayan-tapir', sha256: 'accaddb648d8479cae8cfe65e62d04d34188e48a03ed0a775d3cd5cc4a8e96a8', fullBody: {"left": 1078, "top": 328, "right": 1248, "bottom": 426}, composedSafeAreas },
    { slug: 'brown-bear', sha256: 'eab98ad881b46133c738d3611b2bed7e9d02aac3ac06165a6d3d22c767d26528', fullBody: {"left": 1083, "top": 408, "right": 1183, "bottom": 470}, composedSafeAreas },
    { slug: 'eurasian-magpie', sha256: '14bca02afa937eea9095e7d583815f16e6874b3cbd7740b3da6268a8ca22039f', fullBody: {"left": 1038, "top": 307, "right": 1211, "bottom": 415}, composedSafeAreas },
    { slug: 'long-tailed-chinchilla', sha256: '8fb409e2c7314ba1cfdc084a5a62e496b9b24db0b51158dae53a71c66c0db36a', fullBody: {"left": 1110, "top": 307, "right": 1290, "bottom": 420}, composedSafeAreas },
    { slug: 'scarlet-macaw', sha256: 'b70d42768f1d0ea51a3a6705c289f16121130765beeb5e72f45b75c8b5a8d4d7', fullBody: {"left": 1116, "top": 342, "right": 1167, "bottom": 461}, composedSafeAreas },
    { slug: 'guppy', sha256: '2ab8d504454cda1ef1b9555354004153584786d1e7d1e304d5410be0e0acd434', fullBody: {"left": 1059, "top": 373, "right": 1172, "bottom": 434}, composedSafeAreas },
    { slug: 'blue-tang', sha256: 'e4708dff207a7c4d8a8b3717b9019e554b604b6da62da1ebff570148de2444c0', fullBody: {"left": 1048, "top": 345, "right": 1138, "bottom": 389}, composedSafeAreas },
    { slug: 'chinese-mitten-crab', sha256: '5aa7c49bb807b626cb8f88f4773048f6a70455780aa2fbb1b2c6d2b8a470a66c', fullBody: {"left": 1183, "top": 398, "right": 1301, "bottom": 473}, composedSafeAreas },
    { slug: 'common-cuttlefish', sha256: '954e950d3227bef558ddd20db0b4abb1c429db4584d9436260c9ec69787f069a', fullBody: {"left": 1140, "top": 330, "right": 1228, "bottom": 380}, composedSafeAreas },
    { slug: 'fennec-fox', sha256: '889caff2e9c0680a6fa9cac77107a42f6d0b88cff72599c39f4cd0d53f5b3615', fullBody: {"left": 1035, "top": 306, "right": 1230, "bottom": 452}, composedSafeAreas },
    { slug: 'harbor-seal', sha256: '9be4332a8d5482f218652374a83b078ee0ec11a13b127c5d01035d7220b557bb', fullBody: {"left": 1070, "top": 430, "right": 1186, "bottom": 486}, composedSafeAreas },
    { slug: 'beluga-whale', sha256: '42e9220331c328f34a2a12ad7adb1b949b303fd76c8e713295ea7dfd7a1ee367', fullBody: {"left": 1058, "top": 364, "right": 1231, "bottom": 416}, composedSafeAreas },
    { slug: 'killer-whale', sha256: 'cc1ff46817282efa704ac6ade67dcbf7d40a7eea482814131eceaf7cca6aad5a', fullBody: {"left": 1078, "top": 334, "right": 1315, "bottom": 436}, composedSafeAreas },
    { slug: 'atlantic-puffin', sha256: 'aba1f154adc1637968bb7d44eca1dcd4f15eb1139120aaf32ac98764d8d80dac', fullBody: {"left": 1132, "top": 400, "right": 1220, "bottom": 478}, composedSafeAreas },
    { slug: 'common-starfish', sha256: '9140a9e61a050c6666ea2df7ff25c34b86dbf53c11c79fcf6351d9a381e4ca47', fullBody: {"left": 1042, "top": 329, "right": 1172, "bottom": 424}, composedSafeAreas },
    { slug: 'walrus', sha256: 'd12ce22d749d2a9bd21e2be743442bb7abc3c95cbdf9388fb086fea39400933a', fullBody: {"left": 1122, "top": 378, "right": 1320, "bottom": 474}, composedSafeAreas },
    { slug: 'great-spotted-woodpecker', sha256: '3013b1c92fd14d835427ca2f9aa04fdef66ca28a6014e22b4c38a02e743f3971', fullBody: {"left": 1084, "top": 337, "right": 1142, "bottom": 482}, composedSafeAreas },
    { slug: 'leafcutter-ant', sha256: '221091bed60101441ae2835025e9c0e13502f0ae99e97f368811d58d41313357', fullBody: {"left": 1112, "top": 350, "right": 1247, "bottom": 459}, composedSafeAreas },
    { slug: 'guinea-pig', sha256: 'e04c81245381d9f073b23f21a2d04c39e3a7d3bf85d92df768edf8c99da38d48', fullBody: {"left": 1083, "top": 319, "right": 1239, "bottom": 425}, composedSafeAreas },
    { slug: 'capybara', sha256: '0e0b56c6fbe9d1d1cc9e5764b2ecbea19714f03bca88186107152067fed8a2ec', fullBody: {"left": 1040, "top": 350, "right": 1192, "bottom": 458}, composedSafeAreas },
    { slug: 'european-hedgehog', sha256: '12f8daa02fe1b36bd9e9fe51c9f65058989c4bd48651a777694b9ad280b40311', fullBody: {"left": 1066, "top": 318, "right": 1221, "bottom": 425}, composedSafeAreas },
    { slug: 'little-blue-penguin', sha256: '2b77ad5ed133011c132f9afddeb3f7c579e06f8247f80b5e38a4f47bd431c354', fullBody: {"left": 1101, "top": 334, "right": 1227, "bottom": 462}, composedSafeAreas },
    { slug: 'aldabra-giant-tortoise', sha256: 'e82280c9d445aa9aa491e67e8fb5c4bffa246f28ce37286435be149148d7c337', fullBody: {"left": 1083, "top": 328, "right": 1187, "bottom": 378}, composedSafeAreas },
    { slug: 'yellow-seahorse', sha256: '53cb6d767c939949a11b63cab3a87b2dd9140975dcc8ae9583596e03e7d26d5a', fullBody: {"left": 1058, "top": 301, "right": 1172, "bottom": 451}, composedSafeAreas },
    { slug: 'eurasian-red-squirrel', sha256: 'c4e9c01c4ee01220bf1d85a155863b695067397e1c64815b266bb91a3887fd38', fullBody: {"left": 1138, "top": 304, "right": 1320, "bottom": 463}, composedSafeAreas },
    { slug: 'mallard', sha256: '3301e8e7237f1ac9df9da419123e42ab758068cc88a823a9a391cc88a940d982', fullBody: {"left": 1120, "top": 300, "right": 1265, "bottom": 438}, composedSafeAreas },
    { slug: 'alpaca', sha256: 'c451ef8684f88001f9e7a8fd1a45d6411d1eb12f7cb0bf551acb48acb910d9eb', fullBody: {"left": 1150, "top": 335, "right": 1255, "bottom": 458}, composedSafeAreas },
    { slug: 'golden-hamster', sha256: 'f2f4afef38772b59813b368ff03a560d62db77bdee424695d15876ce01db44e0', fullBody: {"left": 1098, "top": 318, "right": 1207, "bottom": 435}, composedSafeAreas },
    { slug: 'koala', sha256: '5eebef4dda81ec2f7ddeafcf0760aa92937e1499b94229a99a5c4ee676e2a4a9', fullBody: {"left": 1050, "top": 319, "right": 1180, "bottom": 464}, composedSafeAreas },
    { slug: 'european-rabbit', sha256: '0396594c0300c5058a20e4e0621ce84057298fe339ab10c659daaeb59d0ee1c2', fullBody: { left: 1040, top: 320, right: 1220, bottom: 488 }, composedSafeAreas },
    { slug: 'eastern-honey-bee', sha256: '9931d6bc10034704870de6664cd257cbf746f3b7541d07293170fc0b5c7e1753', fullBody: {"left": 1123, "top": 359, "right": 1241, "bottom": 437}, composedSafeAreas },
    { slug: 'two-spotted-cricket', sha256: 'eef1c4bc8ca08e6d4fe7d4cd4cfffd2ce7bc56bf43d2b4d036d11c8d30920de8', fullBody: {"left": 1133, "top": 314, "right": 1246, "bottom": 422}, composedSafeAreas },
    { slug: 'japanese-rhinoceros-beetle', sha256: '1f0f66b4c55d33bcb072be3a26f5b35eb595df35a93846608968bc153a74d85f', fullBody: {"left": 1160, "top": 316, "right": 1346, "bottom": 480}, composedSafeAreas },
    { slug: 'orange-oakleaf', sha256: 'aa7325ce319110d80ee24a88fa6ff6bf7b850b97987bb29321aeee7170ac5b92', fullBody: {"left": 1163, "top": 347, "right": 1264, "bottom": 431}, composedSafeAreas },
    { slug: 'heike-firefly', sha256: '9a503e5d781c1c088313d68b2d7c870e16eafdaf3818d1d0f53583f3679ba174', fullBody: {"left": 1043, "top": 336, "right": 1206, "bottom": 439}, composedSafeAreas },
    { slug: 'veiled-chameleon', sha256: 'd524587cd54d525f4f373bbd0d14603ffcff85dd9c412f202ae70513c3f2c1b2', fullBody: {"left": 1182, "top": 334, "right": 1322, "bottom": 474}, composedSafeAreas },
    { slug: 'oriental-fire-bellied-toad', sha256: '0b679936cd106e12f96a4f1b068f8ebf6e42db7af349102c076febe02ede6255', fullBody: {"left": 1151, "top": 337, "right": 1265, "bottom": 412}, composedSafeAreas },
    { slug: 'goldfish', sha256: 'a5fb00bfdd14c44a00e9f74e5c59e94c158486209eccdf7158d5eba5cb910c64', fullBody: {"left": 1126, "top": 362, "right": 1254, "bottom": 421}, composedSafeAreas },
    { slug: 'siamese-fighting-fish', sha256: '40132e9164cef77ccb35e30ef08905240c8bbc01a80d1f84e9e3b3c0701c52ce', fullBody: {"left": 1075, "top": 347, "right": 1268, "bottom": 482}, composedSafeAreas },
    { slug: 'great-white-shark', sha256: 'bb8b893fc12879b4bbf6c2f836095b2d02d239bd4bbf6f0827b2de4e366fca25', fullBody: {"left": 1092, "top": 346, "right": 1305, "bottom": 431}, composedSafeAreas },
    { slug: 'common-kingfisher', sha256: 'e606ce34900ade7ba646150e1dcf375ccd2ceb4c93a88466edfc7923e7e47a0a', fullBody: {"left": 1174, "top": 327, "right": 1246, "bottom": 393}, composedSafeAreas },
    { slug: 'mandarin-duck', sha256: 'a02217a6ba74ac5de2bd0a072ed28263ec8ea80294d6781d3ee148d4002af8f7', fullBody: {"left": 1172, "top": 394, "right": 1266, "bottom": 473}, composedSafeAreas },
    { slug: 'barn-swallow', sha256: 'a93909baf070c9a764c9675255e83a4d2e950b24ed560086d49a9c1de54ce15b', fullBody: {"left": 1172, "top": 358, "right": 1262, "bottom": 420}, composedSafeAreas },
    { slug: 'green-iguana', sha256: '4ee8a4faa247ac685578ea00cae4dde5423543d49b8f48a717a5e0cead374de8', fullBody: {"left": 1130, "top": 372, "right": 1320, "bottom": 424}, composedSafeAreas },
    { slug: 'central-bearded-dragon', sha256: '96223e670a91020e127a7781e694b82e66d13169747197e4bd2d49497d75ff87', fullBody: {"left": 1138, "top": 360, "right": 1360, "bottom": 435}, composedSafeAreas },
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
