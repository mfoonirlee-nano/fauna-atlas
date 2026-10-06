import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
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

const { fitHeroSubject, shouldAutoplayCarousel, stepCarouselIndex, wrapCarouselIndex } = carouselModule;
const { species } = speciesModule;

// Match the runtime covers to their reviewed full-subject bounds.
const regeneratedCovers = JSON.parse(await readFile(new URL('./fixtures/regenerated-covers.json', import.meta.url), 'utf8'));
const originalCovers = JSON.parse(await readFile(new URL('./fixtures/original-covers.json', import.meta.url), 'utf8'));
const reviewedCovers = { ...regeneratedCovers, ...originalCovers };
const { coverSubjects } = await importCompiledModule('../node_modules/.tmp/carousel-test/data/cover-subjects.js');

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
  assert.match(appSource, /src=\{item.media.image/);
  assert.doesNotMatch(appSource, /heroArt|hero-desktop|hero-mobile/);
});

test('hero separates foreground from backdrop and never scales during crossfade', () => {
  assert.match(stylesSource, /\.hero__image \{[^}]*object-fit: contain;/);
  assert.match(stylesSource, /\.hero__backdrop \{[^}]*background-size: cover;[^}]*filter: blur/);
  assert.match(appSource, /fitHeroSubject\(subject, size.width, size.height\)/);
  assert.match(appSource, /backgroundImage: `url\("\$\{item.media.image\}"\)`/);
  for (const name of ['hero-enter', 'hero-enter-forward', 'hero-leave-forward', 'hero-enter-backward', 'hero-leave-backward']) {
    const animation = stylesSource.slice(stylesSource.indexOf(`@keyframes ${name} {`)).split('\n  }')[0];
    assert.doesNotMatch(animation, /transform|translate|scale/);
    assert.match(animation, /opacity:/);
  }
  const mobile = stylesSource.slice(stylesSource.indexOf('@media (max-width: 760px)'));
  assert.match(mobile, /\.hero-carousel__visual \{[^}]*grid-row: 1;/);
  assert.match(mobile, /\.hero__content \{[^}]*grid-row: 2;/);
  assert.match(mobile, /\.hero__image--fitted \{[^}]*inset: 24px;[^}]*object-fit: contain;/);
  assert.deepEqual(Object.keys(coverSubjects).sort(), species.map((item) => item.slug).sort());
  assert.deepEqual(Object.keys(coverSubjects).sort(), Object.keys(reviewedCovers).sort());
});

test('new animal covers retain a complete right-side source silhouette', () => {
  for (const slug of ['olm', 'spotted-salamander', 'wallaces-flying-frog', 'surinam-horned-frog', 'desert-rain-frog', 'african-bullfrog', 'riobamba-marsupial-frog', 'armadillo-girdled-lizard', 'emerald-tree-boa', 'tentacled-snake', 'diamondback-terrapin', 'eastern-long-necked-turtle', 'common-tailorbird', 'red-eyed-crocodile-skink', 'green-anole', 'eastern-blue-tongued-skink', 'shingleback', 'long-tailed-widowbird', 'andean-cock-of-the-rock', 'red-billed-streamertail', 'rainbow-lorikeet', 'kea', 'black-skimmer', 'great-crested-grebe', 'victoria-crowned-pigeon', 'lilac-breasted-roller', 'northern-carmine-bee-eater', 'great-tit', 'long-tailed-tit', 'eurasian-nuthatch', 'northern-lapwing', 'eurasian-oystercatcher', 'rock-hyrax', 'markhor', 'hooded-seal', 'common-blackbird', 'spotted-dove', 'long-eared-jerboa', 'hazel-dormouse', 'north-american-porcupine', 'black-tailed-prairie-dog', 'crested-porcupine', 'southern-tamandua', 'giant-armadillo', 'silky-anteater', 'lowland-streaked-tenrec', 'short-eared-sengi', 'spotted-linsang', 'eastern-spotted-skunk', 'pallas-cat', 'sand-cat', 'hoffmanns-two-toed-sloth', 'kinkajou', 'bat-eared-fox', 'eurasian-tree-sparrow', 'light-vented-bulbul', 'crested-gecko', 'vietnamese-mossy-frog', 'longhorn-cowfish', 'old-world-swallowtail', 'giant-pacific-octopus', 'brown-hydra', 'european-plaice', 'whirligig-beetle', 'peacock-spider', 'goose-barnacle', 'tadpole-shrimp', 'sugar-glider', 'indian-flying-fox', 'moose', 'tropical-two-wing-flyingfish', 'sharksucker', 'greater-pipefish', 'giant-golden-orb-weaver', 'japanese-spider-crab', 'rosy-sea-biscuit', 'snake-sea-cucumber', 'south-african-springhare', 'gerenuk', 'common-basilisk', 'brahminy-blind-snake', 'giant-frogfish', 'mandarinfish', 'great-diving-beetle', 'european-earwig', 'scarlet-cleaner-shrimp', 'king-ragworm', 'muskox', 'dromedary', 'magnificent-bird-of-paradise', 'north-island-brown-kiwi', 'common-flying-dragon', 'common-thresher-shark', 'sacred-scarab', 'common-pond-skater', 'christmas-tree-worm', 'bath-sponge', 'matschies-tree-kangaroo', 'cape-porcupine', 'greater-roadrunner', 'sunbittern', 'yellow-lipped-sea-krait', 'flying-gurnard', 'chinese-trumpetfish', 'violet-carpenter-bee', 'common-hermit-crab', 'pacific-sea-nettle', 'numbat', 'burrowing-owl', 'satanic-leaf-tailed-gecko', 'red-lionfish', 'red-mason-bee', 'golden-lion-tamarin', 'tasmanian-devil', 'village-weaver', 'satin-bowerbird', 'amazon-mata-mata', 'three-toed-amphiuma', 'giant-manta-ray', 'hummingbird-hawk-moth', 'bigfin-reef-squid', 'greater-argonaut', 'mantled-guereza', 'wattled-jacana', 'fleischmanns-glass-frog', 'spiny-leaf-insect', 'willans-chromodoris', 'lar-gibbon', 'magnificent-frigatebird', 'sandfish-skink', 'great-hammerhead', 'atlas-moth', 'proboscis-monkey', 'mandrill', 'great-white-pelican', 'blue-footed-booby', 'tokay-gecko', 'alpine-newt', 'long-spined-porcupinefish', 'glasswing-butterfly', 'leopard-slug', 'orange-sea-pen', 'binturong', 'fossa', 'black-winged-stilt', 'pied-avocet', 'pancake-tortoise', 'common-midwife-toad', 'yellow-boxfish', 'orchid-mantis', 'blue-mussel', 'beadlet-anemone', 'giant-anteater', 'maned-wolf', 'secretary-bird', 'eurasian-spoonbill', 'pig-nosed-turtle', 'tomato-frog', 'spotted-garden-eel', 'indian-stick-insect', 'california-sea-hare', 'great-scallop', 'zebrafish', 'neon-tetra', 'blue-green-chromis', 'chinese-windmill', 'hercules-beetle', 'african-clawed-frog', 'basking-shark', 'zebra-shark', 'blue-shark', 'rainbow-trout', 'panther-chameleon', 'common-frog', 'european-tree-frog', 'strawberry-poison-frog', 'dyeing-poison-frog', 'sulcata-tortoise', 'hermanns-tortoise', 'hawksbill-turtle', 'loggerhead-turtle', 'ball-python', 'saltwater-crocodile', 'spectacled-caiman', 'common-snapping-turtle', 'alligator-snapping-turtle', 'leopard-tortoise', 'blue-tit', 'zebra-finch', 'bald-eagle', 'black-swan', 'american-alligator', 'laughing-kookaburra', 'european-bee-eater', 'toucan-barbet', 'common-raven', 'european-robin', 'chimpanzee', 'bornean-orangutan', 'cockatiel', 'mute-swan', 'indian-peafowl', 'sulphur-crested-cockatoo', 'eurasian-hoopoe', 'southern-cassowary', 'eurasian-eagle-owl', 'white-stork', 'pond-slider', 'leopard-gecko', 'frilled-lizard', 'corn-snake', 'whites-tree-frog', 'oriental-fire-bellied-newt', 'ocean-sunfish', 'largetooth-sawfish', 'menelaus-blue-morpho', 'european-stag-beetle', 'american-lobster', 'giant-peacock-moth', 'striped-skunk', 'caracal', 'leopard', 'chinese-tree-frog', 'american-bullfrog', 'atlantic-salmon', 'green-tree-python', 'arctic-fox', 'american-black-bear', 'sun-bear', 'jaguar', 'puma', 'serval', 'eurasian-lynx', 'gray-wolf', 'african-wild-dog', 'spotted-hyena', 'honey-badger', 'wolverine', 'european-badger', 'south-american-coati', 'sperm-whale', 'pygmy-hippopotamus', 'black-rhinoceros', 'king-penguin', 'adelie-penguin', 'gentoo-penguin', 'african-penguin']) {
    const { width, height, bounds } = reviewedCovers[slug].cover;
    assert.ok(bounds.left >= width * .4, `${slug}: quiet left side`);
    assert.ok((bounds.left + bounds.right) / 2 >= width * .6, `${slug}: right-side center`);
    assert.ok(bounds.top > 0 && bounds.bottom < height && bounds.right < width, `${slug}: real source margin`);
  }
});

for (const [slug, { cover }] of Object.entries(reviewedCovers)) {
  test(`${slug}: entire subject stays inside desktop and mobile panels with 24px clearance`, () => {
    assert.deepEqual(coverSubjects[slug], { width: cover.width, height: cover.height, bounds: cover.bounds });
    for (const [viewportWidth, viewportHeight] of [[320, 760], [390, 760], [761, 760], [900, 760], [1100, 768], [1366, 768], [1920, 900], [2560, 900], [3840, 900]]) {
      // Panel dimensions follow the grid, padding, gap and minimum height in styles.css.
      const mobile = viewportWidth <= 760;
      const width = mobile ? viewportWidth : (viewportWidth - 2 * Math.max(24, (viewportWidth - 1600) / 2) - Math.min(80, Math.max(24, viewportWidth * .04))) * 1.15 / 2;
      const height = mobile ? Math.min(500, Math.max(260, viewportWidth * .75)) : Math.min(680, Math.max(440, viewportHeight * .65));
      const fit = fitHeroSubject(coverSubjects[slug], width, height);
      const scale = mobile ? Math.min((width - 48) / cover.width, (height - 48) / cover.height) : fit.width / cover.width;
      const left = mobile ? (width - cover.width * scale) / 2 : fit.left;
      const top = mobile ? (height - cover.height * scale) / 2 : fit.top;
      const { bounds } = cover;
      const edges = { left: left + bounds.left * scale, right: left + bounds.right * scale, top: top + bounds.top * scale, bottom: top + bounds.bottom * scale };
      assert.ok(edges.left >= 24 - 1e-6, `${slug} left at ${viewportWidth}`);
      assert.ok(edges.top >= 24 - 1e-6, `${slug} top at ${viewportWidth}`);
      assert.ok(edges.right <= width - 24 + 1e-6, `${slug} right at ${viewportWidth}`);
      assert.ok(edges.bottom <= height - 24 + 1e-6, `${slug} bottom at ${viewportWidth}`);
      if (!mobile) {
        assert.ok(Math.abs((bounds.right - bounds.left) * scale - (width - 48)) < 1e-6 || Math.abs((bounds.bottom - bounds.top) * scale - (height - 48)) < 1e-6, 'maximize subject within the available panel');
      }
    }
  });
}


test('subject dimensions match actual runtime WebP dimensions', () => {
  const paths = species.map((item) => fileURLToPath(new URL(`../public/${item.media.image.slice(2)}`, import.meta.url)));
  const dimensions = execFileSync('magick', ['identify', '-ping', '-format', '%w %h\n', ...paths], { encoding: 'utf8' }).trim().split('\n');
  assert.equal(dimensions.length, species.length);
  species.forEach((item, index) => {
    const subject = coverSubjects[item.slug];
    assert.equal(dimensions[index], `${subject.width} ${subject.height}`, `${item.slug}: decoded dimensions must match the fit metadata`);
  });
});
