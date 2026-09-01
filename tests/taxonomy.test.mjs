import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

async function importCompiledModule(relativePath) {
  const fileUrl = new URL(relativePath, import.meta.url);
  const code = await readFile(fileUrl, 'utf8');
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`;

  return import(moduleUrl);
}

const [speciesModule, taxonomyModule, taxonomyOverviewModule] = await Promise.all([
  importCompiledModule('../node_modules/.tmp/taxonomy-test/data/species.js'),
  importCompiledModule('../node_modules/.tmp/taxonomy-test/domain/taxonomy.js'),
  importCompiledModule('../node_modules/.tmp/taxonomy-test/domain/taxonomy-overview.js'),
]);
const { species } = speciesModule;
const {
  TAXONOMY_RANKS,
  TaxonomyConflictError,
  buildTaxonomyTree,
  getSpeciesTaxonomyPath,
} = taxonomyModule;
const { projectTaxonomyOverview, toggleOverviewTaxon } = taxonomyOverviewModule;

function flatten(nodes) {
  return nodes.flatMap((node) => [node, ...flatten(node.children)]);
}

function findTaxon(nodes, rank, scientificName) {
  return flatten(nodes).find(
    (node) =>
      node.kind === 'taxon' &&
      node.rank === rank &&
      node.taxon.scientificName === scientificName,
  );
}

function findSpecies(slug) {
  const profile = species.find((item) => item.slug === slug);
  assert.ok(profile, `catalogue should contain ${slug}`);
  return profile;
}

function countCatalogueDescendants(node) {
  return species.filter((profile) =>
    getSpeciesTaxonomyPath(profile).some(({ key }) => key === node.key),
  ).length;
}

function withTaxon(profile, rank, taxon) {
  return {
    ...profile,
    taxonomy: {
      ...profile.taxonomy,
      [rank]: taxon,
    },
  };
}

async function assertGeneratedImageSet({
  profile,
  slug,
  basenames,
  credit = 'Fauna Atlas · AI 生成科学情景重建',
  verifyAcceptedHashes = false,
}) {
  assert.equal(basenames.length, 6);
  assert.equal(profile.media.gallery?.length, 5);

  const gallery = profile.media.gallery ?? [];
  const mediaRecords = [profile.media, ...gallery];
  const mediaPaths = mediaRecords.map(({ image }) => image);
  assert.deepEqual(
    mediaPaths,
    basenames.map((basename) => `./images/species/${slug}/${basename}.webp`),
  );
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint, credit: mediaCredit }) =>
        mediaCredit === credit &&
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );

  const runtimeUrls = basenames.map(
    (basename) =>
      new URL(
        `../public/images/species/${slug}/${basename}.webp`,
        import.meta.url,
      ),
  );
  const sourceUrls = basenames.map(
    (basename) =>
      new URL(
        `../src/assets/source/species/${slug}/${basename}-source.png`,
        import.meta.url,
      ),
  );
  const imageFiles = [
    ...runtimeUrls.map((url) => ({ format: 'WEBP', url })),
    ...sourceUrls.map((url) => ({ format: 'PNG', url })),
  ];

  await Promise.all(imageFiles.map(({ url }) => access(url)));
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%n',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, frameCount] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque, frameCount },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
          frameCount: '1',
        },
      );
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );

  const imageHashes = await Promise.all(
    imageFiles.map(async ({ url }) =>
      createHash('sha256').update(await readFile(url)).digest('hex'),
    ),
  );
  assert.equal(new Set(imageHashes).size, 12);

  if (verifyAcceptedHashes) {
    const readme = await readFile(
      new URL(`../src/assets/source/species/${slug}/README.md`, import.meta.url),
      'utf8',
    );
    const acceptedHashRows = [...readme.matchAll(
      /^\|\s+\d{2}\s+\|\s+`([a-f0-9]{64})`\s+\|\s+`([a-f0-9]{64})`\s+\|$/gm,
    )].map(([, sourceHash, runtimeHash]) => [sourceHash, runtimeHash]);
    const runtimeHashes = imageHashes.slice(0, basenames.length);
    const sourceHashes = imageHashes.slice(basenames.length);
    assert.deepEqual(
      acceptedHashRows,
      basenames.map((_, index) => [sourceHashes[index], runtimeHashes[index]]),
      `${slug} README accepted hashes should match the current image files`,
    );
  }
}

test('builds one uniquely keyed taxonomy leaf for every catalogue profile', () => {
  const tree = buildTaxonomyTree(species);
  const nodes = flatten(tree);
  const taxonNodes = nodes.filter((node) => node.kind === 'taxon');
  const speciesNodes = nodes.filter((node) => node.kind === 'species');
  const catalogueTaxonKeys = new Set(
    species.flatMap((profile) =>
      getSpeciesTaxonomyPath(profile).map(({ key }) => key),
    ),
  );

  assert.equal(taxonNodes.length, catalogueTaxonKeys.size);
  assert.equal(speciesNodes.length, species.length);
  assert.equal(nodes.length, catalogueTaxonKeys.size + species.length);
  assert.equal(
    new Set(nodes.map((node) => node.key)).size,
    nodes.length,
    'every node key is unique',
  );

  const leafIds = speciesNodes.map((node) => node.species.id).sort();
  const catalogueIds = species.map((profile) => profile.id).sort();
  assert.deepEqual(leafIds, catalogueIds, 'each species profile occurs in exactly one leaf');
});

test('keeps every catalogue association unique and attached to its named genus', () => {
  assert.equal(new Set(species.map((profile) => profile.id)).size, species.length);
  assert.equal(new Set(species.map((profile) => profile.slug)).size, species.length);
  assert.equal(new Set(species.map((profile) => profile.scientificName)).size, species.length);

  for (const profile of species) {
    const path = getSpeciesTaxonomyPath(profile);
    const genus = path.at(-1)?.taxon.scientificName;
    assert.equal(
      profile.scientificName.split(' ')[0],
      genus,
      `${profile.scientificName} should be attached to its named genus`,
    );
  }
});

test('omits assessment years only for not-evaluated profiles', () => {
  for (const profile of species) {
    if (profile.conservation.code === 'NE') {
      assert.equal(profile.conservation.assessedYear, undefined);
    } else {
      assert.ok(
        Number.isInteger(profile.conservation.assessedYear),
        `${profile.slug} should retain its IUCN assessment year`,
      );
    }
  }
});

test('registers the Eurasian otter as a complete Lutra lutra profile', () => {
  const otter = findSpecies('eurasian-otter');

  assert.equal(otter.id, 'species-lutra-lutra');
  assert.equal(otter.names.zh, '水獭');
  assert.equal(otter.scientificName, 'Lutra lutra');
  assert.equal(otter.taxonomy.family.scientificName, 'Mustelidae');
  assert.equal(otter.taxonomy.genus.scientificName, 'Lutra');
  assert.deepEqual(
    {
      code: otter.conservation.code,
      trend: otter.conservation.trend,
      assessedYear: otter.conservation.assessedYear,
      criteria: otter.conservation.criteria,
    },
    { code: 'NT', trend: 'decreasing', assessedYear: 2020, criteria: 'A2c' },
  );
  assert.deepEqual(otter.distribution.realms, ['freshwater', 'terrestrial', 'marine']);
  assert.equal(otter.storySections?.length, 6);
  assert.equal(otter.media.gallery?.length, 5);
});

test('registers the platypus as a complete Ornithorhynchus anatinus profile', () => {
  const platypus = findSpecies('platypus');

  assert.equal(platypus.id, 'species-ornithorhynchus-anatinus');
  assert.equal(platypus.names.zh, '鸭嘴兽');
  assert.equal(platypus.scientificName, 'Ornithorhynchus anatinus');
  assert.equal(platypus.taxonomy.order.scientificName, 'Monotremata');
  assert.equal(platypus.taxonomy.family.scientificName, 'Ornithorhynchidae');
  assert.equal(platypus.taxonomy.genus.scientificName, 'Ornithorhynchus');
  assert.deepEqual(
    {
      code: platypus.conservation.code,
      trend: platypus.conservation.trend,
      assessedYear: platypus.conservation.assessedYear,
      criteria: platypus.conservation.criteria,
    },
    { code: 'NT', trend: 'decreasing', assessedYear: 2014, criteria: undefined },
  );
  assert.deepEqual(platypus.distribution.realms, ['freshwater', 'terrestrial']);
  assert.equal(platypus.storySections?.length, 6);
  assert.equal(platypus.media.gallery?.length, 5);
});

test('registers the Western gorilla as a complete Gorilla gorilla profile', () => {
  const gorilla = findSpecies('western-gorilla');

  assert.equal(gorilla.id, 'species-gorilla-gorilla');
  assert.equal(gorilla.names.zh, '大猩猩');
  assert.equal(gorilla.scientificName, 'Gorilla gorilla');
  assert.equal(gorilla.taxonomy.order.scientificName, 'Primates');
  assert.equal(gorilla.taxonomy.family.scientificName, 'Hominidae');
  assert.equal(gorilla.taxonomy.genus.scientificName, 'Gorilla');
  assert.deepEqual(
    {
      code: gorilla.conservation.code,
      trend: gorilla.conservation.trend,
      assessedYear: gorilla.conservation.assessedYear,
      criteria: gorilla.conservation.criteria,
    },
    { code: 'CR', trend: 'decreasing', assessedYear: 2016, criteria: 'A4bcde' },
  );
  assert.deepEqual(gorilla.distribution.realms, ['terrestrial']);
  assert.equal(gorilla.storySections?.length, 6);
  assert.equal(gorilla.media.gallery?.length, 5);
});

test('registers the polar bear as a complete Ursus maritimus profile', () => {
  const polarBear = findSpecies('polar-bear');

  assert.equal(polarBear.id, 'species-ursus-maritimus');
  assert.equal(polarBear.names.zh, '北极熊');
  assert.equal(polarBear.names.en, 'Polar Bear');
  assert.equal(polarBear.scientificName, 'Ursus maritimus');
  assert.equal(polarBear.taxonomy.order.scientificName, 'Carnivora');
  assert.equal(polarBear.taxonomy.family.scientificName, 'Ursidae');
  assert.equal(polarBear.taxonomy.genus.scientificName, 'Ursus');
  assert.deepEqual(
    {
      code: polarBear.conservation.code,
      trend: polarBear.conservation.trend,
      assessedYear: polarBear.conservation.assessedYear,
      criteria: polarBear.conservation.criteria,
    },
    { code: 'VU', trend: 'unknown', assessedYear: 2015, criteria: 'A3c' },
  );
  assert.deepEqual(polarBear.distribution.realms, ['marine', 'terrestrial']);
  assert.equal(polarBear.storySections?.length, 6);
  assert.equal(polarBear.media.gallery?.length, 5);
});

test('registers the red kangaroo as a complete Osphranter rufus profile', () => {
  const redKangaroo = findSpecies('red-kangaroo');

  assert.equal(redKangaroo.id, 'species-osphranter-rufus');
  assert.equal(redKangaroo.names.zh, '红袋鼠');
  assert.equal(redKangaroo.names.en, 'Red Kangaroo');
  assert.ok(redKangaroo.names.aliases.includes('Macropus rufus'));
  assert.equal(redKangaroo.scientificName, 'Osphranter rufus');
  assert.equal(redKangaroo.taxonomy.order.scientificName, 'Diprotodontia');
  assert.equal(redKangaroo.taxonomy.family.scientificName, 'Macropodidae');
  assert.equal(redKangaroo.taxonomy.genus.scientificName, 'Osphranter');
  assert.deepEqual(
    {
      code: redKangaroo.conservation.code,
      trend: redKangaroo.conservation.trend,
      assessedYear: redKangaroo.conservation.assessedYear,
      criteria: redKangaroo.conservation.criteria,
    },
    { code: 'LC', trend: 'stable', assessedYear: 2015, criteria: undefined },
  );
  assert.deepEqual(redKangaroo.distribution.realms, ['terrestrial']);
  assert.equal(redKangaroo.storySections?.length, 6);
  assert.equal(redKangaroo.media.gallery?.length, 5);
});

test('registers the common bottlenose dolphin as a complete Tursiops truncatus profile', () => {
  const bottlenoseDolphin = findSpecies('common-bottlenose-dolphin');

  assert.equal(bottlenoseDolphin.id, 'species-tursiops-truncatus');
  assert.equal(bottlenoseDolphin.names.zh, '宽吻海豚');
  assert.equal(bottlenoseDolphin.names.en, 'Common Bottlenose Dolphin');
  assert.ok(bottlenoseDolphin.names.aliases.includes('Bottlenose Dolphin'));
  assert.equal(bottlenoseDolphin.scientificName, 'Tursiops truncatus');
  assert.equal(bottlenoseDolphin.taxonomy.order.scientificName, 'Cetacea');
  assert.equal(bottlenoseDolphin.taxonomy.family.scientificName, 'Delphinidae');
  assert.equal(bottlenoseDolphin.taxonomy.genus.scientificName, 'Tursiops');
  assert.deepEqual(
    {
      code: bottlenoseDolphin.conservation.code,
      trend: bottlenoseDolphin.conservation.trend,
      assessedYear: bottlenoseDolphin.conservation.assessedYear,
      criteria: bottlenoseDolphin.conservation.criteria,
    },
    { code: 'LC', trend: 'unknown', assessedYear: 2018, criteria: undefined },
  );
  assert.deepEqual(bottlenoseDolphin.distribution.realms, ['marine']);
  assert.equal(bottlenoseDolphin.storySections?.length, 6);
  assert.equal(bottlenoseDolphin.media.gallery?.length, 5);
});

test('registers the Snowy Albatross as a complete Diomedea exulans profile', () => {
  const wanderingAlbatross = findSpecies('wandering-albatross');

  assert.equal(wanderingAlbatross.id, 'species-diomedea-exulans');
  assert.equal(wanderingAlbatross.names.zh, '漂泊信天翁');
  assert.equal(wanderingAlbatross.names.en, 'Snowy Albatross');
  assert.ok(wanderingAlbatross.names.aliases.includes('Wandering Albatross'));
  assert.equal(wanderingAlbatross.scientificName, 'Diomedea exulans');
  assert.equal(wanderingAlbatross.taxonomy.order.scientificName, 'Procellariiformes');
  assert.equal(wanderingAlbatross.taxonomy.family.scientificName, 'Diomedeidae');
  assert.equal(wanderingAlbatross.taxonomy.genus.scientificName, 'Diomedea');
  assert.deepEqual(
    {
      code: wanderingAlbatross.conservation.code,
      trend: wanderingAlbatross.conservation.trend,
      assessedYear: wanderingAlbatross.conservation.assessedYear,
      criteria: wanderingAlbatross.conservation.criteria,
    },
    { code: 'VU', trend: 'decreasing', assessedYear: 2018, criteria: 'A4bd' },
  );
  assert.deepEqual(wanderingAlbatross.distribution.realms, ['marine', 'terrestrial']);
  assert.equal(wanderingAlbatross.storySections?.length, 6);
  assert.equal(wanderingAlbatross.media.gallery?.length, 5);
});

test('registers the Ruby-throated Hummingbird as a complete Archilochus colubris profile', () => {
  const hummingbird = findSpecies('ruby-throated-hummingbird');

  assert.equal(hummingbird.id, 'species-archilochus-colubris');
  assert.equal(hummingbird.names.zh, '红喉北蜂鸟');
  assert.equal(hummingbird.names.en, 'Ruby-throated Hummingbird');
  assert.equal(hummingbird.scientificName, 'Archilochus colubris');
  assert.equal(hummingbird.taxonomy.order.scientificName, 'Apodiformes');
  assert.equal(hummingbird.taxonomy.family.scientificName, 'Trochilidae');
  assert.equal(hummingbird.taxonomy.genus.scientificName, 'Archilochus');
  assert.deepEqual(
    {
      code: hummingbird.conservation.code,
      trend: hummingbird.conservation.trend,
      assessedYear: hummingbird.conservation.assessedYear,
      criteria: hummingbird.conservation.criteria,
    },
    { code: 'LC', trend: 'increasing', assessedYear: 2020, criteria: undefined },
  );
  assert.deepEqual(hummingbird.distribution.realms, ['terrestrial']);
  assert.equal(hummingbird.storySections?.length, 6);
  assert.equal(hummingbird.media.gallery?.length, 5);
});

test('registers the Green Turtle as a complete Chelonia mydas profile', () => {
  const greenTurtle = findSpecies('green-sea-turtle');

  assert.equal(greenTurtle.id, 'species-chelonia-mydas');
  assert.equal(greenTurtle.names.zh, '绿海龟');
  assert.equal(greenTurtle.names.en, 'Green Turtle');
  assert.deepEqual(greenTurtle.names.aliases, ['绿蠵龟', '青海龟']);
  assert.equal(greenTurtle.scientificName, 'Chelonia mydas');
  assert.equal(greenTurtle.taxonomy.class.scientificName, 'Reptilia');
  assert.equal(greenTurtle.taxonomy.order.scientificName, 'Testudines');
  assert.equal(greenTurtle.taxonomy.family.scientificName, 'Cheloniidae');
  assert.equal(greenTurtle.taxonomy.genus.scientificName, 'Chelonia');
  assert.deepEqual(
    {
      code: greenTurtle.conservation.code,
      trend: greenTurtle.conservation.trend,
      assessedYear: greenTurtle.conservation.assessedYear,
      criteria: greenTurtle.conservation.criteria,
    },
    { code: 'LC', trend: 'increasing', assessedYear: 2025, criteria: undefined },
  );
  assert.deepEqual(greenTurtle.distribution.realms, ['marine', 'terrestrial']);
  assert.deepEqual(greenTurtle.metrics, {
    adultLengthCm: [91, 122],
    adultMassKg: [113, 181],
  });
  assert.equal(greenTurtle.storySections?.length, 6);
  assert.equal(greenTurtle.featuredStats.length, 4);
  assert.equal(greenTurtle.media.gallery?.length, 5);
  assert.deepEqual(
    [greenTurtle.media.image, ...greenTurtle.media.gallery.map(({ image }) => image)],
    [
      './images/species/green-sea-turtle/01-seagrass-meadow-grazing.webp',
      './images/species/green-sea-turtle/02-serrated-beak-grazing.webp',
      './images/species/green-sea-turtle/03-pelagic-juvenile-sargassum.webp',
      './images/species/green-sea-turtle/04-ocean-migration-surface-breath.webp',
      './images/species/green-sea-turtle/05-night-nest-covering.webp',
      './images/species/green-sea-turtle/06-dark-beach-hatchling-monitoring.webp',
    ],
  );
  assert.ok(greenTurtle.sources.length > 0);
  assert.ok(greenTurtle.sources.every(({ accessedAt }) => accessedAt === '2026-08-21'));
  assert.equal(greenTurtle.publishedAt, '2026-08-21');
  assert.equal(greenTurtle.updatedAt, '2026-08-21');
});

test('registers the Reticulated Python as a complete Malayopython reticulatus profile', () => {
  const reticulatedPython = findSpecies('reticulated-python');

  assert.equal(reticulatedPython.id, 'species-malayopython-reticulatus');
  assert.equal(reticulatedPython.names.zh, '网纹蟒');
  assert.equal(reticulatedPython.names.en, 'Reticulated Python');
  assert.deepEqual(reticulatedPython.names.aliases, [
    'Python reticulatus',
    'Broghammerus reticulatus',
  ]);
  assert.equal(reticulatedPython.scientificName, 'Malayopython reticulatus');
  assert.equal(reticulatedPython.taxonomy.class.scientificName, 'Reptilia');
  assert.equal(reticulatedPython.taxonomy.order.scientificName, 'Squamata');
  assert.equal(reticulatedPython.taxonomy.family.scientificName, 'Pythonidae');
  assert.equal(reticulatedPython.taxonomy.genus.scientificName, 'Malayopython');
  assert.deepEqual(
    {
      code: reticulatedPython.conservation.code,
      trend: reticulatedPython.conservation.trend,
      assessedYear: reticulatedPython.conservation.assessedYear,
      criteria: reticulatedPython.conservation.criteria,
    },
    { code: 'LC', trend: 'unknown', assessedYear: 2011, criteria: undefined },
  );
  assert.deepEqual(reticulatedPython.distribution.realms, ['terrestrial', 'freshwater']);
  assert.deepEqual(reticulatedPython.measurements, {});
  assert.deepEqual(reticulatedPython.metrics, {});
  assert.equal(reticulatedPython.storySections?.length, 6);
  assert.equal(reticulatedPython.featuredStats.length, 4);
  assert.equal(reticulatedPython.media.gallery?.length, 5);
  assert.deepEqual(
    [reticulatedPython.media.image, ...reticulatedPython.media.gallery.map(({ image }) => image)],
    [
      './images/species/reticulated-python/01-rainforest-riverbank-portrait.webp',
      './images/species/reticulated-python/02-net-pattern-and-labial-pits.webp',
      './images/species/reticulated-python/03-arboreal-juvenile.webp',
      './images/species/reticulated-python/04-plantation-edge-rat-ambush.webp',
      './images/species/reticulated-python/05-female-coiled-around-eggs.webp',
      './images/species/reticulated-python/06-nocturnal-riverside-survey.webp',
    ],
  );
  assert.ok(reticulatedPython.sources.length > 0);
  assert.ok(reticulatedPython.sources.every(({ accessedAt }) => accessedAt === '2026-08-21'));
  assert.equal(reticulatedPython.publishedAt, '2026-08-21');
  assert.equal(reticulatedPython.updatedAt, '2026-08-21');
});

test('registers the Chinese Giant Salamander as a complete Andrias davidianus profile', () => {
  const giantSalamander = findSpecies('chinese-giant-salamander');

  assert.equal(giantSalamander.id, 'species-andrias-davidianus');
  assert.equal(giantSalamander.names.zh, '中国大鲵');
  assert.equal(giantSalamander.names.en, 'Chinese Giant Salamander');
  assert.deepEqual(giantSalamander.names.aliases, [
    '大鲵',
    '娃娃鱼',
    'Sieboldia davidiana',
  ]);
  assert.equal(giantSalamander.scientificName, 'Andrias davidianus');
  assert.deepEqual(
    getSpeciesTaxonomyPath(giantSalamander).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Amphibia'],
      ['order', 'Caudata'],
      ['family', 'Cryptobranchidae'],
      ['genus', 'Andrias'],
    ],
  );
  assert.deepEqual(
    {
      code: giantSalamander.conservation.code,
      trend: giantSalamander.conservation.trend,
      assessedYear: giantSalamander.conservation.assessedYear,
      criteria: giantSalamander.conservation.criteria,
    },
    { code: 'CR', trend: 'decreasing', assessedYear: 2020, criteria: 'A2acde' },
  );
  assert.deepEqual(giantSalamander.distribution.realms, ['freshwater']);
  assert.deepEqual(giantSalamander.measurements, {});
  assert.deepEqual(giantSalamander.metrics, {});
  assert.equal(giantSalamander.storySections?.length, 6);
  assert.equal(giantSalamander.featuredStats.length, 4);
  assert.equal(giantSalamander.media.gallery?.length, 5);
  assert.deepEqual(
    [giantSalamander.media.image, ...giantSalamander.media.gallery.map(({ image }) => image)],
    [
      './images/species/chinese-giant-salamander/01-rocky-stream-portrait.webp',
      './images/species/chinese-giant-salamander/02-flattened-head-and-skin-folds.webp',
      './images/species/chinese-giant-salamander/03-forest-stream-habitat.webp',
      './images/species/chinese-giant-salamander/04-nocturnal-crab-encounter.webp',
      './images/species/chinese-giant-salamander/05-den-master-egg-guarding.webp',
      './images/species/chinese-giant-salamander/06-edna-water-sampling.webp',
    ],
  );
  assert.equal(giantSalamander.sources.length, 18);
  assert.ok(giantSalamander.sources.every(({ accessedAt }) => accessedAt === '2026-08-21'));
  assert.equal(giantSalamander.publishedAt, '2026-08-21');
  assert.equal(giantSalamander.updatedAt, '2026-08-21');
});

test('registers the Monarch Butterfly as a complete Danaus plexippus profile', () => {
  const monarch = findSpecies('monarch-butterfly');

  assert.equal(monarch.id, 'species-danaus-plexippus');
  assert.equal(monarch.names.zh, '帝王蝶');
  assert.equal(monarch.names.en, 'Monarch Butterfly');
  assert.deepEqual(monarch.names.aliases, [
    '君主斑蝶',
    '黑脉金斑蝶',
    'Monarch',
    'Papilio plexippus',
  ]);
  assert.equal(monarch.scientificName, 'Danaus plexippus');
  assert.deepEqual(
    getSpeciesTaxonomyPath(monarch).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Arthropoda'],
      ['class', 'Insecta'],
      ['order', 'Lepidoptera'],
      ['family', 'Nymphalidae'],
      ['genus', 'Danaus'],
    ],
  );
  assert.deepEqual(
    {
      code: monarch.conservation.code,
      trend: monarch.conservation.trend,
      assessedYear: monarch.conservation.assessedYear,
      criteria: monarch.conservation.criteria,
    },
    { code: 'LC', trend: 'unknown', assessedYear: 2021, criteria: undefined },
  );
  assert.deepEqual(monarch.distribution.realms, ['terrestrial']);
  assert.deepEqual(monarch.measurements, {
    weight: {
      typical: 0.5,
      unit: 'g',
      note: 'USFWS 概括的成虫平均体重；随进食、脱水、迁飞和生命阶段起伏',
    },
    wingspan: {
      min: 93,
      max: 105,
      unit: 'mm',
      note: 'COSEWIC 成虫翼展；USFWS 公众资料以更粗粒度概括为约 7—10 厘米',
    },
  });
  assert.deepEqual(monarch.metrics, { wingspanCm: [9.3, 10.5] });
  assert.equal(monarch.storySections?.length, 6);
  assert.equal(monarch.featuredStats.length, 4);
  assert.equal(monarch.media.gallery?.length, 5);
  assert.deepEqual(
    [monarch.media.image, ...monarch.media.gallery.map(({ image }) => image)],
    [
      './images/species/monarch-butterfly/01-female-milkweed-portrait.webp',
      './images/species/monarch-butterfly/02-diagnostic-male-wing-pattern.webp',
      './images/species/monarch-butterfly/03-milkweed-caterpillar-feeding.webp',
      './images/species/monarch-butterfly/04-jade-chrysalis.webp',
      './images/species/monarch-butterfly/05-great-lakes-autumn-migration.webp',
      './images/species/monarch-butterfly/06-oyamel-fir-overwintering.webp',
    ],
  );
  assert.equal(monarch.sources.length, 20);
  assert.ok(monarch.sources.every(({ accessedAt }) => accessedAt === '2026-08-21'));
  assert.equal(monarch.publishedAt, '2026-08-21');
  assert.equal(monarch.updatedAt, '2026-08-21');
});

test('registers the Moon Jellyfish as a complete Aurelia aurita profile', () => {
  const moonJelly = findSpecies('moon-jelly');

  assert.equal(moonJelly.id, 'species-aurelia-aurita');
  assert.equal(moonJelly.names.zh, '海月水母');
  assert.equal(moonJelly.names.en, 'Moon Jellyfish');
  assert.deepEqual(moonJelly.names.aliases, [
    'Common Jellyfish',
    'Saucer Jelly',
    'Medusa aurita',
  ]);
  assert.equal(moonJelly.scientificName, 'Aurelia aurita');
  assert.deepEqual(
    getSpeciesTaxonomyPath(moonJelly).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Cnidaria'],
      ['class', 'Scyphozoa'],
      ['order', 'Semaeostomeae'],
      ['family', 'Ulmaridae'],
      ['genus', 'Aurelia'],
    ],
  );
  assert.deepEqual(
    {
      code: moonJelly.conservation.code,
      trend: moonJelly.conservation.trend,
      assessedYear: moonJelly.conservation.assessedYear,
      criteria: moonJelly.conservation.criteria,
    },
    { code: 'NE', trend: 'unknown', assessedYear: undefined, criteria: undefined },
  );
  assert.deepEqual(moonJelly.distribution.realms, ['marine']);
  assert.deepEqual(moonJelly.measurements, {
    length: {
      min: 15,
      max: 30,
      unit: 'cm',
      note: '成体伞径的典型范围；较大个体可接近 40 厘米，个体、地点和季节差异明显，不是口腕全长',
    },
  });
  assert.deepEqual(moonJelly.metrics, {});
  assert.equal(moonJelly.storySections?.length, 6);
  assert.equal(moonJelly.featuredStats.length, 4);
  assert.equal(moonJelly.media.gallery?.length, 5);
  assert.deepEqual(
    [moonJelly.media.image, ...moonJelly.media.gallery.map(({ image }) => image)],
    [
      './images/species/moon-jelly/01-coastal-water-portrait.webp',
      './images/species/moon-jelly/02-four-horseshoe-gonads.webp',
      './images/species/moon-jelly/03-sheltered-bay-habitat.webp',
      './images/species/moon-jelly/04-plankton-capture-feeding.webp',
      './images/species/moon-jelly/05-strobila-ephyra-release.webp',
      './images/species/moon-jelly/06-coastal-bloom-monitoring.webp',
    ],
  );
  assert.equal(moonJelly.sources.length, 19);
  assert.ok(moonJelly.sources.every(({ accessedAt }) => accessedAt === '2026-08-21'));
  assert.equal(moonJelly.publishedAt, '2026-08-21');
  assert.equal(moonJelly.updatedAt, '2026-08-21');
});

test('registers the Bowed Fiddler Crab as a complete Tubuca arcuata profile', () => {
  const fiddlerCrab = findSpecies('bowed-fiddler-crab');

  assert.equal(fiddlerCrab.id, 'species-tubuca-arcuata');
  assert.equal(fiddlerCrab.names.zh, '弧边招潮蟹');
  assert.equal(fiddlerCrab.names.en, 'Bowed Fiddler Crab');
  assert.deepEqual(fiddlerCrab.names.aliases, [
    '弧边管招潮',
    '网纹招潮',
    '大栱仙',
    'Uca arcuata',
  ]);
  assert.equal(fiddlerCrab.scientificName, 'Tubuca arcuata');
  assert.deepEqual(
    getSpeciesTaxonomyPath(fiddlerCrab).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Arthropoda'],
      ['class', 'Malacostraca'],
      ['order', 'Decapoda'],
      ['family', 'Ocypodidae'],
      ['genus', 'Tubuca'],
    ],
  );
  assert.deepEqual(
    {
      code: fiddlerCrab.conservation.code,
      trend: fiddlerCrab.conservation.trend,
      assessedYear: fiddlerCrab.conservation.assessedYear,
      criteria: fiddlerCrab.conservation.criteria,
    },
    { code: 'NE', trend: 'unknown', assessedYear: undefined, criteria: undefined },
  );
  assert.deepEqual(fiddlerCrab.distribution.realms, ['marine', 'terrestrial']);
  assert.deepEqual(fiddlerCrab.measurements, {
    length: {
      typical: 30,
      max: 40.2,
      unit: 'mm',
      note: '量的是背甲宽；公众典型值约 30 毫米，已核实的分类凭证最宽 40.2 毫米',
    },
  });
  assert.deepEqual(fiddlerCrab.metrics, {});
  assert.equal(fiddlerCrab.storySections?.length, 6);
  assert.equal(fiddlerCrab.featuredStats.length, 4);
  assert.equal(fiddlerCrab.media.gallery?.length, 5);
  assert.deepEqual(
    [fiddlerCrab.media.image, ...fiddlerCrab.media.gallery.map(({ image }) => image)],
    [
      './images/species/bowed-fiddler-crab/01-mudflat-burrow-portrait.webp',
      './images/species/bowed-fiddler-crab/02-male-female-claw-dimorphism.webp',
      './images/species/bowed-fiddler-crab/03-estuarine-mudflat-habitat.webp',
      './images/species/bowed-fiddler-crab/04-female-sediment-feeding.webp',
      './images/species/bowed-fiddler-crab/05-vertical-claw-wave.webp',
      './images/species/bowed-fiddler-crab/06-burrow-habitat-monitoring.webp',
    ],
  );
  assert.equal(fiddlerCrab.sources.length, 19);
  assert.ok(fiddlerCrab.sources.every(({ accessedAt }) => accessedAt === '2026-08-21'));
  assert.equal(fiddlerCrab.featured, true);
  assert.equal(fiddlerCrab.publishedAt, '2026-08-21');
  assert.equal(fiddlerCrab.updatedAt, '2026-08-21');
});

test('registers the Chinese Pangolin as a complete Manis pentadactyla profile', () => {
  const pangolin = findSpecies('chinese-pangolin');

  assert.equal(pangolin.id, 'species-manis-pentadactyla');
  assert.equal(pangolin.names.zh, '中华穿山甲');
  assert.equal(pangolin.names.en, 'Chinese Pangolin');
  assert.deepEqual(pangolin.names.aliases, [
    '穿山甲',
    '中国穿山甲',
    '鲮鲤',
    'Short-tailed Pangolin',
  ]);
  assert.equal(pangolin.scientificName, 'Manis pentadactyla');
  assert.deepEqual(
    getSpeciesTaxonomyPath(pangolin).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Mammalia'],
      ['order', 'Pholidota'],
      ['family', 'Manidae'],
      ['genus', 'Manis'],
    ],
  );
  assert.equal(pangolin.taxonomy.family.zhName, '鲮鲤科');
  assert.deepEqual(
    {
      code: pangolin.conservation.code,
      trend: pangolin.conservation.trend,
      assessedYear: pangolin.conservation.assessedYear,
      criteria: pangolin.conservation.criteria,
    },
    { code: 'CR', trend: 'decreasing', assessedYear: 2019, criteria: 'A3d+4d' },
  );
  assert.deepEqual(pangolin.distribution.realms, ['terrestrial']);
  assert.deepEqual(pangolin.measurements, {
    length: {
      min: 44,
      max: 56,
      unit: 'cm',
      note: '台湾指名种群头体长；尾长另有 30—40 厘米，全长要两项相加',
    },
    weight: {
      typical: 4.65,
      unit: 'kg',
      note: '台湾指名种群成体平均 4.5—4.8 千克的展示中点；其他地区的数字仍待补充',
    },
  });
  assert.deepEqual(pangolin.metrics, {});
  assert.equal(pangolin.storySections?.length, 6);
  assert.equal(pangolin.featuredStats.length, 4);
  assert.equal(pangolin.media.gallery?.length, 5);
  assert.deepEqual(
    [pangolin.media.image, ...pangolin.media.gallery.map(({ image }) => image)],
    [
      './images/species/chinese-pangolin/01-forest-floor-portrait.webp',
      './images/species/chinese-pangolin/02-scale-and-claw-anatomy.webp',
      './images/species/chinese-pangolin/03-core-natural-habitat.webp',
      './images/species/chinese-pangolin/04-ant-foraging.webp',
      './images/species/chinese-pangolin/05-mother-and-single-pup.webp',
      './images/species/chinese-pangolin/06-burrow-camera-monitoring.webp',
    ],
  );
  assert.equal(pangolin.sources.length, 21);
  assert.equal(new Set(pangolin.sources.map(({ url }) => url)).size, 21);
  assert.ok(pangolin.sources.every(({ accessedAt }) => accessedAt === '2026-08-22'));
  assert.equal(pangolin.featured, true);
  assert.equal(pangolin.publishedAt, '2026-08-22');
  assert.equal(pangolin.updatedAt, '2026-08-22');
});

test('registers the Dugong as a complete Dugong dugon profile', () => {
  const dugong = findSpecies('dugong');

  assert.equal(dugong.id, 'species-dugong-dugon');
  assert.equal(dugong.names.zh, '儒艮');
  assert.equal(dugong.names.en, 'Dugong');
  assert.deepEqual(dugong.names.aliases, ['海牛', 'Sea Cow']);
  assert.equal(dugong.scientificName, 'Dugong dugon');
  assert.deepEqual(
    getSpeciesTaxonomyPath(dugong).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Mammalia'],
      ['order', 'Sirenia'],
      ['family', 'Dugongidae'],
      ['genus', 'Dugong'],
    ],
  );
  assert.deepEqual(
    {
      code: dugong.conservation.code,
      trend: dugong.conservation.trend,
      assessedYear: dugong.conservation.assessedYear,
      criteria: dugong.conservation.criteria,
    },
    {
      code: 'VU',
      trend: 'decreasing',
      assessedYear: 2015,
      criteria: 'A2bcd+4bcd',
    },
  );
  assert.deepEqual(dugong.distribution.realms, ['marine']);
  assert.deepEqual(dugong.measurements, {
    length: {
      typical: 2.5,
      max: 3,
      unit: 'm',
      note: '泰国成熟个体研究均值约 2.5 米；政府概览给出的近似最大体长约 3 米',
    },
    weight: {
      typical: 250,
      max: 500,
      unit: 'kg',
      note: '泰国成熟个体均值约 250 千克；不同官方概览给出的最大值为 400—500 千克',
    },
  });
  assert.deepEqual(dugong.metrics, {});
  assert.equal(dugong.storySections?.length, 6);
  assert.equal(dugong.featuredStats.length, 4);
  assert.equal(dugong.media.gallery?.length, 5);
  assert.deepEqual(
    [dugong.media.image, ...dugong.media.gallery.map(({ image }) => image)],
    [
      './images/species/dugong/01-seagrass-meadow-portrait.webp',
      './images/species/dugong/02-downturned-muzzle-grazing.webp',
      './images/species/dugong/03-tropical-seagrass-habitat.webp',
      './images/species/dugong/04-surface-breath.webp',
      './images/species/dugong/05-mother-and-calf.webp',
      './images/species/dugong/06-seagrass-edna-monitoring.webp',
    ],
  );
  assert.equal(dugong.sources.length, 21);
  assert.equal(new Set(dugong.sources.map(({ url }) => url)).size, 21);
  assert.ok(dugong.sources.every(({ accessedAt }) => accessedAt === '2026-08-22'));
  assert.equal(dugong.featured, true);
  assert.equal(dugong.publishedAt, '2026-08-22');
  assert.equal(dugong.updatedAt, '2026-08-22');
});

test('registers the White Rhinoceros as a complete Ceratotherium simum profile', () => {
  const whiteRhinoceros = findSpecies('white-rhinoceros');

  assert.equal(whiteRhinoceros.id, 'species-ceratotherium-simum');
  assert.equal(whiteRhinoceros.names.zh, '白犀');
  assert.equal(whiteRhinoceros.names.en, 'White Rhinoceros');
  assert.deepEqual(whiteRhinoceros.names.aliases, ['Square-lipped Rhinoceros']);
  assert.equal(whiteRhinoceros.scientificName, 'Ceratotherium simum');
  assert.deepEqual(
    getSpeciesTaxonomyPath(whiteRhinoceros).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Mammalia'],
      ['order', 'Perissodactyla'],
      ['family', 'Rhinocerotidae'],
      ['genus', 'Ceratotherium'],
    ],
  );
  assert.deepEqual(
    {
      code: whiteRhinoceros.conservation.code,
      trend: whiteRhinoceros.conservation.trend,
      assessedYear: whiteRhinoceros.conservation.assessedYear,
      criteria: whiteRhinoceros.conservation.criteria,
    },
    {
      code: 'NT',
      trend: 'decreasing',
      assessedYear: 2020,
      criteria: undefined,
    },
  );
  assert.deepEqual(whiteRhinoceros.distribution.realms, ['terrestrial']);
  assert.equal(whiteRhinoceros.distribution.countries.length, 13);
  assert.deepEqual(whiteRhinoceros.measurements, {
    length: {
      min: 3.35,
      max: 3.77,
      unit: 'm',
      note: '头体长，Groves 1972 的四成体历史样本；不是全物种极值',
    },
    height: {
      min: 1.71,
      max: 1.85,
      unit: 'm',
      note: '肩高，Groves 1972 的四成体历史样本',
    },
    weight: {
      min: 1.4,
      max: 2.4,
      unit: 't',
      note: '野外参考；成年雌性约 1.4—1.8 吨，成年雄性约 2.0—2.4 吨',
    },
  });
  assert.deepEqual(whiteRhinoceros.metrics, {
    adultMassKg: [1400, 2400],
    lifespanYears: [30, 40],
  });
  assert.equal(whiteRhinoceros.storySections?.length, 6);
  assert.equal(whiteRhinoceros.featuredStats.length, 4);
  assert.equal(whiteRhinoceros.media.gallery?.length, 5);
  assert.deepEqual(
    [whiteRhinoceros.media.image, ...whiteRhinoceros.media.gallery.map(({ image }) => image)],
    [
      './images/species/white-rhinoceros/01-square-lipped-savanna-portrait.webp',
      './images/species/white-rhinoceros/02-square-lip-grazing.webp',
      './images/species/white-rhinoceros/03-grassland-water-pan-habitat.webp',
      './images/species/white-rhinoceros/04-mud-coating-after-wallow.webp',
      './images/species/white-rhinoceros/05-cow-and-calf.webp',
      './images/species/white-rhinoceros/06-distance-monitoring.webp',
    ],
  );
  assert.equal(whiteRhinoceros.sources.length, 22);
  assert.equal(new Set(whiteRhinoceros.sources.map(({ url }) => url)).size, 22);
  assert.ok(
    whiteRhinoceros.sources.every(({ accessedAt }) => accessedAt === '2026-08-23'),
  );
  assert.equal(whiteRhinoceros.featured, true);
  assert.equal(whiteRhinoceros.publishedAt, '2026-08-23');
  assert.equal(whiteRhinoceros.updatedAt, '2026-08-23');
});

test('registers the Brown-throated Sloth as a complete Bradypus variegatus profile', () => {
  const brownThroatedSloth = findSpecies('brown-throated-sloth');

  assert.equal(brownThroatedSloth.id, 'species-bradypus-variegatus');
  assert.equal(brownThroatedSloth.names.zh, '褐喉树懒');
  assert.equal(brownThroatedSloth.names.en, 'Brown-throated Three-toed Sloth');
  assert.deepEqual(brownThroatedSloth.names.aliases, [
    'Brown-throated Sloth',
    'Brown-throated Three-fingered Sloth',
  ]);
  assert.equal(brownThroatedSloth.scientificName, 'Bradypus variegatus');
  assert.deepEqual(
    getSpeciesTaxonomyPath(brownThroatedSloth).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Mammalia'],
      ['order', 'Pilosa'],
      ['family', 'Bradypodidae'],
      ['genus', 'Bradypus'],
    ],
  );
  assert.deepEqual(
    {
      code: brownThroatedSloth.conservation.code,
      trend: brownThroatedSloth.conservation.trend,
      assessedYear: brownThroatedSloth.conservation.assessedYear,
      criteria: brownThroatedSloth.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'decreasing',
      assessedYear: 2022,
      criteria: undefined,
    },
  );
  assert.deepEqual(brownThroatedSloth.distribution.realms, ['terrestrial']);
  assert.equal(brownThroatedSloth.distribution.countries.length, 10);
  assert.deepEqual(brownThroatedSloth.measurements, {
    length: {
      min: 52,
      max: 54,
      unit: 'cm',
      note: '头体长，IUCN SSC 专家组参考值；不含约 5 cm 的退化短尾',
    },
    weight: {
      min: 3.7,
      max: 6,
      unit: 'kg',
      note: 'IUCN SSC 专家组参考值，不代表全分布区极值',
    },
  });
  assert.deepEqual(brownThroatedSloth.metrics, {
    adultLengthCm: [52, 54],
    adultMassKg: [3.7, 6],
    elevationM: [0, 2500],
  });
  assert.equal(brownThroatedSloth.storySections?.length, 6);
  assert.equal(brownThroatedSloth.featuredStats.length, 4);
  assert.equal(brownThroatedSloth.media.gallery?.length, 5);
  assert.deepEqual(
    [
      brownThroatedSloth.media.image,
      ...brownThroatedSloth.media.gallery.map(({ image }) => image),
    ],
    [
      './images/species/brown-throated-sloth/01-canopy-portrait.webp',
      './images/species/brown-throated-sloth/02-three-clawed-anatomy.webp',
      './images/species/brown-throated-sloth/03-lowland-forest-habitat.webp',
      './images/species/brown-throated-sloth/04-selective-leaf-feeding.webp',
      './images/species/brown-throated-sloth/05-mother-and-infant.webp',
      './images/species/brown-throated-sloth/06-canopy-survey-monitoring.webp',
    ],
  );
  assert.equal(brownThroatedSloth.sources.length, 20);
  assert.equal(new Set(brownThroatedSloth.sources.map(({ url }) => url)).size, 20);
  assert.ok(
    brownThroatedSloth.sources.every(({ accessedAt }) => accessedAt === '2026-08-23'),
  );
  assert.equal(brownThroatedSloth.featured, true);
  assert.equal(brownThroatedSloth.publishedAt, '2026-08-23');
  assert.equal(brownThroatedSloth.updatedAt, '2026-08-23');
});

test('registers the Eurasian Beaver as a complete Castor fiber profile', () => {
  const eurasianBeaver = findSpecies('eurasian-beaver');

  assert.equal(eurasianBeaver.id, 'species-castor-fiber');
  assert.equal(eurasianBeaver.names.zh, '欧亚河狸');
  assert.equal(eurasianBeaver.names.en, 'Eurasian Beaver');
  assert.deepEqual(eurasianBeaver.names.aliases, ['河狸', 'European Beaver']);
  assert.equal(eurasianBeaver.scientificName, 'Castor fiber');
  assert.deepEqual(
    getSpeciesTaxonomyPath(eurasianBeaver).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Mammalia'],
      ['order', 'Rodentia'],
      ['family', 'Castoridae'],
      ['genus', 'Castor'],
    ],
  );
  assert.deepEqual(
    {
      code: eurasianBeaver.conservation.code,
      trend: eurasianBeaver.conservation.trend,
      assessedYear: eurasianBeaver.conservation.assessedYear,
      criteria: eurasianBeaver.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'increasing',
      assessedYear: 2016,
      criteria: undefined,
    },
  );
  assert.deepEqual(eurasianBeaver.distribution.realms, ['freshwater', 'terrestrial']);
  assert.equal(eurasianBeaver.distribution.countries.length, 34);
  assert.deepEqual(eurasianBeaver.measurements, {
    length: {
      min: 70,
      max: 100,
      unit: 'cm',
      note: '成年头体长参考范围；尾另长约 25—40 cm',
    },
    weight: {
      min: 15,
      max: 35,
      unit: 'kg',
      note: '成年常见参考范围，不代表绝对极值',
    },
  });
  assert.deepEqual(eurasianBeaver.metrics, {
    adultLengthCm: [70, 100],
    adultMassKg: [15, 35],
  });
  assert.equal(eurasianBeaver.storySections?.length, 6);
  assert.equal(eurasianBeaver.featuredStats.length, 4);
  assert.equal(eurasianBeaver.media.gallery?.length, 5);
  assert.deepEqual(
    [eurasianBeaver.media.image, ...eurasianBeaver.media.gallery.map(({ image }) => image)],
    [
      './images/species/eurasian-beaver/01-riparian-portrait.webp',
      './images/species/eurasian-beaver/02-tail-and-hind-foot-anatomy.webp',
      './images/species/eurasian-beaver/03-beaver-wetland-habitat.webp',
      './images/species/eurasian-beaver/04-woody-plant-feeding.webp',
      './images/species/eurasian-beaver/05-adult-and-kit.webp',
      './images/species/eurasian-beaver/06-wetland-monitoring.webp',
    ],
  );
  assert.equal(eurasianBeaver.sources.length, 23);
  assert.equal(new Set(eurasianBeaver.sources.map(({ url }) => url)).size, 23);
  assert.ok(eurasianBeaver.sources.every(({ accessedAt }) => accessedAt === '2026-08-23'));
  assert.equal(eurasianBeaver.featured, true);
  assert.equal(eurasianBeaver.publishedAt, '2026-08-23');
  assert.equal(eurasianBeaver.updatedAt, '2026-08-23');
});

test('registers the Plateau Pika as a complete Ochotona curzoniae profile', () => {
  const plateauPika = findSpecies('plateau-pika');

  assert.equal(plateauPika.id, 'species-ochotona-curzoniae');
  assert.equal(plateauPika.slug, 'plateau-pika');
  assert.equal(plateauPika.names.zh, '高原鼠兔');
  assert.equal(plateauPika.names.en, 'Plateau Pika');
  assert.deepEqual(plateauPika.names.aliases, ['黑唇鼠兔', 'Black-lipped Pika']);
  assert.equal(plateauPika.scientificName, 'Ochotona curzoniae');
  assert.deepEqual(
    getSpeciesTaxonomyPath(plateauPika).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Mammalia'],
      ['order', 'Lagomorpha'],
      ['family', 'Ochotonidae'],
      ['genus', 'Ochotona'],
    ],
  );
  assert.deepEqual(
    {
      code: plateauPika.conservation.code,
      trend: plateauPika.conservation.trend,
      assessedYear: plateauPika.conservation.assessedYear,
      criteria: plateauPika.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'decreasing',
      assessedYear: 2016,
      criteria: undefined,
    },
  );
  assert.deepEqual(plateauPika.distribution.realms, ['terrestrial']);
  assert.deepEqual(plateauPika.distribution.countries, ['中国', '印度', '尼泊尔']);
  assert.match(plateauPika.distribution.range, /尼泊尔.*不确定性/);
  assert.deepEqual(plateauPika.measurements, {
    length: {
      min: 14,
      max: 19.2,
      unit: 'cm',
      note: '体长参考范围；不含耳长和后足长，也不表示物种极值',
    },
    weight: {
      typical: 150,
      unit: 'g',
      note: '成年典型体重；性别、季节、地点和研究样本会改变实测值，不拼接成统一范围',
    },
  });
  assert.deepEqual(plateauPika.metrics, {
    adultLengthCm: [14, 19.2],
    elevationM: [3000, 5000],
  });
  assert.equal(plateauPika.storySections?.length, 6);
  assert.equal(plateauPika.featuredStats.length, 4);
  assert.equal(plateauPika.media.gallery?.length, 5);
  assert.equal(plateauPika.media.credit, 'Fauna Atlas · AI 生成原创图像');
  assert.deepEqual(
    [plateauPika.media.image, ...plateauPika.media.gallery.map(({ image }) => image)],
    [
      './images/species/plateau-pika/01-alpine-meadow-portrait.webp',
      './images/species/plateau-pika/02-black-lip-and-ear-markings.webp',
      './images/species/plateau-pika/03-burrow-meadow-mosaic.webp',
      './images/species/plateau-pika/04-forb-and-grass-feeding.webp',
      './images/species/plateau-pika/05-family-at-shared-burrow.webp',
      './images/species/plateau-pika/06-nonlethal-density-monitoring.webp',
    ],
  );
  assert.equal(plateauPika.sources.length, 23);
  assert.equal(new Set(plateauPika.sources.map(({ url }) => url)).size, 23);
  assert.ok(plateauPika.sources.every(({ accessedAt }) => accessedAt === '2026-08-23'));
  assert.equal(plateauPika.featured, true);
  assert.equal(plateauPika.publishedAt, '2026-08-23');
  assert.equal(plateauPika.updatedAt, '2026-08-23');
});

test('registers the Chinese Rufous Horseshoe Bat as a complete Rhinolophus sinicus profile', () => {
  const bat = findSpecies('chinese-rufous-horseshoe-bat');

  assert.equal(bat.id, 'species-rhinolophus-sinicus');
  assert.equal(bat.slug, 'chinese-rufous-horseshoe-bat');
  assert.equal(bat.names.zh, '中华菊头蝠');
  assert.equal(bat.names.en, 'Chinese Rufous Horseshoe Bat');
  assert.deepEqual(bat.names.aliases, [
    'Chinese Horseshoe Bat',
    'Little Nepalese Horseshoe Bat',
    '鲁氏菊头蝠（旧称）',
  ]);
  assert.equal(bat.scientificName, 'Rhinolophus sinicus');
  assert.deepEqual(
    getSpeciesTaxonomyPath(bat).map(({ rank, taxon }) => [rank, taxon.scientificName]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Mammalia'],
      ['order', 'Chiroptera'],
      ['family', 'Rhinolophidae'],
      ['genus', 'Rhinolophus'],
    ],
  );
  assert.deepEqual(
    {
      code: bat.conservation.code,
      trend: bat.conservation.trend,
      assessedYear: bat.conservation.assessedYear,
      criteria: bat.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'unknown',
      assessedYear: 2019,
      criteria: undefined,
    },
  );
  assert.deepEqual(bat.distribution.realms, ['terrestrial']);
  assert.deepEqual(bat.distribution.countries, ['中国', '印度', '缅甸', '尼泊尔', '越南']);
  assert.match(bat.distribution.range, /Rhinolophus septentrionalis.*重新核对/);
  assert.deepEqual(bat.measurements, {
    length: {
      min: 43,
      max: 53.5,
      unit: 'mm',
      note: '2019 专论的头体长；来源仍采用包含 R. septentrionalis 的宽物种概念，不进入 normalized metrics',
    },
    weight: {
      min: 10,
      max: 12.5,
      unit: 'g',
      note: '四川 4 只个体的地区样本，不作为全球范围',
    },
  });
  assert.deepEqual(bat.metrics, {});
  assert.equal(bat.storySections?.length, 6);
  assert.equal(bat.featuredStats.length, 4);
  assert.equal(bat.media.gallery?.length, 5);
  assert.equal(bat.media.credit, 'Fauna Atlas · AI 生成原创图像');
  assert.deepEqual(
    [bat.media.image, ...bat.media.gallery.map(({ image }) => image)],
    [
      './images/species/chinese-rufous-horseshoe-bat/01-cave-mouth-roost-portrait.webp',
      './images/species/chinese-rufous-horseshoe-bat/02-horseshoe-noseleaf-anatomy.webp',
      './images/species/chinese-rufous-horseshoe-bat/03-cave-exit-flight.webp',
      './images/species/chinese-rufous-horseshoe-bat/04-cave-roost-group.webp',
      './images/species/chinese-rufous-horseshoe-bat/05-forest-edge-moth-foraging.webp',
      './images/species/chinese-rufous-horseshoe-bat/06-passive-acoustic-monitoring.webp',
    ],
  );
  assert.equal(bat.sources.length, 14);
  assert.equal(new Set(bat.sources.map(({ url }) => url)).size, 14);
  assert.ok(bat.sources.every(({ accessedAt }) => accessedAt === '2026-08-24'));
  assert.equal(bat.featured, true);
  assert.equal(bat.publishedAt, '2026-08-24');
  assert.equal(bat.updatedAt, '2026-08-24');
});

test('registers the Chinese Sturgeon as a complete Acipenser sinensis profile', () => {
  const chineseSturgeon = findSpecies('chinese-sturgeon');

  assert.equal(chineseSturgeon.id, 'species-acipenser-sinensis');
  assert.equal(chineseSturgeon.slug, 'chinese-sturgeon');
  assert.equal(chineseSturgeon.names.zh, '中华鲟');
  assert.equal(chineseSturgeon.names.en, 'Chinese Sturgeon');
  assert.deepEqual(chineseSturgeon.names.aliases, [
    'Sagami Sturgeon（历史英文名）',
    'Acipenser kikuchii（同物异名）',
    'Sinosturio sinensis（2025 年提出的新组合）',
  ]);
  assert.equal(chineseSturgeon.scientificName, 'Acipenser sinensis');
  assert.equal(chineseSturgeon.scientificName.split(' ')[0], 'Acipenser');
  assert.deepEqual(
    getSpeciesTaxonomyPath(chineseSturgeon).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Actinopterygii'],
      ['order', 'Acipenseriformes'],
      ['family', 'Acipenseridae'],
      ['genus', 'Acipenser'],
    ],
  );
  assert.deepEqual(
    {
      code: chineseSturgeon.conservation.code,
      trend: chineseSturgeon.conservation.trend,
      assessedYear: chineseSturgeon.conservation.assessedYear,
      criteria: chineseSturgeon.conservation.criteria,
    },
    {
      code: 'CR',
      trend: 'decreasing',
      assessedYear: 2019,
      criteria: 'A2bc',
    },
  );
  assert.deepEqual(chineseSturgeon.distribution.realms, ['freshwater', 'marine']);
  assert.deepEqual(chineseSturgeon.distribution.countries, ['中国']);
  assert.match(chineseSturgeon.distribution.range, /当前自然生活史核心.*历史或状态未明/);
  assert.deepEqual(chineseSturgeon.measurements, {
    length: {
      min: 189,
      max: 383,
      unit: 'cm',
      note: '1981—1996 年长江湖北段繁殖群体 n=415 的全长范围；平均 275.9 cm，不是物种极值',
    },
    weight: {
      min: 42.5,
      max: 420,
      unit: 'kg',
      note: '同一繁殖群体 n=415 的体重范围；平均 144.0 kg，不代表所有年龄阶段',
    },
  });
  assert.deepEqual(chineseSturgeon.metrics, {
    adultLengthCm: [189, 383],
    adultMassKg: [42.5, 420],
  });
  assert.equal(chineseSturgeon.storySections?.length, 6);
  assert.equal(chineseSturgeon.featuredStats.length, 4);
  assert.equal(chineseSturgeon.media.gallery?.length, 5);
  assert.equal(chineseSturgeon.media.credit, 'Fauna Atlas · AI 生成原创图像');
  assert.deepEqual(
    [
      chineseSturgeon.media.image,
      ...chineseSturgeon.media.gallery.map(({ image }) => image),
    ],
    [
      './images/species/chinese-sturgeon/01-yangtze-migration-portrait.webp',
      './images/species/chinese-sturgeon/02-scuted-body-and-barbels.webp',
      './images/species/chinese-sturgeon/03-deep-river-spawning-habitat.webp',
      './images/species/chinese-sturgeon/04-estuary-juvenile-foraging.webp',
      './images/species/chinese-sturgeon/05-gravel-bed-spawning-run.webp',
      './images/species/chinese-sturgeon/06-edna-water-monitoring.webp',
    ],
  );
  assert.equal(chineseSturgeon.sources.length, 23);
  assert.equal(
    new Set(chineseSturgeon.sources.map(({ url }) => url)).size,
    chineseSturgeon.sources.length,
  );
  assert.ok(
    chineseSturgeon.sources.every(({ accessedAt }) => accessedAt === '2026-08-24'),
  );
  assert.equal(chineseSturgeon.featured, true);
  assert.equal(chineseSturgeon.publishedAt, '2026-08-24');
  assert.equal(chineseSturgeon.updatedAt, '2026-08-24');
});

test('registers the West Indian Ocean Coelacanth as a complete Latimeria chalumnae profile', () => {
  const coelacanth = findSpecies('coelacanth');

  assert.equal(coelacanth.id, 'species-latimeria-chalumnae');
  assert.equal(coelacanth.slug, 'coelacanth');
  assert.equal(coelacanth.names.zh, '西印度洋矛尾鱼');
  assert.equal(coelacanth.names.en, 'West Indian Ocean Coelacanth');
  assert.deepEqual(coelacanth.names.aliases, [
    '腔棘鱼',
    '矛尾鱼',
    '非洲拉蒂迈鱼',
    'African Coelacanth',
    'Coelacanth',
    'Gombessa',
  ]);
  assert.equal(coelacanth.scientificName, 'Latimeria chalumnae');
  assert.equal(coelacanth.scientificName.split(' ')[0], 'Latimeria');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(coelacanth).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
      ]),
      ['species', coelacanth.scientificName],
    ],
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Sarcopterygii'],
      ['order', 'Coelacanthiformes'],
      ['family', 'Latimeriidae'],
      ['genus', 'Latimeria'],
      ['species', 'Latimeria chalumnae'],
    ],
  );
  assert.deepEqual(
    {
      code: coelacanth.conservation.code,
      trend: coelacanth.conservation.trend,
      assessedYear: coelacanth.conservation.assessedYear,
      criteria: coelacanth.conservation.criteria,
    },
    {
      code: 'CR',
      trend: 'unknown',
      assessedYear: 2000,
      criteria: 'A2bcd',
    },
  );
  assert.deepEqual(coelacanth.distribution.realms, ['marine']);
  assert.deepEqual(coelacanth.distribution.countries, [
    '科摩罗',
    '肯尼亚',
    '马达加斯加',
    '莫桑比克',
    '南非',
    '坦桑尼亚',
  ]);
  assert.match(coelacanth.distribution.range, /驻留或繁殖证据.*少量捕获记录/);
  assert.ok(!coelacanth.distribution.countries.includes('印度尼西亚'));
  assert.deepEqual(coelacanth.measurements, {
    length: {
      max: 200,
      unit: 'cm',
      note: 'NOAA 与 ACEP 的约数上限；n=87 的资料实测 42.5–183 cm，雌鱼极值模型约 199 cm，不是普通成体范围',
    },
    weight: {
      max: 105,
      unit: 'kg',
      note: 'Cooke 等汇总的坦桑尼亚捕获记录上限；NOAA 概括约 89.8 kg，地区、渔具、性别和怀孕状态会筛选体重',
    },
  });
  assert.deepEqual(coelacanth.metrics, {});
  assert.equal(coelacanth.storySections?.length, 6);
  assert.equal(coelacanth.featuredStats.length, 4);
  assert.equal(coelacanth.media.gallery?.length, 5);
  assert.equal(coelacanth.media.credit, 'Fauna Atlas · AI 生成原创图像');

  const mediaPaths = [
    coelacanth.media.image,
    ...coelacanth.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/coelacanth/01-deep-slope-portrait.webp',
    './images/species/coelacanth/02-lobed-fins-and-three-lobed-tail.webp',
    './images/species/coelacanth/03-steep-cave-slope-habitat.webp',
    './images/species/coelacanth/04-night-drift-foraging.webp',
    './images/species/coelacanth/05-daytime-cave-shelter-group.webp',
    './images/species/coelacanth/06-rov-video-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !coelacanth.media.gallery.some(({ image }) => image === coelacanth.media.image),
  );

  assert.equal(coelacanth.sources.length, 23);
  assert.equal(
    new Set(coelacanth.sources.map(({ url }) => url)).size,
    coelacanth.sources.length,
  );
  assert.ok(coelacanth.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(
    coelacanth.sources.every(({ accessedAt }) => accessedAt === '2026-08-25'),
  );

  const editorialText = [
    coelacanth.summary,
    coelacanth.description,
    ...coelacanth.storySections.flatMap(({ label, title, body }) => [label, title, body]),
    ...coelacanth.keyFacts,
    ...coelacanth.tags,
  ].join('\n');
  assert.doesNotMatch(
    editorialText,
    /活化石|missing link|缺失环节|直接祖先|用鳍行走/iu,
  );

  assert.equal(coelacanth.featured, true);
  assert.equal(coelacanth.publishedAt, '2026-08-25');
  assert.equal(coelacanth.updatedAt, '2026-08-25');
});

test('registers the Tiger as a complete Panthera tigris profile', () => {
  const tiger = findSpecies('tiger');

  assert.equal(tiger.id, 'species-panthera-tigris');
  assert.equal(tiger.slug, 'tiger');
  assert.equal(tiger.names.zh, '虎');
  assert.equal(tiger.names.en, 'Tiger');
  assert.deepEqual(tiger.names.aliases, ['老虎']);
  assert.equal(tiger.scientificName, 'Panthera tigris');
  assert.equal(tiger.scientificName.split(' ')[0], 'Panthera');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(tiger).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
      ]),
      ['species', tiger.scientificName],
    ],
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Mammalia'],
      ['order', 'Carnivora'],
      ['family', 'Felidae'],
      ['genus', 'Panthera'],
      ['species', 'Panthera tigris'],
    ],
  );
  assert.deepEqual(
    {
      code: tiger.conservation.code,
      trend: tiger.conservation.trend,
      assessedYear: tiger.conservation.assessedYear,
      criteria: tiger.conservation.criteria,
    },
    {
      code: 'EN',
      trend: 'decreasing',
      assessedYear: 2021,
      criteria: 'A2abcd',
    },
  );
  assert.deepEqual(tiger.distribution.realms, ['terrestrial']);
  assert.deepEqual(tiger.distribution.countries, [
    '孟加拉国',
    '不丹',
    '中国',
    '印度',
    '印度尼西亚',
    '马来西亚',
    '缅甸',
    '尼泊尔',
    '俄罗斯',
    '泰国',
  ]);
  assert.match(tiger.distribution.range, /10 个国家.*不足历史范围的 7%/);
  assert.deepEqual(tiger.measurements, {
    length: {
      min: 150,
      max: 230,
      unit: 'cm',
      note: '头体长；另有 90–110 厘米尾长，为跨性别和地理种群的物种级概览',
    },
    weight: {
      min: 75,
      max: 325,
      unit: 'kg',
      note: 'IUCN/SSC 猫科专家组物种级宽范围，不代表典型个体或任何单一亚种',
    },
  });
  assert.deepEqual(tiger.metrics, {
    adultLengthCm: [150, 230],
    adultMassKg: [75, 325],
    lifespanYears: [12, 15],
    estimatedMatureIndividuals: [2608, 3905],
  });
  assert.equal(tiger.storySections?.length, 6);
  assert.equal(tiger.featuredStats.length, 4);
  assert.equal(tiger.media.gallery?.length, 5);
  assert.equal(tiger.media.credit, 'Fauna Atlas · AI 生成原创图像');

  const mediaPaths = [
    tiger.media.image,
    ...tiger.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/tiger/01-forest-edge-portrait.webp',
    './images/species/tiger/02-stripe-pattern-profile.webp',
    './images/species/tiger/03-forest-grassland-water-mosaic.webp',
    './images/species/tiger/04-wild-boar-ambush.webp',
    './images/species/tiger/05-tigress-with-cubs.webp',
    './images/species/tiger/06-camera-trap-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(!tiger.media.gallery.some(({ image }) => image === tiger.media.image));

  assert.equal(tiger.sources.length, 20);
  assert.equal(new Set(tiger.sources.map(({ url }) => url)).size, tiger.sources.length);
  assert.ok(tiger.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(tiger.sources.every(({ accessedAt }) => accessedAt === '2026-08-25'));
  assert.ok(
    tiger.names.aliases.every(
      (alias) =>
        !/东北虎|孟加拉虎|华南虎|马来虎|苏门答腊虎|Amur|Bengal|Sumatran/iu.test(
          alias,
        ),
    ),
  );

  assert.equal(tiger.featured, true);
  assert.equal(tiger.publishedAt, '2026-08-25');
  assert.equal(tiger.updatedAt, '2026-08-25');
});

test('registers the Sea Otter as a complete Enhydra lutris profile', () => {
  const seaOtter = findSpecies('sea-otter');
  const eurasianOtter = findSpecies('eurasian-otter');

  assert.equal(seaOtter.id, 'species-enhydra-lutris');
  assert.equal(seaOtter.slug, 'sea-otter');
  assert.equal(seaOtter.names.zh, '海獭');
  assert.equal(seaOtter.names.en, 'Sea Otter');
  assert.deepEqual(seaOtter.names.aliases, ['海虎']);
  assert.equal(seaOtter.scientificName, 'Enhydra lutris');
  assert.equal(seaOtter.scientificName.split(' ')[0], 'Enhydra');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(seaOtter).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
      ]),
      ['species', seaOtter.scientificName],
    ],
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Mammalia'],
      ['order', 'Carnivora'],
      ['family', 'Mustelidae'],
      ['genus', 'Enhydra'],
      ['species', 'Enhydra lutris'],
    ],
  );
  assert.notEqual(
    seaOtter.taxonomy.genus.scientificName,
    eurasianOtter.taxonomy.genus.scientificName,
  );
  assert.equal(eurasianOtter.taxonomy.genus.scientificName, 'Lutra');
  assert.deepEqual(
    {
      code: seaOtter.conservation.code,
      trend: seaOtter.conservation.trend,
      assessedYear: seaOtter.conservation.assessedYear,
      criteria: seaOtter.conservation.criteria,
    },
    {
      code: 'EN',
      trend: 'decreasing',
      assessedYear: 2020,
      criteria: 'A2abe',
    },
  );
  assert.deepEqual(seaOtter.distribution.realms, ['marine']);
  assert.deepEqual(seaOtter.distribution.countries, [
    '加拿大',
    '日本',
    '墨西哥',
    '俄罗斯',
    '美国',
  ]);
  assert.equal(seaOtter.measurements.length?.max, 148);
  assert.equal(seaOtter.measurements.length?.unit, 'cm');
  assert.equal(seaOtter.measurements.weight?.max, 46);
  assert.equal(seaOtter.measurements.weight?.unit, 'kg');
  assert.deepEqual(seaOtter.metrics, {
    lifespanYears: [10, 20],
    maxDiveDepthM: 100,
  });
  assert.equal(seaOtter.storySections?.length, 6);
  assert.equal(seaOtter.featuredStats.length, 4);
  assert.equal(seaOtter.media.gallery?.length, 5);
  assert.equal(seaOtter.media.credit, 'Fauna Atlas · AI 生成原创图像');

  const mediaPaths = [
    seaOtter.media.image,
    ...seaOtter.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/sea-otter/01-kelp-surface-portrait.webp',
    './images/species/sea-otter/02-surface-fur-grooming.webp',
    './images/species/sea-otter/03-rocky-kelp-forest-habitat.webp',
    './images/species/sea-otter/04-stone-anvil-mussel-foraging.webp',
    './images/species/sea-otter/05-mother-carrying-pup.webp',
    './images/species/sea-otter/06-shore-based-visual-survey.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(!seaOtter.media.gallery.some(({ image }) => image === seaOtter.media.image));

  assert.equal(seaOtter.sources.length, 16);
  assert.equal(
    new Set(seaOtter.sources.map(({ url }) => url)).size,
    seaOtter.sources.length,
  );
  assert.ok(seaOtter.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(
    seaOtter.sources.every(({ accessedAt }) => accessedAt === '2026-08-25'),
  );

  const citesFact = seaOtter.keyFacts.find((fact) => /CITES/iu.test(fact));
  assert.ok(citesFact, 'Sea Otter key facts should preserve the split CITES listing');
  assert.match(
    citesFact,
    /E\. l\. nereis.*附录\s*I.*其余海獭.*附录\s*II/iu,
  );

  assert.equal(seaOtter.featured, true);
  assert.equal(seaOtter.publishedAt, '2026-08-25');
  assert.equal(seaOtter.updatedAt, '2026-08-25');
});

test('registers the Golden Snub-nosed Monkey as a complete Rhinopithecus roxellana profile', () => {
  const goldenMonkey = findSpecies('golden-snub-nosed-monkey');

  assert.equal(goldenMonkey.id, 'species-rhinopithecus-roxellana');
  assert.equal(goldenMonkey.slug, 'golden-snub-nosed-monkey');
  assert.equal(goldenMonkey.names.zh, '川金丝猴');
  assert.equal(goldenMonkey.names.en, 'Golden Snub-nosed Monkey');
  assert.deepEqual(goldenMonkey.names.aliases, [
    '四川金丝猴',
    'Sichuan Snub-nosed Monkey',
  ]);
  assert.equal(goldenMonkey.scientificName, 'Rhinopithecus roxellana');
  assert.equal(goldenMonkey.scientificName.split(' ')[0], 'Rhinopithecus');
  assert.equal(goldenMonkey.taxonomy.genus.zhName, '仰鼻猴属');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(goldenMonkey).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
      ]),
      ['species', goldenMonkey.scientificName],
    ],
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Mammalia'],
      ['order', 'Primates'],
      ['family', 'Cercopithecidae'],
      ['genus', 'Rhinopithecus'],
      ['species', 'Rhinopithecus roxellana'],
    ],
  );
  assert.deepEqual(
    {
      code: goldenMonkey.conservation.code,
      trend: goldenMonkey.conservation.trend,
      assessedYear: goldenMonkey.conservation.assessedYear,
      criteria: goldenMonkey.conservation.criteria,
    },
    {
      code: 'EN',
      trend: 'decreasing',
      assessedYear: 2015,
      criteria: 'A2cd+4cd',
    },
  );
  assert.deepEqual(goldenMonkey.distribution.realms, ['terrestrial']);
  assert.deepEqual(goldenMonkey.distribution.countries, ['中国']);
  assert.deepEqual(goldenMonkey.distribution.endemicTo, ['中国']);
  assert.equal(goldenMonkey.distribution.regions.length, 3);
  assert.match(goldenMonkey.distribution.range, /三个彼此隔离.*1,000 至 4,100 米/);
  assert.deepEqual(goldenMonkey.measurements, {
    length: {
      min: 47,
      max: 83,
      unit: 'cm',
      note: '成年头体长；雌性 47–74 厘米、雄性 56–83 厘米，尾另长 51–104 厘米',
    },
    weight: {
      min: 6,
      max: 19,
      unit: 'kg',
      note: '成年雌性 6–10 千克、雄性 15–19 千克，性别二型明显',
    },
  });
  assert.deepEqual(goldenMonkey.metrics, {
    adultLengthCm: [47, 83],
    adultMassKg: [6, 19],
    elevationM: [1000, 4100],
  });
  assert.ok(!('lifespanYears' in goldenMonkey.metrics));
  assert.ok(!('estimatedMatureIndividuals' in goldenMonkey.metrics));
  assert.deepEqual(goldenMonkey.diet.types, ['herbivore']);
  assert.equal(goldenMonkey.storySections?.length, 6);
  assert.equal(goldenMonkey.keyFacts.length, 8);
  assert.equal(goldenMonkey.threats.length, 5);
  assert.equal(goldenMonkey.conservationActions.length, 5);
  assert.equal(goldenMonkey.featuredStats.length, 4);
  assert.equal(goldenMonkey.media.gallery?.length, 5);
  assert.equal(goldenMonkey.media.credit, 'Fauna Atlas · AI 生成原创图像');

  const mediaPaths = [
    goldenMonkey.media.image,
    ...goldenMonkey.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/golden-snub-nosed-monkey/01-snowy-forest-portrait.webp',
    './images/species/golden-snub-nosed-monkey/02-adult-male-morphology.webp',
    './images/species/golden-snub-nosed-monkey/03-montane-forest-habitat.webp',
    './images/species/golden-snub-nosed-monkey/04-winter-lichen-foraging.webp',
    './images/species/golden-snub-nosed-monkey/05-one-male-unit.webp',
    './images/species/golden-snub-nosed-monkey/06-noninvasive-visual-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !goldenMonkey.media.gallery.some(({ image }) => image === goldenMonkey.media.image),
  );

  assert.equal(goldenMonkey.sources.length, 21);
  assert.equal(
    new Set(goldenMonkey.sources.map(({ url }) => url)).size,
    goldenMonkey.sources.length,
  );
  assert.ok(goldenMonkey.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(goldenMonkey.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    goldenMonkey.sources.every(({ accessedAt }) => accessedAt === '2026-08-25'),
  );

  const populationStat = goldenMonkey.featuredStats.find(
    ({ key }) => key === 'national-population-estimate',
  );
  assert.equal(populationStat?.value, '22,710–26,130');
  assert.match(
    populationStat?.note ?? '',
    /2019 年.*不是成熟个体数.*同步逐只普查/,
  );
  assert.match(goldenMonkey.description, /全国调查.*恢复.*IUCN.*濒危/);

  const taxonomyAndStoryBoundary = [
    ...goldenMonkey.names.aliases,
    ...Object.values(goldenMonkey.taxonomy).flatMap((taxon) => [
      taxon.scientificName,
      taxon.zhName,
    ]),
    ...goldenMonkey.storySections.map(({ key }) => key),
  ].join(' ');
  assert.doesNotMatch(
    taxonomyAndStoryBoundary,
    /qinlingensis|hubeiensis|roxellana roxellana/iu,
  );

  assert.equal(goldenMonkey.featured, true);
  assert.equal(goldenMonkey.publishedAt, '2026-08-25');
  assert.equal(goldenMonkey.updatedAt, '2026-08-25');
});

test('registers the Tibetan Antelope as a complete Pantholops hodgsonii profile', () => {
  const tibetanAntelope = findSpecies('tibetan-antelope');

  assert.equal(tibetanAntelope.id, 'species-pantholops-hodgsonii');
  assert.equal(tibetanAntelope.slug, 'tibetan-antelope');
  assert.equal(tibetanAntelope.names.zh, '藏羚');
  assert.equal(tibetanAntelope.names.en, 'Tibetan Antelope');
  assert.deepEqual(tibetanAntelope.names.aliases, ['藏羚羊', 'Chiru']);
  assert.equal(tibetanAntelope.scientificName, 'Pantholops hodgsonii');
  assert.equal(tibetanAntelope.scientificName.split(' ')[0], 'Pantholops');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(tibetanAntelope).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', tibetanAntelope.scientificName, tibetanAntelope.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Mammalia', '哺乳纲'],
      ['order', 'Artiodactyla', '偶蹄目'],
      ['family', 'Bovidae', '牛科'],
      ['genus', 'Pantholops', '藏羚属'],
      ['species', 'Pantholops hodgsonii', '藏羚'],
    ],
  );
  assert.deepEqual(
    {
      code: tibetanAntelope.conservation.code,
      trend: tibetanAntelope.conservation.trend,
      assessedYear: tibetanAntelope.conservation.assessedYear,
      criteria: tibetanAntelope.conservation.criteria,
    },
    {
      code: 'NT',
      trend: 'increasing',
      assessedYear: 2016,
      criteria: undefined,
    },
  );

  assert.deepEqual(tibetanAntelope.distribution.realms, ['terrestrial']);
  assert.deepEqual(tibetanAntelope.distribution.continents, ['亚洲']);
  assert.deepEqual(tibetanAntelope.distribution.countries, ['中国', '印度']);
  assert.deepEqual(tibetanAntelope.distribution.endemicTo, ['青藏高原']);
  assert.equal(tibetanAntelope.distribution.regions.length, 5);
  assert.deepEqual(tibetanAntelope.distribution.center, { lat: 34.5, lng: 89 });
  assert.match(tibetanAntelope.distribution.range, /印度拉达克北部.*3,250 至 5,500 米/);
  assert.doesNotMatch(tibetanAntelope.summary, /中国特有/);
  assert.match(tibetanAntelope.summary, /近危状态仍依赖持续保护/);

  assert.equal(tibetanAntelope.habitats.length, 3);
  assert.equal(
    tibetanAntelope.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.deepEqual(tibetanAntelope.measurements, {});
  assert.deepEqual(tibetanAntelope.metrics, { elevationM: [3250, 5500] });
  assert.ok(!('adultLengthCm' in tibetanAntelope.metrics));
  assert.ok(!('adultMassKg' in tibetanAntelope.metrics));
  assert.ok(!('lifespanYears' in tibetanAntelope.metrics));
  assert.ok(!('topSpeedKph' in tibetanAntelope.metrics));
  assert.ok(!('estimatedMatureIndividuals' in tibetanAntelope.metrics));
  assert.deepEqual(tibetanAntelope.diet.types, ['herbivore']);
  assert.equal(tibetanAntelope.diet.foods.length, 5);

  assert.equal(tibetanAntelope.storySections?.length, 6);
  assert.equal(new Set(tibetanAntelope.storySections.map(({ key }) => key)).size, 6);
  assert.equal(tibetanAntelope.keyFacts.length, 10);
  assert.equal(tibetanAntelope.threats.length, 6);
  assert.equal(tibetanAntelope.conservationActions.length, 7);
  assert.equal(tibetanAntelope.featuredStats.length, 4);
  assert.deepEqual(
    tibetanAntelope.featuredStats.map(({ key }) => key),
    [
      'adult-weight-sex-means',
      'adult-shoulder-height-sex-means',
      'elevation',
      'male-horn-length',
    ],
  );
  assert.equal(
    tibetanAntelope.featuredStats.find(({ key }) => key === 'adult-weight-sex-means')
      ?.value,
    '雌约 26 / 雄约 39',
  );
  assert.match(
    tibetanAntelope.featuredStats.find(({ key }) => key === 'adult-weight-sex-means')
      ?.note ?? '',
    /小样本性别均值.*不是全物种范围/,
  );

  assert.equal(tibetanAntelope.media.gallery?.length, 5);
  assert.equal(tibetanAntelope.media.credit, 'Fauna Atlas · AI 生成原创图像');
  const mediaPaths = [
    tibetanAntelope.media.image,
    ...tibetanAntelope.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/tibetan-antelope/01-high-plateau-male-portrait.webp',
    './images/species/tibetan-antelope/02-male-horns-and-winter-coat.webp',
    './images/species/tibetan-antelope/03-alpine-desert-steppe-habitat.webp',
    './images/species/tibetan-antelope/04-female-alpine-sedge-foraging.webp',
    './images/species/tibetan-antelope/05-female-and-calf-migration.webp',
    './images/species/tibetan-antelope/06-noninvasive-plateau-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !tibetanAntelope.media.gallery.some(
      ({ image }) => image === tibetanAntelope.media.image,
    ),
  );
  const mediaRecords = [tibetanAntelope.media, ...tibetanAntelope.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  assert.ok(
    tibetanAntelope.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );

  assert.equal(tibetanAntelope.sources.length, 19);
  assert.equal(
    new Set(tibetanAntelope.sources.map(({ url }) => url)).size,
    tibetanAntelope.sources.length,
  );
  assert.ok(tibetanAntelope.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(tibetanAntelope.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    tibetanAntelope.sources.every(({ accessedAt }) => accessedAt === '2026-08-25'),
  );
  assert.deepEqual(
    new Set(tibetanAntelope.sources.map(({ kind }) => kind)),
    new Set(['conservation', 'taxonomy', 'general', 'ecology', 'distribution']),
  );

  assert.match(tibetanAntelope.description, /部分雌性种群.*另有种群全年定居/);
  assert.match(tibetanAntelope.keyFacts.join(' '), /CITES.*附录 I.*CMS.*没有.*附录/);
  assert.doesNotMatch(
    [
      tibetanAntelope.summary,
      tibetanAntelope.description,
      ...tibetanAntelope.storySections.map(({ body }) => body),
    ].join(' '),
    /所有藏羚.*迁徙|中国独有|中国特有种|CMS 附录 [IⅡ12]/,
  );

  assert.equal(tibetanAntelope.featured, true);
  assert.equal(tibetanAntelope.publishedAt, '2026-08-25');
  assert.equal(tibetanAntelope.updatedAt, '2026-08-25');
});

test('registers the Asian Elephant as a complete Elephas maximus profile', () => {
  const asianElephant = findSpecies('asian-elephant');

  assert.equal(asianElephant.id, 'species-elephas-maximus');
  assert.equal(asianElephant.slug, 'asian-elephant');
  assert.equal(asianElephant.names.zh, '亚洲象');
  assert.equal(asianElephant.names.en, 'Asian Elephant');
  assert.deepEqual(asianElephant.names.aliases, ['Asiatic Elephant']);
  assert.equal(asianElephant.scientificName, 'Elephas maximus');
  assert.equal(asianElephant.scientificName.split(' ')[0], 'Elephas');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(asianElephant).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', asianElephant.scientificName, asianElephant.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Mammalia', '哺乳纲'],
      ['order', 'Proboscidea', '长鼻目'],
      ['family', 'Elephantidae', '象科'],
      ['genus', 'Elephas', '亚洲象属'],
      ['species', 'Elephas maximus', '亚洲象'],
    ],
  );
  assert.deepEqual(
    {
      code: asianElephant.conservation.code,
      trend: asianElephant.conservation.trend,
      assessedYear: asianElephant.conservation.assessedYear,
      criteria: asianElephant.conservation.criteria,
    },
    {
      code: 'EN',
      trend: 'decreasing',
      assessedYear: 2019,
      criteria: 'A2c',
    },
  );

  assert.deepEqual(asianElephant.distribution.realms, ['terrestrial']);
  assert.deepEqual(asianElephant.distribution.continents, ['亚洲']);
  assert.equal(asianElephant.distribution.regions.length, 8);
  assert.ok(asianElephant.distribution.regions.includes('印度中部、西北部与南部'));
  assert.deepEqual(asianElephant.distribution.countries, [
    '孟加拉国',
    '不丹',
    '柬埔寨',
    '中国',
    '印度',
    '印度尼西亚',
    '老挝',
    '马来西亚',
    '缅甸',
    '尼泊尔',
    '斯里兰卡',
    '泰国',
    '越南',
  ]);
  assert.deepEqual(asianElephant.distribution.center, { lat: 18, lng: 96 });
  assert.match(asianElephant.distribution.range, /13 个范围国.*海平面至 3,000 米/);

  assert.equal(asianElephant.habitats.length, 3);
  assert.equal(
    asianElephant.habitats.filter(({ isPrimary }) => isPrimary).length,
    2,
  );
  assert.deepEqual(asianElephant.measurements, {
    height: {
      min: 2.28,
      max: 2.89,
      unit: 'm',
      note: '良好发育、完全长成个体的约 90% 范围；雌性 2.28–2.52 米，雄性 2.61–2.89 米',
    },
    weight: {
      min: 2.3,
      max: 4.6,
      unit: 't',
      note: '良好发育、完全长成个体的约 90% 范围；雌性 2.3–3.1 吨，雄性 3.5–4.6 吨',
    },
  });
  assert.deepEqual(asianElephant.metrics, {
    topSpeedKph: 25,
    elevationM: [0, 3000],
  });
  assert.ok(!('adultLengthCm' in asianElephant.metrics));
  assert.ok(!('adultMassKg' in asianElephant.metrics));
  assert.ok(!('lifespanYears' in asianElephant.metrics));
  assert.ok(!('estimatedMatureIndividuals' in asianElephant.metrics));
  assert.deepEqual(asianElephant.diet.types, ['herbivore']);
  assert.equal(asianElephant.diet.foods.length, 6);
  assert.equal(asianElephant.activity.length, 4);

  assert.equal(asianElephant.storySections?.length, 6);
  assert.equal(new Set(asianElephant.storySections.map(({ key }) => key)).size, 6);
  assert.equal(asianElephant.keyFacts.length, 10);
  assert.equal(asianElephant.threats.length, 6);
  assert.equal(asianElephant.conservationActions.length, 7);
  assert.equal(asianElephant.featuredStats.length, 4);
  assert.deepEqual(
    asianElephant.featuredStats.map(({ key }) => key),
    [
      'adult-size-sex-means',
      'three-generation-decline',
      'wild-population-2018',
      'gestation',
    ],
  );
  assert.equal(
    asianElephant.featuredStats.find(({ key }) => key === 'wild-population-2018')
      ?.value,
    '48,323–51,680',
  );
  assert.match(
    asianElephant.featuredStats.find(({ key }) => key === 'wild-population-2018')
      ?.note ?? '',
    /不是成熟个体数.*可靠性存疑/,
  );

  assert.equal(asianElephant.media.gallery?.length, 5);
  assert.equal(asianElephant.media.credit, 'Fauna Atlas · AI 生成原创图像');
  const mediaPaths = [
    asianElephant.media.image,
    ...asianElephant.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/asian-elephant/01-rainforest-female-portrait.webp',
    './images/species/asian-elephant/02-tusked-bull-morphology.webp',
    './images/species/asian-elephant/03-forest-river-mosaic.webp',
    './images/species/asian-elephant/04-wild-grass-foraging.webp',
    './images/species/asian-elephant/05-matrilineal-calf-care.webp',
    './images/species/asian-elephant/06-aerial-corridor-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !asianElephant.media.gallery.some(({ image }) => image === asianElephant.media.image),
  );
  const mediaRecords = [asianElephant.media, ...asianElephant.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  assert.ok(
    asianElephant.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );

  assert.equal(asianElephant.sources.length, 27);
  assert.equal(
    new Set(asianElephant.sources.map(({ url }) => url)).size,
    asianElephant.sources.length,
  );
  assert.ok(asianElephant.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(asianElephant.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    asianElephant.sources.every(({ accessedAt }) => accessedAt === '2026-08-25'),
  );
  assert.deepEqual(
    new Set(asianElephant.sources.map(({ kind }) => kind)),
    new Set(['conservation', 'taxonomy', 'general', 'ecology', 'distribution']),
  );

  const storyText = [
    asianElephant.summary,
    asianElephant.description,
    ...asianElephant.storySections.map(({ body }) => body),
    ...asianElephant.keyFacts,
  ].join(' ');
  assert.match(storyText, /20 个月纵向观察/);
  assert.match(storyText, /约 500 千米.*1,300 多千米/);
  assert.match(storyText, /15 头与 17 头.*不同阶段和队伍分合/);
  assert.match(storyText, /现有研究尚不能锁定单一原因/);
  assert.match(storyText, /CITES.*全种.*CMS.*大陆亚种.*不是 IUCN 受威胁等级/);
  assert.doesNotMatch(
    storyText,
    /象群迷路|寻找新家园|每年固定迁徙|所有亚洲象.*迁徙|CMS 将亚洲象全种列入附录 I/,
  );

  assert.equal(asianElephant.featured, true);
  assert.equal(asianElephant.publishedAt, '2026-08-25');
  assert.equal(asianElephant.updatedAt, '2026-08-25');
});

test('registers the Short-beaked Echidna as a complete Tachyglossus aculeatus profile', () => {
  const echidna = findSpecies('short-beaked-echidna');

  assert.equal(echidna.id, 'species-tachyglossus-aculeatus');
  assert.equal(echidna.slug, 'short-beaked-echidna');
  assert.equal(echidna.names.zh, '针鼹');
  assert.equal(echidna.names.en, 'Short-beaked Echidna');
  assert.deepEqual(echidna.names.aliases, [
    '澳洲针鼹',
    '短吻针鼹',
    'Australian Echidna',
    'Short-nosed Echidna',
    'Spiny Anteater',
    'Bristly Echidna',
  ]);
  assert.equal(echidna.scientificName, 'Tachyglossus aculeatus');
  assert.equal(echidna.scientificName.split(' ')[0], 'Tachyglossus');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(echidna).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', echidna.scientificName, echidna.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Mammalia', '哺乳纲'],
      ['order', 'Monotremata', '单孔目'],
      ['family', 'Tachyglossidae', '针鼹科'],
      ['genus', 'Tachyglossus', '针鼹属'],
      ['species', 'Tachyglossus aculeatus', '针鼹'],
    ],
  );
  assert.deepEqual(
    {
      code: echidna.conservation.code,
      trend: echidna.conservation.trend,
      assessedYear: echidna.conservation.assessedYear,
      criteria: echidna.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'stable',
      assessedYear: 2015,
      criteria: undefined,
    },
  );

  assert.deepEqual(echidna.distribution.realms, ['terrestrial']);
  assert.deepEqual(echidna.distribution.continents, ['大洋洲']);
  assert.deepEqual(echidna.distribution.countries, [
    '澳大利亚',
    '印度尼西亚',
    '巴布亚新几内亚',
  ]);
  assert.ok(!echidna.distribution.endemicTo?.includes('澳大利亚'));
  assert.deepEqual(
    {
      min: echidna.measurements.length?.min,
      max: echidna.measurements.length?.max,
      unit: echidna.measurements.length?.unit,
    },
    { min: 30, max: 45, unit: 'cm' },
  );
  assert.deepEqual(
    {
      min: echidna.measurements.weight?.min,
      max: echidna.measurements.weight?.max,
      unit: echidna.measurements.weight?.unit,
    },
    { min: 2, max: 7, unit: 'kg' },
  );
  assert.match(echidna.measurements.length?.note ?? '', /成体.*头体长/);
  assert.match(echidna.measurements.weight?.note ?? '', /成体/);
  assert.deepEqual(echidna.metrics, {
    adultLengthCm: [30, 45],
    adultMassKg: [2, 7],
    elevationM: [0, 1800],
  });
  assert.equal(echidna.habitats.length, 3);
  assert.equal(echidna.habitats.filter(({ isPrimary }) => isPrimary).length, 2);
  assert.deepEqual(echidna.diet.types, ['insectivore']);
  assert.equal(echidna.diet.foods.length, 5);
  assert.equal(echidna.activity.length, 5);

  assert.equal(echidna.storySections?.length, 6);
  assert.equal(new Set(echidna.storySections.map(({ key }) => key)).size, 6);
  assert.equal(echidna.keyFacts.length, 11);
  assert.equal(echidna.threats.length, 7);
  assert.equal(echidna.conservationActions.length, 7);
  assert.equal(echidna.featuredStats.length, 4);
  assert.deepEqual(
    echidna.featuredStats.map(({ key }) => key),
    [
      'active-body-temperature',
      'pouch-incubation',
      'potential-soil-turnover',
      'wild-longevity-record',
    ],
  );
  assert.equal(echidna.media.gallery?.length, 5);
  assert.equal(echidna.media.credit, 'Fauna Atlas · AI 生成原创图像');
  const mediaPaths = [
    echidna.media.image,
    ...echidna.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/short-beaked-echidna/01-eucalyptus-woodland-portrait.webp',
    './images/species/short-beaked-echidna/02-termite-gallery-foraging.webp',
    './images/species/short-beaked-echidna/03-forest-heath-habitat.webp',
    './images/species/short-beaked-echidna/04-defensive-digging.webp',
    './images/species/short-beaked-echidna/05-courtship-train.webp',
    './images/species/short-beaked-echidna/06-nursery-burrow-backfill.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(!echidna.media.gallery.some(({ image }) => image === echidna.media.image));
  const mediaRecords = [echidna.media, ...echidna.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  assert.ok(
    echidna.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );

  assert.equal(echidna.sources.length, 25);
  assert.equal(
    new Set(echidna.sources.map(({ url }) => url)).size,
    echidna.sources.length,
  );
  assert.ok(echidna.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(echidna.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    echidna.sources.every(({ accessedAt }) => accessedAt === '2026-08-25'),
  );
  assert.deepEqual(
    new Set(echidna.sources.map(({ kind }) => kind)),
    new Set(['conservation', 'taxonomy', 'general', 'ecology', 'distribution']),
  );

  const profileText = [
    echidna.summary,
    echidna.description,
    echidna.distribution.range,
    ...echidna.names.aliases,
    ...echidna.storySections.flatMap(({ label, title, body }) => [label, title, body]),
    ...echidna.keyFacts,
    ...echidna.threats,
    ...echidna.conservationActions,
    ...echidna.featuredStats.flatMap(({ label, value, note }) => [
      label,
      value,
      note ?? '',
    ]),
  ].join(' ');
  assert.match(profileText, /印度尼西亚.*巴布亚新几内亚/);
  assert.match(profileText, /袋鼠岛亚种.*(?:EN|濒危)/);
  assert.match(profileText, /全种.*(?:LC|无危)/);
  assert.match(
    profileText,
    /CITES.*(?:附录 II.*Zaglossus|Zaglossus.*附录 II)|Zaglossus.*CITES.*附录 II/iu,
  );
  assert.match(
    profileText,
    /CITES.*(?:未列|不在).*(?:短吻针鼹|Tachyglossus)|(?:短吻针鼹|Tachyglossus).*(?:未列|不在).*CITES/iu,
  );
  assert.doesNotMatch(
    profileText,
    /Tachyglossus aculeatus.{0,16}(?<!未)被列入 CITES 附录 II/iu,
  );
  assert.match(profileText, /(?:不能|不会).*射.*棘|棘.*(?:不能|不会).*射/);
  assert.match(profileText, /单孔类|单孔目/);
  assert.match(profileText, /(?:不是|并非|而非|不属于)有袋类/);
  assert.doesNotMatch(profileText, /(?<!不)(?:归入|属于)有袋类|有袋目/);
  assert.match(
    profileText,
    /Spiny Anteater.*(?:俗名|旧称|历史)|食蚁兽.*(?:趋同|并非近亲|没有近缘)/iu,
  );
  assert.doesNotMatch(
    profileText,
    /(?<!不)属于食蚁兽|(?<!不)(?<!非)与食蚁兽近缘|(?<!不)是食蚁兽近亲|食蚁兽科/,
  );

  assert.equal(echidna.featured, true);
  assert.equal(echidna.publishedAt, '2026-08-25');
  assert.equal(echidna.updatedAt, '2026-08-25');
});

test('registers the Yangtze finless porpoise as a complete Neophocaena asiaeorientalis profile', () => {
  const porpoise = findSpecies('yangtze-finless-porpoise');

  assert.equal(porpoise.id, 'species-neophocaena-asiaeorientalis');
  assert.equal(porpoise.slug, 'yangtze-finless-porpoise');
  assert.equal(porpoise.names.zh, '长江江豚');
  assert.equal(porpoise.names.en, 'Yangtze Finless Porpoise');
  assert.deepEqual(porpoise.names.aliases, [
    '江豚',
    '江猪',
    '微笑天使',
    'Yangtze River Finless Porpoise',
  ]);
  assert.equal(porpoise.scientificName, 'Neophocaena asiaeorientalis');
  assert.equal(porpoise.scientificName.split(' ')[0], 'Neophocaena');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(porpoise).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', porpoise.scientificName, porpoise.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Mammalia', '哺乳纲'],
      ['order', 'Cetacea', '鲸目'],
      ['family', 'Phocoenidae', '鼠海豚科'],
      ['genus', 'Neophocaena', '江豚属'],
      ['species', 'Neophocaena asiaeorientalis', '长江江豚'],
    ],
  );
  assert.deepEqual(
    {
      code: porpoise.conservation.code,
      trend: porpoise.conservation.trend,
      assessedYear: porpoise.conservation.assessedYear,
      criteria: porpoise.conservation.criteria,
    },
    {
      code: 'CR',
      trend: 'decreasing',
      assessedYear: 2012,
      criteria: 'A3b+4b',
    },
  );

  assert.deepEqual(porpoise.distribution.realms, ['freshwater']);
  assert.deepEqual(porpoise.distribution.continents, ['亚洲']);
  assert.deepEqual(porpoise.distribution.regions, [
    '长江中下游干流',
    '鄱阳湖',
    '洞庭湖',
    '少数通江支流、汊江与江湖连接水道',
  ]);
  assert.deepEqual(porpoise.distribution.countries, ['中国']);
  assert.deepEqual(porpoise.distribution.endemicTo, ['中国长江中下游水系']);
  assert.match(porpoise.distribution.range, /中国特有/);
  assert.match(porpoise.distribution.range, /Neophocaena sunameri/);

  assert.deepEqual(
    {
      min: porpoise.measurements.length?.min,
      max: porpoise.measurements.length?.max,
      unit: porpoise.measurements.length?.unit,
    },
    { min: 131, max: 168, unit: 'cm' },
  );
  assert.deepEqual(
    {
      min: porpoise.measurements.weight?.min,
      max: porpoise.measurements.weight?.max,
      unit: porpoise.measurements.weight?.unit,
    },
    { min: 33, max: 83, unit: 'kg' },
  );
  assert.match(
    porpoise.measurements.length?.note ?? '',
    /审慎成体样本包络.*不是全种绝对极值/,
  );
  assert.match(
    porpoise.measurements.weight?.note ?? '',
    /成体实测值取整包络.*性别.*妊娠.*样地.*年份/,
  );
  assert.deepEqual(porpoise.metrics, {
    adultLengthCm: [131, 168],
    adultMassKg: [33, 83],
  });
  assert.ok(!('estimatedMatureIndividuals' in porpoise.metrics));
  assert.equal(porpoise.habitats.length, 3);
  assert.equal(porpoise.habitats.filter(({ isPrimary }) => isPrimary).length, 2);
  assert.ok(porpoise.habitats.every(({ realm }) => realm === 'freshwater'));
  assert.deepEqual(porpoise.diet.types, ['carnivore', 'piscivore']);
  assert.equal(porpoise.diet.foods.length, 3);
  assert.equal(porpoise.activity.length, 6);

  assert.equal(porpoise.storySections?.length, 6);
  assert.deepEqual(
    porpoise.storySections.map(({ key }) => key),
    [
      'freshwater-species-boundary',
      'finless-dorsal-ridge',
      'sound-guided-fishing',
      'water-level-corridors',
      'year-long-pregnancy',
      'recovery-with-caveats',
    ],
  );
  assert.equal(new Set(porpoise.storySections.map(({ key }) => key)).size, 6);
  assert.equal(porpoise.keyFacts.length, 11);
  assert.equal(porpoise.threats.length, 7);
  assert.equal(porpoise.conservationActions.length, 9);
  assert.equal(porpoise.featuredStats.length, 4);
  assert.deepEqual(
    porpoise.featuredStats.map(({ key }) => key),
    [
      'wild-population-2025',
      'increase-since-2022',
      'dorsal-ridge-width',
      'gestation',
    ],
  );
  assert.equal(
    porpoise.featuredStats.find(({ key }) => key === 'wild-population-2025')
      ?.value,
    '1,426',
  );
  assert.match(
    porpoise.featuredStats.find(({ key }) => key === 'wild-population-2025')
      ?.note ?? '',
    /全龄估计.*不是成熟个体数.*未给置信区间/,
  );

  assert.equal(porpoise.media.gallery?.length, 5);
  assert.equal(porpoise.media.credit, 'Fauna Atlas · AI 生成原创图像');
  const mediaPaths = [
    porpoise.media.image,
    ...porpoise.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/yangtze-finless-porpoise/01-yangtze-channel-portrait.webp',
    './images/species/yangtze-finless-porpoise/02-rounded-head-and-dorsal-ridge.webp',
    './images/species/yangtze-finless-porpoise/03-connected-river-lake-habitat.webp',
    './images/species/yangtze-finless-porpoise/04-surface-breath.webp',
    './images/species/yangtze-finless-porpoise/05-mother-and-calf-travel.webp',
    './images/species/yangtze-finless-porpoise/06-passive-acoustic-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !porpoise.media.gallery.some(({ image }) => image === porpoise.media.image),
  );
  const mediaRecords = [porpoise.media, ...porpoise.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  assert.ok(
    porpoise.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );

  assert.equal(porpoise.sources.length, 33);
  const sourceUrls = new Set(porpoise.sources.map(({ url }) => url));
  assert.equal(sourceUrls.size, porpoise.sources.length);
  assert.ok(
    [
      'https://cjyzbgs.moa.gov.cn/gzdt/202304/t20230426_6426280.htm',
      'https://cjyzbgs.moa.gov.cn/ztzl/201904/t20190428_6220353.htm',
      'https://pmc.ncbi.nlm.nih.gov/articles/PMC10559091/',
      'https://www.mammal.cn/EN/Y1993/V13/I4/260',
      'https://doi.org/10.3389/fendo.2019.00606',
    ].every((url) => sourceUrls.has(url)),
  );
  assert.ok(porpoise.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(porpoise.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    porpoise.sources.every(({ accessedAt }) => accessedAt === '2026-08-25'),
  );
  assert.deepEqual(
    new Set(porpoise.sources.map(({ kind }) => kind)),
    new Set(['conservation', 'taxonomy', 'general', 'ecology', 'distribution']),
  );

  const profileText = [
    porpoise.summary,
    porpoise.description,
    porpoise.distribution.range,
    ...porpoise.names.aliases,
    ...porpoise.tags,
    ...porpoise.storySections.flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...porpoise.keyFacts,
    ...porpoise.threats,
    ...porpoise.conservationActions,
    ...porpoise.featuredStats.flatMap(({ label, value, note }) => [
      label,
      value,
      note ?? '',
    ]),
  ].join(' ');
  assert.match(profileText, /MDD v2\.5.*N\. sunameri/);
  assert.match(profileText, /SMM 2026.*两个亚种.*长江口.*取样不足/);
  assert.match(
    profileText,
    /同域的旧亚种评估：CR、decreasing、2012、A3b\+4b；2017 广义种 EN 评估还包含海生单元/,
  );
  assert.match(
    profileText,
    /2025 年专项调查估算自然种群 1,426 头.*全龄(?:调查)?估计.*(?:不能|不是).*成熟个体数/,
  );
  assert.match(
    profileText,
    /国家一级重点保护野生动物.*CITES 附录 I.*CMS 附录 II.*旧广义种口径/,
  );
  assert.match(profileText, /(?:没有|无)背鳍.*瘤粒脊/);
  assert.match(
    profileText,
    /嘴线自然上弯.*“微笑天使”.*(?:不能|不).*人类式情绪/,
  );
  assert.doesNotMatch(profileText, /CMS.*(?:证明|表示).*跨国迁徙/);
  assert.doesNotMatch(profileText, /微笑(?:表示|说明).*(?:开心|亲人)/);

  assert.equal(porpoise.featured, true);
  assert.equal(porpoise.publishedAt, '2026-08-25');
  assert.equal(porpoise.updatedAt, '2026-08-25');
});

test('registers the Crested Ibis as a complete Nipponia nippon profile', () => {
  const ibis = findSpecies('crested-ibis');

  assert.equal(ibis.id, 'species-nipponia-nippon');
  assert.equal(ibis.names.zh, '朱鹮');
  assert.equal(ibis.names.en, 'Crested Ibis');
  assert.deepEqual(ibis.names.aliases, [
    'Asian Crested Ibis',
    'Japanese Crested Ibis',
    'Toki',
  ]);
  assert.equal(ibis.scientificName, 'Nipponia nippon');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(ibis).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', ibis.scientificName, ibis.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Aves', '鸟纲'],
      ['order', 'Pelecaniformes', '鹈形目'],
      ['family', 'Threskiornithidae', '鹮科'],
      ['genus', 'Nipponia', '朱鹮属'],
      ['species', 'Nipponia nippon', '朱鹮'],
    ],
  );
  assert.deepEqual(
    {
      code: ibis.conservation.code,
      trend: ibis.conservation.trend,
      assessedYear: ibis.conservation.assessedYear,
      criteria: ibis.conservation.criteria,
    },
    {
      code: 'EN',
      trend: 'increasing',
      assessedYear: 2018,
      criteria: 'B1ab(iii)',
    },
  );

  assert.deepEqual(ibis.distribution.realms, ['terrestrial', 'freshwater']);
  assert.deepEqual(ibis.distribution.continents, ['亚洲']);
  assert.deepEqual(ibis.distribution.regions, [
    '中国秦岭及扩展区',
    '日本佐渡岛',
    '韩国牛浦湿地',
  ]);
  assert.deepEqual(ibis.distribution.countries, ['中国', '日本', '韩国']);
  assert.deepEqual(ibis.distribution.center, { lat: 33.23, lng: 107.55 });
  assert.match(ibis.distribution.range, /历史分布.*日本和台湾/);
  assert.match(ibis.distribution.range, /佐渡和韩国牛浦为重引入种群/);

  assert.deepEqual(
    {
      typical: ibis.measurements.length?.typical,
      unit: ibis.measurements.length?.unit,
    },
    { typical: 75, unit: 'cm' },
  );
  assert.deepEqual(
    {
      min: ibis.measurements.weight?.min,
      max: ibis.measurements.weight?.max,
      unit: ibis.measurements.weight?.unit,
    },
    { min: 1.6, max: 2, unit: 'kg' },
  );
  assert.deepEqual(
    {
      typical: ibis.measurements.wingspan?.typical,
      unit: ibis.measurements.wingspan?.unit,
    },
    { typical: 1.4, unit: 'm' },
  );
  assert.match(ibis.measurements.length?.note ?? '', /代表值.*不是全种极值/);
  assert.match(ibis.measurements.weight?.note ?? '', /体重范围/);
  assert.match(ibis.measurements.wingspan?.note ?? '', /代表值.*不是全种极值/);
  assert.equal(ibis.measurements.length?.min, undefined);
  assert.equal(ibis.measurements.length?.max, undefined);
  assert.equal(ibis.measurements.wingspan?.min, undefined);
  assert.equal(ibis.measurements.wingspan?.max, undefined);
  assert.deepEqual(ibis.metrics, { adultMassKg: [1.6, 2] });
  assert.ok(!('estimatedMatureIndividuals' in ibis.metrics));

  assert.equal(ibis.habitats.length, 3);
  assert.equal(ibis.habitats.filter(({ isPrimary }) => isPrimary).length, 2);
  assert.deepEqual(ibis.diet.types, ['carnivore', 'piscivore', 'insectivore']);
  assert.equal(ibis.diet.foods.length, 6);
  assert.equal(ibis.activity.length, 6);

  assert.equal(ibis.storySections?.length, 6);
  assert.deepEqual(
    ibis.storySections.map(({ key }) => key),
    [
      'seven-founders',
      'cosmetic-plumage',
      'paddy-forest-mosaic',
      'assessment-clock',
      'east-asian-return',
      'tactile-foraging',
    ],
  );
  assert.equal(new Set(ibis.storySections.map(({ key }) => key)).size, 6);
  assert.equal(ibis.keyFacts.length, 8);
  assert.equal(ibis.threats.length, 6);
  assert.equal(ibis.conservationActions.length, 6);
  assert.equal(ibis.featuredStats.length, 4);
  assert.deepEqual(
    ibis.featuredStats.map(({ key }) => key),
    ['rediscovery', 'global-total', 'sado-wild', 'clutch'],
  );
  assert.equal(
    ibis.featuredStats.find(({ key }) => key === 'global-total')?.value,
    '>11,000',
  );
  assert.match(
    ibis.featuredStats.find(({ key }) => key === 'global-total')?.note ?? '',
    /全龄、野外与人工混合.*不是成熟个体数/,
  );
  assert.equal(
    ibis.featuredStats.find(({ key }) => key === 'sado-wild')?.value,
    '576',
  );

  assert.equal(ibis.media.gallery?.length, 5);
  assert.equal(ibis.media.credit, 'Fauna Atlas · AI 生成原创图像');
  const mediaPaths = [ibis.media.image, ...ibis.media.gallery.map(({ image }) => image)];
  assert.deepEqual(mediaPaths, [
    './images/species/crested-ibis/01-rice-paddy-flight.webp',
    './images/species/crested-ibis/02-adult-field-marks.webp',
    './images/species/crested-ibis/03-paddy-forest-mosaic.webp',
    './images/species/crested-ibis/04-tactile-paddy-foraging.webp',
    './images/species/crested-ibis/05-cosmetic-daubing.webp',
    './images/species/crested-ibis/06-leg-band-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(!ibis.media.gallery.some(({ image }) => image === ibis.media.image));
  const mediaRecords = [ibis.media, ...ibis.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  assert.ok(
    ibis.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );

  assert.equal(ibis.sources.length, 20);
  const sourceUrls = new Set(ibis.sources.map(({ url }) => url));
  assert.equal(sourceUrls.size, ibis.sources.length);
  assert.ok(
    [
      'https://avibase.bsc-eoc.org/species.jsp?avibaseid=3E328C3C526E7ECF',
      'https://datazone.birdlife.org/species/factsheet/asian-crested-ibis-nipponia-nippon',
      'https://www.forestry.gov.cn/c/www/dfdt/545445.jhtml',
      'https://www.env.go.jp/nature/kisho/5th-rl-2026/BI0054_RDB5th.pdf',
      'https://www.kahaku.go.jp/pickup-science/nid00001005.html',
      'https://doi.org/10.3312/jyio1952.6.54',
      'https://doi.org/10.1017/S0959270913000035',
      'https://www.sciencedirect.com/science/article/pii/S0960982218316099',
    ].every((url) => sourceUrls.has(url)),
  );
  assert.ok(ibis.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(ibis.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(ibis.sources.every(({ accessedAt }) => accessedAt === '2026-08-25'));
  assert.deepEqual(
    new Set(ibis.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'general', 'ecology', 'distribution']),
  );

  const profileText = [
    ibis.summary,
    ibis.description,
    ibis.distribution.range,
    ...ibis.names.aliases,
    ...ibis.tags,
    ...ibis.storySections.flatMap(({ label, title, body }) => [label, title, body]),
    ...ibis.keyFacts,
    ...ibis.threats,
    ...ibis.conservationActions,
    ...ibis.featuredStats.flatMap(({ label, value, note }) => [
      label,
      value,
      note ?? '',
    ]),
  ].join(' ');
  assert.match(ibis.summary, /1981 年在陕西重新发现 7 只/);
  assert.doesNotMatch(ibis.summary, /1981 年仅存 7 只/);
  assert.match(profileText, /1981 年.*(?:发现|确认).*7 只|1981 年重新发现 7 只/);
  assert.match(profileText, /超过 11,000 只.*不是成熟个体数/);
  assert.match(profileText, /IUCN.*330 只成熟个体.*2006 年/);
  assert.match(profileText, /2024 年日本成熟个体估计已达 336 只.*等待重评/);
  assert.match(profileText, /国家一级.*中国红名录 2020 为 EN.*CITES 列附录 I/);
  assert.match(profileText, /皮肤分泌物.*白羽/);
  assert.match(profileText, /雌雄均值约总长 73\.1—77\.2 cm、体重 1\.55—1\.78 kg.*不是绝对范围/);
  assert.match(profileText, /佐渡.*韩国牛浦.*重引入种群/);
  assert.doesNotMatch(profileText, /朱鹭/);
  assert.ok(!ibis.tags.some((tag) => tag.includes('CMS')));

  assert.equal(ibis.featured, true);
  assert.equal(ibis.publishedAt, '2026-08-25');
  assert.equal(ibis.updatedAt, '2026-08-25');
});

test('registers the Red-crowned Crane as a complete Grus japonensis profile', () => {
  const crane = findSpecies('red-crowned-crane');

  assert.equal(crane.id, 'species-grus-japonensis');
  assert.equal(crane.names.zh, '丹顶鹤');
  assert.equal(crane.names.en, 'Red-crowned Crane');
  assert.deepEqual(crane.names.aliases, ['Japanese Crane', 'Manchurian Crane']);
  assert.equal(crane.scientificName, 'Grus japonensis');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(crane).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', crane.scientificName, crane.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Aves', '鸟纲'],
      ['order', 'Gruiformes', '鹤形目'],
      ['family', 'Gruidae', '鹤科'],
      ['genus', 'Grus', '鹤属'],
      ['species', 'Grus japonensis', '丹顶鹤'],
    ],
  );
  assert.deepEqual(
    {
      code: crane.conservation.code,
      trend: crane.conservation.trend,
      assessedYear: crane.conservation.assessedYear,
      criteria: crane.conservation.criteria,
    },
    {
      code: 'VU',
      trend: 'decreasing',
      assessedYear: 2021,
      criteria: 'A2ac+4ac; C1',
    },
  );

  assert.deepEqual(crane.distribution.realms, [
    'terrestrial',
    'freshwater',
    'marine',
  ]);
  assert.deepEqual(crane.distribution.continents, ['亚洲']);
  assert.deepEqual(crane.distribution.regions, [
    '中国东北与俄罗斯远东繁殖湿地',
    '北海道与国后岛',
    '中国黄渤海沿岸',
    '朝鲜半岛非军事区及民统线地区',
  ]);
  assert.deepEqual(crane.distribution.countries, [
    '中国',
    '俄罗斯',
    '蒙古',
    '朝鲜',
    '韩国',
    '日本',
  ]);
  assert.ok(!('center' in crane.distribution));
  assert.match(crane.distribution.range, /大陆迁徙种群.*两条主要路线/);
  assert.match(crane.distribution.range, /岛屿留居种群.*北海道/);

  assert.deepEqual(
    {
      min: crane.measurements.length?.min,
      max: crane.measurements.length?.max,
      unit: crane.measurements.length?.unit,
    },
    { min: 101.9, max: 147, unit: 'cm' },
  );
  assert.deepEqual(
    {
      typical: crane.measurements.height?.typical,
      unit: crane.measurements.height?.unit,
    },
    { typical: 1.58, unit: 'm' },
  );
  assert.deepEqual(
    {
      min: crane.measurements.weight?.min,
      max: crane.measurements.weight?.max,
      unit: crane.measurements.weight?.unit,
    },
    { min: 4.8, max: 10.55, unit: 'kg' },
  );
  assert.deepEqual(
    {
      max: crane.measurements.wingspan?.max,
      unit: crane.measurements.wingspan?.unit,
    },
    { max: 2.5, unit: 'm' },
  );
  assert.match(
    crane.measurements.length?.note ?? '',
    /北海道成鸟尸体样本.*不是全球健康活体范围/,
  );
  assert.match(crane.measurements.height?.note ?? '', /站立高度.*体长/);
  assert.match(
    crane.measurements.wingspan?.note ?? '',
    /翼展上限.*不支持完整范围/,
  );
  assert.equal(crane.measurements.wingspan?.min, undefined);
  assert.equal(crane.measurements.wingspan?.typical, undefined);
  assert.deepEqual(crane.metrics, {
    adultLengthCm: [101.9, 147],
    adultMassKg: [4.8, 10.55],
    estimatedMatureIndividuals: [2000, 2650],
  });
  assert.ok(!('lifespanYears' in crane.metrics));
  assert.ok(!('wingspanCm' in crane.metrics));

  assert.equal(crane.habitats.length, 4);
  assert.equal(crane.habitats.filter(({ isPrimary }) => isPrimary).length, 1);
  assert.deepEqual(
    new Set(crane.habitats.map(({ realm }) => realm)),
    new Set(['freshwater', 'marine', 'terrestrial']),
  );
  assert.deepEqual(crane.diet.types, ['omnivore']);
  assert.equal(crane.diet.foods.length, 6);
  assert.equal(crane.activity.length, 5);

  assert.equal(crane.storySections?.length, 6);
  assert.deepEqual(
    crane.storySections.map(({ key }) => key),
    [
      'two-annual-cycles',
      'two-flyways',
      'nest-water-balance',
      'feeding-concentration',
      'duet-and-dance',
      'wetland-chain-conservation',
    ],
  );
  assert.equal(new Set(crane.storySections.map(({ key }) => key)).size, 6);
  assert.equal(crane.keyFacts.length, 9);
  assert.equal(crane.threats.length, 7);
  assert.equal(crane.conservationActions.length, 7);
  assert.equal(crane.featuredStats.length, 4);
  assert.deepEqual(
    crane.featuredStats.map(({ key }) => key),
    [
      'winter-total',
      'continental-population',
      'resident-population',
      'standing-height',
    ],
  );
  assert.equal(
    crane.featuredStats.find(({ key }) => key === 'winter-total')?.value,
    '5,887',
  );
  assert.match(
    crane.featuredStats.find(({ key }) => key === 'winter-total')?.note ?? '',
    /不是成熟个体数/,
  );
  assert.equal(
    crane.featuredStats.find(({ key }) => key === 'continental-population')
      ?.value,
    '3,737',
  );
  assert.equal(
    crane.featuredStats.find(({ key }) => key === 'resident-population')?.value,
    '2,150',
  );

  assert.equal(crane.media.gallery?.length, 5);
  assert.equal(crane.media.credit, 'Fauna Atlas · AI 生成原创图像');
  const mediaPaths = [
    crane.media.image,
    ...crane.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/red-crowned-crane/01-red-crown-marsh-portrait.webp',
    './images/species/red-crowned-crane/02-hokkaido-snow-courtship-duet.webp',
    './images/species/red-crowned-crane/03-shallow-water-nest-and-chicks.webp',
    './images/species/red-crowned-crane/04-continental-wetland-migration.webp',
    './images/species/red-crowned-crane/05-coastal-winter-foraging.webp',
    './images/species/red-crowned-crane/06-distance-conservation-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(!crane.media.gallery.some(({ image }) => image === crane.media.image));
  const mediaRecords = [crane.media, ...crane.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  assert.ok(
    crane.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.match(
    crane.media.gallery.find(({ image }) => image.includes('03-shallow-water'))
      ?.alt ?? '',
    /一只成鸟.*两只.*幼鸟/,
  );
  assert.match(
    crane.media.gallery.find(({ image }) => image.includes('05-coastal'))?.alt ?? '',
    /两只成鸟/,
  );
  assert.doesNotMatch(
    crane.media.gallery.find(({ image }) => image.includes('05-coastal'))?.alt ?? '',
    /幼鸟/,
  );
  assert.match(
    crane.media.gallery.find(({ image }) => image.includes('06-distance'))?.alt ?? '',
    /两名研究人员/,
  );

  assert.equal(crane.sources.length, 18);
  const sourceUrls = new Set(crane.sources.map(({ url }) => url));
  assert.equal(sourceUrls.size, crane.sources.length);
  assert.ok(
    [
      'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=176184',
      'https://www.iucnredlist.org/species/22692167/213488064',
      'https://rbcu.ru/upload/medialibrary/a07/k3qe0f3mm8kfdqsfmpakmodgf00k04xp/2026_CWGE%20Newsletter%20z20_compressed.pdf',
      'https://doi.org/10.1046/j.1440-1703.1998.00271.x',
      'https://pubmed.ncbi.nlm.nih.gov/23585489/',
      'https://doi.org/10.1007/s10164-007-0063-y',
      'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
      'https://www.cms.int/species/grus-japonensis',
      'https://ikilog.biodic.go.jp/rl_rdb/a/894.html',
    ].every((url) => sourceUrls.has(url)),
  );
  assert.ok(crane.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(crane.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(crane.sources.every(({ accessedAt }) => accessedAt === '2026-08-25'));
  assert.deepEqual(
    new Set(crane.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'general', 'ecology']),
  );

  const profileText = [
    crane.summary,
    crane.description,
    crane.distribution.range,
    ...crane.names.aliases,
    ...crane.tags,
    ...crane.storySections.flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...crane.keyFacts,
    ...crane.threats,
    ...crane.conservationActions,
    ...crane.featuredStats.flatMap(({ label, value, note }) => [
      label,
      value,
      note ?? '',
    ]),
  ].join(' ');
  assert.match(
    profileText,
    /IUCN.*2021 年.*VU、decreasing.*2,000—2,650 只成熟个体/,
  );
  assert.match(
    profileText,
    /2024\/25 冬季.*5,887 只全龄个体.*大陆迁徙种群 3,737 只.*日本留居种群 2,150 只/,
  );
  assert.match(profileText, /两个统计口径不能互换|不能直接互换/);
  assert.match(profileText, /2022 是 errata 发布年.*不是重评年份/);
  assert.match(profileText, /大陆种群.*迁往.*北海道.*留居/);
  assert.match(profileText, /日本留居种群的恢复.*没有消除大陆迁徙种群/);
  assert.match(profileText, /红色头冠是裸露皮肤.*真实尾羽为白色/);
  assert.match(profileText, /CITES 将本种列入附录 I.*CMS 将本种列入附录 I 和 II/);
  assert.doesNotMatch(profileText, /CITES(?: 列入| 将本种列入)?附录 II/);
  assert.doesNotMatch(profileText, /所有(?:个体|丹顶鹤).*(?:迁徙|迁移)/);

  assert.equal(crane.featured, true);
  assert.equal(crane.publishedAt, '2026-08-25');
  assert.equal(crane.updatedAt, '2026-08-25');
});

test('registers the Golden Eagle as a complete Aquila chrysaetos profile', () => {
  const goldenEagle = findSpecies('golden-eagle');

  assert.equal(goldenEagle.id, 'species-aquila-chrysaetos');
  assert.equal(goldenEagle.names.zh, '金雕');
  assert.equal(goldenEagle.names.en, 'Golden Eagle');
  assert.deepEqual(goldenEagle.names.aliases, ['金鵰']);
  assert.equal(goldenEagle.scientificName, 'Aquila chrysaetos');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(goldenEagle).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', goldenEagle.scientificName, goldenEagle.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Aves', '鸟纲'],
      ['order', 'Accipitriformes', '鹰形目'],
      ['family', 'Accipitridae', '鹰科'],
      ['genus', 'Aquila', '雕属'],
      ['species', 'Aquila chrysaetos', '金雕'],
    ],
  );
  assert.deepEqual(
    {
      code: goldenEagle.conservation.code,
      trend: goldenEagle.conservation.trend,
      assessedYear: goldenEagle.conservation.assessedYear,
      criteria: goldenEagle.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'stable',
      assessedYear: 2021,
      criteria: undefined,
    },
  );
  assert.ok(!('criteria' in goldenEagle.conservation));

  assert.deepEqual(goldenEagle.distribution.realms, ['terrestrial']);
  assert.deepEqual(goldenEagle.distribution.continents, [
    '亚洲',
    '欧洲',
    '北美洲',
    '非洲',
  ]);
  assert.deepEqual(goldenEagle.distribution.regions, [
    '阿拉斯加、加拿大与北美西部',
    '欧洲山地、北欧与地中海地区',
    '北非与西亚',
    '中亚草原、荒漠山地与青藏高原—喜马拉雅',
    '蒙古、西伯利亚、东北亚与日本列岛',
  ]);
  assert.equal(goldenEagle.distribution.countries.length, 32);
  assert.ok(
    [
      '加拿大',
      '美国',
      '墨西哥',
      '俄罗斯',
      '中国',
      '蒙古',
      '印度',
      '日本',
      '英国',
      '西班牙',
      '土耳其',
      '伊朗',
      '摩洛哥',
      '阿尔及利亚',
    ].every((country) => goldenEagle.distribution.countries.includes(country)),
  );
  assert.ok(!('center' in goldenEagle.distribution));
  assert.match(
    goldenEagle.distribution.range,
    /北美、欧洲、北非和亚洲.*国家列表为代表性常规范围.*不含完整的通道、偶见和迷鸟记录/,
  );
  assert.match(
    goldenEagle.distribution.range,
    /中低纬成鸟留居.*高纬种群可南迁.*幼鸟.*远距离扩散/,
  );

  assert.deepEqual(
    {
      min: goldenEagle.measurements.length?.min,
      max: goldenEagle.measurements.length?.max,
      unit: goldenEagle.measurements.length?.unit,
    },
    { min: 70, max: 84, unit: 'cm' },
  );
  assert.deepEqual(
    {
      min: goldenEagle.measurements.weight?.min,
      max: goldenEagle.measurements.weight?.max,
      unit: goldenEagle.measurements.weight?.unit,
    },
    { min: 3, max: 6.125, unit: 'kg' },
  );
  assert.deepEqual(
    {
      min: goldenEagle.measurements.wingspan?.min,
      max: goldenEagle.measurements.wingspan?.max,
      unit: goldenEagle.measurements.wingspan?.unit,
    },
    { min: 185, max: 220, unit: 'cm' },
  );
  assert.match(
    goldenEagle.measurements.length?.note ?? '',
    /Cornell 北美.*不代表六亚种全球极值/,
  );
  assert.match(
    goldenEagle.measurements.weight?.note ?? '',
    /Cornell 北美.*雌鸟平均大于雄鸟/,
  );
  assert.match(goldenEagle.measurements.wingspan?.note ?? '', /Cornell 北美/);
  assert.deepEqual(goldenEagle.metrics, {
    adultLengthCm: [70, 84],
    adultMassKg: [3, 6.125],
    wingspanCm: [185, 220],
    estimatedMatureIndividuals: [85000, 160000],
  });
  assert.ok(!('topSpeedKph' in goldenEagle.metrics));
  assert.ok(!('elevationM' in goldenEagle.metrics));

  assert.equal(goldenEagle.habitats.length, 5);
  assert.equal(
    goldenEagle.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(goldenEagle.habitats.every(({ realm }) => realm === 'terrestrial'));
  assert.deepEqual(goldenEagle.diet.types, ['carnivore']);
  assert.equal(goldenEagle.diet.foods.length, 6);
  assert.equal(goldenEagle.activity.length, 6);
  assert.equal(goldenEagle.tags.length, 9);
  assert.ok(goldenEagle.tags.includes('CITES 附录 II'));
  assert.ok(goldenEagle.tags.includes('CMS 附录 II'));

  assert.equal(goldenEagle.storySections?.length, 6);
  assert.deepEqual(
    goldenEagle.storySections.map(({ key }) => key),
    [
      'golden-nape-and-age',
      'uplift-and-movement',
      'open-ground-hunter',
      'alternate-eyries',
      'status-at-different-scales',
      'preventable-mortality',
    ],
  );
  assert.equal(new Set(goldenEagle.storySections.map(({ key }) => key)).size, 6);
  assert.equal(goldenEagle.keyFacts.length, 8);
  assert.equal(goldenEagle.threats.length, 7);
  assert.equal(goldenEagle.conservationActions.length, 8);
  assert.equal(goldenEagle.featuredStats.length, 4);
  assert.deepEqual(
    goldenEagle.featuredStats.map(({ key }) => key),
    ['wingspan', 'mass', 'incubation', 'mature-population'],
  );
  assert.equal(
    goldenEagle.featuredStats.find(({ key }) => key === 'wingspan')?.value,
    '185—220',
  );
  assert.equal(
    goldenEagle.featuredStats.find(({ key }) => key === 'mature-population')
      ?.value,
    '8.5万—16万',
  );
  assert.match(
    goldenEagle.featuredStats.find(({ key }) => key === 'mature-population')
      ?.note ?? '',
    /低质量推断区间.*不是同期全球普查/,
  );

  assert.equal(goldenEagle.media.gallery?.length, 5);
  assert.equal(goldenEagle.media.credit, 'Fauna Atlas · AI 生成原创图像');
  const mediaPaths = [
    goldenEagle.media.image,
    ...goldenEagle.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/golden-eagle/01-alpine-ridge-portrait.webp',
    './images/species/golden-eagle/02-adult-flight-field-marks.webp',
    './images/species/golden-eagle/03-open-mountain-habitat.webp',
    './images/species/golden-eagle/04-hare-hunting-approach.webp',
    './images/species/golden-eagle/05-cliff-eyrie-and-eaglet.webp',
    './images/species/golden-eagle/06-distance-raptor-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !goldenEagle.media.gallery.some(
      ({ image }) => image === goldenEagle.media.image,
    ),
  );
  const mediaRecords = [goldenEagle.media, ...goldenEagle.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.deepEqual(
    mediaRecords.map(({ focalPoint }) => focalPoint),
    [
      { x: 0.7, y: 0.52 },
      { x: 0.59, y: 0.46 },
      { x: 0.67, y: 0.48 },
      { x: 0.51, y: 0.49 },
      { x: 0.55, y: 0.52 },
      { x: 0.7, y: 0.39 },
    ],
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  assert.ok(
    goldenEagle.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.match(goldenEagle.media.alt, /完整成年金雕.*深褐.*后颈.*金褐/);
  assert.match(
    goldenEagle.media.gallery.find(({ image }) => image.includes('02-adult-flight'))
      ?.alt ?? '',
    /成年金雕.*长宽双翼.*分指状翼尖.*圆形.*尾/,
  );
  assert.match(
    goldenEagle.media.gallery.find(({ image }) => image.includes('04-hare'))
      ?.alt ?? '',
    /一只成年金雕.*一只.*野兔.*没有接触/,
  );
  assert.match(
    goldenEagle.media.gallery.find(({ image }) => image.includes('05-cliff'))
      ?.alt ?? '',
    /一只成年金雕.*一只.*幼鸟/,
  );
  assert.match(
    goldenEagle.media.gallery.find(({ image }) => image.includes('06-distance'))
      ?.alt ?? '',
    /两名.*观察者.*一只.*金雕/,
  );

  assert.equal(goldenEagle.sources.length, 15);
  const sourceUrls = new Set(goldenEagle.sources.map(({ url }) => url));
  assert.equal(sourceUrls.size, goldenEagle.sources.length);
  assert.ok(
    [
      'https://www.worldbirdnames.org/new/ioc-lists/master-list-2/',
      'https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T22696060A202078899.en',
      'https://datazone.birdlife.org/species/factsheet/golden-eagle-aquila-chrysaetos',
      'https://doi.org/10.2173/bow.goleag.02',
      'https://www.allaboutbirds.org/guide/Golden_Eagle/id',
      'https://www.fws.gov/species/golden-eagle-aquila-chrysaetos',
      'https://www.cms.int/species/aquila-chrysaetos',
      'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
      'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
      'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
      'https://doi.org/10.1371/journal.pone.0205204',
      'https://doi.org/10.1126/science.abj3068',
    ].every((url) => sourceUrls.has(url)),
  );
  assert.ok(goldenEagle.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(goldenEagle.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    goldenEagle.sources.every(({ accessedAt }) => accessedAt === '2026-08-26'),
  );
  assert.deepEqual(
    new Set(goldenEagle.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'ecology', 'general', 'distribution']),
  );

  const profileText = [
    goldenEagle.summary,
    goldenEagle.description,
    goldenEagle.distribution.range,
    ...goldenEagle.names.aliases,
    ...goldenEagle.tags,
    ...goldenEagle.storySections.flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...goldenEagle.keyFacts,
    ...goldenEagle.threats,
    ...goldenEagle.conservationActions,
    ...goldenEagle.featuredStats.flatMap(({ label, value, note }) => [
      label,
      value,
      note ?? '',
    ]),
  ].join(' ');
  assert.match(profileText, /IOC World Bird List v15\.2.*六个亚种/);
  assert.match(
    profileText,
    /IUCN\/BirdLife 2021 年全球评估为无危.*趋势稳定.*未触发受胁标准代码/,
  );
  assert.match(
    profileText,
    /85,000—160,000.*(?:poor.*inferred|低质量推断).*不是同期全球普查/,
  );
  assert.match(profileText, /金褐色集中在后头和后颈.*幼鸟.*白色尾基.*翼部白斑/);
  assert.match(
    profileText,
    /部分高纬种群.*长距离迁徙.*许多中低纬.*留居|高纬种群可南迁.*中低纬成鸟留居/,
  );
  assert.match(profileText, /草原、山地、荒漠灌丛、苔原和疏林边缘/);
  assert.match(
    profileText,
    /全球.*(?:无危|LC).*中国.*(?:易危|VU).*国家一级重点保护/,
  );
  assert.match(
    profileText,
    /CITES 与 CMS.*附录 II.*分别管理国际贸易与迁徙物种合作/,
  );
  assert.match(profileText, /触电.*碰撞.*含铅|含铅.*触电.*碰撞/);
  assert.doesNotMatch(profileText, /所有(?:金雕|个体).*(?:长距离)?迁徙/);
  assert.doesNotMatch(profileText, /2021 年(?:全球)?普查(?:到|出)/);
  assert.ok(!('center' in goldenEagle.distribution));

  assert.equal(goldenEagle.featured, true);
  assert.equal(goldenEagle.publishedAt, '2026-08-26');
  assert.equal(goldenEagle.updatedAt, '2026-08-26');
});

test('registers the Peregrine Falcon as a complete Falco peregrinus profile', () => {
  const peregrine = findSpecies('peregrine-falcon');

  assert.equal(peregrine.id, 'species-falco-peregrinus');
  assert.equal(peregrine.names.zh, '游隼');
  assert.equal(peregrine.names.en, 'Peregrine Falcon');
  assert.deepEqual(peregrine.names.aliases, [
    '花梨鹰',
    'Peregrine',
    'Duck Hawk',
  ]);
  assert.equal(peregrine.scientificName, 'Falco peregrinus');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(peregrine).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', peregrine.scientificName, peregrine.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Aves', '鸟纲'],
      ['order', 'Falconiformes', '隼形目'],
      ['family', 'Falconidae', '隼科'],
      ['genus', 'Falco', '隼属'],
      ['species', 'Falco peregrinus', '游隼'],
    ],
  );
  assert.deepEqual(
    {
      code: peregrine.conservation.code,
      trend: peregrine.conservation.trend,
      assessedYear: peregrine.conservation.assessedYear,
      criteria: peregrine.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'increasing',
      assessedYear: 2021,
      criteria: undefined,
    },
  );
  assert.ok(!('criteria' in peregrine.conservation));

  assert.deepEqual(peregrine.distribution.realms, ['terrestrial']);
  assert.deepEqual(peregrine.distribution.continents, [
    '亚洲',
    '欧洲',
    '非洲',
    '北美洲',
    '南美洲',
    '大洋洲',
  ]);
  assert.equal(peregrine.distribution.regions.length, 6);
  assert.equal(peregrine.distribution.countries.length, 36);
  assert.ok(
    [
      '加拿大',
      '美国',
      '巴西',
      '阿根廷',
      '英国',
      '俄罗斯',
      '摩洛哥',
      '南非',
      '马达加斯加',
      '中国',
      '日本',
      '印度',
      '菲律宾',
      '澳大利亚',
      '斐济',
    ].every((country) => peregrine.distribution.countries.includes(country)),
  );
  assert.ok(!('center' in peregrine.distribution));
  assert.match(
    peregrine.distribution.range,
    /除南极洲外六大洲.*国家列表只列代表性常规范围.*不含完整通道、偶见和迷鸟记录/,
  );
  assert.match(
    peregrine.distribution.range,
    /高纬种群可作洲际迁徙.*低纬度和南半球种群多留居或局地移动/,
  );

  assert.deepEqual(
    {
      min: peregrine.measurements.length?.min,
      max: peregrine.measurements.length?.max,
      unit: peregrine.measurements.length?.unit,
    },
    { min: 36, max: 49, unit: 'cm' },
  );
  assert.deepEqual(
    {
      min: peregrine.measurements.weight?.min,
      max: peregrine.measurements.weight?.max,
      unit: peregrine.measurements.weight?.unit,
    },
    { min: 0.53, max: 1.6, unit: 'kg' },
  );
  assert.deepEqual(
    {
      min: peregrine.measurements.wingspan?.min,
      max: peregrine.measurements.wingspan?.max,
      unit: peregrine.measurements.wingspan?.unit,
    },
    { min: 100, max: 110, unit: 'cm' },
  );
  assert.match(
    peregrine.measurements.length?.note ?? '',
    /Cornell 北美.*不代表 18 亚种全球极值/,
  );
  assert.match(
    peregrine.measurements.weight?.note ?? '',
    /Cornell 北美.*雌鸟通常较大/,
  );
  assert.match(peregrine.measurements.wingspan?.note ?? '', /Cornell 北美/);
  assert.deepEqual(peregrine.metrics, {
    adultLengthCm: [36, 49],
    adultMassKg: [0.53, 1.6],
    wingspanCm: [100, 110],
    topSpeedKph: 320,
    estimatedMatureIndividuals: [248000, 478000],
  });
  assert.ok(!('elevationM' in peregrine.metrics));

  assert.equal(peregrine.habitats.length, 5);
  assert.equal(
    peregrine.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(peregrine.habitats.every(({ realm }) => realm === 'terrestrial'));
  assert.deepEqual(peregrine.diet.types, ['carnivore']);
  assert.equal(peregrine.diet.foods.length, 6);
  assert.equal(peregrine.activity.length, 6);
  assert.equal(peregrine.tags.length, 10);
  assert.ok(peregrine.tags.includes('CITES 附录 I'));
  assert.ok(peregrine.tags.includes('CMS 附录 II'));

  assert.equal(peregrine.storySections?.length, 6);
  assert.deepEqual(
    peregrine.storySections.map(({ key }) => key),
    [
      'hood-and-pointed-wings',
      'stoop-speed-evidence',
      'urban-cliff-analogue',
      'aerial-bird-hunter',
      'latitude-and-migration',
      'recovery-and-vigilance',
    ],
  );
  assert.equal(new Set(peregrine.storySections.map(({ key }) => key)).size, 6);
  assert.equal(peregrine.keyFacts.length, 8);
  assert.equal(peregrine.threats.length, 7);
  assert.equal(peregrine.conservationActions.length, 9);
  assert.equal(peregrine.featuredStats.length, 4);
  assert.deepEqual(
    peregrine.featuredStats.map(({ key }) => key),
    ['stoop-speed', 'mature-population', 'incubation', 'arctic-migration'],
  );
  assert.equal(
    peregrine.featuredStats.find(({ key }) => key === 'stoop-speed')?.value,
    '320',
  );
  assert.equal(
    peregrine.featuredStats.find(({ key }) => key === 'mature-population')
      ?.value,
    '24.8万至47.8万',
  );
  assert.match(
    peregrine.featuredStats.find(({ key }) => key === 'mature-population')
      ?.note ?? '',
    /资料质量 poor、推导方式 suspected/,
  );

  assert.equal(peregrine.media.gallery?.length, 5);
  assert.equal(peregrine.media.credit, 'Fauna Atlas · AI 生成原创图像');
  const mediaPaths = [
    peregrine.media.image,
    ...peregrine.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/peregrine-falcon/01-cliff-portrait.webp',
    './images/species/peregrine-falcon/02-high-speed-stoop.webp',
    './images/species/peregrine-falcon/03-urban-nest-ledge.webp',
    './images/species/peregrine-falcon/04-aerial-bird-hunt.webp',
    './images/species/peregrine-falcon/05-migration-coastline.webp',
    './images/species/peregrine-falcon/06-cliff-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !peregrine.media.gallery.some(
      ({ image }) => image === peregrine.media.image,
    ),
  );
  const mediaRecords = [peregrine.media, ...peregrine.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.deepEqual(
    mediaRecords.map(({ focalPoint }) => focalPoint),
    [
      { x: 0.72, y: 0.5 },
      { x: 0.56, y: 0.43 },
      { x: 0.6, y: 0.5 },
      { x: 0.54, y: 0.46 },
      { x: 0.64, y: 0.4 },
      { x: 0.68, y: 0.44 },
    ],
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  assert.ok(
    peregrine.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.match(
    peregrine.media.alt,
    /海岸崖缘.*一只完整成年游隼.*蓝灰上体.*深色头罩.*粗黑髭纹.*黄色脚/,
  );
  assert.match(
    peregrine.media.gallery.find(({ image }) => image.includes('02-high-speed'))
      ?.alt ?? '',
    /一只完整成年游隼.*陡角俯冲.*长尖双翼后掠/,
  );
  assert.match(
    peregrine.media.gallery.find(({ image }) => image.includes('03-urban-nest'))
      ?.alt ?? '',
    /一只成年游隼.*浅巢凹.*恰好.*三枚.*卵.*没有雏鸟或枝巢/,
  );
  assert.match(
    peregrine.media.gallery.find(({ image }) => image.includes('04-aerial'))
      ?.alt ?? '',
    /一只成年游隼.*一只健康.*原鸽.*保持距离.*没有接触或伤口/,
  );
  assert.match(
    peregrine.media.gallery.find(({ image }) => image.includes('06-cliff'))
      ?.alt ?? '',
    /两名调查人员.*一台三脚架望远镜.*一只成年游隼/,
  );

  assert.equal(peregrine.sources.length, 16);
  const sourceUrls = new Set(peregrine.sources.map(({ url }) => url));
  assert.equal(sourceUrls.size, peregrine.sources.length);
  assert.ok(
    [
      'https://www.worldbirdnames.org/new/bow/falcons/',
      'https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T45354964A206217909.en',
      'https://datazone.birdlife.org/species/factsheet/peregrine-falcon-falco-peregrinus/details',
      'https://www.allaboutbirds.org/guide/Peregrine_Falcon/id',
      'https://www.allaboutbirds.org/guide/Peregrine_Falcon/lifehistory',
      'https://www.fws.gov/press-release/1999-08/peregrine-falcon-back-babbit-announces-removal-worlds-fastest-bird-endangered',
      'https://www.fws.gov/sites/default/files/federal_register_document/99-21959.pdf',
      'https://doi.org/10.1038/s41586-021-03265-0',
      'https://doi.org/10.1111/j.1474-919X.1987.tb03207.x',
      'https://doi.org/10.1242/jeb.201.3.403',
      'https://doi.org/10.15845/on.v39i0.1048',
      'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
      'https://www.forestry.gov.cn/html/main/main_5461/20210205122418860831352/file/20210205151950336764982.pdf',
      'https://www.cms.int/species/falco-peregrinus',
      'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
      'https://doi.org/10.3390/v17010024',
    ].every((url) => sourceUrls.has(url)),
  );
  assert.ok(peregrine.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(peregrine.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    peregrine.sources.every(({ accessedAt }) => accessedAt === '2026-08-26'),
  );
  assert.deepEqual(
    new Set(peregrine.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'ecology', 'general', 'distribution']),
  );

  const profileText = [
    peregrine.summary,
    peregrine.description,
    peregrine.distribution.range,
    ...peregrine.names.aliases,
    ...peregrine.tags,
    ...peregrine.storySections.flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...peregrine.keyFacts,
    ...peregrine.threats,
    ...peregrine.conservationActions,
    ...peregrine.featuredStats.flatMap(({ label, value, note }) => [
      label,
      value,
      note ?? '',
    ]),
  ].join(' ');
  assert.match(profileText, /IOC World Bird List v15\.2.*18 个亚种/);
  assert.match(
    profileText,
    /IUCN\/BirdLife 2021 年全球评估为无危.*趋势上升.*没有受胁标准代码/,
  );
  assert.match(
    profileText,
    /248,000 至 478,000.*poor.*suspected/,
  );
  assert.match(
    profileText,
    /320 千米\/小时.*高空俯冲.*(?:不代表平飞|平飞速度也低得多).*(?:每次野外捕猎|不同结果)/,
  );
  assert.match(
    profileText,
    /高纬种群.*远距离迁徙.*低纬度.*南半球种群多留居/,
  );
  assert.match(profileText, /禁用 DDT.*圈养繁育.*放归.*北美.*恢复/);
  assert.match(
    profileText,
    /中国.*红色名录.*近危.*国家.*二级.*CITES.*附录 I.*CMS.*附录 II/,
  );
  assert.match(profileText, /HPAI.*部分区域|区域性 HPAI/);
  assert.doesNotMatch(profileText, /CITES(?: 列入| 列)?附录 II/);
  assert.doesNotMatch(profileText, /所有(?:游隼|个体).*(?:长距离)?迁徙/);
  assert.doesNotMatch(profileText, /320 千米\/小时.*(?:平飞|每次).*均可达到/);
  assert.doesNotMatch(profileText, /2021 年(?:全球)?普查(?:到|出)/);

  assert.equal(peregrine.featured, true);
  assert.equal(peregrine.publishedAt, '2026-08-26');
  assert.equal(peregrine.updatedAt, '2026-08-26');
});

test('registers the Snowy Owl as a complete Bubo scandiacus profile', async () => {
  const snowyOwl = findSpecies('snowy-owl');

  assert.equal(snowyOwl.id, 'species-bubo-scandiacus');
  assert.equal(snowyOwl.names.zh, '雪鸮');
  assert.equal(snowyOwl.names.en, 'Snowy Owl');
  assert.deepEqual(snowyOwl.names.aliases, ['雪鴞', 'Nyctea scandiaca']);
  assert.equal(snowyOwl.scientificName, 'Bubo scandiacus');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(snowyOwl).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', snowyOwl.scientificName, snowyOwl.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Aves', '鸟纲'],
      ['order', 'Strigiformes', '鸮形目'],
      ['family', 'Strigidae', '鸱鸮科'],
      ['genus', 'Bubo', '雕鸮属'],
      ['species', 'Bubo scandiacus', '雪鸮'],
    ],
  );
  assert.deepEqual(
    {
      code: snowyOwl.conservation.code,
      trend: snowyOwl.conservation.trend,
      assessedYear: snowyOwl.conservation.assessedYear,
      criteria: snowyOwl.conservation.criteria,
    },
    {
      code: 'VU',
      trend: 'decreasing',
      assessedYear: 2021,
      criteria: 'A2bd+3bd+4bd',
    },
  );
  assert.deepEqual(snowyOwl.distribution.realms, ['terrestrial', 'freshwater']);
  assert.deepEqual(snowyOwl.distribution.continents, ['亚洲', '欧洲', '北美洲']);
  assert.equal(snowyOwl.distribution.countries.length, 8);
  assert.ok(snowyOwl.distribution.countries.includes('中国'));
  assert.match(
    snowyOwl.distribution.range,
    /中国大陆.*原生非繁殖季范围.*不是稳定繁殖区/,
  );

  assert.deepEqual(
    {
      min: snowyOwl.measurements.length?.min,
      max: snowyOwl.measurements.length?.max,
      unit: snowyOwl.measurements.length?.unit,
    },
    { min: 52, max: 71, unit: 'cm' },
  );
  assert.deepEqual(
    {
      min: snowyOwl.measurements.weight?.min,
      max: snowyOwl.measurements.weight?.max,
      unit: snowyOwl.measurements.weight?.unit,
    },
    { min: 1.6, max: 2.95, unit: 'kg' },
  );
  assert.deepEqual(
    {
      min: snowyOwl.measurements.wingspan?.min,
      max: snowyOwl.measurements.wingspan?.max,
      unit: snowyOwl.measurements.wingspan?.unit,
    },
    { min: 126, max: 145, unit: 'cm' },
  );
  assert.deepEqual(snowyOwl.metrics, {
    adultLengthCm: [52, 71],
    adultMassKg: [1.6, 2.95],
    wingspanCm: [126, 145],
    estimatedMatureIndividuals: [14000, 28000],
  });
  assert.equal(snowyOwl.habitats.length, 4);
  assert.equal(
    snowyOwl.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.deepEqual(
    new Set(snowyOwl.habitats.map(({ realm }) => realm)),
    new Set(['terrestrial', 'freshwater']),
  );
  assert.deepEqual(snowyOwl.diet.types, ['carnivore']);
  assert.equal(snowyOwl.diet.foods.length, 6);
  assert.equal(snowyOwl.activity.length, 6);
  assert.equal(snowyOwl.tags.length, 12);
  assert.ok(snowyOwl.tags.includes('CITES 附录 II'));
  assert.ok(snowyOwl.tags.includes('CMS 附录 II'));

  assert.equal(snowyOwl.storySections?.length, 6);
  assert.deepEqual(
    snowyOwl.storySections.map(({ key }) => key),
    [
      'plumage-sex-and-age',
      'daylight-and-darkness',
      'lemming-pulse-breeding',
      'ground-scrape-and-hatching',
      'irruption-is-not-starvation',
      'circumpolar-conservation',
    ],
  );
  assert.equal(new Set(snowyOwl.storySections.map(({ key }) => key)).size, 6);
  const storyText = snowyOwl.storySections
    .flatMap(({ label, title, body }) => [label, title, body])
    .join(' ');
  assert.match(storyText, /雄鸟.*随年龄变白.*雌鸟.*横斑.*重叠/);
  assert.match(storyText, /连续日照.*守望和扑击.*严格夜行/);
  assert.match(storyText, /旅鼠密度高.*定居.*窝卵数.*幼鸟/);
  assert.match(storyText, /侵入年.*旅鼠丰年.*高繁殖产出.*饥饿或迷路/);
  assert.match(storyText, /跨境监测.*西伯利亚.*缺少连续数据/);
  assert.equal(snowyOwl.keyFacts.length, 9);
  assert.equal(snowyOwl.threats.length, 7);
  assert.equal(snowyOwl.conservationActions.length, 10);
  assert.deepEqual(
    snowyOwl.featuredStats.map(({ key }) => key),
    ['mature-population', 'clutch-size', 'incubation', 'breeding-dispersal'],
  );
  assert.match(
    snowyOwl.featuredStats.find(({ key }) => key === 'mature-population')
      ?.note ?? '',
    /低质量估算.*不是同期全球普查/,
  );

  assert.equal(snowyOwl.media.gallery?.length, 5);
  assert.equal(snowyOwl.media.credit, 'Fauna Atlas · AI 生成原创图像');
  const mediaPaths = [
    snowyOwl.media.image,
    ...snowyOwl.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/snowy-owl/01-arctic-tundra-portrait.webp',
    './images/species/snowy-owl/02-adult-flight-field-marks.webp',
    './images/species/snowy-owl/03-treeless-tundra-habitat.webp',
    './images/species/snowy-owl/04-daylight-lemming-hunt.webp',
    './images/species/snowy-owl/05-ground-scrape-and-eggs.webp',
    './images/species/snowy-owl/06-distance-winter-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(
    !snowyOwl.media.gallery.some(({ image }) => image === snowyOwl.media.image),
  );
  const mediaRecords = [snowyOwl.media, ...snowyOwl.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.deepEqual(
    mediaRecords.map(({ focalPoint }) => focalPoint),
    [
      { x: 0.7, y: 0.52 },
      { x: 0.58, y: 0.5 },
      { x: 0.69, y: 0.51 },
      { x: 0.5, y: 0.55 },
      { x: 0.52, y: 0.58 },
      { x: 0.58, y: 0.53 },
    ],
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  await Promise.all(
    mediaPaths.map((path) =>
      access(new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url)),
    ),
  );
  assert.ok(
    snowyOwl.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.match(
    snowyOwl.media.gallery.find(({ image }) => image.includes('04-daylight'))
      ?.alt ?? '',
    /一只完整雪鸮.*一只健康小旅鼠.*没有接触或伤口/,
  );
  assert.match(
    snowyOwl.media.gallery.find(({ image }) => image.includes('05-ground'))
      ?.alt ?? '',
    /浅刮巢.*恰好有五枚.*没有枝条、雏鸟或第二只鸮/,
  );

  assert.equal(snowyOwl.sources.length, 18);
  assert.equal(
    new Set(snowyOwl.sources.map(({ url }) => url)).size,
    snowyOwl.sources.length,
  );
  assert.ok(snowyOwl.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(snowyOwl.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    snowyOwl.sources.every(({ accessedAt }) => accessedAt === '2026-08-26'),
  );
  assert.deepEqual(
    new Set(snowyOwl.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'ecology', 'general', 'distribution']),
  );
  const sourceUrls = new Set(snowyOwl.sources.map(({ url }) => url));
  assert.ok(
    [
      'https://www.worldbirdnames.org/new/bow/owls/',
      'https://doi.org/10.2305/IUCN.UK.2021-3.RLTS.T22689055A205475036.en',
      'https://doi.org/10.1017/S0959270924000248',
      'https://www.allaboutbirds.org/guide/Snowy_Owl/id',
      'https://www.mee.gov.cn/xxgk2018/xxgk/xxgk01/202305/W020230522536559098623.pdf',
      'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    ].every((url) => sourceUrls.has(url)),
  );

  const profileText = [
    snowyOwl.summary,
    snowyOwl.description,
    ...snowyOwl.keyFacts,
    ...snowyOwl.tags,
  ].join(' ');
  assert.match(profileText, /IUCN\/BirdLife 2021.*VU.*趋势下降/);
  assert.match(profileText, /14,000 至 28,000/);
  assert.match(profileText, /中国.*红色名录.*易危.*国家.*二级.*CITES.*附录 II.*CMS.*附录 II/);
  assert.doesNotMatch(profileText, /严格夜行物种|所有雪鸮.*饥饿.*南下/);

  assert.equal(snowyOwl.featured, true);
  assert.equal(snowyOwl.publishedAt, '2026-08-26');
  assert.equal(snowyOwl.updatedAt, '2026-08-26');
});

test('registers the Green Peafowl as a complete Pavo muticus profile', async () => {
  const greenPeafowl = findSpecies('green-peafowl');

  assert.equal(greenPeafowl.id, 'species-pavo-muticus');
  assert.equal(greenPeafowl.names.zh, '绿孔雀');
  assert.equal(greenPeafowl.names.en, 'Green Peafowl');
  assert.deepEqual(greenPeafowl.names.aliases, ['綠孔雀', '爪哇孔雀']);
  assert.equal(greenPeafowl.scientificName, 'Pavo muticus');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(greenPeafowl).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', greenPeafowl.scientificName, greenPeafowl.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Aves', '鸟纲'],
      ['order', 'Galliformes', '鸡形目'],
      ['family', 'Phasianidae', '雉科'],
      ['genus', 'Pavo', '孔雀属'],
      ['species', 'Pavo muticus', '绿孔雀'],
    ],
  );
  assert.deepEqual(
    {
      code: greenPeafowl.conservation.code,
      trend: greenPeafowl.conservation.trend,
      assessedYear: greenPeafowl.conservation.assessedYear,
      criteria: greenPeafowl.conservation.criteria,
    },
    {
      code: 'EN',
      trend: 'decreasing',
      assessedYear: 2018,
      criteria: 'A2cd+3cd+4cd',
    },
  );

  assert.deepEqual(greenPeafowl.distribution.realms, ['terrestrial']);
  assert.deepEqual(greenPeafowl.distribution.continents, ['亚洲']);
  assert.equal(greenPeafowl.distribution.regions.length, 3);
  assert.deepEqual(greenPeafowl.distribution.countries, [
    '中国',
    '缅甸',
    '泰国',
    '老挝',
    '柬埔寨',
    '越南',
    '印度尼西亚',
  ]);
  assert.ok(!('endemicTo' in greenPeafowl.distribution));
  assert.ok(!('center' in greenPeafowl.distribution));
  assert.match(
    greenPeafowl.distribution.range,
    /中国云南、缅甸、泰国、老挝、柬埔寨、越南和印度尼西亚.*中国现存野生种群仅见于云南/,
  );

  assert.deepEqual(Object.keys(greenPeafowl.measurements), ['length']);
  assert.deepEqual(
    {
      min: greenPeafowl.measurements.length?.min,
      max: greenPeafowl.measurements.length?.max,
      unit: greenPeafowl.measurements.length?.unit,
    },
    { min: 100, max: 244, unit: 'cm' },
  );
  assert.match(
    greenPeafowl.measurements.length?.note ?? '',
    /雌鸟.*100.*110.*雄鸟.*244.*(?:尾屏|尾上覆羽)/,
  );
  assert.deepEqual(greenPeafowl.metrics, {
    elevationM: [0, 2100],
    estimatedMatureIndividuals: [10000, 19999],
  });
  assert.ok(!('adultLengthCm' in greenPeafowl.metrics));
  assert.ok(!('adultMassKg' in greenPeafowl.metrics));
  assert.ok(!('wingspanCm' in greenPeafowl.metrics));

  assert.equal(greenPeafowl.habitats.length, 4);
  assert.equal(
    greenPeafowl.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(greenPeafowl.habitats.every(({ realm }) => realm === 'terrestrial'));
  assert.deepEqual(greenPeafowl.diet.types, ['omnivore']);
  assert.equal(greenPeafowl.diet.foods.length, 4);
  assert.equal(greenPeafowl.activity.length, 6);
  assert.equal(greenPeafowl.tags.length, 12);
  assert.ok(greenPeafowl.tags.some((tag) => /国家一级/.test(tag)));
  assert.ok(greenPeafowl.tags.some((tag) => /CITES 附录 II/.test(tag)));

  assert.equal(greenPeafowl.storySections?.length, 6);
  assert.deepEqual(
    greenPeafowl.storySections.map(({ key }) => key),
    [
      'identity',
      'river-valley',
      'daily-rhythm',
      'courtship-and-nest',
      'last-wild-populations-in-china',
      'protection-beyond-reserves',
    ],
  );
  assert.equal(new Set(greenPeafowl.storySections.map(({ key }) => key)).size, 6);
  const storyText = greenPeafowl.storySections
    .flatMap(({ label, title, body }) => [label, title, body])
    .join(' ');
  assert.match(storyText, /不是蓝孔雀的绿色变型/);
  assert.match(storyText, /高而窄.*直立冠羽.*鳞片般排列的绿色颈羽/);
  assert.match(storyText, /河流或湿地.*干燥落叶林.*疏林.*草地/);
  assert.match(storyText, /地面觅食.*(?:高树夜栖|飞上高树)/);
  assert.match(storyText, /尾屏.*尾上覆羽.*(?:真正尾羽|真尾)/);
  assert.match(storyText, /中国(?:现存范围|可靠现存记录).*云南.*元江中上游/);
  assert.match(storyText, /保护地外.*保护需要连接.*河谷/);
  assert.equal(greenPeafowl.keyFacts.length, 10);
  assert.equal(greenPeafowl.threats.length, 6);
  assert.equal(greenPeafowl.conservationActions.length, 8);
  assert.equal(greenPeafowl.featuredStats.length, 4);
  assert.deepEqual(
    greenPeafowl.featuredStats.map(({ key }) => key),
    [
      'global-mature-population',
      'yunnan-wild-monitoring',
      'adult-length',
      'clutch-and-incubation',
    ],
  );

  assert.equal(greenPeafowl.media.gallery?.length, 5);
  assert.equal(greenPeafowl.media.credit, 'Fauna Atlas · AI 生成原创图像');
  const mediaPaths = [
    greenPeafowl.media.image,
    ...greenPeafowl.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/green-peafowl/01-yunnan-river-valley-male-portrait.webp',
    './images/species/green-peafowl/02-adult-female-field-marks.webp',
    './images/species/green-peafowl/03-seasonal-river-valley-habitat.webp',
    './images/species/green-peafowl/04-male-courtship-train-display.webp',
    './images/species/green-peafowl/05-ground-scrape-and-four-eggs.webp',
    './images/species/green-peafowl/06-distance-riverbank-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !greenPeafowl.media.gallery.some(
      ({ image }) => image === greenPeafowl.media.image,
    ),
  );
  const mediaRecords = [greenPeafowl.media, ...greenPeafowl.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.deepEqual(
    mediaRecords.map(({ focalPoint }) => focalPoint),
    [
      { x: 0.69, y: 0.52 },
      { x: 0.56, y: 0.5 },
      { x: 0.68, y: 0.57 },
      { x: 0.52, y: 0.52 },
      { x: 0.52, y: 0.6 },
      { x: 0.58, y: 0.56 },
    ],
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  await Promise.all(
    mediaPaths.map((path) =>
      access(new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url)),
    ),
  );
  assert.ok(
    greenPeafowl.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.match(
    greenPeafowl.media.alt,
    /一只完整成年雄性绿孔雀.*高窄冠羽.*鳞状绿色颈羽.*折叠长尾屏/,
  );
  const femaleMedia = greenPeafowl.media.gallery.find(({ image }) =>
    image.includes('02-adult-female'),
  );
  assert.match(
    [femaleMedia?.alt, femaleMedia?.caption].join(' '),
    /一只完整成年雌性绿孔雀.*绿色鳞状颈羽.*没有雄鸟长尾屏/,
  );
  const displayMedia = greenPeafowl.media.gallery.find(({ image }) =>
    image.includes('04-male-courtship'),
  );
  assert.match(
    [displayMedia?.alt, displayMedia?.title, displayMedia?.caption].join(' '),
    /只有一只完整成年雄性绿孔雀.*眼状斑尾屏.*延长的尾上覆羽/,
  );
  assert.match(
    greenPeafowl.media.gallery.find(({ image }) => image.includes('05-ground'))?.alt ?? '',
    /一只完整成年雌性绿孔雀.*地面浅窝.*恰好四枚.*没有雄鸟、雏鸟或第五枚卵/,
  );
  assert.match(
    greenPeafowl.media.gallery.find(({ image }) => image.includes('06-distance'))?.alt ?? '',
    /两名.*观察者.*一台三脚架望远镜.*一只完整雌性绿孔雀/,
  );

  assert.equal(greenPeafowl.sources.length, 19);
  assert.equal(
    new Set(greenPeafowl.sources.map(({ url }) => url)).size,
    greenPeafowl.sources.length,
  );
  assert.ok(greenPeafowl.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(greenPeafowl.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    greenPeafowl.sources.every(({ accessedAt }) => accessedAt === '2026-08-26'),
  );
  assert.deepEqual(
    new Set(greenPeafowl.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'ecology', 'general', 'distribution']),
  );
  const sourceUrls = new Set(greenPeafowl.sources.map(({ url }) => url));
  assert.ok(
    [
      'https://www.worldbirdnames.org/new/bow/pheasants/',
      'https://datazone.birdlife.org/species/factsheet/green-peafowl-pavo-muticus',
      'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22679440A131749282.en',
      'https://doi.org/10.1186/s40657-018-0110-0',
      'https://li01.tci-thaijo.org/index.php/tjf/article/view/256671',
      'https://www.sciencedirect.com/science/article/pii/S1978301916302054',
      'https://sdr.cas.cn/zcgz/gjfg/202306/P020230523325260524862.pdf',
      'https://www.forestry.gov.cn/main/3457/20210205/122612568723707.html',
      'https://www.forestry.gov.cn/lyj/1/dzbhdt/20260818/684856.html',
      'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
      'https://www.cms.int/species/appendix-i-ii-cms',
    ].every((url) => sourceUrls.has(url)),
  );

  const profileText = [
    greenPeafowl.summary,
    greenPeafowl.description,
    greenPeafowl.distribution.range,
    greenPeafowl.measurements.length?.note ?? '',
    greenPeafowl.diet.description,
    ...greenPeafowl.tags,
    ...greenPeafowl.storySections.flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...greenPeafowl.keyFacts,
    ...greenPeafowl.threats,
    ...greenPeafowl.conservationActions,
    ...greenPeafowl.featuredStats.flatMap(({ label, value, note }) => [
      label,
      value,
      note ?? '',
    ]),
  ].join(' ');
  assert.match(
    greenPeafowl.description,
    /IUCN\/BirdLife 2018 全球评估为 EN、趋势下降.*中国 2020 区域红色名录.*A2cd\+3cd\+4cd.*CR/,
  );
  assert.match(
    greenPeafowl.featuredStats.find(
      ({ key }) => key === 'yunnan-wild-monitoring',
    )?.note ?? '',
    /未分年龄.*不与全球成熟个体区间直接比较/,
  );
  assert.match(profileText, /IUCN\/BirdLife 2018 全球评估为 EN、趋势下降/);
  assert.match(profileText, /全球.*10,000.*19,999.*成熟个体.*(?:poor|低质量)/);
  assert.match(profileText, /中国.*红色名录.*(?:CR|极危).*国家.*一级/);
  assert.match(
    profileText,
    /云南.*(?:超过 )?1,000 只.*(?:未分龄|未分年龄|未注明全部为成熟个体)/,
  );
  assert.match(
    profileText,
    /全球.*成熟个体.*云南.*(?:未分龄|未分年龄|未注明全部为成熟个体).*(?:不能|不可).*直接比较/,
  );
  assert.match(profileText, /尾屏.*(?:延长的)?尾上覆羽.*(?:不是|并非).*真正尾羽/);
  assert.match(profileText, /CMS.*(?:未列入|附录没有)/);
  assert.doesNotMatch(profileText, /全球(?:现存)?(?:野生)?种群仅(?:见于|分布于)云南/);
  assert.doesNotMatch(profileText, /CMS(?: 已| 被| 将本种)?列入.*附录 [IⅡ12]/);
  assert.ok(!greenPeafowl.tags.some((tag) => /^CMS 附录/.test(tag)));

  assert.equal(greenPeafowl.featured, true);
  assert.equal(greenPeafowl.publishedAt, '2026-08-26');
  assert.equal(greenPeafowl.updatedAt, '2026-08-26');
});

test('registers the Arctic Tern as a complete Sterna paradisaea profile', async () => {
  const arcticTern = findSpecies('arctic-tern');

  assert.equal(arcticTern.id, 'species-sterna-paradisaea');
  assert.equal(arcticTern.names.zh, '北极燕鸥');
  assert.equal(arcticTern.names.en, 'Arctic Tern');
  assert.deepEqual(arcticTern.names.aliases, ['北極燕鷗']);
  assert.equal(arcticTern.scientificName, 'Sterna paradisaea');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(arcticTern).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', arcticTern.scientificName, arcticTern.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Aves', '鸟纲'],
      ['order', 'Charadriiformes', '鸻形目'],
      ['family', 'Laridae', '鸥科'],
      ['genus', 'Sterna', '燕鸥属'],
      ['species', 'Sterna paradisaea', '北极燕鸥'],
    ],
  );
  assert.deepEqual(
    {
      code: arcticTern.conservation.code,
      trend: arcticTern.conservation.trend,
      assessedYear: arcticTern.conservation.assessedYear,
      criteria: arcticTern.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'decreasing',
      assessedYear: 2018,
      criteria: undefined,
    },
  );
  assert.ok(!('criteria' in arcticTern.conservation));

  assert.deepEqual(arcticTern.distribution.realms, [
    'marine',
    'terrestrial',
    'freshwater',
  ]);
  assert.ok(
    ['亚洲', '欧洲', '北美洲', '南美洲', '非洲', '大洋洲', '南极洲'].every(
      (continent) => arcticTern.distribution.continents.includes(continent),
    ),
  );
  assert.ok(!('endemicTo' in arcticTern.distribution));
  assert.ok(!('center' in arcticTern.distribution));
  assert.match(
    arcticTern.distribution.range,
    /(?:环北极|北极周缘).*(?:亚北极|副北极).*繁殖|繁殖.*(?:环北极|北极周缘).*(?:亚北极|副北极)/,
  );
  assert.match(
    arcticTern.distribution.range,
    /非繁殖季.*南大洋.*(?:南极浮冰缘|南极海冰边缘)|南大洋.*(?:南极浮冰缘|南极海冰边缘).*非繁殖/,
  );

  assert.ok(arcticTern.habitats.length >= 3);
  assert.equal(
    arcticTern.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.deepEqual(
    new Set(arcticTern.habitats.map(({ realm }) => realm)),
    new Set(['marine', 'terrestrial', 'freshwater']),
  );
  assert.ok(
    arcticTern.diet.types.some((type) =>
      ['piscivore', 'carnivore'].includes(type),
    ),
  );
  assert.ok(arcticTern.diet.foods.length > 0);
  assert.ok((arcticTern.activity?.length ?? 0) > 0);
  assert.ok(arcticTern.tags.length > 0);

  assert.equal(arcticTern.storySections?.length, 6);
  assert.equal(
    new Set(arcticTern.storySections.map(({ key }) => key)).size,
    6,
  );
  assert.ok(
    arcticTern.storySections.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(arcticTern.keyFacts.length >= 6);
  assert.ok(arcticTern.threats.length >= 5);
  assert.ok(arcticTern.conservationActions.length >= 5);
  assert.equal(arcticTern.featuredStats.length, 4);
  assert.equal(
    new Set(arcticTern.featuredStats.map(({ key }) => key)).size,
    4,
  );
  const migrationDistanceStat = arcticTern.featuredStats.find(
    ({ value }) => value === '70,900',
  );
  assert.ok(migrationDistanceStat);
  assert.equal(migrationDistanceStat.unit, '千米');
  assert.match(
    [migrationDistanceStat.label, migrationDistanceStat.note].join(' '),
    /11\s*只.*59,500.*81,600.*(?:不代表|不能代表|不可外推|不能外推).*(?:全种|所有|每只|普遍|固定)/,
  );

  assert.equal(arcticTern.media.gallery?.length, 5);
  assert.equal(arcticTern.media.credit, 'Fauna Atlas · AI 生成原创图像');
  const mediaPaths = [
    arcticTern.media.image,
    ...arcticTern.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/arctic-tern/01-arctic-coast-breeding-adult.webp',
    './images/species/arctic-tern/02-flight-field-marks.webp',
    './images/species/arctic-tern/03-antarctic-pack-ice-migration.webp',
    './images/species/arctic-tern/04-shallow-plunge-foraging.webp',
    './images/species/arctic-tern/05-ground-scrape-and-two-eggs.webp',
    './images/species/arctic-tern/06-distance-colony-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !arcticTern.media.gallery.some(
      ({ image }) => image === arcticTern.media.image,
    ),
  );
  const mediaRecords = [arcticTern.media, ...arcticTern.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  await Promise.all(
    mediaPaths.map((path) =>
      access(new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url)),
    ),
  );
  assert.ok(
    arcticTern.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  const fieldMarksMedia = arcticTern.media.gallery.find(({ image }) =>
    image.includes('02-flight-field-marks'),
  );
  assert.match(
    [fieldMarksMedia?.alt, fieldMarksMedia?.caption].join(' '),
    /红(?:色)?喙.*(?:短腿|腿短).*(?:长.*深(?:叉|分叉).*尾|尾.*长.*深(?:叉|分叉))/,
  );
  assert.match(
    arcticTern.media.gallery.find(({ image }) =>
      image.includes('04-shallow-plunge-foraging'),
    )?.alt ?? '',
    /(?:浅水|近水面|表层).*(?:扎水|俯冲|浅潜).*(?:鱼|捕食)/,
  );
  assert.match(
    arcticTern.media.gallery.find(({ image }) =>
      image.includes('05-ground-scrape-and-two-eggs'),
    )?.alt ?? '',
    /(?:地面浅窝|地面刮巢|浅刮巢).*(?:恰好)?两枚.*卵/,
  );
  assert.match(
    arcticTern.media.gallery.find(({ image }) =>
      image.includes('06-distance-colony-monitoring'),
    )?.alt ?? '',
    /(?:调查人员|研究人员|观察者).*(?:远距离|安全距离|三脚架望远镜)/,
  );

  assert.ok(arcticTern.sources.length >= 5);
  assert.equal(
    new Set(arcticTern.sources.map(({ url }) => url)).size,
    arcticTern.sources.length,
  );
  assert.ok(arcticTern.sources.every(({ title }) => title.length > 0));
  assert.ok(arcticTern.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(arcticTern.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    arcticTern.sources.every(({ accessedAt }) => accessedAt === '2026-08-26'),
  );
  assert.deepEqual(
    new Set(arcticTern.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'ecology', 'general', 'distribution']),
  );
  const sourceUrls = new Set(arcticTern.sources.map(({ url }) => url));
  assert.ok(
    [
      'https://www.worldbirdnames.org/new/bow/gulls/',
      'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22694629A132065195.en',
      'https://datazone.birdlife.org/species/factsheet/arctic-tern-sterna-paradisaea',
      'https://doi.org/10.1073/pnas.0909493107',
      'https://www.bto.org/learn/about-birds/birdfacts/arctic-tern',
    ].every((url) => sourceUrls.has(url)),
  );

  const profileText = [
    arcticTern.summary,
    arcticTern.description,
    arcticTern.distribution.range,
    ...arcticTern.names.aliases,
    ...arcticTern.habitats.map(({ description }) => description),
    arcticTern.diet.description,
    ...(arcticTern.activity ?? []),
    ...arcticTern.tags,
    ...arcticTern.storySections.flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...arcticTern.keyFacts,
    ...arcticTern.threats,
    ...arcticTern.conservationActions,
    ...arcticTern.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
  ].join(' ');
  assert.match(profileText, /(?:完整|完全)迁徙(?:型|物种)|full migrant/i);
  assert.match(
    profileText,
    /11\s*只.*(?:追踪|跟踪).*(?:平均|均值).*70,900.*59,500.*81,600|(?:追踪|跟踪).*11\s*只.*(?:平均|均值).*70,900.*59,500.*81,600/,
  );
  assert.match(
    profileText,
    /(?:北返|北迁|向北).*40\s*天.*(?:南下|南迁|向南).*93\s*天/,
  );
  assert.match(
    profileText,
    /(?:单型种|单型物种|monotypic).*(?:没有|不承认|无).*亚种|(?:没有|不承认|无).*亚种.*(?:单型种|单型物种|monotypic)/i,
  );
  assert.match(profileText, /红(?:色)?喙/);
  assert.match(profileText, /(?:短腿|腿(?:较)?短)/);
  assert.match(
    profileText,
    /(?:长.*深(?:叉|分叉).*尾|尾.*长.*深(?:叉|分叉))/,
  );
  assert.match(
    profileText,
    /(?:每窝|窝卵数).*(?:1\s*(?:至|—|-|~)\s*2|一至两|一到两)枚.*(?:偶尔|偶见|有时).*(?:3|三)枚/,
  );
  assert.match(
    profileText,
    /孵化(?:期)?.*(?:21\s*(?:至|—|-|~)\s*22)天/,
  );
  assert.match(
    profileText,
    /(?:IUCN\s*\/\s*BirdLife|BirdLife\s*\/\s*IUCN).*2018.*(?:无危|LC).*(?:趋势下降|下降趋势)/,
  );
  assert.match(
    profileText,
    /(?:无危|LC).*(?:不等于|不代表|不意味着).*(?:稳定|没有风险|各地安全|局地)/,
  );
  assert.match(
    profileText,
    /(?:局地|部分繁殖地|繁殖群落).*(?:繁殖失败|连续失败|下降|消失)/,
  );
  assert.doesNotMatch(
    profileText,
    /(?:所有|每只|每一只)北极燕鸥.*(?:70,900|7\.09\s*万)/,
  );

  assert.equal(arcticTern.featured, true);
  assert.equal(arcticTern.publishedAt, '2026-08-26');
  assert.equal(arcticTern.updatedAt, '2026-08-26');
});

test('registers the Common Ostrich as a complete Struthio camelus profile', async () => {
  const ostrich = findSpecies('african-ostrich');

  assert.equal(ostrich.id, 'species-struthio-camelus');
  assert.equal(ostrich.names.zh, '非洲鸵鸟');
  assert.equal(ostrich.names.en, 'Common Ostrich');
  assert.ok(ostrich.names.aliases.includes('鴕鳥'));
  assert.ok(ostrich.names.aliases.includes('African Ostrich'));
  assert.equal(ostrich.scientificName, 'Struthio camelus');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(ostrich).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', ostrich.scientificName, ostrich.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Aves', '鸟纲'],
      ['order', 'Struthioniformes', '鸵鸟目'],
      ['family', 'Struthionidae', '鸵鸟科'],
      ['genus', 'Struthio', '鸵鸟属'],
      ['species', 'Struthio camelus', '非洲鸵鸟'],
    ],
  );
  assert.deepEqual(
    {
      code: ostrich.conservation.code,
      trend: ostrich.conservation.trend,
      assessedYear: ostrich.conservation.assessedYear,
      criteria: ostrich.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'decreasing',
      assessedYear: 2025,
      criteria: undefined,
    },
  );
  assert.ok(!('criteria' in ostrich.conservation));

  assert.deepEqual(ostrich.distribution.realms, ['terrestrial']);
  assert.deepEqual(ostrich.distribution.continents, ['非洲']);
  assert.ok(!('endemicTo' in ostrich.distribution));
  assert.ok(!('center' in ostrich.distribution));
  assert.match(
    ostrich.distribution.range,
    /非洲.*(?:稀树草原|草原|半干旱|灌丛)|(?:稀树草原|草原|半干旱|灌丛).*非洲/,
  );

  assert.ok(ostrich.habitats.length >= 3);
  assert.equal(ostrich.habitats.filter(({ isPrimary }) => isPrimary).length, 1);
  assert.ok(ostrich.habitats.every(({ realm }) => realm === 'terrestrial'));
  assert.ok(ostrich.diet.types.includes('omnivore'));
  assert.ok(ostrich.diet.foods.length > 0);
  assert.ok((ostrich.activity?.length ?? 0) > 0);
  assert.ok(ostrich.tags.length > 0);

  assert.deepEqual(
    {
      min: ostrich.measurements.height?.min,
      max: ostrich.measurements.height?.max,
      unit: ostrich.measurements.height?.unit,
    },
    { min: 1.7, max: 2.7, unit: 'm' },
  );
  assert.match(
    ostrich.measurements.height?.note ?? '',
    /雌(?:鸟|性)?.*1\.7\s*(?:至|—|-|~)\s*1\.9\s*米.*雄(?:鸟|性)?.*2\.1\s*(?:至|—|-|~)\s*2\.7\s*米/,
  );
  assert.deepEqual(
    {
      min: ostrich.measurements.weight?.min,
      max: ostrich.measurements.weight?.max,
      unit: ostrich.measurements.weight?.unit,
    },
    { min: 90, max: 130, unit: 'kg' },
  );
  assert.match(
    ostrich.measurements.weight?.note ?? '',
    /雌(?:鸟|性)?.*90\s*(?:至|—|-|~)\s*110\s*千克.*雄(?:鸟|性)?.*100\s*(?:至|—|-|~)\s*130\s*千克/,
  );
  assert.ok(!('adultLengthCm' in ostrich.metrics));
  assert.deepEqual(ostrich.metrics.adultMassKg, [90, 130]);
  assert.ok(!('topSpeedKph' in ostrich.metrics));

  assert.equal(ostrich.storySections?.length, 6);
  assert.equal(new Set(ostrich.storySections.map(({ key }) => key)).size, 6);
  assert.ok(
    ostrich.storySections.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(ostrich.keyFacts.length >= 8);
  assert.ok(ostrich.threats.length >= 5);
  assert.ok(ostrich.conservationActions.length >= 5);
  assert.equal(ostrich.featuredStats.length, 4);
  assert.equal(new Set(ostrich.featuredStats.map(({ key }) => key)).size, 4);

  assert.equal(ostrich.media.gallery?.length, 5);
  assert.equal(ostrich.media.credit, 'Fauna Atlas · AI 生成原创图像');
  const mediaPaths = [
    ostrich.media.image,
    ...ostrich.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/african-ostrich/01-open-savanna-adult-male-portrait.webp',
    './images/species/african-ostrich/02-adult-female-field-marks.webp',
    './images/species/african-ostrich/03-semi-arid-savanna-habitat.webp',
    './images/species/african-ostrich/04-two-toed-running-stride.webp',
    './images/species/african-ostrich/05-communal-ground-nest-and-eggs.webp',
    './images/species/african-ostrich/06-distance-savanna-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !ostrich.media.gallery.some(({ image }) => image === ostrich.media.image),
  );
  const mediaRecords = [ostrich.media, ...ostrich.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  await Promise.all(
    mediaPaths.map((path) =>
      access(new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url)),
    ),
  );
  assert.ok(
    ostrich.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.match(
    ostrich.media.alt,
    /(?:恰好|只有)?一只完整成年雄性非洲鸵鸟.*黑色体羽.*白色(?:飞羽|翼羽|翅羽|尾羽)/,
  );
  const femaleMedia = ostrich.media.gallery.find(({ image }) =>
    image.includes('02-adult-female-field-marks'),
  );
  assert.match(
    [femaleMedia?.alt, femaleMedia?.caption].join(' '),
    /(?:恰好|只有)?一只完整成年雌性非洲鸵鸟.*灰褐(?:色)?体羽.*(?:浅色|较淡).*(?:翼|尾)/,
  );
  const habitatMedia = ostrich.media.gallery.find(({ image }) =>
    image.includes('03-semi-arid-savanna-habitat'),
  );
  assert.match(
    [habitatMedia?.alt, habitatMedia?.caption].join(' '),
    /半干旱.*(?:稀树草原|草原).*(?:灌丛|开阔地).*(?:恰好|只有)?一只.*非洲鸵鸟/,
  );
  const runningMedia = ostrich.media.gallery.find(({ image }) =>
    image.includes('04-two-toed-running-stride'),
  );
  const runningMediaText = [runningMedia?.alt, runningMedia?.caption].join(' ');
  assert.match(
    runningMediaText,
    /(?:奔跑|跑动).*后脚.*两(?:个|枚)向前脚趾.*前脚.*(?:重叠|遮挡)/,
  );
  assert.match(
    runningMediaText,
    /每只脚.*两(?:个|枚)向前脚趾.*不能作为.*解剖图/,
  );
  assert.match(
    runningMediaText,
    /短翼.*(?:平衡|转向).*(?:单帧|画面).*(?:不证明|不能证明)/,
  );
  assert.match(
    ostrich.media.gallery.find(({ image }) =>
      image.includes('05-communal-ground-nest-and-eggs'),
    )?.alt ?? '',
    /一只完整成年雌性非洲鸵鸟.*(?:共同|公共)?地面浅(?:刮巢|窝).*(?:多枚|数枚|八枚).*卵/,
  );
  assert.match(
    ostrich.media.gallery.find(({ image }) =>
      image.includes('06-distance-savanna-monitoring'),
    )?.alt ?? '',
    /(?:恰好)?两名.*观察者.*一台三脚架望远镜.*(?:远处|远距离).*(?:恰好|只有)?一只.*非洲鸵鸟/,
  );

  assert.ok(ostrich.sources.length >= 5);
  assert.equal(
    new Set(ostrich.sources.map(({ url }) => url)).size,
    ostrich.sources.length,
  );
  assert.ok(ostrich.sources.every(({ title }) => title.length > 0));
  assert.ok(ostrich.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(ostrich.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    ostrich.sources.every(({ accessedAt }) => accessedAt === '2026-08-26'),
  );
  assert.deepEqual(
    new Set(ostrich.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'ecology', 'general', 'distribution']),
  );

  const profileText = [
    ostrich.summary,
    ostrich.description,
    ostrich.distribution.range,
    ...ostrich.names.aliases,
    ...ostrich.habitats.map(({ description }) => description),
    ostrich.measurements.height?.note ?? '',
    ostrich.measurements.weight?.note ?? '',
    ostrich.diet.description,
    ...(ostrich.activity ?? []),
    ...ostrich.tags,
    ...ostrich.storySections.flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...ostrich.keyFacts,
    ...ostrich.threats,
    ...ostrich.conservationActions,
    ...ostrich.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
  ].join(' ');
  assert.match(
    profileText,
    /IOC.*(?:4|四)(?:个|个获承认的)?亚种.*(?:3|三)(?:个)?现生.*(?:syriacus|阿拉伯鸵鸟).*(?:约)?\s*1966.*灭绝/i,
  );
  assert.match(
    profileText,
    /Struthio molybdophanes.*(?:独立物种|独立种).*(?:不是|不再作为).*亚种|(?:不是|不再作为).*亚种.*Struthio molybdophanes.*(?:独立物种|独立种)/i,
  );
  assert.match(profileText, /现存最大(?:的)?鸟类/);
  assert.match(
    profileText,
    /(?:2\.7|2\.70)\s*米.*130\s*千克.*(?:上限|范围顶端|极值|最大).*(?:不代表|并非|不是).*(?:普通|典型|所有)/,
  );
  assert.match(
    profileText,
    /48\s*(?:至|—|-|~)\s*59\s*(?:千米\/小时|公里\/小时|km\/h).*(?:持续|较长时间).*69\s*(?:千米\/小时|公里\/小时|km\/h).*(?:短时|瞬时|峰值)/i,
  );
  assert.match(profileText, /(?:每只脚|双脚).*两(?:个|枚)(?:向前)?脚趾/);
  assert.match(
    profileText,
    /翅膀.*(?:平衡|转向|制动|求偶).*(?:不能飞|不会飞|飞行退化)|(?:不能飞|不会飞|飞行退化).*翅膀.*(?:平衡|转向|制动|求偶)/,
  );
  assert.match(profileText, /(?:共同巢|公共巢).*(?:多只|数只).*雌鸟.*产卵/);
  assert.match(
    profileText,
    /雌(?:鸟|性).*(?:7\s*(?:至|—|-|~)\s*10|七至十)枚.*卵/,
  );
  assert.match(
    profileText,
    /孵化(?:期)?.*42\s*(?:至|—|-|~)\s*46\s*天.*雌鸟.*(?:白天|日间).*雄鸟.*(?:夜间|夜里)/,
  );
  assert.match(
    profileText,
    /(?:IUCN\s*\/\s*BirdLife|BirdLife\s*\/\s*IUCN).*2025.*(?:无危|LC).*(?:趋势下降|下降趋势)/,
  );
  assert.match(
    profileText,
    /(?:无危|LC).*(?:不等于|不代表|不意味着).*(?:区域|各地|亚种|种群).*(?:安全|稳定|没有风险)/,
  );
  assert.match(
    profileText,
    /(?:把头埋进沙里|将头埋进沙中).*(?:神话|误解|不实)|(?:不会|并不|没有).*头.*埋.*沙/,
  );
  assert.doesNotMatch(
    profileText,
    /(?:躲避危险|受惊|害怕).{0,12}(?:把|将)?头.{0,8}埋.{0,8}沙/,
  );
  assert.doesNotMatch(
    profileText,
    /Struthio molybdophanes.{0,30}(?:是|作为|属于).*Struthio camelus.{0,20}亚种/i,
  );

  assert.equal(ostrich.featured, true);
  assert.equal(ostrich.publishedAt, '2026-08-26');
  assert.equal(ostrich.updatedAt, '2026-08-26');
});

test('registers the Tuatara as a complete Sphenodon punctatus profile', async () => {
  const tuatara = findSpecies('tuatara');

  assert.equal(tuatara.id, 'species-sphenodon-punctatus');
  assert.equal(tuatara.names.zh, '喙头蜥');
  assert.equal(tuatara.names.en, 'Tuatara');
  assert.deepEqual(tuatara.names.aliases, ['楔齿蜥']);
  assert.equal(tuatara.scientificName, 'Sphenodon punctatus');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(tuatara).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', tuatara.scientificName, tuatara.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Reptilia', '爬行纲'],
      ['order', 'Rhynchocephalia', '喙头目'],
      ['family', 'Sphenodontidae', '楔齿蜥科'],
      ['genus', 'Sphenodon', '楔齿蜥属'],
      ['species', 'Sphenodon punctatus', '喙头蜥'],
    ],
  );
  assert.deepEqual(
    {
      code: tuatara.conservation.code,
      trend: tuatara.conservation.trend,
      assessedYear: tuatara.conservation.assessedYear,
      criteria: tuatara.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'unknown',
      assessedYear: 2019,
      criteria: undefined,
    },
  );
  assert.ok(!('criteria' in tuatara.conservation));

  assert.deepEqual(tuatara.distribution.realms, ['terrestrial']);
  assert.deepEqual(tuatara.distribution.continents, ['大洋洲']);
  assert.deepEqual(tuatara.distribution.countries, ['新西兰']);
  assert.deepEqual(tuatara.distribution.endemicTo, ['新西兰']);
  assert.ok(!('center' in tuatara.distribution));
  assert.match(
    tuatara.distribution.range,
    /新西兰.*(?:岛屿|围栏保护地).*(?:迁移恢复|恢复)|(?:岛屿|围栏保护地).*(?:迁移恢复|恢复).*新西兰/,
  );

  assert.ok(tuatara.habitats.length >= 3);
  assert.equal(tuatara.habitats.filter(({ isPrimary }) => isPrimary).length, 1);
  assert.ok(tuatara.habitats.every(({ realm }) => realm === 'terrestrial'));
  assert.ok(tuatara.diet.types.includes('carnivore'));
  assert.ok(tuatara.diet.types.includes('insectivore'));
  assert.ok(!tuatara.diet.types.includes('herbivore'));
  assert.ok((tuatara.activity?.length ?? 0) > 0);
  assert.ok(tuatara.tags.length > 0);

  assert.deepEqual(
    {
      typical: tuatara.measurements.length?.typical,
      max: tuatara.measurements.length?.max,
      unit: tuatara.measurements.length?.unit,
    },
    { typical: 0.5, max: undefined, unit: 'm' },
  );
  assert.deepEqual(
    {
      max: tuatara.measurements.weight?.max,
      unit: tuatara.measurements.weight?.unit,
    },
    { max: 1.5, unit: 'kg' },
  );
  assert.deepEqual(tuatara.metrics, {});

  assert.equal(tuatara.storySections?.length, 6);
  assert.equal(new Set(tuatara.storySections.map(({ key }) => key)).size, 6);
  assert.ok(
    tuatara.storySections.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(tuatara.keyFacts.length >= 8);
  assert.ok(tuatara.threats.length >= 5);
  assert.ok(tuatara.conservationActions.length >= 5);
  assert.equal(tuatara.featuredStats.length, 4);
  assert.equal(new Set(tuatara.featuredStats.map(({ key }) => key)).size, 4);

  assert.equal(tuatara.media.gallery?.length, 5);
  assert.equal(tuatara.media.credit, 'Fauna Atlas · AI 生成原创图像');
  const mediaPaths = [
    tuatara.media.image,
    ...tuatara.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/tuatara/01-coastal-forest-adult-male-portrait.webp',
    './images/species/tuatara/02-adult-female-field-marks.webp',
    './images/species/tuatara/03-seabird-island-burrow-habitat.webp',
    './images/species/tuatara/04-nocturnal-weta-foraging.webp',
    './images/species/tuatara/05-nesting-slope-female.webp',
    './images/species/tuatara/06-predator-free-island-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !tuatara.media.gallery.some(({ image }) => image === tuatara.media.image),
  );
  const mediaRecords = [tuatara.media, ...tuatara.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  await Promise.all(
    mediaPaths.map((path) =>
      access(new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url)),
    ),
  );
  assert.ok(
    tuatara.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.match(
    tuatara.media.alt,
    /(?:只有|恰好)?一只完整成年雄性喙头蜥.*(?:橄榄灰|斑点).*(?:柔软|皮褶).*(?:洞口|海岸森林)/,
  );
  const femaleMedia = tuatara.media.gallery.find(({ image }) =>
    image.includes('02-adult-female-field-marks'),
  );
  assert.match(
    [femaleMedia?.alt, femaleMedia?.caption].join(' '),
    /一只完整成年雌性喙头蜥.*(?:皮褶|背褶).*(?:单幅|外观).*(?:不能|无法).*确认性别/,
  );
  const habitatMedia = tuatara.media.gallery.find(({ image }) =>
    image.includes('03-seabird-island-burrow-habitat'),
  );
  assert.match(
    [habitatMedia?.alt, habitatMedia?.caption].join(' '),
    /(?:海岸灌丛|海岸森林).*(?:洞口|洞穴).*(?:没有海鸟|没有海鸟入画).*(?:不能|无法).*(?:挖掘|共享)/,
  );
  const foragingMedia = tuatara.media.gallery.find(({ image }) =>
    image.includes('04-nocturnal-weta-foraging'),
  );
  assert.match(
    [foragingMedia?.alt, foragingMedia?.caption].join(' '),
    /一只完整喙头蜥.*一只完整 wētā.*(?:间距|接触前).*(?:不证明|不能证明).*(?:捕获|取食)/i,
  );
  const nestingMedia = tuatara.media.gallery.find(({ image }) =>
    image.includes('05-nesting-slope-female'),
  );
  assert.match(
    [nestingMedia?.alt, nestingMedia?.caption].join(' '),
    /一只完整成年雌性喙头蜥.*(?:浅坑|松土).*(?:没有|无).*(?:可见卵|卵).*(?:不能|无法).*(?:卵数|孵化期|性别)/,
  );
  const monitoringMedia = tuatara.media.gallery.find(({ image }) =>
    image.includes('06-predator-free-island-monitoring'),
  );
  assert.match(
    [monitoringMedia?.alt, monitoringMedia?.caption].join(' '),
    /一只完整喙头蜥.*一名.*(?:巡护员|工作人员).*(?:隧道状监测装置|监测).*(?:不代表|不表示).*(?:流程|检测结果|无鼠)/,
  );

  assert.ok(tuatara.sources.length >= 5);
  assert.equal(
    new Set(tuatara.sources.map(({ url }) => url)).size,
    tuatara.sources.length,
  );
  assert.ok(tuatara.sources.every(({ title }) => title.length > 0));
  assert.ok(tuatara.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(tuatara.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    tuatara.sources.every(({ accessedAt }) => accessedAt === '2026-08-26'),
  );
  assert.deepEqual(
    new Set(tuatara.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );

  const profileText = [
    tuatara.summary,
    tuatara.description,
    tuatara.distribution.range,
    ...tuatara.habitats.flatMap(({ name, description }) => [name, description]),
    tuatara.measurements.length?.note ?? '',
    tuatara.measurements.weight?.note ?? '',
    tuatara.diet.description,
    ...(tuatara.activity ?? []),
    ...(tuatara.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...tuatara.keyFacts,
    ...tuatara.threats,
    ...tuatara.conservationActions,
    ...tuatara.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
  ].join(' ');
  assert.match(
    profileText,
    /喙头目.*唯一现生(?:物种|种).*(?:不是|不属于).*蜥蜴|(?:不是|不属于).*蜥蜴.*喙头目.*唯一现生(?:物种|种)/,
  );
  assert.match(
    profileText,
    /Sphenodon guntheri.*(?:并回|归入|不再列作独立种).*(?:北兄弟岛|独立保护管理单元)/,
  );
  assert.match(
    profileText,
    /活化石.*(?:比喻|通俗).*(?:不表示|不等于).*(?:没有演化|停止演化)/,
  );
  assert.match(
    profileText,
    /IUCN.*2019.*(?:无危|LC).*(?:趋势未知|未知趋势)/,
  );
  assert.match(
    profileText,
    /新西兰.*2025.*At Risk\s*–\s*Uncommon.*CI.*CD.*RR.*Rel/i,
  );
  assert.match(
    profileText,
    /(?:最适体温|体温).*16\s*(?:至|—|-|~)\s*21.*(?:25).*(?:不存在|不能|不等于).*(?:即死|死亡阈值|硬阈值)/,
  );
  assert.match(
    profileText,
    /(?:平均寿命|寿命).*(?:60|六十).*年.*(?:100|一百).*年.*(?:不是|不能|并非).*(?:预期寿命|范围|精确)/,
  );
  assert.match(
    profileText,
    /Takapourewa.*(?:平均)?约?四年.*(?:9\s*(?:至|—|-|~)\s*10|九至十)\s*枚.*11\s*(?:至|—|-|~)\s*16\s*个月/,
  );
  assert.match(
    profileText,
    /较暖.*(?:更多)?雄性.*(?:22|二十二).*不是.*(?:全种|固定开关|固定阈值)/,
  );
  assert.match(
    profileText,
    /(?:幼体|幼年).*(?:顶眼|头顶).*(?:鳞片|色素).*(?:覆盖|盖住).*(?:成体|成年).*(?:没有|不能|不).*外露.*(?:眼球|第三眼)/,
  );
  assert.match(
    profileText,
    /32\s*(?:个|座).*(?:自然残存|自然野生).*岛屿.*(?:约\s*)?10\s*个.*(?:迁地|迁移)?恢复种群/,
  );
  assert.doesNotMatch(
    profileText,
    /(?<!不)(?:属于|归入)\s*(?:Squamata|有鳞目)/i,
  );
  assert.match(
    profileText,
    /2\.5\s*亿.*(?:不是|不等于).*(?:现生物种|本种|个体).*(?:年龄|寿命)/,
  );

  assert.equal(tuatara.featured, true);
  assert.equal(tuatara.publishedAt, '2026-08-26');
  assert.equal(tuatara.updatedAt, '2026-08-26');
});

test('registers the Nile Crocodile as a complete Crocodylus niloticus profile', async () => {
  const nileCrocodile = findSpecies('nile-crocodile');

  assert.equal(nileCrocodile.id, 'species-crocodylus-niloticus');
  assert.equal(nileCrocodile.names.zh, '尼罗鳄');
  assert.equal(nileCrocodile.names.en, 'Nile Crocodile');
  assert.deepEqual(nileCrocodile.names.aliases, []);
  assert.equal(nileCrocodile.scientificName, 'Crocodylus niloticus');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(nileCrocodile).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', nileCrocodile.scientificName, nileCrocodile.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Reptilia', '爬行纲'],
      ['order', 'Crocodylia', '鳄目'],
      ['family', 'Crocodylidae', '鳄科'],
      ['genus', 'Crocodylus', '鳄属'],
      ['species', 'Crocodylus niloticus', '尼罗鳄'],
    ],
  );
  assert.deepEqual(
    {
      code: nileCrocodile.conservation.code,
      trend: nileCrocodile.conservation.trend,
      assessedYear: nileCrocodile.conservation.assessedYear,
      criteria: nileCrocodile.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'stable',
      assessedYear: 2017,
      criteria: undefined,
    },
  );
  assert.ok(!('criteria' in nileCrocodile.conservation));

  assert.deepEqual(nileCrocodile.distribution.realms, ['freshwater', 'terrestrial']);
  assert.deepEqual(nileCrocodile.distribution.continents, ['非洲']);
  assert.equal(nileCrocodile.distribution.countries.length, 25);
  assert.ok(
    ['埃及', '肯尼亚', '南非', '马达加斯加', '津巴布韦'].every((country) =>
      nileCrocodile.distribution.countries.includes(country),
    ),
  );
  assert.ok(!nileCrocodile.distribution.countries.includes('赤道几内亚'));
  assert.ok(!('endemicTo' in nileCrocodile.distribution));
  assert.deepEqual(nileCrocodile.distribution.center, { lat: -10, lng: 28 });
  assert.match(
    nileCrocodile.distribution.range,
    /(?:东部|东非).*(?:南部|南非).*(?:尼罗河上游|纳赛尔湖).*马达加斯加.*(?:西非圣鳄|Crocodylus suchus)/,
  );

  assert.ok(nileCrocodile.habitats.length >= 3);
  assert.equal(
    nileCrocodile.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(
    nileCrocodile.habitats.every(({ realm }) =>
      ['freshwater', 'terrestrial'].includes(realm),
    ),
  );
  assert.ok(nileCrocodile.diet.types.includes('carnivore'));
  assert.ok(nileCrocodile.diet.types.includes('piscivore'));
  assert.ok(nileCrocodile.diet.foods.length > 0);
  assert.ok((nileCrocodile.activity?.length ?? 0) > 0);
  assert.ok(nileCrocodile.tags.length > 0);

  assert.deepEqual(
    {
      min: nileCrocodile.measurements.length?.min,
      max: nileCrocodile.measurements.length?.max,
      unit: nileCrocodile.measurements.length?.unit,
    },
    { min: 2.18, max: 5.5, unit: 'm' },
  );
  assert.match(
    nileCrocodile.measurements.length?.note ?? '',
    /2\.18.*历史.*最小.*筑巢雌性.*5\.5.*罕见.*大型雄性.*(?:不是|不代表).*典型/,
  );
  assert.ok(!('weight' in nileCrocodile.measurements));
  assert.deepEqual(nileCrocodile.metrics, { adultLengthCm: [218, 550] });
  assert.ok(!('adultMassKg' in nileCrocodile.metrics));
  assert.ok(!('lifespanYears' in nileCrocodile.metrics));
  assert.ok(!('topSpeedKph' in nileCrocodile.metrics));
  assert.ok(!('estimatedMatureIndividuals' in nileCrocodile.metrics));

  assert.equal(nileCrocodile.storySections?.length, 6);
  assert.equal(new Set(nileCrocodile.storySections.map(({ key }) => key)).size, 6);
  assert.ok(
    nileCrocodile.storySections.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(nileCrocodile.keyFacts.length >= 8);
  assert.ok(nileCrocodile.threats.length >= 5);
  assert.ok(nileCrocodile.conservationActions.length >= 5);
  assert.equal(nileCrocodile.featuredStats.length, 4);
  assert.equal(new Set(nileCrocodile.featuredStats.map(({ key }) => key)).size, 4);

  assert.equal(nileCrocodile.media.gallery?.length, 5);
  assert.equal(nileCrocodile.media.credit, 'Fauna Atlas · AI 生成原创图像');
  const mediaPaths = [
    nileCrocodile.media.image,
    ...nileCrocodile.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/nile-crocodile/01-river-sandbank-adult.webp',
    './images/species/nile-crocodile/02-ripple-sensory-hunt.webp',
    './images/species/nile-crocodile/03-social-gaping.webp',
    './images/species/nile-crocodile/04-seasonal-floodplain-movement.webp',
    './images/species/nile-crocodile/05-hatchling-mouth-transport.webp',
    './images/species/nile-crocodile/06-protected-water-access.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !nileCrocodile.media.gallery.some(
      ({ image }) => image === nileCrocodile.media.image,
    ),
  );
  const mediaRecords = [nileCrocodile.media, ...nileCrocodile.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  await Promise.all(
    mediaPaths.map((path) =>
      access(new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url)),
    ),
  );
  assert.ok(
    nileCrocodile.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.match(
    nileCrocodile.media.alt,
    /(?:沙岸.*一只完整成年雄性尼罗鳄.*(?:V 形|V形|宽而结实).*(?:完整尾尖|尾尖)|一只完整成年雄性尼罗鳄.*(?:V 形|V形|宽而结实).*沙岸.*(?:完整尾尖|尾尖))/,
  );
  const sensoryMedia = nileCrocodile.media.gallery.find(({ image }) =>
    image.includes('02-ripple-sensory-hunt'),
  );
  const sensoryText = [sensoryMedia?.alt, sensoryMedia?.caption].join(' ');
  assert.match(
    sensoryText,
    /一只完整幼鳄.*(?:水下未知扰动|猎物不可见|未见猎物).*(?:涟漪|水波).*(?:暗点|感受器)/,
  );
  assert.match(
    sensoryText,
    /(?:暗点|感受器).*(?:不是|不代表|没有).*(?:声呐|电感|发光|通用能力)/,
  );
  assert.doesNotMatch(sensoryMedia?.alt ?? '', /小鱼|鱼类|猎物留下/);
  const gapingMedia = nileCrocodile.media.gallery.find(({ image }) =>
    image.includes('03-social-gaping'),
  );
  assert.match(
    [gapingMedia?.alt, gapingMedia?.caption].join(' '),
    /多只.*尼罗鳄.*一只.*张口.*气温.*邻近个体.*(?:不能|无法).*(?:散热|威吓)/,
  );
  const movementMedia = nileCrocodile.media.gallery.find(({ image }) =>
    image.includes('04-seasonal-floodplain-movement'),
  );
  assert.match(
    [movementMedia?.alt, movementMedia?.caption].join(' '),
    /(?:漫滩|水潭).*一只完整.*尼罗鳄.*(?:无线电|发射器|标记).*(?:恩杜莫|地方研究).*(?:不能|不代表).*(?:全物种|固定迁徙距离)/,
  );
  const transportMedia = nileCrocodile.media.gallery.find(({ image }) =>
    image.includes('05-hatchling-mouth-transport'),
  );
  assert.match(
    [transportMedia?.alt, transportMedia?.caption].join(' '),
    /一只完整母鳄.*(?:颊囊|口中|含运).*两只.*完整幼体.*(?:无伤|没有咬合|没有咀嚼).*(?:圈养|野外相机)/,
  );
  assert.doesNotMatch(transportMedia?.alt ?? '', /三只/);
  const accessMedia = nileCrocodile.media.gallery.find(({ image }) =>
    image.includes('06-protected-water-access'),
  );
  assert.match(
    [accessMedia?.alt, accessMedia?.caption].join(' '),
    /(?:取水平台|防鳄屏障).*人.*设施一侧.*远处.*一只尼罗鳄.*(?:建议|预防措施).*(?:不是|不代表|未验证).*(?:万能|纳赛尔湖实验)/,
  );

  assert.ok(nileCrocodile.sources.length >= 5);
  assert.equal(
    new Set(nileCrocodile.sources.map(({ url }) => url)).size,
    nileCrocodile.sources.length,
  );
  assert.ok(nileCrocodile.sources.every(({ title }) => title.length > 0));
  assert.ok(nileCrocodile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(nileCrocodile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    nileCrocodile.sources.every(({ accessedAt }) => accessedAt === '2026-08-27'),
  );
  assert.deepEqual(
    new Set(nileCrocodile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'general', 'distribution', 'ecology', 'conservation']),
  );

  const profileText = [
    nileCrocodile.summary,
    nileCrocodile.description,
    nileCrocodile.distribution.range,
    ...nileCrocodile.habitats.flatMap(({ name, description }) => [name, description]),
    nileCrocodile.measurements.length?.note ?? '',
    nileCrocodile.diet.description,
    ...(nileCrocodile.activity ?? []),
    ...nileCrocodile.tags,
    ...(nileCrocodile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...nileCrocodile.keyFacts,
    ...nileCrocodile.threats,
    ...nileCrocodile.conservationActions,
    ...nileCrocodile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
  ].join(' ');
  assert.match(
    profileText,
    /Crocodylus suchus.*(?:独立物种|独立种|恢复).*(?:中非|东北非).*(?:遗传核验|分子鉴定|鉴定空白)/,
  );
  assert.match(
    profileText,
    /(?:IUCN|鳄类专家组).*2017.*(?:无危|LC).*(?:稳定|stable).*(?:地方|区域).*(?:下降|易危|VU|资料不足)/i,
  );
  assert.match(
    profileText,
    /2\.18.*历史.*筑巢雌性.*5\.5.*罕见.*大型雄性.*(?:不是|不代表).*典型/,
  );
  assert.match(
    profileText,
    /约?\s*9,?000.*(?:皮肤|鳞片).*感受器.*(?:暗点|不发光)/,
  );
  assert.match(
    profileText,
    /初生.*(?:水生昆虫|蛛形).*(?:体型|随.*生长).*(?:甲壳|两栖|鱼).*(?:亚成体|不能|不代表).*(?:大型成体|所有成年)/,
  );
  assert.match(
    profileText,
    /张口.*气温.*邻近个体.*(?:不能|无法).*(?:单一|只).*(?:散热|威吓)/,
  );
  assert.match(
    profileText,
    /(?:14\s*(?:至|—|-|~)\s*95).*枚.*(?:33\s*(?:至|—|-|~)\s*60(?:\.4)?).*地方.*(?:75\s*(?:至|—|-|~)\s*115).*天.*(?:固定温度|固定阈值|不是.*开关)/,
  );
  assert.match(
    profileText,
    /(?:颊囊|口中).*(?:幼体|幼鳄).*(?:恒河鳄).*(?:不口衔|不会用嘴|无法口衔)/,
  );
  assert.match(
    profileText,
    /(?:刺网|湿地|筑坝).*(?:固定取水点|防鳄屏障|桥|码头).*(?:人鳄共存|风险教育)/,
  );
  assert.doesNotMatch(profileText, /5,?000\s*psi/i);
  assert.doesNotMatch(profileText, /(?:所有|全部)成年尼罗鳄.*大型哺乳动物/);

  assert.equal(nileCrocodile.featured, true);
  assert.equal(nileCrocodile.publishedAt, '2026-08-27');
  assert.equal(nileCrocodile.updatedAt, '2026-08-27');
});

test('registers the Leatherback Turtle as a complete Dermochelys coriacea profile', async () => {
  const leatherback = findSpecies('leatherback-turtle');

  assert.equal(leatherback.id, 'species-dermochelys-coriacea');
  assert.equal(leatherback.names.zh, '棱皮龟');
  assert.equal(leatherback.names.en, 'Leatherback Turtle');
  assert.deepEqual(leatherback.names.aliases, ['革龟']);
  assert.equal(leatherback.scientificName, 'Dermochelys coriacea');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(leatherback).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', leatherback.scientificName, leatherback.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Reptilia', '爬行纲'],
      ['order', 'Testudines', '龟鳖目'],
      ['family', 'Dermochelyidae', '棱皮龟科'],
      ['genus', 'Dermochelys', '棱皮龟属'],
      ['species', 'Dermochelys coriacea', '棱皮龟'],
    ],
  );
  assert.deepEqual(
    {
      code: leatherback.conservation.code,
      trend: leatherback.conservation.trend,
      assessedYear: leatherback.conservation.assessedYear,
      criteria: leatherback.conservation.criteria,
    },
    {
      code: 'VU',
      trend: 'decreasing',
      assessedYear: 2013,
      criteria: 'A2bd',
    },
  );

  assert.deepEqual(leatherback.distribution.realms, ['marine', 'terrestrial']);
  assert.deepEqual(leatherback.distribution.continents, [
    '亚洲',
    '非洲',
    '欧洲',
    '北美洲',
    '南美洲',
    '大洋洲',
  ]);
  assert.equal(leatherback.distribution.countries.length, 20);
  assert.ok(
    ['中国', '印度尼西亚', '巴布亚新几内亚', '加拿大', '加蓬'].every(
      (country) => leatherback.distribution.countries.includes(country),
    ),
  );
  assert.ok(!('center' in leatherback.distribution));
  assert.ok(!('endemicTo' in leatherback.distribution));
  assert.match(
    leatherback.distribution.range,
    /大西洋.*太平洋.*印度洋.*地中海.*筑巢.*(?:热带|亚热带).*(?:温带|近寒带).*(?:代表性|不是完整)/,
  );

  assert.equal(leatherback.habitats.length, 4);
  assert.equal(
    leatherback.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.equal(
    leatherback.habitats.filter(({ realm }) => realm === 'terrestrial').length,
    1,
  );
  assert.ok(
    leatherback.habitats.every(({ realm }) =>
      ['marine', 'terrestrial'].includes(realm),
    ),
  );
  assert.deepEqual(leatherback.diet.types, ['carnivore']);
  assert.ok(leatherback.diet.foods.includes('水母'));
  assert.ok(leatherback.diet.foods.includes('樽海鞘'));
  assert.match(
    leatherback.diet.description,
    /胶质.*(?:双尖突|颌缘).*(?:角质乳突).*(?:不是|不属于)牙齿/,
  );
  assert.ok((leatherback.activity?.length ?? 0) > 0);
  assert.ok(leatherback.tags.includes('七条背棱'));

  assert.deepEqual(
    {
      min: leatherback.measurements.length?.min,
      max: leatherback.measurements.length?.max,
      unit: leatherback.measurements.length?.unit,
    },
    { min: 152, max: 183, unit: 'cm' },
  );
  assert.deepEqual(
    {
      min: leatherback.measurements.weight?.min,
      max: leatherback.measurements.weight?.max,
      unit: leatherback.measurements.weight?.unit,
    },
    { min: 340, max: 454, unit: 'kg' },
  );
  assert.match(
    leatherback.measurements.length?.note ?? '',
    /NOAA.*5\s*(?:至|—|-|~)\s*6.*英尺.*换算.*(?:不代表|不是).*全球最大/,
  );
  assert.match(
    leatherback.measurements.weight?.note ?? '',
    /NOAA.*750\s*(?:至|—|-|~)\s*1,000.*磅.*换算.*(?:不代表|不是).*全球极值/,
  );
  assert.deepEqual(leatherback.metrics, {
    adultLengthCm: [152, 183],
    adultMassKg: [340, 454],
  });
  assert.ok(!('lifespanYears' in leatherback.metrics));
  assert.ok(!('maxDiveDepthM' in leatherback.metrics));
  assert.ok(!('estimatedMatureIndividuals' in leatherback.metrics));

  assert.equal(leatherback.storySections?.length, 6);
  assert.deepEqual(
    leatherback.storySections.map(({ key }) => key),
    [
      'identity',
      'gelatinous-diet',
      'thermal-biology',
      'migration-diving',
      'nesting',
      'regional-risk',
    ],
  );
  assert.ok(
    leatherback.storySections.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(leatherback.keyFacts.length >= 8);
  assert.ok(leatherback.threats.length >= 5);
  assert.ok(leatherback.conservationActions.length >= 5);
  assert.equal(leatherback.featuredStats.length, 4);
  assert.deepEqual(
    leatherback.featuredStats.map(({ key }) => key),
    ['adult-length', 'adult-mass', 'recorded-dive', 'transoceanic-route'],
  );

  assert.equal(leatherback.media.gallery?.length, 5);
  assert.equal(leatherback.media.credit, 'Fauna Atlas · AI 生成原创图像');
  const mediaPaths = [
    leatherback.media.image,
    ...leatherback.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/leatherback-turtle/01-open-ocean-ridged-swim.webp',
    './images/species/leatherback-turtle/02-seven-ridges-clawless-flippers.webp',
    './images/species/leatherback-turtle/03-jellyfish-foraging.webp',
    './images/species/leatherback-turtle/04-deep-transit-dive.webp',
    './images/species/leatherback-turtle/05-night-nest-digging.webp',
    './images/species/leatherback-turtle/06-striped-hatchlings-dark-beach.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !leatherback.media.gallery.some(({ image }) => image === leatherback.media.image),
  );
  const mediaRecords = [leatherback.media, ...leatherback.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.deepEqual(
    mediaRecords.map(({ focalPoint }) => focalPoint),
    [
      { x: 0.72, y: 0.56 },
      { x: 0.6, y: 0.5 },
      { x: 0.62, y: 0.52 },
      { x: 0.61, y: 0.61 },
      { x: 0.63, y: 0.58 },
      { x: 0.55, y: 0.62 },
    ],
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  await Promise.all(
    mediaPaths.map((path) =>
      access(new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url)),
    ),
  );
  assert.ok(
    leatherback.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.match(
    leatherback.media.alt,
    /一只.*七条纵棱.*(?:无|没有)硬质盾片.*成年棱皮龟.*右侧.*左侧.*(?:安静水体|负空间)/,
  );
  const anatomyMedia = leatherback.media.gallery.find(({ image }) =>
    image.includes('02-seven-ridges-clawless-flippers'),
  );
  assert.match(
    [anatomyMedia?.alt, anatomyMedia?.caption].join(' '),
    /一只成年棱皮龟.*恰好七条.*(?:纵棱|背棱).*粉红头斑.*两只长前鳍.*两只短后鳍.*(?:无爪|没有爪)/,
  );
  const foragingMedia = leatherback.media.gallery.find(({ image }) =>
    image.includes('03-jellyfish-foraging'),
  );
  assert.match(
    [foragingMedia?.alt, foragingMedia?.caption].join(' '),
    /一只成年棱皮龟.*一只狮鬃水母.*(?:双尖突|中央缺口).*(?:没有|无)独立牙齿.*(?:加拿大|局地).*(?:不能|不是).*(?:固定日粮|每只)/,
  );
  const diveMedia = leatherback.media.gallery.find(({ image }) =>
    image.includes('04-deep-transit-dive'),
  );
  assert.match(
    [diveMedia?.alt, diveMedia?.caption].join(' '),
    /一只成年棱皮龟.*斜向下潜.*(?:无|没有)海底.*1,250.*26,146.*99\.6%.*300.*(?:罕见|并非常态)/,
  );
  const nestingMedia = leatherback.media.gallery.find(({ image }) =>
    image.includes('05-night-nest-digging'),
  );
  assert.match(
    [nestingMedia?.alt, nestingMedia?.caption].join(' '),
    /一只短尾成年雌性棱皮龟.*(?:深卵室|挖巢).*(?:没有|无)外露卵.*(?:单一|不把).*(?:筑巢瞬间|产卵|幼龟出巢)/,
  );
  const hatchlingMedia = leatherback.media.gallery.find(({ image }) =>
    image.includes('06-striped-hatchlings-dark-beach'),
  );
  assert.match(
    [hatchlingMedia?.alt, hatchlingMedia?.caption].join(' '),
    /恰好三只.*棱皮龟幼龟.*(?:无|没有)人工白光.*七条淡色背棱线.*淡色鳍缘.*(?:不是|不等于)微缩成体/,
  );

  assert.equal(leatherback.sources.length, 17);
  assert.equal(
    new Set(leatherback.sources.map(({ url }) => url)).size,
    leatherback.sources.length,
  );
  assert.ok(leatherback.sources.every(({ title }) => title.length > 0));
  assert.ok(leatherback.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(leatherback.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    leatherback.sources.every(({ accessedAt }) => accessedAt === '2026-08-27'),
  );
  assert.deepEqual(
    new Set(leatherback.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'general', 'distribution', 'ecology']),
  );

  const profileText = [
    leatherback.summary,
    leatherback.description,
    leatherback.distribution.range,
    ...leatherback.habitats.flatMap(({ name, description }) => [name, description]),
    leatherback.measurements.length?.note ?? '',
    leatherback.measurements.weight?.note ?? '',
    leatherback.diet.description,
    ...(leatherback.activity ?? []),
    ...leatherback.tags,
    ...(leatherback.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...leatherback.keyFacts,
    ...leatherback.threats,
    ...leatherback.conservationActions,
    ...leatherback.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
  ].join(' ');
  assert.match(profileText, /(?:恰好)?(?:7|七)条.*(?:纵棱|背棱)/);
  assert.match(
    profileText,
    /(?:没有|无)外露硬质盾片.*真皮骨.*(?:柔韧)?背甲|真皮骨.*背甲.*(?:没有|无)硬质盾片/,
  );
  assert.doesNotMatch(profileText, /(?:完全|根本)(?:没有|无)(?:壳|甲结构)/);
  assert.match(
    profileText,
    /五只.*高纬.*13\.6\s*(?:至|—|-|~)\s*15\.9.*海水.*25\.4\s*(?:至|—|-|~)\s*27\.3.*核心体温.*10\.7\s*(?:至|—|-|~)\s*12\.1.*(?:不等同|不能称为).*哺乳动物.*恒温/,
  );
  assert.match(
    profileText,
    /13只.*26,146.*1,250.*99\.6%.*浅于300.*(?:罕见|并非常态|不是日常)/,
  );
  assert.match(
    profileText,
    /(?:部分)?西太平洋.*(?:巴布亚|印度尼西亚).*(?:东北太平洋|加利福尼亚).*(?:超过|>)10,000.*(?:不是|不代表).*(?:全种平均|每只)/,
  );
  assert.match(
    profileText,
    /加拿大.*19只.*(?:短时视频|能量模型).*约330千克.*(?:局地|这个地点).*(?:不是|不能).*(?:固定配额|固定日粮|全球)/,
  );
  assert.match(
    profileText,
    /(?:全球|当前全球).*2013.*(?:易危|VU).*(?:下降|decreasing).*(?:四个|四个区域|四个亚种群).*(?:极危|CR).*(?:一个|西北大西洋).*(?:濒危|EN).*(?:两个|另有两个).*(?:数据缺乏|DD)/i,
  );
  assert.doesNotMatch(
    profileText,
    /全球(?:等级|记录|字段)(?:为|：|:)\s*(?:极危|CR)\b/i,
  );
  assert.match(
    profileText,
    /(?:每)?2\s*(?:至|—|-|~)\s*4年.*8\s*(?:至|—|-|~)\s*12天.*(?:每巢)?约100枚.*(?:孵化)?约两个月/,
  );
  assert.match(
    profileText,
    /CITES附录I.*CMS附录I.*中国国家一级保护.*(?:法律状态|法律).*(?:不能|不代表).*(?:IUCN|全球风险)/i,
  );
  assert.match(
    profileText,
    /Dermochelys coriacea.*(?:不承认|无).*有效亚种/,
  );

  assert.equal(leatherback.featured, true);
  assert.equal(leatherback.publishedAt, '2026-08-27');
  assert.equal(leatherback.updatedAt, '2026-08-27');
});

test('registers the Marine Iguana as a complete Amblyrhynchus cristatus profile', async () => {
  const marineIguana = findSpecies('marine-iguana');

  assert.equal(marineIguana.id, 'species-amblyrhynchus-cristatus');
  assert.equal(marineIguana.names.zh, '海鬣蜥');
  assert.equal(marineIguana.names.en, 'Marine Iguana');
  assert.deepEqual(marineIguana.names.aliases, [
    '加拉帕戈斯海鬣蜥',
    '海洋鬣蜥',
    '钝鼻蜥',
  ]);
  assert.equal(marineIguana.scientificName, 'Amblyrhynchus cristatus');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(marineIguana).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', marineIguana.scientificName, marineIguana.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Reptilia', '爬行纲'],
      ['order', 'Squamata', '有鳞目'],
      ['family', 'Iguanidae', '美洲鬣蜥科'],
      ['genus', 'Amblyrhynchus', '海鬣蜥属'],
      ['species', 'Amblyrhynchus cristatus', '海鬣蜥'],
    ],
  );
  assert.deepEqual(
    {
      code: marineIguana.conservation.code,
      trend: marineIguana.conservation.trend,
      assessedYear: marineIguana.conservation.assessedYear,
      criteria: marineIguana.conservation.criteria,
    },
    {
      code: 'VU',
      trend: 'decreasing',
      assessedYear: 2019,
      criteria: 'A2abce+4abce',
    },
  );

  assert.deepEqual(marineIguana.distribution.realms, ['marine', 'terrestrial']);
  assert.deepEqual(marineIguana.distribution.continents, ['南美洲']);
  assert.deepEqual(marineIguana.distribution.countries, ['厄瓜多尔']);
  assert.deepEqual(marineIguana.distribution.endemicTo, ['加拉帕戈斯群岛']);
  assert.deepEqual(marineIguana.distribution.center, {
    lat: -0.65,
    lng: -90.55,
  });
  assert.match(
    marineIguana.distribution.range,
    /仅自然分布.*加拉帕戈斯群岛.*(?:不能|不).*调查覆盖.*岛屿数.*完整分布岛数/,
  );

  assert.equal(marineIguana.habitats.length, 3);
  assert.equal(
    marineIguana.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.equal(
    marineIguana.habitats.filter(({ realm }) => realm === 'marine').length,
    2,
  );
  assert.equal(
    marineIguana.habitats.filter(({ realm }) => realm === 'terrestrial').length,
    1,
  );
  assert.deepEqual(marineIguana.diet.types, ['herbivore']);
  assert.ok(marineIguana.diet.foods.some((food) => food.includes('红藻')));
  assert.ok(marineIguana.diet.foods.some((food) => food.includes('绿藻')));
  assert.match(
    marineIguana.diet.description,
    /北西摩.*局地.*Batis.*(?:不能|不).*代表全种/,
  );
  assert.ok((marineIguana.activity?.length ?? 0) > 0);
  assert.ok(marineIguana.tags.includes('11个亚种'));

  assert.deepEqual(
    {
      max: marineIguana.measurements.length?.max,
      unit: marineIguana.measurements.length?.unit,
    },
    { max: 1.3, unit: 'm' },
  );
  assert.deepEqual(
    {
      max: marineIguana.measurements.weight?.max,
      unit: marineIguana.measurements.weight?.unit,
    },
    { max: 12, unit: 'kg' },
  );
  assert.match(
    marineIguana.measurements.length?.note ?? '',
    /大型雄性.*(?:不是|不).*普通成体.*上限/,
  );
  assert.match(
    marineIguana.measurements.weight?.note ?? '',
    /岛屿最大雄性.*0\.9千克/,
  );
  assert.deepEqual(marineIguana.metrics, { maxDiveDepthM: 30 });
  assert.ok(!('adultMassKg' in marineIguana.metrics));
  assert.ok(!('adultLengthCm' in marineIguana.metrics));
  assert.ok(!('estimatedMatureIndividuals' in marineIguana.metrics));

  assert.equal(marineIguana.storySections?.length, 6);
  assert.deepEqual(
    marineIguana.storySections.map(({ key }) => key),
    [
      'volcanic-shore',
      'low-tide-table',
      'cold-water-dive',
      'nasal-salt',
      'enso-shrinkage',
      'island-by-island',
    ],
  );
  assert.ok(
    marineIguana.storySections.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.equal(marineIguana.keyFacts.length, 14);
  assert.ok(marineIguana.threats.length >= 5);
  assert.ok(marineIguana.conservationActions.length >= 5);
  assert.equal(marineIguana.featuredStats.length, 4);
  assert.deepEqual(
    marineIguana.featuredStats.map(({ key }) => key),
    [
      'recognized-subspecies',
      'island-male-mass',
      'foraging-depth',
      'enso-shrinkage',
    ],
  );

  assert.equal(marineIguana.media.gallery?.length, 5);
  assert.equal(marineIguana.media.credit, 'Fauna Atlas · AI 生成原创图像');
  const mediaPaths = [
    marineIguana.media.image,
    ...marineIguana.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/marine-iguana/01-black-lava-adult-cover.webp',
    './images/species/marine-iguana/02-flattened-tail-swimming.webp',
    './images/species/marine-iguana/03-volcanic-intertidal-habitat.webp',
    './images/species/marine-iguana/04-underwater-algae-grazing.webp',
    './images/species/marine-iguana/05-sandy-nest-burrow-female.webp',
    './images/species/marine-iguana/06-distance-shoreline-census.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !marineIguana.media.gallery.some(
      ({ image }) => image === marineIguana.media.image,
    ),
  );
  const mediaRecords = [marineIguana.media, ...marineIguana.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.deepEqual(
    mediaRecords.map(({ focalPoint }) => focalPoint),
    [
      { x: 0.7, y: 0.58 },
      { x: 0.5, y: 0.56 },
      { x: 0.31, y: 0.48 },
      { x: 0.51, y: 0.58 },
      { x: 0.49, y: 0.56 },
      { x: 0.42, y: 0.68 },
    ],
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  await Promise.all(
    mediaPaths.map((path) =>
      access(new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url)),
    ),
  );
  assert.ok(
    marineIguana.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.match(
    marineIguana.media.alt,
    /只有一只完整.*海鬣蜥.*完整尾尖.*右侧.*海面/,
  );
  const swimmingMedia = marineIguana.media.gallery.find(({ image }) =>
    image.includes('02-flattened-tail-swimming'),
  );
  assert.match(
    [swimmingMedia?.alt, swimmingMedia?.caption].join(' '),
    /只有一只完整.*海鬣蜥.*四肢贴近.*侧扁.*尾.*(?:不能提供|不提供).*潜水深度.*持续时间/,
  );
  const habitatMedia = marineIguana.media.gallery.find(({ image }) =>
    image.includes('03-volcanic-intertidal-habitat'),
  );
  assert.match(
    [habitatMedia?.alt, habitatMedia?.caption].join(' '),
    /低潮.*(?:干燥|晒背).*浪溅带.*潮池.*近岸海水.*红绿藻.*(?:不代表|不对应).*指定岛屿.*覆盖率/,
  );
  const grazingMedia = marineIguana.media.gallery.find(({ image }) =>
    image.includes('04-underwater-algae-grazing'),
  );
  assert.match(
    [grazingMedia?.alt, grazingMedia?.caption].join(' '),
    /只有一只完整.*海鬣蜥.*长爪.*岩面.*短钝吻.*藻.*不能确认.*物种.*摄入量.*潜深.*结果/,
  );
  const nestingMedia = marineIguana.media.gallery.find(({ image }) =>
    image.includes('05-sandy-nest-burrow-female'),
  );
  assert.match(
    [nestingMedia?.alt, nestingMedia?.caption].join(' '),
    /只有一只完整.*雌性海鬣蜥.*巢洞.*(?:没有|无)可见卵.*(?:不提供|不能提供).*窝卵数.*巢深.*孵化期.*繁殖结果/,
  );
  const censusMedia = marineIguana.media.gallery.find(({ image }) =>
    image.includes('06-distance-shoreline-census'),
  );
  assert.match(
    [censusMedia?.alt, censusMedia?.caption].join(' '),
    /只有一只完整.*海鬣蜥.*只有一名观察员.*双筒望远镜.*记录板.*没有接触.*代表性重建.*不对应真实调查.*监测结果/,
  );

  assert.equal(marineIguana.sources.length, 19);
  assert.equal(
    new Set(marineIguana.sources.map(({ url }) => url)).size,
    marineIguana.sources.length,
  );
  assert.ok(marineIguana.sources.every(({ title }) => title.length > 0));
  assert.ok(marineIguana.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(marineIguana.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    marineIguana.sources.every(({ accessedAt }) => accessedAt === '2026-08-27'),
  );
  assert.deepEqual(
    new Set(marineIguana.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'general', 'distribution', 'ecology']),
  );

  const profileText = [
    marineIguana.summary,
    marineIguana.description,
    marineIguana.distribution.range,
    ...marineIguana.habitats.flatMap(({ name, description }) => [name, description]),
    marineIguana.measurements.length?.note ?? '',
    marineIguana.measurements.weight?.note ?? '',
    marineIguana.diet.description,
    ...(marineIguana.activity ?? []),
    ...marineIguana.tags,
    ...(marineIguana.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...marineIguana.keyFacts,
    ...marineIguana.threats,
    ...marineIguana.conservationActions,
    ...marineIguana.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
  ].join(' ');
  assert.match(
    profileText,
    /Amblyrhynchus cristatus.*(?:该属只有.*一个现生种|只有海鬣蜥一个现生种)/,
  );
  assert.match(profileText, /11个亚种.*(?:不是|不等于)11个物种/);
  assert.match(
    profileText,
    /唯一.*海中取食.*(?:现生蜥蜴|蜥蜴).*(?:陆地|陆上).*(?:休息|调温|繁殖)/,
  );
  assert.match(
    profileText,
    /30米.*(?:极值|最大).*(?:多数个体|不是.*日常|潮间带)/,
  );
  assert.match(profileText, /鼻盐腺.*(?:不是吐毒|不.*毒)/);
  assert.match(
    profileText,
    /0\.9—12千克.*(?:不是|不代表).*普通成体.*(?:范围|上限)/,
  );
  assert.match(
    profileText,
    /1997—1998年.*部分成体.*最多约20%.*(?:不适用|不代表|不能).*(?:每次事件|每只个体)/,
  );
  assert.match(
    profileText,
    /IUCN全种字段为VU、decreasing、2019、A2abce\+4abce.*(?:EN|CR).*(?:不能|不).*覆盖全种字段/i,
  );
  assert.match(
    profileText,
    /2026年3月5日.*CITES附录I.*国际贸易.*(?:不改变|不能改变).*IUCN.*VU/i,
  );
  assert.doesNotMatch(profileText, /当前.*CITES附录II/i);
  assert.match(
    profileText,
    /13岛33点位.*27,758只.*抽样.*不是全群岛总数/,
  );
  assert.match(
    profileText,
    /Jessica号.*圣菲.*一年内死亡62%.*(?:不能|不).*外推/,
  );

  assert.equal(marineIguana.featured, true);
  assert.equal(marineIguana.publishedAt, '2026-08-27');
  assert.equal(marineIguana.updatedAt, '2026-08-27');
});

test('registers the Goliath Frog as a complete Conraua goliath profile', async () => {
  const goliathFrog = findSpecies('goliath-frog');

  assert.equal(goliathFrog.id, 'species-conraua-goliath');
  assert.equal(goliathFrog.names.zh, '非洲巨蛙');
  assert.equal(goliathFrog.names.en, 'Goliath Frog');
  assert.deepEqual(goliathFrog.names.aliases, [
    '巨谐蛙',
    '歌利亚蛙',
    '巨型滑蛙',
    'Giant Slippery Frog',
  ]);
  assert.equal(goliathFrog.scientificName, 'Conraua goliath');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(goliathFrog).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', goliathFrog.scientificName, goliathFrog.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Amphibia', '两栖纲'],
      ['order', 'Anura', '无尾目'],
      ['family', 'Conrauidae', '巨谐蛙科'],
      ['genus', 'Conraua', '巨谐蛙属'],
      ['species', 'Conraua goliath', '非洲巨蛙'],
    ],
  );
  assert.deepEqual(
    {
      code: goliathFrog.conservation.code,
      trend: goliathFrog.conservation.trend,
      assessedYear: goliathFrog.conservation.assessedYear,
      criteria: goliathFrog.conservation.criteria,
    },
    {
      code: 'EN',
      trend: 'decreasing',
      assessedYear: 2018,
      criteria: 'A2d',
    },
  );

  assert.deepEqual(goliathFrog.distribution.realms, ['freshwater', 'terrestrial']);
  assert.deepEqual(goliathFrog.distribution.continents, ['非洲']);
  assert.deepEqual(goliathFrog.distribution.countries, ['喀麦隆', '赤道几内亚']);
  assert.ok(!goliathFrog.distribution.countries.includes('加蓬'));
  assert.deepEqual(goliathFrog.distribution.center, { lat: 3.2, lng: 10.15 });
  assert.match(
    goliathFrog.distribution.range,
    /喀麦隆西南部.*赤道几内亚大陆部.*1,000\s*米以下.*加蓬.*未确认.*不列作确定范围国/,
  );

  assert.equal(goliathFrog.habitats.length, 3);
  assert.equal(
    goliathFrog.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.equal(
    goliathFrog.habitats.filter(({ realm }) => realm === 'freshwater').length,
    2,
  );
  assert.equal(
    goliathFrog.habitats.filter(({ realm }) => realm === 'terrestrial').length,
    1,
  );
  assert.deepEqual(goliathFrog.diet.types, ['carnivore']);
  assert.deepEqual(goliathFrog.diet.foods, [
    '陆生节肢动物',
    '淡水虾等甲壳类',
    '淡水蜗牛',
    '其他蛙类及蝌蚪',
  ]);
  assert.ok(!goliathFrog.diet.foods.some((food) => /植物|Dicraea/i.test(food)));
  assert.match(
    goliathFrog.diet.description,
    /成蛙为肉食者.*蝌蚪.*水生植物.*可能.*河川草科.*确切种类和是否专食未定.*Dicraea warmingii\s*不作为已确认食物/i,
  );
  assert.ok(goliathFrog.activity?.includes('主要夜行'));
  assert.ok(goliathFrog.activity?.includes('白天岩石晒背'));
  assert.ok(goliathFrog.activity?.includes('非迁徙'));
  assert.ok(goliathFrog.tags.includes('喀麦隆 A 类保护动物'));

  assert.deepEqual(
    {
      max: goliathFrog.measurements.length?.max,
      unit: goliathFrog.measurements.length?.unit,
    },
    { max: 33.5, unit: 'cm' },
  );
  assert.deepEqual(
    {
      max: goliathFrog.measurements.weight?.max,
      unit: goliathFrog.measurements.weight?.unit,
    },
    { max: 3.3, unit: 'kg' },
  );
  assert.match(
    goliathFrog.measurements.length?.note ?? '',
    /2021—2022\s*年.*三地\s*139\s*只样本.*最大实测吻肛长.*同只重\s*2\.529\s*千克.*不是普通成体范围或绝对上限/,
  );
  assert.match(
    goliathFrog.measurements.weight?.note ?? '',
    /1960\s*年.*一只\s*32\s*厘米个体.*历史记录.*不是普通成体范围或绝对上限/,
  );
  assert.deepEqual(goliathFrog.metrics, { elevationM: [0, 1000] });
  assert.ok(!('adultLengthCm' in goliathFrog.metrics));
  assert.ok(!('adultMassKg' in goliathFrog.metrics));
  assert.ok(!('estimatedMatureIndividuals' in goliathFrog.metrics));

  assert.equal(goliathFrog.storySections?.length, 6);
  assert.deepEqual(
    goliathFrog.storySections.map(({ key }) => key),
    [
      'record-with-boundaries',
      'torrent-built-body',
      'night-riverbank',
      'tadpole-food-question',
      'shallow-nest-pools',
      'largest-taken-first',
    ],
  );
  assert.ok(
    goliathFrog.storySections.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.equal(goliathFrog.keyFacts.length, 6);
  assert.ok(goliathFrog.threats.length >= 7);
  assert.ok(goliathFrog.conservationActions.length >= 8);
  assert.equal(goliathFrog.featuredStats.length, 4);
  assert.deepEqual(
    goliathFrog.featuredStats.map(({ key }) => key),
    [
      'published-sample-max-svl',
      'historical-max-mass',
      'iucn-three-generation-decline',
      'nest-construction-types',
    ],
  );

  assert.equal(goliathFrog.media.gallery?.length, 5);
  const mediaPaths = [
    goliathFrog.media.image,
    ...goliathFrog.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/goliath-frog/01-rapid-river-adult-cover.webp',
    './images/species/goliath-frog/02-adult-field-marks.webp',
    './images/species/goliath-frog/03-rainforest-rapids-habitat.webp',
    './images/species/goliath-frog/04-nocturnal-forest-foraging.webp',
    './images/species/goliath-frog/05-cleared-gravel-nest-pool.webp',
    './images/species/goliath-frog/06-distance-night-river-survey.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !goliathFrog.media.gallery.some(
      ({ image }) => image === goliathFrog.media.image,
    ),
  );
  const mediaRecords = [goliathFrog.media, ...goliathFrog.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    mediaRecords.every(
      ({ credit }) => credit === 'Fauna Atlas · AI 生成原创图像',
    ),
  );
  assert.deepEqual(
    mediaRecords.map(({ focalPoint }) => focalPoint),
    [
      { x: 0.67, y: 0.56 },
      { x: 0.54, y: 0.56 },
      { x: 0.63, y: 0.62 },
      { x: 0.63, y: 0.61 },
      { x: 0.72, y: 0.67 },
      { x: 0.72, y: 0.63 },
    ],
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  await Promise.all(
    mediaPaths.map((path) =>
      access(new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url)),
    ),
  );
  assert.ok(
    goliathFrog.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  const fieldMarksMedia = goliathFrog.media.gallery.find(({ image }) =>
    image.includes('02-adult-field-marks'),
  );
  assert.match(
    [fieldMarksMedia?.alt, fieldMarksMedia?.caption].join(' '),
    /一只.*非洲巨蛙.*宽头.*颗粒状.*长后肢.*全蹼.*不代表.*纪录个体/,
  );
  const habitatMedia = goliathFrog.media.gallery.find(({ image }) =>
    image.includes('03-rainforest-rapids-habitat'),
  );
  assert.match(
    [habitatMedia?.alt, habitatMedia?.caption].join(' '),
    /急流.*瀑布.*缓流.*河岸林.*概括性生境重建.*不是已确认地点/,
  );
  const foragingMedia = goliathFrog.media.gallery.find(({ image }) =>
    image.includes('04-nocturnal-forest-foraging'),
  );
  assert.match(
    [foragingMedia?.alt, foragingMedia?.caption].join(' '),
    /夜间.*一只非洲巨蛙.*河岸.*林地.*没有展示猎物.*移动距离.*真实觅食结果/,
  );
  const nestingMedia = goliathFrog.media.gallery.find(({ image }) =>
    image.includes('05-cleared-gravel-nest-pool'),
  );
  assert.match(
    [nestingMedia?.alt, nestingMedia?.caption].join(' '),
    /一只性别未知.*非洲巨蛙.*砂砾浅池.*不证明.*移动过石块.*建造巢池.*守护特定卵团.*已知性别/,
  );
  const surveyMedia = goliathFrog.media.gallery.find(({ image }) =>
    image.includes('06-distance-night-river-survey'),
  );
  assert.match(
    [surveyMedia?.alt, surveyMedia?.caption].join(' '),
    /夜间一名研究者.*远距离观察.*一只非洲巨蛙.*不代表真实人员、地点、规程或数量结果/,
  );

  assert.equal(goliathFrog.sources.length, 19);
  assert.equal(
    new Set(goliathFrog.sources.map(({ url }) => url)).size,
    goliathFrog.sources.length,
  );
  assert.ok(goliathFrog.sources.every(({ title }) => title.length > 0));
  assert.ok(goliathFrog.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(goliathFrog.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    goliathFrog.sources.every(({ accessedAt }) => accessedAt === '2026-08-27'),
  );
  assert.deepEqual(
    new Set(goliathFrog.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'ecology', 'general']),
  );
  assert.ok(
    goliathFrog.sources.some(
      ({ title }) =>
        title ===
        'IUCN Red List — Conraua goliath (assessed 2018, published 2019)',
    ),
  );

  const profileText = [
    goliathFrog.summary,
    goliathFrog.description,
    goliathFrog.distribution.range,
    ...goliathFrog.habitats.flatMap(({ name, description }) => [name, description]),
    goliathFrog.measurements.length?.note ?? '',
    goliathFrog.measurements.weight?.note ?? '',
    goliathFrog.diet.description,
    ...(goliathFrog.activity ?? []),
    ...goliathFrog.tags,
    ...(goliathFrog.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...goliathFrog.keyFacts,
    ...goliathFrog.threats,
    ...goliathFrog.conservationActions,
    ...goliathFrog.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
  ].join(' ');
  assert.match(
    profileText,
    /IUCN\s*在\s*2018\s*年评为濒危\s*A2d、趋势下降.*过去三代约\s*15\s*年.*成熟个体.*过度捕捉.*超过\s*70%/i,
  );
  assert.doesNotMatch(profileText, /A2d\+3d/i);
  assert.match(
    profileText,
    /139\s*只样本.*33\.5\s*厘米.*2\.529\s*千克.*1960\s*年.*(?:另一只|另一).*32\s*厘米.*3\.3\s*千克.*(?:两者不是同一只|不同个体.*不能拼成)/,
  );
  assert.doesNotMatch(profileText, /全球(?:仅有|总数为|剩余)\s*490/i);
  assert.match(profileText, /22\s*个筑巢地点.*19\s*个完整可用.*三类巢池/);
  assert.match(
    profileText,
    /(?:最大约)?两千克.*性别未知.*(?:没有直接|没有直接拍到|没有直接目击).*(?:没有确定|仍未确定).*雌雄分工/,
  );
  assert.match(
    profileText,
    /Dicraea warmingii.*(?:不作为已确认食物|确切植物身份仍未解决|不能据此宣称.*只吃一个物种)/i,
  );
  assert.doesNotMatch(
    profileText,
    /当前(?:已)?列入CITES附录|CITES附录(?:I|II|III)(?:物种|保护)/i,
  );
  assert.match(profileText, /喀麦隆.*A\s*类全面保护动物/);

  assert.equal(goliathFrog.featured, true);
  assert.equal(goliathFrog.publishedAt, '2026-08-27');
  assert.equal(goliathFrog.updatedAt, '2026-08-27');
});

test("registers Belcher's Lancelet as a complete Branchiostoma belcheri profile", async () => {
  const lancelet = findSpecies('belchers-lancelet');

  assert.equal(lancelet.id, 'species-branchiostoma-belcheri');
  assert.equal(lancelet.names.zh, '厦门文昌鱼');
  assert.equal(lancelet.names.en, "Belcher's Lancelet");
  assert.deepEqual(lancelet.names.aliases, [
    '文昌鱼',
    '白氏鳃口文昌鱼',
    '白氏文昌鱼',
    'Chinese Lancelet',
  ]);
  assert.equal(lancelet.scientificName, 'Branchiostoma belcheri');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(lancelet).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', lancelet.scientificName, lancelet.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Leptocardii', '文昌鱼纲'],
      ['order', 'Amphioxiformes', '文昌鱼目'],
      ['family', 'Branchiostomatidae', '文昌鱼科'],
      ['genus', 'Branchiostoma', '鳃口文昌鱼属'],
      ['species', 'Branchiostoma belcheri', '厦门文昌鱼'],
    ],
  );
  assert.ok(
    !['Actinopterygii', 'Sarcopterygii', 'Chondrichthyes'].includes(
      lancelet.taxonomy.class.scientificName,
    ),
  );
  assert.deepEqual(
    {
      code: lancelet.conservation.code,
      trend: lancelet.conservation.trend,
      assessedYear: lancelet.conservation.assessedYear,
      criteria: lancelet.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );

  assert.deepEqual(lancelet.distribution.realms, ['marine']);
  assert.deepEqual(lancelet.distribution.continents, ['亚洲']);
  assert.deepEqual(lancelet.distribution.countries, ['中国', '马来西亚', '新加坡']);
  assert.deepEqual(lancelet.distribution.center, { lat: 21.5, lng: 113.8 });
  assert.match(
    lancelet.distribution.range,
    /厦门.*香港.*台湾.*新加坡.*模式产地.*婆罗洲.*日本.*青岛.*B\. japonicum.*逐点重鉴定/,
  );
  assert.equal(lancelet.habitats.length, 3);
  assert.equal(
    lancelet.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(lancelet.habitats.every(({ realm }) => realm === 'marine'));
  assert.match(
    lancelet.habitats.map(({ description }) => description).join(' '),
    /低有机质.*近底水流.*32\s*至\s*33\s*米.*两个标本.*不代表全种深度上限.*浮游.*变态后.*砂底/,
  );

  assert.deepEqual(
    {
      min: lancelet.measurements.length?.min,
      max: lancelet.measurements.length?.max,
      unit: lancelet.measurements.length?.unit,
    },
    { min: 39.3, max: 57.2, unit: 'mm' },
  );
  assert.match(
    lancelet.measurements.length?.note ?? '',
    /厦门\s*100\s*只.*B\. belcheri.*47\.63\s*±\s*4\.73\s*毫米.*不是全种成年范围或绝对最大体长/,
  );
  assert.deepEqual(lancelet.metrics, {});
  assert.ok(!('adultLengthCm' in lancelet.metrics));
  assert.ok(!('maxDiveDepthM' in lancelet.metrics));
  assert.ok(!('estimatedMatureIndividuals' in lancelet.metrics));
  assert.deepEqual(lancelet.diet.types, ['filter-feeder', 'detritivore']);
  assert.deepEqual(lancelet.diet.foods, [
    '微生物与细菌',
    '微型浮游生物',
    '微藻与甲藻',
    '小型浮游动物',
    '悬浮有机碎屑',
  ]);
  assert.match(
    lancelet.diet.description,
    /口笠触手.*轮器.*咽部纤毛.*内柱黏液.*稳定同位素.*不提供固定食谱比例/,
  );

  assert.equal(lancelet.storySections?.length, 6);
  assert.deepEqual(
    lancelet.storySections.map(({ key }) => key),
    [
      'notochord-not-vertebrae',
      'oral-hood-filter',
      'buried-filter-feeder',
      'two-lancelet-names',
      'planktonic-to-benthic',
      'protect-moving-sand',
    ],
  );
  assert.ok(
    lancelet.storySections.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.equal(lancelet.keyFacts.length, 7);
  assert.ok(lancelet.threats.length >= 7);
  assert.ok(lancelet.conservationActions.length >= 8);
  assert.equal(lancelet.featuredStats.length, 4);
  assert.deepEqual(
    lancelet.featuredStats.map(({ key, value, unit }) => ({ key, value, unit })),
    [
      {
        key: 'xiamen-sample-max-length',
        value: '57.2',
        unit: '毫米',
      },
      {
        key: 'preanal-fin-chambers',
        value: '80 至 103',
        unit: '个',
      },
      {
        key: 'pak-lap-wan-density',
        value: '423.8 ± 111.1',
        unit: '只/平方米',
      },
      {
        key: 'reference-haplotype-assembly',
        value: '426',
        unit: 'Mb',
      },
    ],
  );
  assert.match(
    lancelet.featuredStats.map(({ note }) => note ?? '').join(' '),
    /100\s*只.*不是物种绝对上限.*鉴别范围.*不是肌节数.*2005\s*至\s*2006\s*年.*一站.*不是全球平均.*2014\s*年.*一只厦门雄体.*不是固定种级基因组大小/,
  );

  assert.equal(lancelet.media.gallery?.length, 5);
  const mediaPaths = [
    lancelet.media.image,
    ...lancelet.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/belchers-lancelet/01-sandy-seabed-cover.webp',
    './images/species/belchers-lancelet/02-translucent-body-field-marks.webp',
    './images/species/belchers-lancelet/03-coarse-sand-habitat.webp',
    './images/species/belchers-lancelet/04-buried-filter-feeding.webp',
    './images/species/belchers-lancelet/05-night-swimming-emergence.webp',
    './images/species/belchers-lancelet/06-noninvasive-sediment-survey.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !lancelet.media.gallery.some(({ image }) => image === lancelet.media.image),
  );
  const mediaRecords = [lancelet.media, ...lancelet.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    mediaRecords.every(
      ({ credit }) => credit === 'Fauna Atlas · AI 生成原创图像',
    ),
  );
  assert.deepEqual(
    mediaRecords.map(({ focalPoint }) => focalPoint),
    [
      { x: 0.68, y: 0.61 },
      { x: 0.53, y: 0.55 },
      { x: 0.68, y: 0.76 },
      { x: 0.72, y: 0.55 },
      { x: 0.55, y: 0.55 },
      { x: 0.69, y: 0.78 },
    ],
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  await Promise.all(
    mediaPaths.map((path) =>
      access(new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url)),
    ),
  );
  const sourcePaths = [
    '01-sandy-seabed-cover-source.png',
    '02-translucent-body-field-marks-source.png',
    '03-coarse-sand-habitat-source.png',
    '04-buried-filter-feeding-source.png',
    '05-night-swimming-emergence-source.png',
    '06-noninvasive-sediment-survey-source.png',
  ];
  const imageFiles = [
    ...mediaPaths.map((path) => ({
      format: 'WEBP',
      url: new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
    })),
    ...sourcePaths.map((filename) => ({
      format: 'PNG',
      url: new URL(
        `../src/assets/source/species/belchers-lancelet/${filename}`,
        import.meta.url,
      ),
    })),
  ];
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%[channels]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, channels] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
        },
      );
      assert.equal(channels.trim().split(/\s+/)[0], 'srgb');
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );
  assert.ok(
    lancelet.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  const mediaText = mediaRecords
    .flatMap(({ alt, caption }) => [alt, caption ?? ''])
    .join(' ');
  assert.match(
    mediaText,
    /人字形肌节.*背索.*没有鱼类眼、颌、鳞片或成对鳍.*不保证精确显示全部肌节或鳍室数量/,
  );
  assert.match(
    mediaText,
    /概括性重建.*不代表已确认站位、深度或种群密度.*轮器位于口腔前庭内部.*不显示地下身体、食物颗粒或一次真实摄食结果/,
  );
  assert.match(
    mediaText,
    /暮色重建.*不据此判断昼夜节律.*不代表迁徙、集群或繁殖行为.*不代表真实人员、站位、规程、捕获数或种群结果/,
  );

  assert.equal(lancelet.sources.length, 20);
  assert.equal(
    new Set(lancelet.sources.map(({ url }) => url)).size,
    lancelet.sources.length,
  );
  assert.ok(lancelet.sources.every(({ title }) => title.length > 0));
  assert.ok(lancelet.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(lancelet.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    lancelet.sources.every(({ accessedAt }) => accessedAt === '2026-08-27'),
  );
  assert.deepEqual(
    new Set(lancelet.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );

  const profileText = [
    lancelet.summary,
    lancelet.description,
    lancelet.distribution.range,
    ...lancelet.habitats.flatMap(({ name, description }) => [name, description]),
    lancelet.measurements.length?.note ?? '',
    lancelet.diet.description,
    ...(lancelet.activity ?? []),
    ...lancelet.tags,
    ...(lancelet.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...lancelet.keyFacts,
    ...lancelet.threats,
    ...lancelet.conservationActions,
    ...lancelet.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
  ].join(' ');
  assert.match(
    profileText,
    /头索动物.*不是鱼类或脊椎动物.*没有真正头颅、脊柱、颌、鳞片、鳃盖和成对鳍.*背索.*吻端.*人字形肌节/,
  );
  assert.match(
    profileText,
    /口笠触手.*内部轮器.*咽鳃裂.*内柱黏液.*肝盲囊.*不宜直接称为原始肝脏/,
  );
  assert.match(
    profileText,
    /B\. japonicum.*48\s*至\s*64.*青岛.*日本.*旧称.*必须先确认物种身份/,
  );
  assert.match(
    profileText,
    /IUCN\s*尚无全球评估.*国家二级保护野生动物.*仅限野外种群/,
  );
  assert.doesNotMatch(profileText, /IUCN\s*(?:全球)?(?:评为|等级为|状态为)?\s*EN/i);
  assert.doesNotMatch(profileText, /全球(?:平均密度|总数|成年范围|最大体长)/);

  assert.equal(lancelet.featured, true);
  assert.equal(lancelet.publishedAt, '2026-08-27');
  assert.equal(lancelet.updatedAt, '2026-08-27');
});

test('registers Sea Lamprey as a complete Petromyzon marinus profile', async () => {
  const lamprey = findSpecies('sea-lamprey');

  assert.equal(lamprey.id, 'species-petromyzon-marinus');
  assert.equal(lamprey.names.zh, '海七鳃鳗');
  assert.equal(lamprey.names.en, 'Sea Lamprey');
  assert.deepEqual(lamprey.names.aliases, ['海七鰓鰻', 'Lake Lamprey']);
  assert.equal(lamprey.scientificName, 'Petromyzon marinus');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(lamprey).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', lamprey.scientificName, lamprey.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Petromyzonti', '七鳃鳗纲'],
      ['order', 'Petromyzontiformes', '七鳃鳗目'],
      ['family', 'Petromyzontidae', '七鳃鳗科'],
      ['genus', 'Petromyzon', '海七鳃鳗属'],
      ['species', 'Petromyzon marinus', '海七鳃鳗'],
    ],
  );
  assert.ok(
    ![
      'Actinopterygii',
      'Sarcopterygii',
      'Chondrichthyes',
      'Cephalaspidomorphi',
      'Cyclostomata',
    ].includes(lamprey.taxonomy.class.scientificName),
  );
  assert.deepEqual(
    {
      code: lamprey.conservation.code,
      trend: lamprey.conservation.trend,
      assessedYear: lamprey.conservation.assessedYear,
      criteria: lamprey.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'stable',
      assessedYear: 2022,
      criteria: undefined,
    },
  );

  assert.deepEqual(lamprey.distribution.realms, ['freshwater', 'marine']);
  assert.deepEqual(lamprey.distribution.continents, ['欧洲', '北美洲', '非洲']);
  assert.deepEqual(lamprey.distribution.regions, [
    '北大西洋西岸及入海河流',
    '北大西洋东岸、波罗的海及入海河流',
    '西部和中部地中海、亚得里亚海及北非沿岸',
    '五大湖与其他陆封湖泊种群',
  ]);
  assert.deepEqual(lamprey.distribution.countries, [
    '加拿大',
    '美国',
    '冰岛',
    '挪威',
    '芬兰',
    '爱沙尼亚',
    '拉脱维亚',
    '立陶宛',
    '波兰',
    '俄罗斯',
    '英国',
    '法国',
    '西班牙',
    '葡萄牙',
    '意大利',
    '克罗地亚',
    '波黑',
    '黑山',
    '摩洛哥',
    '阿尔及利亚',
    '突尼斯',
  ]);
  assert.deepEqual(lamprey.distribution.center, { lat: 48, lng: -25 });
  assert.match(
    lamprey.distribution.range,
    /北大西洋两岸.*波罗的海.*地中海.*Lake Erie.*Michigan.*Huron.*Superior.*外来入侵.*Lake Ontario.*起源.*争议/,
  );
  assert.equal(lamprey.habitats.length, 4);
  assert.equal(
    lamprey.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(
    lamprey.habitats.every(({ realm }) =>
      lamprey.distribution.realms.includes(realm),
    ),
  );
  assert.match(
    lamprey.habitats
      .flatMap(({ name, description }) => [name, description])
      .join(' '),
    /水流.*砾石.*产卵.*幼体.*粉砂.*细砂.*碎屑.*海洋.*宿主.*大湖.*寄生/,
  );

  assert.deepEqual(
    {
      min: lamprey.measurements.length?.min,
      max: lamprey.measurements.length?.max,
      unit: lamprey.measurements.length?.unit,
    },
    { min: 11.4, max: 120, unit: 'cm' },
  );
  assert.match(
    lamprey.measurements.length?.note ?? '',
    /FAO.*成体.*观测.*汇编.*海洋型.*陆封型.*不同成熟阶段.*不是普通成体范围/,
  );
  assert.deepEqual(
    {
      min: lamprey.measurements.weight?.min,
      max: lamprey.measurements.weight?.max,
      unit: lamprey.measurements.weight?.unit,
    },
    { min: undefined, max: 2.3, unit: 'kg' },
  );
  assert.match(
    lamprey.measurements.weight?.note ?? '',
    /1\.2\s*米.*最大标本.*湿重.*不是平均值.*全种常见上限/,
  );
  assert.deepEqual(lamprey.metrics, {});
  assert.ok(!('adultLengthCm' in lamprey.metrics));
  assert.ok(!('adultMassKg' in lamprey.metrics));
  assert.ok(!('lifespanYears' in lamprey.metrics));
  assert.ok(!('maxDiveDepthM' in lamprey.metrics));
  assert.ok(!('estimatedMatureIndividuals' in lamprey.metrics));

  assert.deepEqual(lamprey.diet.types, [
    'carnivore',
    'filter-feeder',
    'detritivore',
  ]);
  assert.deepEqual(lamprey.diet.foods, [
    '硅藻',
    '细菌',
    '有机碎屑',
    '宿主鱼血液',
    '宿主体液和少量组织',
  ]);
  assert.match(
    lamprey.diet.description,
    /埋栖幼体.*黏液.*滤取.*变态后.*寄生.*大型鱼类.*血液.*体液.*性成熟.*停止摄食/,
  );

  assert.equal(lamprey.storySections?.length, 6);
  assert.deepEqual(
    lamprey.storySections.map(({ key }) => key),
    [
      'jawless-vertebrate',
      'buried-larval-years',
      'metamorphic-rebuild',
      'attachment-and-breathing',
      'scent-guided-migration',
      'two-management-goals',
    ],
  );
  assert.ok(
    lamprey.storySections.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.equal(lamprey.keyFacts.length, 12);
  assert.equal(lamprey.threats.length, 7);
  assert.equal(lamprey.conservationActions.length, 9);
  assert.match(
    lamprey.conservationActions.slice(0, 3).join(' '),
    /原生范围.*阻隔.*Lake Erie.*Michigan.*Huron.*Superior.*TFM.*逐地核验.*争议/,
  );
  assert.equal(lamprey.featuredStats.length, 4);
  assert.deepEqual(
    lamprey.featuredStats.map(({ key, value, unit }) => ({ key, value, unit })),
    [
      { key: 'gill-pores-per-side', value: '7', unit: '个' },
      {
        key: 'maximum-documented-length',
        value: '1.2',
        unit: '米',
      },
      { key: 'larval-duration', value: '2 至 19+', unit: '年' },
      {
        key: 'anadromous-fecundity',
        value: '15.2 万至 30.5 万',
        unit: '粒',
      },
    ],
  );
  assert.match(
    lamprey.featuredStats.map(({ note }) => note ?? '').join(' '),
    /两侧共\s*14\s*个.*侧面.*近侧七孔.*2\.3\s*千克.*不是典型成体.*通常至少.*5\s*年.*温度.*食物.*种群.*陆封型.*4\.4\s*万.*10\.2\s*万/,
  );

  assert.equal(lamprey.media.gallery?.length, 5);
  const mediaPaths = [
    lamprey.media.image,
    ...lamprey.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/sea-lamprey/01-open-water-portrait.webp',
    './images/species/sea-lamprey/02-oral-disc-and-seven-gill-pores.webp',
    './images/species/sea-lamprey/03-gravel-riffle-nest-building.webp',
    './images/species/sea-lamprey/04-lake-trout-parasitic-feeding.webp',
    './images/species/sea-lamprey/05-buried-ammocoete-filter-feeding.webp',
    './images/species/sea-lamprey/06-edna-stream-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !lamprey.media.gallery.some(({ image }) => image === lamprey.media.image),
  );
  const mediaRecords = [lamprey.media, ...lamprey.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    lamprey.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ credit }) => credit === 'Fauna Atlas · AI 生成原创图像',
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  assert.deepEqual(
    mediaRecords.map(({ focalPoint }) => focalPoint),
    [
      { x: 0.72, y: 0.47 },
      { x: 0.4, y: 0.5 },
      { x: 0.66, y: 0.58 },
      { x: 0.57, y: 0.49 },
      { x: 0.33, y: 0.58 },
      { x: 0.59, y: 0.52 },
    ],
  );
  await Promise.all(
    mediaPaths.map((path) =>
      access(new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url)),
    ),
  );
  const sourcePaths = [
    '01-open-water-portrait-source.png',
    '02-oral-disc-and-seven-gill-pores-source.png',
    '03-gravel-riffle-nest-building-source.png',
    '04-lake-trout-parasitic-feeding-source.png',
    '05-buried-ammocoete-filter-feeding-source.png',
    '06-edna-stream-monitoring-source.png',
  ];
  const imageFiles = [
    ...mediaPaths.map((path) => ({
      format: 'WEBP',
      url: new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
    })),
    ...sourcePaths.map((filename) => ({
      format: 'PNG',
      url: new URL(
        `../src/assets/source/species/sea-lamprey/${filename}`,
        import.meta.url,
      ),
    })),
  ];
  assert.equal(imageFiles.length, 12);
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%[channels]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, channels] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
        },
      );
      assert.equal(channels.trim().split(/\s+/)[0], 'srgb');
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );
  const mediaText = mediaRecords
    .flatMap(({ alt, caption }) => [alt, caption ?? ''])
    .join(' ');
  assert.match(
    mediaText,
    /近侧七个.*圆形鳃孔.*重建.*不提供.*凭证标本级.*鉴定/,
  );
  assert.match(
    mediaText,
    /一次搬石动作.*不证明巢已完成.*Lake Erie.*Michigan.*Huron.*Superior.*争议.*Lake Ontario.*一次附着.*不代表宿主死亡/,
  );
  assert.match(
    mediaText,
    /幼体.*(?:形态|外形).*不能.*物种.*一(?:个|次)水样.*不能.*(?:存在|缺失|数量|趋势)/,
  );

  assert.equal(lamprey.sources.length, 19);
  assert.equal(
    new Set(lamprey.sources.map(({ url }) => url)).size,
    lamprey.sources.length,
  );
  assert.ok(lamprey.sources.every(({ title }) => title.length > 0));
  assert.ok(lamprey.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(lamprey.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    lamprey.sources.every(({ accessedAt }) => accessedAt === '2026-08-27'),
  );
  assert.deepEqual(
    new Set(lamprey.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );

  const profileText = [
    lamprey.summary,
    lamprey.description,
    lamprey.distribution.range,
    ...lamprey.habitats.flatMap(({ name, description }) => [name, description]),
    lamprey.measurements.length?.note ?? '',
    lamprey.measurements.weight?.note ?? '',
    lamprey.diet.description,
    ...(lamprey.activity ?? []),
    ...lamprey.tags,
    ...(lamprey.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...lamprey.keyFacts,
    ...lamprey.threats,
    ...lamprey.conservationActions,
    ...lamprey.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
  ].join(' ');
  assert.match(profileText, /无颌脊椎动物.*不是鳗鲡/);
  assert.match(profileText, /圆形口盘.*角质齿.*锉状舌/);
  assert.match(profileText, /每侧(?:有)?七个(?:圆形)?鳃孔/);
  assert.match(profileText, /(?:光滑)?无鳞.*没有胸鳍和腹鳍/);
  assert.match(profileText, /没有上下颌、鳞片、鳃盖或成对鳍/);
  assert.match(profileText, /幼体.*(?:软沉积|粉砂).*滤食/);
  assert.match(profileText, /变态.*眼.*齿盘.*海水/);
  assert.match(profileText, /寄生.*(?:血液|体液).*停止摄食/);
  assert.match(profileText, /一次(?:繁殖|产卵)后死亡/);
  assert.match(profileText, /没有.*出生河归巢.*幼体.*气味.*雄体信息素/);
  assert.match(profileText, /口盘.*(?:移动|逐块).*石头.*筑巢/);
  assert.match(profileText, /口盘.*宿主.*鳃囊.*外侧鳃孔/);
  assert.match(
    profileText,
    /全球.*LC.*趋势稳定.*OSPAR.*HELCOM.*区域.*更差/i,
  );
  assert.match(profileText, /大西洋.*原生/);
  assert.match(
    profileText,
    /原生范围.*连通海洋.*产卵砾石床.*幼体软底区/,
  );
  assert.match(profileText, /限制.*采砂.*粗底产卵区.*细沉积幼体区/);
  assert.match(profileText, /改善污水处理.*营养盐.*有毒污染物.*低氧/);
  assert.match(
    profileText,
    /上游五大湖.*外来入侵.*TFM.*Bayluscide.*屏障.*陷阱.*综合控制/,
  );
  assert.match(
    profileText,
    /Lake Ontario.*Lake Champlain.*Finger Lakes.*起源.*争议/,
  );
  assert.match(profileText, /Lake Ontario.*起源.*不能.*定论/);
  assert.doesNotMatch(profileText, /所有海七鳃鳗.*(?:外来|入侵)/);
  assert.doesNotMatch(
    profileText,
    /(?:大西洋|欧洲).{0,40}(?:TFM|Bayluscide).{0,40}(?:清除|压低)/,
  );
  assert.doesNotMatch(
    profileText,
    /五大湖.{0,40}(?:恢复|保护).{0,20}海七鳃鳗(?:种群)?/,
  );
  assert.doesNotMatch(
    profileText,
    /Lake Ontario.{0,50}(?:已经|确认|证实).{0,20}(?:原生|外来)/i,
  );
  assert.doesNotMatch(
    profileText,
    /(?:普通|典型|平均)成体(?:体长|总长|可达|长达|通常为|一般为).{0,15}1\.2\s*米/,
  );
  assert.doesNotMatch(
    profileText,
    /1\.2\s*米.{0,20}(?:是|属于|代表)(?:普通|典型|平均)成体/,
  );
  assert.doesNotMatch(
    profileText,
    /4[,，]?099\s*米.{0,20}(?:最大潜水深度|主动潜水上限)/,
  );
  assert.doesNotMatch(
    profileText,
    /(?:每只|单只).{0,15}(?:固定|必然).{0,15}(?:18|19\.3|20)\s*千克/,
  );
  assert.doesNotMatch(profileText, /固定(?:埋栖|幼体期)?\s*5\s*年/);
  assert.doesNotMatch(
    profileText,
    /海七鳃鳗(?:单独|独自).{0,30}五大湖.{0,30}(?:崩溃|毁灭)/,
  );
  assert.doesNotMatch(
    profileText,
    /TFM.{0,40}(?:只伤害海七鳃鳗|对所有非目标生物完全无害)/,
  );

  assert.equal(lamprey.featured, true);
  assert.equal(lamprey.publishedAt, '2026-08-27');
  assert.equal(lamprey.updatedAt, '2026-08-27');
});

test('registers Arapaima as a complete Arapaima gigas profile', async () => {
  const arapaima = findSpecies('arapaima');

  assert.equal(arapaima.id, 'species-arapaima-gigas');
  assert.equal(arapaima.slug, 'arapaima');
  assert.equal(arapaima.names.zh, '巨骨舌鱼');
  assert.equal(arapaima.names.en, 'Arapaima');
  assert.deepEqual(arapaima.names.aliases, ['巨巴西骨舌鱼', 'Pirarucu', 'Paiche']);
  assert.equal(arapaima.scientificName, 'Arapaima gigas');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(arapaima).map(({ rank, taxon }) => [rank, taxon.scientificName, taxon.zhName]),
      ['species', arapaima.scientificName, arapaima.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Actinopterygii', '辐鳍鱼纲'],
      ['order', 'Osteoglossiformes', '骨舌鱼目'],
      ['family', 'Arapaimidae', '巨骨舌鱼科'],
      ['genus', 'Arapaima', '巨骨舌鱼属'],
      ['species', 'Arapaima gigas', '巨骨舌鱼'],
    ],
  );
  assert.equal(arapaima.scientificName.split(' ')[0], 'Arapaima');
  assert.deepEqual(
    {
      code: arapaima.conservation.code,
      trend: arapaima.conservation.trend,
      assessedYear: arapaima.conservation.assessedYear,
      criteria: arapaima.conservation.criteria,
    },
    {
      code: 'DD',
      trend: 'unknown',
      assessedYear: 1996,
      criteria: undefined,
    },
  );

  assert.deepEqual(arapaima.distribution.realms, ['freshwater']);
  assert.deepEqual(arapaima.distribution.continents, ['南美洲']);
  assert.deepEqual(arapaima.distribution.countries, ['巴西', '秘鲁', '哥伦比亚', '厄瓜多尔']);
  assert.deepEqual(arapaima.distribution.center, { lat: -3.5, lng: -62 });
  assert.match(
    arapaima.distribution.range,
    /亚马孙低地.*2026.*索利蒙伊斯.*茹鲁阿.*普鲁斯.*桑塔伦.*不能.*整个流域.*圭亚那.*Arapaima arapaima.*玻利维亚.*(?:引入|养殖逸出)/,
  );
  assert.ok(!arapaima.distribution.countries.includes('圭亚那'));
  assert.ok(!arapaima.distribution.countries.includes('玻利维亚'));
  assert.equal(arapaima.habitats.length, 4);
  assert.equal(arapaima.habitats.filter(({ isPrimary }) => isPrimary).length, 1);
  assert.ok(arapaima.habitats.every(({ realm }) => arapaima.distribution.realms.includes(realm)));
  assert.match(
    arapaima.habitats.flatMap(({ name, description }) => [name, description]).join(' '),
    /洪泛湖.*缓流.*淹水森林.*水位回落.*浅水.*筑巢.*低氧.*鳔.*二氧化碳/,
  );

  assert.deepEqual(arapaima.measurements, {
    length: {
      max: 300,
      unit: 'cm',
      note: 'Smithsonian 等现代权威资料采用的保守近似上限；FishBase 的 450 cm 沿用未经现代凭证核验的历史记录，且早于属内拆分，不作为比较指标',
    },
    weight: {
      max: 200,
      unit: 'kg',
      note: '现代权威资料采用的近似上限，不代表普通成体或经统一方法核验的世界纪录',
    },
  });
  assert.deepEqual(arapaima.metrics, {});
  assert.ok(!('adultLengthCm' in arapaima.metrics));
  assert.ok(!('adultMassKg' in arapaima.metrics));
  assert.ok(!('lifespanYears' in arapaima.metrics));

  assert.deepEqual(arapaima.diet.types, ['carnivore', 'piscivore']);
  assert.deepEqual(arapaima.diet.foods, ['鱼类', '水生昆虫', '微型甲壳类', '其他水生无脊椎动物']);
  assert.match(arapaima.diet.description, /动物性食物.*成鱼.*鱼类.*幼鱼.*昆虫.*微型甲壳类.*植物.*主动摄食.*未厘清/);

  assert.equal(arapaima.storySections?.length, 6);
  assert.deepEqual(
    arapaima.storySections.map(({ key }) => key),
    [
      'giant-with-boundaries',
      'swim-bladder-lung',
      'flood-pulse-movement',
      'animal-dominated-diet',
      'variable-parental-care',
      'surface-count-management',
    ],
  );
  assert.ok(
    arapaima.storySections.every(({ label, title, body }) => label.length > 0 && title.length > 0 && body.length > 0),
  );
  assert.equal(arapaima.keyFacts.length, 12);
  assert.equal(arapaima.threats.length, 6);
  assert.equal(arapaima.conservationActions.length, 9);
  assert.equal(arapaima.featuredStats.length, 4);
  assert.deepEqual(
    arapaima.featuredStats.map(({ key, value, unit }) => ({
      key,
      value,
      unit,
    })),
    [
      {
        key: 'conservative-maximum-length',
        value: '接近 3',
        unit: '米',
      },
      {
        key: 'conservative-maximum-mass',
        value: '约 200',
        unit: '千克',
      },
      {
        key: 'juvenile-aerial-oxygen-share',
        value: '63–75',
        unit: '%',
      },
      {
        key: 'surface-count-validation',
        value: 'r = 0.98',
        unit: undefined,
      },
    ],
  );
  assert.match(
    arapaima.featuredStats.map(({ note }) => note ?? '').join(' '),
    /4\.5\s*米.*历史.*不是普通成体.*4–6\s*克.*600–700\s*克.*不能外推.*受训渔民.*标记重捕.*本地校准/,
  );

  assert.equal(arapaima.media.gallery?.length, 5);
  const mediaPaths = [arapaima.media.image, ...arapaima.media.gallery.map(({ image }) => image)];
  assert.deepEqual(mediaPaths, [
    './images/species/arapaima/01-floodplain-portrait.webp',
    './images/species/arapaima/02-bony-head-and-posterior-fins.webp',
    './images/species/arapaima/03-surface-air-breath.webp',
    './images/species/arapaima/04-flooded-forest-fish-foraging.webp',
    './images/species/arapaima/05-juvenile-school-guarding.webp',
    './images/species/arapaima/06-community-surface-count.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(!arapaima.media.gallery.some(({ image }) => image === arapaima.media.image));
  const mediaRecords = [arapaima.media, ...arapaima.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(arapaima.media.gallery.every(({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0));
  assert.ok(mediaRecords.every(({ credit }) => credit === 'Fauna Atlas · AI 生成原创图像'));
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint && focalPoint.x >= 0 && focalPoint.x <= 1 && focalPoint.y >= 0 && focalPoint.y <= 1,
    ),
  );
  assert.deepEqual(
    mediaRecords.map(({ focalPoint }) => focalPoint),
    [
      { x: 0.68, y: 0.51 },
      { x: 0.5, y: 0.52 },
      { x: 0.58, y: 0.51 },
      { x: 0.62, y: 0.53 },
      { x: 0.53, y: 0.49 },
      { x: 0.52, y: 0.58 },
    ],
  );
  await Promise.all(
    mediaPaths.map((path) => access(new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url))),
  );

  const sourcePaths = [
    '01-floodplain-portrait-source.png',
    '02-bony-head-and-posterior-fins-source.png',
    '03-surface-air-breath-source.png',
    '04-flooded-forest-fish-foraging-source.png',
    '05-juvenile-school-guarding-source.png',
    '06-community-surface-count-source.png',
  ];
  const imageFiles = [
    ...mediaPaths.map((path) => ({
      format: 'WEBP',
      url: new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
    })),
    ...sourcePaths.map((filename) => ({
      format: 'PNG',
      url: new URL(`../src/assets/source/species/arapaima/${filename}`, import.meta.url),
    })),
  ];
  assert.equal(imageFiles.length, 12);
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%[channels]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, channels] = metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
        },
      );
      assert.equal(channels.trim().split(/\s+/)[0], 'srgb');
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );

  const mediaText = mediaRecords.flatMap(({ alt, caption }) => [alt, caption ?? '']).join(' ');
  assert.match(
    mediaText,
    /不能替代凭证标本.*不能区分属内.*一次浮头.*不能给出固定间隔.*接近不等于.*不能判定成鱼性别.*不提供真实地点.*数量.*配额.*趋势/,
  );
  assert.match(mediaText, /宽阔骨质头.*巨大的重叠鳞片.*后置背鳍和臀鳍.*圆尾.*红橙色鳞缘/);

  assert.equal(arapaima.sources.length, 28);
  assert.equal(new Set(arapaima.sources.map(({ url }) => url)).size, arapaima.sources.length);
  assert.ok(arapaima.sources.every(({ title }) => title.length > 0));
  assert.ok(arapaima.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(arapaima.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(arapaima.sources.every(({ accessedAt }) => accessedAt === '2026-08-27'));
  assert.deepEqual(
    new Set(arapaima.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );

  const profileText = [
    arapaima.summary,
    arapaima.description,
    arapaima.distribution.range,
    ...arapaima.habitats.flatMap(({ name, description }) => [name, description]),
    arapaima.measurements.length?.note ?? '',
    arapaima.measurements.weight?.note ?? '',
    arapaima.diet.description,
    ...(arapaima.activity ?? []),
    ...arapaima.tags,
    ...(arapaima.storySections ?? []).flatMap(({ label, title, body }) => [label, title, body]),
    ...arapaima.keyFacts,
    ...arapaima.threats,
    ...arapaima.conservationActions,
    ...arapaima.featuredStats.flatMap(({ label, value, unit, note }) => [label, value, unit ?? '', note ?? '']),
  ].join(' ');
  assert.match(profileText, /Arapaima gigas.*Arapaimidae/);
  assert.match(profileText, /A\. agassizii.*A\. arapaima.*A\. leptosoma.*A\. mapae.*不能写成单型属/);
  assert.match(profileText, /2026.*索利蒙伊斯.*茹鲁阿.*普鲁斯.*桑塔伦.*未覆盖整个属/);
  assert.match(profileText, /IUCN.*DD.*趋势未知.*1996.*CITES.*附录 II.*贸易管制不等于 IUCN/);
  assert.match(profileText, /接近 3 米.*约 200 千克/);
  assert.match(profileText, /4\.5 米.*(?:缺少现代凭证|历史值.*不作为现代纪录)/);
  assert.match(profileText, /强制空气呼吸.*高度血管化.*鳔.*大部分二氧化碳.*鳃/);
  assert.match(profileText, /63%.*75%.*4–6 克.*600–700 克.*不能外推/);
  assert.match(profileText, /洪水.*淹水森林.*水位回落.*湖泊.*水道.*横向连通/);
  assert.match(profileText, /成鱼.*鱼类.*幼鱼.*昆虫.*微型甲壳类.*植物材料.*未厘清/);
  assert.match(profileText, /筑巢.*雄鱼.*更多.*雌鱼.*协防.*多亲/);
  assert.match(profileText, /筑巢.*护卵护幼/);
  assert.match(profileText, /不能.*严格单配.*(?:典型)?口孵/);
  assert.match(profileText, /受训渔民.*水面计数.*r\s*=\s*0\.98.*天气.*本地校准/);
  assert.match(profileText, /禁捕湖.*巡护.*配额.*CITES.*追溯.*新的 IUCN 全球评估/);
  assert.doesNotMatch(profileText, /Arapaima gigas 是巨骨舌鱼属(?:中|内)?唯一(?:的)?种/);
  assert.doesNotMatch(profileText, /(?:世界上)?最大(?:的)?淡水鱼[。；]/);
  assert.doesNotMatch(profileText, /(?:固定|每隔)\s*(?:5|五)\s*(?:至|到|–|—|-)\s*(?:15|十五)\s*分钟/);
  assert.doesNotMatch(profileText, /IUCN.{0,30}(?:全球)?(?:濒危|易危)/);
  assert.doesNotMatch(profileText, /严格单配制[。；]/);
  assert.doesNotMatch(profileText, /(?:巨骨舌鱼|Arapaima gigas)(?:是|属于)(?:典型|确定)(?:的)?口孵鱼[。；]/);
  assert.doesNotMatch(profileText, /(?:捕食|吃)(?:猴|鸟|小型哺乳动物)/);

  assert.equal(arapaima.featured, true);
  assert.equal(arapaima.publishedAt, '2026-08-27');
  assert.equal(arapaima.updatedAt, '2026-08-27');
});

test('registers Atlantic bluefin tuna as a complete Thunnus thynnus profile', async () => {
  const tuna = findSpecies('atlantic-bluefin-tuna');

  assert.equal(tuna.id, 'species-thunnus-thynnus');
  assert.equal(tuna.slug, 'atlantic-bluefin-tuna');
  assert.equal(tuna.names.zh, '大西洋蓝鳍金枪鱼');
  assert.equal(tuna.names.en, 'Atlantic Bluefin Tuna');
  assert.deepEqual(tuna.names.aliases, [
    '北方蓝鳍金枪鱼',
    'Northern Bluefin Tuna',
  ]);
  assert.equal(tuna.scientificName, 'Thunnus thynnus');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(tuna).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', tuna.scientificName, tuna.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Actinopterygii', '辐鳍鱼纲'],
      ['order', 'Scombriformes', '鲭形目'],
      ['family', 'Scombridae', '鲭科'],
      ['genus', 'Thunnus', '金枪鱼属'],
      ['species', 'Thunnus thynnus', '大西洋蓝鳍金枪鱼'],
    ],
  );
  assert.equal(tuna.scientificName.split(' ')[0], 'Thunnus');
  assert.deepEqual(
    {
      code: tuna.conservation.code,
      trend: tuna.conservation.trend,
      assessedYear: tuna.conservation.assessedYear,
      criteria: tuna.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'unknown',
      assessedYear: 2021,
      criteria: undefined,
    },
  );

  assert.deepEqual(tuna.distribution.realms, ['marine']);
  assert.deepEqual(tuna.distribution.continents, [
    '欧洲',
    '北美洲',
    '非洲',
    '亚洲',
    '南美洲',
  ]);
  assert.equal(tuna.distribution.countries.length, 21);
  assert.ok(
    [
      '加拿大',
      '美国',
      '墨西哥',
      '冰岛',
      '西班牙',
      '意大利',
      '土耳其',
      '摩洛哥',
    ].every((country) => tuna.distribution.countries.includes(country)),
  );
  assert.equal(
    new Set(tuna.distribution.countries).size,
    tuna.distribution.countries.length,
  );
  assert.deepEqual(tuna.distribution.center, { lat: 38, lng: -30 });
  assert.match(
    tuna.distribution.range,
    /北大西洋.*外海.*陆架.*沿岸索饵区.*地中海.*西大西洋.*历史或边缘.*黑海.*西波罗的海.*巴西东北.*南非.*不等于完整出现记录/,
  );
  assert.equal(tuna.habitats.length, 4);
  assert.equal(tuna.habitats.filter(({ isPrimary }) => isPrimary).length, 1);
  assert.ok(
    tuna.habitats.every(({ realm }) =>
      tuna.distribution.realms.includes(realm),
    ),
  );
  assert.match(
    tuna.habitats
      .flatMap(({ name, description }) => [name, description])
      .join(' '),
    /北大西洋外海.*陆架边缘.*高纬.*索饵.*暖水外海产卵区.*体外受精.*浮性卵.*适温范围.*随海区和年份变化.*中层.*一千米以下/,
  );

  assert.deepEqual(tuna.measurements, {
    length: {
      max: 330,
      unit: 'cm',
      note: 'ICCAT 2019 SCRS 生物学摘要采用的最大直线叉长；不是普通成体范围，也不表示与 725 千克上限来自同一尾实测个体',
    },
    weight: {
      max: 725,
      unit: 'kg',
      note: 'ICCAT 2019 SCRS 生物学摘要采用的近似体重上限；不是普通成体、全球统一测量样本范围或与 330 厘米记录配对的个体',
    },
  });
  assert.deepEqual(tuna.metrics, {});
  assert.ok(!('adultLengthCm' in tuna.metrics));
  assert.ok(!('adultMassKg' in tuna.metrics));
  assert.ok(!('lifespanYears' in tuna.metrics));
  assert.ok(!('maxDiveDepthM' in tuna.metrics));
  assert.ok(!('topSpeedKph' in tuna.metrics));

  assert.deepEqual(tuna.diet.types, ['carnivore', 'piscivore']);
  assert.deepEqual(tuna.diet.foods, [
    '鲱鱼和鲭鱼等群游鱼',
    '其他海洋鱼类',
    '鱿鱼等头足类',
    '甲壳类',
  ]);
  assert.match(
    tuna.diet.description,
    /机会性.*鱼类.*头足类.*甲壳类.*海区.*年份.*季节.*体长.*不支持.*固定主食/,
  );
  assert.match(
    tuna.activity.join(' '),
    /长距离季节移动.*45°W 管理线.*混合.*结群巡游.*一千米以上.*区域性内温.*体外受精.*分批产卵.*不筑巢.*不护幼/,
  );

  assert.equal(tuna.storySections?.length, 6);
  assert.deepEqual(
    tuna.storySections.map(({ key }) => key),
    [
      'streamlined-ocean-giant',
      'regional-endothermy-and-depth',
      'ocean-crossing-stock-mixing',
      'variable-pelagic-diet',
      'broad-spawning-waters',
      'management-with-uncertainty',
    ],
  );
  assert.ok(
    tuna.storySections.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.equal(tuna.keyFacts.length, 12);
  assert.equal(tuna.threats.length, 6);
  assert.equal(tuna.conservationActions.length, 9);
  assert.equal(tuna.featuredStats.length, 4);
  assert.deepEqual(
    tuna.featuredStats.map(({ key, value, unit }) => ({ key, value, unit })),
    [
      {
        key: 'maximum-straight-fork-length',
        value: '330',
        unit: '厘米',
      },
      {
        key: 'approximate-maximum-mass',
        value: '725',
        unit: '千克',
      },
      {
        key: 'recorded-dive-depth',
        value: '> 1,000',
        unit: '米',
      },
      {
        key: 'approximate-lifespan',
        value: '约 40',
        unit: '年',
      },
    ],
  );
  const statsText = tuna.featuredStats
    .flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ])
    .join(' ');
  assert.match(
    statsText,
    /最大直线叉长.*330.*不是普通成体.*725.*不是常见体重.*> 1,000.*不是所有个体.*约 40.*近似值/,
  );
  assert.doesNotMatch(
    statsText,
    /48,?403|3,?081\.6|2,?568|(?:70|80|100)\s*(?:km\/h|千米\/小时)/,
  );

  assert.equal(tuna.media.gallery?.length, 5);
  const mediaPaths = [
    tuna.media.image,
    ...tuna.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/atlantic-bluefin-tuna/01-open-ocean-portrait.webp',
    './images/species/atlantic-bluefin-tuna/02-streamlined-body-and-finlets.webp',
    './images/species/atlantic-bluefin-tuna/03-pelagic-schooling-cruise.webp',
    './images/species/atlantic-bluefin-tuna/04-prey-school-foraging.webp',
    './images/species/atlantic-bluefin-tuna/05-spawning-aggregation.webp',
    './images/species/atlantic-bluefin-tuna/06-satellite-tag-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !tuna.media.gallery.some(({ image }) => image === tuna.media.image),
  );
  const mediaRecords = [tuna.media, ...tuna.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    tuna.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ credit }) => credit === 'Fauna Atlas · AI 生成原创图像',
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  assert.deepEqual(
    mediaRecords.map(({ focalPoint }) => focalPoint),
    [
      { x: 0.65, y: 0.5 },
      { x: 0.51, y: 0.5 },
      { x: 0.59, y: 0.49 },
      { x: 0.61, y: 0.51 },
      { x: 0.51, y: 0.49 },
      { x: 0.52, y: 0.5 },
    ],
  );
  await Promise.all(
    mediaPaths.map((path) =>
      access(
        new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
      ),
    ),
  );

  const sourcePaths = [
    '01-open-ocean-portrait-source.png',
    '02-streamlined-body-and-finlets-source.png',
    '03-pelagic-schooling-cruise-source.png',
    '04-prey-school-foraging-source.png',
    '05-spawning-aggregation-source.png',
    '06-satellite-tag-monitoring-source.png',
  ];
  const imageFiles = [
    ...mediaPaths.map((path) => ({
      format: 'WEBP',
      url: new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
    })),
    ...sourcePaths.map((filename) => ({
      format: 'PNG',
      url: new URL(
        `../src/assets/source/species/atlantic-bluefin-tuna/${filename}`,
        import.meta.url,
      ),
    })),
  ];
  assert.equal(imageFiles.length, 12);
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%[channels]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, channels] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
        },
      );
      assert.equal(channels.trim().split(/\s+/)[0], 'srgb');
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );

  const mediaText = mediaRecords
    .flatMap(({ alt, caption }) => [alt, caption ?? ''])
    .join(' ');
  assert.match(
    mediaText,
    /不能替代凭证标本.*不(?:给出|提供).*迁徙路线.*接近只重建索饵情境.*没有证明正在产卵.*系绳和锚点没有清楚呈现/,
  );
  assert.match(mediaText, /短胸鳍.*两枚背鳍.*尾前小鳍/);
  assert.match(mediaText, /七尾.*第一背鳍可收进背沟.*五尾.*卫星档案标签/);
  assert.ok(mediaRecords.every(({ alt }) => !alt.includes('北大西洋')));

  assert.equal(tuna.sources.length, 32);
  assert.equal(
    new Set(tuna.sources.map(({ url }) => url)).size,
    tuna.sources.length,
  );
  assert.ok(tuna.sources.every(({ title }) => title.length > 0));
  assert.ok(tuna.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(tuna.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    tuna.sources.every(({ accessedAt }) => accessedAt === '2026-08-27'),
  );
  assert.deepEqual(
    new Set(tuna.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );
  assert.ok(
    [
      'https://www.iccat.int/Documents/SCRS/ExecSum/BFT_E_ENG.pdf',
      'https://www.iccat.int/Documents/Meetings/Docs/2019/REPORTS/2019_SCRS_ENG.pdf',
      'https://doi.org/10.1098/rsos.190203',
      'https://doi.org/10.1093/icesjms/fsr008',
    ].every((url) => tuna.sources.some((source) => source.url === url)),
  );
  const sourcesByUrl = new Map(tuna.sources.map((source) => [source.url, source]));
  assert.equal(
    sourcesByUrl.get('https://doi.org/10.1098/rsos.190203')?.title,
    'Gleiss et al. 2019 — Atlantic bluefin tuna locomotor behaviour',
  );
  assert.equal(
    sourcesByUrl.get('https://doi.org/10.1093/icesjms/fsr008')?.title,
    'Muhling et al. 2011 — Climate change and Gulf of Mexico spawning habitat',
  );
  assert.ok(
    !tuna.sources.some(({ title, url }) =>
      /Andrzejaczek|Arrizabalaga|Incardona|Deepwater Horizon|crude-oil|srep33824|pnas\.1320950111/i.test(
        `${title} ${url}`,
      ),
    ),
  );

  const profileText = [
    tuna.summary,
    tuna.description,
    tuna.distribution.range,
    ...tuna.habitats.flatMap(({ name, description }) => [name, description]),
    tuna.measurements.length?.note ?? '',
    tuna.measurements.weight?.note ?? '',
    tuna.diet.description,
    ...(tuna.activity ?? []),
    ...tuna.tags,
    ...(tuna.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...tuna.keyFacts,
    ...tuna.threats,
    ...tuna.conservationActions,
    ...tuna.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
  ].join(' ');
  assert.match(
    profileText,
    /Thunnus thynnus.*T\. orientalis.*T\. maccoyii.*独立种/,
  );
  assert.match(profileText, /IUCN.*2021.*LC.*趋势未知|IUCN.*2021.*LC.*unknown/);
  assert.match(profileText, /330 厘米.*725 千克.*不是普通成体.*同一尾/);
  assert.match(profileText, /约 40 年.*一千米以上.*上限或能力记录.*固定值/);
  assert.match(profileText, /逆流热交换.*区域性内温.*(?:并非|而非).*全身恒温/);
  assert.match(profileText, /跨大西洋.*45°W.*管理线.*不是.*生态屏障/);
  assert.match(profileText, /食物.*海区.*年份.*季节.*体长.*固定主食/);
  assert.match(
    profileText,
    /地中海.*西大西洋.*主要繁殖.*西侧产卵证据.*墨西哥湾.*体外受精.*分批排卵.*不筑巢.*不护幼/,
  );
  assert.match(
    profileText,
    /ICCAT 2025.*2020.*东部 Fcur\/F0\.1 为 0\.81.*95% 置信区间 0\.48—1\.62.*西部 F2018—2020\/F0\.1 为 0\.53.*80% 置信区间 0\.49—0\.58.*正式结论均为未发生过度捕捞/,
  );
  assert.match(profileText, /西部.*过度捕捞.*概率不超过 1%/);
  assert.match(
    profileText,
    /东部 2022.*三个模型.*产卵亲鱼生物量回升.*幅度.*速率.*绝对生物量.*差异.*相对捕捞率点估计.*1\.16.*0\.72.*0\.54.*真实 B0\.1 参考点.*未知/,
  );
  assert.match(profileText, /西部.*招募潜力不确定.*没有估算生物量参考点/);
  assert.match(profileText, /两区当前生物量状态都无法判定/);
  assert.match(profileText, /2026.*没有公开最终结论/);
  assert.match(profileText, /CITES.*未.*附录.*ICCAT.*eBCD/);
  assert.match(
    profileText,
    /配额.*观察.*转笼.*立体视频.*港口核验.*电子监测.*eBCD/,
  );
  assert.doesNotMatch(
    profileText,
    /(?:全球种群|IUCN.{0,30})(?:持续增长|正在增加)/,
  );
  assert.doesNotMatch(
    profileText,
    /(?:两个管理种群|东部|西部).{0,30}(?:均已|已经|完全)恢复/,
  );
  assert.doesNotMatch(
    profileText,
    /45°W.{0,30}(?:生态隔离|地理隔离|无法跨越|迁徙终点)/,
  );
  assert.doesNotMatch(
    profileText,
    /Slope Sea.{0,30}(?:第三个独立种群|第三管理种群).{0,20}(?:确认|承认|建立)/,
  );
  assert.doesNotMatch(
    profileText,
    /CITES.{0,20}(?:当前|现行).{0,10}(?:已|被)?列入.{0,10}(?:附录 I|附录 II|Appendix I|Appendix II)/,
  );
  assert.doesNotMatch(
    profileText,
    /(?:最高时速|top speed).{0,20}(?:70|80|100)/i,
  );
  assert.doesNotMatch(
    profileText,
    /(?:大西洋蓝鳍金枪鱼|本种)(?:是|属于).{0,8}全身恒温/,
  );
  assert.doesNotMatch(
    profileText,
    /全身(?:维持|保持).{0,8}(?:单一|固定)(?:体温|温度)/,
  );
  assert.doesNotMatch(profileText, /地中海.{0,30}西大西洋.{0,30}23—28°C/);
  assert.doesNotMatch(
    profileText,
    /石油泄漏.*(?:本种|大西洋蓝鳍金枪鱼|卵|胚胎)/,
  );
  assert.doesNotMatch(profileText, /是否已过度开发/);

  assert.equal(tuna.featured, true);
  assert.equal(tuna.publishedAt, '2026-08-27');
  assert.equal(tuna.updatedAt, '2026-08-27');
});

test('registers the Great Blue-spotted Mudskipper as a complete Boleophthalmus pectinirostris profile', async () => {
  const mudskipper = findSpecies('great-blue-spotted-mudskipper');

  assert.equal(mudskipper.id, 'species-boleophthalmus-pectinirostris');
  assert.equal(mudskipper.slug, 'great-blue-spotted-mudskipper');
  assert.equal(mudskipper.names.zh, '大弹涂鱼');
  assert.equal(mudskipper.names.en, 'Great Blue-spotted Mudskipper');
  assert.deepEqual(mudskipper.names.aliases, ['花跳', '花条']);
  assert.ok(!mudskipper.names.aliases.includes('Giant Mudskipper'));
  assert.equal(mudskipper.scientificName, 'Boleophthalmus pectinirostris');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(mudskipper).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', mudskipper.scientificName, mudskipper.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Actinopterygii', '辐鳍鱼纲'],
      ['order', 'Gobiiformes', '虾虎鱼目'],
      ['family', 'Oxudercidae', '背眼虾虎鱼科'],
      ['genus', 'Boleophthalmus', '大弹涂鱼属'],
      ['species', 'Boleophthalmus pectinirostris', '大弹涂鱼'],
    ],
  );
  assert.equal(mudskipper.scientificName.split(' ')[0], 'Boleophthalmus');
  assert.deepEqual(
    {
      code: mudskipper.conservation.code,
      trend: mudskipper.conservation.trend,
      assessedYear: mudskipper.conservation.assessedYear,
      criteria: mudskipper.conservation.criteria,
    },
    {
      code: 'VU',
      trend: 'decreasing',
      assessedYear: 2024,
      criteria: 'A2bcd',
    },
  );

  assert.deepEqual(mudskipper.distribution.realms, ['marine']);
  assert.deepEqual(mudskipper.distribution.continents, ['亚洲']);
  assert.deepEqual(mudskipper.distribution.countries, [
    '中国',
    '韩国',
    '日本',
    '越南',
    '马来西亚',
    '印度尼西亚',
  ]);
  assert.equal(
    new Set(mudskipper.distribution.countries).size,
    mudskipper.distribution.countries.length,
  );
  assert.deepEqual(mudskipper.distribution.center, { lat: 27, lng: 124 });
  assert.match(
    mudskipper.distribution.range,
    /东亚.*东南亚.*西太平洋.*东印度洋.*河口潮间带.*湿软泥滩.*潮沟.*红树林边缘/,
  );
  assert.equal(mudskipper.habitats.length, 4);
  assert.equal(
    mudskipper.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(
    mudskipper.habitats.every(({ realm }) =>
      mudskipper.distribution.realms.includes(realm),
    ),
  );
  assert.match(
    mudskipper.habitats
      .flatMap(({ name, description }) => [name, description])
      .join(' '),
    /河口开阔软泥潮滩.*红树林边缘.*潮沟.*浅潮池.*低盐.*潮滩泥洞.*空气产卵室/,
  );

  assert.deepEqual(mudskipper.measurements, {
    length: {
      max: 17.5,
      unit: 'cm',
      note: 'FishBase 对雄性或未判性个体的最大总长记录；台湾野外资料常见 10—15 厘米。',
    },
  });
  assert.deepEqual(mudskipper.metrics, {});
  assert.ok(!('adultLengthCm' in mudskipper.metrics));
  assert.ok(!('lifespanYears' in mudskipper.metrics));

  assert.deepEqual(mudskipper.diet.types, ['herbivore']);
  assert.deepEqual(mudskipper.diet.foods, [
    '底栖硅藻',
    '微型底栖藻类',
    '泥表有机藻膜',
  ]);
  assert.match(
    mudskipper.diet.description,
    /低潮.*宽口.*下颌齿.*泥表微型底栖藻类.*香港.*较大的硅藻.*地点.*季节.*体长/,
  );
  assert.match(
    mudskipper.activity.join(' '),
    /低潮.*泥表.*肉质胸鳍.*爬行.*短距离跳跃.*求偶.*空气.*浅水.*高潮.*泥洞.*雄鱼.*护卵/,
  );

  assert.equal(mudskipper.storySections?.length, 6);
  assert.deepEqual(
    mudskipper.storySections.map(({ key }) => key),
    [
      'blue-spotted-identity',
      'amphibious-respiration',
      'fin-supported-motion',
      'diatom-grazing',
      'air-filled-nursery',
      'shared-mudflat',
    ],
  );
  assert.ok(
    mudskipper.storySections.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.equal(mudskipper.keyFacts.length, 6);
  assert.equal(mudskipper.threats.length, 4);
  assert.equal(mudskipper.conservationActions.length, 5);
  assert.equal(mudskipper.featuredStats.length, 4);
  assert.deepEqual(
    mudskipper.featuredStats.map(({ key, value, unit }) => ({
      key,
      value,
      unit,
    })),
    [
      { key: 'max-length', value: '17.5', unit: '厘米' },
      { key: 'generation-length', value: '4.5', unit: '年' },
      { key: 'selected-diatom-size', value: '>50', unit: '微米' },
      { key: 'burrow-air-volume', value: '30–>400', unit: '毫升' },
    ],
  );
  const statsText = mudskipper.featuredStats
    .flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ])
    .join(' ');
  assert.match(
    statsText,
    /报告最大总长.*17\.5.*最大记录.*估算世代长度.*4\.5.*IUCN.*选择摄食硅藻.*>50.*香港.*洞穴回收气体.*30–>400.*有明海/,
  );

  assert.equal(mudskipper.media.gallery?.length, 5);
  const mediaPaths = [
    mudskipper.media.image,
    ...mudskipper.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/great-blue-spotted-mudskipper/01-mudflat-adult-portrait.webp',
    './images/species/great-blue-spotted-mudskipper/02-dorsal-fins-and-blue-spots.webp',
    './images/species/great-blue-spotted-mudskipper/03-mudflat-fiddler-crab-cooccurrence.webp',
    './images/species/great-blue-spotted-mudskipper/04-diatom-film-grazing.webp',
    './images/species/great-blue-spotted-mudskipper/05-short-mudflat-skip.webp',
    './images/species/great-blue-spotted-mudskipper/06-air-filled-egg-chamber-cutaway.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !mudskipper.media.gallery.some(
      ({ image }) => image === mudskipper.media.image,
    ),
  );
  const mediaRecords = [mudskipper.media, ...mudskipper.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    mudskipper.media.gallery.every(
      ({ title, caption }) =>
        title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ credit }) => credit === 'Fauna Atlas · AI 生成原创图像',
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  await Promise.all(
    mediaPaths.map((path) =>
      access(
        new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
      ),
    ),
  );

  const sourcePaths = [
    '01-mudflat-adult-portrait-source.png',
    '02-dorsal-fins-and-blue-spots-source.png',
    '03-mudflat-fiddler-crab-cooccurrence-source.png',
    '04-diatom-film-grazing-source.png',
    '05-short-mudflat-skip-source.png',
    '06-air-filled-egg-chamber-cutaway-source.png',
  ];
  const imageFiles = [
    ...mediaPaths.map((path) => ({
      format: 'WEBP',
      url: new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
    })),
    ...sourcePaths.map((filename) => ({
      format: 'PNG',
      url: new URL(
        `../src/assets/source/species/great-blue-spotted-mudskipper/${filename}`,
        import.meta.url,
      ),
    })),
  ];
  assert.equal(imageFiles.length, 12);
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%[channels]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, channels] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
        },
      );
      assert.equal(channels.trim().split(/\s+/)[0], 'srgb');
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );

  const mediaText = mediaRecords
    .flatMap(({ alt, caption }) => [alt, caption ?? ''])
    .join(' ');
  assert.match(mediaText, /高位眼.*两枚(?:分离的)?背鳍.*浅蓝斑/);
  assert.match(
    mediaText,
    /不能展示皮肤与口咽表面.*不能替代凭证标本.*共现不等于互利、共生或捕食.*不能识别硅藻种类.*不定义完整步态.*不给出真实洞穴尺寸.*补气频率/,
  );
  assert.doesNotMatch(
    mediaText,
    /(?:鱼与蟹|大弹涂鱼与弧边招潮蟹)(?:会|能|相互).{0,12}(?:喂食|合作|依存|互利)/,
  );

  assert.equal(mudskipper.sources.length, 19);
  assert.equal(
    new Set(mudskipper.sources.map(({ url }) => url)).size,
    mudskipper.sources.length,
  );
  assert.ok(mudskipper.sources.every(({ title }) => title.length > 0));
  assert.ok(mudskipper.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(mudskipper.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    mudskipper.sources.every(
      ({ accessedAt }) => accessedAt === '2026-08-27',
    ),
  );
  assert.deepEqual(
    new Set(mudskipper.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );
  assert.ok(
    [
      'https://doi.org/10.2305/IUCN.UK.2025-1.RLTS.T241148837A241148840.en',
      'https://journals.australian.museum/media/Uploads/Journals/17704/93_complete.pdf',
      'https://doi.org/10.1007/s00227-003-1067-y',
      'https://doi.org/10.1002/jmor.1052140305',
      'https://doi.org/10.1002/jmor.21404',
      'https://doi.org/10.1242/jeb.217307',
      'https://doi.org/10.1111/jfb.12324',
    ].every((url) =>
      mudskipper.sources.some((source) => source.url === url),
    ),
  );
  assert.ok(
    !mudskipper.sources.some(({ title, url }) =>
      /summary\/8414|Boleophthalmus chinensis|Tamura 1976/i.test(
        `${title} ${url}`,
      ),
    ),
  );

  const profileText = [
    mudskipper.names.en,
    mudskipper.scientificName,
    mudskipper.summary,
    mudskipper.description,
    mudskipper.distribution.range,
    ...mudskipper.habitats.flatMap(({ name, description }) => [
      name,
      description,
    ]),
    mudskipper.measurements.length?.note ?? '',
    mudskipper.diet.description,
    ...(mudskipper.activity ?? []),
    ...mudskipper.tags,
    ...(mudskipper.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...mudskipper.keyFacts,
    ...mudskipper.threats,
    ...mudskipper.conservationActions,
    ...mudskipper.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
  ].join(' ');
  assert.match(
    profileText,
    /Great Blue-spotted Mudskipper.*Giant Mudskipper.*Periophthalmodon schlosseri/,
  );
  assert.match(profileText, /IUCN.*2024.*VU A2bcd.*decreasing/);
  assert.match(profileText, /FishBase.*最大总长.*10—15 厘米/);
  assert.match(profileText, /17\.5.*不是普通成鱼的典型体长/);
  assert.match(
    profileText,
    /皮肤.*口咽—鳃盖.*鳃.*共同.*气体交换|皮肤.*口咽—鳃盖.*鳃.*共同.*呼吸/,
  );
  assert.match(profileText, /肉质胸鳍.*支撑.*爬行.*短跃.*不是四足动物式步态/);
  assert.match(
    profileText,
    /硅藻.*微型底栖藻.*香港.*(?:超过|>50).*微米.*(?:不是|非).*固定/,
  );
  assert.match(
    profileText,
    /产卵室.*壁面.*顶部.*空气.*雄鱼.*护卵.*30.*400.*补气.*机制模型.*(?:尚不能|不能).*直接/,
  );
  assert.match(
    profileText,
    /大弹涂鱼.*弧边招潮蟹.*(?:共域|共现)/,
  );
  assert.match(
    profileText,
    /(?:不是|不等于|不能写|不代表).*(?:互利共生|互利、共生)/,
  );
  assert.doesNotMatch(
    profileText,
    /(?:完全|只|仅)(?:依靠|靠|用)皮肤呼吸|长有肺|离水后不用鳃/,
  );
  assert.doesNotMatch(
    profileText,
    /(?:大弹涂鱼|本种).{0,12}(?:捕食|主要吃|以.{0,6}为食).{0,12}(?:招潮蟹|小鱼|昆虫)/,
  );
  assert.doesNotMatch(
    profileText,
    /(?:大弹涂鱼|本种)(?:的)?英文(?:主名|名)(?:是|为) Giant Mudskipper/,
  );
  assert.doesNotMatch(profileText, /(?:43%.*皮肤|52%.*鳃)/);

  assert.equal(mudskipper.featured, true);
  assert.equal(mudskipper.publishedAt, '2026-08-27');
  assert.equal(mudskipper.updatedAt, '2026-08-27');
});

test('registers the Chinese Horseshoe Crab as a complete Tachypleus tridentatus profile', async () => {
  const horseshoeCrab = findSpecies('chinese-horseshoe-crab');

  assert.equal(horseshoeCrab.id, 'species-tachypleus-tridentatus');
  assert.equal(horseshoeCrab.slug, 'chinese-horseshoe-crab');
  assert.equal(horseshoeCrab.names.zh, '中华鲎');
  assert.equal(horseshoeCrab.names.en, 'Chinese Horseshoe Crab');
  assert.deepEqual(horseshoeCrab.names.aliases, [
    '中国鲎',
    '三棘鲎',
    'Tri-spine Horseshoe Crab',
  ]);
  assert.equal(horseshoeCrab.scientificName, 'Tachypleus tridentatus');
  assert.deepEqual(
    [
      ...getSpeciesTaxonomyPath(horseshoeCrab).map(({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ]),
      ['species', horseshoeCrab.scientificName, horseshoeCrab.names.zh],
    ],
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Arthropoda', '节肢动物门'],
      ['class', 'Merostomata', '肢口纲'],
      ['order', 'Xiphosurida', '剑尾目'],
      ['family', 'Limulidae', '鲎科'],
      ['genus', 'Tachypleus', '东方鲎属'],
      ['species', 'Tachypleus tridentatus', '中华鲎'],
    ],
  );
  assert.equal(horseshoeCrab.scientificName.split(' ')[0], 'Tachypleus');
  assert.deepEqual(
    {
      code: horseshoeCrab.conservation.code,
      trend: horseshoeCrab.conservation.trend,
      assessedYear: horseshoeCrab.conservation.assessedYear,
      criteria: horseshoeCrab.conservation.criteria,
    },
    {
      code: 'EN',
      trend: 'decreasing',
      assessedYear: 2018,
      criteria: 'A4bcd',
    },
  );

  assert.deepEqual(horseshoeCrab.distribution.realms, ['marine', 'terrestrial']);
  assert.deepEqual(horseshoeCrab.distribution.continents, ['亚洲']);
  assert.deepEqual(horseshoeCrab.distribution.countries, [
    '中国',
    '日本',
    '越南',
    '菲律宾',
    '马来西亚',
    '文莱',
    '印度尼西亚',
  ]);
  assert.equal(
    new Set(horseshoeCrab.distribution.countries).size,
    horseshoeCrab.distribution.countries.length,
  );
  assert.deepEqual(horseshoeCrab.distribution.center, { lat: 22.5, lng: 115 });
  assert.match(
    horseshoeCrab.distribution.range,
    /东亚.*东南亚.*西太平洋.*东印度洋.*日本.*中国.*越南.*菲律宾.*婆罗洲.*印度尼西亚/,
  );
  assert.equal(horseshoeCrab.habitats.length, 4);
  assert.equal(
    horseshoeCrab.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(
    horseshoeCrab.habitats.every(({ realm }) =>
      horseshoeCrab.distribution.realms.includes(realm),
    ),
  );
  assert.match(
    horseshoeCrab.habitats
      .flatMap(({ name, description }) => [name, description])
      .join(' '),
    /近岸浅海沙泥质海床.*潮间带沙泥滩.*海草.*浅潮下带.*上部潮间带沙质产卵滩/,
  );

  assert.deepEqual(horseshoeCrab.measurements, {
    length: {
      max: 85,
      unit: 'cm',
      note: 'IUCN 汇总的沙巴罕见成年雌体总长，包含尾剑；不是普通成体体长，也不是统一方法得到的全球最大值。',
    },
    weight: {
      max: 4.33,
      unit: 'kg',
      note: '菲律宾巴拉望 Honda Bay 样本中成年雌体最大体重；这是当地样本上限，不是全球最大体重。',
    },
  });
  assert.deepEqual(horseshoeCrab.metrics, {});
  assert.ok(!('adultLengthCm' in horseshoeCrab.metrics));
  assert.ok(!('adultMassKg' in horseshoeCrab.metrics));
  assert.ok(!('lifespanYears' in horseshoeCrab.metrics));

  assert.deepEqual(horseshoeCrab.diet.types, ['omnivore']);
  assert.deepEqual(horseshoeCrab.diet.foods, [
    '多毛类',
    '摇蚊等昆虫幼虫',
    '小型甲壳类',
    '薄壳双壳类',
    '寡毛类',
    '沉积有机物与海草相关食物网来源',
  ]);
  assert.match(
    horseshoeCrab.diet.description,
    /幼体.*小型底栖无脊椎动物.*混合食物.*稳定同位素.*海草.*不能.*专吃海草/,
  );
  assert.match(
    horseshoeCrab.activity.join(' '),
    /成体.*近岸海床.*产卵.*幼体.*退潮.*回潮.*抱钩.*外部受精.*蜕皮.*浅潮下带.*尾剑.*五对书鳃/,
  );

  assert.equal(horseshoeCrab.storySections?.length, 6);
  assert.deepEqual(
    horseshoeCrab.storySections.map(({ key }) => key),
    [
      'chelicerate-not-crab',
      'sex-and-claspers',
      'eggs-to-offshore',
      'low-tide-foraging',
      'blue-blood-and-tal',
      'four-linked-habitats',
    ],
  );
  assert.ok(
    horseshoeCrab.storySections.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.equal(horseshoeCrab.keyFacts.length, 7);
  assert.equal(horseshoeCrab.threats.length, 6);
  assert.equal(horseshoeCrab.conservationActions.length, 7);
  assert.equal(horseshoeCrab.featuredStats.length, 4);
  assert.deepEqual(
    horseshoeCrab.featuredStats.map(({ key, value, unit }) => ({
      key,
      value,
      unit,
    })),
    [
      { key: 'recorded-total-length', value: '85.0', unit: '厘米' },
      { key: 'northern-generation-length', value: '20.25', unit: '年' },
      { key: 'assessed-reduction', value: '≥50', unit: '%' },
      { key: 'hong-kong-molts', value: '约 17', unit: '次蜕皮' },
    ],
  );
  const statsText = horseshoeCrab.featuredStats
    .flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ])
    .join(' ');
  assert.match(
    statsText,
    /罕见雌体总长记录.*85\.0.*沙巴.*北部估算世代长度.*20\.25.*南部.*三代推断减少.*≥50.*60 年.*香港成长概括.*约 17.*香港政府/,
  );

  assert.equal(horseshoeCrab.media.gallery?.length, 5);
  const mediaPaths = [
    horseshoeCrab.media.image,
    ...horseshoeCrab.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/chinese-horseshoe-crab/01-shallow-seabed-adult-portrait.webp',
    './images/species/chinese-horseshoe-crab/02-seabed-foraging-trail.webp',
    './images/species/chinese-horseshoe-crab/03-spawning-pair-at-tide-line.webp',
    './images/species/chinese-horseshoe-crab/04-buried-egg-cluster-cutaway.webp',
    './images/species/chinese-horseshoe-crab/05-juvenile-nursery-mudflat.webp',
    './images/species/chinese-horseshoe-crab/06-blue-hemolymph-and-amebocytes.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !horseshoeCrab.media.gallery.some(
      ({ image }) => image === horseshoeCrab.media.image,
    ),
  );
  const mediaRecords = [
    horseshoeCrab.media,
    ...horseshoeCrab.media.gallery,
  ];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    horseshoeCrab.media.gallery.every(
      ({ title, caption }) =>
        title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ credit }) => credit === 'Fauna Atlas · AI 生成原创图像',
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );

  const sourcePaths = [
    '01-shallow-seabed-adult-portrait-source.png',
    '02-seabed-foraging-trail-source.png',
    '03-spawning-pair-at-tide-line-source.png',
    '04-buried-egg-cluster-cutaway-source.png',
    '05-juvenile-nursery-mudflat-source.png',
    '06-blue-hemolymph-and-amebocytes-source.png',
  ];
  const imageFiles = [
    ...mediaPaths.map((path) => ({
      format: 'WEBP',
      url: new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
    })),
    ...sourcePaths.map((filename) => ({
      format: 'PNG',
      url: new URL(
        `../src/assets/source/species/chinese-horseshoe-crab/${filename}`,
        import.meta.url,
      ),
    })),
  ];
  assert.equal(imageFiles.length, 12);
  await Promise.all(imageFiles.map(({ url }) => access(url)));
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%[channels]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, channels] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
        },
      );
      assert.equal(channels.trim().split(/\s+/)[0], 'srgb');
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );

  const mediaText = mediaRecords
    .flatMap(({ alt, caption }) => [alt, caption ?? ''])
    .join(' ');
  assert.match(
    mediaText,
    /马蹄形前体.*具棘后体.*完整长尾剑.*雄体.*抱附.*雌体.*卵窝.*7 至 8 厘米.*幼体.*海草.*蓝色.*血蓝蛋白.*TAL/,
  );
  assert.doesNotMatch(
    mediaText,
    /成对出现(?:表示|证明)终生配偶|专吃海草|尾剑(?:是|作为|用作).{0,8}毒刺/,
  );

  assert.equal(horseshoeCrab.sources.length, 20);
  assert.equal(
    new Set(horseshoeCrab.sources.map(({ url }) => url)).size,
    horseshoeCrab.sources.length,
  );
  assert.ok(horseshoeCrab.sources.every(({ title }) => title.length > 0));
  assert.ok(horseshoeCrab.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(
    horseshoeCrab.sources.every(({ url }) => url.startsWith('https://')),
  );
  assert.ok(
    horseshoeCrab.sources.every(
      ({ accessedAt }) => accessedAt === '2026-08-27',
    ),
  );
  assert.deepEqual(
    new Set(horseshoeCrab.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'ecology', 'general']),
  );
  assert.ok(
    [
      'https://www.marinespecies.org/aphia.php?p=taxdetails&id=238270',
      'https://doi.org/10.2305/IUCN.UK.2019-1.RLTS.T21309A149768986.en',
      'https://doi.org/10.1007/s00227-015-2647-3',
      'https://doi.org/10.1080/0022293031000155377',
      'https://doi.org/10.1007/s11802-022-5164-2',
      'https://doi.org/10.1016/j.aquaculture.2019.734576',
      'https://doi.org/10.1093/oxfordjournals.jbchem.a122276',
      'https://doi.org/10.1186/s12864-020-6488-1',
    ].every((url) =>
      horseshoeCrab.sources.some((source) => source.url === url),
    ),
  );

  const profileText = [
    horseshoeCrab.names.en,
    ...(horseshoeCrab.names.aliases ?? []),
    horseshoeCrab.scientificName,
    horseshoeCrab.summary,
    horseshoeCrab.description,
    horseshoeCrab.distribution.range,
    ...horseshoeCrab.habitats.flatMap(({ name, description }) => [
      name,
      description,
    ]),
    horseshoeCrab.measurements.length?.note ?? '',
    horseshoeCrab.measurements.weight?.note ?? '',
    horseshoeCrab.diet.description,
    ...(horseshoeCrab.activity ?? []),
    ...horseshoeCrab.tags,
    ...(horseshoeCrab.storySections ?? []).flatMap(
      ({ label, title, body }) => [label, title, body],
    ),
    ...horseshoeCrab.keyFacts,
    ...horseshoeCrab.threats,
    ...horseshoeCrab.conservationActions,
    ...horseshoeCrab.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
  ].join(' ');
  assert.match(profileText, /IUCN.*2018.*EN A4bcd.*decreasing/);
  assert.match(
    profileText,
    /中华鲎不是螃蟹.*马蹄形前体.*具棘后体.*长尾剑.*海生铰口类节肢动物/,
  );
  assert.match(
    profileText,
    /化石历史.*古老.*不是四亿多年不变.*分化与演化/,
  );
  assert.match(
    profileText,
    /雄体.*前缘.*凹入.*第二、第三对.*抱钩.*不证明.*终生/,
  );
  assert.match(
    profileText,
    /卵.*沙.*外部受精.*幼体.*潮间带.*多次蜕皮.*浅潮下带.*成体海床/,
  );
  assert.match(
    profileText,
    /血蓝蛋白.*铜.*氧.*蓝色.*变形细胞.*因子 C.*TAL.*内毒素检测/,
  );
  assert.match(
    profileText,
    /成体海床.*浅潮下带.*幼体育幼滩.*上部产卵沙滩.*连通/,
  );
  assert.match(profileText, /国家二级保护.*2026-08-27.*CITES/);
  assert.doesNotMatch(
    profileText,
    /中华鲎(?:就是|是)螃蟹|尾剑(?:是|作为|用作).{0,8}毒刺/,
  );
  assert.doesNotMatch(profileText, /蓝血.*治(?:疗|愈).*(?:癌|感染)/);
  assert.doesNotMatch(profileText, /中华鲎.*四亿.*没有变化/);

  assert.equal(horseshoeCrab.featured, true);
  assert.equal(horseshoeCrab.publishedAt, '2026-08-27');
  assert.equal(horseshoeCrab.updatedAt, '2026-08-27');
});

test('registers the Goliath Birdeater as a complete Theraphosa blondi profile', async () => {
  const goliathBirdeater = findSpecies('goliath-birdeater');

  assert.equal(goliathBirdeater.id, 'species-theraphosa-blondi');
  assert.equal(goliathBirdeater.slug, 'goliath-birdeater');
  assert.equal(goliathBirdeater.names.zh, '巨人捕鸟蛛');
  assert.equal(goliathBirdeater.names.en, 'Goliath Birdeater');
  assert.equal(goliathBirdeater.scientificName, 'Theraphosa blondi');
  assert.deepEqual(
    getSpeciesTaxonomyPath(goliathBirdeater).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Arthropoda', '节肢动物门'],
      ['class', 'Arachnida', '蛛形纲'],
      ['order', 'Araneae', '蜘蛛目'],
      ['family', 'Theraphosidae', '捕鸟蛛科'],
      ['genus', 'Theraphosa', '巨人捕鸟蛛属'],
    ],
  );

  assert.deepEqual(
    {
      code: goliathBirdeater.conservation.code,
      trend: goliathBirdeater.conservation.trend,
      assessedYear: goliathBirdeater.conservation.assessedYear,
      criteria: goliathBirdeater.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );
  assert.ok(!('assessedYear' in goliathBirdeater.conservation));
  assert.ok(!('criteria' in goliathBirdeater.conservation));

  assert.deepEqual(goliathBirdeater.distribution.realms, ['terrestrial']);
  assert.deepEqual(goliathBirdeater.distribution.continents, ['南美洲']);
  assert.deepEqual(goliathBirdeater.distribution.countries, [
    '委内瑞拉',
    '巴西',
    '圭亚那',
    '法国',
  ]);
  assert.deepEqual(goliathBirdeater.distribution.regions, [
    '委内瑞拉南部',
    '巴西北部',
    '圭亚那',
    '法属圭亚那',
  ]);
  assert.deepEqual(goliathBirdeater.distribution.center, {
    lat: 4.5,
    lng: -59,
  });
  assert.match(
    goliathBirdeater.distribution.range,
    /(?:WSC|World Spider Catalog).*委内瑞拉.*巴西.*圭亚那.*法属圭亚那.*物种级野外研究.*苏里南.*史密森尼.*同属种误鉴.*地图中心.*不代表采集点/,
  );
  assert.equal(goliathBirdeater.habitats.length, 4);
  assert.equal(
    goliathBirdeater.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(
    goliathBirdeater.habitats.every(({ realm }) => realm === 'terrestrial'),
  );

  assert.deepEqual(
    {
      max: goliathBirdeater.measurements.length?.max,
      unit: goliathBirdeater.measurements.length?.unit,
    },
    { max: 12, unit: 'cm' },
  );
  assert.match(
    goliathBirdeater.measurements.length?.note ?? '',
    /身体长度上限.*不含步足.*不是腿展.*普通成体均值/,
  );
  assert.deepEqual(
    {
      max: goliathBirdeater.measurements.weight?.max,
      unit: goliathBirdeater.measurements.weight?.unit,
    },
    { max: 170, unit: 'g' },
  );
  assert.match(
    goliathBirdeater.measurements.weight?.note ?? '',
    /一只两岁圈养个体.*1998 年 2 月.*未公开原始称量报告.*不代表野外或典型/,
  );
  assert.equal(goliathBirdeater.measurements.wingspan, undefined);
  assert.deepEqual(goliathBirdeater.metrics, {});
  assert.ok(!('adultLengthCm' in goliathBirdeater.metrics));
  assert.ok(!('adultMassKg' in goliathBirdeater.metrics));
  assert.ok(!('lifespanYears' in goliathBirdeater.metrics));
  assert.ok(!('wingspanCm' in goliathBirdeater.metrics));

  assert.deepEqual(goliathBirdeater.diet.types, [
    'carnivore',
    'insectivore',
  ]);
  assert.ok(!goliathBirdeater.diet.foods.some((food) => /鸟/.test(food)));

  assert.equal(goliathBirdeater.storySections?.length, 6);
  assert.equal(
    new Set(goliathBirdeater.storySections.map(({ key }) => key)).size,
    6,
  );
  assert.ok(
    goliathBirdeater.storySections.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.equal(goliathBirdeater.featuredStats.length, 4);
  assert.deepEqual(
    goliathBirdeater.featuredStats.map(({ key }) => key),
    [
      'body-length-upper',
      'reported-leg-span',
      'captive-record-mass',
      'female-captive-longevity',
    ],
  );
  const captiveMassStat = goliathBirdeater.featuredStats.find(
    ({ key }) => key === 'captive-record-mass',
  );
  assert.deepEqual(
    { value: captiveMassStat?.value, unit: captiveMassStat?.unit },
    { value: '170', unit: '克' },
  );
  assert.match(
    captiveMassStat?.note ?? '',
    /两岁圈养个体.*原始称量报告.*未公开.*不是野外或典型质量/,
  );

  assert.equal(goliathBirdeater.media.gallery?.length, 5);
  const mediaPaths = [
    goliathBirdeater.media.image,
    ...goliathBirdeater.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/goliath-birdeater/01-burrow-entrance-portrait.webp',
    './images/species/goliath-birdeater/02-eye-cluster-and-pedipalps.webp',
    './images/species/goliath-birdeater/03-nocturnal-invertebrate-approach.webp',
    './images/species/goliath-birdeater/04-defensive-stridulation-posture.webp',
    './images/species/goliath-birdeater/05-female-guarding-egg-sac.webp',
    './images/species/goliath-birdeater/06-noninvasive-burrow-survey.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !goliathBirdeater.media.gallery.some(
      ({ image }) => image === goliathBirdeater.media.image,
    ),
  );
  const mediaRecords = [
    goliathBirdeater.media,
    ...goliathBirdeater.media.gallery,
  ];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    goliathBirdeater.media.gallery.every(
      ({ title, caption }) =>
        title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ credit }) => credit === 'Fauna Atlas · AI 生成原创图像',
    ),
  );

  const sourcePaths = [
    '01-burrow-entrance-portrait-source.png',
    '02-eye-cluster-and-pedipalps-source.png',
    '03-nocturnal-invertebrate-approach-source.png',
    '04-defensive-stridulation-posture-source.png',
    '05-female-guarding-egg-sac-source.png',
    '06-noninvasive-burrow-survey-source.png',
  ];
  const imageFiles = [
    ...mediaPaths.map((path) => ({
      format: 'WEBP',
      url: new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
    })),
    ...sourcePaths.map((filename) => ({
      format: 'PNG',
      url: new URL(
        `../src/assets/source/species/goliath-birdeater/${filename}`,
        import.meta.url,
      ),
    })),
  ];
  assert.equal(imageFiles.length, 12);
  await Promise.all(imageFiles.map(({ url }) => access(url)));
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%[channels]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, channels] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
        },
      );
      if (format === 'PNG') assert.equal(opaque, 'True');
      assert.equal(channels.trim().split(/\s+/)[0], 'srgb');
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );

  assert.equal(goliathBirdeater.sources.length, 22);
  assert.equal(
    new Set(goliathBirdeater.sources.map(({ url }) => url)).size,
    goliathBirdeater.sources.length,
  );
  assert.ok(goliathBirdeater.sources.every(({ title }) => title.length > 0));
  assert.ok(goliathBirdeater.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(
    goliathBirdeater.sources.every(({ url }) => url.startsWith('https://')),
  );
  assert.ok(
    goliathBirdeater.sources.every(
      ({ accessedAt }) => accessedAt === '2026-08-28',
    ),
  );
  assert.deepEqual(
    new Set(goliathBirdeater.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'ecology', 'general']),
  );
  assert.ok(
    [
      'https://wsc.nmbe.ch/lsid/urn:lsid:nmbe.ch:spidersp:002488',
      'https://www.wsc.nmbe.ch/genus-catalog/3612/Theraphosa',
      'https://www.iucnredlist.org/search?query=Theraphosa%20blondi&searchType=species',
      'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
      'https://checklist.cites.org/',
      'https://nationalzoo.si.edu/animals/goliath-bird-eating-tarantula',
      'https://doi.org/10.7717/peerj.3972',
      'https://doi.org/10.1111/j.1469-7998.1995.tb01770.x',
      'https://doi.org/10.1590/S0104-79302002000200010',
      'https://doi.org/10.1080/01650521.2016.1237802',
    ].every((url) =>
      goliathBirdeater.sources.some((source) => source.url === url),
    ),
  );

  const editorialText = [
    goliathBirdeater.summary,
    goliathBirdeater.description,
    goliathBirdeater.distribution.range,
    ...goliathBirdeater.habitats.flatMap(({ name, description }) => [
      name,
      description,
    ]),
    goliathBirdeater.measurements.length?.note ?? '',
    goliathBirdeater.measurements.weight?.note ?? '',
    goliathBirdeater.diet.description,
    ...(goliathBirdeater.activity ?? []),
    ...goliathBirdeater.tags,
    ...(goliathBirdeater.storySections ?? []).flatMap(
      ({ label, title, body }) => [label, title, body],
    ),
    ...goliathBirdeater.keyFacts,
    ...goliathBirdeater.threats,
    ...goliathBirdeater.conservationActions,
    ...goliathBirdeater.featuredStats.flatMap(
      ({ label, value, unit, note }) => [
        label,
        value,
        unit ?? '',
        note ?? '',
      ],
    ),
  ].join(' ');
  assert.match(editorialText, /雾网.*(?:不能|不代表).*(?:常规|日常)/);
  assert.match(editorialText, /后足.*(?:擦过|扬起).*腹部.*刚毛/);
  assert.match(editorialText, /(?:刚毛不是被.*射出|不是把毛射出)/);
  assert.match(editorialText, /离体.*不能.*人类.*致死/);
  assert.match(editorialText, /IUCN.*(?:尚未评估|没有本种评估)/);
  assert.match(editorialText, /CITES.*(?:未收录|没有本种条目)/);
  assert.doesNotMatch(
    editorialText,
    /(?<!不)以鸟(?:类)?为(?:主食|常规食物|日常食物)|(?:^|[。；]\s*)(?:本种|巨人捕鸟蛛|这种蜘蛛|它)?(?:通常|经常|常规|日常)(?:会|主动)?捕鸟/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:平均|典型|普通成体)(?:体重|质量)?(?:为|是|可达)?\s*170\s*(?:克|g)|170\s*(?:克|g)\s*(?:平均|典型|常态)/,
  );
  assert.doesNotMatch(
    editorialText,
    /射毛|发射刚毛|射出刚毛|刚毛(?:会|可|能够)(?:被)?(?:射出|发射)/,
  );
  assert.doesNotMatch(
    editorialText,
    /致命毒液|毒液(?:会|可|能够|足以)(?:对人)?致命|拥有致命剧毒/,
  );
  assert.doesNotMatch(
    editorialText,
    /IUCN(?:已|已经)(?:评估|列为|评为)|CITES(?:已|已经)(?:收录|列入)|(?:列入|收录于)\s*CITES\s*附录/,
  );

  assert.equal(goliathBirdeater.featured, true);
  assert.equal(goliathBirdeater.publishedAt, '2026-08-28');
  assert.equal(goliathBirdeater.updatedAt, '2026-08-28');
});

test('registers the Chinese Mantis as a complete Tenodera sinensis profile', async () => {
  const chineseMantis = findSpecies('chinese-mantis');

  assert.equal(chineseMantis.id, 'species-tenodera-sinensis');
  assert.equal(chineseMantis.slug, 'chinese-mantis');
  assert.equal(chineseMantis.names.zh, '中华大刀螳');
  assert.equal(chineseMantis.names.en, 'Chinese Mantis');
  assert.deepEqual(chineseMantis.names.aliases, [
    '中华刀螳',
    '中华大刀螂',
    'Chinese Praying Mantis',
    'Chinese Mantid',
    'Tenodera aridifolia sinensis',
    'Paratenodera sinensis',
    'Mantis mandarinea',
  ]);
  assert.equal(chineseMantis.scientificName, 'Tenodera sinensis');
  assert.notEqual(
    chineseMantis.scientificName,
    'Tenodera aridifolia sinensis',
  );
  assert.deepEqual(
    getSpeciesTaxonomyPath(chineseMantis).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Arthropoda', '节肢动物门'],
      ['class', 'Insecta', '昆虫纲'],
      ['order', 'Mantodea', '螳螂目'],
      ['family', 'Mantidae', '螳科'],
      ['genus', 'Tenodera', '大刀螳属'],
    ],
  );

  assert.deepEqual(
    {
      code: chineseMantis.conservation.code,
      trend: chineseMantis.conservation.trend,
      assessedYear: chineseMantis.conservation.assessedYear,
      criteria: chineseMantis.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );
  assert.ok(!('assessedYear' in chineseMantis.conservation));
  assert.ok(!('criteria' in chineseMantis.conservation));

  assert.deepEqual(chineseMantis.distribution.realms, ['terrestrial']);
  assert.deepEqual(chineseMantis.distribution.continents, [
    '亚洲',
    '北美洲',
  ]);
  assert.deepEqual(chineseMantis.distribution.countries, [
    '中国',
    '韩国',
    '日本',
    '俄罗斯',
    '尼泊尔',
    '泰国',
    '美国',
    '加拿大',
  ]);
  assert.deepEqual(chineseMantis.distribution.regions, [
    '中国大陆与台湾',
    '朝鲜半岛南部',
    '日本列岛',
    '俄罗斯远东及亚洲温带记录区',
    '尼泊尔和泰国的已列记录区',
    '美国东部及其他引入记录区',
    '加拿大南部引入记录区',
  ]);
  assert.deepEqual(chineseMantis.distribution.center, { lat: 35, lng: 112 });
  assert.match(
    chineseMantis.distribution.range,
    /原生.*亚洲.*中国.*尼泊尔.*日本.*俄罗斯.*泰国.*韩国.*台湾.*引入.*美国.*加拿大.*(?:不能|不等于).*繁殖种群/,
  );
  assert.equal(chineseMantis.habitats.length, 4);
  assert.equal(
    chineseMantis.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(
    chineseMantis.habitats.every(({ realm }) => realm === 'terrestrial'),
  );
  const habitatText = chineseMantis.habitats
    .flatMap(({ name, description }) => [name, description])
    .join(' ');
  assert.match(habitatText, /温带高草.*草本.*河岸.*农田边缘.*城市.*郊区/);
  assert.match(habitatText, /北美引入区.*(?:不定义|不代表).*亚洲/);

  assert.deepEqual(chineseMantis.measurements.length, {
    min: 5.42,
    max: 10.08,
    unit: 'cm',
    note: chineseMantis.measurements.length?.note,
  });
  assert.match(
    chineseMantis.measurements.length?.note ?? '',
    /韩国.*37 只成体雄性.*17 只成体雌性.*实际样本量未报告.*不是全球极值/,
  );
  assert.equal(chineseMantis.measurements.weight, undefined);
  assert.equal(chineseMantis.measurements.wingspan, undefined);
  assert.deepEqual(chineseMantis.metrics, {});
  assert.ok(!('adultLengthCm' in chineseMantis.metrics));
  assert.ok(!('adultMassKg' in chineseMantis.metrics));
  assert.ok(!('lifespanYears' in chineseMantis.metrics));
  assert.ok(!('wingspanCm' in chineseMantis.metrics));
  assert.ok(!('estimatedMatureIndividuals' in chineseMantis.metrics));

  assert.deepEqual(chineseMantis.diet.types, [
    'carnivore',
    'insectivore',
  ]);
  assert.equal(chineseMantis.diet.foods.length, 4);
  assert.match(
    chineseMantis.diet.foods.join(' '),
    /鳞翅目.*直翅目.*双翅目.*半翅目.*蜘蛛.*传粉.*寄生蜂.*机会性脊椎动物/,
  );
  assert.match(
    chineseMantis.diet.description,
    /DNA.*植食者.*捕食者.*传粉者.*寄生蜂.*不能.*只吃害虫.*小型脊椎动物.*没有日常食谱占比/,
  );

  assert.equal(chineseMantis.storySections?.length, 6);
  assert.deepEqual(
    chineseMantis.storySections.map(({ key }) => key),
    [
      'species-not-subspecies',
      'sex-and-season',
      'ootheca-and-molts',
      'eyes-to-forelegs',
      'generalist-not-pest-specialist',
      'cannibalism-range-and-data-gap',
    ],
  );
  assert.equal(
    new Set(chineseMantis.storySections.map(({ key }) => key)).size,
    6,
  );
  assert.ok(
    chineseMantis.storySections.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );

  assert.equal(chineseMantis.featuredStats.length, 4);
  assert.deepEqual(
    chineseMantis.featuredStats.map(({ key, value, unit }) => ({
      key,
      value,
      unit,
    })),
    [
      { key: 'male-voucher-length', value: '54.2–89.1', unit: 'mm' },
      { key: 'female-voucher-length', value: '58.2–100.8', unit: 'mm' },
      { key: 'ootheca-length', value: '30.0–42.2', unit: 'mm' },
      { key: 'nymphal-molts', value: '6–7', unit: '次' },
    ],
  );
  assert.ok(
    chineseMantis.featuredStats.every(
      ({ label, note }) => label.length > 0 && (note?.length ?? 0) > 0,
    ),
  );
  assert.match(
    chineseMantis.featuredStats.find(({ key }) => key === 'ootheca-length')
      ?.note ?? '',
    /15–29 个卵室.*(?:不是|不等于)卵数/,
  );
  assert.match(
    chineseMantis.featuredStats.find(({ key }) => key === 'nymphal-molts')
      ?.note ?? '',
    /食物.*温度.*改变.*发育/,
  );

  assert.equal(chineseMantis.media.gallery?.length, 5);
  const mediaPaths = [
    chineseMantis.media.image,
    ...chineseMantis.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/chinese-mantis/01-adult-female-vegetation-portrait.webp',
    './images/species/chinese-mantis/02-adult-male-brown-morph.webp',
    './images/species/chinese-mantis/03-prestrike-cricket-tracking.webp',
    './images/species/chinese-mantis/04-distant-courtship-approach.webp',
    './images/species/chinese-mantis/05-ootheca-on-shrub-branch.webp',
    './images/species/chinese-mantis/06-successional-old-field-habitat.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !chineseMantis.media.gallery.some(
      ({ image }) => image === chineseMantis.media.image,
    ),
  );
  const mediaRecords = [
    chineseMantis.media,
    ...chineseMantis.media.gallery,
  ];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    chineseMantis.media.gallery.every(
      ({ title, caption }) =>
        title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ credit }) => credit === 'Fauna Atlas · AI 生成原创图像',
    ),
  );

  const sourcePaths = [
    '01-adult-female-vegetation-portrait-source.png',
    '02-adult-male-brown-morph-source.png',
    '03-prestrike-cricket-tracking-source.png',
    '04-distant-courtship-approach-source.png',
    '05-ootheca-on-shrub-branch-source.png',
    '06-successional-old-field-habitat-source.png',
  ];
  const imageFiles = [
    ...mediaPaths.map((path) => ({
      format: 'WEBP',
      url: new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
    })),
    ...sourcePaths.map((filename) => ({
      format: 'PNG',
      url: new URL(
        `../src/assets/source/species/chinese-mantis/${filename}`,
        import.meta.url,
      ),
    })),
  ];
  assert.equal(imageFiles.length, 12);
  await Promise.all(imageFiles.map(({ url }) => access(url)));
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%[channels]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, channels] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
        },
      );
      assert.equal(channels.trim().split(/\s+/)[0], 'srgb');
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );

  assert.equal(chineseMantis.sources.length, 28);
  assert.equal(
    new Set(chineseMantis.sources.map(({ url }) => url)).size,
    chineseMantis.sources.length,
  );
  assert.ok(chineseMantis.sources.every(({ title }) => title.length > 0));
  assert.ok(chineseMantis.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(
    chineseMantis.sources.every(({ url }) => url.startsWith('https://')),
  );
  assert.ok(
    chineseMantis.sources.every(
      ({ accessedAt }) => accessedAt === '2026-08-28',
    ),
  );
  assert.deepEqual(
    new Set(chineseMantis.sources.map(({ kind }) => kind)),
    new Set([
      'taxonomy',
      'distribution',
      'general',
      'conservation',
      'ecology',
    ]),
  );
  assert.ok(
    [
      'https://doi.org/10.3897/zookeys.1206.123355',
      'https://taxatree.tbn.org.tw/taxa/8eb77f1b-dcf5-4fd1-84f3-7f4326b5e24f',
      'https://www.iucnredlist.org/search?query=Tenodera%20sinensis&searchType=species',
      'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
      'https://doi.org/10.1016/j.fooweb.2023.e00280',
      'https://doi.org/10.1085/jgp.57.1.93',
      'https://doi.org/10.3389/fncir.2022.893004',
      'https://doi.org/10.1016/S0003-3472(87)80024-6',
      'https://doi.org/10.1086/505757',
      'https://doi.org/10.1098/rspb.2016.0656',
    ].every((url) =>
      chineseMantis.sources.some((source) => source.url === url),
    ),
  );

  const editorialText = [
    chineseMantis.summary,
    chineseMantis.description,
    chineseMantis.distribution.range,
    ...chineseMantis.habitats.flatMap(({ name, description }) => [
      name,
      description,
    ]),
    chineseMantis.measurements.length?.note ?? '',
    chineseMantis.diet.description,
    ...chineseMantis.diet.foods,
    ...(chineseMantis.activity ?? []),
    ...chineseMantis.tags,
    ...(chineseMantis.storySections ?? []).flatMap(
      ({ label, title, body }) => [label, title, body],
    ),
    ...chineseMantis.keyFacts,
    ...chineseMantis.threats,
    ...chineseMantis.conservationActions,
    ...chineseMantis.featuredStats.flatMap(
      ({ label, value, unit, note }) => [
        label,
        value,
        unit ?? '',
        note ?? '',
      ],
    ),
    ...mediaRecords.flatMap(({ alt, title, caption }) => [
      alt,
      title ?? '',
      caption ?? '',
    ]),
  ].join(' ');
  assert.match(
    editorialText,
    /Tenodera aridifolia sinensis.*历史亚种组合/,
  );
  assert.match(
    editorialText,
    /54\.2.*89\.1.*58\.2.*100\.8.*(?:重叠|不是全球极值)/,
  );
  assert.match(
    editorialText,
    /15(?:–|至)29 个卵室.*(?:不等于|不是)卵数/,
  );
  assert.match(
    editorialText,
    /510(?:–|至)520\s*nm.*370\s*nm.*(?:不能|不等于).*颜色辨别/,
  );
  assert.match(editorialText, /传粉者.*寄生蜂.*捕食者/);
  assert.match(editorialText, /(?:不能|不是).*只吃害虫/);
  assert.match(
    editorialText,
    /小型脊椎动物.*(?:机会性|事件|记录).*(?:没有|不代表).*(?:日常|常规|主食|占比)/,
  );
  assert.match(
    editorialText,
    /饥饿.*(?:捕食状态|风险).*雄性.*(?:放慢|接近|求偶).*性食同类.*(?:不是|不等于).*(?:固定|必经|每次|必然)/,
  );
  assert.match(editorialText, /亚洲.*原生.*北美.*引入/);
  assert.match(editorialText, /IUCN.*(?:尚未评估|没有本种评估)/);
  assert.match(editorialText, /CITES.*(?:未列入|未收录|没有本种条目)/);
  assert.doesNotMatch(
    editorialText,
    /中华大刀螳(?:只|仅|专门)吃害虫|它(?:只|仅|专门)吃害虫/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:鸟类|蜂鸟|蝾螈).{0,12}(?:主食|常规食物|日常食物)|(?:主要|通常|经常).{0,10}捕食(?:鸟类|蜂鸟|蝾螈)/,
  );
  assert.doesNotMatch(
    editorialText,
    /交配后都会吃掉雄性|一定吃掉雄性|必然吃掉雄性|性食同类是交配的必经步骤/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:能|会)辨别绿色和紫外两种颜色/,
  );
  assert.doesNotMatch(
    editorialText,
    /中华大刀螳(?:取食|捕食).*22\s*目/,
  );
  assert.doesNotMatch(
    editorialText,
    /100\.8\s*(?:毫米|mm)\s*(?:为|是|达到|可达)?\s*(?:全球最大|全球极值|平均体长)|(?:全球最大|全球极值|平均体长)(?:为|是|达到|可达)?\s*100\.8/,
  );
  assert.doesNotMatch(editorialText, /15(?:–|至)29\s*枚卵/);
  assert.doesNotMatch(editorialText, /IUCN.*(?:LC|无危)/);
  assert.doesNotMatch(
    editorialText,
    /(?:CITES.*(?:已列入|已收录)|(?:列入|收录于)\s*CITES\s*附录)/,
  );

  assert.equal(chineseMantis.featured, true);
  assert.equal(chineseMantis.publishedAt, '2026-08-28');
  assert.equal(chineseMantis.updatedAt, '2026-08-28');
});

test('registers the Seven-spotted Ladybird as a complete Coccinella septempunctata profile', async () => {
  const sevenSpottedLadybird = findSpecies('seven-spotted-ladybird');

  assert.equal(
    sevenSpottedLadybird.id,
    'species-coccinella-septempunctata',
  );
  assert.equal(sevenSpottedLadybird.names.zh, '七星瓢虫');
  assert.equal(
    sevenSpottedLadybird.names.en,
    'Seven-spotted Ladybird',
  );
  assert.ok(
    sevenSpottedLadybird.names.aliases.includes('Seven-spot Ladybird'),
  );
  assert.ok(
    sevenSpottedLadybird.names.aliases.includes(
      'Seven-spotted Lady Beetle',
    ),
  );
  assert.ok(sevenSpottedLadybird.names.aliases.includes('C-7'));
  assert.ok(
    sevenSpottedLadybird.names.aliases.includes(
      'Coccinella 7-punctata',
    ),
  );
  assert.equal(
    sevenSpottedLadybird.scientificName,
    'Coccinella septempunctata',
  );
  assert.deepEqual(
    getSpeciesTaxonomyPath(sevenSpottedLadybird).map(
      ({ rank, taxon }) => [
        rank,
        taxon.scientificName,
        taxon.zhName,
      ],
    ),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Arthropoda', '节肢动物门'],
      ['class', 'Insecta', '昆虫纲'],
      ['order', 'Coleoptera', '鞘翅目'],
      ['family', 'Coccinellidae', '瓢虫科'],
      ['genus', 'Coccinella', '瓢虫属'],
    ],
  );

  assert.deepEqual(
    {
      code: sevenSpottedLadybird.conservation.code,
      trend: sevenSpottedLadybird.conservation.trend,
      assessedYear: sevenSpottedLadybird.conservation.assessedYear,
      criteria: sevenSpottedLadybird.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );
  assert.ok(!('assessedYear' in sevenSpottedLadybird.conservation));
  assert.ok(!('criteria' in sevenSpottedLadybird.conservation));

  assert.deepEqual(sevenSpottedLadybird.distribution.realms, [
    'terrestrial',
  ]);
  assert.deepEqual(sevenSpottedLadybird.distribution.continents, [
    '亚洲',
    '欧洲',
    '非洲',
    '北美洲',
  ]);
  assert.match(
    sevenSpottedLadybird.distribution.range,
    /古北界|欧亚|欧洲.*亚洲/,
  );
  assert.match(
    sevenSpottedLadybird.distribution.range,
    /北非.*北美.*(?:引入|外来)/,
  );
  assert.match(
    sevenSpottedLadybird.distribution.range,
    /(?:不穷尽|不代表|不是).*完整.*分布/,
  );
  assert.ok(sevenSpottedLadybird.distribution.center);

  assert.equal(sevenSpottedLadybird.habitats.length, 4);
  assert.equal(
    sevenSpottedLadybird.habitats.filter(({ isPrimary }) => isPrimary)
      .length,
    1,
  );
  assert.ok(
    sevenSpottedLadybird.habitats.every(
      ({ realm }) => realm === 'terrestrial',
    ),
  );
  const habitatText = sevenSpottedLadybird.habitats
    .flatMap(({ name, description }) => [name, description])
    .join(' ');
  assert.match(
    habitatText,
    /农田|作物.*草地|草本.*田边|林缘.*枯叶|落叶.*越冬/,
  );
  assert.match(habitatText, /蚜虫|猎物.*季节|扰动/);

  assert.deepEqual(sevenSpottedLadybird.measurements.length, {
    min: 0.52,
    max: 0.86,
    unit: 'cm',
    note: sevenSpottedLadybird.measurements.length?.note,
  });
  assert.match(
    sevenSpottedLadybird.measurements.length?.note ?? '',
    /NBAIR|印度.*5\.2.*8\.6.*英国.*6.*8.*巴基斯坦.*6\.63.*7\.20.*(?:不是|不等于).*全球极值/,
  );
  assert.equal(sevenSpottedLadybird.measurements.weight, undefined);
  assert.equal(sevenSpottedLadybird.measurements.wingspan, undefined);
  assert.deepEqual(sevenSpottedLadybird.metrics, {});

  assert.deepEqual(sevenSpottedLadybird.diet.types, [
    'carnivore',
    'insectivore',
  ]);
  assert.ok(sevenSpottedLadybird.diet.foods.length >= 4);
  assert.match(
    sevenSpottedLadybird.diet.foods.join(' '),
    /蚜虫.*粉虱|木虱|介壳虫.*瓢虫.*卵|幼虫.*花粉|花蜜/,
  );
  assert.match(
    sevenSpottedLadybird.diet.description,
    /成虫.*幼虫.*蚜虫.*(?:田间|粪便|肠道).*多类.*猎物.*(?:不能|不等于).*只吃害虫/,
  );

  assert.equal(sevenSpottedLadybird.storySections?.length, 6);
  assert.deepEqual(
    sevenSpottedLadybird.storySections.map(({ key }) => key),
    [
      'seven-spots-not-seven-certainties',
      'elytra-and-flight',
      'aphid-predator-not-pest-specialist',
      'coccinelline-warning',
      'four-stages-and-winter',
      'beneficial-here-nonnative-there',
    ],
  );
  assert.equal(
    new Set(
      sevenSpottedLadybird.storySections.map(({ key }) => key),
    ).size,
    6,
  );
  assert.ok(
    sevenSpottedLadybird.storySections.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );

  assert.equal(sevenSpottedLadybird.featuredStats.length, 4);
  assert.deepEqual(
    sevenSpottedLadybird.featuredStats.map(
      ({ key, value, unit }) => ({ key, value, unit }),
    ),
    [
      { key: 'adult-length', value: '5.2–8.6', unit: 'mm' },
      { key: 'elytral-spots', value: '7', unit: '个' },
      { key: 'larval-instars', value: '4', unit: '龄' },
      {
        key: 'north-american-establishment',
        value: '1973',
        unit: '年',
      },
    ],
  );
  assert.ok(
    sevenSpottedLadybird.featuredStats.every(
      ({ label, note }) =>
        label.length > 0 && (note?.length ?? 0) > 0,
    ),
  );
  assert.match(
    sevenSpottedLadybird.featuredStats.find(
      ({ key }) => key === 'elytral-spots',
    )?.note ?? '',
    /鞘翅.*3.*3.*(?:跨|共享).*1.*(?:不是|不代表).*年龄/,
  );
  assert.match(
    sevenSpottedLadybird.featuredStats.find(
      ({ key }) => key === 'north-american-establishment',
    )?.note ?? '',
    /新泽西.*(?:定殖|繁殖种群|建立种群).*(?:不是|不等于).*首次释放/,
  );

  assert.equal(sevenSpottedLadybird.media.gallery?.length, 5);
  const mediaPaths = [
    sevenSpottedLadybird.media.image,
    ...sevenSpottedLadybird.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/seven-spotted-ladybird/01-adult-aphid-colony-portrait.webp',
    './images/species/seven-spotted-ladybird/02-standard-seven-spot-dorsal.webp',
    './images/species/seven-spotted-ladybird/03-larva-aphid-hunt.webp',
    './images/species/seven-spotted-ladybird/04-pupa-on-leaf.webp',
    './images/species/seven-spotted-ladybird/05-reflex-bleeding-defense.webp',
    './images/species/seven-spotted-ladybird/06-leaf-litter-overwintering.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path.endsWith('.webp')));
  assert.ok(
    !sevenSpottedLadybird.media.gallery.some(
      ({ image }) => image === sevenSpottedLadybird.media.image,
    ),
  );
  const mediaRecords = [
    sevenSpottedLadybird.media,
    ...sevenSpottedLadybird.media.gallery,
  ];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    sevenSpottedLadybird.media.gallery.every(
      ({ title, caption }) =>
        title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ credit }) => credit === 'Fauna Atlas · AI 生成原创图像',
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );

  const sourcePaths = [
    '01-adult-aphid-colony-portrait-source.png',
    '02-standard-seven-spot-dorsal-source.png',
    '03-larva-aphid-hunt-source.png',
    '04-pupa-on-leaf-source.png',
    '05-reflex-bleeding-defense-source.png',
    '06-leaf-litter-overwintering-source.png',
  ];
  const imageFiles = [
    ...mediaPaths.map((path) => ({
      format: 'WEBP',
      url: new URL(
        '../public/' + path.replace(/^\.\//, ''),
        import.meta.url,
      ),
    })),
    ...sourcePaths.map((filename) => ({
      format: 'PNG',
      url: new URL(
        '../src/assets/source/species/seven-spotted-ladybird/' +
          filename,
        import.meta.url,
      ),
    })),
  ];
  assert.equal(imageFiles.length, 12);
  await Promise.all(imageFiles.map(({ url }) => access(url)));
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%[channels]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, channels] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
        },
      );
      assert.equal(channels.trim().split(/\s+/)[0], 'srgb');
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );

  assert.ok(sevenSpottedLadybird.sources.length >= 20);
  assert.equal(
    new Set(sevenSpottedLadybird.sources.map(({ url }) => url)).size,
    sevenSpottedLadybird.sources.length,
  );
  assert.ok(
    sevenSpottedLadybird.sources.every(
      ({ title }) => title.length > 0,
    ),
  );
  assert.ok(
    sevenSpottedLadybird.sources.every(({ url }) => URL.canParse(url)),
  );
  assert.ok(
    sevenSpottedLadybird.sources.every(({ url }) =>
      url.startsWith('https://'),
    ),
  );
  assert.ok(
    sevenSpottedLadybird.sources.every(
      ({ accessedAt }) => accessedAt === '2026-08-28',
    ),
  );
  assert.deepEqual(
    new Set(sevenSpottedLadybird.sources.map(({ kind }) => kind)),
    new Set([
      'taxonomy',
      'distribution',
      'general',
      'conservation',
      'ecology',
    ]),
  );
  assert.ok(
    [
      'https://www.gbif.org/species/4990191',
      'https://gd.eppo.int/taxon/COCISE',
      'https://databases.nbair.res.in/Featured_insects/Coccinella-septempunctata.php',
      'https://doi.org/10.1093/ee/16.2.368',
      'https://doi.org/10.1007/BF01240660',
      'https://doi.org/10.1111/j.1365-2435.2012.01961.x',
      'https://doi.org/10.1155/2012/249081',
      'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    ].every((url) =>
      sevenSpottedLadybird.sources.some(
        (source) => source.url === url,
      ),
    ),
  );

  const editorialText = [
    sevenSpottedLadybird.summary,
    sevenSpottedLadybird.description,
    sevenSpottedLadybird.distribution.range,
    ...sevenSpottedLadybird.habitats.flatMap(
      ({ name, description }) => [name, description],
    ),
    sevenSpottedLadybird.measurements.length?.note ?? '',
    sevenSpottedLadybird.diet.description,
    ...sevenSpottedLadybird.diet.foods,
    ...(sevenSpottedLadybird.activity ?? []),
    ...sevenSpottedLadybird.tags,
    ...(sevenSpottedLadybird.storySections ?? []).flatMap(
      ({ label, title, body }) => [label, title, body],
    ),
    ...sevenSpottedLadybird.keyFacts,
    ...sevenSpottedLadybird.threats,
    ...sevenSpottedLadybird.conservationActions,
    ...sevenSpottedLadybird.featuredStats.flatMap(
      ({ label, value, unit, note }) => [
        label,
        value,
        unit ?? '',
        note ?? '',
      ],
    ),
    ...mediaRecords.flatMap(({ alt, title, caption }) => [
      alt,
      title ?? '',
      caption ?? '',
    ]),
  ].join(' ');
  assert.match(
    editorialText,
    /三枚.*左.*三枚.*右.*(?:跨越|横跨|共享).*一枚.*七.*(?:不代表|不能).*年龄/,
  );
  assert.match(
    editorialText,
    /鞘翅.*硬化.*前翅.*膜质.*后翅.*飞行/,
  );
  assert.match(
    editorialText,
    /成虫.*幼虫.*蚜虫.*替代猎物.*(?:不等于|不能).*只吃害虫/,
  );
  assert.match(
    editorialText,
    /卵.*四龄幼虫.*蛹.*成虫.*完全变态.*温度.*食物.*(?:改变|影响)/,
  );
  assert.match(
    editorialText,
    /黄色.*血淋巴.*腿.*关节.*反射出血.*(?:coccinelline|瓢虫素)/,
  );
  assert.match(
    editorialText,
    /(?:不是|不等于).*尿液.*(?:不是|不等于).*毒液/,
  );
  assert.match(editorialText, /古北界.*原生.*北美.*引入/);
  assert.match(
    editorialText,
    /北美.*本地瓢虫.*(?:相关|伴随).*(?:不能|不足以).*单一因果/,
  );
  assert.match(
    editorialText,
    /IUCN.*(?:尚未评估|没有物种级评估).*CITES.*(?:未列入|未收录)/,
  );
  assert.doesNotMatch(
    editorialText,
    /斑点(?:数量|数目)(?:代表|显示|等于|对应)(?:年龄|岁数)|每(?:长|活)一岁.{0,8}(?:多|增加)一/,
  );
  assert.doesNotMatch(
    editorialText,
    /七星瓢虫(?:只|仅|专门)吃害虫|它(?:只|仅|专门)吃害虫/,
  );
  assert.doesNotMatch(
    editorialText,
    /黄色液体(?:是|就是|属于)(?:尿|尿液)|(?:尿|尿液)(?:就是|构成)黄色液体/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:用|把)(?:毒液|毒汁).{0,6}(?:注入|咬人)|有毒的咬伤/,
  );
  assert.doesNotMatch(
    editorialText,
    /七星瓢虫导致.*(?:本地|原生).*瓢虫.*(?:灭绝|下降)|本地瓢虫.*下降.*完全由七星瓢虫/,
  );
  assert.doesNotMatch(editorialText, /IUCN.*(?:LC|无危)/);

  assert.equal(sevenSpottedLadybird.featured, true);
  assert.equal(sevenSpottedLadybird.publishedAt, '2026-08-28');
  assert.equal(sevenSpottedLadybird.updatedAt, '2026-08-28');
});

test('registers the Emperor Dragonfly as a complete Anax imperator profile', async () => {
  const emperorDragonfly = findSpecies('emperor-dragonfly');

  assert.equal(emperorDragonfly.id, 'species-anax-imperator');
  assert.equal(emperorDragonfly.slug, 'emperor-dragonfly');
  assert.equal(emperorDragonfly.names.zh, '皇帝蜻蜓');
  assert.equal(emperorDragonfly.names.en, 'Emperor Dragonfly');
  assert.ok(
    ['帝王蜻蜓', '帝王伟蜓', 'Blue Emperor'].every((alias) =>
      emperorDragonfly.names.aliases.includes(alias),
    ),
  );
  assert.equal(emperorDragonfly.scientificName, 'Anax imperator');
  assert.doesNotMatch(emperorDragonfly.scientificName, /Leach|1815/);
  assert.deepEqual(
    getSpeciesTaxonomyPath(emperorDragonfly).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Arthropoda', '节肢动物门'],
      ['class', 'Insecta', '昆虫纲'],
      ['order', 'Odonata', '蜻蜓目'],
      ['family', 'Aeshnidae', '蜓科'],
      ['genus', 'Anax', '伟蜓属'],
    ],
  );

  assert.deepEqual(
    {
      code: emperorDragonfly.conservation.code,
      trend: emperorDragonfly.conservation.trend,
      assessedYear: emperorDragonfly.conservation.assessedYear,
      criteria: emperorDragonfly.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'stable',
      assessedYear: 2015,
      criteria: undefined,
    },
  );
  assert.ok('assessedYear' in emperorDragonfly.conservation);
  assert.ok(!('criteria' in emperorDragonfly.conservation));

  assert.deepEqual(emperorDragonfly.distribution.realms, [
    'freshwater',
    'terrestrial',
  ]);
  assert.deepEqual(emperorDragonfly.distribution.continents, [
    '欧洲',
    '非洲',
    '亚洲',
  ]);
  assert.deepEqual(emperorDragonfly.distribution.countries, [
    '英国',
    '法国',
    '西班牙',
    '德国',
    '瑞典',
    '土耳其',
    '摩洛哥',
    '阿尔及利亚',
    '肯尼亚',
    '南非',
    '沙特阿拉伯',
    '也门',
    '哈萨克斯坦',
    '印度',
  ]);
  assert.equal(emperorDragonfly.distribution.regions.length, 5);
  assert.deepEqual(emperorDragonfly.distribution.center, { lat: 32, lng: 20 });
  for (const place of [
    '非洲',
    '欧洲',
    '阿拉伯半岛',
    '西南亚',
    '中亚',
    '印度',
  ]) {
    assert.match(emperorDragonfly.distribution.range, new RegExp(place));
  }
  assert.match(
    emperorDragonfly.distribution.range,
    /国家数组.*(?:代表性|不是完整名录)/,
  );

  assert.equal(emperorDragonfly.habitats.length, 4);
  const primaryHabitats = emperorDragonfly.habitats.filter(
    ({ isPrimary }) => isPrimary,
  );
  assert.equal(primaryHabitats.length, 1);
  assert.equal(
    primaryHabitats[0]?.name,
    '阳光充足且植被丰富的池塘和湖泊',
  );
  assert.deepEqual(
    emperorDragonfly.habitats.map(({ realm }) => realm),
    ['freshwater', 'freshwater', 'freshwater', 'terrestrial'],
  );
  const habitatText = emperorDragonfly.habitats
    .flatMap(({ name, description }) => [name, description])
    .join(' ');
  assert.match(habitatText, /开阔水面.*沉水.*浮叶.*挺水/);
  assert.match(habitatText, /缓流.*运河.*(?:不把|不是).*急流/);
  assert.match(habitatText, /水库.*采石坑.*人工池塘.*水质.*植被/);
  assert.match(habitatText, /池岸.*陆地.*池塘.*移动.*(?:不等于|不能证明).*繁殖/);

  assert.deepEqual(
    {
      typical: emperorDragonfly.measurements.length?.typical,
      unit: emperorDragonfly.measurements.length?.unit,
    },
    { typical: 78, unit: 'mm' },
  );
  assert.deepEqual(
    {
      typical: emperorDragonfly.measurements.wingspan?.typical,
      unit: emperorDragonfly.measurements.wingspan?.unit,
    },
    { typical: 10.5, unit: 'cm' },
  );
  assert.ok(emperorDragonfly.measurements.length);
  assert.ok(!('min' in emperorDragonfly.measurements.length));
  assert.ok(!('max' in emperorDragonfly.measurements.length));
  assert.match(
    emperorDragonfly.measurements.length.note ?? '',
    /British Dragonfly Society.*77\.2.*72\.9.*地区.*不是全球范围/,
  );
  assert.ok(emperorDragonfly.measurements.wingspan);
  assert.ok(!('min' in emperorDragonfly.measurements.wingspan));
  assert.ok(!('max' in emperorDragonfly.measurements.wingspan));
  assert.match(
    emperorDragonfly.measurements.wingspan.note ?? '',
    /Natural History Museum.*英国.*(?:不宣称|不是).*全球.*(?:平均|极值)/,
  );
  assert.equal(emperorDragonfly.measurements.weight, undefined);
  assert.deepEqual(emperorDragonfly.metrics, {});
  assert.ok(!('adultLengthCm' in emperorDragonfly.metrics));
  assert.ok(!('wingspanCm' in emperorDragonfly.metrics));

  assert.deepEqual(emperorDragonfly.diet.types, [
    'carnivore',
    'insectivore',
  ]);
  const foodText = emperorDragonfly.diet.foods.join(' ');
  for (const foodPattern of [
    /水生昆虫幼体/,
    /甲壳动物.*水生无脊椎动物/,
    /蝌蚪.*条件性/,
    /飞行昆虫/,
  ]) {
    assert.match(foodText, foodPattern);
  }
  assert.match(
    emperorDragonfly.diet.description,
    /幼虫.*捕捉面罩.*成虫.*六足.*飞虫.*咀嚼式口器/,
  );
  assert.match(
    emperorDragonfly.diet.description,
    /蝌蚪.*实验室家蝇.*(?:不能|不等于).*全球主要食物比例/,
  );

  assert.equal(emperorDragonfly.storySections?.length, 6);
  assert.deepEqual(
    emperorDragonfly.storySections.map(({ key }) => key),
    [
      'name-and-four-wings',
      'blue-male-green-female',
      'two-worlds-no-pupa',
      'underwater-ballistic-mask',
      'territory-and-oviposition',
      'range-expansion-and-pond-network',
    ],
  );
  assert.equal(
    new Set(emperorDragonfly.storySections.map(({ key }) => key)).size,
    6,
  );
  assert.ok(
    emperorDragonfly.storySections.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );

  assert.equal(emperorDragonfly.featuredStats.length, 4);
  assert.deepEqual(
    emperorDragonfly.featuredStats.map(({ key, value, unit }) => ({
      key,
      value,
      unit,
    })),
    [
      { key: 'typical-adult-length', value: '78', unit: 'mm' },
      { key: 'uk-wingspan', value: '10.5', unit: 'cm' },
      { key: 'final-instar-length', value: '45–56', unit: 'mm' },
      { key: 'tracked-female-distance', value: '1,902', unit: 'm' },
    ],
  );
  assert.equal(
    new Set(emperorDragonfly.featuredStats.map(({ key }) => key)).size,
    4,
  );
  assert.ok(
    emperorDragonfly.featuredStats.every(
      ({ label, note }) => label.length > 0 && (note?.length ?? 0) > 0,
    ),
  );
  assert.match(
    emperorDragonfly.featuredStats.find(
      ({ key }) => key === 'final-instar-length',
    )?.note ?? '',
    /只指末龄幼虫/,
  );
  assert.match(
    emperorDragonfly.featuredStats.find(
      ({ key }) => key === 'tracked-female-distance',
    )?.note ?? '',
    /诺曼底.*一只雌虫.*(?:不是|非).*最大.*(?:扩散|迁徙)/,
  );

  assert.equal(emperorDragonfly.media.gallery?.length, 5);
  const mediaPaths = [
    emperorDragonfly.media.image,
    ...emperorDragonfly.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/emperor-dragonfly/01-adult-male-pond-portrait.webp',
    './images/species/emperor-dragonfly/02-female-pondweed-oviposition.webp',
    './images/species/emperor-dragonfly/03-vegetated-pond-patrol.webp',
    './images/species/emperor-dragonfly/04-aerial-prey-interception.webp',
    './images/species/emperor-dragonfly/05-underwater-final-instar-larva.webp',
    './images/species/emperor-dragonfly/06-emergence-exuvia-on-reed.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path?.endsWith('.webp')));
  assert.ok(
    !emperorDragonfly.media.gallery.some(
      ({ image }) => image === emperorDragonfly.media.image,
    ),
  );
  const mediaRecords = [
    emperorDragonfly.media,
    ...emperorDragonfly.media.gallery,
  ];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    emperorDragonfly.media.gallery.every(
      ({ title, caption }) =>
        title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ credit }) => credit === 'Fauna Atlas · AI 生成原创图像',
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  assert.ok((emperorDragonfly.media.focalPoint?.x ?? 0) >= 0.65);
  assert.ok((emperorDragonfly.media.focalPoint?.x ?? 1) <= 0.75);

  const interceptionMedia = emperorDragonfly.media.gallery.find(({ image }) =>
    image.endsWith('/04-aerial-prey-interception.webp'),
  );
  assert.ok(interceptionMedia);
  assert.match(
    `${interceptionMedia.alt} ${interceptionMedia.caption ?? ''}`,
    /(?:尚未接触|接触之前|接触前|保持间隙)/,
  );
  const exuviaMedia = emperorDragonfly.media.gallery.find(({ image }) =>
    image.endsWith('/06-emergence-exuvia-on-reed.webp'),
  );
  assert.ok(exuviaMedia);
  assert.match(`${exuviaMedia.alt} ${exuviaMedia.caption ?? ''}`, /空.*(?:蜕|壳)/);
  assert.match(
    `${exuviaMedia.alt} ${exuviaMedia.caption ?? ''}`,
    /(?:没有|无)活体成虫/,
  );

  const sourcePaths = [
    '01-adult-male-pond-portrait-source.png',
    '02-female-pondweed-oviposition-source.png',
    '03-vegetated-pond-patrol-source.png',
    '04-aerial-prey-interception-source.png',
    '05-underwater-final-instar-larva-source.png',
    '06-emergence-exuvia-on-reed-source.png',
  ];
  const runtimeUrls = mediaPaths.map(
    (path) => new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
  );
  const sourceUrls = sourcePaths.map(
    (filename) =>
      new URL(
        `../src/assets/source/species/emperor-dragonfly/${filename}`,
        import.meta.url,
      ),
  );
  const imageFiles = [
    ...runtimeUrls.map((url) => ({ format: 'WEBP', url })),
    ...sourceUrls.map((url) => ({ format: 'PNG', url })),
  ];
  assert.equal(imageFiles.length, 12);
  await Promise.all(imageFiles.map(({ url }) => access(url)));
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%[channels]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, channels] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
        },
      );
      assert.equal(channels.trim().split(/\s+/)[0], 'srgb');
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );

  const [runtimeHashes, sourceHashes] = await Promise.all(
    [runtimeUrls, sourceUrls].map((urls) =>
      Promise.all(
        urls.map(async (url) =>
          createHash('sha256').update(await readFile(url)).digest('hex'),
        ),
      ),
    ),
  );
  assert.equal(new Set(runtimeHashes).size, 6, 'runtime WebP files should differ');
  assert.equal(new Set(sourceHashes).size, 6, 'source PNG files should differ');

  assert.ok(emperorDragonfly.sources.length >= 25);
  assert.equal(
    new Set(emperorDragonfly.sources.map(({ url }) => url)).size,
    emperorDragonfly.sources.length,
  );
  assert.ok(emperorDragonfly.sources.every(({ title }) => title.length > 0));
  assert.ok(emperorDragonfly.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(
    emperorDragonfly.sources.every(({ url }) => url.startsWith('https://')),
  );
  assert.ok(
    emperorDragonfly.sources.every(
      ({ accessedAt }) => accessedAt === '2026-08-28',
    ),
  );
  assert.deepEqual(
    new Set(emperorDragonfly.sources.map(({ kind }) => kind)),
    new Set([
      'taxonomy',
      'distribution',
      'ecology',
      'conservation',
      'general',
    ]),
  );
  assert.ok(
    [
      'https://www.gbif.org/species/5051775',
      'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?name=Anax+imperator',
      'https://www.odonatacentral.org/app/#/wol/',
      'https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T59812A72311295.en',
      'https://speciesstatus.sanbi.org/assessment/last-assessment/1607/',
      'https://doi.org/10.2305/IUCN.UK.2024-1.RLTS.T59812A208815239.en',
      'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
      'https://british-dragonflies.org.uk/species/emperor-dragonfly/',
      'https://www.nhm.ac.uk/discover/dragonflies-the-ultimate-hunters.html',
      'https://doi.org/10.14411/eje.2019.031',
      'https://doi.org/10.1038/175338b0',
      'https://doi.org/10.1242/jeb.33.1.1a',
      'https://doi.org/10.1002/aqc.739',
      'https://doi.org/10.1111/fwb.13632',
      'https://natuurtijdschriften.nl/pub/591417',
      'https://doi.org/10.1002/ece3.3975',
      'https://doi.org/10.1002/jmor.21497',
    ].every((url) =>
      emperorDragonfly.sources.some((source) => source.url === url),
    ),
  );

  const editorialText = [
    emperorDragonfly.summary,
    emperorDragonfly.description,
    emperorDragonfly.distribution.range,
    ...emperorDragonfly.habitats.flatMap(({ name, description }) => [
      name,
      description,
    ]),
    emperorDragonfly.measurements.length.note ?? '',
    emperorDragonfly.measurements.wingspan.note ?? '',
    emperorDragonfly.diet.description,
    ...emperorDragonfly.diet.foods,
    ...(emperorDragonfly.activity ?? []),
    ...emperorDragonfly.tags,
    ...(emperorDragonfly.storySections ?? []).flatMap(
      ({ label, title, body }) => [label, title, body],
    ),
    ...emperorDragonfly.keyFacts,
    ...emperorDragonfly.threats,
    ...emperorDragonfly.conservationActions,
    ...emperorDragonfly.featuredStats.flatMap(
      ({ label, value, unit, note }) => [
        label,
        value,
        unit ?? '',
        note ?? '',
      ],
    ),
    ...mediaRecords.flatMap(({ alt, title, caption }) => [
      alt,
      title ?? '',
      caption ?? '',
    ]),
  ].join(' ');
  assert.match(
    editorialText,
    /全球.*(?:无危|LC).*(?:稳定|stable).*欧洲.*(?:增长|增加|北扩)/,
  );
  assert.match(
    editorialText,
    /CITES.*(?:未列入|未收录).*(?:不能|不等于).*地方.*保护/,
  );
  assert.match(editorialText, /四片.*膜质翅.*六足.*短触角.*复眼/);
  assert.match(
    editorialText,
    /雄虫.*蓝.*雌虫.*(?:绿|蓝绿色).*(?:重叠|也可能.*蓝)/,
  );
  assert.match(editorialText, /卵.*水生幼虫.*成虫.*(?:没有|无).*蛹/);
  assert.match(
    editorialText,
    /雌虫.*(?:单独|独自).*卵.*(?:插入|藏进).*植物.*(?:不形成|而非).*水面.*卵串/,
  );
  assert.match(
    editorialText,
    /末龄幼虫.*45(?:–|至)56\s*mm.*(?:只指|不等于).*末龄幼虫/,
  );
  assert.match(
    editorialText,
    /12 只幼虫.*0\.03.*0\.25\s*m\/s.*(?:不能|不是).*全球.*(?:最高|最大)/,
  );
  assert.match(
    editorialText,
    /一只雌虫.*1,902\s*m.*(?:不是|非).*最大.*(?:扩散|迁徙)/,
  );
  assert.match(
    editorialText,
    /(?:不表示|不应).{0,40}(?:远古|史前|活化石)/,
  );
  assert.match(
    editorialText,
    /发育.*(?:一年.*两年|两年.*一年).*(?:地区|条件|温度).*(?:变化|取决)/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:皇帝蜻蜓|Anax imperator)(?:是|属于|堪称|可称为)(?:一种|一个)?(?:活化石|史前物种)/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:所有|每只|全部).{0,10}(?:必须|固定|都).{0,10}(?:两年|2 年)|(?:固定|必须).{0,8}(?:两年|2 年)(?:水生|发育)/,
  );
  assert.doesNotMatch(
    editorialText,
    /雌虫(?:一定|始终|都是|只能是|必为).{0,8}(?:绿色|绿腹)/,
  );
  assert.doesNotMatch(
    editorialText,
    /全球最高攻击速度(?:为|是)\s*0\.25|0\.25\s*m\/s.{0,12}(?:为|是).*全球最高/,
  );
  assert.doesNotMatch(
    editorialText,
    /最大(?:扩散|迁徙)距离(?:为|是)\s*1,902|1,902\s*m\s*(?:为|是)(?:本种|物种|其)?最大(?:扩散|迁徙)距离/,
  );
  assert.doesNotMatch(
    editorialText,
    /蝌蚪(?:是|为).{0,8}(?:主要食物|主食)|家蝇(?:是|为).{0,8}(?:主要食物|主食)/,
  );
  assert.doesNotMatch(
    editorialText,
    /CITES(?:已|已经)(?:将)?(?:本种|皇帝蜻蜓)?(?:列入|收录)|受 CITES 附录保护/,
  );

  assert.equal(emperorDragonfly.publishedAt, '2026-08-28');
  assert.equal(emperorDragonfly.updatedAt, '2026-08-28');
});

test('registers the Domestic Silkworm as a complete Bombyx mori profile', async () => {
  const domesticSilkworm = findSpecies('domestic-silkworm');

  assert.equal(domesticSilkworm.id, 'species-bombyx-mori');
  assert.equal(domesticSilkworm.slug, 'domestic-silkworm');
  assert.equal(domesticSilkworm.names.zh, '家蚕');
  assert.equal(domesticSilkworm.names.en, 'Domestic Silkworm');
  assert.ok(
    ['蚕', '桑蚕', 'Silkworm', 'Silk Moth', 'Mulberry Silkworm', 'Phalaena mori'].every(
      (alias) => domesticSilkworm.names.aliases.includes(alias),
    ),
  );
  assert.equal(domesticSilkworm.scientificName, 'Bombyx mori');
  assert.doesNotMatch(domesticSilkworm.scientificName, /Linnaeus|1758/);
  assert.deepEqual(
    getSpeciesTaxonomyPath(domesticSilkworm).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Arthropoda', '节肢动物门'],
      ['class', 'Insecta', '昆虫纲'],
      ['order', 'Lepidoptera', '鳞翅目'],
      ['family', 'Bombycidae', '蚕蛾科'],
      ['genus', 'Bombyx', '家蚕蛾属'],
    ],
  );

  assert.deepEqual(
    {
      code: domesticSilkworm.conservation.code,
      trend: domesticSilkworm.conservation.trend,
      assessedYear: domesticSilkworm.conservation.assessedYear,
      criteria: domesticSilkworm.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );
  assert.ok(!('assessedYear' in domesticSilkworm.conservation));
  assert.ok(!('criteria' in domesticSilkworm.conservation));

  assert.deepEqual(domesticSilkworm.distribution.realms, ['terrestrial']);
  assert.ok(domesticSilkworm.distribution.continents.includes('亚洲'));
  assert.ok(domesticSilkworm.distribution.countries.includes('中国'));
  assert.ok(domesticSilkworm.distribution.regions.length >= 2);
  assert.match(
    domesticSilkworm.distribution.range,
    /(?:中国.{0,20}(?:驯化|起源)|(?:驯化|起源).{0,20}中国)/,
  );
  assert.match(
    domesticSilkworm.distribution.range,
    /(?:全球.{0,20}(?:人工饲养|养殖|蚕业)|(?:人工饲养|养殖|蚕业).{0,20}全球)/,
  );
  assert.match(
    domesticSilkworm.distribution.range,
    /(?:没有|不存在|缺乏|不具备).{0,30}(?:自我维持|可持续).{0,20}(?:野生|野外).{0,8}种群|(?:野生|野外).{0,20}种群.{0,30}(?:没有|不存在|缺乏|不具备).{0,20}(?:自我维持|可持续)/,
  );
  assert.ok(domesticSilkworm.distribution.center);
  assert.ok(domesticSilkworm.distribution.center.lat >= 18);
  assert.ok(domesticSilkworm.distribution.center.lat <= 54);
  assert.ok(domesticSilkworm.distribution.center.lng >= 73);
  assert.ok(domesticSilkworm.distribution.center.lng <= 135);

  assert.ok(domesticSilkworm.habitats.length >= 3);
  assert.equal(
    domesticSilkworm.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(
    domesticSilkworm.habitats.every(({ realm }) => realm === 'terrestrial'),
  );
  const habitatText = domesticSilkworm.habitats
    .flatMap(({ name, description }) => [name, description])
    .join(' ');
  assert.match(habitatText, /(?:蚕室|饲养室|人工饲养|种质资源)/);
  assert.match(habitatText, /(?:桑园|桑叶|桑树)/);
  assert.match(
    habitatText,
    /(?:不是|不代表|不等于).{0,16}(?:野生|野外).{0,8}(?:生境|分布|种群)/,
  );

  const measurementRecords = Object.values(domesticSilkworm.measurements).filter(
    Boolean,
  );
  assert.equal(measurementRecords.length, 0);
  assert.deepEqual(domesticSilkworm.metrics, {});

  assert.ok(domesticSilkworm.diet.types.includes('herbivore'));
  assert.match(domesticSilkworm.diet.foods.join(' '), /(?:桑叶|桑树叶片)/);
  assert.match(
    domesticSilkworm.diet.description,
    /幼虫.{0,24}(?:桑叶|桑树叶片).{0,60}成虫.{0,24}(?:不取食|不再取食|口器退化)/,
  );

  assert.equal(domesticSilkworm.storySections?.length, 6);
  assert.equal(
    new Set(domesticSilkworm.storySections.map(({ key }) => key)).size,
    6,
  );
  assert.ok(
    domesticSilkworm.storySections.every(
      ({ key, label, title, body }) =>
        key.length > 0 &&
        label.length > 0 &&
        title.length > 0 &&
        body.length > 0,
    ),
  );

  assert.equal(domesticSilkworm.featuredStats.length, 4);
  assert.equal(
    new Set(domesticSilkworm.featuredStats.map(({ key }) => key)).size,
    4,
  );
  assert.ok(
    domesticSilkworm.featuredStats.every(
      ({ key, label, value, note }) =>
        key.length > 0 &&
        label.length > 0 &&
        value.length > 0 &&
        (note?.length ?? 0) > 0,
    ),
  );

  assert.equal(domesticSilkworm.media.gallery?.length, 5);
  const mediaPaths = [
    domesticSilkworm.media.image,
    ...domesticSilkworm.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/domestic-silkworm/01-adult-domestic-silkworm-portrait.webp',
    './images/species/domestic-silkworm/02-mature-larva-mulberry-feeding.webp',
    './images/species/domestic-silkworm/03-first-instar-hatching-from-eggs.webp',
    './images/species/domestic-silkworm/04-larva-spinning-silk-scaffold.webp',
    './images/species/domestic-silkworm/05-pupa-inside-opened-cocoon.webp',
    './images/species/domestic-silkworm/06-germplasm-line-rearing.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path?.endsWith('.webp')));
  assert.ok(
    !domesticSilkworm.media.gallery.some(
      ({ image }) => image === domesticSilkworm.media.image,
    ),
  );
  const mediaRecords = [
    domesticSilkworm.media,
    ...domesticSilkworm.media.gallery,
  ];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    domesticSilkworm.media.gallery.every(
      ({ title, caption }) =>
        title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ credit }) => credit === 'Fauna Atlas · AI 生成原创图像',
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  assert.ok((domesticSilkworm.media.focalPoint?.x ?? 0) >= 0.65);
  assert.ok((domesticSilkworm.media.focalPoint?.x ?? 1) <= 0.75);

  const hatchingMedia = domesticSilkworm.media.gallery.find(({ image }) =>
    image.endsWith('/03-first-instar-hatching-from-eggs.webp'),
  );
  assert.ok(hatchingMedia);
  assert.match(
    `${hatchingMedia.alt} ${hatchingMedia.caption ?? ''}`,
    /(?:初孵|一龄).{0,30}卵|卵.{0,30}(?:初孵|一龄)/,
  );
  const spinningMedia = domesticSilkworm.media.gallery.find(({ image }) =>
    image.endsWith('/04-larva-spinning-silk-scaffold.webp'),
  );
  assert.ok(spinningMedia);
  assert.match(
    `${spinningMedia.alt} ${spinningMedia.caption ?? ''}`,
    /(?:疏松|开放|支架|早期).{0,30}(?:丝|结茧|蚕茧)/,
  );
  const pupaMedia = domesticSilkworm.media.gallery.find(({ image }) =>
    image.endsWith('/05-pupa-inside-opened-cocoon.webp'),
  );
  assert.ok(pupaMedia);
  assert.match(
    `${pupaMedia.alt} ${pupaMedia.caption ?? ''}`,
    /(?:人为|人工|观察窗|打开|剖开).{0,30}(?:茧|蚕茧)/,
  );
  assert.match(`${pupaMedia.alt} ${pupaMedia.caption ?? ''}`, /完整.{0,12}蛹/);
  const germplasmMedia = domesticSilkworm.media.gallery.find(({ image }) =>
    image.endsWith('/06-germplasm-line-rearing.webp'),
  );
  assert.ok(germplasmMedia);
  assert.match(
    `${germplasmMedia.alt} ${germplasmMedia.caption ?? ''}`,
    /(?:种质|品系).{0,24}(?:分开|分隔|独立).{0,12}饲养|(?:分开|分隔|独立).{0,12}饲养.{0,24}(?:种质|品系)/,
  );

  const sourcePaths = [
    '01-adult-domestic-silkworm-portrait-source.png',
    '02-mature-larva-mulberry-feeding-source.png',
    '03-first-instar-hatching-from-eggs-source.png',
    '04-larva-spinning-silk-scaffold-source.png',
    '05-pupa-inside-opened-cocoon-source.png',
    '06-germplasm-line-rearing-source.png',
  ];
  const runtimeUrls = mediaPaths.map(
    (path) => new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
  );
  const sourceUrls = sourcePaths.map(
    (filename) =>
      new URL(
        `../src/assets/source/species/domestic-silkworm/${filename}`,
        import.meta.url,
      ),
  );
  const imageFiles = [
    ...runtimeUrls.map((url) => ({ format: 'WEBP', url })),
    ...sourceUrls.map((url) => ({ format: 'PNG', url })),
  ];
  assert.equal(imageFiles.length, 12);
  await Promise.all(imageFiles.map(({ url }) => access(url)));
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%[channels]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, channels] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
        },
      );
      assert.equal(channels.trim().split(/\s+/)[0], 'srgb');
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );

  const [runtimeHashes, sourceHashes] = await Promise.all(
    [runtimeUrls, sourceUrls].map((urls) =>
      Promise.all(
        urls.map(async (url) =>
          createHash('sha256').update(await readFile(url)).digest('hex'),
        ),
      ),
    ),
  );
  assert.equal(new Set(runtimeHashes).size, 6, 'runtime WebP files should differ');
  assert.equal(new Set(sourceHashes).size, 6, 'source PNG files should differ');

  assert.ok(domesticSilkworm.sources.length >= 20);
  assert.equal(
    new Set(domesticSilkworm.sources.map(({ url }) => url)).size,
    domesticSilkworm.sources.length,
  );
  assert.ok(domesticSilkworm.sources.every(({ title }) => title.length > 0));
  assert.ok(domesticSilkworm.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(
    domesticSilkworm.sources.every(({ url }) => url.startsWith('https://')),
  );
  assert.ok(
    domesticSilkworm.sources.every(
      ({ accessedAt }) => accessedAt === '2026-08-28',
    ),
  );
  assert.deepEqual(
    new Set(domesticSilkworm.sources.map(({ kind }) => kind)),
    new Set([
      'taxonomy',
      'distribution',
      'ecology',
      'conservation',
      'general',
    ]),
  );

  const editorialText = [
    domesticSilkworm.summary,
    domesticSilkworm.description,
    domesticSilkworm.distribution.range,
    ...domesticSilkworm.distribution.regions,
    ...domesticSilkworm.habitats.flatMap(({ name, description }) => [
      name,
      description,
    ]),
    ...measurementRecords.map(({ note }) => note ?? ''),
    domesticSilkworm.diet.description,
    ...domesticSilkworm.diet.foods,
    ...(domesticSilkworm.activity ?? []),
    ...domesticSilkworm.tags,
    ...(domesticSilkworm.storySections ?? []).flatMap(
      ({ label, title, body }) => [label, title, body],
    ),
    ...domesticSilkworm.keyFacts,
    ...domesticSilkworm.threats,
    ...domesticSilkworm.conservationActions,
    ...domesticSilkworm.featuredStats.flatMap(
      ({ label, value, unit, note }) => [
        label,
        value,
        unit ?? '',
        note ?? '',
      ],
    ),
    ...mediaRecords.flatMap(({ alt, title, caption }) => [
      alt,
      title ?? '',
      caption ?? '',
    ]),
  ].join(' ');
  assert.match(editorialText, /完全变态/);
  assert.match(editorialText, /卵.{0,40}幼虫.{0,40}蛹.{0,40}成虫/);
  assert.match(
    editorialText,
    /幼虫.{0,40}(?:桑叶|桑树叶片).{0,80}成虫.{0,40}(?:不取食|不再取食|口器退化)/,
  );
  assert.match(
    editorialText,
    /成虫.{0,40}(?:有翅|四片.{0,8}翅|保留.{0,8}翅).{0,80}(?:不能.{0,8}飞|失去.{0,8}飞行能力|飞行能力.{0,20}(?:削弱|降低|退化))/,
  );
  assert.match(editorialText, /幼虫.{0,50}(?:丝腺|唇腺).{0,40}(?:蚕丝|丝)/);
  assert.match(editorialText, /(?:吐丝器|下唇).{0,40}(?:蚕丝|丝)/);
  assert.match(
    editorialText,
    /(?:Bombyx|B\.) mandarina.{0,50}(?:野生祖先|野桑蚕|独立|分开)|(?:野生祖先|野桑蚕|独立|分开).{0,50}(?:Bombyx|B\.) mandarina/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*品系)(?=[\s\S]*温度)(?=[\s\S]*饲养条件)(?=[\s\S]*(?:变化|差异|取决|不能.{0,12}固定))/,
  );
  assert.match(
    editorialText,
    /IUCN.{0,80}(?:驯化|家养).{0,80}(?:不纳入|不评估|排除|不适用)/,
  );
  assert.match(
    editorialText,
    /CITES.{0,50}(?:未列入|未收录).{0,80}(?:不能|不等于|不代表).{0,40}(?:风险|保护|国内|地方)/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:全球(?:自然|野生)分布|(?:自然|野生)分布(?:覆盖|遍及|横跨)全球)/,
  );
  assert.doesNotMatch(
    editorialText,
    /成虫(?:会|能够|负责|通过).{0,12}(?:吐丝|产丝|结茧)/,
  );
  assert.doesNotMatch(
    editorialText,
    /成虫(?:没有|无).{0,6}(?:翅|翅膀)|(?:翅|翅膀)(?:完全)?消失/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:Bombyx mori|家蚕)(?:就是|等同于|与).{0,20}(?:Bombyx mandarina|野桑蚕).{0,12}(?:同一种|没有区别)/,
  );

  assert.equal(domesticSilkworm.featured, true);
  assert.equal(domesticSilkworm.publishedAt, '2026-08-28');
  assert.equal(domesticSilkworm.updatedAt, '2026-08-28');
});

test('registers the Antarctic Krill as a complete Euphausia superba profile', async () => {
  const antarcticKrill = findSpecies('antarctic-krill');

  assert.equal(antarcticKrill.id, 'species-euphausia-superba');
  assert.equal(antarcticKrill.slug, 'antarctic-krill');
  assert.equal(antarcticKrill.names.zh, '南极磷虾');
  assert.equal(antarcticKrill.names.en, 'Antarctic Krill');
  assert.equal(antarcticKrill.scientificName, 'Euphausia superba');
  assert.doesNotMatch(antarcticKrill.scientificName, /Dana|1850/);
  assert.deepEqual(
    getSpeciesTaxonomyPath(antarcticKrill).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Arthropoda', '节肢动物门'],
      ['class', 'Malacostraca', '软甲纲'],
      ['order', 'Euphausiacea', '磷虾目'],
      ['family', 'Euphausiidae', '磷虾科'],
      ['genus', 'Euphausia', '磷虾属'],
    ],
  );

  assert.deepEqual(
    {
      code: antarcticKrill.conservation.code,
      trend: antarcticKrill.conservation.trend,
      assessedYear: antarcticKrill.conservation.assessedYear,
      criteria: antarcticKrill.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );
  assert.ok(!('assessedYear' in antarcticKrill.conservation));
  assert.ok(!('criteria' in antarcticKrill.conservation));

  assert.deepEqual(antarcticKrill.distribution.realms, ['marine']);
  assert.deepEqual(antarcticKrill.distribution.continents, ['南极洲']);
  assert.deepEqual(antarcticKrill.distribution.countries, []);
  assert.ok(antarcticKrill.distribution.regions.length >= 4);
  assert.match(antarcticKrill.distribution.range, /南大洋/);
  assert.match(
    antarcticKrill.distribution.range,
    /(?:环南极|环绕南极|南极周围)/,
  );
  assert.match(
    antarcticKrill.distribution.range,
    /(?:南极辐合带|南极汇聚带|南极锋|极锋)/,
  );
  assert.match(
    antarcticKrill.distribution.range,
    /(?:西南大西洋|大西洋扇区|斯科舍海|南极半岛)/,
  );
  assert.ok(antarcticKrill.distribution.center);
  assert.ok(antarcticKrill.distribution.center.lat >= -75);
  assert.ok(antarcticKrill.distribution.center.lat <= -55);
  assert.ok(antarcticKrill.distribution.center.lng >= -180);
  assert.ok(antarcticKrill.distribution.center.lng <= 180);

  assert.equal(antarcticKrill.habitats.length, 4);
  assert.equal(
    antarcticKrill.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(antarcticKrill.habitats.every(({ realm }) => realm === 'marine'));
  const habitatText = antarcticKrill.habitats
    .flatMap(({ name, description }) => [name, description])
    .join(' ');
  for (const habitatPattern of [
    /(?:季节性海冰区|海冰边缘|冰下)/,
    /(?:大陆架|陆架|陆坡)/,
    /(?:远洋|开阔水域|表层水域)/,
    /(?:水柱|中深层|深水)/,
  ]) {
    assert.match(habitatText, habitatPattern);
  }

  assert.ok(antarcticKrill.measurements.length);
  assert.deepEqual(
    {
      min: antarcticKrill.measurements.length.min,
      max: antarcticKrill.measurements.length.max,
      unit: antarcticKrill.measurements.length.unit,
    },
    { min: 42, max: 65, unit: 'mm' },
  );
  assert.match(
    antarcticKrill.measurements.length.note ?? '',
    /(?=[\s\S]*(?:成体|成年))(?=[\s\S]*(?:全长|体长))(?=[\s\S]*(?:年龄|海区|地区|个体).{0,20}(?:变化|差异))/,
  );
  assert.ok(antarcticKrill.measurements.weight);
  assert.deepEqual(
    {
      max: antarcticKrill.measurements.weight.max,
      unit: antarcticKrill.measurements.weight.unit,
    },
    { max: 2, unit: 'g' },
  );
  assert.match(
    antarcticKrill.measurements.weight.note ?? '',
    /(?=[\s\S]*(?:最大|上限))(?=[\s\S]*(?:不是|不等于|并非).{0,12}(?:平均|均值|典型))/,
  );
  assert.deepEqual(antarcticKrill.metrics, {
    adultLengthCm: [4.2, 6.5],
    lifespanYears: [5, 7],
  });
  assert.ok(!('estimatedMatureIndividuals' in antarcticKrill.metrics));
  assert.ok(!('adultMassKg' in antarcticKrill.metrics));

  assert.ok(antarcticKrill.diet.types.includes('filter-feeder'));
  assert.ok(antarcticKrill.diet.types.includes('omnivore'));
  const foodText = antarcticKrill.diet.foods.join(' ');
  for (const foodPattern of [
    /(?:浮游植物|硅藻)/,
    /(?:海冰藻|冰藻)/,
    /(?:浮游动物|原生动物|桡足类)/,
    /(?:碎屑|有机颗粒)/,
  ]) {
    assert.match(foodText, foodPattern);
  }
  assert.match(
    antarcticKrill.diet.description,
    /(?=[\s\S]*(?:滤食|胸足))(?=[\s\S]*(?:浮游植物|硅藻))/,
  );
  assert.match(
    antarcticKrill.diet.description,
    /(?=[\s\S]*(?:季节|冬季|食物条件))(?=[\s\S]*(?:海冰藻|冰藻|浮游动物|碎屑))/,
  );

  assert.equal(antarcticKrill.storySections?.length, 6);
  assert.equal(
    new Set(antarcticKrill.storySections.map(({ key }) => key)).size,
    6,
  );
  assert.ok(
    antarcticKrill.storySections.every(
      ({ key, label, title, body }) =>
        key.length > 0 &&
        label.length > 0 &&
        title.length > 0 &&
        body.length > 0,
    ),
  );

  assert.equal(antarcticKrill.featuredStats.length, 4);
  assert.equal(
    new Set(antarcticKrill.featuredStats.map(({ key }) => key)).size,
    4,
  );
  assert.ok(
    antarcticKrill.featuredStats.every(
      ({ key, label, value, note }) =>
        key.length > 0 &&
        label.length > 0 &&
        value.length > 0 &&
        (note?.length ?? 0) > 0,
    ),
  );

  assert.equal(antarcticKrill.media.gallery?.length, 5);
  const mediaPaths = [
    antarcticKrill.media.image,
    ...antarcticKrill.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/antarctic-krill/01-adult-krill-under-sea-ice.webp',
    './images/species/antarctic-krill/02-filter-feeding-phytoplankton.webp',
    './images/species/antarctic-krill/03-larval-development-under-sea-ice.webp',
    './images/species/antarctic-krill/04-diel-vertical-migration.webp',
    './images/species/antarctic-krill/05-predator-prey-swarm.webp',
    './images/species/antarctic-krill/06-scientific-net-sampling.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path?.endsWith('.webp')));
  assert.ok(
    !antarcticKrill.media.gallery.some(
      ({ image }) => image === antarcticKrill.media.image,
    ),
  );
  const mediaRecords = [antarcticKrill.media, ...antarcticKrill.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    antarcticKrill.media.gallery.every(
      ({ title, caption }) =>
        title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ credit }) => credit === 'Fauna Atlas · AI 生成原创图像',
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );
  assert.ok((antarcticKrill.media.focalPoint?.x ?? 0) >= 0.65);
  assert.ok((antarcticKrill.media.focalPoint?.x ?? 1) <= 0.75);

  const migrationMedia = antarcticKrill.media.gallery.find(({ image }) =>
    image.endsWith('/04-diel-vertical-migration.webp'),
  );
  assert.ok(migrationMedia);
  assert.match(
    `${migrationMedia.alt} ${migrationMedia.caption ?? ''}`,
    /(?:昼夜垂直迁移|日周垂直迁移)/,
  );
  assert.match(
    `${migrationMedia.alt} ${migrationMedia.caption ?? ''}`,
    /(?:海区|区域|季节|海冰|群体).{0,50}(?:变化|差异|并非固定|不固定)|(?:变化|差异|并非固定|不固定).{0,50}(?:海区|区域|季节|海冰|群体)/,
  );

  const sourcePaths = [
    '01-adult-krill-under-sea-ice-source.png',
    '02-filter-feeding-phytoplankton-source.png',
    '03-larval-development-under-sea-ice-source.png',
    '04-diel-vertical-migration-source.png',
    '05-predator-prey-swarm-source.png',
    '06-scientific-net-sampling-source.png',
  ];
  const runtimeUrls = mediaPaths.map(
    (path) => new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
  );
  const sourceUrls = sourcePaths.map(
    (filename) =>
      new URL(
        `../src/assets/source/species/antarctic-krill/${filename}`,
        import.meta.url,
      ),
  );
  const imageFiles = [
    ...runtimeUrls.map((url) => ({ format: 'WEBP', url })),
    ...sourceUrls.map((url) => ({ format: 'PNG', url })),
  ];
  assert.equal(imageFiles.length, 12);
  await Promise.all(imageFiles.map(({ url }) => access(url)));
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%[channels]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, channels] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
        },
      );
      assert.equal(channels.trim().split(/\s+/)[0], 'srgb');
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );

  const [runtimeHashes, sourceHashes] = await Promise.all(
    [runtimeUrls, sourceUrls].map((urls) =>
      Promise.all(
        urls.map(async (url) =>
          createHash('sha256').update(await readFile(url)).digest('hex'),
        ),
      ),
    ),
  );
  assert.equal(new Set(runtimeHashes).size, 6, 'runtime WebP files should differ');
  assert.equal(new Set(sourceHashes).size, 6, 'source PNG files should differ');

  assert.ok(antarcticKrill.sources.length >= 20);
  assert.equal(
    new Set(antarcticKrill.sources.map(({ url }) => url)).size,
    antarcticKrill.sources.length,
  );
  assert.ok(antarcticKrill.sources.every(({ title }) => title.length > 0));
  assert.ok(antarcticKrill.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(
    antarcticKrill.sources.every(({ url }) => url.startsWith('https://')),
  );
  assert.ok(
    antarcticKrill.sources.every(
      ({ accessedAt }) => accessedAt === '2026-08-28',
    ),
  );
  assert.deepEqual(
    new Set(antarcticKrill.sources.map(({ kind }) => kind)),
    new Set([
      'taxonomy',
      'distribution',
      'ecology',
      'conservation',
      'general',
    ]),
  );

  const editorialText = [
    antarcticKrill.summary,
    antarcticKrill.description,
    antarcticKrill.distribution.range,
    ...antarcticKrill.distribution.regions,
    ...antarcticKrill.habitats.flatMap(({ name, description }) => [
      name,
      description,
    ]),
    antarcticKrill.measurements.length.note ?? '',
    antarcticKrill.measurements.weight?.note ?? '',
    antarcticKrill.diet.description,
    ...antarcticKrill.diet.foods,
    ...(antarcticKrill.activity ?? []),
    ...antarcticKrill.tags,
    ...(antarcticKrill.storySections ?? []).flatMap(
      ({ label, title, body }) => [label, title, body],
    ),
    ...antarcticKrill.keyFacts,
    ...antarcticKrill.threats,
    ...antarcticKrill.conservationActions,
    ...antarcticKrill.featuredStats.flatMap(
      ({ label, value, unit, note }) => [
        label,
        value,
        unit ?? '',
        note ?? '',
      ],
    ),
    ...mediaRecords.flatMap(({ alt, title, caption }) => [
      alt,
      title ?? '',
      caption ?? '',
    ]),
  ].join(' ');

  for (const lifecyclePattern of [
    /(?:卵|受精卵).{0,50}(?:下沉|沉降)/,
    /(?:无节幼体|nauplius).{0,80}(?:上升|上浮|发育上升)/i,
    /(?:糠虾期幼体|糠虾幼体|furcilia|晚期幼体).{0,80}(?:海冰藻|冰藻|冰下)/i,
    /(?:蜕皮|多次蜕变|多个幼体阶段)/,
  ]) {
    assert.match(editorialText, lifecyclePattern);
  }
  assert.match(editorialText, /(?:关键种|关键饵料|食物网枢纽)/);
  assert.ok(
    [/(?:鲸|须鲸)/, /海豹/, /(?:企鹅|海鸟)/, /鱼/, /(?:鱿鱼|头足类)/].filter(
      (pattern) => pattern.test(editorialText),
    ).length >= 4,
  );
  assert.match(editorialText, /(?:群集|聚群|虾群).{0,80}(?:捕食|觅食|食物网)/);
  assert.match(
    editorialText,
    /(?=[\s\S]*生物量)(?=[\s\S]*(?:估计|模型|区间|不确定|调查))(?=[\s\S]*(?:3\.79 亿|379(?:,?000,?000)?|379 百万))(?=[\s\S]*(?:环极|环南极|南大洋))(?=[\s\S]*(?:夏季|后幼体))/,
  );
  assert.match(editorialText, /CCAMLR/);
  assert.match(editorialText, /(?:Area 48|48 区|第 48 区)/);
  assert.match(editorialText, /(?:捕捞|渔业)/);
  assert.match(editorialText, /(?:限额|上限|预防性|生态系统管理)/);
  assert.match(
    editorialText,
    /(?=[\s\S]*5\.61\s*(?:Mt|百万吨))(?=[\s\S]*(?:620,?000|62 万)\s*(?:t|吨))(?=[\s\S]*(?:trigger|触发|实际|空间分配))/i,
  );
  assert.match(
    editorialText,
    /51-07.{0,60}(?:失效|到期|届满)|(?:失效|到期|届满).{0,60}51-07/,
  );
  assert.match(
    editorialText,
    /2025.{0,100}(?:没有|缺乏|未有|尚无|取消).{0,30}(?:法定|进一步|细分|分区|空间).{0,20}(?:分配|上限|限额)|2025.{0,100}(?:法定|进一步|细分|分区|空间).{0,20}(?:分配|上限|限额).{0,30}(?:没有|缺乏|未有|尚无|取消)/,
  );
  assert.match(editorialText, /(?:局地集中|空间重叠|时空重叠|捕食者需求)/);
  assert.match(editorialText, /(?:监测|分区|限额|管理)/);
  assert.match(editorialText, /(?:海冰|海水温度|海洋变暖)/);
  assert.match(editorialText, /(?:幼体|补充量|栖息地|食物)/);
  assert.match(editorialText, /(?:变化|风险|影响)/);
  assert.match(editorialText, /IUCN/);
  assert.match(editorialText, /(?:未评估|尚未评估|NE)/);
  assert.match(editorialText, /(?:不等于|不代表|不能说明).{0,40}(?:安全|无风险|无危)/);
  assert.match(editorialText, /(?:甲壳动物|软甲纲)/);
  assert.match(
    editorialText,
    /(?=[\s\S]*(?:昼夜垂直迁移|日周垂直迁移))(?=[\s\S]*(?:海区|区域|季节|海冰|群体))(?=[\s\S]*(?:变化|差异|不固定|并非固定))/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:所有|全部|每一群).{0,20}(?:白天|夜间).{0,40}(?:固定|必定|总是)|(?:昼夜垂直迁移|日周垂直迁移).{0,40}(?:固定规律|所有群体相同)/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:所有|全部).{0,16}(?:幼体|幼虾).{0,24}(?:全年|终年).{0,20}(?:冰下|海冰)/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:生物量最大的野生动物|地球上生物量最高的动物)(?!之一)/,
  );

  assert.equal(antarcticKrill.featured, true);
  assert.equal(antarcticKrill.publishedAt, '2026-08-28');
  assert.equal(antarcticKrill.updatedAt, '2026-08-28');
});

test('registers the Coconut Crab as a complete Birgus latro profile', async () => {
  const coconutCrab = findSpecies('coconut-crab');

  assert.equal(coconutCrab.id, 'species-birgus-latro');
  assert.equal(coconutCrab.slug, 'coconut-crab');
  assert.equal(coconutCrab.names.zh, '椰子蟹');
  assert.equal(coconutCrab.names.en, 'Coconut Crab');
  assert.equal(coconutCrab.scientificName, 'Birgus latro');
  assert.doesNotMatch(coconutCrab.scientificName, /Linnaeus|1767/);
  assert.deepEqual(
    getSpeciesTaxonomyPath(coconutCrab).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Arthropoda', '节肢动物门'],
      ['class', 'Malacostraca', '软甲纲'],
      ['order', 'Decapoda', '十足目'],
      ['family', 'Coenobitidae', '陆寄居蟹科'],
      ['genus', 'Birgus', '椰子蟹属'],
    ],
  );

  assert.deepEqual(
    {
      code: coconutCrab.conservation.code,
      trend: coconutCrab.conservation.trend,
      assessedYear: coconutCrab.conservation.assessedYear,
      criteria: coconutCrab.conservation.criteria,
    },
    {
      code: 'VU',
      trend: 'decreasing',
      assessedYear: 2018,
      criteria: 'A2cd+4cd',
    },
  );

  assert.deepEqual(coconutCrab.distribution.realms, ['terrestrial', 'marine']);
  assert.equal(coconutCrab.habitats.length, 4);
  assert.equal(
    coconutCrab.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.equal(
    coconutCrab.habitats.filter(({ realm }) => realm === 'terrestrial').length,
    3,
  );
  assert.equal(
    coconutCrab.habitats.filter(({ realm }) => realm === 'marine').length,
    1,
  );

  assert.deepEqual(Object.keys(coconutCrab.measurements), ['weight']);
  assert.deepEqual(
    {
      max: coconutCrab.measurements.weight.max,
      unit: coconutCrab.measurements.weight.unit,
    },
    { max: 4, unit: 'kg' },
  );
  const weightNote = coconutCrab.measurements.weight.note ?? '';
  assert.match(weightNote, /(?:极端|极大|上限|最高记录)/);
  assert.match(weightNote, /(?:典型|平均|常见|普通)/);
  assert.match(weightNote, /(?:不是|并非|不代表|不能)/);
  assert.deepEqual(coconutCrab.metrics, {});

  assert.ok(coconutCrab.diet.types.includes('omnivore'));
  assert.ok(coconutCrab.diet.foods.length >= 4);
  assert.ok(coconutCrab.diet.foods.some((food) => /(?:椰子|椰肉)/.test(food)));
  const nonCoconutFoodPatterns = [
    /(?:果实|无花果|露兜树|海檬果)/,
    /(?:种子|坚果|棕榈髓)/,
    /(?:腐肉|动物尸体)/,
    /(?:陆生动物|红蟹|其他蟹|活体猎物)/,
  ];
  const foodText = coconutCrab.diet.foods.join(' ');
  assert.ok(
    nonCoconutFoodPatterns.filter((pattern) => pattern.test(foodText)).length >=
      3,
  );

  assert.equal(coconutCrab.storySections?.length, 6);
  assert.equal(
    new Set(coconutCrab.storySections.map(({ key }) => key)).size,
    6,
  );
  assert.ok(
    coconutCrab.storySections.every(
      ({ key, label, title, body }) =>
        key.length > 0 &&
        label.length > 0 &&
        title.length > 0 &&
        body.length > 0,
    ),
  );

  assert.equal(coconutCrab.featuredStats.length, 4);
  assert.equal(
    new Set(coconutCrab.featuredStats.map(({ key }) => key)).size,
    4,
  );
  assert.ok(
    coconutCrab.featuredStats.every(
      ({ key, label, value, note }) =>
        key.length > 0 &&
        label.length > 0 &&
        value.length > 0 &&
        (note?.length ?? 0) > 0,
    ),
  );

  assert.equal(coconutCrab.media.gallery?.length, 5);
  const mediaPaths = [
    coconutCrab.media.image,
    ...coconutCrab.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/coconut-crab/01-rainforest-adult-portrait.webp',
    './images/species/coconut-crab/02-shell-carrying-early-juvenile.webp',
    './images/species/coconut-crab/03-ovigerous-female-at-surf.webp',
    './images/species/coconut-crab/04-coconut-fiber-feeding.webp',
    './images/species/coconut-crab/05-airborne-odor-foraging.webp',
    './images/species/coconut-crab/06-night-road-monitoring.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path?.endsWith('.webp')));
  assert.ok(
    !coconutCrab.media.gallery.some(
      ({ image }) => image === coconutCrab.media.image,
    ),
  );
  const mediaRecords = [coconutCrab.media, ...coconutCrab.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    coconutCrab.media.gallery.every(
      ({ title, caption }) =>
        title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ credit }) => credit === 'Fauna Atlas · AI 生成原创图像',
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );

  const sourcePaths = [
    '01-rainforest-adult-portrait-source.png',
    '02-shell-carrying-early-juvenile-source.png',
    '03-ovigerous-female-at-surf-source.png',
    '04-coconut-fiber-feeding-source.png',
    '05-airborne-odor-foraging-source.png',
    '06-night-road-monitoring-source.png',
  ];
  const runtimeUrls = mediaPaths.map(
    (path) => new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
  );
  const sourceUrls = sourcePaths.map(
    (filename) =>
      new URL(
        `../src/assets/source/species/coconut-crab/${filename}`,
        import.meta.url,
      ),
  );
  const imageFiles = [
    ...runtimeUrls.map((url) => ({ format: 'WEBP', url })),
    ...sourceUrls.map((url) => ({ format: 'PNG', url })),
  ];
  assert.equal(imageFiles.length, 12);
  await Promise.all(imageFiles.map(({ url }) => access(url)));
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%[channels]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, channels] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
        },
      );
      assert.equal(channels.trim().split(/\s+/)[0], 'srgb');
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );

  const [runtimeHashes, sourceHashes] = await Promise.all(
    [runtimeUrls, sourceUrls].map((urls) =>
      Promise.all(
        urls.map(async (url) =>
          createHash('sha256').update(await readFile(url)).digest('hex'),
        ),
      ),
    ),
  );
  assert.equal(new Set(runtimeHashes).size, 6, 'runtime WebP files should differ');
  assert.equal(new Set(sourceHashes).size, 6, 'source PNG files should differ');

  assert.ok(coconutCrab.sources.length >= 25);
  assert.equal(
    new Set(coconutCrab.sources.map(({ url }) => url)).size,
    coconutCrab.sources.length,
  );
  assert.ok(coconutCrab.sources.every(({ title }) => title.length > 0));
  assert.ok(coconutCrab.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(coconutCrab.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    coconutCrab.sources.every(
      ({ accessedAt }) => accessedAt === '2026-08-28',
    ),
  );
  assert.deepEqual(
    new Set(coconutCrab.sources.map(({ kind }) => kind)),
    new Set([
      'taxonomy',
      'distribution',
      'ecology',
      'conservation',
      'general',
    ]),
  );

  const editorialText = [
    coconutCrab.summary,
    coconutCrab.description,
    coconutCrab.distribution.range,
    ...coconutCrab.distribution.regions,
    ...coconutCrab.habitats.flatMap(({ name, description }) => [
      name,
      description,
    ]),
    weightNote,
    coconutCrab.diet.description,
    ...coconutCrab.diet.foods,
    ...(coconutCrab.activity ?? []),
    ...coconutCrab.tags,
    ...(coconutCrab.storySections ?? []).flatMap(
      ({ label, title, body }) => [label, title, body],
    ),
    ...coconutCrab.keyFacts,
    ...coconutCrab.threats,
    ...coconutCrab.conservationActions,
    ...coconutCrab.featuredStats.flatMap(
      ({ label, value, unit, note }) => [
        label,
        value,
        unit ?? '',
        note ?? '',
      ],
    ),
    ...mediaRecords.flatMap(({ alt, title, caption }) => [
      alt,
      title ?? '',
      caption ?? '',
    ]),
  ].join(' ');
  const assertHasAny = (text, patterns, message) => {
    assert.ok(patterns.some((pattern) => pattern.test(text)), message);
  };

  assertHasAny(
    editorialText,
    [
      /(?:现存)?最大(?:的)?陆生节肢动物/,
      /陆生节肢动物.{0,16}(?:最大|之最)/,
    ],
    'profile should identify the land-arthropod size record',
  );
  assertHasAny(
    editorialText,
    [
      /(?:并非|不是|不等于).{0,24}(?:所有)?(?:蟹|蟹类).{0,16}(?:最大|体型冠军)/,
      /(?:最大|体型冠军).{0,16}(?:蟹|蟹类).{0,24}(?:并非|不是|不等于)/,
    ],
    'profile should not turn the land-arthropod record into a largest-crab claim',
  );
  assertHasAny(
    editorialText,
    [
      /(?:不是|并非).{0,16}(?:短尾类|真蟹)/,
      /(?:陆寄居蟹科|异尾类).{0,24}(?:不是|并非).{0,16}(?:短尾类|真蟹)/,
    ],
    'profile should distinguish a terrestrial hermit crab from a true crab',
  );

  assertHasAny(
    editorialText,
    [
      /(?:成体|成年).{0,30}(?:不再|不|没有|无).{0,12}(?:背|携带)?(?:螺)?壳/,
      /(?:弃壳|脱离螺壳).{0,30}(?:成体|成年)/,
    ],
    'profile should keep adults shell-free',
  );
  assertHasAny(
    editorialText,
    [
      /(?:蚤状幼体|早期幼生|海洋幼生).{0,40}(?:海中|海水|海洋|浮游)/,
      /(?:海中|海水|海洋).{0,40}(?:蚤状幼体|早期幼生|海洋幼生)/,
    ],
    'profile should retain the marine larval phase',
  );
  assert.match(editorialText, /(?:大眼幼体|glaucothoe)/i);
  assertHasAny(
    editorialText,
    [
      /(?:大眼幼体|glaucothoe).{0,80}(?:螺壳|贝壳).{0,80}(?:上岸|登陆)/i,
      /(?:大眼幼体|glaucothoe).{0,80}(?:上岸|登陆).{0,80}(?:螺壳|贝壳)/i,
    ],
    'profile should explain shell-assisted landing by glaucothoes',
  );

  assert.match(editorialText, /(?:鳃盖肺|鳃室.{0,8}(?:肺|空气呼吸))/);
  assertHasAny(
    editorialText,
    [
      /(?:成体|成年).{0,40}(?:不能|无法).{0,16}(?:水下|水中|海里).{0,12}(?:生活|呼吸|生存)/,
      /(?:成体|成年).{0,40}(?:浸没|泡在水中).{0,20}(?:溺亡|淹死)/,
      /(?:水下|水中|海里).{0,20}(?:不能|无法).{0,20}(?:生活|呼吸|生存)/,
    ],
    'profile should not make air-breathing adults aquatic',
  );

  assertHasAny(
    editorialText,
    [
      /椰子.{0,30}(?:只是|仅是|并非|不是).{0,24}(?:菜单|食物|食谱|一部分|唯一)/,
      /(?:并非|不是).{0,16}(?:只吃|唯一).{0,16}椰子/,
      /(?:菜单|食谱).{0,20}(?:不止|远不止).{0,12}椰子/,
    ],
    'profile should present coconut as one food among many',
  );

  const measuredForceStat = coconutCrab.featuredStats.find(
    ({ value, unit }) => unit === 'N' && /1,?765\.2/.test(value),
  );
  assert.ok(
    measuredForceStat,
    'profile should feature the measured 1,765.2 N force',
  );
  const measuredForceNote = measuredForceStat.note ?? '';
  assert.match(measuredForceNote, /(?:实测|测得)/);
  assert.match(measuredForceNote, /3,?300/);
  assert.match(measuredForceNote, /(?:外推|推算|回归|模型)/);

  const longevityStat = coconutCrab.featuredStats.find(
    ({ value, unit }) => unit === '年' && /50/.test(value),
  );
  assert.ok(
    longevityStat,
    'profile should feature the roughly 50-year lifespan',
  );
  assert.match(longevityStat.note ?? '', /(?:模型|估算|拟合)/);

  assert.ok(coconutCrab.threats.length >= 4);
  assert.ok(coconutCrab.conservationActions.length >= 4);
  const threatText = coconutCrab.threats.join(' ');
  for (const threatPattern of [
    /(?:捕捉|捕猎|食用|贸易)/,
    /(?:森林|生境|栖息地|沿岸).{0,30}(?:破坏|清除|丧失|破碎)/,
    /(?:道路|车辆|路杀|撞击)/,
    /(?:外来种|外来捕食者|黄疯蚁|鼠|猪)/,
  ]) {
    assert.match(threatText, threatPattern);
  }
  const actionText = coconutCrab.conservationActions.join(' ');
  for (const actionPattern of [
    /(?:森林|生境|栖息地|保护地|连接带)/,
    /(?:禁捕|休渔|限捕|袋限|许可证|抱卵雌蟹)/,
    /(?:限速|封路|道路|避让)/,
    /(?:外来种|黄疯蚁|鼠|猪)/,
    /(?:监测|样线|相机|标记重捕|个体识别)/,
  ]) {
    assert.match(actionText, actionPattern);
  }

  const sizeText = [
    `最大体重 ${coconutCrab.measurements.weight.max} ${coconutCrab.measurements.weight.unit}`,
    weightNote,
    ...coconutCrab.featuredStats.flatMap(({ value, unit, note }) => [
      value,
      unit ?? '',
      note ?? '',
    ]),
    ...(coconutCrab.storySections ?? []).map(({ body }) => body),
    ...coconutCrab.keyFacts,
  ].join(' ');
  assert.match(sizeText, /4\s*(?:kg|千克)/i);
  assertHasAny(
    sizeText,
    [
      /(?:足展|跨足).{0,50}(?:约|接近|可达).{0,10}1\s*(?:米|m)/i,
      /1\s*(?:米|m).{0,50}(?:足展|跨足)/i,
    ],
    'profile should identify one metre as a leg-span scale',
  );
  assert.match(sizeText, /(?:极端|极大|大型个体|最大记录|上限)/);
  assert.doesNotMatch(editorialText, /(?:最高|最大|可达).{0,12}6\s*(?:kg|千克)/i);

  assert.equal(coconutCrab.featured, true);
  assert.equal(coconutCrab.publishedAt, '2026-08-28');
  assert.equal(coconutCrab.updatedAt, '2026-08-28');
});

test('registers the Chambered Nautilus as a complete Nautilus pompilius profile', async () => {
  const chamberedNautilus = findSpecies('chambered-nautilus');

  assert.equal(chamberedNautilus.id, 'species-nautilus-pompilius');
  assert.equal(chamberedNautilus.slug, 'chambered-nautilus');
  assert.equal(chamberedNautilus.names.zh, '鹦鹉螺');
  assert.equal(chamberedNautilus.names.en, 'Chambered Nautilus');
  assert.equal(chamberedNautilus.scientificName, 'Nautilus pompilius');
  assert.deepEqual(
    getSpeciesTaxonomyPath(chamberedNautilus).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Mollusca', '软体动物门'],
      ['class', 'Cephalopoda', '头足纲'],
      ['order', 'Nautilida', '鹦鹉螺目'],
      ['family', 'Nautilidae', '鹦鹉螺科'],
      ['genus', 'Nautilus', '鹦鹉螺属'],
    ],
  );

  assert.deepEqual(
    {
      code: chamberedNautilus.conservation.code,
      trend: chamberedNautilus.conservation.trend,
      assessedYear: chamberedNautilus.conservation.assessedYear,
      criteria: chamberedNautilus.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );

  assert.deepEqual(chamberedNautilus.distribution.realms, ['marine']);
  assert.deepEqual(chamberedNautilus.distribution.countries, [
    '印度尼西亚',
    '菲律宾',
  ]);
  for (const excludedCountry of [
    '澳大利亚',
    '帕劳',
    '斐济',
    '瓦努阿图',
    '美属萨摩亚',
  ]) {
    assert.ok(
      !chamberedNautilus.distribution.countries.includes(excludedCountry),
      `${excludedCountry} should not be an unqualified Nautilus pompilius country`,
    );
  }
  assert.equal(chamberedNautilus.habitats.length, 3);
  assert.equal(
    chamberedNautilus.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(
    chamberedNautilus.habitats.every(({ realm }) => realm === 'marine'),
  );

  assert.ok(chamberedNautilus.measurements.length);
  assert.deepEqual(
    {
      min: chamberedNautilus.measurements.length.min,
      max: chamberedNautilus.measurements.length.max,
      unit: chamberedNautilus.measurements.length.unit,
    },
    { min: 10, max: 22, unit: 'cm' },
  );
  const lengthNote = chamberedNautilus.measurements.length.note ?? '';
  assert.match(lengthNote, /(?:壳径|壳(?:最大)?直径)/);
  assert.match(lengthNote, /(?:成体|成熟|常见|典型|通常|约)/);

  assert.ok(chamberedNautilus.diet.types.includes('carnivore'));
  assert.deepEqual(chamberedNautilus.metrics, {});

  assert.equal(chamberedNautilus.storySections?.length, 6);
  assert.equal(
    new Set(chamberedNautilus.storySections.map(({ key }) => key)).size,
    6,
  );
  assert.ok(
    chamberedNautilus.storySections.every(
      ({ key, label, title, body }) =>
        key.length > 0 &&
        label.length > 0 &&
        title.length > 0 &&
        body.length > 0,
    ),
  );

  assert.equal(chamberedNautilus.featuredStats.length, 4);
  assert.equal(
    new Set(chamberedNautilus.featuredStats.map(({ key }) => key)).size,
    4,
  );
  assert.ok(
    chamberedNautilus.featuredStats.every(
      ({ key, label, value, note }) =>
        key.length > 0 &&
        label.length > 0 &&
        value.length > 0 &&
        (note?.length ?? 0) > 0,
    ),
  );

  assert.equal(chamberedNautilus.media.gallery?.length, 5);
  const mediaPaths = [
    chamberedNautilus.media.image,
    ...chamberedNautilus.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/chambered-nautilus/01-steep-reef-adult-portrait.webp',
    './images/species/chambered-nautilus/02-pinhole-eye-and-suckerless-cirri.webp',
    './images/species/chambered-nautilus/03-seafloor-carrion-foraging.webp',
    './images/species/chambered-nautilus/04-nighttime-vertical-movement.webp',
    './images/species/chambered-nautilus/05-chambered-shell-cutaway.webp',
    './images/species/chambered-nautilus/06-captive-egg-development.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path?.endsWith('.webp')));
  assert.ok(
    !chamberedNautilus.media.gallery.some(
      ({ image }) => image === chamberedNautilus.media.image,
    ),
  );
  const mediaRecords = [
    chamberedNautilus.media,
    ...chamberedNautilus.media.gallery,
  ];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    chamberedNautilus.media.gallery.every(
      ({ title, caption }) =>
        title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ credit }) => credit === 'Fauna Atlas · AI 生成原创图像',
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );

  const sourcePaths = [
    '01-steep-reef-adult-portrait-source.png',
    '02-pinhole-eye-and-suckerless-cirri-source.png',
    '03-seafloor-carrion-foraging-source.png',
    '04-nighttime-vertical-movement-source.png',
    '05-chambered-shell-cutaway-source.png',
    '06-captive-egg-development-source.png',
  ];
  assert.deepEqual(
    sourcePaths.map((path) => path.replace(/-source\.png$/, '')),
    mediaPaths.map((path) =>
      path.slice(path.lastIndexOf('/') + 1).replace(/\.webp$/, ''),
    ),
  );
  const runtimeUrls = mediaPaths.map(
    (path) => new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
  );
  const sourceUrls = sourcePaths.map(
    (filename) =>
      new URL(
        `../src/assets/source/species/chambered-nautilus/${filename}`,
        import.meta.url,
      ),
  );
  const imageFiles = [
    ...runtimeUrls.map((url) => ({ format: 'WEBP', url })),
    ...sourceUrls.map((url) => ({ format: 'PNG', url })),
  ];
  assert.equal(imageFiles.length, 12);
  await Promise.all(imageFiles.map(({ url }) => access(url)));
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%[channels]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, channels] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
        },
      );
      assert.equal(channels.trim().split(/\s+/)[0], 'srgb');
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );

  const [runtimeHashes, sourceHashes] = await Promise.all(
    [runtimeUrls, sourceUrls].map((urls) =>
      Promise.all(
        urls.map(async (url) =>
          createHash('sha256').update(await readFile(url)).digest('hex'),
        ),
      ),
    ),
  );
  assert.equal(new Set(runtimeHashes).size, 6, 'runtime WebP files should differ');
  assert.equal(new Set(sourceHashes).size, 6, 'source PNG files should differ');
  assert.equal(
    new Set([...runtimeHashes, ...sourceHashes]).size,
    12,
    'runtime and source image files should all differ',
  );

  assert.ok(chamberedNautilus.sources.length >= 20);
  assert.equal(
    new Set(chamberedNautilus.sources.map(({ url }) => url)).size,
    chamberedNautilus.sources.length,
  );
  assert.ok(chamberedNautilus.sources.every(({ title }) => title.length > 0));
  assert.ok(chamberedNautilus.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(
    chamberedNautilus.sources.every(({ url }) => url.startsWith('https://')),
  );
  assert.ok(
    chamberedNautilus.sources.every(
      ({ accessedAt }) => accessedAt === '2026-08-28',
    ),
  );
  assert.deepEqual(
    new Set(chamberedNautilus.sources.map(({ kind }) => kind)),
    new Set([
      'taxonomy',
      'distribution',
      'ecology',
      'conservation',
      'general',
    ]),
  );

  const editorialText = [
    chamberedNautilus.summary,
    chamberedNautilus.description,
    chamberedNautilus.distribution.range,
    ...chamberedNautilus.distribution.regions,
    ...chamberedNautilus.habitats.flatMap(({ name, description }) => [
      name,
      description,
    ]),
    lengthNote,
    chamberedNautilus.diet.description,
    ...chamberedNautilus.diet.foods,
    ...(chamberedNautilus.activity ?? []),
    ...chamberedNautilus.tags,
    ...(chamberedNautilus.storySections ?? []).flatMap(
      ({ label, title, body }) => [label, title, body],
    ),
    ...chamberedNautilus.keyFacts,
    ...chamberedNautilus.threats,
    ...chamberedNautilus.conservationActions,
    ...chamberedNautilus.featuredStats.flatMap(
      ({ label, value, unit, note }) => [
        label,
        value,
        unit ?? '',
        note ?? '',
      ],
    ),
    ...mediaRecords.flatMap(({ alt, title, caption }) => [
      alt,
      title ?? '',
      caption ?? '',
    ]),
  ].join(' ');

  assert.match(editorialText, /(?:壳室|气室)/);
  assert.match(editorialText, /(?:体管|连室细管|siphuncle)/i);
  assert.match(
    editorialText,
    /(?:体管|连室细管|siphuncle).{0,100}(?:不同于|区别于|不是|并非|勿混淆|区分).{0,60}(?:漏斗|funnel)|(?:漏斗|funnel).{0,100}(?:不同于|区别于|不是|并非|勿混淆|区分).{0,60}(?:体管|连室细管|siphuncle)|(?:体管|连室细管|siphuncle)[^。；]{0,160}(?:漏斗|funnel)[^。；]{0,80}(?:不能混|不可混|两套结构|功能不同)/i,
  );

  assert.match(editorialText, /(?:针孔眼|小孔眼|pinhole eye)/i);
  assert.match(
    editorialText,
    /(?:腕须|腕丝|触手丝|触手样附肢|cirri).{0,60}(?:没有|无|缺少|不具).{0,20}吸盘|(?:没有|无|缺少|不具).{0,20}吸盘.{0,60}(?:腕须|腕丝|触手丝|触手样附肢|cirri)/i,
  );

  assert.match(editorialText, /(?:昼夜)?(?:垂直|深度)(?:移动|迁移)/);
  assert.match(editorialText, /(?:地点|岛屿|海域|种群).{0,50}(?:依赖|取决|不同|差异|变化|因地而异)/);

  assert.match(
    editorialText,
    /(?:每次|一次|逐次)?(?:产下|产出|排出|附着|只产)?[^。；]{0,24}(?:一枚|单枚|单个|1\s*枚)[^。；]{0,12}卵|(?:一枚|单枚|单个|1\s*枚)[^。；]{0,20}卵/,
  );
  assert.match(editorialText, /269\s*[–—-]\s*362\s*(?:日|天)/);
  assert.match(
    editorialText,
    /(?:没有|不经历|无|缺少).{0,24}(?:浮游幼体|浮游幼生|浮游期)/,
  );

  assert.match(editorialText, /CITES.{0,40}(?:附录\s*II|Appendix\s*II)/i);
  assert.match(
    editorialText,
    /(?:ESA|美国濒危物种法).{0,80}(?:受威胁|threatened|列名|列入|保护)/i,
  );
  assert.match(editorialText, /IUCN.{0,40}(?:NE|未评估|尚未评估)/i);
  assert.match(
    editorialText,
    /(?:CITES|ESA|美国濒危物种法)[\s\S]{0,160}(?:不等于|不同于|不能替代|并非)[\s\S]{0,80}IUCN|IUCN[\s\S]{0,120}(?:不等于|不同于|不能替代|并非)[\s\S]{0,120}(?:CITES|ESA|美国濒危物种法)|(?:CITES|ESA|美国濒危物种法)[\s\S]{0,180}(?:贸易|管制|法定保护)[\s\S]{0,100}IUCN[\s\S]{0,60}(?:NE|未评估|尚未完成全球评估)/i,
  );

  assert.match(editorialText, /2023/);
  for (const speciesName of [
    /N(?:autilus|\.)\s*vitiensis/i,
    /N(?:autilus|\.)\s*samoaensis/i,
    /N(?:autilus|\.)\s*vanuatuensis/i,
  ]) {
    assert.match(editorialText, speciesName);
  }
  assert.match(
    editorialText,
    /(?:种界|(?:物种|分类|地理).{0,16}边界)|(?:不能|不可|不应|不宜).{0,40}(?:并入|算作|归入|等同于).{0,40}(?:本种|鹦鹉螺|Nautilus pompilius)/i,
  );

  assert.equal(chamberedNautilus.featured, true);
  assert.equal(chamberedNautilus.publishedAt, '2026-08-28');
  assert.equal(chamberedNautilus.updatedAt, '2026-08-28');
});

test('registers the Common Octopus as a complete Octopus vulgaris sensu stricto profile', async () => {
  const commonOctopus = findSpecies('common-octopus');

  assert.equal(commonOctopus.id, 'species-octopus-vulgaris');
  assert.equal(commonOctopus.slug, 'common-octopus');
  assert.equal(commonOctopus.names.zh, '普通章鱼');
  assert.equal(commonOctopus.names.en, 'Common Octopus');
  assert.ok(commonOctopus.names.aliases?.includes('Common Atlantic Octopus'));
  assert.ok(commonOctopus.names.aliases?.includes('Common European Octopus'));
  assert.ok(!commonOctopus.names.aliases?.includes('真蛸'));
  assert.ok(!commonOctopus.names.aliases?.includes('ma-dako'));
  assert.equal(commonOctopus.scientificName, 'Octopus vulgaris');
  assert.deepEqual(
    getSpeciesTaxonomyPath(commonOctopus).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Mollusca', '软体动物门'],
      ['class', 'Cephalopoda', '头足纲'],
      ['order', 'Octopoda', '八腕目'],
      ['family', 'Octopodidae', '章鱼科'],
      ['genus', 'Octopus', '章鱼属'],
    ],
  );
  assert.equal(commonOctopus.scientificName.split(' ')[0], 'Octopus');

  assert.deepEqual(
    {
      code: commonOctopus.conservation.code,
      trend: commonOctopus.conservation.trend,
      assessedYear: commonOctopus.conservation.assessedYear,
      criteria: commonOctopus.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'unknown',
      assessedYear: 2016,
      criteria: undefined,
    },
  );

  assert.deepEqual(commonOctopus.distribution.realms, ['marine']);
  assert.deepEqual(commonOctopus.distribution.continents, ['欧洲', '非洲']);
  assert.deepEqual(commonOctopus.distribution.regions, [
    '地中海',
    '东北大西洋欧洲沿岸',
    '西北非洲与东部中大西洋沿岸',
    '亚速尔、马德拉、加那利与佛得角群岛',
  ]);
  assert.deepEqual(commonOctopus.distribution.countries, [
    '葡萄牙',
    '西班牙',
    '法国',
    '意大利',
    '希腊',
    '摩洛哥',
  ]);
  assert.deepEqual(commonOctopus.distribution.center, { lat: 37, lng: 3 });
  for (const excludedCountry of [
    '中国',
    '日本',
    '韩国',
    '美国',
    '巴西',
    '南非',
    '澳大利亚',
  ]) {
    assert.ok(
      !commonOctopus.distribution.countries.includes(excludedCountry),
      `${excludedCountry} should not be an unqualified Octopus vulgaris sensu stricto country`,
    );
  }
  assert.match(
    commonOctopus.distribution.range,
    /(?:狭义|sensu stricto).*地中海.*(?:东北|东部中)大西洋.*(?:东亚|日本).*(?:加勒比|美洲).*巴西.*南非.*澳大利亚.*(?:其他物种|待命名|待正式命名|未计入)/i,
  );

  assert.equal(commonOctopus.habitats.length, 3);
  assert.equal(
    commonOctopus.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(commonOctopus.habitats.every(({ realm }) => realm === 'marine'));

  assert.deepEqual(
    {
      min: commonOctopus.measurements.length?.min,
      max: commonOctopus.measurements.length?.max,
      unit: commonOctopus.measurements.length?.unit,
    },
    { min: 10, max: 25, unit: 'cm' },
  );
  const lengthNote = commonOctopus.measurements.length?.note ?? '';
  assert.match(lengthNote, /外套膜长/);
  assert.match(
    lengthNote,
    /(?:不是|非|不含).{0,20}(?:含腕全长|全长|腕长)|(?:含腕全长|全长|腕长).{0,20}(?:不是|非|不含)/,
  );
  assert.deepEqual(
    {
      min: commonOctopus.measurements.weight?.min,
      max: commonOctopus.measurements.weight?.max,
      unit: commonOctopus.measurements.weight?.unit,
    },
    { min: 1, max: 3, unit: 'kg' },
  );
  assert.match(
    commonOctopus.measurements.weight?.note ?? '',
    /(?:FAO|地中海).*(?:常见|历史).*(?:不是|非).*(?:全球|自然极值|上限)/,
  );
  assert.deepEqual(commonOctopus.metrics, {});
  assert.ok(!('adultLengthCm' in commonOctopus.metrics));

  assert.deepEqual(commonOctopus.diet.types, ['carnivore']);
  assert.deepEqual(commonOctopus.diet.foods, [
    '蟹类等甲壳动物',
    '双壳类',
    '腹足类',
    '小型鱼类与其他底栖动物',
  ]);

  assert.equal(commonOctopus.storySections?.length, 6);
  assert.equal(
    new Set(commonOctopus.storySections.map(({ key }) => key)).size,
    6,
  );
  assert.ok(
    commonOctopus.storySections.every(
      ({ key, label, title, body }) =>
        key.length > 0 &&
        label.length > 0 &&
        title.length > 0 &&
        body.length > 0,
    ),
  );
  assert.ok(commonOctopus.keyFacts.length >= 6);
  assert.equal(commonOctopus.threats.length, 5);
  assert.equal(commonOctopus.conservationActions.length, 6);

  assert.deepEqual(
    commonOctopus.featuredStats.map(({ key, value, unit }) => ({
      key,
      value,
      unit,
    })),
    [
      { key: 'arms', value: '8', unit: '条' },
      { key: 'common-mantle-length', value: '10–25', unit: 'cm' },
      { key: 'potential-fecundity', value: '约 10万–50万', unit: '枚' },
      { key: 'planktonic-settlement', value: '47–54', unit: '日' },
    ],
  );
  assert.equal(
    new Set(commonOctopus.featuredStats.map(({ key }) => key)).size,
    4,
  );
  assert.ok(
    commonOctopus.featuredStats.every(
      ({ key, label, value, note }) =>
        key.length > 0 &&
        label.length > 0 &&
        value.length > 0 &&
        (note?.length ?? 0) > 0,
    ),
  );

  assert.equal(commonOctopus.media.gallery?.length, 5);
  const mediaPaths = [
    commonOctopus.media.image,
    ...commonOctopus.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/common-octopus/01-rocky-reef-adult-portrait.webp',
    './images/species/common-octopus/02-chromatophore-papillae-camouflage.webp',
    './images/species/common-octopus/03-rock-crevice-den-and-midden.webp',
    './images/species/common-octopus/04-crab-capture-and-sucker-use.webp',
    './images/species/common-octopus/05-female-egg-brooding-and-ventilation.webp',
    './images/species/common-octopus/06-pelagic-paralarva.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  assert.ok(mediaPaths.every((path) => path?.endsWith('.webp')));
  assert.ok(
    !commonOctopus.media.gallery.some(
      ({ image }) => image === commonOctopus.media.image,
    ),
  );
  const mediaRecords = [commonOctopus.media, ...commonOctopus.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    commonOctopus.media.gallery.every(
      ({ title, caption }) =>
        title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ credit }) => credit === 'Fauna Atlas · AI 生成原创图像',
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint }) =>
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );

  const sourcePaths = [
    '01-rocky-reef-adult-portrait-source.png',
    '02-chromatophore-papillae-camouflage-source.png',
    '03-rock-crevice-den-and-midden-source.png',
    '04-crab-capture-and-sucker-use-source.png',
    '05-female-egg-brooding-and-ventilation-source.png',
    '06-pelagic-paralarva-source.png',
  ];
  assert.deepEqual(
    sourcePaths.map((path) => path.replace(/-source\.png$/, '')),
    mediaPaths.map((path) =>
      path.slice(path.lastIndexOf('/') + 1).replace(/\.webp$/, ''),
    ),
  );
  const runtimeUrls = mediaPaths.map(
    (path) => new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
  );
  const sourceUrls = sourcePaths.map(
    (filename) =>
      new URL(
        `../src/assets/source/species/common-octopus/${filename}`,
        import.meta.url,
      ),
  );
  const imageFiles = [
    ...runtimeUrls.map((url) => ({ format: 'WEBP', url })),
    ...sourceUrls.map((url) => ({ format: 'PNG', url })),
  ];
  assert.equal(imageFiles.length, 12);
  await Promise.all(imageFiles.map(({ url }) => access(url)));
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%[channels]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, channels] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
        },
      );
      assert.equal(channels.trim().split(/\s+/)[0], 'srgb');
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );

  const [runtimeHashes, sourceHashes] = await Promise.all(
    [runtimeUrls, sourceUrls].map((urls) =>
      Promise.all(
        urls.map(async (url) =>
          createHash('sha256').update(await readFile(url)).digest('hex'),
        ),
      ),
    ),
  );
  assert.equal(new Set(runtimeHashes).size, 6, 'runtime WebP files should differ');
  assert.equal(new Set(sourceHashes).size, 6, 'source PNG files should differ');
  assert.equal(
    new Set([...runtimeHashes, ...sourceHashes]).size,
    12,
    'runtime and source image files should all differ',
  );

  assert.ok(commonOctopus.sources.length >= 20);
  assert.equal(
    new Set(commonOctopus.sources.map(({ url }) => url)).size,
    commonOctopus.sources.length,
  );
  assert.ok(commonOctopus.sources.every(({ title }) => title.length > 0));
  assert.ok(commonOctopus.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(
    commonOctopus.sources.every(({ url }) => url.startsWith('https://')),
  );
  assert.ok(
    commonOctopus.sources.every(
      ({ accessedAt }) => accessedAt === '2026-08-28',
    ),
  );
  assert.deepEqual(
    new Set(commonOctopus.sources.map(({ kind }) => kind)),
    new Set([
      'taxonomy',
      'distribution',
      'ecology',
      'conservation',
      'general',
    ]),
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/aphia.php?p=taxdetails&id=140605',
    'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/140605',
    'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T162571A918906.en',
    'https://doi.org/10.12782/sd.21.1.031',
    'https://doi.org/10.1371/journal.pone.0230294',
    'https://doi.org/10.1002/ece3.73235',
    'https://doi.org/10.1186/s12861-020-00212-6',
    'https://doi.org/10.1139/f95-853',
  ]) {
    assert.ok(
      commonOctopus.sources.some(({ url }) => url === requiredUrl),
      `common-octopus sources should include ${requiredUrl}`,
    );
  }

  const editorialText = [
    commonOctopus.summary,
    commonOctopus.description,
    commonOctopus.distribution.range,
    ...commonOctopus.distribution.regions,
    ...commonOctopus.habitats.flatMap(({ name, description }) => [
      name,
      description,
    ]),
    lengthNote,
    commonOctopus.measurements.weight?.note ?? '',
    commonOctopus.diet.description,
    ...commonOctopus.diet.foods,
    ...(commonOctopus.activity ?? []),
    ...commonOctopus.tags,
    ...(commonOctopus.storySections ?? []).flatMap(
      ({ label, title, body }) => [label, title, body],
    ),
    ...commonOctopus.keyFacts,
    ...commonOctopus.threats,
    ...commonOctopus.conservationActions,
    ...commonOctopus.featuredStats.flatMap(
      ({ label, value, unit, note }) => [
        label,
        value,
        unit ?? '',
        note ?? '',
      ],
    ),
    ...mediaRecords.flatMap(({ alt, title, caption }) => [
      alt,
      title ?? '',
      caption ?? '',
    ]),
  ].join(' ');

  assert.match(editorialText, /(?:狭义|sensu stricto)/i);
  assert.match(editorialText, /(?:物种复合群|vulgaris complex)/i);
  assert.match(editorialText, /O(?:ctopus|\.)\s*sinensis.*(?:东亚|日本|真蛸)/i);
  assert.match(
    editorialText,
    /(?:南非|Type III).{0,100}(?:分离|独立|不同谱系|待正式命名)/i,
  );
  assert.match(
    editorialText,
    /IUCN.{0,80}(?:2016|2018).{0,100}(?:广义|旧(?:的)?范围|分类基础|需要更新)/i,
  );
  assert.match(editorialText, /(?:2016.{0,30}评估|评估.{0,30}2016)/);
  assert.match(editorialText, /(?:2018.{0,30}发布|发布.{0,30}2018)/);

  assert.match(
    editorialText,
    /(?:八条|八腕|8\s*条).{0,60}(?:两列|双列).{0,20}吸盘/,
  );
  assert.match(
    editorialText,
    /(?:无|没有|不具).{0,20}(?:外露壳|外壳).{0,30}(?:鱼鳍|鳍)/,
  );
  assert.match(editorialText, /(?:色素胞|反光结构).{0,80}(?:乳突|皮肤纹理)/);
  assert.match(
    editorialText,
    /(?:附近|周围).{0,20}(?:物体|环境).{0,30}(?:关键|选定).{0,20}(?:特征|视觉线索).{0,100}(?:不(?:是|会)|并非|不能).{0,30}(?:逐像素|整个背景|完整背景)/,
  );

  assert.match(
    editorialText,
    /(?:midden|巢口).{0,80}(?:不(?:是|等于)|并非|不能(?:当作|视为|代表)).{0,30}(?:完整食谱|食谱普查)/i,
  );
  assert.match(
    editorialText,
    /(?:夜间活动|夜行).{0,80}(?:地点|风险|食物|变化|并非严格)|(?:并非|不写).{0,20}严格夜行/,
  );
  assert.match(
    editorialText,
    /(?:约\s*)?1\s*(?:–|—|-|至)\s*2\s*年.{0,30}(?:估计|地点|圈养|温度)/,
  );

  assert.match(
    editorialText,
    /(?:雌体|母体).{0,80}(?:卵串|小卵).{0,80}(?:清洁|通水|防卫)/,
  );
  assert.match(editorialText, /(?:浮游幼体|副幼体|paralarva)/i);
  assert.match(
    editorialText,
    /21\.2\s*°?C.{0,80}47\s*(?:–|—|-)\s*54\s*日.{0,80}(?:着底|培养|实验)/i,
  );
  assert.match(
    editorialText,
    /(?:浮游|阶段|幼体|水柱).{0,50}数周至数月|数周至数月.{0,50}(?:浮游|阶段|幼体|水柱)/,
  );

  assert.equal(commonOctopus.featured, true);
  assert.equal(commonOctopus.publishedAt, '2026-08-28');
  assert.equal(commonOctopus.updatedAt, '2026-08-28');
});

test('registers the Atlantic blue sea slug as a complete Glaucus atlanticus profile', async () => {
  const blueSeaSlug = findSpecies('atlantic-blue-sea-slug');

  assert.equal(blueSeaSlug.id, 'species-glaucus-atlanticus');
  assert.equal(blueSeaSlug.names.zh, '大西洋海神海蛞蝓');
  assert.equal(blueSeaSlug.names.en, 'Atlantic Blue Sea Slug');
  assert.ok(blueSeaSlug.names.aliases.includes('Blue Sea Dragon'));
  assert.equal(blueSeaSlug.scientificName, 'Glaucus atlanticus');
  assert.deepEqual(
    getSpeciesTaxonomyPath(blueSeaSlug).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Mollusca', '软体动物门'],
      ['class', 'Gastropoda', '腹足纲'],
      ['order', 'Nudibranchia', '裸鳃目'],
      ['family', 'Glaucidae', '海神鳃科'],
      ['genus', 'Glaucus', '海神鳃属'],
    ],
  );

  assert.deepEqual(
    {
      code: blueSeaSlug.conservation.code,
      trend: blueSeaSlug.conservation.trend,
      assessedYear: blueSeaSlug.conservation.assessedYear,
      criteria: blueSeaSlug.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );
  assert.deepEqual(blueSeaSlug.distribution.realms, ['marine']);
  assert.ok(blueSeaSlug.distribution.regions.some((region) => /大西洋/.test(region)));
  assert.ok(blueSeaSlug.distribution.regions.some((region) => /印度洋/.test(region)));
  assert.ok(blueSeaSlug.distribution.regions.some((region) => /太平洋/.test(region)));
  assert.equal(blueSeaSlug.habitats.filter(({ isPrimary }) => isPrimary).length, 1);
  assert.ok(blueSeaSlug.habitats.every(({ realm }) => realm === 'marine'));
  assert.equal(blueSeaSlug.measurements.length?.max, 43);
  assert.equal(blueSeaSlug.measurements.length?.unit, 'mm');
  assert.match(blueSeaSlug.measurements.length?.note ?? '', /WoRMS.{0,40}6 cm/);
  assert.match(blueSeaSlug.measurements.length?.note ?? '', /15–35 mm/);
  assert.deepEqual(blueSeaSlug.diet.types, ['carnivore']);
  assert.deepEqual(blueSeaSlug.diet.foods, [
    '僧帽水母属 Physalia',
    '帆水母 Velella velella',
    '银币水母 Porpita porpita',
  ]);
  assert.equal(blueSeaSlug.storySections?.length, 6);
  assert.equal(new Set(blueSeaSlug.storySections?.map(({ key }) => key)).size, 6);
  assert.equal(blueSeaSlug.featuredStats.length, 4);
  assert.equal(new Set(blueSeaSlug.featuredStats.map(({ key }) => key)).size, 4);
  assert.ok(blueSeaSlug.keyFacts.length >= 9);
  assert.deepEqual(blueSeaSlug.threats, []);
  assert.deepEqual(blueSeaSlug.metrics, {});
  assert.ok(blueSeaSlug.conservationActions.length >= 5);

  assert.equal(blueSeaSlug.media.gallery?.length, 5);
  const mediaPaths = [
    blueSeaSlug.media.image,
    ...blueSeaSlug.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/atlantic-blue-sea-slug/01-ocean-surface-adult-portrait.webp',
    './images/species/atlantic-blue-sea-slug/02-upside-down-countershading.webp',
    './images/species/atlantic-blue-sea-slug/03-physalia-feeding.webp',
    './images/species/atlantic-blue-sea-slug/04-cerata-cnidosac-closeup.webp',
    './images/species/atlantic-blue-sea-slug/05-free-egg-strings.webp',
    './images/species/atlantic-blue-sea-slug/06-veliger-larva.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  const mediaRecords = [blueSeaSlug.media, ...blueSeaSlug.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    blueSeaSlug.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint, credit }) =>
        credit === 'Fauna Atlas · AI 生成原创图像' &&
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );

  const sourcePaths = [
    '01-ocean-surface-adult-portrait-source.png',
    '02-upside-down-countershading-source.png',
    '03-physalia-feeding-source.png',
    '04-cerata-cnidosac-closeup-source.png',
    '05-free-egg-strings-source.png',
    '06-veliger-larva-source.png',
  ];
  assert.deepEqual(
    sourcePaths.map((path) => path.replace(/-source\.png$/, '')),
    mediaPaths.map((path) =>
      path.slice(path.lastIndexOf('/') + 1).replace(/\.webp$/, ''),
    ),
  );
  const runtimeUrls = mediaPaths.map(
    (path) => new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
  );
  const sourceUrls = sourcePaths.map(
    (filename) =>
      new URL(
        `../src/assets/source/species/atlantic-blue-sea-slug/${filename}`,
        import.meta.url,
      ),
  );
  const imageFiles = [
    ...runtimeUrls.map((url) => ({ format: 'WEBP', url })),
    ...sourceUrls.map((url) => ({ format: 'PNG', url })),
  ];
  await Promise.all(imageFiles.map(({ url }) => access(url)));
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque] = metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
        },
      );
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );
  for (const urls of [runtimeUrls, sourceUrls]) {
    const hashes = await Promise.all(
      urls.map(async (url) =>
        createHash('sha256').update(await readFile(url)).digest('hex'),
      ),
    );
    assert.equal(new Set(hashes).size, 6);
  }

  assert.equal(blueSeaSlug.sources.length, 19);
  assert.equal(
    new Set(blueSeaSlug.sources.map(({ url }) => url)).size,
    blueSeaSlug.sources.length,
  );
  assert.ok(blueSeaSlug.sources.every(({ title }) => title.length > 0));
  assert.ok(blueSeaSlug.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(blueSeaSlug.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    blueSeaSlug.sources.every(({ accessedAt }) => accessedAt === '2026-08-29'),
  );
  assert.deepEqual(
    new Set(blueSeaSlug.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'distribution', 'ecology', 'conservation', 'general']),
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/aphia.php?p=taxdetails&id=140022',
    'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/140022',
    'https://doi.org/10.1071/IS13038',
    'https://doi.org/10.1007/s00227-014-2389-7',
    'https://doi.org/10.1007/s12526-021-01233-5',
    'https://doi.org/10.1002/ecy.70062',
  ]) {
    assert.ok(
      blueSeaSlug.sources.some(({ url }) => url === requiredUrl),
      `atlantic-blue-sea-slug sources should include ${requiredUrl}`,
    );
  }

  const editorialText = [
    blueSeaSlug.summary,
    blueSeaSlug.description,
    blueSeaSlug.distribution.range,
    ...blueSeaSlug.habitats.flatMap(({ name, description }) => [name, description]),
    blueSeaSlug.measurements.length?.note ?? '',
    blueSeaSlug.diet.description,
    ...blueSeaSlug.diet.foods,
    ...(blueSeaSlug.activity ?? []),
    ...blueSeaSlug.tags,
    ...(blueSeaSlug.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...blueSeaSlug.keyFacts,
    ...blueSeaSlug.threats,
    ...blueSeaSlug.conservationActions,
    ...blueSeaSlug.featuredStats.flatMap(({ label, value, note }) => [
      label,
      value,
      note ?? '',
    ]),
    ...mediaRecords.flatMap(({ alt, title, caption }) => [
      alt,
      title ?? '',
      caption ?? '',
    ]),
  ].join(' ');
  assert.match(editorialText, /(?:海气界面|海面漂浮|表层漂浮|neuston)/i);
  assert.match(editorialText, /(?:腹面|足面).{0,30}(?:朝上|向上|天空)/);
  assert.match(
    editorialText,
    /(?:银白.{0,10}(?:真)?背面.{0,20}(?:深水|向下)|(?:背面|背侧).{0,20}银白.{0,20}(?:深水|向下))/,
  );
  assert.match(editorialText, /(?:空气|气泡).{0,40}(?:胃腔|浮力)/);
  assert.match(editorialText, /每侧四组.{0,80}前三组.{0,80}第四组.{0,30}无柄/);
  assert.match(editorialText, /单列鳃突/);
  assert.match(editorialText, /(?:鳃突多列.{0,30}Glaucilla|Glaucilla.{0,50}近似种)/);
  assert.match(editorialText, /Physalia|僧帽水母/);
  assert.match(editorialText, /Velella|帆水母/);
  assert.match(editorialText, /Porpita|银币水母/);
  assert.match(editorialText, /(?:刺丝囊|kleptocn)/i);
  assert.match(editorialText, /(?:同时雌雄同体|雌雄同体)/);
  assert.match(editorialText, /(?:面盘幼体|veliger)/i);
  assert.match(editorialText, /19\s*°?C.{0,80}(?:2\.5|3\s*天|72\s*小时)/i);
  assert.match(editorialText, /IUCN.{0,50}(?:NE|未评估)/i);
  assert.match(editorialText, /(?:数量|种群).{0,50}(?:未知|缺乏|没有可靠)/);

  assert.equal(blueSeaSlug.featured, true);
  assert.equal(blueSeaSlug.publishedAt, '2026-08-29');
  assert.equal(blueSeaSlug.updatedAt, '2026-08-29');
});

test('registers the giant clam as a complete Tridacna gigas profile', async () => {
  const giantClam = findSpecies('giant-clam');

  assert.equal(giantClam.id, 'species-tridacna-gigas');
  assert.equal(giantClam.names.zh, '巨砗磲');
  assert.equal(giantClam.names.en, 'Giant Clam');
  assert.ok(giantClam.names.aliases.includes('大砗磲'));
  assert.ok(giantClam.names.aliases.includes('True Giant Clam'));
  assert.equal(giantClam.scientificName, 'Tridacna gigas');
  assert.deepEqual(
    getSpeciesTaxonomyPath(giantClam).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Mollusca', '软体动物门'],
      ['class', 'Bivalvia', '双壳纲'],
      ['order', 'Cardiida', '鸟蛤目'],
      ['family', 'Cardiidae', '鸟蛤科'],
      ['genus', 'Tridacna', '砗磲属'],
    ],
  );

  assert.deepEqual(
    {
      code: giantClam.conservation.code,
      trend: giantClam.conservation.trend,
      assessedYear: giantClam.conservation.assessedYear,
      criteria: giantClam.conservation.criteria,
    },
    {
      code: 'CR',
      trend: 'decreasing',
      assessedYear: 2024,
      criteria: 'A2acd',
    },
  );
  assert.deepEqual(giantClam.distribution.realms, ['marine']);
  assert.deepEqual(giantClam.distribution.continents, ['亚洲', '大洋洲']);
  assert.equal(giantClam.habitats.filter(({ isPrimary }) => isPrimary).length, 1);
  assert.ok(giantClam.habitats.every(({ realm }) => realm === 'marine'));
  assert.match(
    giantClam.habitats.map(({ description }) => description).join(' '),
    /2\s*(?:–|—|-|至)\s*20\s*(?:m|米)/i,
  );
  assert.deepEqual(
    {
      max: giantClam.measurements.length?.max,
      unit: giantClam.measurements.length?.unit,
    },
    { max: 137, unit: 'cm' },
  );
  assert.match(giantClam.measurements.length?.note ?? '', /壳长/);
  assert.deepEqual(giantClam.diet.types, ['filter-feeder']);
  assert.deepEqual(giantClam.diet.foods, [
    '浮游植物与其他微型浮游生物',
    '水体中的悬浮有机颗粒',
  ]);
  assert.deepEqual(giantClam.metrics, {});
  assert.equal(giantClam.storySections?.length, 6);
  assert.equal(new Set(giantClam.storySections?.map(({ key }) => key)).size, 6);
  assert.equal(giantClam.featuredStats.length, 4);
  assert.equal(new Set(giantClam.featuredStats.map(({ key }) => key)).size, 4);
  assert.ok(giantClam.keyFacts.length >= 10);
  assert.ok(giantClam.threats.length >= 5);
  assert.ok(giantClam.conservationActions.length >= 7);

  assert.equal(giantClam.media.gallery?.length, 5);
  const mediaPaths = [
    giantClam.media.image,
    ...giantClam.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/giant-clam/01-shallow-reef-adult-portrait.webp',
    './images/species/giant-clam/02-heavy-shell-rib-profile.webp',
    './images/species/giant-clam/03-mantle-and-siphonal-openings-macro.webp',
    './images/species/giant-clam/04-sunlit-open-mantle.webp',
    './images/species/giant-clam/05-broadcast-spawning-plume.webp',
    './images/species/giant-clam/06-juvenile-byssal-attachment.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  const mediaRecords = [giantClam.media, ...giantClam.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    giantClam.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint, credit }) =>
        credit === 'Fauna Atlas · AI 生成原创图像' &&
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );

  const sourcePaths = [
    '01-shallow-reef-adult-portrait-source.png',
    '02-heavy-shell-rib-profile-source.png',
    '03-mantle-and-siphonal-openings-macro-source.png',
    '04-sunlit-open-mantle-source.png',
    '05-broadcast-spawning-plume-source.png',
    '06-juvenile-byssal-attachment-source.png',
  ];
  assert.deepEqual(
    sourcePaths.map((path) => path.replace(/-source\.png$/, '')),
    mediaPaths.map((path) =>
      path.slice(path.lastIndexOf('/') + 1).replace(/\.webp$/, ''),
    ),
  );
  const runtimeUrls = mediaPaths.map(
    (path) => new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
  );
  const sourceUrls = sourcePaths.map(
    (filename) =>
      new URL(
        `../src/assets/source/species/giant-clam/${filename}`,
        import.meta.url,
      ),
  );
  const imageFiles = [
    ...runtimeUrls.map((url) => ({ format: 'WEBP', url })),
    ...sourceUrls.map((url) => ({ format: 'PNG', url })),
  ];
  await Promise.all(imageFiles.map(({ url }) => access(url)));
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque] = metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
        },
      );
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );
  for (const urls of [runtimeUrls, sourceUrls]) {
    const hashes = await Promise.all(
      urls.map(async (url) =>
        createHash('sha256').update(await readFile(url)).digest('hex'),
      ),
    );
    assert.equal(new Set(hashes).size, 6);
  }

  assert.equal(giantClam.sources.length, 28);
  assert.equal(
    new Set(giantClam.sources.map(({ url }) => url)).size,
    giantClam.sources.length,
  );
  assert.ok(giantClam.sources.every(({ title }) => title.length > 0));
  assert.ok(giantClam.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(giantClam.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    giantClam.sources.every(({ accessedAt }) => accessedAt === '2026-08-29'),
  );
  assert.deepEqual(
    new Set(giantClam.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'distribution', 'ecology', 'conservation', 'general']),
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/aphia.php?p=taxdetails&id=207670',
    'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/207670',
    'https://doi.org/10.2305/IUCN.UK.2024-2.RLTS.T22137A119167161.en',
    'https://cites.org/eng/app/appendices.php',
    'https://www.fisheries.noaa.gov/species/true-giant-clam',
    'https://doi.org/10.1016/0022-0981(92)90030-E',
    'https://doi.org/10.2307/1542028',
    'https://doi.org/10.1016/0044-8486(86)90094-3',
    'https://doi.org/10.1016/0044-8486(86)90051-7',
    'https://doi.org/10.1016/S0031-0182(04)00358-X',
  ]) {
    assert.ok(
      giantClam.sources.some(({ url }) => url === requiredUrl),
      `giant-clam sources should include ${requiredUrl}`,
    );
  }

  const editorialText = [
    giantClam.summary,
    giantClam.description,
    giantClam.distribution.range,
    ...giantClam.habitats.flatMap(({ name, description }) => [name, description]),
    giantClam.measurements.length?.note ?? '',
    giantClam.diet.description,
    ...giantClam.diet.foods,
    ...(giantClam.activity ?? []),
    ...giantClam.tags,
    ...(giantClam.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...giantClam.keyFacts,
    ...giantClam.threats,
    ...giantClam.conservationActions,
    ...giantClam.featuredStats.flatMap(({ label, value, note }) => [
      label,
      value,
      note ?? '',
    ]),
    ...mediaRecords.flatMap(({ alt, title, caption }) => [
      alt,
      title ?? '',
      caption ?? '',
    ]),
  ].join(' ');
  assert.match(
    editorialText,
    /4\s*(?:–|—|-|至)\s*6\s*(?:条|道).{0,80}(?:无|没有|不具|缺少).{0,30}叶片状鳞片/,
  );
  assert.match(
    editorialText,
    /(?:滤食|鳃滤食).{0,100}(?:光合|共生甲藻).{0,80}(?:两条|共同|互补|双重)/,
  );
  assert.match(editorialText, /(?:细胞外.{0,30}分支管道|分支管道.{0,30}细胞外)/);
  assert.match(
    editorialText,
    /其他砗磲物种.{0,80}虹彩细胞.{0,100}巨砗磲本种.{0,30}(?:缺少|没有).{0,20}直接实验/,
  );
  assert.match(editorialText, /(?:闭壳|收拢双壳).{0,80}防御/);
  assert.match(
    editorialText,
    /(?:食人贝|夹食|夹捕|捕食).{0,100}(?:没有可靠|没有证据|无可靠|不支持|并非|不是)|(?:没有可靠|没有证据|无可靠|不支持|并非|不是).{0,100}(?:食人贝|夹食|夹捕|捕食)/,
  );
  assert.match(editorialText, /先雄后雌/);
  assert.match(editorialText, /先排精.{0,30}(?:再|后)排卵/);
  assert.match(
    editorialText,
    /(?:约\s*)?5\s*亿.{0,150}(?:不等于|不能保证|并不意味着|不能抵消).{0,80}(?:快速恢复|高招募|补充成功|恢复成功|高受精率|幼体存活率|自然招募率|早期死亡|低密度受精失败)/,
  );
  assert.match(
    editorialText,
    /幼体.{0,100}(?:环境|海水).{0,30}(?:获得|摄取).{0,30}(?:共生甲?藻|藻株)/,
  );
  assert.match(
    editorialText,
    /(?:IUCN.{0,50})?(?:估计.{0,50})?(?:三个世代.{0,30})?(?:约\s*)?100\s*年.{0,80}84\s*%|84\s*%.{0,80}(?:三个世代|(?:约\s*)?100\s*年).{0,50}估计/,
  );
  assert.match(editorialText, /(?:不是|并非).{0,30}全球.{0,20}(?:逐只)?普查/);
  assert.match(
    editorialText,
    /CITES.{0,60}(?:附录\s*II|Appendix\s*II).{0,100}(?:不等于|不是|并非).{0,40}(?:全面禁贸|禁绝|禁止一切贸易)/i,
  );
  assert.match(
    editorialText,
    /60\s*(?:–|—|-|至)\s*76\s*年.{0,80}最大寿命.{0,30}(?:未知|未定|尚未确定)/,
  );

  const spawningCaption = giantClam.media.gallery[3].caption ?? '';
  assert.match(
    spawningCaption,
    /(?:不|不能|无法)(?:判定|判断|区分).{0,30}(?:精子|卵|配子类型)|(?:精子|卵).{0,40}(?:不|不能|无法)(?:判定|判断|区分)/,
  );
  assert.match(spawningCaption, /不能.{0,30}释放顺序、数量/);
  const juvenileCaption = giantClam.media.gallery[4].caption ?? '';
  assert.match(
    juvenileCaption,
    /(?:不(?:提供|记录|支持|确定|推断).{0,30}(?:尺寸|年龄)|(?:尺寸|年龄).{0,30}(?:未知|不明|不确定|不(?:提供|记录|确定|推断)))/,
  );
  assert.match(
    juvenileCaption,
    /足丝.{0,30}(?:底物|礁面).{0,30}(?:接触|连接).{0,30}附着/,
  );
  assert.match(juvenileCaption, /(?:不表示|并非|不是).{0,30}永久锚定/);
  assert.doesNotMatch(
    juvenileCaption,
    /\d+(?:\.\d+)?\s*(?:mm|cm|毫米|厘米|日龄|天龄|岁)/i,
  );

  assert.equal(giantClam.featured, true);
  assert.equal(giantClam.publishedAt, '2026-08-29');
  assert.equal(giantClam.updatedAt, '2026-08-29');
});

test('registers the Portuguese Man-of-War as a complete Physalia physalis profile', async () => {
  const manOfWar = findSpecies('portuguese-man-of-war');

  assert.equal(manOfWar.id, 'species-physalia-physalis');
  assert.equal(manOfWar.slug, 'portuguese-man-of-war');
  assert.equal(manOfWar.names.zh, '僧帽水母');
  assert.equal(manOfWar.names.en, 'Portuguese Man-of-War');
  assert.deepEqual(manOfWar.names.aliases, [
    '葡萄牙战舰',
    'Atlantic Portuguese Man-of-War',
    "Portuguese Man o' War",
  ]);
  assert.ok(
    manOfWar.names.aliases.every((alias) => alias.trim().toLowerCase() !== 'bluebottle'),
    'the ambiguous bare name Bluebottle must not be an alias for this Atlantic species',
  );
  assert.equal(manOfWar.scientificName, 'Physalia physalis');
  assert.deepEqual(
    getSpeciesTaxonomyPath(manOfWar).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Cnidaria', '刺胞动物门'],
      ['class', 'Hydrozoa', '水螅纲'],
      ['order', 'Siphonophorae', '管水母目'],
      ['family', 'Physaliidae', '僧帽水母科'],
      ['genus', 'Physalia', '僧帽水母属'],
    ],
  );

  assert.equal(manOfWar.conservation.code, 'NE');
  assert.equal(manOfWar.conservation.trend, 'unknown');
  assert.equal(Object.hasOwn(manOfWar.conservation, 'assessedYear'), false);
  assert.equal(Object.hasOwn(manOfWar.conservation, 'criteria'), false);
  assert.deepEqual(manOfWar.distribution.realms, ['marine']);
  assert.deepEqual(manOfWar.distribution.continents, [
    '北美洲',
    '南美洲',
    '欧洲',
    '非洲',
  ]);
  assert.match(manOfWar.distribution.range, /主要分布于北大西洋和西南大西洋/);
  assert.match(
    manOfWar.distribution.range,
    /(?:2025年前|旧).{0,40}全球.{0,30}(?:混入|包括).{0,30}其他Physalia物种/,
  );
  assert.match(
    `${manOfWar.distribution.range} ${manOfWar.distribution.regions.join(' ')}`,
    /西南大西洋.{0,50}(?:多种|物种).{0,20}重叠/,
  );
  assert.match(manOfWar.distribution.range, /历史记录.{0,50}(?:重鉴|复核)/);
  assert.ok(
    manOfWar.distribution.countries.every(
      (country) => !/(?:澳大利亚|新西兰|日本|台湾)/.test(country),
    ),
    'old Indo-Pacific Bluebottle records must not widen the structured range',
  );
  assert.equal(manOfWar.habitats.filter(({ isPrimary }) => isPrimary).length, 1);
  assert.ok(manOfWar.habitats.every(({ realm }) => realm === 'marine'));
  assert.match(
    manOfWar.habitats.map(({ name, description }) => `${name} ${description}`).join(' '),
    /海气界面|pleuston/i,
  );
  assert.deepEqual(manOfWar.measurements, {});
  assert.deepEqual(manOfWar.metrics, {});

  assert.deepEqual(manOfWar.diet.types, ['carnivore', 'piscivore']);
  assert.deepEqual(manOfWar.diet.foods, [
    '鱼苗和小型鱼类',
    '头足类',
    '毛颚动物',
    '鳗形叶状幼体',
  ]);
  assert.match(
    manOfWar.diet.description,
    /无口的tentacular palpon.{0,80}(?:截获|捕获).{0,80}有口.{0,40}gastrozooid.{0,80}(?:消化|摄食)/i,
  );
  assert.match(manOfWar.diet.description, /共享胃循环腔/);
  assert.match(
    manOfWar.diet.description,
    /旧种界.{0,40}历史样本.{0,60}(?:不能|不可|不应).{0,50}(?:百分比|全物种固定食谱)/,
  );

  assert.equal(manOfWar.storySections?.length, 6);
  assert.equal(new Set(manOfWar.storySections?.map(({ key }) => key)).size, 6);
  assert.equal(manOfWar.featuredStats.length, 4);
  assert.equal(new Set(manOfWar.featuredStats.map(({ key }) => key)).size, 4);
  assert.ok(manOfWar.keyFacts.length >= 20);
  assert.ok(manOfWar.threats.length >= 4);
  assert.ok(manOfWar.conservationActions.length >= 6);

  assert.equal(manOfWar.media.gallery?.length, 5);
  const mediaPaths = [
    manOfWar.media.image,
    ...manOfWar.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/portuguese-man-of-war/01-atlantic-surface-colony-portrait.webp',
    './images/species/portuguese-man-of-war/02-specialized-zooids-under-float.webp',
    './images/species/portuguese-man-of-war/03-raised-crest-wind-drift.webp',
    './images/species/portuguese-man-of-war/04-unequal-tentacles-prey-contact.webp',
    './images/species/portuguese-man-of-war/05-attached-developing-gonodendron.webp',
    './images/species/portuguese-man-of-war/06-stranded-colony-no-contact.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  const mediaRecords = [manOfWar.media, ...manOfWar.media.gallery];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    manOfWar.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint, credit }) =>
        credit === 'Fauna Atlas · AI 生成科学情景重建' &&
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );

  const sourcePaths = [
    '01-atlantic-surface-colony-portrait-source.png',
    '02-specialized-zooids-under-float-source.png',
    '03-raised-crest-wind-drift-source.png',
    '04-unequal-tentacles-prey-contact-source.png',
    '05-attached-developing-gonodendron-source.png',
    '06-stranded-colony-no-contact-source.png',
  ];
  assert.deepEqual(
    sourcePaths.map((path) => path.replace(/-source\.png$/, '')),
    mediaPaths.map((path) =>
      path.slice(path.lastIndexOf('/') + 1).replace(/\.webp$/, ''),
    ),
  );
  const runtimeUrls = mediaPaths.map(
    (path) => new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
  );
  const sourceUrls = sourcePaths.map(
    (filename) =>
      new URL(
        `../src/assets/source/species/portuguese-man-of-war/${filename}`,
        import.meta.url,
      ),
  );
  const imageFiles = [
    ...runtimeUrls.map((url) => ({ format: 'WEBP', url })),
    ...sourceUrls.map((url) => ({ format: 'PNG', url })),
  ];
  await Promise.all(imageFiles.map(({ url }) => access(url)));
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%n',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, frameCount] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque, frameCount },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
          frameCount: '1',
        },
      );
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );
  const imageHashes = await Promise.all(
    imageFiles.map(async ({ url }) =>
      createHash('sha256').update(await readFile(url)).digest('hex'),
    ),
  );
  assert.equal(new Set(imageHashes).size, 12);

  assert.equal(manOfWar.sources.length, 32);
  assert.equal(
    new Set(manOfWar.sources.map(({ url }) => url)).size,
    manOfWar.sources.length,
  );
  assert.ok(manOfWar.sources.every(({ title }) => title.length > 0));
  assert.ok(manOfWar.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(manOfWar.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    manOfWar.sources.every(({ accessedAt }) => accessedAt === '2026-08-29'),
  );
  assert.deepEqual(
    new Set(manOfWar.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'distribution', 'ecology', 'conservation', 'general']),
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/aphia.php?p=taxdetails&id=135479',
    'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/135479',
    'https://pmc.ncbi.nlm.nih.gov/articles/PMC12224019/',
    'https://pmc.ncbi.nlm.nih.gov/articles/PMC6820529/',
    'https://www.iucnredlist.org/search?query=Physalia%20physalis&searchType=species',
    'https://cites.org/eng/app/appendices.php',
    'https://checklist.cites.org/',
  ]) {
    assert.ok(
      manOfWar.sources.some(({ url }) => url === requiredUrl),
      `portuguese-man-of-war sources should include ${requiredUrl}`,
    );
  }

  const editorialText = [
    manOfWar.summary,
    manOfWar.description,
    manOfWar.distribution.range,
    ...manOfWar.distribution.regions,
    ...manOfWar.habitats.flatMap(({ name, description }) => [name, description]),
    manOfWar.diet.description,
    ...manOfWar.diet.foods,
    ...(manOfWar.activity ?? []),
    ...manOfWar.tags,
    ...(manOfWar.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...manOfWar.keyFacts,
    ...manOfWar.threats,
    ...manOfWar.conservationActions,
    ...manOfWar.featuredStats.flatMap(({ label, value, note }) => [
      label,
      value,
      note ?? '',
    ]),
    ...mediaRecords.flatMap(({ alt, title, caption }) => [
      alt,
      title ?? '',
      caption ?? '',
    ]),
  ].join(' ');
  assert.match(
    editorialText,
    /(?:一个|同一)胚胎.{0,40}(?:出芽|开始).{0,80}(?:遗传同源|克隆).{0,20}zooid/i,
  );
  assert.match(
    editorialText,
    /不是.{0,40}单体水母.{0,50}不是.{0,40}(?:多个物种|多物种).{0,20}(?:临时)?共生/,
  );
  assert.match(
    editorialText,
    /无口的tentacular palpon.{0,100}(?:捕食|截获).{0,100}有口.{0,50}gastrozooid.{0,80}(?:摄食|消化)/i,
  );
  assert.match(editorialText, /gonodendron.{0,50}(?:繁殖|生殖)zooid/i);
  assert.match(editorialText, /共享.{0,20}(?:胃循环腔|胃循环系统|胃腔)/);
  assert.match(
    editorialText,
    /浮囊.{0,40}空气.{0,30}(?:比例会变化|比例可变|可变比例).{0,20}一氧化碳/,
  );
  assert.match(
    editorialText,
    /风.{0,30}表层流.{0,50}(?:左右镜像型|帆形).{0,50}(?:触手阻力|触手水阻)/,
  );
  assert.match(editorialText, /没有舵.{0,30}(?:不会|不能).{0,20}选择目的地/);
  assert.match(editorialText, /左右型.{0,20}不由半球或性别决定/);
  assert.match(editorialText, /2025年.{0,60}151份.{0,30}(?:基因组|样本)/);
  assert.match(editorialText, /4,?047张.{0,30}(?:可用观察)?照片/);
  assert.match(editorialText, /五个.{0,20}谱系.{0,30}至少四个物种/);
  assert.match(editorialText, /2026年.{0,60}(?:五种|第五个名称|第五谱系)/);
  assert.match(
    editorialText,
    /群体.{0,30}(?:雌雄异体|要么是雄性.{0,20}要么是雌性|雄性或雌性)/,
  );
  assert.match(
    editorialText,
    /(?:卵、planula、成熟gonodendron脱落|成熟gonodendron.{0,30}脱落).{0,80}(?:仍未|尚未|未被).{0,20}(?:连续)?直接观察/i,
  );
  assert.match(editorialText, /(?:没有证据支持|不能|不应|不是).{0,20}底栖水螅阶段/);
  assert.match(
    editorialText,
    /搁浅、断裂或看似干燥.{0,30}(?:仍|也).{0,20}(?:蜇伤|放电)/,
  );
  assert.match(
    editorialText,
    /遵循.{0,20}(?:事发地|当地).{0,30}(?:卫生、救生或毒物中心|急救)协议/,
  );
  assert.match(editorialText, /没有.{0,20}全球.{0,30}统一醋规则/);
  assert.match(
    editorialText,
    /IUCN.{0,30}(?:尚未|未).{0,10}评估.{0,30}NE.{0,20}(?:未知|未评估).{0,20}(?:而非|不等于|不是)无危/,
  );

  const zooidCaption = manOfWar.media.gallery[0].caption ?? '';
  assert.match(zooidCaption, /AI生成科学情景重建/);
  assert.match(zooidCaption, /不能鉴定个体、计数zooid、测量结构/);
  assert.match(zooidCaption, /不能.{0,20}证明.{0,20}分工行为/);
  const driftCaption = manOfWar.media.gallery[1].caption ?? '';
  assert.match(driftCaption, /AI生成科学情景重建/);
  assert.match(
    driftCaption,
    /不能(?:判定左右型、)?鉴定(?:海上个体|物种)、测量偏角或速度/,
  );
  assert.match(driftCaption, /不证明.{0,30}轨迹.{0,20}直接观察/);
  const preyCaption = manOfWar.media.gallery[2].caption ?? '';
  assert.match(preyCaption, /AI生成科学情景重建/);
  assert.match(preyCaption, /不能鉴定群体、测量触手或毒液/);
  assert.match(
    preyCaption,
    /不证明.{0,20}捕获瞬间、猎物种类或收缩路径.{0,20}直接记录/,
  );
  const gonodendronCaption = manOfWar.media.gallery[3].caption ?? '';
  assert.match(gonodendronCaption, /AI科学情景重建/);
  assert.match(gonodendronCaption, /仍附着、尚在发育/);
  assert.match(
    gonodendronCaption,
    /不证明.{0,30}成熟脱落、配子释放、受精或后续行为/,
  );
  const strandingCaption = manOfWar.media.gallery[4].caption ?? '';
  assert.match(strandingCaption, /AI生成科学情景重建/);
  assert.match(
    strandingCaption,
    /不证明.{0,30}死亡、残体的实际毒力或毒力维持时长/,
  );
  assert.match(strandingCaption, /任何部分都不要触摸/);

  assert.equal(manOfWar.featured, true);
  assert.equal(manOfWar.publishedAt, '2026-08-29');
  assert.equal(manOfWar.updatedAt, '2026-08-29');
});

test('registers the Crown-of-thorns Starfish as a complete Acanthaster planci profile', async () => {
  const crownOfThorns = findSpecies('crown-of-thorns-starfish');

  assert.equal(crownOfThorns.id, 'species-acanthaster-planci');
  assert.equal(crownOfThorns.slug, 'crown-of-thorns-starfish');
  assert.equal(crownOfThorns.names.zh, '棘冠海星');
  assert.equal(crownOfThorns.names.en, 'Crown-of-thorns Starfish');
  assert.equal(crownOfThorns.scientificName, 'Acanthaster planci');
  assert.deepEqual(
    getSpeciesTaxonomyPath(crownOfThorns).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Echinodermata'],
      ['class', 'Asteroidea'],
      ['order', 'Valvatida'],
      ['family', 'Acanthasteridae'],
      ['genus', 'Acanthaster'],
    ],
  );

  assert.equal(crownOfThorns.conservation.code, 'NE');
  assert.equal(crownOfThorns.conservation.trend, 'unknown');
  assert.equal(Object.hasOwn(crownOfThorns.conservation, 'assessedYear'), false);
  assert.equal(Object.hasOwn(crownOfThorns.conservation, 'criteria'), false);
  assert.deepEqual(crownOfThorns.distribution.realms, ['marine']);
  assert.match(crownOfThorns.distribution.range, /北印度洋/);
  assert.ok(crownOfThorns.distribution.countries.length > 0);
  assert.ok(
    crownOfThorns.distribution.countries.every(
      (country) =>
        !/(?:澳大利亚|大堡礁|太平洋|日本|菲律宾|巴布亚新几内亚|斐济|新喀里多尼亚|瓦努阿图|萨摩亚|汤加|帕劳|马绍尔群岛|密克罗尼西亚|夏威夷|美国|墨西哥|巴拿马|厄瓜多尔|红海|埃及|沙特阿拉伯|以色列|约旦|苏丹|厄立特里亚|也门|吉布提|南印度洋|南非|莫桑比克|马达加斯加|毛里求斯|留尼汪|塞舌尔|坦桑尼亚|肯尼亚)/.test(
          country,
        ),
    ),
    'the structured country list must stay within the conservative northern Indian Ocean range',
  );
  assert.ok(crownOfThorns.habitats.every(({ realm }) => realm === 'marine'));

  assert.equal(crownOfThorns.storySections?.length, 6);
  assert.equal(new Set(crownOfThorns.storySections?.map(({ key }) => key)).size, 6);
  assert.equal(crownOfThorns.featuredStats.length, 4);
  assert.equal(new Set(crownOfThorns.featuredStats.map(({ key }) => key)).size, 4);
  assert.ok(crownOfThorns.keyFacts.length >= 20);
  assert.ok(crownOfThorns.threats.length >= 5);
  assert.ok(crownOfThorns.conservationActions.length >= 7);

  assert.equal(crownOfThorns.media.gallery?.length, 5);
  const mediaPaths = [
    crownOfThorns.media.image,
    ...crownOfThorns.media.gallery.map(({ image }) => image),
  ];
  assert.deepEqual(mediaPaths, [
    './images/species/crown-of-thorns-starfish/01-coral-reef-adult-portrait.webp',
    './images/species/crown-of-thorns-starfish/02-dorsal-disc-arms-and-spines.webp',
    './images/species/crown-of-thorns-starfish/03-everted-stomach-coral-feeding.webp',
    './images/species/crown-of-thorns-starfish/04-reef-high-density-mosaic.webp',
    './images/species/crown-of-thorns-starfish/05-broadcast-spawning-plume.webp',
    './images/species/crown-of-thorns-starfish/06-five-arm-juvenile-coralline-algae.webp',
  ]);
  assert.equal(new Set(mediaPaths).size, 6);
  const mediaRecords = [
    crownOfThorns.media,
    ...crownOfThorns.media.gallery,
  ];
  assert.ok(mediaRecords.every(({ alt }) => alt.length > 0));
  assert.ok(
    crownOfThorns.media.gallery.every(
      ({ title, caption }) => title.length > 0 && (caption?.length ?? 0) > 0,
    ),
  );
  assert.ok(
    mediaRecords.every(
      ({ focalPoint, credit }) =>
        credit === 'Fauna Atlas · AI 生成科学情景重建' &&
        focalPoint &&
        focalPoint.x >= 0 &&
        focalPoint.x <= 1 &&
        focalPoint.y >= 0 &&
        focalPoint.y <= 1,
    ),
  );

  const sourcePaths = [
    '01-coral-reef-adult-portrait-source.png',
    '02-dorsal-disc-arms-and-spines-source.png',
    '03-everted-stomach-coral-feeding-source.png',
    '04-reef-high-density-mosaic-source.png',
    '05-broadcast-spawning-plume-source.png',
    '06-five-arm-juvenile-coralline-algae-source.png',
  ];
  assert.deepEqual(
    sourcePaths.map((path) => path.replace(/-source\.png$/, '')),
    mediaPaths.map((path) =>
      path.slice(path.lastIndexOf('/') + 1).replace(/\.webp$/, ''),
    ),
  );
  const runtimeUrls = mediaPaths.map(
    (path) => new URL(`../public/${path.replace(/^\.\//, '')}`, import.meta.url),
  );
  const sourceUrls = sourcePaths.map(
    (filename) =>
      new URL(
        `../src/assets/source/species/crown-of-thorns-starfish/${filename}`,
        import.meta.url,
      ),
  );
  const imageFiles = [
    ...runtimeUrls.map((url) => ({ format: 'WEBP', url })),
    ...sourceUrls.map((url) => ({ format: 'PNG', url })),
  ];
  await Promise.all(imageFiles.map(({ url }) => access(url)));
  await Promise.all(
    imageFiles.map(async ({ format, url }) => {
      const imagePath = fileURLToPath(url);
      const { stdout: metadata } = await execFileAsync('magick', [
        'identify',
        '-quiet',
        '-format',
        '%m|%w|%h|%[colorspace]|%[opaque]|%n',
        imagePath,
      ]);
      const [actualFormat, width, height, colorspace, opaque, frameCount] =
        metadata.split('|');
      assert.deepEqual(
        { actualFormat, width, height, colorspace, opaque, frameCount },
        {
          actualFormat: format,
          width: '1536',
          height: '1024',
          colorspace: 'sRGB',
          opaque: 'True',
          frameCount: '1',
        },
      );
      await execFileAsync('magick', [imagePath, 'null:']);
    }),
  );
  const imageHashes = await Promise.all(
    imageFiles.map(async ({ url }) =>
      createHash('sha256').update(await readFile(url)).digest('hex'),
    ),
  );
  assert.equal(new Set(imageHashes).size, 12);

  assert.equal(
    new Set(crownOfThorns.sources.map(({ url }) => url)).size,
    crownOfThorns.sources.length,
  );
  assert.ok(crownOfThorns.sources.every(({ title }) => title.length > 0));
  assert.ok(crownOfThorns.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(crownOfThorns.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    crownOfThorns.sources.every(({ accessedAt }) => accessedAt === '2026-08-29'),
  );
  assert.deepEqual(
    new Set(crownOfThorns.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'distribution', 'ecology', 'conservation', 'general']),
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/aphia.php?p=taxdetails&id=213289',
    'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/213289',
    'https://www.aims.gov.au/research-topics/marine-life/crown-thorns-starfish',
    'https://pmc.ncbi.nlm.nih.gov/articles/PMC3424128/',
    'https://pmc.ncbi.nlm.nih.gov/articles/PMC9023020/',
    'https://doi.org/10.1201/b17143-4',
    'https://doi.org/10.1007/s00338-025-02637-6',
    'https://www.iucnredlist.org/search?query=Acanthaster%20planci&searchType=species',
    'https://cites.org/eng/app/appendices.php',
  ]) {
    assert.ok(
      crownOfThorns.sources.some(({ url }) => url === requiredUrl),
      `crown-of-thorns-starfish sources should include ${requiredUrl}`,
    );
  }

  const editorialText = [
    crownOfThorns.summary,
    crownOfThorns.description,
    crownOfThorns.distribution.range,
    ...crownOfThorns.distribution.regions,
    ...crownOfThorns.habitats.flatMap(({ name, description }) => [
      name,
      description,
    ]),
    crownOfThorns.diet.description,
    ...crownOfThorns.diet.foods,
    ...(crownOfThorns.activity ?? []),
    ...crownOfThorns.tags,
    ...(crownOfThorns.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...crownOfThorns.keyFacts,
    ...crownOfThorns.threats,
    ...crownOfThorns.conservationActions,
    ...crownOfThorns.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    ...mediaRecords.flatMap(({ alt, title, caption }) => [
      alt,
      title ?? '',
      caption ?? '',
    ]),
  ].join(' ');

  assert.match(
    editorialText,
    /(?:WoRMS.{0,100}(?:接受|有效).{0,120}(?:四|4).{0,20}(?:谱系|物种)|(?:四|4).{0,20}(?:谱系|物种).{0,120}WoRMS.{0,100}(?:接受|有效))/i,
  );
  assert.match(editorialText, /(?:种界|分类).{0,50}(?:冲突|不一致|尚未统一|未协调|口径并存)/);
  assert.match(
    editorialText,
    /(?:AIMS|澳大利亚海洋科学研究所|大堡礁|GBR|太平洋).{0,180}(?:Acanthaster\s+spp\.?|Acanthaster属|A\.?\s*cf\.?\s*solaris)/i,
  );
  assert.match(
    editorialText,
    /(?:(?:太平洋|大堡礁|GBR).{0,160}(?:而非|不是|不作|不能|不可|不应).{0,80}(?:本种|严格种级|狭义|Acanthaster\s+planci)|(?:本种|严格种级|狭义|Acanthaster\s+planci).{0,80}(?:而非|不是|不作|不能|不可|不应).{0,160}(?:太平洋|大堡礁|GBR))/i,
  );
  assert.match(
    editorialText,
    /(?:自然|原生|本土).{0,40}(?:珊瑚捕食者|捕食珊瑚)|(?:珊瑚捕食者|捕食珊瑚).{0,40}(?:自然|原生|本土)/,
  );
  assert.match(
    editorialText,
    /(?:低密度|正常密度|常态密度|背景密度|非暴发).{0,100}(?:生态|自然|更新|多样性|不等于|不同)/,
  );
  assert.match(
    editorialText,
    /(?:暴发|爆发|高密度).{0,100}(?:活珊瑚|造礁珊瑚|珊瑚覆盖).{0,70}(?:损失|下降|死亡|破坏)/,
  );
  assert.match(
    editorialText,
    /(?:(?:胃|胃囊).{0,30}(?:外翻|翻出|伸出).{0,100}(?:活珊瑚|珊瑚组织|珊瑚)|(?:外翻|翻出|伸出).{0,30}(?:胃|胃囊).{0,100}(?:活珊瑚|珊瑚组织|珊瑚))/,
  );
  assert.match(
    editorialText,
    /(?:(?:取食|进食).{0,20}(?:白斑|疤痕|痕迹).{0,60}(?:不同于|有别于|不是|并非|不能混同|不能等同).{0,40}白化|白化.{0,60}(?:不同于|有别于|不是|并非|不能混同|不能等同).{0,40}(?:取食|进食).{0,20}(?:白斑|疤痕|痕迹))/,
  );
  assert.match(
    editorialText,
    /(?:(?:暴发|爆发).{0,100}(?:多因素|多个因素|共同作用|因素叠加|没有单一|尚无单一|不能归因于单一|竞争假说)|(?:多因素|多个因素|共同作用|因素叠加|没有单一|尚无单一|不能归因于单一|竞争假说).{0,100}(?:暴发|爆发))/,
  );
  const outbreakHypothesisPatterns = [
    /(?:营养盐|富营养化|陆源径流|水质)/,
    /(?:捕食者|捕食压力|捕食释放)/,
    /(?:幼体存活|幼体补充|招募)/,
    /(?:洋流|海流|输送|连通性)/,
    /(?:气候|海温|温度|降雨|风暴)/,
  ];
  assert.ok(
    outbreakHypothesisPatterns.filter((pattern) => pattern.test(editorialText))
      .length >= 3,
    'the profile should retain at least three competing or interacting outbreak mechanisms',
  );
  assert.match(
    editorialText,
    /(?:五臂|5臂|五条臂).{0,80}(?:幼体|幼年|稚体)|(?:幼体|幼年|稚体).{0,80}(?:五臂|5臂|五条臂)/,
  );
  assert.match(
    editorialText,
    /(?:幼体|幼年|稚体).{0,100}(?:壳状珊瑚藻|珊瑚藻|藻食)/,
  );
  assert.match(
    editorialText,
    /(?:(?:随后|之后|后来|成长|发育).{0,120}(?:增加|长出|增多|形成).{0,50}(?:臂|棘).{0,120}(?:转向|改食|转食|开始).{0,50}(?:活珊瑚|珊瑚)|(?:随后|之后|后来|成长|发育).{0,120}(?:转向|改食|转食|开始).{0,50}(?:活珊瑚|珊瑚).{0,120}(?:增加|长出|增多|形成).{0,50}(?:臂|棘))/,
  );
  assert.match(
    editorialText,
    /(?:长棘|棘刺|毒棘|spines?).{0,80}(?:刺伤|疼痛|毒素|有毒|伤口)/i,
  );
  assert.match(
    editorialText,
    /(?:不要|不得|避免).{0,30}(?:徒手|触摸|搬动|处理)|(?:专业|受训|防护).{0,40}(?:处理|移除|接触)/,
  );
  assert.match(
    editorialText,
    /NE.{0,40}(?:不等于|并非|不是).{0,20}(?:LC|无危)/i,
  );

  const galleryCaptions = crownOfThorns.media.gallery.map(
    ({ caption }) => caption ?? '',
  );
  assert.ok(
    galleryCaptions.every((caption) => /AI.{0,10}科学情景重建/.test(caption)),
  );
  assert.ok(
    galleryCaptions.every((caption) =>
      /(?:不能|无法|不证明|不代表|不足以|不可)/.test(caption),
    ),
  );
  const captionText = galleryCaptions.join(' ');
  assert.match(
    captionText,
    /(?:(?:像素|画面|图像).{0,60}(?:不能|无法|不足以|不可).{0,60}(?:鉴定|确诊|确认|区分).{0,40}(?:Acanthaster|物种)|(?:Acanthaster|物种).{0,40}(?:不能|无法|不足以|不可).{0,60}(?:像素|画面|图像))/i,
  );
  assert.match(
    captionText,
    /(?:(?:不能|无法|不(?:能)?提供|不(?:能)?支持|不用于|不可).{0,50}(?:测量|量取|确定).{0,50}(?:臂数|棘长|体径|尺寸|数量|密度|范围|速率|配子量)|(?:臂数|棘长|体径|尺寸|数量|密度|范围|速率|配子量).{0,50}(?:不能|无法|不(?:能)?提供|不(?:能)?支持|不用于|不可).{0,50}(?:测量|量取|确定)?)/,
  );

  assert.equal(crownOfThorns.featured, true);
  assert.equal(crownOfThorns.publishedAt, '2026-08-29');
  assert.equal(crownOfThorns.updatedAt, '2026-08-29');
});

test('registers the Japanese Sea Cucumber with the post-2017 species boundary', async () => {
  const profile = findSpecies('japanese-sea-cucumber');

  assert.equal(profile.id, 'species-apostichopus-japonicus');
  assert.equal(profile.names.zh, '仿刺参');
  assert.equal(profile.names.en, 'Japanese Spiky Sea Cucumber');
  assert.equal(profile.scientificName, 'Apostichopus japonicus');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Echinodermata'],
      ['class', 'Holothuroidea'],
      ['order', 'Synallactida'],
      ['family', 'Stichopodidae'],
      ['genus', 'Apostichopus'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    { code: 'EN', trend: 'decreasing', assessedYear: 2010, criteria: 'A2bd' },
  );
  assert.match(
    profile.conservation.assessor,
    /2010-05-19.{0,40}2013年发布.{0,60}早于2017年.*拆分/,
  );
  assert.deepEqual(profile.distribution.realms, ['marine']);
  assert.deepEqual(profile.distribution.countries, [
    '中国',
    '日本',
    '朝鲜',
    '韩国',
    '俄罗斯',
  ]);
  assert.deepEqual(profile.measurements, {});
  assert.deepEqual(profile.metrics, {});
  assert.deepEqual(profile.diet.types, ['detritivore']);
  assert.equal(profile.storySections?.length, 6);
  assert.equal(profile.keyFacts.length, 28);
  assert.equal(profile.threats.length, 5);
  assert.equal(profile.conservationActions.length, 7);
  assert.equal(profile.featuredStats.length, 4);
  const colorTypeStat = profile.featuredStats.find(
    ({ key }) => key === 'former-color-types',
  );
  assert.equal(colorTypeStat?.label, '原三色型现行归属');
  assert.equal(colorTypeStat?.value, '2');
  assert.match(colorTypeStat?.note ?? '', /不是该属全球物种数/);
  assert.ok(
    !profile.featuredStats.some(({ label }) => label === '现行属内有效种'),
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'japanese-sea-cucumber',
    basenames: [
      '01-rocky-reef-red-adult-portrait',
      '02-peltate-tentacle-sediment-feeding',
      '03-ventral-tube-feet-locomotion',
      '04-summer-aestivation-rock-shelter',
      '05-upright-egg-release-reconstruction',
      '06-auricularia-larva-microscopy',
    ],
  });

  assert.equal(profile.sources.length, 22);
  assert.equal(new Set(profile.sources.map(({ url }) => url)).size, 22);
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-29'));
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'general', 'ecology']),
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/aphia.php?p=taxdetails&id=241776',
    'https://www.marinespecies.org/aphia.php?p=taxlist&tName=Apostichopus',
    'https://doi.org/10.11646/zootaxa.4350.1.7',
    'https://doi.org/10.2305/IUCN.UK.2013-1.RLTS.T180424A1629389.en',
    'https://doi.org/10.2331/suisan.27.97',
    'https://doi.org/10.1111/j.1365-2109.2011.03078.x',
  ]) {
    assert.ok(profile.sources.some(({ url }) => url === requiredUrl));
  }

  const editorialText = [
    profile.summary,
    profile.description,
    profile.distribution.range,
    ...profile.habitats.flatMap(({ name, description }) => [name, description]),
    profile.diet.description,
    ...(profile.activity ?? []),
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, note }) => [
      label,
      value,
      note ?? '',
    ]),
    ...(profile.media.gallery ?? []).map(({ caption }) => caption ?? ''),
  ].join(' ');

  assert.match(editorialText, /红色型.{0,80}(?:严格)?Apostichopus japonicus/i);
  assert.match(editorialText, /绿色型和黑色型.{0,40}A\. armatus/i);
  assert.match(editorialText, /(?:照片|图像|画面).{0,100}(?:不能|无法).{0,60}(?:鉴定|确认)/);
  assert.match(editorialText, /背侧体壁.{0,80}骨片/);
  assert.match(editorialText, /IUCN.{0,100}(?:早于|拆分前|分类口径)/i);
  assert.match(editorialText, /(?:至少下降60%|≥60).{0,100}(?:广义种|拆分前|不是当前严格本种)/);
  assert.match(editorialText, /20枚.{0,30}(?:盾状)?口触手|二十枚盾状触手/);
  assert.match(
    profile.media.gallery?.[0]?.caption ?? '',
    /接触沉积物.{0,80}不能证明正在抓取或摄入颗粒/,
  );
  assert.match(editorialText, /前端背侧.{0,30}单一生殖孔/);
  assert.match(editorialText, /透明.{0,30}耳状幼体/);
  assert.match(editorialText, /放流前.{0,80}(?:物种|遗传).{0,40}(?:病原|对照)/);
  assert.equal(profile.featured, false);
  assert.equal(profile.publishedAt, '2026-08-29');
  assert.equal(profile.updatedAt, '2026-08-29');
});

test('registers the Giant Gippsland Earthworm as a complete endemic profile', async () => {
  const profile = findSpecies('giant-gippsland-earthworm');

  assert.equal(profile.id, 'species-megascolides-australis');
  assert.equal(profile.names.zh, '巨蚯蚓');
  assert.equal(profile.names.en, 'Giant Gippsland Earthworm');
  assert.equal(profile.scientificName, 'Megascolides australis');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Annelida'],
      ['class', 'Clitellata'],
      ['order', 'Crassiclitellata'],
      ['family', 'Megascolecidae'],
      ['genus', 'Megascolides'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'EN',
      trend: 'unknown',
      assessedYear: 2013,
      criteria: 'B1ab(iii)+2ab(iii)',
    },
  );
  assert.deepEqual(profile.distribution.realms, ['terrestrial']);
  assert.deepEqual(profile.distribution.countries, ['澳大利亚']);
  assert.deepEqual(profile.distribution.endemicTo, [
    '澳大利亚维多利亚州南部和西部吉普斯兰',
  ]);
  assert.deepEqual(profile.measurements.length, {
    typical: 80,
    max: 150,
    unit: 'cm',
    note: '成体平均约80厘米；现代可靠记录可达约1.5米。身体可伸缩，未采用缺少现代标本支持的3米旧报告。',
  });
  assert.deepEqual(profile.measurements.weight, {
    typical: 200,
    max: 400,
    unit: 'g',
    note: '成体平均约200克，现代研究和政府资料记录最高接近400克；不是所有成体范围。',
  });
  assert.deepEqual(profile.metrics, {});
  assert.deepEqual(profile.diet.types, ['detritivore']);
  assert.equal(profile.storySections?.length, 6);
  assert.equal(profile.keyFacts.length, 22);
  assert.equal(profile.threats.length, 8);
  assert.equal(profile.conservationActions.length, 10);
  assert.equal(profile.featuredStats.length, 4);
  assert.deepEqual(profile.media.focalPoint, { x: 0.35, y: 0.55 });

  await assertGeneratedImageSet({
    profile,
    slug: 'giant-gippsland-earthworm',
    basenames: [
      '01-moist-clay-burrow-adult',
      '02-purple-anterior-segmented-body',
      '03-streambank-clay-habitat-cutaway',
      '04-wet-permanent-burrow-movement',
      '05-amber-egg-cocoon-side-chamber',
      '06-acoustic-hydrology-monitoring',
    ],
  });

  assert.equal(profile.sources.length, 18);
  assert.equal(new Set(profile.sources.map(({ url }) => url)).size, 18);
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-29'));
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'general', 'ecology']),
  );
  for (const requiredUrl of [
    'https://biodiversity.org.au/afd/taxa/Megascolides_australis',
    'https://doi.org/10.2305/IUCN.UK.2014-1.RLTS.T13008A21416160.en',
    'https://www.dcceew.gov.au/sites/default/files/documents/giant-gippsland-earthworm.pdf',
    'https://collections.museumsvictoria.com.au/species/14381',
    'https://doi.org/10.1016/0038-0717(92)90119-I',
  ]) {
    assert.ok(profile.sources.some(({ url }) => url === requiredUrl));
  }

  const editorialText = [
    profile.summary,
    profile.description,
    profile.distribution.range,
    ...profile.habitats.flatMap(({ name, description }) => [name, description]),
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    ...(profile.media.gallery ?? []).map(({ caption }) => caption ?? ''),
  ].join(' ');

  assert.match(editorialText, /IUCN.{0,80}(?:濒危|EN)/i);
  assert.match(editorialText, /EPBC.{0,30}(?:易危|VU)/i);
  assert.match(editorialText, /FFG.{0,30}(?:濒危|EN)/i);
  assert.match(editorialText, /40,000公顷.{0,100}(?:不足10平方米|小于10平方米)/);
  assert.match(editorialText, /(?:没有可靠的全种数量|全种总量.{0,20}未知)/);
  assert.match(editorialText, /3米.{0,80}(?:没有|未采用|缺少).{0,30}(?:标本|支持)/);
  assert.match(editorialText, /全年湿润.{0,30}(?:不积水|不长期积水)/);
  assert.match(editorialText, /每个卵茧只有一个胚胎.{0,40}(?:至少需要12个月|至少孵化12个月)/);
  assert.match(editorialText, /性成熟.{0,30}(?:4至5年|4—5年).{0,40}(?:寿命未知|最大寿命未知)/);
  assert.match(editorialText, /(?:密集植树|密植).{0,80}(?:水文|水分)/);
  assert.match(editorialText, /迁地.{0,80}(?:最后手段|原地避让|难以确定)/);
  assert.match(editorialText, /(?:咕噜声|声音).{0,60}不能.{0,40}(?:个体数|种群数量|趋势)/);
  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-29');
  assert.equal(profile.updatedAt, '2026-08-29');
});

test('registers the Aardvark as a complete Orycteropus afer profile', async () => {
  const profile = findSpecies('aardvark');

  assert.equal(profile.id, 'species-orycteropus-afer');
  assert.equal(profile.slug, 'aardvark');
  assert.equal(profile.names.zh, '土豚');
  assert.equal(profile.names.en, 'Aardvark');
  assert.equal(profile.scientificName, 'Orycteropus afer');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Mammalia'],
      ['order', 'Tubulidentata'],
      ['family', 'Orycteropodidae'],
      ['genus', 'Orycteropus'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    { code: 'LC', trend: 'unknown', assessedYear: 2014, criteria: undefined },
  );
  assert.deepEqual(profile.distribution.realms, ['terrestrial']);
  assert.equal(profile.distribution.countries.length, 42);
  assert.equal(new Set(profile.distribution.countries).size, 42);
  assert.deepEqual(
    {
      min: profile.measurements.length?.min,
      max: profile.measurements.length?.max,
      unit: profile.measurements.length?.unit,
    },
    { min: 94, max: 142, unit: 'cm' },
  );
  assert.deepEqual(
    {
      min: profile.measurements.weight?.min,
      max: profile.measurements.weight?.max,
      unit: profile.measurements.weight?.unit,
    },
    { min: 40, max: 65, unit: 'kg' },
  );
  assert.deepEqual(profile.metrics.adultLengthCm, [94, 142]);
  assert.deepEqual(profile.metrics.adultMassKg, [40, 65]);
  assert.equal(profile.storySections?.length, 6);
  assert.equal(profile.featuredStats.length, 4);

  await assertGeneratedImageSet({
    profile,
    slug: 'aardvark',
    basenames: [
      '01-dusk-burrow-foraging',
      '02-full-body-diagnostic-profile',
      '03-termite-mound-excavation',
      '04-sticky-tongue-termite-feeding',
      '05-mother-single-juvenile',
      '06-daytime-burrow-chamber-cutaway',
    ],
  });

  assert.equal(profile.sources.length, 15);
  assert.equal(new Set(profile.sources.map(({ url }) => url)).size, 15);
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-30'));
  for (const requiredUrl of [
    'https://www.mammaldiversity.org/taxon/1000520/',
    'https://doi.org/10.2305/IUCN.UK.2015-2.RLTS.T41504A21286437.en',
    'https://doi.org/10.1006/jare.2001.0854',
    'https://doi.org/10.1017/S0952836903004217',
    'https://doi.org/10.3389/fphys.2020.00637',
    'https://doi.org/10.1080/15627020.2011.11407509',
    'https://doi.org/10.3390/ani12070845',
  ]) {
    assert.ok(profile.sources.some(({ url }) => url === requiredUrl));
  }

  const editorialText = [
    profile.summary,
    profile.description,
    profile.conservation.assessor ?? '',
    profile.distribution.range,
    ...profile.habitats.flatMap(({ name, description }) => [name, description]),
    profile.diet.description,
    ...(profile.activity ?? []),
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    ...(profile.media.gallery ?? []).map(({ caption }) => caption ?? ''),
  ].join(' ');

  assert.match(
    editorialText,
    /(?=[\s\S]*(?:MDD|Mammal Diversity Database).{0,100}42)(?=[\s\S]*IUCN.{0,100}40)(?=[\s\S]*(?:旧|2014|历史).{0,120}(?:40|四十).{0,120}(?:不(?:等于|作为)|不能|未用于|有别于).{0,120}(?:42|四十二))/i,
  );
  assert.match(
    editorialText,
    /2015-2.{0,60}(?:发布|批次|版本).{0,100}(?:不能|不(?:是|作为)).{0,40}(?:评估年|评估年份)/,
  );
  assert.match(
    editorialText,
    /27.{0,100}(?:3|三)(?:个)?(?:南非)?(?:样地|地点|研究点).{0,160}(?:不能|不可|不代表|并非).{0,100}(?:全球|全分布区|所有洞穴|物种整体)/,
  );
  assert.match(
    editorialText,
    /20\s*(?:枚|颗).{0,30}(?:成年)?颊齿.{0,80}(?:无|没有|缺少)釉质.{0,80}(?:持续|终生)(?:生长|萌出)/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*干旱.{0,160}白昼)(?=[\s\S]*白昼.{0,160}能量不足)(?=[\s\S]*(?:不能|不代表|并非|不是).{0,80}(?:固定)?昼行)/,
  );
  assert.equal(profile.publishedAt, '2026-08-30');
  assert.equal(profile.updatedAt, '2026-08-30');
});

test('registers the Star-nosed Mole as a complete Condylura cristata profile', async () => {
  const profile = findSpecies('star-nosed-mole');

  assert.equal(profile.id, 'species-condylura-cristata');
  assert.equal(profile.slug, 'star-nosed-mole');
  assert.equal(profile.names.zh, '星鼻鼹');
  assert.equal(profile.names.en, 'Star-nosed Mole');
  assert.deepEqual(profile.names.aliases, []);
  assert.equal(profile.scientificName, 'Condylura cristata');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Mammalia'],
      ['order', 'Eulipotyphla'],
      ['family', 'Talpidae'],
      ['genus', 'Condylura'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    { code: 'LC', trend: 'stable', assessedYear: 2016, criteria: undefined },
  );
  assert.deepEqual(profile.distribution.realms, ['terrestrial', 'freshwater']);
  assert.deepEqual(profile.distribution.countries, ['加拿大', '美国']);
  assert.deepEqual(
    {
      min: profile.measurements.length?.min,
      max: profile.measurements.length?.max,
      unit: profile.measurements.length?.unit,
    },
    { min: 9.6, max: 12.8, unit: 'cm' },
  );
  assert.deepEqual(
    {
      min: profile.measurements.weight?.min,
      max: profile.measurements.weight?.max,
      unit: profile.measurements.weight?.unit,
    },
    { min: 27, max: 52, unit: 'g' },
  );
  assert.deepEqual(profile.metrics, {
    adultLengthCm: [9.6, 12.8],
    adultMassKg: [0.027, 0.052],
    elevationM: [0, 1676],
  });
  assert.equal(profile.storySections?.length, 6);
  assert.equal(profile.featuredStats.length, 4);

  await assertGeneratedImageSet({
    profile,
    slug: 'star-nosed-mole',
    basenames: [
      '01-wetland-edge-emergence',
      '02-full-body-diagnostic-profile',
      '03-nasal-star-sensory-closeup',
      '04-underwater-bubble-sniffing',
      '05-rapid-tactile-prey-detection',
      '06-wetland-bank-burrow-cutaway',
    ],
  });

  assert.equal(profile.sources.length, 16);
  assert.equal(new Set(profile.sources.map(({ url }) => url)).size, 16);
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-30'));
  for (const requiredUrl of [
    'https://www.mammaldiversity.org/taxon/1004300/',
    'https://www.fws.gov/taxonomic-tree/31607',
    'https://qrius.si.edu/browse/object/10841938',
    'https://doi.org/10.2305/IUCN.UK.2016-3.RLTS.T41458A22322697.en',
    'https://nrl.iucnredlist.org/assessment/process',
    'https://treatment.plazi.org/GgServer/xhtml/0380B547B657FF869FBCF812FE7BCEE7',
    'https://doi.org/10.2307/1382980',
    'https://doi.org/10.1002/cne.903510405',
    'https://pubmed.ncbi.nlm.nih.gov/9336224/',
    'https://doi.org/10.1002/cne.23943',
    'https://doi.org/10.1371/journal.pone.0055001',
    'https://doi.org/10.1038/nature03250',
    'https://doi.org/10.1038/4441024a',
    'https://doi.org/10.1242/jeb.205.1.45',
    'https://doi.org/10.2307/1376681',
    'https://georgiabiodiversity.org/portal/profile?es_id=17250&group=all',
  ]) {
    assert.ok(profile.sources.some(({ url }) => url === requiredUrl));
  }

  const editorialText = [
    profile.summary,
    profile.description,
    profile.conservation.assessor ?? '',
    profile.distribution.range,
    ...profile.habitats.flatMap(({ name, description }) => [name, description]),
    profile.measurements.length?.note ?? '',
    profile.measurements.weight?.note ?? '',
    profile.diet.description,
    ...(profile.activity ?? []),
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    profile.media.alt,
    ...(profile.media.gallery ?? []).flatMap(({ alt, title, caption }) => [
      alt,
      title,
      caption ?? '',
    ]),
  ].join(' ');

  assert.match(
    editorialText,
    /(?=[\s\S]*IUCN.{0,160}2016)(?=[\s\S]*(?:超过|已满).{0,20}(?:10|十)年)(?=[\s\S]*(?:(?:需|需要|待|应).{0,20}(?:更新|重评)|(?:更新|重评).{0,20}(?:期限|需求)))/i,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*22\s*(?:条|根))(?=[\s\S]*(?:每侧|每个鼻孔(?:周围)?).{0,24}11\s*(?:条|根))/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*(?:3|三)\s*只圈养个体.{0,220}(?:最短.{0,20})?120\s*毫秒)(?=[\s\S]*(?:加权)?平均.{0,40}227\s*毫秒)/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*(?:18|十八)\s*只圈养个体.{0,120}722\s*次(?:自愿)?潜水)(?=[\s\S]*(?:平均.{0,20})?9\.2\s*(?:±\s*0\.2\s*)?秒)(?=[\s\S]*(?:(?:9\.2\s*秒|圈养|水槽).{0,200}(?:不能|不是|不代表).{0,100}(?:野外|全种|固定)))/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*(?:(?:从|由)?(?:两个)?鼻孔.{0,30}(?:呼出|产生|释放).{0,30}气泡|气泡.{0,30}(?:来自|源自).{0,20}(?:两个)?鼻孔))(?=[\s\S]*(?:触条|星鼻).{0,50}(?:负责|提供|用于).{0,30}(?:触觉|接触))/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*(?:乔治亚州|Georgia).{0,160}(?:Data Deficient|DD|资料不足|数据缺乏))(?=[\s\S]*(?:(?:乔治亚州|州级|地方).{0,180}(?:不能|不可|不应).{0,100}(?:覆盖|替代|改写).{0,80}(?:全球|IUCN).{0,60}(?:LC|无危)|(?:全球|IUCN).{0,80}(?:LC|无危).{0,160}(?:不能|不可|不应).{0,80}(?:覆盖|替代|删除).{0,100}(?:乔治亚州|南缘|地方)))/i,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*HMW.{0,240}(?:头体长|9\.6.{0,24}12\.8))(?=[\s\S]*尾长.{0,80}(?:6\.5.{0,24}8\.35|65.{0,24}83\.5))(?=[\s\S]*(?:(?:不能|不可|不应).{0,100}(?:拼接|拼成|相加|合并).{0,100}(?:总长|范围|端点)|(?:端点|头体长|尾长).{0,100}(?:不能|不可|不应).{0,60}(?:拼接|拼成|相加|合并).{0,60}(?:总长|范围)))/,
  );
  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-30');
  assert.equal(profile.updatedAt, '2026-08-30');
});

test('registers the Kākāpō as a complete Strigops habroptilus profile', async () => {
  const profile = findSpecies('kakapo');

  assert.equal(profile.id, 'species-strigops-habroptilus');
  assert.equal(profile.slug, 'kakapo');
  assert.equal(profile.names.zh, '鸮鹦鹉');
  assert.equal(profile.names.en, 'Kākāpō');
  assert.deepEqual(profile.names.aliases, ['Kakapo', 'Owl Parrot']);
  assert.equal(profile.scientificName, 'Strigops habroptilus');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Aves', '鸟纲'],
      ['order', 'Psittaciformes', '鹦形目'],
      ['family', 'Strigopidae', '鸮鹦鹉科'],
      ['genus', 'Strigops', '鸮鹦鹉属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    { code: 'CR', trend: 'increasing', assessedYear: 2018, criteria: 'A2be' },
  );
  assert.deepEqual(profile.distribution.realms, ['terrestrial']);
  assert.deepEqual(profile.distribution.continents, ['大洋洲']);
  assert.deepEqual(profile.distribution.countries, ['新西兰']);
  assert.deepEqual(profile.distribution.endemicTo, ['新西兰']);
  assert.deepEqual(
    {
      min: profile.measurements.length?.min,
      max: profile.measurements.length?.max,
      unit: profile.measurements.length?.unit,
    },
    { min: 58, max: 64, unit: 'cm' },
  );
  assert.deepEqual(
    {
      min: profile.measurements.weight?.min,
      max: profile.measurements.weight?.max,
      unit: profile.measurements.weight?.unit,
    },
    { min: 1, max: 4, unit: 'kg' },
  );
  assert.deepEqual(profile.metrics, {
    adultLengthCm: [58, 64],
    adultMassKg: [1, 4],
    estimatedMatureIndividuals: [116, 116],
  });
  assert.equal(profile.storySections?.length, 6);
  assert.ok(profile.keyFacts.length >= 15);
  assert.equal(profile.featuredStats.length, 4);

  await assertGeneratedImageSet({
    profile,
    slug: 'kakapo',
    basenames: [
      '01-moss-forest-nocturnal-portrait',
      '02-full-body-diagnostic-profile',
      '03-male-track-and-bowl-booming',
      '04-rimu-fruit-tree-foraging',
      '05-female-ground-cavity-two-eggs',
      '06-radio-telemetry-island-monitoring',
    ],
  });

  assert.equal(profile.sources.length, 18);
  assert.equal(new Set(profile.sources.map(({ url }) => url)).size, 18);
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-30'));
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'general', 'conservation', 'distribution', 'ecology']),
  );
  for (const requiredUrl of [
    'https://www.avilist.org/checklist/v2025b/',
    'https://www.worldbirdnames.org/new/updates/taxonomy/',
    'https://www.nzbirdsonline.org.nz/species/kakapo',
    'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T22685245A129751169.en',
    'https://nrl.iucnredlist.org/assessment/process',
    'https://www.doc.govt.nz/kakapo',
    'https://www.doc.govt.nz/news/media-releases/2026-media-releases/fast-dna-sex-test-game-changer-for-conservation/',
    'https://www.doc.govt.nz/news/media-releases/2022-media-releases/bumper-breeding-season-boosts-kakapo-population/',
    'https://www.doc.govt.nz/news/media-releases/2026-media-releases/kakapo-breeding-season-officially-underway/',
    'https://doi.org/10.1111/acv.12746',
    'https://doi.org/10.1038/s41559-023-02165-y',
    'https://doi.org/10.1111/mec.70252',
    'https://pmc.ncbi.nlm.nih.gov/articles/PMC9668684/',
  ]) {
    assert.ok(profile.sources.some(({ url }) => url === requiredUrl));
  }

  const editorialText = [
    profile.summary,
    profile.description,
    profile.conservation.assessor ?? '',
    profile.distribution.range,
    ...profile.habitats.flatMap(({ name, description }) => [name, description]),
    profile.measurements.length?.note ?? '',
    profile.measurements.weight?.note ?? '',
    profile.diet.description,
    ...(profile.activity ?? []),
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    profile.media.alt,
    ...(profile.media.gallery ?? []).flatMap(({ alt, title, caption }) => [
      alt,
      title,
      caption ?? '',
    ]),
  ].join(' ');

  assert.match(
    editorialText,
    /IUCN.{0,100}2018.{0,100}116\s*只成熟个体/i,
  );
  assert.match(
    editorialText,
    /2026(?: 年|-).{0,100}235\s*只.{0,100}(?:全龄|在世管理台账|在世野外个体)/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*IUCN.{0,100}2018)(?=[\s\S]*(?:2026-08-30|截至 2026).{0,100}尚未越过十年(?:过期线|更新期限))/i,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*150\s*日龄.{0,100}(?:纳入|官方数字))(?=[\s\S]*雏鸟.{0,120}(?:不能|不可).{0,40}直接.{0,40}台账.{0,30}相加)/,
  );
  assert.match(
    editorialText,
    /1[—-]4\s*枚.{0,50}27[—-]31\s*天.{0,60}70\s*日龄.{0,60}9\s*个月/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*2[—-]4\s*年)(?=[\s\S]*补充饲料.{0,100}(?:没有|未).{0,30}证明.{0,40}(?:单独)?(?:触发|启动)(?:繁殖|筑巢))/,
  );
  assert.match(
    editorialText,
    /2019 年曲霉病暴发.{0,40}21 只.{0,30}9 只死亡.{0,80}(?:关联|单一)菌株.{0,40}(?:不足以|不能).{0,20}单独(?:解释|造成)/,
  );
  assert.match(
    editorialText,
    /近交程度升高.{0,50}孵化成功率相关.{0,40}(?:不是|并非)单基因因果/,
  );

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-30');
  assert.equal(profile.updatedAt, '2026-08-30');
});

test('registers the Hoatzin as a complete Opisthocomus hoazin profile', async () => {
  const profile = findSpecies('hoatzin');

  assert.equal(profile.id, 'species-opisthocomus-hoazin');
  assert.equal(profile.slug, 'hoatzin');
  assert.equal(profile.names.zh, '麝雉');
  assert.equal(profile.names.en, 'Hoatzin');
  assert.deepEqual(profile.names.aliases, [
    'Opisthocomus hoazin',
    'Stinkbird',
    'Canje Pheasant',
    '臭雉',
  ]);
  assert.equal(profile.scientificName, 'Opisthocomus hoazin');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Aves', '鸟纲'],
      ['order', 'Opisthocomiformes', '麝雉目'],
      ['family', 'Opisthocomidae', '麝雉科'],
      ['genus', 'Opisthocomus', '麝雉属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'decreasing',
      assessedYear: 2024,
      criteria: undefined,
    },
  );
  assert.deepEqual(profile.distribution.realms, ['terrestrial', 'freshwater']);
  assert.deepEqual(profile.distribution.continents, ['南美洲']);
  assert.deepEqual(profile.distribution.countries, [
    '玻利维亚',
    '巴西',
    '哥伦比亚',
    '厄瓜多尔',
    '法属圭亚那',
    '圭亚那',
    '秘鲁',
    '苏里南',
    '委内瑞拉',
  ]);
  assert.deepEqual(
    {
      typical: profile.measurements.length?.typical,
      unit: profile.measurements.length?.unit,
    },
    { typical: 65, unit: 'cm' },
  );
  assert.deepEqual(
    {
      typical: profile.measurements.weight?.typical,
      unit: profile.measurements.weight?.unit,
    },
    { typical: 0.72, unit: 'kg' },
  );
  assert.deepEqual(profile.metrics, { elevationM: [0, 1050] });
  assert.equal(profile.storySections?.length, 6);
  assert.ok(profile.keyFacts.length >= 15);
  assert.equal(profile.featuredStats.length, 4);

  await assertGeneratedImageSet({
    profile,
    slug: 'hoatzin',
    basenames: [
      '01-floodplain-riparian-portrait',
      '02-full-body-diagnostic-profile',
      '03-young-leaf-foraging',
      '04-enlarged-crop-foregut-cutaway',
      '05-nestling-two-wing-claws',
      '06-chick-surface-swimming',
    ],
  });

  assert.equal(profile.sources.length, 18);
  assert.equal(new Set(profile.sources.map(({ url }) => url)).size, 18);
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-30'));
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'general', 'conservation', 'distribution', 'ecology']),
  );

  const storyBodies = new Map(
    profile.storySections?.map(({ key, body }) => [key, body]) ?? [],
  );

  assert.match(
    profile.description,
    /IUCN 2024 年.{0,30}无危.{0,30}趋势下降.{0,30}成熟个体数未量化/i,
  );
  assert.match(
    storyBodies.get('fermentation-before-stomach') ?? '',
    /嗉囊.{0,20}后段食管.{0,100}总消化道容量.{0,20}77\s*%.{0,30}不是体重的 77\s*%/,
  );
  assert.match(
    storyBodies.get('fermentation-before-stomach') ?? '',
    /没有四个胃.{0,30}没有被证实会反刍嚼团/,
  );
  assert.match(
    storyBodies.get('wing-claw-climber') ?? '',
    /雏鸟每翼有两枚.{0,100}显著翼爪通常随成熟退化或消失/,
  );
  assert.match(
    storyBodies.get('water-edge-nursery') ?? '',
    /4 只雏鸟的实验.{0,40}水面和水下.{0,20}游泳.{0,30}实验没有测量野外.{0,20}跳水的频率/,
  );
  assert.match(
    storyBodies.get('one-living-lineage') ?? '',
    /不表示它是“原始鸟”、活化石或其他现代鸟的祖先/,
  );

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-30');
  assert.equal(profile.updatedAt, '2026-08-30');
});

test('registers the Chinese Alligator as a complete Alligator sinensis profile', async () => {
  const profile = findSpecies('chinese-alligator');

  assert.equal(profile.id, 'species-alligator-sinensis');
  assert.equal(profile.slug, 'chinese-alligator');
  assert.equal(profile.names.zh, '扬子鳄');
  assert.equal(profile.names.en, 'Chinese Alligator');
  assert.deepEqual(profile.names.aliases, [
    'Yangtze Alligator',
    '鼍',
    '中华鼍',
    '土龙',
    '猪婆龙',
  ]);
  assert.equal(profile.scientificName, 'Alligator sinensis');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Reptilia', '爬行纲'],
      ['order', 'Crocodylia', '鳄目'],
      ['family', 'Alligatoridae', '短吻鳄科'],
      ['genus', 'Alligator', '短吻鳄属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'CR',
      trend: 'decreasing',
      assessedYear: 2017,
      criteria: 'A1b; B1ab(ii,v)+2ab(ii,v); C1+2a(i)',
    },
  );
  assert.deepEqual(profile.distribution.realms, ['freshwater', 'terrestrial']);
  assert.deepEqual(profile.distribution.continents, ['亚洲']);
  assert.deepEqual(profile.distribution.countries, ['中国']);
  assert.deepEqual(profile.distribution.endemicTo, ['中国']);
  assert.deepEqual(
    {
      typical: profile.measurements.length?.typical,
      max: profile.measurements.length?.max,
      unit: profile.measurements.length?.unit,
    },
    { typical: 1.5, max: 2.16, unit: 'm' },
  );
  assert.equal(profile.measurements.weight, undefined);
  assert.deepEqual(profile.metrics, {});
  assert.equal(profile.storySections?.length, 6);
  assert.ok(profile.keyFacts.length >= 27);
  assert.equal(profile.featuredStats.length, 4);

  await assertGeneratedImageSet({
    profile,
    slug: 'chinese-alligator',
    basenames: [
      '01-lowland-wetland-adult-portrait',
      '02-full-body-diagnostic-profile',
      '03-bank-burrow-entrance',
      '04-summer-bellowing-posture',
      '05-vegetation-mound-nest',
      '06-reintroduction-radio-monitoring',
    ],
  });

  assert.equal(profile.sources.length, 18);
  assert.equal(new Set(profile.sources.map(({ url }) => url)).size, 18);
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-30'));
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'distribution', 'conservation', 'general', 'ecology']),
  );
  for (const requiredUrl of [
    'https://doi.org/10.2305/IUCN.UK.2018-1.RLTS.T867A3146005.en',
    'https://www.iucncsg.org/365_docs/attachments/protarea/1726a747dff36b92c73693a8e542b872.pdf',
    'https://zoores.ac.cn/article/id/1011',
    'https://doi.org/10.1121/1.2714910',
    'https://doi.org/10.1016/j.scib.2018.01.004',
    'https://doi.org/10.1016/j.isci.2020.101202',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `chinese-alligator sources should include ${requiredUrl}`,
    );
  }

  const storyBodies = new Map(
    profile.storySections?.map(({ key, body }) => [key, body]) ?? [],
  );
  const galleryCaptions = new Map(
    profile.media.gallery?.map(({ image, caption }) => [image.split('/').at(-1), caption]) ?? [],
  );

  assert.match(
    profile.description,
    /2019 年约 200 只.{0,30}全年龄估计.{0,20}不是成熟个体数/,
  );
  assert.match(
    profile.description,
    /IUCN 当前仍列极危，2017 年评估趋势为下降/,
  );
  assert.match(
    storyBodies.get('winter-under-the-bank') ?? '',
    /安徽 40 个洞穴.{0,40}多数洞口.{0,20}水面.{0,20}离水不远/,
  );
  assert.match(
    storyBodies.get('winter-under-the-bank') ?? '',
    /没有给出每座洞穴的内部结构或每只野生鳄的能量账本/,
  );
  assert.match(
    storyBodies.get('shell-crushing-feeder') ?? '',
    /早期胃内容物比例.{0,30}缺少.{0,20}样本背景.{0,30}圈养中心.{0,20}人工饲料.{0,30}只给定性食谱/,
  );
  assert.match(
    storyBodies.get('voices-across-the-pond') ?? '',
    /没有为每种声音建立固定野外词义.{0,30}合唱吸引配偶或聚集群体仍需按实验条件表述/,
  );
  assert.match(
    storyBodies.get('mound-nest-and-temperature') ?? '',
    /29°C 孵化组全雌、34°C 孵化组全雄.{0,30}不是野外唯一阈值/,
  );
  assert.match(
    storyBodies.get('mound-nest-and-temperature') ?? '',
    /没有证明每只母鳄都执行相同步骤/,
  );
  assert.match(
    storyBodies.get('recovery-with-provenance') ?? '',
    /自然残存个体、放归个体、放归后代和圈养库存分开/,
  );
  assert.match(
    storyBodies.get('recovery-with-provenance') ?? '',
    /2016 年约 28,000 只.{0,80}2023 年约 10,000 只.{0,80}圈养数，不能替换野外种群/,
  );
  assert.match(
    storyBodies.get('recovery-with-provenance') ?? '',
    /基因组.{0,50}不能替代湿地恢复和长期野外监测/,
  );
  assert.match(
    galleryCaptions.get('03-bank-burrow-entrance.webp') ?? '',
    /不能证明个体挖掘或使用该洞、正在冬眠、固定出洞日期.{0,30}不揭示内部房间、水池、通气孔或隧道结构/,
  );
  assert.match(
    galleryCaptions.get('04-summer-bellowing-posture.webp') ?? '',
    /无声静帧.{0,30}不能证明声音发生.{0,50}识别性别.{0,30}指定求偶功能/,
  );
  assert.match(
    galleryCaptions.get('05-vegetation-mound-nest.webp') ?? '',
    /不能确定性别、亲缘、守巢、巢主、窝卵存在与数量、巢温/,
  );
  assert.match(
    galleryCaptions.get('06-reintroduction-radio-monitoring.webp') ?? '',
    /不证明个体为圈养繁育或放归来源.{0,30}携带可工作的发射器.{0,30}被接收机检出.{0,30}成功繁殖或长期存活/,
  );

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-30');
  assert.equal(profile.updatedAt, '2026-08-30');
});

test('registers the Gila Monster as a complete Heloderma suspectum profile', async () => {
  const profile = findSpecies('gila-monster');

  assert.equal(profile.id, 'species-heloderma-suspectum');
  assert.equal(profile.slug, 'gila-monster');
  assert.equal(profile.names.zh, '美国毒蜥');
  assert.equal(profile.names.en, 'Gila Monster');
  assert.deepEqual(profile.names.aliases, [
    '希拉毒蜥',
    '吉拉毒蜥',
    '钝尾毒蜥',
    'Monstruo de Gila',
    'Lagarto de Gila',
  ]);
  assert.equal(profile.scientificName, 'Heloderma suspectum');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Reptilia', '爬行纲'],
      ['order', 'Squamata', '有鳞目'],
      ['family', 'Helodermatidae', '毒蜥科'],
      ['genus', 'Heloderma', '毒蜥属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'NT',
      trend: 'decreasing',
      assessedYear: 2007,
      criteria: undefined,
    },
  );
  assert.deepEqual(profile.distribution.realms, ['terrestrial']);
  assert.deepEqual(profile.distribution.continents, ['北美洲']);
  assert.deepEqual(profile.distribution.countries, ['美国', '墨西哥']);
  assert.equal(profile.distribution.endemicTo, undefined);
  assert.deepEqual(
    {
      max: profile.measurements.length?.max,
      unit: profile.measurements.length?.unit,
    },
    { max: 0.56, unit: 'm' },
  );
  assert.equal(profile.measurements.weight, undefined);
  assert.deepEqual(profile.metrics, {});
  assert.equal(profile.storySections?.length, 6);
  assert.equal(
    new Set(profile.storySections?.map(({ key }) => key)).size,
    6,
  );
  assert.ok(profile.keyFacts.length >= 18);
  assert.ok(profile.conservationActions.length >= 6);
  assert.equal(profile.featuredStats.length, 4);
  assert.equal(new Set(profile.featuredStats.map(({ key }) => key)).size, 4);

  await assertGeneratedImageSet({
    profile,
    slug: 'gila-monster',
    basenames: [
      '01-rocky-desert-scrub-adult-portrait',
      '02-beaded-scales-diagnostic-profile',
      '03-rock-burrow-entrance',
      '04-ground-nest-egg-foraging',
      '05-defensive-mouth-posture',
      '06-radio-telemetry-habitat-monitoring',
    ],
  });

  assert.equal(profile.sources.length, 18);
  assert.equal(new Set(profile.sources.map(({ url }) => url)).size, 18);
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-30'));
  for (const requiredUrl of [
    'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=174113',
    'https://reptile-database.reptarium.cz/Heloderma/suspectum',
    'https://ssarherps.org/wp-content/uploads/2025/03/9th-Edition-Scientific-and-Standard-English-Names-of-Amphibians-and-Reptiles.pdf',
    'https://doi.org/10.2305/IUCN.UK.2007.RLTS.T9865A13022716.en',
    'https://www.dof.gob.mx/nota_detalle.php?codigo=5173091&fecha=30/12/2010',
    'https://www.nps.gov/sagu/learn/nature/gila-monster.htm',
    'https://doi.org/10.1098/rspb.2018.0632',
    'https://doi.org/10.1242/jeb.227348',
    'https://www.accessdata.fda.gov/drugsatfda_docs/nda/2017/209210Orig1s000PharmR.pdf',
    'https://doi.org/10.1177/10806032261447178',
    'https://doi.org/10.1016/j.biocon.2003.07.002',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `gila-monster sources should include ${requiredUrl}`,
    );
  }

  const storyBodies = new Map(
    profile.storySections?.map(({ key, body }) => [key, body]) ?? [],
  );
  const galleryCaptions = new Map(
    profile.media.gallery?.map(({ image, caption }) => [image.split('/').at(-1), caption]) ?? [],
  );
  const editorialText = [
    profile.summary,
    profile.description,
    profile.conservation.assessor ?? '',
    profile.distribution.range,
    ...profile.habitats.flatMap(({ name, description }) => [name, description]),
    profile.measurements.length?.note ?? '',
    profile.diet.description,
    ...(profile.activity ?? []),
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    profile.media.alt,
    ...(profile.media.gallery ?? []).flatMap(({ alt, title, caption }) => [
      alt,
      title,
      caption ?? '',
    ]),
  ].join(' ');

  assert.match(
    profile.description,
    /IUCN 当前仍沿用 2007 年近危、下降评估/,
  );
  assert.match(
    storyBodies.get('beads-pattern-and-tail') ?? '',
    /横带和网纹.{0,50}没有.{0,60}现行亚种线.{0,40}物种级外形/,
  );
  assert.match(
    storyBodies.get('seasons-belowground') ?? '',
    /春季.{0,40}早晨或傍晚.{0,50}盛夏.{0,30}夜行.{0,80}冬季.{0,30}偶尔.{0,30}洞口晒太阳.{0,60}全年夜行.{0,30}过于/,
  );
  assert.match(
    storyBodies.get('following-a-nest-scent') ?? '',
    /卵、雏鸟、幼兔.{0,80}没有证据.{0,40}每只野生个体.{0,30}一年恰好吃三四顿/,
  );
  assert.match(
    storyBodies.get('warning-before-biting') ?? '',
    /静帧.{0,30}不能证明.{0,30}攻击.{0,30}毒液是否流动.{0,80}下颌腺.{0,50}沟齿.{0,30}低压进入伤口/,
  );
  assert.match(
    storyBodies.get('hatch-before-emergence') ?? '',
    /114 至 152 天.{0,70}秋季孵出.{0,40}巢内越冬.{0,60}9 至 12 个月.{0,60}全部叫作.{0,20}孵化期.{0,30}混淆/,
  );
  assert.match(
    storyBodies.get('telemetry-through-hidden-seasons') ?? '',
    /不能证明可见个体携带发射器.{0,50}不能代表全球家域或数量/,
  );
  assert.match(
    editorialText,
    /超过 95%.{0,50}(?:不是|不代表).{0,40}(?:每只个体|所有个体).{0,40}(?:固定|精确)/,
  );
  assert.match(
    editorialText,
    /2026 年.{0,40}(?:病例|病例报告).{0,80}“美国毒蜥咬伤从未致死”.{0,30}(?:过时|禁用)/,
  );
  assert.match(
    editorialText,
    /exenatide.{0,50}合成版本.{0,60}(?:不需要|不是).{0,70}(?:持续从美国毒蜥采毒|动物毒液直接提取)/i,
  );
  assert.match(
    editorialText,
    /城市冲突.{0,50}(?:受训|主管).{0,30}机构.{0,50}(?:不鼓励|不要|不得).{0,50}(?:抓取|捕捉).{0,30}(?:长距离搬迁|远迁)/,
  );
  assert.match(
    galleryCaptions.get('02-beaded-scales-diagnostic-profile.webp') ?? '',
    /透视.{0,30}足趾.{0,40}不用于解剖计数.{0,30}花纹.{0,50}(?:不能|不用于).{0,50}诊断.{0,10}亚种/,
  );
  assert.match(
    galleryCaptions.get('03-rock-burrow-entrance.webp') ?? '',
    /不证明.{0,40}(?:占用|挖掘).{0,50}(?:冬季|季节).{0,50}地下结构/,
  );
  assert.match(
    galleryCaptions.get('04-ground-nest-egg-foraging.webp') ?? '',
    /三枚完整小型鸟卵.{0,50}(?:不是|不代表).{0,30}完整窝卵数.{0,20}(?:食物|饮食)比例/,
  );
  assert.match(
    galleryCaptions.get('05-defensive-mouth-posture.webp') ?? '',
    /不能证明.{0,20}攻击意图.{0,20}咬合.{0,20}毒液流动/,
  );
  assert.match(
    galleryCaptions.get('05-defensive-mouth-posture.webp') ?? '',
    /没有清楚分辨牙列.{0,20}不能据此判断牙齿形态/,
  );
  assert.match(
    galleryCaptions.get('06-radio-telemetry-habitat-monitoring.webp') ?? '',
    /不证明可见个体携带发射器或正在回传信号/,
  );

  assert.doesNotMatch(editorialText, /IUCN.{0,20}(?:列为|评为|状态为).{0,10}(?:LC|无危)/i);
  assert.doesNotMatch(editorialText, /(?:美国|墨西哥)(?:单国)?特有种/);
  assert.doesNotMatch(editorialText, /海拔.{0,20}(?:0|零).{0,10}(?:至|—|-).{0,10}2,?134/);
  assert.doesNotMatch(
    editorialText,
    /体重(?:范围)?(?:为|：).{0,10}0\.7.{0,10}(?:至|—|-).{0,10}2\.3/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:横带.{0,10}(?:就是|等于|诊断为).{0,10}cinctum|网纹.{0,10}(?:就是|等于|诊断为).{0,10}suspectum)/i,
  );
  assert.doesNotMatch(editorialText, /食谱(?:仅|只)(?:有|包括|包含)?.{0,10}(?:鸟)?蛋/);
  assert.doesNotMatch(
    editorialText,
    /美国毒蜥(?:是|属于).{0,8}(?:完全|固定|全年)?夜行/,
  );
  assert.doesNotMatch(
    editorialText,
    /美国毒蜥(?:拥有|具有|依靠).{0,15}(?:中空上颌长牙|蛇式毒牙)/,
  );
  assert.doesNotMatch(editorialText, /咬伤(?:从不|从未|不会)致死[。；]/);
  assert.doesNotMatch(
    editorialText,
    /孵化期(?:为|约为|长达).{0,10}9.{0,5}(?:至|—|-).{0,5}12\s*个月/,
  );
  assert.doesNotMatch(
    editorialText,
    /exenatide.{0,20}(?:直接|持续).{0,10}(?:提取自|采自|取自).{0,10}(?:美国毒蜥|毒液)/i,
  );

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-30');
  assert.equal(profile.updatedAt, '2026-08-30');
});

test('registers the Ringed Caecilian as a complete Siphonops annulatus profile', async () => {
  const profile = findSpecies('ringed-caecilian');

  assert.equal(profile.id, 'species-siphonops-annulatus');
  assert.equal(profile.slug, 'ringed-caecilian');
  assert.equal(profile.names.zh, '环纹蚓螈');
  assert.equal(profile.names.en, 'Ringed Caecilian');
  assert.deepEqual(profile.names.aliases, [
    'Ringed Caecilia',
    'Ilulo Anillado',
    'Cecília-anelada',
  ]);
  assert.equal(profile.scientificName, 'Siphonops annulatus');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Amphibia', '两栖纲'],
      ['order', 'Gymnophiona', '蚓螈目'],
      ['family', 'Siphonopidae', '环管蚓科'],
      ['genus', 'Siphonops', '环管蚓属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'unknown',
      assessedYear: 2014,
      criteria: undefined,
    },
  );
  assert.deepEqual(profile.distribution.realms, ['terrestrial']);
  assert.deepEqual(profile.distribution.continents, ['南美洲']);
  assert.deepEqual(profile.distribution.countries, [
    '阿根廷',
    '玻利维亚',
    '巴西',
    '哥伦比亚',
    '厄瓜多尔',
    '圭亚那',
    '秘鲁',
    '苏里南',
    '委内瑞拉',
  ]);
  assert.deepEqual(profile.distribution.endemicTo, ['南美洲']);
  assert.deepEqual(
    {
      max: profile.measurements.length?.max,
      unit: profile.measurements.length?.unit,
    },
    { max: 0.72, unit: 'm' },
  );
  assert.match(
    profile.measurements.length?.note ?? '',
    /单只.{0,20}保存标本.{0,30}极端记录.{0,40}不代表.{0,20}典型/,
  );
  assert.equal(profile.measurements.weight, undefined);
  assert.deepEqual(profile.metrics, {});
  assert.equal(profile.storySections?.length, 6);
  assert.equal(new Set(profile.storySections?.map(({ key }) => key)).size, 6);
  assert.ok(profile.keyFacts.length >= 18);
  assert.ok(profile.conservationActions.length >= 7);
  assert.equal(profile.featuredStats.length, 4);
  assert.equal(new Set(profile.featuredStats.map(({ key }) => key)).size, 4);

  await assertGeneratedImageSet({
    profile,
    slug: 'ringed-caecilian',
    basenames: [
      '01-cacao-agroforest-adult-portrait',
      '02-annuli-and-blunt-head-profile',
      '03-shallow-smooth-walled-tunnel',
      '04-root-chamber-egg-attendance',
      '05-maternal-dermatophagy-hatchlings',
      '06-cacao-soil-active-search',
    ],
  });

  assert.equal(profile.sources.length, 18);
  assert.equal(new Set(profile.sources.map(({ url }) => url)).size, 18);
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-30'));
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );
  for (const requiredUrl of [
    'https://amphibiansoftheworld.amnh.org/Amphibia/Gymnophiona/Siphonopidae/Siphonops/Siphonops-annulatus',
    'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=668505',
    'https://doi.org/10.11646/zootaxa.2874.1.3',
    'https://doi.org/10.2305/IUCN.UK.2014-1.RLTS.T59593A43784684.en',
    'https://doi.org/10.11646/zootaxa.2984.1.1',
    'https://doi.org/10.1098/rsbl.2008.0217',
    'https://doi.org/10.1111/azo.12254',
    'https://doi.org/10.1126/science.adi5379',
    'https://doi.org/10.1038/s41598-018-22005-5',
    'https://doi.org/10.1016/j.isci.2020.101234',
    'https://doi.org/10.21757/0103-3816.2015v27n3p233-238',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `ringed-caecilian sources should include ${requiredUrl}`,
    );
  }

  const storyBodies = new Map(
    profile.storySections?.map(({ key, body }) => [key, body]) ?? [],
  );
  const galleryCaptions = new Map(
    profile.media.gallery?.map(({ image, caption }) => [image.split('/').at(-1), caption]) ?? [],
  );
  const editorialText = [
    profile.summary,
    profile.description,
    profile.conservation.assessor ?? '',
    profile.distribution.range,
    ...profile.habitats.flatMap(({ name, description }) => [name, description]),
    profile.measurements.length?.note ?? '',
    profile.diet.description,
    ...(profile.activity ?? []),
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    profile.media.alt,
    ...(profile.media.gallery ?? []).flatMap(({ alt, title, caption }) => [
      alt,
      title,
      caption ?? '',
    ]),
  ].join(' ');

  assert.match(
    profile.description,
    /IUCN.{0,30}2014 年无危.{0,30}全球种群趋势和数量仍未知/,
  );
  assert.match(
    profile.distribution.range,
    /相隔区域.{0,50}采集空缺.{0,50}未解决的种界.{0,80}法属圭亚那.{0,30}质疑.{0,30}巴拉圭.{0,30}凭证.{0,30}乌拉圭.{0,30}推测/,
  );
  assert.match(
    storyBodies.get('an-amphibian-without-legs') ?? '',
    /没有四肢.{0,50}属于两栖纲.{0,80}蚓螈目环管蚓科.{0,60}旧资料.{0,30}口径已经改变/,
  );
  assert.match(
    storyBodies.get('lubricated-soil-tunnels') ?? '',
    /黏液腺.{0,40}含脂质.{0,50}光滑.{0,20}隧道.{0,70}20 厘米.{0,30}不是.{0,30}整个物种/,
  );
  assert.match(
    storyBodies.get('two-ends-two-gland-systems') ?? '',
    /齿相关腺.{0,50}酶活性.{0,70}尚未证实毒性和有效注入.{0,60}不能.{0,30}毒牙/,
  );
  assert.match(
    storyBodies.get('maternal-skin-feeding') ?? '',
    /暂时性.{0,20}多尖.{0,20}牙齿.{0,40}外层表皮.{0,80}一次.{0,20}七分钟.{0,80}不能.{0,30}固定日程/,
  );
  assert.match(
    storyBodies.get('oviduct-milk-provisioning') ?? '',
    /输卵管腺.{0,60}脂质和碳水化合物.{0,60}约两个月.{0,30}泄殖孔.{0,70}没有乳房或乳头.{0,80}触发机制仍待检验/,
  );
  assert.match(
    storyBodies.get('wide-range-hidden-questions') ?? '',
    /2014 年列为无危.{0,70}全球数量和趋势没有可靠估计.{0,80}采集空缺或未识别谱系/,
  );
  assert.match(
    galleryCaptions.get('02-annuli-and-blunt-head-profile.webp') ?? '',
    /触突孔.{0,40}(?:未稳定分辨|不能稳定分辨).{0,60}不能.{0,30}环沟计数/,
  );
  assert.match(
    galleryCaptions.get('03-shallow-smooth-walled-tunnel.webp') ?? '',
    /不能证明.{0,30}挖掘.{0,40}长期占用.{0,40}真实深度.{0,40}完整洞系/,
  );
  assert.match(
    galleryCaptions.get('04-root-chamber-egg-attendance.webp') ?? '',
    /八枚卵.{0,40}受控构图.{0,50}不能.{0,40}亲缘.{0,50}物种级窝卵数.{0,50}孵化成功率/,
  );
  assert.match(
    galleryCaptions.get('05-maternal-dermatophagy-hatchlings.webp') ?? '',
    /五只幼体.{0,50}接触姿态.{0,50}不能证明.{0,30}吞咽.{0,70}不表现泄殖腔分泌物/,
  );
  assert.match(
    galleryCaptions.get('06-cacao-soil-active-search.webp') ?? '',
    /零动物.{0,30}不能证明缺失.{0,70}检测结果.{0,50}丰度.{0,50}无扰动/,
  );

  assert.doesNotMatch(editorialText, /Siphonops annulatus.{0,30}(?:命名于|描述于).{0,10}1820/);
  assert.doesNotMatch(editorialText, /现行(?:分类|分类链).{0,30}Caeciliidae|属于蚓螈科/);
  assert.doesNotMatch(editorialText, /全球种群(?:保持|为|呈).{0,10}稳定/);
  assert.doesNotMatch(editorialText, /连续(?:遍布|分布于).{0,20}南美洲/);
  assert.doesNotMatch(editorialText, /(?:一般|通常|成体).{0,15}(?:长|可达).{0,10}72\s*厘米/);
  assert.doesNotMatch(editorialText, /环纹蚓螈(?:是|属于).{0,8}(?:完全|固定|全年)?夜行/);
  assert.doesNotMatch(editorialText, /(?:已经|已被)?证实.{0,20}(?:毒牙|注毒|毒液咬合)/);
  assert.doesNotMatch(editorialText, /每(?:三天|64 小时).{0,30}(?:食皮|吃母皮).{0,20}七分钟/);
  assert.doesNotMatch(editorialText, /(?:乳房|乳头).{0,20}(?:分泌|喂养|哺乳)/);
  assert.doesNotMatch(editorialText, /育幼(?:固定|总共|长达).{0,10}(?:3|三|5|五|6|六)个月/);

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-30');
  assert.equal(profile.updatedAt, '2026-08-30');
});

test('registers the Surinam Toad as a complete Pipa pipa profile', async () => {
  const profile = findSpecies('surinam-toad');

  assert.equal(profile.id, 'species-pipa-pipa');
  assert.equal(profile.slug, 'surinam-toad');
  assert.equal(profile.names.zh, '负子蟾');
  assert.equal(profile.names.en, 'Surinam Toad');
  assert.deepEqual(profile.names.aliases, [
    'Suriname Toad',
    'Common Surinam Toad',
    'Star-fingered Frog',
    'Surinam Water-toad',
  ]);
  assert.equal(profile.scientificName, 'Pipa pipa');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Amphibia', '两栖纲'],
      ['order', 'Anura', '无尾目'],
      ['family', 'Pipidae', '负子蟾科'],
      ['genus', 'Pipa', '负子蟾属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'stable',
      assessedYear: 2021,
      criteria: undefined,
    },
  );

  assert.deepEqual(profile.distribution.realms, ['freshwater']);
  assert.deepEqual(profile.distribution.continents, ['南美洲']);
  assert.deepEqual(profile.distribution.countries, [
    '玻利维亚',
    '巴西',
    '哥伦比亚',
    '厄瓜多尔',
    '法属圭亚那',
    '圭亚那',
    '秘鲁',
    '苏里南',
    '特立尼达和多巴哥',
    '委内瑞拉',
  ]);
  assert.deepEqual(profile.distribution.endemicTo, ['南美洲']);
  assert.ok(!profile.distribution.countries.includes('波多黎各'));
  assert.match(
    profile.distribution.range,
    /当前广义.{0,20}Pipa pipa.{0,80}(?:五|5)个.{0,15}(?:OTU|遗传谱系).{0,80}(?:种界|谱系边界|范围边缘).{0,30}(?:未解决|仍需|待修订)/i,
  );
  assert.ok(profile.habitats.length >= 3);
  assert.ok(profile.habitats.every(({ realm }) => realm === 'freshwater'));
  assert.equal(profile.habitats.filter(({ isPrimary }) => isPrimary).length, 1);

  assert.deepEqual(
    {
      max: profile.measurements.length?.max,
      unit: profile.measurements.length?.unit,
    },
    { max: 20, unit: 'cm' },
  );
  assert.equal(profile.measurements.length?.min, undefined);
  assert.equal(profile.measurements.length?.typical, undefined);
  assert.match(
    profile.measurements.length?.note ?? '',
    /已发表.{0,20}(?:吻肛长)?.{0,20}极端(?:值|记录).{0,40}(?:不是|不代表).{0,30}(?:典型|常见)/i,
  );
  assert.match(
    profile.measurements.length?.note ?? '',
    /(?:7|7\.0).{0,20}(?:厘米|cm).{0,60}(?:不是|不能|不构成).{0,30}(?:全物种|统一).{0,15}下限/i,
  );
  assert.equal(profile.measurements.weight, undefined);
  assert.deepEqual(profile.metrics, {});

  assert.deepEqual(profile.diet.types, ['carnivore']);
  assert.match(
    profile.diet.description,
    /(?:惯性)?吸食.{0,70}前肢.{0,40}(?:协同|围堵|抓取)/,
  );
  assert.equal(profile.storySections?.length, 6);
  assert.equal(new Set(profile.storySections?.map(({ key }) => key)).size, 6);
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) => label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(profile.keyFacts.length >= 24);
  assert.ok(profile.threats.length >= 6);
  assert.ok(profile.conservationActions.length >= 8);
  assert.equal(profile.featuredStats.length, 4);
  assert.equal(new Set(profile.featuredStats.map(({ key }) => key)).size, 4);
  const featuredStatText = profile.featuredStats
    .flatMap(({ label, value, unit, note }) => [label, value, unit ?? '', note ?? ''])
    .join(' ');
  assert.doesNotMatch(
    featuredStatText,
    /(?:^|\D)(?:96|273)(?:\D|$)|77\s*(?:至|—|–|-)\s*136|20\s*(?:cm|厘米)|7\.7/i,
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'surinam-toad',
    basenames: [
      '01-leaf-litter-adult-cover',
      '02-flattened-body-and-fingertips',
      '03-floodplain-blackwater-habitat',
      '04-suction-feeding-small-fish',
      '05-closed-dorsal-brood-chambers',
      '06-floodplain-water-survey',
    ],
  });

  assert.equal(profile.sources.length, 18);
  assert.equal(new Set(profile.sources.map(({ url }) => url)).size, 18);
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-30'));
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );
  for (const requiredUrl of [
    'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Pipidae/Pipinae/Pipa/Pipa-pipa',
    'https://doi.org/10.2305/IUCN.UK.2023-1.RLTS.T58163A85900348.en',
    'https://api.crossref.org/works/10.2305/IUCN.UK.2023-1.RLTS.T58163A85900348.en',
    'https://eol.org/pages/332922',
    'https://bioweb.bio/faunaweb/amphibiaweb/FichaEspecie/Pipa%20pipa',
    'https://doi.org/10.1016/j.ympev.2022.107442',
    'https://www.jstor.org/stable/3892485',
    'https://doi.org/10.11606/1807-0205/2022.62.008',
    'https://doi.org/10.1007/s00359-026-01838-w',
    'https://pubmed.ncbi.nlm.nih.gov/10629097/',
    'https://www.seh-herpetology.org/journals/herpetology-notes/back-issues/volume-7-2014',
    'https://doi.org/10.1242/jeb.043380',
    'https://doi.org/10.1643/CH-16-510',
    'https://doi.org/10.1002/jmor.20707',
    'https://doi.org/10.2307/1439751',
    'https://doi.org/10.2307/1439843',
    'https://herpetologynotes.org/index.php/hn/article/download/107/193/3738',
    'https://doi.org/10.17161/randa.v30i1.20954',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `surinam-toad sources should include ${requiredUrl}`,
    );
  }
  assert.ok(
    !profile.sources.some(
      ({ url }) =>
        url ===
        'https://doi.org/10.2305/IUCN.UK.2015-4.RLTS.T58163A61414791.en',
    ),
    'the historical 2015-4 DOI should not displace current profile evidence',
  );

  const storyBodies = new Map(profile.storySections?.map(({ key, body }) => [key, body]) ?? []);
  const mediaTexts = new Map(
    [profile.media, ...(profile.media.gallery ?? [])].map(({ image, alt, caption }) => [
      image?.split('/').at(-1) ?? '',
      [alt, caption ?? ''].join(' '),
    ]),
  );
  const editorialText = [
    profile.summary,
    profile.description,
    profile.conservation.assessor ?? '',
    profile.distribution.range,
    ...profile.habitats.flatMap(({ name, description }) => [name, description]),
    profile.measurements.length?.note ?? '',
    profile.diet.description,
    ...(profile.activity ?? []),
    ...profile.tags,
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [label, title, body]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    profile.media.alt,
    ...(profile.media.gallery ?? []).flatMap(({ alt, title, caption }) => [
      alt,
      title,
      caption ?? '',
    ]),
  ].join(' ');

  assert.match(
    storyBodies.get('a-body-built-for-still-water') ?? '',
    /(?:宽而|身体).{0,30}扁平.{0,50}三角(?:形|状)?.{0,15}头.{0,80}(?:枯叶|落叶)/,
  );
  assert.match(editorialText, /高度水栖/);
  assert.match(
    editorialText,
    /(?:枯叶|落叶)(?:般|状|一样).{0,20}(?:轮廓|体形|身体)|(?:轮廓|体形|身体).{0,20}(?:像|如同|近似).{0,10}(?:枯叶|落叶)/,
  );
  assert.match(
    editorialText,
    /(?:微小|很小|小型).{0,10}(?:无眼睑|没有眼睑).{0,20}(?:背位眼|位于背面|眼位于背面)/,
  );
  assert.match(editorialText, /后足.{0,20}(?:全蹼|完全蹼化|宽蹼)/);
  assert.match(
    editorialText,
    /(?:细长|长).{0,10}(?:无蹼|不具蹼).{0,15}前指|前指.{0,20}(?:细长|很长).{0,20}(?:无蹼|不具蹼)/,
  );
  assert.match(
    storyBodies.get('tongueless-suction') ?? '',
    /没有舌.{0,60}(?:惯性)?吸食.{0,80}前肢.{0,40}(?:协同|围堵|抓取)/,
  );
  assert.match(
    storyBodies.get('turnover-egg-transfer') ?? '',
    /卵.{0,50}(?:雄体|雄性).{0,20}腹部.{0,60}(?:落到|转移到).{0,30}(?:雌体|雌性).{0,20}背部.{0,80}皮肤.{0,30}(?:随后|之后).{0,30}(?:增生|包围)/,
  );
  assert.match(
    storyBodies.get('turnover-egg-transfer') ?? '',
    /(?:独立.{0,20}(?:临时|暂时性)|(?:临时|暂时性).{0,20}独立).{0,20}(?:育儿室|育幼室|孵育室)/,
  );
  assert.match(
    storyBodies.get('larval-life-inside-skin') ?? '',
    /(?:育儿室|育幼室|孵育室).{0,50}内营养性?.{0,20}(?:蝌蚪样)?幼体.{0,60}(?:尾吸收|变态).{0,60}(?:小蛙|幼蛙).{0,30}(?:离开|出幼)/,
  );
  assert.match(storyBodies.get('larval-life-inside-skin') ?? '', /没有自由生活、摄食的蝌蚪期/);
  assert.match(
    editorialText,
    /一个.{0,15}圈养.{0,20}批次.{0,30}96 枚.{0,30}76 枚.{0,25}背部.{0,30}20 枚.{0,25}散落/,
  );
  assert.match(editorialText, /同一批次.{0,40}(?:第 )?77 至 136 天.{0,50}陆续.{0,20}(?:出幼|离开)/);
  assert.match(editorialText, /96 枚.{0,80}(?:不是|不代表|不能).{0,40}(?:固定|物种常数|典型)/);
  assert.match(
    editorialText,
    /77 至 136 天.{0,80}(?:不是|不代表|不能).{0,40}(?:固定|物种常数|典型)/,
  );
  assert.match(
    storyBodies.get('one-name-five-lineages') ?? '',
    /2022 年.{0,60}(?:传统种名|传统 Pipa pipa).{0,60}(?:五|5)个.{0,15}(?:谱系|OTU).{0,80}(?:候选边界|核基因|空间采样)/i,
  );
  assert.match(
    editorialText,
    /IUCN.{0,40}2021 年.{0,30}(?:现行)?评估.{0,30}无危.{0,30}(?:趋势)?稳定.{0,80}2023-1.{0,30}(?:发布|版本).{0,30}不是.{0,20}评估年份/i,
  );
  assert.doesNotMatch(
    editorialText,
    /2015-4.{0,40}(?:现行|当前)|(?:现行|当前).{0,40}2015-4/i,
  );

  const coverText = mediaTexts.get('01-leaf-litter-adult-cover.webp') ?? '';
  assert.match(coverText, /一只.{0,20}完整.{0,20}成体/);
  assert.match(coverText, /(?:零只|没有|未见).{0,15}(?:其他)?动物/);

  const morphologyText = mediaTexts.get('02-flattened-body-and-fingertips.webp') ?? '';
  assert.match(morphologyText, /一只.{0,20}完整.{0,20}成体/);
  assert.match(morphologyText, /(?:圆形|圆钝|小型圆头).{0,25}(?:末端器官|指端结构|指尖结构)/);
  assert.match(morphologyText, /(?:像素|画面).{0,30}(?:不能|未能|没有).{0,40}(?:四裂|四叶|四瓣)/);
  assert.match(morphologyText, /不能排除.{0,20}负子蟾属/);
  assert.doesNotMatch(
    morphologyText,
    /(?:清楚|明确|清晰).{0,20}(?:显示|分辨|可见).{0,20}(?:四裂|四叶|四瓣)/,
  );

  const habitatText = mediaTexts.get('03-floodplain-blackwater-habitat.webp') ?? '';
  assert.match(habitatText, /一只.{0,12}完整.{0,12}小型.{0,20}蛙/);
  assert.match(habitatText, /(?:不能|不证明).{0,50}(?:检出率|丰度|密度|占域|种群数量)/);

  const feedingText = mediaTexts.get('04-suction-feeding-small-fish.webp') ?? '';
  assert.match(feedingText, /一只.{0,20}完整.{0,20}蛙/);
  assert.match(feedingText, /一条.{0,20}(?:完整的?)?小鱼.{0,50}(?:口外|嘴外)/);
  assert.match(feedingText, /(?:不能|不证明).{0,50}(?:捕获|吸入|吸食).{0,20}(?:成功|结果)?/);

  const broodText = mediaTexts.get('05-closed-dorsal-brood-chambers.webp') ?? '';
  assert.match(broodText, /一只.{0,15}成体/);
  assert.match(broodText, /背部.{0,25}(?:皮肤)?.{0,20}(?:完整|连续).{0,20}(?:闭合|封闭)/);
  assert.match(broodText, /(?:零只|没有|未见).{0,15}(?:幼体|幼蛙|小蛙|后代)/);
  assert.match(
    broodText,
    /(?:不能|不证明).{0,60}胚胎(?:数量|数).{0,40}(?:日期|日龄|发育时间).{0,40}(?:存活|活性|活力)/,
  );

  const surveyText = mediaTexts.get('06-floodplain-water-survey.webp') ?? '';
  assert.match(surveyText, /两名.{0,15}研究者/);
  assert.match(surveyText, /(?:一个|一只).{0,12}(?:采水瓶|取样瓶|水样瓶|瓶)/);
  assert.match(surveyText, /(?:一块|一个).{0,12}(?:记录板|写字板)/);
  assert.match(surveyText, /一支.{0,12}(?:铅笔|书写工具|笔)/);
  assert.match(surveyText, /(?:零只|没有|未见).{0,12}动物/);
  assert.match(surveyText, /(?:不能|不证明).{0,50}(?:检出|缺失).{0,50}(?:种群趋势|趋势|丰度)/);

  assert.doesNotMatch(editorialText, /弹舌|伸舌捕食|射出舌|投射舌|舌头投射/);
  assert.doesNotMatch(editorialText, /(?:胎生|卵胎生|怀孕|妊娠|子宫)/);
  assert.doesNotMatch(editorialText, /(?:形成|留下|变成|具有).{0,20}(?:永久|终生).{0,10}(?:洞|孔)/);
  assert.doesNotMatch(
    editorialText,
    /(?:没有|不存在|跳过).{0,12}(?:任何|全部)?(?:幼体|幼生)(?:阶段|期)/,
  );
  assert.doesNotMatch(editorialText, /自由游泳.{0,10}(?:蝌蚪|幼体)/);
  assert.doesNotMatch(editorialText, /(?:幼体|小蛙).{0,12}(?:爆出|撕裂|爆裂)/);
  assert.doesNotMatch(editorialText, /(?:^|\D)273(?:\D|$)/);
  assert.doesNotMatch(
    editorialText,
    /(?:每窝|每次|通常)(?:可|会|有|产下|为)?.{0,12}96 枚|固定(?:产卵数|窝卵数|数量)?(?:为|是).{0,8}96 枚/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:孵育|发育|出幼)(?:期|时间).{0,20}(?:固定|均为|总是|通常为).{0,25}77.{0,8}136/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:名义种|Pipa pipa).{0,40}(?:五|5)个.{0,20}(?:已经|均已|正式).{0,15}(?:命名|接受).{0,5}种/i,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:LC|无危).{0,30}(?:证明|表示|意味着).{0,30}(?:五|5).{0,20}(?:稳定|安全)/i,
  );
  assert.doesNotMatch(
    editorialText,
    /IUCN(?:在|于)?\s*2023 年.{0,10}(?:评估|重评)|2023 年.{0,10}IUCN.{0,10}(?:评估|重评)/i,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:通常|一般|典型成体).{0,20}(?:长|可达|为).{0,10}20\s*(?:厘米|cm)/i,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:成体|通常).{0,20}(?:体重|重).{0,15}(?:85|110).{0,10}(?:克|g)/i,
  );
  assert.doesNotMatch(editorialText, /严格(?:完全)?水栖|从不离水/);

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-30');
  assert.equal(profile.updatedAt, '2026-08-30');
});

test('registers the Atlantic Hagfish as a complete Myxine glutinosa profile', async () => {
  const profile = findSpecies('atlantic-hagfish');

  assert.equal(profile.id, 'species-myxine-glutinosa');
  assert.equal(profile.slug, 'atlantic-hagfish');
  assert.equal(profile.names.zh, '大西洋盲鳗');
  assert.equal(profile.names.en, 'Atlantic Hagfish');
  assert.deepEqual(profile.names.aliases, ['Common Hagfish', 'Common Hag']);
  assert.equal(profile.scientificName, 'Myxine glutinosa');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Myxini', '盲鳗纲'],
      ['order', 'Myxiniformes', '盲鳗目'],
      ['family', 'Myxinidae', '盲鳗科'],
      ['genus', 'Myxine', '盲鳗属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'unknown',
      assessedYear: 2009,
      criteria: undefined,
    },
  );

  assert.deepEqual(profile.distribution.realms, ['marine']);
  assert.deepEqual(profile.distribution.continents, ['欧洲', '非洲']);
  assert.deepEqual(profile.distribution.countries, [
    '俄罗斯',
    '挪威',
    '瑞典',
    '丹麦',
    '德国',
    '荷兰',
    '比利时',
    '英国',
    '爱尔兰',
    '法国',
    '西班牙',
    '葡萄牙',
    '摩洛哥',
    '阿尔及利亚',
    '意大利',
    '克罗地亚',
  ]);
  assert.match(
    profile.distribution.range,
    /严格按现行种界.{0,30}(?:东北|东部)大西洋.{0,120}Myxine limosa.{0,30}不纳入本范围/i,
  );
  assert.doesNotMatch(profile.distribution.range, /加拿大|美国|墨西哥/);
  assert.ok(!profile.distribution.countries.includes('加拿大'));
  assert.ok(!profile.distribution.countries.includes('美国'));
  assert.equal(profile.habitats.length, 4);
  assert.ok(profile.habitats.every(({ realm }) => realm === 'marine'));
  assert.equal(profile.habitats.filter(({ isPrimary }) => isPrimary).length, 1);

  assert.deepEqual(
    {
      max: profile.measurements.length?.max,
      unit: profile.measurements.length?.unit,
    },
    { max: 0.45, unit: 'm' },
  );
  assert.equal(profile.measurements.length?.min, undefined);
  assert.equal(profile.measurements.length?.typical, undefined);
  assert.match(
    profile.measurements.length?.note ?? '',
    /严格东大西洋.{0,30}最大总长.{0,30}不代表典型成体.{0,30}79—95 厘米.{0,50}Myxine limosa.{0,20}未纳入/i,
  );
  assert.equal(profile.measurements.weight, undefined);
  assert.deepEqual(profile.metrics, {});

  assert.deepEqual(profile.diet.types, ['carnivore']);
  assert.match(
    profile.diet.description,
    /机会性底栖肉食者和食腐者.{0,80}虾类.{0,50}水母尸体.{0,80}不足以.{0,20}只吃死鱼/,
  );
  assert.equal(profile.storySections?.length, 6);
  assert.equal(new Set(profile.storySections?.map(({ key }) => key)).size, 6);
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) => label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.equal(profile.keyFacts.length, 32);
  assert.equal(profile.threats.length, 6);
  assert.equal(profile.conservationActions.length, 8);
  assert.equal(profile.featuredStats.length, 4);
  assert.equal(new Set(profile.featuredStats.map(({ key }) => key)).size, 4);

  await assertGeneratedImageSet({
    profile,
    slug: 'atlantic-hagfish',
    basenames: [
      '01-muddy-seafloor-adult-cover',
      '02-blunt-head-and-sensory-tentacles',
      '03-mud-burrow-benthic-habitat',
      '04-slime-thread-defense-cloud',
      '05-single-body-overhand-knot',
      '06-empty-trap-fishery-monitoring',
    ],
  });

  assert.equal(profile.sources.length, 24);
  assert.equal(new Set(profile.sources.map(({ url }) => url)).size, 24);
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-31'));
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/rest/AphiaRecordByAphiaID/101170',
    'https://www.marinespecies.org/rest/AphiaRecordByAphiaID/271309',
    'https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?spid=6425',
    'https://doi.org/10.1111/jzs.12035',
    'https://spo.nmfs.noaa.gov/sites/default/files/pdf-content/1995/933/wisner.pdf',
    'https://waves-vagues.dfo-mpo.gc.ca/library-bibliotheque/41045324.pdf',
    'https://pmc.ncbi.nlm.nih.gov/articles/PMC12699212/',
    'https://helloocean.nmmba.gov.tw/nmmba_front/SpecimenDetail.aspx?id=39639',
    'https://doi.org/10.2305/IUCN.UK.2011-1.RLTS.T196057A8988080.en',
    'https://portals.iucn.org/library/efiles/documents/RL-262-001.pdf',
    'https://www.fao.org/3/i5712e/i5712e.pdf',
    'https://assets.publishing.service.gov.uk/media/5a7c89e1e5274a0bb7cb7b36/SEA8_TechRep_Fish_of_BI.pdf',
    'https://doi.org/10.1017/S0025315400024413',
    'https://doi.org/10.1038/s41598-017-17557-x',
    'https://doi.org/10.1098/rspb.2014.2210',
    'https://doi.org/10.1242/jeb.37.3.474',
    'https://doi.org/10.1007/BF00318754',
    'https://doi.org/10.1111/j.1463-6395.1981.tb00623.x',
    'https://doi.org/10.1038/s41598-018-27975-0',
    'https://doi.org/10.1038/188595a0',
    'https://doi.org/10.1111/jzo.12752',
    'https://doi.org/10.1242/jeb.172254',
    'https://doi.org/10.1016/j.marenvres.2020.105097',
    'https://www.fishbase.se/summary/Myxine-glutinosa.html',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `atlantic-hagfish sources should include ${requiredUrl}`,
    );
  }

  const storyBodies = new Map(
    profile.storySections?.map(({ key, body }) => [key, body]) ?? [],
  );
  const mediaTexts = new Map(
    [profile.media, ...(profile.media.gallery ?? [])].map(
      ({ image, alt, caption }) => [
        image?.split('/').at(-1) ?? '',
        [alt, caption ?? ''].join(' '),
      ],
    ),
  );
  const editorialText = [
    profile.summary,
    profile.description,
    profile.conservation.assessor ?? '',
    profile.distribution.range,
    ...profile.habitats.flatMap(({ name, description }) => [name, description]),
    profile.measurements.length?.note ?? '',
    profile.diet.description,
    ...(profile.activity ?? []),
    ...profile.tags,
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    profile.media.alt,
    ...(profile.media.gallery ?? []).flatMap(({ alt, title, caption }) => [
      alt,
      title,
      caption ?? '',
    ]),
  ].join(' ');

  assert.match(
    storyBodies.get('one-name-two-atlantics') ?? '',
    /1995 年.{0,30}Myxine limosa.{0,40}2013 年.{0,20}16S 与 COI.{0,80}加拿大渔业.{0,30}95 厘米.{0,50}西大西洋种/i,
  );
  assert.match(
    storyBodies.get('six-pouches-two-exits') ?? '',
    /单一鼻孔.{0,50}六对.{0,20}鳃.{0,50}每侧六条排水管.{0,50}一个外部鳃孔.{0,50}不是六对外露鳃裂/,
  );
  assert.match(
    storyBodies.get('slime-built-in-seawater') ?? '',
    /蛋白丝束.{0,30}黏蛋白.{0,60}不到一秒.{0,30}纤维水凝胶.{0,60}受控材料混合.{0,30}不是野外捕食反应计时/,
  );
  assert.match(
    storyBodies.get('knot-without-a-jaw') ?? '',
    /Oslofjord.{0,40}打结.{0,50}清除黏液.{0,60}美国 Massachusetts.{0,40}Myxine limosa.{0,70}不能照搬北美数据/i,
  );
  assert.match(
    storyBodies.get('least-concern-needs-a-recheck') ?? '',
    /LC.{0,20}2009 年.{0,70}严格东大西洋.{0,40}趋势没有可靠综合/i,
  );
  assert.match(
    storyBodies.get('least-concern-needs-a-recheck') ?? '',
    /比从 LC 推导稳定更重要/i,
  );

  const coverText = mediaTexts.get('01-muddy-seafloor-adult-cover.webp') ?? '';
  assert.match(coverText, /一只完整.{0,30}大西洋盲鳗/);
  assert.match(coverText, /(?:没有|未见).{0,10}其他动物/);

  const headText =
    mediaTexts.get('02-blunt-head-and-sensory-tentacles.webp') ?? '';
  assert.match(
    headText,
    /不是可计数的标本诊断.{0,30}不能核定全部触须.{0,20}内部鳃囊.{0,20}黏液孔数量/,
  );
  assert.match(
    headText,
    /不能判断性别.{0,10}年龄.{0,10}体长.{0,10}深度.{0,10}地点/,
  );

  const burrowText = mediaTexts.get('03-mud-burrow-benthic-habitat.webp') ?? '';
  assert.match(
    burrowText,
    /不能证明.{0,30}开挖.{0,20}长期占用.{0,30}不能确定巢穴.{0,20}固定隧道.{0,20}水深.{0,10}盐度.{0,10}温度.{0,10}地点.{0,10}昼夜节律/,
  );

  const slimeText = mediaTexts.get('04-slime-thread-defense-cloud.webp') ?? '';
  assert.match(
    slimeText,
    /不能确定刺激来源.{0,10}分泌量.{0,10}丝线数量.{0,10}展开速度.{0,10}防御功能.{0,10}结果/,
  );
  assert.match(slimeText, /外部鳃孔.{0,15}不是黏液喷嘴/);

  const knotText = mediaTexts.get('05-single-body-overhand-knot.webp') ?? '';
  assert.match(
    knotText,
    /不能判断结的形成方向.{0,10}力量.{0,10}持续时间.{0,10}用途.{0,10}频率/,
  );
  assert.match(knotText, /不把美国样本.{0,30}实验数值.{0,20}现行东大西洋种/);

  const monitoringText =
    mediaTexts.get('06-empty-trap-fishery-monitoring.webp') ?? '';
  assert.match(monitoringText, /两名工作人员.{0,30}空圆筒陷阱.{0,20}记录板/);
  assert.match(
    monitoringText,
    /零只动物可见不能证明检出.{0,10}缺失.{0,10}丰度.{0,10}趋势.{0,10}渔具合规.{0,10}保护成效/,
  );
  assert.match(monitoringText, /不代表特定国家.{0,10}机构.{0,20}标准盲鳗渔具/);

  assert.match(
    editorialText,
    /现行分类.{0,30}东大西洋 Myxine glutinosa.{0,20}西大西洋 Myxine limosa.{0,50}北美.{0,50}不能继续混用/i,
  );
  assert.match(
    editorialText,
    /IUCN.{0,30}2009 年无危评估.{0,60}早于现行.{0,20}拆分.{0,50}东大西洋种群趋势仍未知/i,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:通常|一般|典型成体).{0,20}(?:为|可达|约为).{0,10}(?:79|95)\s*(?:厘米|cm)/i,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:最大|最长).{0,12}(?:为|可达|达到).{0,10}(?:79|95)\s*(?:厘米|cm)/i,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:全球种群|东大西洋种群)(?:保持|呈|为).{0,10}(?:稳定|stable)/i,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:具有|拥有|可见|解剖有).{0,12}(?:六|6)对?外(?:部|露)鳃(?:孔|裂)/,
  );
  assert.doesNotMatch(
    editorialText,
    /大西洋盲鳗.{0,10}(?:完全失明|完全没有光感|没有任何光感)/,
  );
  assert.doesNotMatch(
    editorialText,
    /大西洋盲鳗(?:只|仅)(?:吃|取食).{0,12}(?:死鱼|鱼类腐肉)/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:典型|通常).{0,20}(?:响应|到达)(?:时间)?(?:为|是).{0,15}(?:2|二)\s*分钟/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:野外|捕食者攻击).{0,25}(?:不到|少于|<)\s*(?:1|一)\s*秒/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:大西洋盲鳗|Myxine glutinosa).{0,40}(?:黏液)?.{0,15}(?:堵塞|堵住).{0,12}(?:捕食者)?鳃/i,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:10|十)次.{0,30}(?:5|五)次.{0,20}(?:反手结|overhand)/i,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:每年|每窝).{0,20}(?:20|二十).{0,8}(?:至|—|-).{0,8}(?:30|三十).{0,10}枚卵|全年繁殖/,
  );
  assert.doesNotMatch(profile.threats.join(' '), /加拿大|美国|缅因/);
  assert.doesNotMatch(
    editorialText,
    /(?:空陷阱|零捕获)(?:足以)?(?:证明|表示|意味着)(?:当地|该地)?(?:没有|缺失|下降)/,
  );

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-31');
  assert.equal(profile.updatedAt, '2026-08-31');
});

test('registers the Ocellate Torpedo as a complete Torpedo torpedo profile', async () => {
  const profile = findSpecies('ocellate-torpedo');

  assert.equal(profile.id, 'species-torpedo-torpedo');
  assert.equal(profile.slug, 'ocellate-torpedo');
  assert.equal(profile.names.zh, '眼斑电鳐');
  assert.equal(profile.names.en, 'Ocellate Torpedo');
  assert.ok(profile.names.aliases.includes('Common Torpedo'));
  assert.ok(!profile.names.aliases.includes('Atlantic Torpedo'));
  assert.equal(profile.scientificName, 'Torpedo torpedo');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Chondrichthyes', '软骨鱼纲'],
      ['order', 'Torpediniformes', '电鳐目'],
      ['family', 'Torpedinidae', '电鳐科'],
      ['genus', 'Torpedo', '电鳐属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'VU',
      trend: 'decreasing',
      assessedYear: 2020,
      criteria: 'A2bd',
    },
  );

  assert.deepEqual(profile.distribution.realms, ['marine']);
  assert.deepEqual(profile.distribution.continents, ['欧洲', '非洲', '亚洲']);
  assert.match(
    profile.distribution.range,
    /地中海.{0,30}马尔马拉海.{0,60}比斯开湾南部.{0,30}安哥拉/,
  );
  assert.match(
    profile.distribution.range,
    /(?:不包括|排除|不纳入).{0,8}黑海|黑海.{0,12}(?:不在|排除|未纳入)/,
  );
  assert.doesNotMatch(
    profile.distribution.countries.join(' '),
    /俄罗斯|保加利亚|罗马尼亚|乌克兰|格鲁吉亚/,
  );
  assert.ok(profile.distribution.countries.includes('土耳其'));
  assert.equal(profile.habitats.length, 3);
  assert.ok(profile.habitats.every(({ realm }) => realm === 'marine'));
  assert.equal(profile.habitats.filter(({ isPrimary }) => isPrimary).length, 1);

  assert.deepEqual(
    {
      max: profile.measurements.length?.max,
      unit: profile.measurements.length?.unit,
    },
    { max: 0.6, unit: 'm' },
  );
  assert.equal(profile.measurements.length?.min, undefined);
  assert.equal(profile.measurements.length?.typical, undefined);
  assert.match(
    profile.measurements.length?.note ?? '',
    /FAO.{0,20}(?:汇编)?最大总长.{0,30}(?:60 厘米|0\.6 米).{0,30}常见总长.{0,20}30.{0,8}40/i,
  );
  assert.equal(profile.measurements.weight, undefined);
  assert.deepEqual(profile.metrics, {});

  assert.ok(
    profile.diet.types.includes('carnivore') ||
      profile.diet.types.includes('piscivore'),
  );
  assert.match(
    profile.diet.description,
    /鱼类为主.{0,50}(?:兼食|也会取食|同时取食).{0,20}甲壳类/,
  );
  assert.equal(profile.storySections?.length, 6);
  assert.equal(new Set(profile.storySections?.map(({ key }) => key)).size, 6);
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.equal(profile.keyFacts.length, 34);
  assert.equal(profile.threats.length, 5);
  assert.equal(profile.conservationActions.length, 6);
  assert.equal(profile.featuredStats.length, 4);
  assert.equal(new Set(profile.featuredStats.map(({ key }) => key)).size, 4);

  await assertGeneratedImageSet({
    profile,
    slug: 'ocellate-torpedo',
    basenames: [
      '01-mediterranean-soft-bottom-portrait',
      '02-five-ocelli-diagnostic-dorsal',
      '03-sand-burial-resting',
      '04-ventral-electric-organs',
      '05-small-fish-prey-encounter',
      '06-noncontact-visual-survey',
    ],
  });

  assert.equal(profile.sources.length, 24);
  assert.equal(new Set(profile.sources.map(({ url }) => url)).size, 24);
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-31'));
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/rest/AphiaRecordByAphiaID/271691',
    'https://researcharchive.calacademy.org/research/ichthyology/catalog/fishcatget.asp?tbl=species&genus=Torpedo&species=torpedo',
    'https://fishdb.sinica.edu.tw/chi/chinesequer2.php?D1=&R1=&T1=&cn=&dere=asc&fm=&gc=&me=&orderby=is_accepted_name&page=49&pz=50&vn=',
    'https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T161397A124477382.en',
    'https://nc.iucnredlist.org/redlist/content/attachment_files/2021-2_RL_Stats_Table_7.pdf',
    'https://www.fao.org/4/i3178e/i3178e.pdf',
    'https://www.fao.org/4/i1276b/i1276b12.pdf',
    'https://www.fao.org/3/ca2740en/ca2740en.pdf',
    'https://portals.iucn.org/library/sites/library/files/documents/2019-050-En.pdf',
    'https://www.cambridge.org/core/journals/oryx/article/first-records-of-the-west-african-torpedo-in-cabo-verde-archipelago-eastern-atlantic/2F4DD22111191A25BEBB18CF9168EC97',
    'https://doi.org/10.3989/scimar.2007.71n2213',
    'https://doi.org/10.1080/24750263.2019.1696419',
    'https://doi.org/10.1071/MF9940693',
    'https://raco.cat/index.php/Mzoologica/article/view/90040',
    'https://doi.org/10.1134/S0032945213060118',
    'https://doi.org/10.1111/j.1095-8649.1979.tb03579.x',
    'https://acta.izor.hr/ojs/index.php/acta/article/view/182',
    'https://doi.org/10.3390/ani13182899',
    'https://doi.org/10.1186/2044-5040-1-20',
    'https://doi.org/10.1016/0012-1606(78)90307-X',
    'https://doi.org/10.1085/jgp.44.4.757',
    'https://doi.org/10.1016/S0021-9258(19)69691-2',
    'https://doi.org/10.3989/scimar.04734.16B',
    'https://doi.org/10.1016/j.cub.2021.08.062',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `ocellate-torpedo sources should include ${requiredUrl}`,
    );
  }

  const storyBodies = new Map(
    profile.storySections?.map(({ key, body }) => [key, body]) ?? [],
  );
  const mediaTexts = new Map(
    [profile.media, ...(profile.media.gallery ?? [])].map(
      ({ image, alt, caption }) => [
        image?.split('/').at(-1) ?? '',
        [alt, caption ?? ''].join(' '),
      ],
    ),
  );
  const editorialText = [
    profile.summary,
    profile.description,
    profile.conservation.assessor ?? '',
    profile.distribution.range,
    ...profile.habitats.flatMap(({ name, description }) => [name, description]),
    profile.measurements.length?.note ?? '',
    profile.diet.description,
    ...(profile.activity ?? []),
    ...profile.tags,
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    profile.media.alt,
    ...(profile.media.gallery ?? []).flatMap(({ alt, title, caption }) => [
      alt,
      title,
      caption ?? '',
    ]),
  ].join(' ');

  assert.match(
    storyBodies.get('five-ocelli-usually') ?? '',
    /通常.{0,20}(?:五|5)枚.{0,20}眼斑.{0,80}(?:零|0).{0,8}(?:九|9)枚.{0,30}(?:不是|并非).{0,10}固定/,
  );
  assert.match(
    storyBodies.get('electric-organs-under-disc') ?? '',
    /头部两侧.{0,30}(?:近肾形|肾形)电器官.{0,50}(?:完整皮肤|皮肤下)/,
  );
  assert.match(
    storyBodies.get('voltage-after-birth') ?? '',
    /圈养新生.{0,30}(?:一天|1 天).{0,20}4 伏.{0,50}(?:四个月|4 个月).{0,20}26 伏.{0,50}(?:不能|无法|不代表).{0,20}(?:成年|成体).{0,10}(?:峰值|输出)/,
  );
  assert.match(
    storyBodies.get('ambush-beneath-sand') ?? '',
    /(?:沙中|沉积物中).{0,30}(?:小鱼|活鱼).{0,40}(?:鱼类是主要食物|鱼类为主).{0,30}甲壳类.{0,40}(?:不可见|看不见)/,
  );
  assert.match(
    storyBodies.get('regional-reproduction') ?? '',
    /拉齐奥.{0,30}(?:六|6)个月.{0,30}(?:4|四).{0,8}(?:19|十九).{0,40}塞内加尔.{0,30}(?:六|6).{0,8}(?:八|8)个月.{0,50}(?:地区|区域|地点)/,
  );
  assert.match(
    storyBodies.get('vulnerable-bycatch') ?? '',
    /IUCN.{0,20}2020 年.{0,30}(?:易危|VU).{0,20}(?:下降|decreasing).{0,20}A2bd.{0,50}(?:底拖网|刺网|三层刺网)/i,
  );

  const diagnosticText =
    mediaTexts.get('02-five-ocelli-diagnostic-dorsal.webp') ?? '';
  assert.match(
    diagnosticText,
    /(?:五|5)枚.{0,20}眼斑.{0,40}(?:不是|并非).{0,20}固定.{0,50}(?:不能|无法).{0,30}(?:喷水孔|标本诊断)/,
  );

  const burialText = mediaTexts.get('03-sand-burial-resting.webp') ?? '';
  assert.match(
    burialText,
    /(?:部分| partly|薄层|沉积物|沙).{0,40}(?:眼斑|斑纹).{0,30}(?:不能|无法).{0,15}(?:计数|数量)/i,
  );
  assert.match(
    burialText,
    /(?:不能|无法).{0,30}(?:埋沙方式|挖掘方式|掘穴方式|挖掘行为).{0,30}(?:持续时间|时长|昼夜|时间)/,
  );

  const ventralText =
    mediaTexts.get('04-ventral-electric-organs.webp') ?? '';
  assert.match(
    ventralText,
    /(?:腹面|腹侧).{0,30}(?:电器官|器官).{0,30}(?:教育|概念|重建).{0,40}(?:不能|无法).{0,30}(?:鳃裂|电细胞|柱数).{0,30}(?:计数|数量|电压)/,
  );

  const preyText =
    mediaTexts.get('05-small-fish-prey-encounter.webp') ?? '';
  assert.match(preyText, /一尾.{0,15}电鳐.{0,30}一尾.{0,20}(?:小鱼|虾虎鱼)/);
  assert.match(
    preyText,
    /(?:不能|无法|不证明).{0,20}(?:猎物|取食).{0,25}(?:放电|捕获|摄食).{0,30}(?:没有|无).{0,10}(?:可见)?(?:电光|闪电|光效)/,
  );

  const surveyText =
    mediaTexts.get('06-noncontact-visual-survey.webp') ?? '';
  assert.match(surveyText, /一名.{0,15}潜水员.{0,30}(?:没有接触|不接触|保持距离)/);
  assert.match(
    surveyText,
    /(?:不能|无法|不证明).{0,30}(?:检出|占域|占据|丰度).{0,30}(?:种群趋势|趋势).{0,30}(?:监测结果|保护成效|调查结果)/,
  );

  assert.match(
    editorialText,
    /眼斑.{0,30}(?:并非|不是).{0,10}(?:真正|实际)?眼睛/,
  );
  assert.match(
    editorialText,
    /(?:电放电|放电).{0,20}(?:水下)?.{0,12}(?:不可见|看不见).{0,30}(?:闪电|电弧|光弧)/,
  );
  assert.match(
    editorialText,
    /(?:60 厘米|0\.6 米).{0,30}(?:最大|上限).{0,40}(?:30.{0,8}40).{0,20}(?:常见|通常)/,
  );
  assert.match(
    editorialText,
    /2020 年.{0,20}(?:评估|易危|VU).{0,60}2021-2.{0,20}(?:发布|公布)/i,
  );
  assert.match(
    editorialText,
    /(?:地中海|拉齐奥|西西里).{0,50}(?:塞内加尔|西非|比塞大).{0,60}(?:差异|不同|不能.{0,20}(?:外推|通抄|统一))/,
  );
  assert.match(
    editorialText,
    /鱼类为主.{0,40}(?:也|兼|同时).{0,15}(?:吃|食|取食).{0,15}甲壳类/,
  );
  assert.match(
    editorialText,
    /(?:妊娠|胎仔|成熟体长).{0,60}(?:地区|区域|地点|样本).{0,20}(?:不同|差异|边界)/,
  );

  assert.doesNotMatch(
    editorialText,
    /(?:始终|固定|每尾都有|一律)(?:为|有|是)?.{0,8}(?:五|5)枚眼斑/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:会|能|可)(?:在水下)?(?:产生|发出|显示).{0,10}(?:闪电|电弧|蓝色光弧)/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:成年|成体).{0,20}(?:峰值|输出|电压).{0,15}(?:26|4\s*(?:至|→|-).*26)\s*伏/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:通常|常见|典型成体).{0,20}(?:为|可达|达到).{0,12}(?:60 厘米|0\.6 米)/,
  );
  assert.doesNotMatch(
    editorialText,
    /IUCN(?:在|于)?\s*2021(?:-2)?\s*年?.{0,15}(?:评估|重评)|2021(?:-2)?\s*年?.{0,15}IUCN.{0,15}(?:评估|重评)/i,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:整个|全).{0,8}地中海.{0,30}(?:相同|一致|统一|固定)(?:繁殖|成熟|胎仔|物候)?/,
  );
  assert.doesNotMatch(
    editorialText,
    /眼斑电鳐(?:只|仅)(?:吃|取食|捕食).{0,15}鱼类|食物(?:全部|仅限于)鱼类/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:全范围|全球|所有地区).{0,30}(?:妊娠|胎仔|成熟体长).{0,20}(?:固定|均为|一律)/,
  );
  assert.doesNotMatch(
    surveyText,
    /(?:画面|照片|影像)(?:足以|已经)?(?:证明|表明|显示).{0,20}(?:当地|该地|种群).{0,20}(?:检出|占域|丰度|增长|下降|稳定|趋势)/,
  );

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-31');
  assert.equal(profile.updatedAt, '2026-08-31');
});

test('registers the Australian Lungfish as a complete Neoceratodus forsteri profile', async () => {
  const profile = findSpecies('australian-lungfish');

  assert.equal(profile.id, 'species-neoceratodus-forsteri');
  assert.equal(profile.slug, 'australian-lungfish');
  assert.equal(profile.names.zh, '澳洲肺鱼');
  assert.equal(profile.names.en, 'Australian Lungfish');
  assert.equal(profile.scientificName, 'Neoceratodus forsteri');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Sarcopterygii'],
      ['order', 'Ceratodontiformes'],
      ['family', 'Ceratodontidae'],
      ['genus', 'Neoceratodus'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'EN',
      trend: 'stable',
      assessedYear: 2019,
      criteria: 'B2ab(ii,iii)',
    },
  );

  assert.deepEqual(profile.distribution.realms, ['freshwater']);
  assert.deepEqual(profile.distribution.continents, ['大洋洲']);
  assert.deepEqual(profile.distribution.countries, ['澳大利亚']);
  assert.deepEqual(
    {
      max: profile.measurements.length?.max,
      unit: profile.measurements.length?.unit,
    },
    { max: 1.7, unit: 'm' },
  );
  assert.deepEqual(
    {
      max: profile.measurements.weight?.max,
      unit: profile.measurements.weight?.unit,
    },
    { max: 48, unit: 'kg' },
  );
  assert.deepEqual(profile.metrics.lifespanYears, [50, 80]);

  assert.equal(profile.storySections?.length, 6);
  assert.deepEqual(
    profile.storySections?.map(({ key }) => key),
    [
      'one-lung-mostly-gills',
      'fleshy-fins-continuous-tail',
      'permanent-water-no-aestivation',
      'macrophyte-eggs-without-nest',
      'long-life-masked-recruitment',
      'recovery-plan-connectivity',
    ],
  );
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(profile.keyFacts.length > 0);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);
  assert.equal(profile.featuredStats.length, 4);
  assert.equal(new Set(profile.featuredStats.map(({ key }) => key)).size, 4);
  assert.ok(
    profile.featuredStats.every(
      ({ label, value }) => label.length > 0 && value.length > 0,
    ),
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'australian-lungfish',
    basenames: [
      '01-permanent-river-pool-adult-cover',
      '02-leaf-shaped-fins-diagnostic-profile',
      '03-facultative-surface-air-breath',
      '04-nocturnal-snail-foraging-encounter',
      '05-single-adhesive-egg-macrophyte',
      '06-river-water-edna-monitoring',
    ],
  });

  assert.ok(profile.sources.length >= 5);
  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-31'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );
  for (const requiredUrl of [
    'https://doi.org/10.2305/IUCN.UK.2019-3.RLTS.T122899816A123382021.en',
    'https://www.legislation.gov.au/F2026L00704/asmade/2026-06-09/text/original/pdf',
    'https://www.museum.qld.gov.au/assets/media/project/qm/qm-website/collections-and-research/memoirs/nature-memoirs/nature-volume-21/mqm-n21-2-7-kemp.pdf',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `australian-lungfish sources should include ${requiredUrl}`,
    );
  }

  const storyBodies = new Map(
    profile.storySections?.map(({ key, body }) => [key, body]) ?? [],
  );
  const distributionText = [
    profile.distribution.range,
    ...profile.habitats.flatMap(({ name, description }) => [name, description]),
  ].join(' ');
  const editorialText = [
    profile.summary,
    profile.description,
    profile.conservation.assessor ?? '',
    distributionText,
    profile.measurements.length?.note ?? '',
    profile.measurements.weight?.note ?? '',
    profile.diet.description,
    ...(profile.activity ?? []),
    ...profile.tags,
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    profile.media.alt,
    ...(profile.media.gallery ?? []).flatMap(({ alt, title, caption }) => [
      alt,
      title,
      caption ?? '',
    ]),
  ].join(' ');

  assert.match(
    distributionText,
    /(?=[\s\S]*(?:伯内特|Burnett))(?=[\s\S]*(?:玛丽|Mary))(?=[\s\S]*(?:原生|天然分布|自然种群))/i,
  );
  assert.match(
    distributionText,
    /(?=[\s\S]*(?:移殖|移入|引种|人工引入))(?=[\s\S]*(?:布里斯班|Brisbane))(?=[\s\S]*(?:北派恩|North Pine))(?=[\s\S]*(?:库默拉|Coomera))/i,
  );

  const breathingText = storyBodies.get('one-lung-mostly-gills') ?? '';
  assert.match(
    breathingText,
    /(?=[\s\S]*(?:(?:单个|一个|一枚|不成对).{0,15}肺|肺.{0,12}(?:单个|不成对)))(?=[\s\S]*(?:主要|平时|通常).{0,20}(?:鳃呼吸|依靠鳃|用鳃))(?=[\s\S]*(?:兼性|必要时|低氧).{0,30}(?:空气呼吸|呼吸空气|浮到水面))/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:专性|必须).{0,12}(?:空气呼吸|呼吸空气)|(?:主要|平时).{0,15}(?:依靠|使用|靠)肺呼吸/,
  );

  const permanentWaterText =
    storyBodies.get('permanent-water-no-aestivation') ?? '';
  assert.match(
    permanentWaterText,
    /(?=[\s\S]*(?:不|没有|无法).{0,18}(?:夏眠|旱眠|aestivat))(?=[\s\S]*(?:(?:不|没有|无法).{0,25}(?:干泥|泥中).{0,18}(?:结茧|泥茧|黏液茧)|(?:干泥|泥中).{0,25}(?:不|不会|不能).{0,18}(?:结茧|形成.{0,6}茧)))/i,
  );

  assert.match(
    [
      profile.measurements.length?.note ?? '',
      profile.measurements.weight?.note ?? '',
    ].join(' '),
    /(?:罕见|少见).{0,30}(?:极端|极值|上限|如此体型)|(?:极端|极值|上限).{0,30}(?:罕见|少见)/,
  );
  assert.match(editorialText, /50\s*(?:—|–|-|至)\s*80\s*年/);

  const reproductionText =
    storyBodies.get('macrophyte-eggs-without-nest') ?? '';
  assert.match(
    reproductionText,
    /(?=[\s\S]*(?:卵|卵粒).{0,30}(?:逐枚|单枚|一枚一枚|分别).{0,30}(?:黏附|附着))(?=[\s\S]*(?:大型水生植物|水生植物|沉水植物|macrophyte))(?=[\s\S]*(?:不筑巢|没有巢|无巢))(?=[\s\S]*(?:无亲代照护|没有亲代照护|不护卵|无亲代抚育))/i,
  );

  const recoveryText = storyBodies.get('recovery-plan-connectivity') ?? '';
  assert.match(
    editorialText,
    /IUCN.{0,40}2019 年.{0,35}(?:濒危|EN).{0,35}(?:稳定|stable)/i,
  );
  assert.match(
    recoveryText,
    /(?=[\s\S]*2026 年.{0,35}(?:国家)?恢复计划)(?=[\s\S]*(?:不是|并非|不能替代|没有更新).{0,35}(?:IUCN|红色名录|全球评估))/i,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*IUCN.{0,60}Neoceratodontidae)(?=[\s\S]*(?:澳大利亚动物名录|AFD|2026 年.{0,30}恢复计划).{0,80}Ceratodontidae)/i,
  );

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-31');
  assert.equal(profile.updatedAt, '2026-08-31');
});

test('registers the Atlantic Pyrosome as a complete Pyrosoma atlanticum profile', async () => {
  const profile = findSpecies('atlantic-pyrosome');

  assert.equal(profile.id, 'species-pyrosoma-atlanticum');
  assert.equal(profile.slug, 'atlantic-pyrosome');
  assert.equal(profile.names.zh, '大西洋火体虫');
  assert.equal(profile.names.en, 'Atlantic Pyrosome');
  assert.deepEqual(profile.names.aliases, ['大西洋火體蟲']);
  assert.equal(profile.scientificName, 'Pyrosoma atlanticum');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Thaliacea'],
      ['order', 'Pyrosomatida'],
      ['family', 'Pyrosomatidae'],
      ['genus', 'Pyrosoma'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );

  assert.deepEqual(profile.distribution.realms, ['marine']);
  assert.deepEqual(
    {
      max: profile.measurements.length?.max,
      unit: profile.measurements.length?.unit,
    },
    { max: 0.78, unit: 'm' },
  );

  assert.equal(profile.storySections?.length, 6);
  assert.deepEqual(
    profile.storySections?.map(({ key }) => key),
    [
      'one-colony-many-zooids',
      'filtering-and-jet-propulsion',
      'blue-green-light-open-mechanism',
      'variable-diel-migration',
      'sexual-and-asexual-life-cycle',
      'blooms-and-carbon-transport',
    ],
  );
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(profile.keyFacts.length > 0);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);
  assert.equal(profile.featuredStats.length, 4);
  assert.equal(new Set(profile.featuredStats.map(({ key }) => key)).size, 4);
  assert.ok(
    profile.featuredStats.every(
      ({ label, value }) => label.length > 0 && value.length > 0,
    ),
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'atlantic-pyrosome',
    basenames: [
      '01-open-ocean-colony-cover',
      '02-zooid-texture-open-end-diagnostic',
      '03-blue-green-bioluminescence',
      '04-night-upper-water-migration-context',
      '05-filter-feeding-current-visualization',
      '06-towed-camera-noncontact-monitoring',
    ],
  });

  assert.ok(profile.sources.length >= 5);
  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-31'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/aphia.php?p=taxdetails&id=137250',
    'https://doi.org/10.1002/lol2.10350',
    'https://doi.org/10.3354/meps13465',
    'https://doi.org/10.1093/plankt/fbac006',
    'https://www.nmns.edu.tw/collect/catalog/detail/?id=18286',
    'https://pmc.ncbi.nlm.nih.gov/articles/PMC7576829/',
    'https://pmc.ncbi.nlm.nih.gov/articles/PMC8084940/',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `atlantic-pyrosome sources should include ${requiredUrl}`,
    );
  }

  const storyBodies = new Map(
    profile.storySections?.map(({ key, body }) => [key, body]) ?? [],
  );
  const mediaTexts = new Map(
    [profile.media, ...(profile.media.gallery ?? [])].map(
      ({ image, alt, title, caption }) => [
        image.split('/').at(-1),
        [alt, title ?? '', caption ?? ''].join(' '),
      ],
    ),
  );
  const editorialText = [
    profile.summary,
    profile.description,
    profile.conservation.assessor ?? '',
    profile.distribution.range,
    profile.measurements.length?.note ?? '',
    profile.diet.description,
    ...(profile.activity ?? []),
    ...profile.tags,
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    ...mediaTexts.values(),
  ].join(' ');

  const colonyText = storyBodies.get('one-colony-many-zooids') ?? '';
  assert.match(
    colonyText,
    /(?=[\s\S]*(?:共同被囊|共同的被囊))(?=[\s\S]*(?:许多|众多|成百上千|成千上万).{0,16}(?:个虫|虫体))(?=[\s\S]*(?:不是|并非|不能视为|不等同于).{0,20}(?:单个|一个|单一).{0,8}(?:个体|单体))/,
  );

  const filteringText =
    storyBodies.get('filtering-and-jet-propulsion') ?? '';
  assert.match(
    filteringText,
    /(?=[\s\S]*(?:群体外侧|外侧|外壁).{0,30}(?:吸入|引入|引水|进水))(?=[\s\S]*(?:共同空腔|共用空腔))(?=[\s\S]*(?:共同|群体).{0,12}开口.{0,20}(?:排出|排水|流出))/,
  );

  const lightText =
    storyBodies.get('blue-green-light-open-mechanism') ?? '';
  assert.match(
    lightText,
    /(?=[\s\S]*(?:机制|来源).{0,25}(?:未定|未明|没有定论|仍有争议|尚未解决))(?=[\s\S]*(?:宿主.{0,30}(?:荧光素酶|发光酶|luciferase)|(?:荧光素酶|发光酶|luciferase).{0,30}宿主))(?=[\s\S]*(?:发光细菌|细菌共生体|细菌假说))/i,
  );

  const migrationText = storyBodies.get('variable-diel-migration') ?? '';
  assert.match(
    migrationText,
    /(?=[\s\S]*(?:昼夜垂直迁移|DVM))(?=[\s\S]*利古里亚海)(?=[\s\S]*3\s*毫米.{0,25}90\s*米)(?=[\s\S]*51\s*毫米.{0,25}760\s*米)(?=[\s\S]*(?:不能|不可|不应|并非).{0,45}(?:普遍|全种|全部|所有|固定|通用|外推|一律))/i,
  );

  const lifeCycleText =
    storyBodies.get('sexual-and-asexual-life-cycle') ?? '';
  assert.match(
    lifeCycleText,
    /(?=[\s\S]*cyathozooid)(?=[\s\S]*(?:恰好|正好|固定为|先形成|先产生|形成|产生).{0,16}(?:四|4)\s*个.{0,24}(?:初级|初生|最初|原初).{0,16}ascidiozooid)(?=[\s\S]*(?:随后|再|之后|后者|这些).{0,35}(?:出芽|芽殖))(?=[\s\S]*(?:(?:扩群|扩增|扩大|扩展|增长|增加).{0,20}(?:群体|个虫)|(?:群体|个虫).{0,20}(?:扩群|扩增|扩大|扩展|增长|增加)))/i,
  );

  assert.match(
    editorialText,
    /(?=[\s\S]*(?:未评估|Not Evaluated|\bNE\b))(?=[\s\S]*(?:不等于|并不等于|不代表|不能说明|不能视为).{0,25}(?:安全|无风险|没有风险|无威胁))/i,
  );

  const diagnosticCaption =
    mediaTexts.get('02-zooid-texture-open-end-diagnostic.webp') ?? '';
  assert.match(
    diagnosticCaption,
    /(?:(?:不能|无法|不可).{0,30}(?:替代|作为).{0,30}(?:鉴定|诊断)|(?:不能|无法).{0,30}(?:鉴定|诊断))/,
  );

  const migrationCaption =
    mediaTexts.get('04-night-upper-water-migration-context.webp') ?? '';
  assert.match(
    migrationCaption,
    /(?:单帧|画面|照片|影像).{0,25}(?:不表示|不能|无法|不证明).{0,35}(?:速度|速率)/,
  );

  const monitoringCaption =
    mediaTexts.get('06-towed-camera-noncontact-monitoring.webp') ?? '';
  assert.match(
    monitoringCaption,
    /(?:(?:不能|无法|不证明).{0,45}(?:丰度|数量)|(?:仍需|需要).{0,70}(?:丰度|数量).{0,25}(?:结论|估计|判断|证明|支持))/,
  );

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-31');
  assert.equal(profile.updatedAt, '2026-08-31');
});

test("registers the Venus' Flower Basket as a complete Euplectella aspergillum profile", async () => {
  const profile = findSpecies('venus-flower-basket');

  assert.equal(profile.id, 'species-euplectella-aspergillum');
  assert.equal(profile.slug, 'venus-flower-basket');
  assert.equal(profile.names.zh, '阿氏偕老同穴');
  assert.equal(profile.names.en, "Venus' Flower Basket");
  assert.deepEqual(profile.names.aliases, ['维纳斯花篮']);
  assert.equal(profile.scientificName, 'Euplectella aspergillum');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Porifera'],
      ['class', 'Hexactinellida'],
      ['order', 'Lyssacinosida'],
      ['family', 'Euplectellidae'],
      ['genus', 'Euplectella'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );

  assert.deepEqual(profile.distribution.realms, ['marine']);
  assert.deepEqual(profile.distribution.continents, ['亚洲', '大洋洲']);
  assert.deepEqual(profile.distribution.countries, [
    '菲律宾',
    '印度',
    '马来西亚',
    '澳大利亚',
  ]);
  assert.deepEqual(profile.measurements, {});
  assert.deepEqual(profile.metrics, {});
  assert.equal(profile.storySections?.length, 6);
  assert.deepEqual(
    profile.storySections?.map(({ key }) => key),
    [
      'living-glass-lattice',
      'barbed-soft-sediment-anchor',
      'passive-flow-active-filtering',
      'reproductive-evidence-gap',
      'shrimp-association-with-boundaries',
      'four-subspecies-messy-map',
    ],
  );
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(profile.keyFacts.length > 0);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);
  assert.equal(profile.featuredStats.length, 4);
  assert.deepEqual(
    profile.featuredStats.map(({ key }) => key),
    [
      'revision-supported-depth',
      'anchor-spicule-length',
      'skeletal-hierarchy',
      'recognized-subspecies',
    ],
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'venus-flower-basket',
    basenames: [
      '01-soft-sediment-living-cover',
      '02-terminal-sieve-lattice-diagnostic',
      '03-basalia-soft-sediment-anchoring',
      '04-side-inflow-sieve-outflow-visualization',
      '05-resident-shrimp-pair-context',
      '06-rov-noncontact-monitoring',
    ],
  });

  assert.equal(profile.sources.length, 20);
  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-31'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/aphia.php?p=taxdetails&id=171897',
    'https://doi.org/10.11646/zootaxa.1866.1.3',
    'https://doi.org/10.1016/j.jsb.2006.10.027',
    'https://doi.org/10.1073/pnas.0307843101',
    'https://doi.org/10.1038/s41586-021-03658-1',
    'https://doi.org/10.1103/PhysRevLett.132.208402',
    'https://research.nhm.org/pdfs/31805/31805.pdf',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `venus-flower-basket sources should include ${requiredUrl}`,
    );
  }

  const storyBodies = new Map(
    profile.storySections?.map(({ key, body }) => [key, body]) ?? [],
  );
  const mediaTexts = new Map(
    [profile.media, ...(profile.media.gallery ?? [])].map(
      ({ image, alt, title, caption }) => [
        image.split('/').at(-1),
        [alt, title ?? '', caption ?? ''].join(' '),
      ],
    ),
  );
  const editorialText = [
    profile.summary,
    profile.description,
    profile.distribution.range,
    profile.diet.description,
    ...(profile.activity ?? []),
    ...profile.tags,
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    ...mediaTexts.values(),
  ].join(' ');

  assert.match(
    profile.distribution.range,
    /(?=[\s\S]*砂拉越)(?=[\s\S]*Indonesian Archipelago)(?=[\s\S]*4°31′N、112°55′E)(?=[\s\S]*85\s*(?:至|—|–|-)\s*741\s*米)(?=[\s\S]*(?:凭证|修订))(?=[\s\S]*(?:不是|不能|不可).{0,30}(?:生理极限|直接并入))/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*indonesica.{0,30}190\s*毫米)(?=[\s\S]*australica.{0,35}110.{0,12}150\s*毫米)(?=[\s\S]*260\s*毫米.{0,12}残片)(?=[\s\S]*(?:不能|不可).{0,30}(?:典型|绝对最大).{0,8}体长)/i,
  );

  const structureText = storyBodies.get('living-glass-lattice') ?? '';
  assert.match(
    structureText,
    /(?=[\s\S]*(?:活体|活组织|软组织))(?=[\s\S]*(?:方格|纵横))(?=[\s\S]*(?:双向斜撑|斜撑))(?=[\s\S]*(?:筛板))(?=[\s\S]*(?:不是|并非).{0,25}(?:敞口|花瓶))/,
  );

  const flowText = storyBodies.get('passive-flow-active-filtering') ?? '';
  assert.match(
    flowText,
    /(?=[\s\S]*(?:数值模拟|模拟))(?=[\s\S]*(?:不是|并非).{0,40}(?:野外|原位).{0,20}(?:泵水|摄食量|清除率|测量))(?=[\s\S]*(?:不能|不可).{0,45}(?:被动|流况))/,
  );

  const reproductionText = storyBodies.get('reproductive-evidence-gap') ?? '';
  assert.match(
    reproductionText,
    /(?=[\s\S]*1880\s*年)(?=[\s\S]*(?:其他物种|近缘种))(?=[\s\S]*(?:不足以确定|仍未知|没有补齐).{0,70}(?:性系统|幼体|繁殖季|寿命))/,
  );

  const shrimpText = storyBodies.get('shrimp-association-with-boundaries') ?? '';
  assert.match(
    shrimpText,
    /(?=[\s\S]*(?:一雄一雌|雄.{0,6}雌))(?=[\s\S]*(?:没有证明|不能证明|不证明).{0,65}(?:每个|终身|互利))(?=[\s\S]*(?:其他玻璃海绵|其他.{0,10}宿主))/,
  );

  assert.match(
    editorialText,
    /(?=[\s\S]*(?:未评估|Not Evaluated|\bNE\b))(?=[\s\S]*(?:不代表|不等于|不能说明).{0,25}(?:安全|无危|种群稳定|没有威胁))/i,
  );

  assert.match(
    mediaTexts.get('02-terminal-sieve-lattice-diagnostic.webp') ?? '',
    /(?:不能|不可|无法).{0,30}(?:代替|替代).{0,30}(?:显微诊断|分类检索|凭证)/,
  );
  assert.match(
    mediaTexts.get('04-side-inflow-sieve-outflow-visualization.webp') ?? '',
    /(?=[\s\S]*(?:数值模拟|模拟))(?=[\s\S]*(?:不是|并非).{0,30}(?:原位|泵水|流速|滤食效率|测量))/,
  );
  assert.match(
    mediaTexts.get('05-resident-shrimp-pair-context.webp') ?? '',
    /(?:不能|无法|不证明).{0,55}(?:每个|终身单配|互利)/,
  );
  assert.match(
    mediaTexts.get('06-rov-noncontact-monitoring.webp') ?? '',
    /(?:不能|无法|不证明).{0,45}(?:亚种|个体数|种群趋势)/,
  );

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-31');
  assert.equal(profile.updatedAt, '2026-08-31');
});

test('registers the Warty Comb Jelly as a complete Mnemiopsis leidyi profile', async () => {
  const profile = findSpecies('warty-comb-jelly');

  assert.equal(profile.id, 'species-mnemiopsis-leidyi');
  assert.equal(profile.slug, 'warty-comb-jelly');
  assert.equal(profile.names.zh, '淡海栉水母');
  assert.equal(profile.names.en, 'Warty Comb Jelly');
  assert.deepEqual(profile.names.aliases, [
    '海胡桃',
    'Sea Walnut',
    'American Comb Jelly',
  ]);
  assert.equal(profile.scientificName, 'Mnemiopsis leidyi');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Ctenophora', '栉水母动物门'],
      ['class', 'Tentaculata', '触手纲'],
      ['order', 'Lobata', '兜水母目'],
      ['family', 'Bolinopsidae', '蛸水母科'],
      ['genus', 'Mnemiopsis', '长瓣水母属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );
  assert.deepEqual(profile.distribution.realms, ['marine']);
  assert.ok(profile.habitats.every(({ realm }) => realm === 'marine'));
  assert.deepEqual(profile.measurements.length, {
    min: 7,
    max: 12,
    unit: 'cm',
    note:
      'IUCN MedMIS 的近似辨识长度，按含口叶的完整体长理解；不是全球成体上下限。北亚得里亚海 2016 年样本包含多个阶段，实测总长 2.0 至 13.5 厘米。',
  });
  assert.deepEqual(profile.metrics, { adultLengthCm: [7, 12] });
  assert.deepEqual(profile.diet.types, ['carnivore']);

  assert.equal(profile.storySections?.length, 6);
  assert.deepEqual(
    profile.storySections?.map(({ key }) => key),
    [
      'comb-jelly-not-jellyfish',
      'cilia-rainbow-and-blue-light',
      'stealth-feeding-current',
      'hermaphrodite-direct-life-cycle',
      'two-invasion-routes-black-sea',
      'manage-pathways-not-release-predators',
    ],
  );
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(profile.keyFacts.length > 0);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);

  assert.equal(profile.featuredStats.length, 4);
  assert.deepEqual(
    profile.featuredStats.map(({ key, value, unit }) => [key, value, unit]),
    [
      ['comb-rows', '8', '列'],
      ['identification-length', '7—12', '厘米'],
      ['adriatic-daily-eggs', '13,512', '枚'],
      ['black-sea-first-record', '1982', '年'],
    ],
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'warty-comb-jelly',
    basenames: [
      '01-western-atlantic-estuary-cover',
      '02-lobes-and-comb-rows-diagnostic',
      '03-ciliary-rainbow-daylight',
      '04-blue-green-bioluminescence',
      '05-stealth-copepod-feeding',
      '06-optical-plankton-monitoring',
    ],
    credit: 'Fauna Atlas · AI 生成原创图像',
  });

  assert.equal(profile.sources.length, 29);
  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-31'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/aphia.php?p=taxdetails&id=106401',
    'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/106401',
    'https://www.iucnredlist.org/search?query=Mnemiopsis%20leidyi&searchType=species',
    'https://iucn-medmis.org/en/species/mnemiopsis-leidyi',
    'https://ocean.si.edu/ocean-life/invertebrates/sea-walnut-mnemiopsis-leidyi',
    'https://doi.org/10.1016/j.isci.2026.115508',
    'https://doi.org/10.1186/1741-7007-10-107',
    'https://doi.org/10.1073/pnas.1003170107',
    'https://doi.org/10.1038/s42003-020-0940-2',
    'https://doi.org/10.7717/peerj.1846',
    'https://doi.org/10.1371/journal.pone.0081067',
    'https://doi.org/10.1111/j.1365-294X.2010.04701.x',
    'https://doi.org/10.1073/pnas.2116211118',
    'https://doi.org/10.1006/ecss.2000.0657',
    'https://doi.org/10.1073/pnas.0701100104',
    'https://doi.org/10.1093/plankt/25.5.539',
    'https://www.imo.org/en/ourwork/environment/pages/bwmconventionandguidelines.aspx',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `warty-comb-jelly sources should include ${requiredUrl}`,
    );
  }

  const storyBodies = new Map(
    profile.storySections?.map(({ key, body }) => [key, body]) ?? [],
  );
  const mediaTexts = new Map(
    [profile.media, ...(profile.media.gallery ?? [])].map(
      ({ image, alt, title, caption, credit }) => [
        image.split('/').at(-1),
        [alt, title ?? '', caption ?? '', credit ?? ''].join(' '),
      ],
    ),
  );
  const editorialText = [
    profile.summary,
    profile.description,
    profile.distribution.range,
    ...profile.habitats.map(({ description }) => description),
    profile.diet.description,
    ...(profile.activity ?? []),
    ...profile.tags,
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    ...mediaTexts.values(),
  ].join(' ');

  const identityText = storyBodies.get('comb-jelly-not-jellyfish') ?? '';
  assert.match(
    identityText,
    /(?=[\s\S]*栉水母动物门)(?=[\s\S]*(?:不是|并非).{0,20}刺胞动物门)(?=[\s\S]*“淡海”.{0,20}(?:不表示|不是).{0,10}淡水)/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*(?:未评估|Not Evaluated|\bNE\b))(?=[\s\S]*(?:不代表|不等于|不能说明).{0,25}(?:无危|安全|数量稳定|没有威胁))/i,
  );

  const opticsText = storyBodies.get('cilia-rainbow-and-blue-light') ?? '';
  assert.match(
    opticsText,
    /(?=[\s\S]*(?:环境光|日光).{0,20}衍射)(?=[\s\S]*(?:即使|即便).{0,15}(?:没有|未).{0,8}发光)(?=[\s\S]*(?:真正的)?生物发光.{0,30}光细胞)/,
  );

  const feedingText = storyBodies.get('stealth-feeding-current') ?? '';
  assert.match(
    [profile.diet.description, feedingText].join(' '),
    /(?=[\s\S]*(?:主动巡游|主动).{0,20}(?:捕食者|捕食))(?=[\s\S]*低扰动.{0,15}(?:进食)?水流)(?=[\s\S]*(?:不是|并非).{0,20}(?:被动滤食器|滤食者))/,
  );

  const reproductionText =
    storyBodies.get('hermaphrodite-direct-life-cycle') ?? '';
  assert.match(
    [reproductionText, ...profile.keyFacts].join(' '),
    /(?=[\s\S]*(?:能|可以|能够)自体受精)(?=[\s\S]*(?:自交只是能力|自交不是.{0,12}首选))(?=[\s\S]*没有水螅体、横裂体(?:和|或)碟状幼体)/,
  );

  const invasionText =
    storyBodies.get('two-invasion-routes-black-sea') ?? '';
  assert.match(
    [profile.distribution.range, invasionText].join(' '),
    /(?=[\s\S]*(?:至少两条|南、北欧洲.{0,12}两条).{0,20}(?:跨大西洋)?入侵路径)(?=[\s\S]*美国东北部)(?=[\s\S]*(?:墨西哥湾|黑海))/,
  );

  const managementText =
    storyBodies.get('manage-pathways-not-release-predators') ?? '';
  assert.match(
    managementText,
    /(?=[\s\S]*过度捕捞)(?=[\s\S]*富营养化)(?=[\s\S]*食物网)(?=[\s\S]*Beroe ovata)(?=[\s\S]*(?:不是|不能).{0,35}(?:复制|生物防治|单一物种))/,
  );

  const coverText =
    mediaTexts.get('01-western-atlantic-estuary-cover.webp') ?? '';
  assert.match(
    coverText,
    /(?=[\s\S]*西大西洋)(?=[\s\S]*半咸水河口)(?=[\s\S]*一只完整)(?=[\s\S]*AI 生成原创图像)/,
  );
  assert.doesNotMatch(coverText, /切萨皮克|纳拉甘西特|黑海|现场实拍/);

  const diagnosticText =
    mediaTexts.get('02-lobes-and-comb-rows-diagnostic.webp') ?? '';
  assert.match(
    diagnosticText,
    /(?=[\s\S]*(?:两片宽口叶|口叶))(?=[\s\S]*(?:四个.{0,8}耳状突起|耳状突起))(?=[\s\S]*(?:不能|不可|无法).{0,20}(?:替代|代替).{0,35}(?:凭证标本|分类检索|分子鉴定))/,
  );

  const rainbowText =
    mediaTexts.get('03-ciliary-rainbow-daylight.webp') ?? '';
  assert.match(
    rainbowText,
    /(?=[\s\S]*(?:日光|环境光))(?=[\s\S]*衍射)(?=[\s\S]*(?:不是|并非).{0,10}生物发光)(?=[\s\S]*(?:不能|无法).{0,20}(?:纤毛拍频|游速))/,
  );

  const bioluminescenceText =
    mediaTexts.get('04-blue-green-bioluminescence.webp') ?? '';
  assert.match(
    bioluminescenceText,
    /(?=[\s\S]*蓝绿色)(?=[\s\S]*(?:不表示|不是).{0,12}日光衍射)(?=[\s\S]*(?:不能|无法).{0,25}亮度.{0,35}(?:持续时间|刺激阈值|野外频率|功能))/,
  );

  const feedingMediaText =
    mediaTexts.get('05-stealth-copepod-feeding.webp') ?? '';
  assert.match(
    feedingMediaText,
    /(?=[\s\S]*六只.{0,12}桡足类)(?=[\s\S]*(?:均未接触|未接触).{0,10}(?:身体|动物))(?=[\s\S]*(?:不能|无法).{0,20}(?:流速|相遇率|捕获效率).{0,35}(?:自然猎物密度|固定食谱))/,
  );

  const monitoringText =
    mediaTexts.get('06-optical-plankton-monitoring.webp') ?? '';
  assert.match(
    monitoringText,
    /(?=[\s\S]*(?:无标识|通用).{0,20}(?:光学成像装置|装置))(?=[\s\S]*(?:隔着|保持).{0,15}水隙)(?=[\s\S]*(?:不能|无法).{0,30}(?:黑海|地点).{0,45}(?:物种鉴定|一次检出|丰度|分布|种群趋势))(?=[\s\S]*(?:校准取样体积|保存凭证))/,
  );

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-31');
  assert.equal(profile.updatedAt, '2026-08-31');
});

test('registers the Japanese Planarian as a complete Dugesia japonica profile', async () => {
  const profile = findSpecies('japanese-planarian');

  assert.equal(profile.id, 'species-dugesia-japonica');
  assert.equal(profile.slug, 'japanese-planarian');
  assert.equal(profile.names.zh, '日本三角涡虫');
  assert.equal(profile.names.en, 'Japanese Planarian');
  assert.deepEqual(profile.names.aliases, [
    'Japanese Freshwater Planarian',
    'ナミウズムシ',
  ]);
  assert.equal(profile.scientificName, 'Dugesia japonica');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Platyhelminthes', '扁形动物门'],
      ['class', 'Rhabditophora', '被杆体纲'],
      ['order', 'Tricladida', '三肠目'],
      ['family', 'Dugesiidae', '三角涡虫科'],
      ['genus', 'Dugesia', '三角涡虫属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );
  assert.deepEqual(profile.distribution.realms, ['freshwater']);
  assert.deepEqual(profile.distribution.countries, [
    '日本',
    '中国',
    '朝鲜',
    '韩国',
    '俄罗斯',
  ]);
  assert.ok(profile.habitats.every(({ realm }) => realm === 'freshwater'));
  assert.deepEqual(profile.measurements, {
    length: {
      min: 15,
      max: 20,
      unit: 'mm',
      note: '原始描述中性成熟个体在活动伸展状态下的通常体长，不是全物种硬边界。',
    },
  });
  assert.deepEqual(profile.metrics, {});
  assert.deepEqual(profile.diet.types, ['carnivore']);

  assert.equal(profile.storySections?.length, 6);
  assert.deepEqual(
    profile.storySections?.map(({ key }) => key),
    [
      'freshwater-under-stones',
      'ventral-cilia-gliding',
      'ventral-pharynx-feeding',
      'three-stage-transverse-fission',
      'neoblasts-and-positional-signals',
      'laboratory-strains-versus-wild-populations',
    ],
  );
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(profile.keyFacts.length > 0);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);

  assert.equal(profile.featuredStats.length, 4);
  assert.deepEqual(
    profile.featuredStats.map(({ key, value, unit }) => [key, value, unit]),
    [
      ['eyespots', '2', '枚'],
      ['fission-stages', '3', '阶段'],
      ['fragment-regeneration', '约1', '周'],
      ['gi-clone-history', '>20', '年'],
    ],
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'japanese-planarian',
    basenames: [
      '01-stream-stone-cover',
      '02-triangular-head-eyespots',
      '03-pharynx-feeding',
      '04-transverse-fission',
      '05-head-tail-regeneration',
      '06-stereomicroscope-observation',
    ],
    credit: 'Fauna Atlas · AI 生成原创图像',
  });

  assert.equal(profile.sources.length, 25);
  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-31'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'distribution', 'conservation', 'general', 'ecology']),
  );
  assert.ok(
    profile.sources.every(({ url }) =>
      /^https:\/\/(?:doi\.org|www\.marinespecies\.org|www\.gbif\.org|www\.ncbi\.nlm\.nih\.gov|www\.mee\.gov\.cn|html\.rhhz\.net|dl\.ndl\.go\.jp|www\.iucnredlist\.org)\//.test(
        url,
      ),
    ),
    'japanese-planarian sources should be primary papers or authority records',
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/aphia.php?p=taxdetails&id=484630',
    'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/484630',
    'https://www.gbif.org/species/5892108',
    'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=6161',
    'https://www.mee.gov.cn/ywgz/fgbz/bz/bzwb/shjbh/xgbzh/202203/W020220719504208090518.pdf',
    'https://dl.ndl.go.jp/view/prepareDownload?itemId=info%3Andljp%2Fpid%2F10854715',
    'https://doi.org/10.1007/978-94-011-0045-8_10',
    'https://doi.org/10.1111/jbi.14371',
    'https://www.iucnredlist.org/search?query=Dugesia%20japonica&searchType=species',
    'https://doi.org/10.1126/sciadv.aaz0882',
    'https://doi.org/10.3390/biom15121659',
    'https://doi.org/10.1073/pnas.1700762114',
    'https://doi.org/10.1007/s00427-004-0460-y',
    'https://doi.org/10.1073/pnas.0907464106',
    'https://doi.org/10.1038/nature12359',
    'https://doi.org/10.1371/journal.pone.0143525',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `japanese-planarian sources should include ${requiredUrl}`,
    );
  }

  const storyBodies = new Map(
    profile.storySections?.map(({ key, body }) => [key, body]) ?? [],
  );
  const mediaTexts = new Map(
    [profile.media, ...(profile.media.gallery ?? [])].map(
      ({ image, alt, title, caption, credit }) => [
        image.split('/').at(-1),
        [alt, title ?? '', caption ?? '', credit ?? ''].join(' '),
      ],
    ),
  );
  const editorialText = [
    profile.summary,
    profile.description,
    profile.distribution.range,
    ...profile.habitats.map(({ name, description }) => `${name} ${description}`),
    profile.diet.description,
    ...(profile.activity ?? []),
    ...profile.tags,
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    ...mediaTexts.values(),
  ].join(' ');

  assert.match(
    [profile.distribution.range, ...profile.habitats.map(({ description }) => description)].join(
      ' ',
    ),
    /(?=[\s\S]*(?:溪流|流动水))(?=[\s\S]*(?:静水|池塘))(?=[\s\S]*(?:石块|沉水物))(?=[\s\S]*(?:日本|东亚))(?=[\s\S]*(?:凭证|近似种).{0,40}(?:复核|区分))/,
  );

  const locomotionText = storyBodies.get('ventral-cilia-gliding') ?? '';
  assert.match(
    [locomotionText, ...(profile.activity ?? []), ...profile.keyFacts].join(' '),
    /(?=[\s\S]*腹面)(?=[\s\S]*纤毛)(?=[\s\S]*黏液)(?=[\s\S]*滑行)(?=[\s\S]*(?:肌肉|scrunching).{0,35}(?:不能|不等于|混为一谈))/,
  );

  const feedingText = storyBodies.get('ventral-pharynx-feeding') ?? '';
  assert.match(
    [profile.diet.description, feedingText, ...profile.keyFacts].join(' '),
    /(?=[\s\S]*腹面.{0,16}中后段)(?=[\s\S]*(?:肌肉质)?咽.{0,15}(?:伸出|探出))(?=[\s\S]*(?:嘴|口).{0,15}(?:不在|不是).{0,15}(?:头|尖端))(?=[\s\S]*离体咽)(?=[\s\S]*(?:不能|不代表).{0,30}(?:长期存活|固定食谱|首选猎物))/,
  );

  const fissionText = storyBodies.get('three-stage-transverse-fission') ?? '';
  assert.match(
    [fissionText, ...profile.keyFacts].join(' '),
    /(?=[\s\S]*腰缩)(?=[\s\S]*脉动)(?=[\s\S]*横向断裂)(?=[\s\S]*22 次)(?=[\s\S]*去头)(?=[\s\S]*约一周)(?=[\s\S]*(?:不是|不能).{0,35}(?:固定|每个野外个体|全种))/,
  );

  const regenerationText =
    storyBodies.get('neoblasts-and-positional-signals') ?? '';
  assert.match(
    [regenerationText, profile.description, ...profile.keyFacts].join(' '),
    /(?=[\s\S]*neoblast)(?=[\s\S]*(?:位置信息|位置信号))(?=[\s\S]*ERK)(?=[\s\S]*Wnt\/β-catenin)(?=[\s\S]*Hedgehog)(?=[\s\S]*(?:不表示|不等于).{0,35}(?:任意大小|随意长出|每个身体片段))/,
  );

  const strainBoundaryText =
    storyBodies.get('laboratory-strains-versus-wild-populations') ?? '';
  assert.match(
    [strainBoundaryText, ...profile.keyFacts].join(' '),
    /(?=[\s\S]*GI 克隆)(?=[\s\S]*1990 年)(?=[\s\S]*入间川)(?=[\s\S]*(?:一只|单一).{0,12}个体)(?=[\s\S]*(?:超过|>)[ ]?20 年)(?=[\s\S]*(?:不能|不代表).{0,35}(?:野外|整个物种|全种))/,
  );

  assert.match(
    editorialText,
    /(?=[\s\S]*(?:未评估|Not Evaluated|\bNE\b))(?=[\s\S]*(?:不代表|不等于|不能说明).{0,25}(?:无危|安全|数量稳定|没有威胁))/i,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*(?:实验株|实验克隆|无性克隆))(?=[\s\S]*(?:野外种群|自然种群))(?=[\s\S]*(?:不能|不代表).{0,50}(?:全种|整个物种|野外))/,
  );
  assert.doesNotMatch(
    editorialText,
    /(?:任何|任意)碎片.{0,12}(?:都|均)(?:能|可).{0,12}再生|单个 neoblast.{0,12}(?:就能|可以).{0,12}再生|所有野外个体.{0,12}只.{0,8}无性繁殖/,
  );

  const coverText = mediaTexts.get('01-stream-stone-cover.webp') ?? '';
  assert.match(
    coverText,
    /(?=[\s\S]*(?:浅溪|溪流))(?=[\s\S]*(?:湿石|石))(?=[\s\S]*一只完整)(?=[\s\S]*三角)(?=[\s\S]*AI 生成原创图像)/,
  );
  assert.doesNotMatch(coverText, /现场实拍|精确比例|岐阜县|入间川/);

  const diagnosticText =
    mediaTexts.get('02-triangular-head-eyespots.webp') ?? '';
  assert.match(
    diagnosticText,
    /(?=[\s\S]*三角头)(?=[\s\S]*两枚.{0,8}耳突)(?=[\s\S]*一对.{0,8}眼点)(?=[\s\S]*(?:不能|不可).{0,20}(?:替代|完成).{0,35}(?:交配器解剖|分类检索|分子鉴定))/,
  );

  const pharynxMediaText =
    mediaTexts.get('03-pharynx-feeding.webp') ?? '';
  assert.match(
    pharynxMediaText,
    /(?=[\s\S]*腹面中后段)(?=[\s\S]*(?:管状咽|肌肉质咽))(?=[\s\S]*(?:不能|无法).{0,25}(?:吞咽成功|摄食速率).{0,35}(?:猎物身份|野外食谱))/,
  );

  const fissionMediaText =
    mediaTexts.get('04-transverse-fission.webp') ?? '';
  assert.match(
    fissionMediaText,
    /(?=[\s\S]*(?:头段|尾段))(?=[\s\S]*自然横裂.{0,12}人工切段)(?=[\s\S]*静帧)(?=[\s\S]*腰缩)(?=[\s\S]*脉动)(?=[\s\S]*横向断裂)(?=[\s\S]*(?:不能|无法).{0,35}(?:时间顺序|拉力|再生时长))/,
  );

  const regenerationMediaText =
    mediaTexts.get('05-head-tail-regeneration.webp') ?? '';
  assert.match(
    regenerationMediaText,
    /(?=[\s\S]*头段)(?=[\s\S]*尾段)(?=[\s\S]*(?:不能|不证明).{0,30}(?:同一横裂事件|neoblast 活性).{0,45}(?:再生完成度|存活结局))/,
  );

  const observationText =
    mediaTexts.get('06-stereomicroscope-observation.webp') ?? '';
  assert.match(
    observationText,
    /(?=[\s\S]*体视显微镜)(?=[\s\S]*一个完整个体)(?=[\s\S]*两个片段)(?=[\s\S]*(?:不能|无法).{0,20}(?:确认|证明).{0,40}(?:物种|克隆|时间点|处理组))(?=[\s\S]*(?:比例尺|连续记录|样本信息))/,
  );

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-31');
  assert.equal(profile.updatedAt, '2026-08-31');
});

test('registers C. elegans as a complete Caenorhabditis elegans profile', async () => {
  const profile = findSpecies('caenorhabditis-elegans');

  assert.equal(profile.id, 'species-caenorhabditis-elegans');
  assert.equal(profile.slug, 'caenorhabditis-elegans');
  assert.equal(profile.names.zh, '秀丽隐杆线虫');
  assert.equal(profile.names.en, 'C. elegans');
  assert.deepEqual(profile.names.aliases, ['秀丽线虫', 'Rhabditis elegans']);
  assert.equal(profile.scientificName, 'Caenorhabditis elegans');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Nematoda', '线虫动物门'],
      ['class', 'Chromadorea', '色矛纲'],
      ['order', 'Rhabditida', '小杆目'],
      ['family', 'Rhabditidae', '小杆科'],
      ['genus', 'Caenorhabditis', '隐杆线虫属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );

  assert.deepEqual(profile.distribution.realms, ['terrestrial']);
  assert.deepEqual(profile.distribution.continents, [
    '欧洲',
    '亚洲',
    '北美洲',
    '南美洲',
    '非洲',
    '大洋洲',
  ]);
  assert.deepEqual(profile.distribution.countries, []);
  assert.equal(profile.habitats.length, 3);
  assert.ok(profile.habitats.every(({ realm }) => realm === 'terrestrial'));
  assert.equal(profile.habitats[0]?.isPrimary, true);
  assert.deepEqual(profile.measurements, {
    length: {
      typical: 1,
      unit: 'mm',
      note: '成体雌雄同体的典型体长；雄虫和幼虫更短，体长还受年龄、品系、营养和姿势影响。',
    },
  });
  assert.deepEqual(profile.metrics, {});
  assert.deepEqual(profile.diet.types, ['bacterivore']);

  assert.equal(profile.storySections?.length, 6);
  assert.deepEqual(
    profile.storySections?.map(({ key }) => key),
    [
      'rotting-plant-microhabitat',
      'undulation-and-pharyngeal-feeding',
      'hermaphrodite-and-male',
      'four-larval-stages-and-dauer',
      'cell-lineage-and-connectome',
      'model-strain-versus-wild-species',
    ],
  );
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(profile.keyFacts.length > 0);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);
  assert.deepEqual(
    profile.featuredStats.map(({ key, value, unit }) => [key, value, unit]),
    [
      ['adult-length', '约 1', '毫米'],
      ['larval-stages', '4', '个'],
      ['somatic-nuclei', '959', '个'],
      ['hermaphrodite-neurons', '302', '个'],
    ],
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'caenorhabditis-elegans',
    basenames: [
      '01-rotting-apple-habitat',
      '02-transparent-hermaphrodite-dic',
      '03-pharyngeal-bacterial-feeding',
      '04-midbody-egg-laying',
      '05-dauer-nictation',
      '06-agar-plate-observation',
    ],
    credit: 'Fauna Atlas · AI 生成原创图像',
  });

  assert.equal(profile.sources.length, 23);
  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-31'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'general', 'ecology', 'distribution', 'conservation']),
  );
  assert.ok(
    profile.sources.every(({ url }) =>
      /^https:\/\/(?:doi\.org|www\.gbif\.org|www\.itis\.gov|www\.ncbi\.nlm\.nih\.gov|std\.samr\.gov\.cn|www\.wormatlas\.org|caendr\.org|www\.iucnredlist\.org|nrl\.iucnredlist\.org)\//.test(
        url,
      ),
    ),
    'C. elegans sources should be primary papers or authority records',
  );
  for (const requiredUrl of [
    'https://www.gbif.org/taxon/87THG',
    'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=63332',
    'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=6239&lvl=0',
    'https://std.samr.gov.cn/db/search/stdDBDetailed?id=0BBEE3C38FD9D900E06397BE0A0A632E',
    'https://www.ncbi.nlm.nih.gov/books/NBK299460/',
    'https://doi.org/10.1093/genetics/77.1.71',
    'https://doi.org/10.1186/1741-7007-10-59',
    'https://caendr.org/data/data-release/c-elegans/latest',
    'https://doi.org/10.1038/s41467-022-31208-4',
    'https://doi.org/10.1073/pnas.1607183113',
    'https://doi.org/10.1038/s41467-017-00386-x',
    'https://www.iucnredlist.org/search?query=Caenorhabditis%20elegans&searchType=species',
    'https://nrl.iucnredlist.org/about/faqs',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `C. elegans sources should include ${requiredUrl}`,
    );
  }

  const storyBodies = new Map(
    profile.storySections?.map(({ key, body }) => [key, body]) ?? [],
  );
  const mediaTexts = new Map(
    [profile.media, ...(profile.media.gallery ?? [])].map(
      ({ image, alt, title, caption, credit }) => [
        image.split('/').at(-1),
        [alt, title ?? '', caption ?? '', credit ?? ''].join(' '),
      ],
    ),
  );
  const habitatText = [
    profile.distribution.range,
    ...profile.habitats.flatMap(({ name, description }) => [name, description]),
  ].join(' ');
  const editorialText = [
    profile.summary,
    profile.description,
    habitatText,
    profile.measurements.length?.note ?? '',
    profile.diet.description,
    ...(profile.activity ?? []),
    ...profile.tags,
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    ...mediaTexts.values(),
  ].join(' ');

  assert.match(
    habitatText,
    /(?=[\s\S]*腐烂果实)(?=[\s\S]*茎秆)(?=[\s\S]*堆肥)(?=[\s\S]*微生物)(?=[\s\S]*(?:不等于|并非).{0,30}(?:普通矿质土壤|所有土壤))/,
  );
  assert.match(
    profile.distribution.range,
    /(?=[\s\S]*(?:多个大陆|全球))(?=[\s\S]*(?:采样强度|采样))(?=[\s\S]*(?:不能|不等于).{0,35}(?:处处常见|连续占域|完整分布))/,
  );

  const feedingText =
    storyBodies.get('undulation-and-pharyngeal-feeding') ?? '';
  assert.match(
    [profile.diet.description, feedingText, ...profile.keyFacts].join(' '),
    /(?=[\s\S]*(?:以细菌为食|食菌))(?=[\s\S]*(?:肌肉质咽|咽部))(?=[\s\S]*(?:研磨器|末端咽球))(?=[\s\S]*OP50.{0,40}(?:人工饲料|标准化饲料|实验室))(?=[\s\S]*(?:不能|只代表).{0,40}(?:自然食谱|自然食物|人工饲料))/,
  );

  const reproductionText = storyBodies.get('hermaphrodite-and-male') ?? '';
  assert.match(
    [reproductionText, profile.description, ...profile.keyFacts].join(' '),
    /(?=[\s\S]*XX.{0,15}雌雄同体)(?=[\s\S]*XO.{0,12}雄虫)(?=[\s\S]*自体受精)(?=[\s\S]*(?:标准培养|培养中).{0,25}(?:约 )?300)(?=[\s\S]*(?:不能|不把).{0,30}(?:野外固定|固定产仔数|常数))/,
  );

  const developmentText =
    storyBodies.get('four-larval-stages-and-dauer') ?? '';
  assert.match(
    [developmentText, ...(profile.activity ?? []), ...profile.keyFacts].join(' '),
    /(?=[\s\S]*L1)(?=[\s\S]*L2)(?=[\s\S]*L3)(?=[\s\S]*L4)(?=[\s\S]*20°C.{0,20}食物充足.{0,35}3\.5 天)(?=[\s\S]*(?:温度|营养).{0,20}(?:改变|依赖).{0,15}(?:时程|发育速度))/,
  );
  assert.match(
    [developmentText, ...profile.keyFacts].join(' '),
    /(?=[\s\S]*dauer.{0,20}(?:替代性|发育路线))(?=[\s\S]*(?:不取食|停止取食))(?=[\s\S]*nictation)(?=[\s\S]*(?:增加|提高).{0,20}(?:接触|载体).{0,20}机会)(?=[\s\S]*(?:静止姿态|静帧|单张).{0,25}(?:不能|无法).{0,20}(?:证明|确认).{0,20}dauer)/i,
  );

  const lineageText = storyBodies.get('cell-lineage-and-connectome') ?? '';
  assert.match(
    [lineageText, profile.description, ...profile.keyFacts].join(' '),
    /(?=[\s\S]*1,090.{0,20}131.{0,25}(?:程序性死亡|死亡))(?=[\s\S]*959.{0,20}(?:体细胞核|细胞核))(?=[\s\S]*302.{0,15}神经元)(?=[\s\S]*(?:性别|雄虫).{0,25}(?:阶段|数字|不同))(?=[\s\S]*(?:不能|不).{0,25}(?:整种|整个物种).{0,15}959.{0,10}细胞)/,
  );

  const modelBoundaryText =
    storyBodies.get('model-strain-versus-wild-species') ?? '';
  assert.match(
    [modelBoundaryText, profile.description, ...profile.keyFacts].join(' '),
    /(?=[\s\S]*N2)(?=[\s\S]*(?:自然分离株|野外遗传多样性))(?=[\s\S]*(?:不能|依赖).{0,45}(?:整个野外物种|野外遗传多样性|品系与条件|全物种))/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*(?:未评估|\bNE\b))(?=[\s\S]*(?:不表示|不代表).{0,25}(?:无危|安全|数量稳定|没有威胁))/i,
  );

  const coverText = mediaTexts.get('01-rotting-apple-habitat.webp') ?? '';
  assert.match(
    coverText,
    /(?=[\s\S]*(?:腐烂苹果|腐果))(?=[\s\S]*微生物薄膜)(?=[\s\S]*一只完整)(?=[\s\S]*成年)(?=[\s\S]*AI 生成原创图像)/,
  );
  assert.doesNotMatch(coverText, /现场实拍|野外凭证照片/);

  const anatomyText =
    mediaTexts.get('02-transparent-hermaphrodite-dic.webp') ?? '';
  assert.match(
    anatomyText,
    /(?=[\s\S]*(?:DIC|微分干涉))(?=[\s\S]*(?:咽|前咽))(?=[\s\S]*肠道)(?=[\s\S]*生殖腺)(?=[\s\S]*胚胎)(?=[\s\S]*(?:不能|无法).{0,25}(?:替代|代替).{0,35}(?:真实显微记录|比例尺|品系信息|组织标记))/,
  );

  const feedingMediaText =
    mediaTexts.get('03-pharyngeal-bacterial-feeding.webp') ?? '';
  assert.match(
    feedingMediaText,
    /(?=[\s\S]*(?:菌苔边缘|细颗粒菌苔))(?=[\s\S]*(?:咽腔|咽部))(?=[\s\S]*(?:末端咽球|咽球))(?=[\s\S]*(?:不能|无法).{0,20}(?:泵动频率|摄入量).{0,40}(?:菌种身份|野外食谱比例))/,
  );

  const eggLayingText =
    mediaTexts.get('04-midbody-egg-laying.webp') ?? '';
  assert.match(
    eggLayingText,
    /(?=[\s\S]*(?:腹侧中部|身体中部).{0,15}(?:阴门|排出))(?=[\s\S]*一枚.{0,8}(?:椭圆)?卵)(?=[\s\S]*(?:不能|无法).{0,20}(?:证明|确认).{0,35}(?:自体受精|亲缘关系|产卵速率|总后代数|培养条件))/,
  );

  const nictationText = mediaTexts.get('05-dauer-nictation.webp') ?? '';
  assert.match(
    nictationText,
    /(?=[\s\S]*dauer)(?=[\s\S]*尾端.{0,15}(?:接触|支撑))(?=[\s\S]*(?:前半身|身体).{0,12}(?:抬起|竖立))(?=[\s\S]*(?:不能|无法).{0,25}(?:确认|证明).{0,45}(?:发育阶段|停止取食|接触载体|发生迁移))/i,
  );

  const observationText =
    mediaTexts.get('06-agar-plate-observation.webp') ?? '';
  assert.match(
    observationText,
    /(?=[\s\S]*(?:琼脂培养皿|琼脂))(?=[\s\S]*一只成年)(?=[\s\S]*两只.{0,8}幼虫)(?=[\s\S]*(?:不能|无法).{0,20}(?:确认|证明).{0,45}(?:N2 品系|基因型|处理组|培养温度|实验结果))/,
  );

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-31');
  assert.equal(profile.updatedAt, '2026-08-31');
});

test('registers the duck\'s-bill lingula as a bounded Lingula anatina profile', async () => {
  const profile = findSpecies('lingula-anatina');

  assert.equal(profile.id, 'species-lingula-anatina');
  assert.equal(profile.slug, 'lingula-anatina');
  assert.equal(profile.names.zh, '鸭嘴海豆芽');
  assert.equal(profile.names.en, "Duck's-bill Lingula");
  assert.deepEqual(profile.names.aliases, [
    '鴨嘴海豆芽',
    'Duck Lingula',
    'Lingula unguis',
  ]);
  assert.equal(profile.scientificName, 'Lingula anatina');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Brachiopoda', '腕足动物门'],
      ['class', 'Lingulata', '舌形贝纲'],
      ['order', 'Lingulida', '舌形贝目'],
      ['family', 'Lingulidae', '舌形贝科'],
      ['genus', 'Lingula', '海豆芽属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );

  assert.deepEqual(profile.distribution.realms, ['marine']);
  assert.deepEqual(profile.distribution.continents, []);
  assert.deepEqual(profile.distribution.regions, [
    '印度—西太平洋名义种记录区',
    '印度尼西亚摩鹿加群岛模式产地',
  ]);
  assert.deepEqual(profile.distribution.countries, []);
  assert.deepEqual(profile.distribution.center, { lat: -3.2, lng: 128.2 });
  assert.equal(profile.habitats.length, 3);
  assert.ok(profile.habitats.every(({ realm }) => realm === 'marine'));
  assert.equal(profile.habitats[0]?.isPrimary, true);
  assert.deepEqual(profile.measurements, {
    length: {
      typical: 40,
      unit: 'mm',
      note: 'FAO 识别指南给出的常见壳长约 4 厘米，并另列指南最大壳长 6.5 厘米；结构化长度只保留常见值，两个数都沿用名义种口径，不是已厘清所有隐存谱系后的狭义物种常数，也不含高度伸缩的肉茎。',
    },
  });
  assert.deepEqual(profile.metrics, {});
  assert.deepEqual(profile.diet.types, ['filter-feeder']);

  assert.equal(profile.storySections?.length, 6);
  assert.deepEqual(
    profile.storySections?.map(({ key }) => key),
    [
      'dorsal-ventral-phosphatic-shell',
      'vertical-burrow-and-pedicle',
      'reburrowing-experiment-boundaries',
      'spirolophe-suspension-feeding',
      'shelled-planktotrophic-young',
      'species-complex-and-living-fossil-myth',
    ],
  );
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(profile.keyFacts.length >= 15);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);
  assert.deepEqual(
    profile.featuredStats.map(({ key, value, unit }) => [key, value, unit]),
    [
      ['common-shell-length', '约 4', '厘米'],
      ['guide-maximum-shell-length', '6.5', '厘米'],
      ['lophophore-arms', '2', '条'],
      ['pedicle-extension', '接近 10', '倍壳长'],
    ],
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'lingula-anatina',
    basenames: [
      '01-tidal-flat-burrow-cover',
      '02-shell-and-pedicle-diagnostic',
      '03-vertical-burrow-cutaway',
      '04-spirolophe-suspension-feeding',
      '05-two-pair-cirri-juvenile',
      '06-three-opening-photo-survey',
    ],
    credit: 'Fauna Atlas · AI 生成原创图像',
  });

  assert.ok(profile.sources.length >= 25);
  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-31'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'general', 'distribution', 'ecology', 'conservation']),
  );
  assert.ok(
    profile.sources.every(({ url }) =>
      /^https:\/\/(?:doi\.org|www\.marinespecies\.org|www\.gbif\.org|www\.ncbi\.nlm\.nih\.gov|www\.forest\.gov\.tw|www\.tbn\.org\.tw|www\.nmns\.edu\.tw|openknowledge\.fao\.org|carnetsgeol\.net|researchdata\.edu\.au|www\.jstor\.org|www\.afcd\.gov\.hk|www\.iucnredlist\.org|nrl\.iucnredlist\.org|cites\.org)\//.test(
        url,
      ),
    ),
    'Lingula sources should be authority records, institutional guidance, or primary papers',
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/aphia.php?p=taxdetails&id=235362',
    'https://www.gbif.org/species/5183826',
    'https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=7574&lvl=0',
    'https://www.tbn.org.tw/taxa/f829da55-c892-48b2-bbac-aa5ff089d9b8',
    'https://openknowledge.fao.org/server/api/core/bitstreams/f32d004b-6358-44f3-8242-b9d23e5346d0/content',
    'https://doi.org/10.1016/j.ympev.2022.107460',
    'https://doi.org/10.1038/ncomms9301',
    'https://doi.org/10.1371/journal.pone.0123040',
    'https://doi.org/10.1017/S0094837300006825',
    'https://doi.org/10.17161/dt.v0i0.5558',
    'https://doi.org/10.1016/0031-0182(91)90027-O',
    'https://researchdata.edu.au/salinity-tolerance-burrowing-north-queensland/677904',
    'https://www.jstor.org/stable/1304816',
    'https://doi.org/10.3800/pbr.14.45',
    'https://doi.org/10.1017/pab.2020.51',
    'https://doi.org/10.11646/zoosymposia.19.1.13',
    'https://www.iucnredlist.org/search?query=Lingula%20anatina&searchType=species',
    'https://nrl.iucnredlist.org/about/faqs',
    'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    'https://cites.org/eng/node/10288',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `Lingula sources should include ${requiredUrl}`,
    );
  }

  const sourcesByUrl = new Map(
    profile.sources.map(({ url, title }) => [url, title]),
  );
  assert.equal(
    sourcesByUrl.get('https://doi.org/10.1016/j.ympev.2022.107460'),
    'Goto et al. 2022 — Stasis and diversity in living fossils: Species delimitation and evolution of lingulid brachiopods',
  );
  assert.equal(
    sourcesByUrl.get('https://doi.org/10.1038/ncomms9301'),
    'Luo et al. 2015 — The Lingula genome provides insights into brachiopod evolution and the origin of phosphate biomineralization',
  );
  assert.equal(
    sourcesByUrl.get('https://doi.org/10.1017/S0094837300006825'),
    'Westbroek, Yanagida & Isa 1980 — Functional morphology of brachiopod and coral skeletal structures supporting ciliated epithelia',
  );
  assert.equal(
    sourcesByUrl.get('https://doi.org/10.17161/dt.v0i0.5558'),
    'Emig 1997 — Part H, Brachiopoda (Revised), vol. 1, ch. 6, p. 473–502',
  );
  assert.equal(
    sourcesByUrl.get(
      'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    ),
    'CITES — Appendices I, II and III (effective 5 March 2026)',
  );
  assert.equal(
    sourcesByUrl.get('https://doi.org/10.1111/j.1469-7998.1987.tb03696.x'),
    'Trueman & Wong 1987 — The role of the coelom as a hydrostatic skeleton in lingulid brachiopods',
  );
  assert.equal(
    sourcesByUrl.get('https://www.jstor.org/stable/1304816'),
    'Hammond 1983 — Experimental studies of salinity tolerance, burrowing behavior and pedicle regeneration in Lingula anatina',
  );

  const storyBodies = new Map(
    profile.storySections?.map(({ key, body }) => [key, body]) ?? [],
  );
  const mediaTexts = new Map(
    [profile.media, ...(profile.media.gallery ?? [])].map(
      ({ image, alt, title, caption, credit }) => [
        image.split('/').at(-1),
        [alt, title ?? '', caption ?? '', credit ?? ''].join(' '),
      ],
    ),
  );
  const habitatText = [
    profile.distribution.range,
    ...profile.habitats.flatMap(({ name, description }) => [name, description]),
  ].join(' ');
  const editorialText = [
    profile.summary,
    profile.description,
    habitatText,
    profile.measurements.length?.note ?? '',
    profile.diet.description,
    ...(profile.activity ?? []),
    ...profile.tags,
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    ...mediaTexts.values(),
  ].join(' ');

  assert.match(
    profile.distribution.range,
    /(?=[\s\S]*摩鹿加群岛)(?=[\s\S]*印度—西太平洋)(?=[\s\S]*温带东亚)(?=[\s\S]*热带西—中太平洋)(?=[\s\S]*隐存谱系)(?=[\s\S]*狭义物种.{0,25}仍待修订)(?=[\s\S]*GBIF.{0,30}(?:化石|材料样本))(?=[\s\S]*(?:不能|不可).{0,25}全球连续分布)/,
  );
  assert.match(
    habitatText,
    /(?=[\s\S]*(?:细砂|粉砂))(?=[\s\S]*(?:泥质|软底))(?=[\s\S]*河口)(?=[\s\S]*红树林)(?=[\s\S]*半咸水)(?=[\s\S]*(?:数据库模型|归入 marine).{0,35}(?:不表示|不等于).{0,20}(?:盐度恒定|淡水))/i,
  );

  const shellText =
    storyBodies.get('dorsal-ventral-phosphatic-shell') ?? '';
  assert.match(
    [shellText, profile.description, ...profile.keyFacts].join(' '),
    /(?=[\s\S]*背面.{0,15}腹面)(?=[\s\S]*(?:不是|不同于).{0,25}(?:双壳类|蛤|蚌))(?=[\s\S]*磷灰石)(?=[\s\S]*几丁质)(?=[\s\S]*蛋白质)(?=[\s\S]*(?:不等于|不是).{0,15}(?:骨骼|骨头))/,
  );

  const burrowText = [
    storyBodies.get('vertical-burrow-and-pedicle') ?? '',
    storyBodies.get('reburrowing-experiment-boundaries') ?? '',
    ...(profile.activity ?? []),
    ...profile.keyFacts,
  ].join(' ');
  assert.match(
    burrowText,
    /(?=[\s\S]*(?:近垂直|竖直).{0,15}单竖井)(?=[\s\S]*U 形.{0,20}重埋.{0,15}路线)(?=[\s\S]*(?:不是|不只是).{0,25}(?:永久双开口管|钻土|钻头))(?=[\s\S]*肉茎.{0,30}(?:锚定|牵引))(?=[\s\S]*(?:壳瓣|壳体))(?=[\s\S]*刚毛)(?=[\s\S]*(?:静水骨骼|旋转剪切))/,
  );
  assert.match(
    storyBodies.get('reburrowing-experiment-boundaries') ?? '',
    /(?=[\s\S]*北昆士兰)(?=[\s\S]*5 至 10 厘米)(?=[\s\S]*20 厘米.{0,25}30% 至 50%)(?=[\s\S]*宿务)(?=[\s\S]*超过 50 毫米)(?=[\s\S]*(?:不能|不可).{0,25}(?:绝不再掘|总能回到原洞))/,
  );

  const feedingText =
    storyBodies.get('spirolophe-suspension-feeding') ?? '';
  assert.match(
    [feedingText, profile.diet.description, ...profile.keyFacts].join(' '),
    /(?=[\s\S]*两条对称.{0,12}(?:螺旋|卷曲).{0,8}臂)(?=[\s\S]*口.{0,12}(?:两臂之间|螺旋臂之间))(?=[\s\S]*纤毛)(?=[\s\S]*(?:食物沟|悬浮颗粒))(?=[\s\S]*(?:不是|不).{0,20}用嘴主动吸水)(?=[\s\S]*(?:不支持|不能).{0,30}(?:单一|只吃).{0,15}浮游生物)/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*两个侧方入水口)(?=[\s\S]*一个中央出水口)(?=[\s\S]*刚毛.{0,20}围成)(?=[\s\S]*(?:不是|不是真正).{0,20}(?:肉质水管|水管))/,
  );

  const developmentText =
    storyBodies.get('shelled-planktotrophic-young') ?? '';
  assert.match(
    [developmentText, profile.description, ...profile.keyFacts].join(' '),
    /(?=[\s\S]*雌雄异体)(?=[\s\S]*(?:配子排入海水|体外受精))(?=[\s\S]*(?:有壳|带壳).{0,20}浮游)(?=[\s\S]*沉降.{0,20}底栖)(?=[\s\S]*奄美)(?=[\s\S]*两对触手)(?=[\s\S]*(?:不能|不可).{0,35}(?:统一|整个物种|狭义物种))/i,
  );
  assert.equal(profile.metrics.lifespanYears, undefined);

  const boundaryText =
    storyBodies.get('species-complex-and-living-fossil-myth') ?? '';
  assert.match(
    [boundaryText, profile.description, ...profile.keyFacts].join(' '),
    /(?=[\s\S]*物种复合群)(?=[\s\S]*温带东亚)(?=[\s\S]*热带西—中太平洋)(?=[\s\S]*模式产地.{0,12}摩鹿加群岛)(?=[\s\S]*载名模式)(?=[\s\S]*白垩纪)(?=[\s\S]*(?:不是|不能写成).{0,30}寒武纪)(?=[\s\S]*(?:持续演化|基因组))/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*(?:未评估|\bNE\b))(?=[\s\S]*(?:不表示|不代表).{0,25}(?:无危|安全|种群稳定|没有威胁))/i,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*2026 年 3 月 5 日)(?=[\s\S]*CITES)(?=[\s\S]*(?:未找到|未检出|未列入|没有).{0,30}(?:附录|条目|列名))(?=[\s\S]*(?:不代表|不等于).{0,25}(?:无危|安全|没有威胁))/i,
  );
  assert.doesNotMatch(editorialText, /类型产地/);
  assert.doesNotMatch(editorialText, /名称承载模式/);

  const coverText =
    mediaTexts.get('01-tidal-flat-burrow-cover.webp') ?? '';
  assert.match(
    coverText,
    /(?=[\s\S]*浅水潮滩)(?=[\s\S]*一个.{0,8}洞口)(?=[\s\S]*(?:顶部一小段|其余身体埋在沉积物中))(?=[\s\S]*AI 生成原创图像)/,
  );

  const diagnosticText =
    mediaTexts.get('02-shell-and-pedicle-diagnostic.webp') ?? '';
  assert.match(
    diagnosticText,
    /(?=[\s\S]*(?:舌形壳|狭长.{0,8}壳))(?=[\s\S]*肉茎)(?=[\s\S]*(?:不能|无法).{0,25}(?:确认|证明).{0,45}(?:物种|隐存谱系|活体比例|年龄|采集地点))/,
  );

  const cutawayText =
    mediaTexts.get('03-vertical-burrow-cutaway.webp') ?? '';
  assert.match(
    cutawayText,
    /(?=[\s\S]*(?:剖面|洞穴))(?=[\s\S]*(?:近垂直|向下))(?=[\s\S]*锚定)(?=[\s\S]*(?:不能|无法).{0,25}(?:确定|证明).{0,55}(?:背腹壳瓣朝向|洞深|洞径|尺寸比例|沉积层结构))/,
  );

  const lophophoreText =
    mediaTexts.get('04-spirolophe-suspension-feeding.webp') ?? '';
  assert.match(
    lophophoreText,
    /(?=[\s\S]*透明观察窗)(?=[\s\S]*两条对称)(?=[\s\S]*螺旋触手冠)(?=[\s\S]*(?:不能|无法).{0,30}(?:水流方向|流速|颗粒选择|摄食成功))/,
  );

  const juvenileText =
    mediaTexts.get('05-two-pair-cirri-juvenile.webp') ?? '';
  assert.match(
    juvenileText,
    /(?=[\s\S]*(?:四条|两对).{0,15}(?:简单|不分枝).{0,15}(?:触手|具纤毛))(?=[\s\S]*奄美)(?=[\s\S]*分类身份未定)(?=[\s\S]*(?:不能|无法).{0,35}(?:自然年龄|阶段持续时间|统一发育路线))/,
  );

  const surveyText =
    mediaTexts.get('06-three-opening-photo-survey.webp') ?? '';
  assert.match(
    surveyText,
    /(?=[\s\S]*样框)(?=[\s\S]*一组.{0,12}三个.{0,8}(?:圆形小洞|三孔))(?=[\s\S]*(?:不能|无法).{0,25}(?:确认|证明).{0,50}(?:物种|占洞个体|洞穴连通方式|丰度|种群趋势))(?=[\s\S]*(?:凭证|重复调查))/,
  );

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-31');
  assert.equal(profile.updatedAt, '2026-08-31');
});

test('registers the brown bryozoan as a bounded Bugula neritina profile', async () => {
  const profile = findSpecies('bugula-neritina');

  assert.equal(profile.id, 'species-bugula-neritina');
  assert.equal(profile.slug, 'bugula-neritina');
  assert.equal(profile.names.zh, '总合草苔虫');
  assert.equal(profile.names.en, 'Brown Bryozoan');
  assert.deepEqual(profile.names.aliases, [
    '总合苔虫',
    '多室草苔虫',
    'Common Bugula',
    'Ruby Bryozoan',
    'Sertularia neritina',
  ]);
  assert.equal(profile.scientificName, 'Bugula neritina');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Bryozoa', '苔藓动物门'],
      ['class', 'Gymnolaemata', '裸唇纲'],
      ['order', 'Cheilostomatida', '唇口目'],
      ['family', 'Bugulidae', '草苔虫科'],
      ['genus', 'Bugula', '草苔虫属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );

  assert.deepEqual(profile.distribution.realms, ['marine']);
  assert.deepEqual(profile.distribution.continents, []);
  assert.deepEqual(profile.distribution.regions, [
    '全球热带、亚热带与温带名义种记录区',
    '地中海原始描述材料来源区',
  ]);
  assert.deepEqual(profile.distribution.countries, []);
  assert.equal(profile.habitats.length, 3);
  assert.ok(profile.habitats.every(({ realm }) => realm === 'marine'));
  assert.equal(profile.habitats[0]?.isPrimary, true);
  assert.equal(profile.measurements.height?.max, 10);
  assert.equal(profile.measurements.height?.unit, 'cm');
  assert.deepEqual(profile.metrics, {});
  assert.deepEqual(profile.diet.types, ['filter-feeder']);

  assert.equal(profile.storySections?.length, 6);
  assert.deepEqual(
    profile.storySections?.map(({ key }) => key),
    [
      'one-colony-many-zooids',
      'biserial-branches-and-lophophores',
      'brooding-and-coronate-larva',
      'three-cryptic-species',
      'endobugula-and-bryostatins',
      'fouling-and-lineage-aware-monitoring',
    ],
  );
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(profile.keyFacts.length >= 20);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);
  assert.deepEqual(
    profile.featuredStats.map(({ key, value, unit }) => [key, value, unit]),
    [
      ['colony-height', '最高约 10', '厘米'],
      ['zooid-length', '约 600–800', '微米'],
      ['zooid-rows', '2', '列'],
      ['lophophore-tentacles', '约 23–24', '条触手'],
    ],
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'bugula-neritina',
    basenames: [
      '01-marina-piling-colony-cover',
      '02-biserial-zooid-diagnostic',
      '03-lophophore-suspension-feeding',
      '04-ovicells-and-coronate-larva',
      '05-larval-symbiont-window',
      '06-settlement-plate-monitoring',
    ],
    credit: 'Fauna Atlas · AI 生成原创图像',
  });

  assert.equal(profile.sources.length, 36);
  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-31'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'general', 'distribution', 'ecology', 'conservation']),
  );
  assert.ok(
    profile.sources.every(({ url }) =>
      /^https:\/\/(?:www\.marinespecies\.org|api\.gbif\.org|www\.ncbi\.nlm\.nih\.gov|rsis\.ramsar\.org|www\.govinfo\.gov|www\.biodiversitylibrary\.org|data\.bishopmuseum\.org|nimpis\.marinepests\.gov\.au|invasions\.si\.edu|www\.int-res\.com|pmc\.ncbi\.nlm\.nih\.gov|doi\.org|pubmed\.ncbi\.nlm\.nih\.gov|www\.cancer\.gov|www\.iucnredlist\.org|nrl\.iucnredlist\.org|eunis\.eea\.europa\.eu|cites\.org|www\.speciesplus\.net)\//.test(
        url,
      ),
    ),
    'Bugula sources should be authority records, institutional guidance, or primary papers',
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/rest/AphiaRecordByAphiaID/111158',
    'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/111158',
    'https://rsis.ramsar.org/RISapp/files/6345930/documents/CN2518_taxo230214.pdf',
    'https://www.biodiversitylibrary.org/part/93305',
    'https://doi.org/10.1111/zsc.12042',
    'https://doi.org/10.1128/AEM.67.10.4531-4537.2001',
    'https://www.iucnredlist.org/search?query=Bugula%20neritina&searchType=species',
    'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `Bugula sources should include ${requiredUrl}`,
    );
  }

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-31');
  assert.equal(profile.updatedAt, '2026-08-31');
});

test('registers the Red-eyed Treefrog as a complete Agalychnis callidryas profile', async () => {
  const profile = findSpecies('red-eyed-tree-frog');

  assert.equal(profile.id, 'species-agalychnis-callidryas');
  assert.equal(profile.slug, 'red-eyed-tree-frog');
  assert.equal(profile.names.zh, '红眼树蛙');
  assert.equal(profile.names.en, 'Red-eyed Treefrog');
  assert.deepEqual(profile.names.aliases, [
    'Red-eyed Tree Frog',
    'Red-eyed Leaf Frog',
    'Red-eyed Multicolored Treefrog',
    'Gaudy Leaf Frog',
  ]);
  assert.equal(profile.scientificName, 'Agalychnis callidryas');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Amphibia', '两栖纲'],
      ['order', 'Anura', '无尾目'],
      ['family', 'Phyllomedusidae', '叶泡蛙科'],
      ['genus', 'Agalychnis', '红眼雨蛙属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'decreasing',
      assessedYear: 2016,
      criteria: undefined,
    },
  );

  assert.deepEqual(profile.distribution.countries, [
    '洪都拉斯',
    '尼加拉瓜',
    '哥斯达黎加',
    '巴拿马',
    '哥伦比亚',
  ]);
  assert.deepEqual(profile.distribution.realms, ['terrestrial', 'freshwater']);
  assert.deepEqual(profile.distribution.continents, ['北美洲', '南美洲']);
  for (const displacedCountry of ['墨西哥', '伯利兹', '危地马拉']) {
    assert.ok(!profile.distribution.countries.includes(displacedCountry));
  }
  assert.match(
    profile.distribution.range,
    /(?=[\s\S]*2019)(?=[\s\S]*Agalychnis taylori)(?=[\s\S]*A\. terranova)(?=[\s\S]*1325)/,
  );
  assert.equal(profile.habitats.length, 3);
  assert.equal(profile.habitats.filter(({ isPrimary }) => isPrimary).length, 1);
  assert.ok(profile.habitats.some(({ realm }) => realm === 'terrestrial'));
  assert.ok(profile.habitats.some(({ realm }) => realm === 'freshwater'));
  assert.deepEqual(
    {
      min: profile.measurements.length?.min,
      max: profile.measurements.length?.max,
      typical: profile.measurements.length?.typical,
      unit: profile.measurements.length?.unit,
    },
    { min: undefined, max: 7.1, typical: undefined, unit: 'cm' },
  );
  assert.match(
    profile.measurements.length?.note ?? '',
    /(?=[\s\S]*雄.{0,15}4\.45[–—-]5\.09)(?=[\s\S]*雌.{0,15}5\.44[–—-]6\.61)(?=[\s\S]*(?:不代表|不能构成).{0,15}全物种.{0,10}(?:下限|硬范围))/,
  );
  assert.deepEqual(profile.metrics, {
    elevationM: [0, 1325],
  });
  assert.deepEqual(profile.diet.types, ['carnivore', 'filter-feeder']);
  assert.match(
    profile.diet.description,
    /(?=[\s\S]*成体.{0,30}推测)(?=[\s\S]*野外食谱.{0,20}尚未)(?=[\s\S]*蝌蚪.{0,30}悬浮摄食)(?=[\s\S]*不能.{0,30}固定比例)/,
  );

  assert.equal(profile.storySections?.length, 6);
  assert.deepEqual(
    profile.storySections?.map(({ key }) => key),
    [
      'red-eyes-and-variable-flanks',
      'life-above-the-pond',
      'leaf-borne-egg-clutches',
      'vibration-cued-escape-hatching',
      'a-costly-head-start',
      'one-name-changing-map',
    ],
  );
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(profile.tags.length > 0);
  assert.ok(profile.summary.length > 0);
  assert.ok(profile.description.length > 0);
  assert.ok(profile.keyFacts.length >= 24);
  assert.ok(profile.threats.length >= 6);
  assert.ok(profile.conservationActions.length >= 7);
  assert.equal(profile.featuredStats.length, 4);
  assert.equal(new Set(profile.featuredStats.map(({ key }) => key)).size, 4);
  assert.deepEqual(
    profile.featuredStats.map(({ key, value, unit }) => [key, value, unit]),
    [
      ['female-maximum-svl', '7.1', '厘米'],
      ['recorded-elevation', '0–1325', '米'],
      ['undisturbed-hatching', '约 6–7', '天'],
      ['maximum-hatching-advance', '最多约 30', '%'],
    ],
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'red-eyed-tree-frog',
    basenames: [
      '01-rainforest-leaf-adult-cover',
      '02-red-eye-flank-bars-toe-pads',
      '03-lowland-wet-forest-pond-habitat',
      '04-nocturnal-moth-encounter',
      '05-leaf-egg-clutch-above-pond',
      '06-snake-attack-escape-hatching',
    ],
    credit: 'Fauna Atlas · AI 生成原创图像',
  });

  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-08-31'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );
  for (const requiredUrl of [
    'https://doi.org/10.2305/IUCN.UK.2020-1.RLTS.T55290A3028059.en',
    'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-callidryas',
    'https://amphibiansoftheworld.amnh.org/Amphibia/Anura/Phyllomedusidae/Agalychnis/Agalychnis-taylori',
    'https://cites.org/eng/taxonomy/term/4867',
    'https://panamabiota.org/portal/taxa/index.php?clid=16&taxauthid=1&taxon=10678',
    'https://doi.org/10.1073/pnas.92.8.3507',
    'https://doi.org/10.1016/j.anbehav.2004.09.019',
    'https://doi.org/10.1242/jeb.026518',
    'https://doi.org/10.1016/j.cub.2010.03.069',
    'https://doi.org/10.1111/btp.12032',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `Red-eyed Treefrog sources should include ${requiredUrl}`,
    );
  }
  assert.ok(
    !profile.sources.some(
      ({ url }) =>
        url ===
        'https://doi.org/10.2305/IUCN.UK.2020-3.RLTS.T55290A3028059.en',
    ),
    'the incorrect IUCN 2020-3 DOI should not appear',
  );

  const storyBodies = new Map(
    profile.storySections?.map(({ key, body }) => [key, body]) ?? [],
  );
  const editorialText = [
    profile.summary,
    profile.description,
    profile.distribution.range,
    profile.measurements.length?.note ?? '',
    profile.diet.description,
    ...(profile.storySections ?? []).map(({ body }) => body),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
  ].join(' ');
  assert.match(
    storyBodies.get('vibration-cued-escape-hatching') ?? '',
    /(?=[\s\S]*持续时间)(?=[\s\S]*间隔)(?=[\s\S]*频率)(?=[\s\S]*幅度)(?=[\s\S]*(?:并非|不是).{0,20}每次震动)/,
  );
  assert.match(
    storyBodies.get('a-costly-head-start') ?? '',
    /(?=[\s\S]*最多提前约三成)(?=[\s\S]*孵化酶)(?=[\s\S]*水生捕食者.{0,20}(?:劣势|风险))/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*IUCN)(?=[\s\S]*2016)(?=[\s\S]*早于 2019 年.{0,20}分类拆分)(?=[\s\S]*(?:不能视为|不能当作|不能代表).{0,30}狭义物种)/,
  );
  assert.doesNotMatch(editorialText, /(?:听见|看到|闻到)蛇后.{0,20}(?:孵化|跳水)/);
  assert.doesNotMatch(editorialText, /(?:自然分布|分布范围).{0,30}墨西哥.{0,30}哥伦比亚/);

  const galleryCaptions = new Map(
    (profile.media.gallery ?? []).map(({ image, caption }) => [
      image.split('/').at(-1) ?? '',
      caption ?? '',
    ]),
  );
  assert.match(
    galleryCaptions.get('04-nocturnal-moth-encounter.webp') ?? '',
    /不能确认.{0,50}(?:偏好|食谱比例).{0,80}野外食谱.{0,30}尚未/,
  );
  assert.match(
    galleryCaptions.get('06-snake-attack-escape-hatching.webp') ?? '',
    /不能从像素证明.{0,40}振动.{0,70}全部胚胎同步孵化.{0,25}存活/,
  );

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-08-31');
  assert.equal(profile.updatedAt, '2026-08-31');
});

test('registers the South American giant centipede as a bounded Scolopendra gigantea profile', async () => {
  const profile = findSpecies('south-american-giant-centipede');

  assert.equal(profile.id, 'species-scolopendra-gigantea');
  assert.equal(profile.slug, 'south-american-giant-centipede');
  assert.equal(profile.names.zh, '南美巨人蜈蚣');
  assert.ok(
    !(profile.names.aliases ?? []).some((alias) => /秘鲁|Peruvian/i.test(alias)),
    'the corrected profile must not retain the misleading Peru name as an alias',
  );
  assert.equal(profile.scientificName, 'Scolopendra gigantea');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Arthropoda', '节肢动物门'],
      ['class', 'Chilopoda', '唇足纲'],
      ['order', 'Scolopendromorpha', '蜈蚣目'],
      ['family', 'Scolopendridae', '蜈蚣科'],
      ['genus', 'Scolopendra', '蜈蚣属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );

  assert.ok(profile.distribution.realms.includes('terrestrial'));
  assert.deepEqual(profile.distribution.continents, ['北美洲', '南美洲']);
  assert.deepEqual(profile.distribution.countries, [
    '巴拿马',
    '哥伦比亚',
    '委内瑞拉',
    '圭亚那',
    '苏里南',
    '特立尼达和多巴哥',
    '阿鲁巴',
    '库拉索',
  ]);
  assert.ok(!profile.distribution.countries.includes('秘鲁'));
  assert.match(
    profile.distribution.range,
    /(?=[\s\S]*秘鲁)(?=[\s\S]*S\. galapagoensis)(?=[\s\S]*(?:旧记录|历史记录|过去记录))(?=[\s\S]*(?:排除|不纳入|不属于|不能纳入))/,
  );
  assert.ok(profile.habitats.length >= 3);
  assert.ok(profile.habitats.every(({ realm }) => realm === 'terrestrial'));
  const habitatText = profile.habitats
    .flatMap(({ name, description }) => [name, description])
    .join(' ');
  assert.match(habitatText, /低山原生雨林/);
  assert.match(
    habitatText,
    /(?=[\s\S]*巴拿马)(?=[\s\S]*850\s*米)(?=[\s\S]*原生雨林)(?=[\s\S]*(?:单点|单一).{0,20}(?:不代表|不能推导))/,
  );
  assert.equal(profile.measurements.length?.max, undefined);
  assert.equal(profile.metrics.adultLengthCm, undefined);
  assert.match(
    profile.measurements.length?.note ?? '',
    /(?=[\s\S]*(?:超过|>)\s*300\s*(?:毫米|mm))(?=[\s\S]*274\.6\s*(?:毫米|mm))(?=[\s\S]*(?:报道|记录))(?=[\s\S]*(?:不是|不代表|不能).{0,30}(?:上限|精确最大|硬范围))/i,
  );
  assert.ok(profile.diet.types.includes('carnivore'));
  assert.match(
    [...profile.diet.foods, profile.diet.description].join(' '),
    /Blaberus discoidalis/,
  );
  assert.doesNotMatch(
    [...profile.diet.foods, profile.diet.description].join(' '),
    /蟋蟀|cricket/i,
  );

  assert.equal(profile.storySections?.length, 6);
  assert.deepEqual(
    profile.storySections?.map(({ key }) => key),
    [
      'name-and-range-correction',
      'twenty-one-pairs',
      'forest-to-cave',
      'cockroach-handling',
      'three-bat-observations',
      'venom-evidence',
    ],
  );
  assert.equal(
    new Set(profile.storySections?.map(({ key }) => key)).size,
    6,
  );
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(profile.tags.length > 0);
  assert.ok(profile.summary.length > 0);
  assert.ok(profile.description.length > 0);
  assert.ok(profile.keyFacts.length >= 20);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);
  assert.equal(profile.featuredStats.length, 4);
  assert.deepEqual(
    profile.featuredStats.map(({ key }) => key),
    [
      'reported-upper-length',
      'antennal-articles',
      'walking-leg-pairs',
      'direct-bat-prey',
    ],
  );
  assert.deepEqual(
    profile.featuredStats.map(({ value }) => value),
    ['>300', '17', '21', '3'],
  );
  assert.deepEqual(profile.featuredStats[3], {
    key: 'direct-bat-prey',
    label: '直接记录蝙蝠猎物',
    value: '3',
    unit: '种',
    note: '同一洞穴三次独立偶遇观察，不是食谱比例。',
  });

  const storyBodies = new Map(
    (profile.storySections ?? []).map(({ key, body }) => [key, body]),
  );
  assert.match(
    storyBodies.get('cockroach-handling') ?? '',
    /(?=[\s\S]*约\s*50\s*分钟)(?=[\s\S]*(?:返回|回到).{0,20}(?:先前|第一只).{0,20}(?:制伏|制服).{0,10}蟑螂)(?=[\s\S]*(?:不能|不足以).{0,30}(?:固定.{0,10}记忆策略|记忆策略))/,
  );
  assert.match(
    storyBodies.get('three-bat-observations') ?? '',
    /(?=[\s\S]*(?:3|三)次独立)(?=[\s\S]*(?:3|三)种蝙蝠)(?=[\s\S]*没有看到最初捕捉)(?=[\s\S]*空中抓取.{0,10}(?:假说|推测))/,
  );

  const keyFactText = profile.keyFacts.join(' ');
  assert.match(
    keyFactText,
    /(?=[\s\S]*(?:21|二十一)\s*对步足)(?=[\s\S]*第一躯干附肢.{0,12}颚肢)(?=[\s\S]*颚肢.{0,20}(?:不属于|不计入).{0,8}步足)/,
  );
  assert.match(
    keyFactText,
    /(?=[\s\S]*(?:3\s*次|三次)独立.{0,20}(?:观察|偶遇))(?=[\s\S]*(?:3\s*种|三种)蝙蝠)(?=[\s\S]*没有看到.{0,12}最初捕捉)/,
  );
  assert.match(
    keyFactText,
    /(?=[\s\S]*窝卵数)(?=[\s\S]*孵化时长)(?=[\s\S]*繁殖季)(?=[\s\S]*成熟年龄)(?=[\s\S]*护幼时长)(?=[\s\S]*寿命)(?=[\s\S]*(?:缺少|没有).{0,30}物种级)/,
  );
  assert.match(
    keyFactText,
    /(?=[\s\S]*IUCN)(?=[\s\S]*NE)(?=[\s\S]*(?:未评估|没有返回.{0,10}评估|无物种级评估))/,
  );

  const safetyText = [
    ...(profile.storySections ?? []).map(({ body }) => body),
    ...profile.keyFacts,
    ...profile.conservationActions,
  ].join(' ');
  assert.match(
    safetyText,
    /(?=[\s\S]*(?:不要|避免|不).{0,8}徒手接触)(?=[\s\S]*(?:毒蜇|蜇伤).{0,20}(?:专业医疗评估|医疗专业人员))(?=[\s\S]*(?:不给|不提供|不能给).{0,12}(?:药物|急救处方|处方))/,
  );
  const conservationText = profile.conservationActions.join(' ');
  assert.match(conservationText, /(?=[\s\S]*形态诊断)(?=[\s\S]*DNA)(?=[\s\S]*互证)/);
  assert.match(
    conservationText,
    /(?=[\s\S]*蝙蝠洞穴)(?=[\s\S]*低干扰)(?=[\s\S]*非接触监测)/,
  );
  assert.match(
    conservationText,
    /(?=[\s\S]*Valle del Cauca)(?=[\s\S]*巴西)(?=[\s\S]*(?:离群|待确认).{0,12}记录)(?=[\s\S]*(?:复核|核查))/,
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'south-american-giant-centipede',
    basenames: [
      '01-caribbean-limestone-adult-cover',
      '02-dorsal-segment-and-leg-profile',
      '03-head-forcipules-macro',
      '04-nocturnal-discoid-cockroach-encounter',
      '05-limestone-thorn-scrub-habitat',
      '06-cave-ceiling-bat-context',
    ],
    verifyAcceptedHashes: true,
  });

  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.equal(profile.sources.length, 20);
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-09-01'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );
  for (const requiredUrl of [
    'https://myriatrix.myspecies.info/taxonomy/term/9017/descriptions',
    'https://chilobase.biologia.unipd.it/searches/result_subspecies/696',
    'https://chilobase.biologia.unipd.it/searches/result_species/94',
    'https://doi.org/10.1080/03946975.2000.10531129',
    'https://zenodo.org/records/15604109',
    'https://doi.org/10.17161/randa.v24i2.14166',
    'https://servicio.bc.uc.edu.ve/fcs/vol26n2/art02.pdf',
    'https://www.iucnredlist.org/search?query=Scolopendra%20gigantea&searchType=species',
    'https://nrl.iucnredlist.org/about/faqs',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `South American giant centipede sources should include ${requiredUrl}`,
    );
  }
  assert.ok(
    profile.sources.some(
      ({ title, url }) =>
        /Molinari et al\. 2005/i.test(title) && URL.canParse(url),
    ),
    'South American giant centipede sources should include the Molinari et al. 2005 cave record',
  );

  const editorialText = [
    profile.summary,
    profile.description,
    profile.distribution.range,
    profile.measurements.length?.note ?? '',
    profile.diet.description,
    ...(profile.storySections ?? []).map(({ body }) => body),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
  ].join(' ');
  assert.match(
    editorialText,
    /(?=[\s\S]*(?:17|十七)\s*(?:个)?触角节)(?=[\s\S]*(?:21|二十一)\s*对步足)(?=[\s\S]*(?:分类资料|分类文献|分类修订|原始描述))/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*委内瑞拉)(?=[\s\S]*(?:单一|同一|一个).{0,12}洞穴)(?=[\s\S]*(?:3|三)\s*次.{0,20}(?:记录|捕食))(?=[\s\S]*(?:3|三)\s*种.{0,12}蝙蝠)(?=[\s\S]*(?:不能|不可|不足以).{0,40}(?:泛化|整个物种|普遍|常见|主要猎物))/,
  );

  const galleryCaptions = new Map(
    (profile.media.gallery ?? []).map(({ image, caption }) => [
      image.split('/').at(-1) ?? '',
      caption ?? '',
    ]),
  );
  assert.match(
    galleryCaptions.get('02-dorsal-segment-and-leg-profile.webp') ?? '',
    /(?=[\s\S]*(?:不能|无法|不用于).{0,30}(?:核验|确认|证明))(?=[\s\S]*(?:17|触角节))(?=[\s\S]*(?:21|步足))/,
  );
  assert.match(
    galleryCaptions.get('04-nocturnal-discoid-cockroach-encounter.webp') ?? '',
    /(?=[\s\S]*(?:不能|无法|不代表|不构成).{0,40}(?:核验|证明))(?=[\s\S]*(?:身份|捕食|食谱|食性|猎物偏好|常见猎物))/,
  );
  assert.match(
    galleryCaptions.get('06-cave-ceiling-bat-context.webp') ?? '',
    /(?:不能|无法|不代表|不证明).{0,40}(?:捕食|捕获|袭击)/,
  );

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-09-01');
  assert.equal(profile.updatedAt, '2026-09-01');
});

test('registers the African giant millipede as a bounded Archispirostreptus gigas profile', async () => {
  const profile = findSpecies('african-giant-millipede');

  assert.equal(profile.id, 'species-archispirostreptus-gigas');
  assert.equal(profile.slug, 'african-giant-millipede');
  assert.equal(profile.names.zh, '非洲巨人马陆');
  assert.equal(profile.names.en, 'Giant African Millipede');
  assert.equal(profile.scientificName, 'Archispirostreptus gigas');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Arthropoda', '节肢动物门'],
      ['class', 'Diplopoda', '倍足纲'],
      ['order', 'Spirostreptida', '异蛩目'],
      ['family', 'Spirostreptidae', '异蛩科'],
      ['genus', 'Archispirostreptus', '非洲巨马陆属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'LC',
      trend: 'unknown',
      assessedYear: 2021,
      criteria: undefined,
    },
  );

  assert.deepEqual(profile.distribution.realms, ['terrestrial']);
  assert.deepEqual(profile.distribution.continents, ['非洲']);
  assert.deepEqual(profile.distribution.countries, [
    '肯尼亚',
    '莫桑比克',
    '索马里',
    '南非',
    '坦桑尼亚',
  ]);
  assert.ok(!profile.distribution.countries.includes('Zanzibar'));
  assert.match(
    profile.distribution.range,
    /(?=[\s\S]*Zanzibar)(?=[\s\S]*低精度)(?=[\s\S]*不代表连续占域)(?=[\s\S]*1,000\s*米)(?=[\s\S]*不是完整海拔包络)/,
  );
  assert.equal(profile.habitats.length, 3);
  assert.ok(profile.habitats.every(({ realm }) => realm === 'terrestrial'));

  assert.deepEqual(profile.measurements.length, {
    min: 178,
    max: 260,
    unit: 'mm',
    note: '178—260 毫米是 2010 年分类修订所检查材料的体长跨度，不是所有成体的典型范围或物种硬上限；综述另汇集过 130—320 毫米的饲养及二手记录。',
  });
  assert.deepEqual(profile.metrics, {});
  assert.ok(profile.diet.types.includes('detritivore'));
  assert.deepEqual(profile.diet.foods, [
    '腐烂落叶与其他植物碎屑',
    '腐木和软化木质',
    '落果',
  ]);

  assert.equal(profile.storySections?.length, 6);
  assert.deepEqual(
    profile.storySections?.map(({ key }) => key),
    [
      'name-in-parentheses',
      'rings-and-leg-pairs',
      'night-and-loose-soil',
      'detritivore-and-gut',
      'coil-and-benzoquinones',
      'mating-molting-life-cycle',
    ],
  );
  assert.equal(
    new Set(profile.storySections?.map(({ key }) => key)).size,
    6,
  );
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(profile.tags.length > 0);
  assert.ok(profile.summary.length > 0);
  assert.ok(profile.description.length > 0);
  assert.ok(profile.keyFacts.length >= 20);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);
  assert.equal(profile.featuredStats.length, 4);
  assert.deepEqual(
    profile.featuredStats.map(({ key }) => key),
    [
      'revision-length',
      'body-rings',
      'leg-pairs-per-diplosegment',
      'observed-mating-pass',
    ],
  );
  assert.deepEqual(
    profile.featuredStats.map(({ value }) => value),
    ['178–260', '62–70', '2', '≈35'],
  );

  const editorialText = [
    profile.summary,
    profile.description,
    profile.distribution.range,
    profile.measurements.length?.note ?? '',
    profile.diet.description,
    ...(profile.activity ?? []),
    ...(profile.storySections ?? []).map(({ body }) => body),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
  ].join(' ');
  assert.match(
    editorialText,
    /(?=[\s\S]*IUCN)(?=[\s\S]*(?:2021|2021 年))(?=[\s\S]*(?:LC|无危))(?=[\s\S]*趋势.{0,12}未知)/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*(?:甲基对苯醌|2-methyl-1,4-benzoquinone))(?=[\s\S]*2-甲氧基-3-甲基-1,4-苯醌)(?=[\s\S]*(?:不支持|不应).{0,20}氰化物)/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*宠物贸易)(?=[\s\S]*(?:规模|野采数量).{0,20}未知)(?=[\s\S]*(?:影响|种群影响).{0,12}未知)/,
  );
  assert.match(
    profile.conservationActions.join(' '),
    /(?=[\s\S]*成年雄性生殖肢形态)(?=[\s\S]*DNA 条形码)(?=[\s\S]*互证)/,
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'african-giant-millipede',
    basenames: [
      '01-coastal-forest-adult-cover',
      '02-cylindrical-rings-and-leg-pairs',
      '03-decaying-leaf-and-wood-feeding',
      '04-tight-defensive-coil',
      '05-juvenile-after-molt',
      '06-night-leaf-litter-survey',
    ],
    verifyAcceptedHashes: true,
  });

  const galleryCaptions = new Map(
    (profile.media.gallery ?? []).map(({ image, caption }) => [
      image.split('/').at(-1) ?? '',
      caption ?? '',
    ]),
  );
  assert.match(
    galleryCaptions.get('02-cylindrical-rings-and-leg-pairs.webp') ?? '',
    /不能核验.{0,30}(?:环|足数).{0,40}物种身份/,
  );
  assert.match(
    galleryCaptions.get('03-decaying-leaf-and-wood-feeding.webp') ?? '',
    /不能确认.{0,30}真实摄食事件.{0,30}食物比例.{0,30}(?:分解效率|野外处理量)/,
  );
  assert.match(
    galleryCaptions.get('04-tight-defensive-coil.webp') ?? '',
    /不能证明.{0,30}分泌物释放.{0,30}苯醌/,
  );
  assert.match(
    galleryCaptions.get('06-night-leaf-litter-survey.webp') ?? '',
    /不代表.{0,30}(?:标准协议|真实地点).{0,50}种群趋势/,
  );

  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.equal(profile.sources.length, 18);
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-09-01'),
  );
  for (const requiredUrl of [
    'https://www.millibase.org/aphia.php?p=taxdetails&id=947329',
    'https://doi.org/10.11646/zootaxa.2567.1.1',
    'https://doi.org/10.2305/IUCN.UK.2021-2.RLTS.T103866629A103877116.en',
    'https://www.aszb.cz/77-145/77-145.pdf',
    'https://doi.org/10.2110/palo.2008.p08-098r',
    'https://doi.org/10.1016/j.cbpb.2019.110388',
    'https://doi.org/10.1128/AEM.00614-21',
    'https://doi.org/10.1093/aesa/67.6.988',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `African giant millipede sources should include ${requiredUrl}`,
    );
  }

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-09-01');
  assert.equal(profile.updatedAt, '2026-09-01');
});

test('registers the Emperor Scorpion as a bounded Pandinus imperator profile', async () => {
  const profile = findSpecies('emperor-scorpion');

  assert.equal(profile.id, 'species-pandinus-imperator');
  assert.equal(profile.slug, 'emperor-scorpion');
  assert.equal(profile.names.zh, '帝王蝎');
  assert.ok(profile.names.aliases?.includes('将军巨蝎'));
  assert.equal(profile.scientificName, 'Pandinus imperator');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
    ]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Arthropoda'],
      ['class', 'Arachnida'],
      ['order', 'Scorpiones'],
      ['family', 'Scorpionidae'],
      ['genus', 'Pandinus'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );

  assert.equal(profile.storySections?.length, 6);
  assert.equal(new Set(profile.storySections?.map(({ key }) => key)).size, 6);
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.ok(profile.tags.length > 0);
  assert.ok(profile.summary.length > 0);
  assert.ok(profile.description.length > 0);
  assert.ok(profile.keyFacts.length > 0);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);
  assert.equal(profile.featuredStats.length, 4);
  assert.equal(new Set(profile.featuredStats.map(({ key }) => key)).size, 4);

  const lengthEvidence = [
    profile.measurements.length?.note ?? '',
    profile.summary,
    profile.description,
    ...profile.keyFacts,
  ].join(' ');
  assert.match(lengthEvidence, /20\s*(?:厘米|cm)/i);
  assert.match(
    lengthEvidence,
    /(?:20\s*(?:厘米|cm).{0,160}(?:不是|不代表|不能|不应|缺少|缺乏|欠缺|没有).{0,80}(?:稳定|典型|成体|上限|范围)|(?:不是|不代表|不能|不应|缺少|缺乏|欠缺|没有).{0,160}20\s*(?:厘米|cm))/i,
  );

  const editorialText = [
    profile.summary,
    profile.description,
    profile.distribution.range,
    profile.measurements.length?.note ?? '',
    profile.diet.description,
    ...(profile.activity ?? []),
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
  ].join(' ');
  assert.match(editorialText, /IUCN.{0,100}(?:NE|未评估|没有.{0,20}评估)/i);
  assert.match(
    editorialText,
    /(?=[\s\S]*CITES)(?=[\s\S]*附录\s*II)(?=[\s\S]*1995)/i,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*(?:(?:外源|外部).{0,30}(?:紫外|UV).{0,30}(?:激发|照射)|(?:紫外|UV).{0,30}(?:外源|外部).{0,30}(?:激发|照射)))(?=[\s\S]*纳秒)(?=[\s\S]*荧光)(?=[\s\S]*(?:1997|Fasel).{0,160}(?:结论|认为|得出).{0,60}(?:不承担|没有|无).{0,30}生物学作用)/i,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*1985)(?=[\s\S]*(?:(?:2|两)\s*只.{0,40}(?:圈养.{0,20})?(?:幼体|幼蝎|未成年)|圈养.{0,40}(?:2|两)\s*只.{0,20}(?:幼体|幼蝎|未成年)))(?=[\s\S]*6\s*[–—-]\s*8\s*(?:厘米|cm))(?=[\s\S]*(?:转变|切换|变化|阈值))(?=[\s\S]*(?:(?:成年|成体).{0,80}(?:不能|不可|不应|没有).{0,40}(?:外推|泛化|推断|结论)|(?:不能|不可|不应|没有).{0,80}(?:外推|泛化|推断).{0,40}(?:成年|成体)))/i,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*(?:1999.{0,80}科特迪瓦|科特迪瓦.{0,80}1999))(?=[\s\S]*(?:森林.{0,100}(?:25|二十五).{0,30}雌|(?:25|二十五).{0,30}雌.{0,100}森林))(?=[\s\S]*(?:(?:稀树草原|savanna).{0,100}(?:25|二十五).{0,30}雌|(?:25|二十五).{0,30}雌.{0,100}(?:稀树草原|savanna)))(?=[\s\S]*(?:森林.{0,140}28\s*[–—-]\s*42|28\s*[–—-]\s*42.{0,140}森林))(?=[\s\S]*(?:(?:稀树草原|savanna).{0,140}7\s*[–—-]\s*21|7\s*[–—-]\s*21.{0,140}(?:稀树草原|savanna)))(?=[\s\S]*胚胎)/i,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*1990)(?=[\s\S]*(?:育幼|母体照护|母蝎照护))(?=[\s\S]*(?:家族|家庭群|母幼群))(?=[\s\S]*(?:实验|圈养))/,
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'emperor-scorpion',
    basenames: [
      '01-forest-refuge-portrait',
      '02-dorsal-morphology',
      '03-ultraviolet-fluorescence',
      '04-pectine-sensory-combs',
      '05-pedipalp-prey-restraint',
      '06-maternal-brood-care',
    ],
    verifyAcceptedHashes: true,
  });

  const galleryCaptions = new Map(
    (profile.media.gallery ?? []).map(({ image, caption }) => [
      image.split('/').at(-1) ?? '',
      caption ?? '',
    ]),
  );
  assert.match(
    galleryCaptions.get('02-dorsal-morphology.webp') ?? '',
    /(?:不能|无法|不用于).{0,60}(?:物种身份|种级鉴定|诊断).{0,80}(?:体长|尺寸|测量)|(?:不能|无法|不用于).{0,60}(?:体长|尺寸|测量).{0,80}(?:物种身份|种级鉴定|诊断)/,
  );
  assert.match(
    galleryCaptions.get('03-ultraviolet-fluorescence.webp') ?? '',
    /(?=[\s\S]*(?:外源|外部).{0,30}(?:紫外|UV)|(?:紫外|UV).{0,30}(?:外源|外部))(?=[\s\S]*纳秒)(?=[\s\S]*荧光)(?=[\s\S]*(?:1997|Fasel).{0,80}(?:论文|研究).{0,50}(?:认为|结论).{0,40}(?:不承担|没有|无).{0,30}生物学作用)/i,
  );
  assert.match(
    galleryCaptions.get('04-pectine-sensory-combs.webp') ?? '',
    /(?=[\s\S]*(?:不能|无法).{0,50}(?:齿数|齿的数量))(?=[\s\S]*(?:性别|雌雄))(?=[\s\S]*(?:物种|种级|身份))/,
  );
  assert.match(
    galleryCaptions.get('05-pedipalp-prey-restraint.webp') ?? '',
    /(?=[\s\S]*(?:不能|无法|不代表).{0,60}(?:野外|自然).{0,30}(?:猎物|捕食))(?=[\s\S]*(?:成年|成体).{0,50}(?:从不|不会|不用).{0,20}(?:蜇刺|毒刺|螫刺|尾刺))/,
  );
  assert.match(
    galleryCaptions.get('06-maternal-brood-care.webp') ?? '',
    /(?=[\s\S]*(?:不能|无法|不代表).{0,50}(?:固定|恒定).{0,30}(?:幼体数|幼仔数|窝仔数|育幼数))(?=[\s\S]*(?:持续|维持).{0,30}(?:时间|时长|多久))/,
  );

  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-09-01'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'conservation', 'distribution', 'ecology', 'general']),
  );
  assert.ok(
    profile.sources.some(
      ({ title, url }) => /IUCN/i.test(title) && /iucnredlist\.org/i.test(url),
    ),
  );
  assert.ok(
    profile.sources.some(({ url }) => {
      const hostname = new URL(url).hostname;
      return hostname === 'cites.org' || hostname.endsWith('.cites.org');
    }),
  );
  for (const year of ['1985', '1990', '1999']) {
    assert.ok(
      profile.sources.some(({ title }) => title.includes(year)),
      `Emperor Scorpion sources should include the ${year} study`,
    );
  }

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-09-01');
  assert.equal(profile.updatedAt, '2026-09-01');
});

test('registers the Large Water Flea as a bounded Daphnia magna profile', async () => {
  const profile = findSpecies('large-water-flea');

  assert.equal(profile.id, 'species-daphnia-magna');
  assert.equal(profile.slug, 'large-water-flea');
  assert.equal(profile.names.zh, '大型溞');
  assert.equal(profile.names.en, 'Large Water Flea');
  assert.ok(profile.names.aliases?.includes('大型水蚤'));
  assert.equal(profile.scientificName, 'Daphnia magna');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Arthropoda', '节肢动物门'],
      ['class', 'Branchiopoda', '鳃足纲'],
      ['order', 'Anomopoda', '异足目'],
      ['family', 'Daphniidae', '溞科'],
      ['genus', 'Daphnia', '溞属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );

  assert.deepEqual(profile.distribution.realms, ['freshwater']);
  assert.deepEqual(profile.distribution.countries, []);
  assert.deepEqual(
    {
      min: profile.measurements.length?.min,
      max: profile.measurements.length?.max,
      unit: profile.measurements.length?.unit,
    },
    { min: 2.2, max: 6, unit: 'mm' },
  );
  assert.deepEqual(profile.metrics.adultLengthCm, [0.22, 0.6]);

  assert.deepEqual(
    profile.storySections?.map(({ key }) => key),
    [
      'taxonomy-aperture',
      'transparent-filter-feeder',
      'food-web-and-predator-plasticity',
      'parthenogenetic-brood-chamber',
      'ephippium-resting-egg-bank',
      'ecotoxicology-test-organism',
    ],
  );
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.deepEqual(
    profile.featuredStats.map(({ key, value, unit }) => ({ key, value, unit })),
    [
      {
        key: 'adult-length',
        value: '约 2.2–6.0',
        unit: '毫米',
      },
      {
        key: 'maturity-at-20c',
        value: '6–8',
        unit: '天',
      },
      {
        key: 'resting-eggs',
        value: '通常 2',
        unit: '枚',
      },
      {
        key: 'standard-tests',
        value: '48 / 21',
        unit: '小时 / 天',
      },
    ],
  );
  assert.ok(profile.featuredStats.every(({ note }) => (note?.length ?? 0) > 0));
  assert.ok(profile.tags.length > 0);
  assert.ok(profile.summary.length > 0);
  assert.ok(profile.description.length > 0);
  assert.ok(profile.keyFacts.length > 0);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);

  const editorialText = [
    profile.summary,
    profile.description,
    profile.distribution.range,
    ...profile.habitats.flatMap(({ name, description }) => [name, description]),
    profile.measurements.length?.note ?? '',
    profile.diet.description,
    ...(profile.activity ?? []),
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
  ].join(' ');
  assert.match(
    editorialText,
    /活动抑制.{0,40}(?:可以包括|可包括)死亡.{0,30}(?:不等同于|不代表)死亡率/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*休眠卵是胚胎)(?=[\s\S]*卵鞍是(?:背甲特化形成的)?保护结构)(?=[\s\S]*(?:两者|休眠卵与卵鞍).{0,30}(?:不能互换|不是同一个结构))/,
  );
  assert.match(
    editorialText,
    /(?:单一实验克隆|单克隆标准试验).{0,40}(?:不能|不可).{0,20}(?:代表|外推).{0,30}(?:全种|所有大型溞种群)/,
  );
  assert.match(
    editorialText,
    /IUCN 尚未(?:发布|完成).{0,20}(?:本种)?全球评估.{0,60}NE.{0,40}(?:不等于|不能代表).{0,30}(?:LC|无危|种群稳定)/,
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'large-water-flea',
    basenames: [
      '01-shallow-pond-portrait',
      '02-lateral-morphology',
      '03-filter-feeding-algae',
      '04-parthenogenetic-brood',
      '05-dark-ephippium',
      '06-ecotoxicology-test-vessels',
    ],
    verifyAcceptedHashes: true,
  });

  const galleryCaptions = new Map(
    (profile.media.gallery ?? []).map(({ image, caption }) => [
      image.split('/').at(-1) ?? '',
      caption ?? '',
    ]),
  );
  assert.match(
    galleryCaptions.get('05-dark-ephippium.webp') ?? '',
    /(?:不能|无法).{0,30}(?:每个|固定).{0,30}卵鞍.{0,40}(?:两枚|休眠卵)/,
  );
  assert.match(
    galleryCaptions.get('06-ecotoxicology-test-vessels.webp') ?? '',
    /(?=[\s\S]*(?:不代表|不能确认).{0,40}(?:OECD|HJ).{0,20}(?:合规)?试验)(?=[\s\S]*(?:不能|无法).{0,80}(?:活动抑制|EC50|繁殖结果))/,
  );

  assert.equal(profile.sources.length, 33);
  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-09-01'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'distribution', 'general', 'ecology', 'conservation']),
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/aphia.php?p=taxdetails&id=148372',
    'https://doi.org/10.11646/zootaxa.3904.1.1',
    'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=83884',
    'https://doi.org/10.1007/s10530-023-03164-7',
    'https://doi.org/10.1787/9789264069947-en',
    'https://doi.org/10.1787/9789264185203-en',
    'https://www.iucnredlist.org/search?query=Daphnia%20magna&searchType=species',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `Large Water Flea sources should include ${requiredUrl}`,
    );
  }

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-09-01');
  assert.equal(profile.updatedAt, '2026-09-01');
});

test('registers the Peacock Mantis Shrimp as a bounded Odontodactylus scyllarus profile', async () => {
  const profile = findSpecies('peacock-mantis-shrimp');

  assert.equal(profile.id, 'species-odontodactylus-scyllarus');
  assert.equal(profile.slug, 'peacock-mantis-shrimp');
  assert.equal(profile.names.zh, '雀尾螳螂虾');
  assert.equal(profile.names.en, 'Peacock Mantis Shrimp');
  assert.ok(profile.names.aliases?.includes('蝉型齿指虾蛄'));
  assert.equal(profile.scientificName, 'Odontodactylus scyllarus');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Arthropoda', '节肢动物门'],
      ['class', 'Malacostraca', '软甲纲'],
      ['order', 'Stomatopoda', '口足目'],
      ['family', 'Odontodactylidae', '齿指虾蛄科'],
      ['genus', 'Odontodactylus', '齿指虾蛄属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'NE',
      trend: 'unknown',
      assessedYear: undefined,
      criteria: undefined,
    },
  );

  assert.deepEqual(profile.distribution.realms, ['marine']);
  assert.deepEqual(profile.distribution.continents, ['非洲', '亚洲', '大洋洲']);
  assert.deepEqual(profile.distribution.countries, []);
  assert.match(profile.distribution.range, /印度[—-]西太平洋/);
  assert.match(profile.distribution.range, /国家清单并非穷尽/);
  assert.equal(profile.habitats.length, 3);
  assert.ok(profile.habitats.every(({ realm }) => realm === 'marine'));
  assert.equal(
    profile.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.deepEqual(profile.measurements.length, {
    max: 171,
    unit: 'mm',
    note:
      'Manning 1967 报告的最大总长，经 2001 与 2025 分类处理引用；不是典型成体范围、平均值、甲长或图片测量。',
  });
  assert.match(
    profile.measurements.length?.note ?? '',
    /(?=[\s\S]*总长)(?=[\s\S]*(?:不是|不代表).{0,40}典型成体)(?=[\s\S]*(?:不是|不代表).{0,80}甲长)/,
  );
  assert.deepEqual(profile.metrics, {});
  for (const excludedMetric of [
    'adultLengthCm',
    'lifespanYears',
    'topSpeedKph',
    'maxDiveDepthM',
  ]) {
    assert.ok(!(excludedMetric in profile.metrics));
  }

  assert.deepEqual(profile.diet.types, ['carnivore']);
  assert.deepEqual(profile.diet.foods, ['腹足类', '双壳类', '其他甲壳类']);
  const activityText = (profile.activity ?? []).join(' ');
  assert.match(activityText, /白昼/);
  assert.match(activityText, /夜间/);
  assert.match(activityText, /缺少物种级昼夜活动时间预算/);

  assert.deepEqual(
    profile.storySections?.map(({ key }) => key),
    [
      'stomatopod-body-plan',
      'rubble-burrow-and-activity',
      'spring-loaded-raptorial-club',
      'impact-and-cavitation',
      'three-part-polarization-eye',
      'egg-mass-and-data-gaps',
    ],
  );
  assert.equal(new Set(profile.storySections?.map(({ key }) => key)).size, 6);
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.deepEqual(
    profile.featuredStats.map(({ key, value, unit }) => ({ key, value, unit })),
    [
      {
        key: 'published-maximum-total-length',
        value: '171',
        unit: '毫米',
      },
      {
        key: 'raptorial-strike-speed',
        value: '14–23',
        unit: '米/秒',
      },
      {
        key: 'peak-impact-force',
        value: '最高 1,501',
        unit: '牛',
      },
      {
        key: 'colour-channels',
        value: '最多 12',
        unit: '通道',
      },
    ],
  );
  assert.ok(profile.featuredStats.every(({ note }) => (note?.length ?? 0) > 0));
  assert.ok(profile.tags.length > 0);
  assert.ok(profile.summary.length > 0);
  assert.ok(profile.description.length > 0);
  assert.ok(profile.keyFacts.length > 0);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);

  const mediaRecords = [profile.media, ...(profile.media.gallery ?? [])];
  const editorialText = [
    profile.summary,
    profile.description,
    profile.distribution.range,
    ...profile.habitats.flatMap(({ name, description }) => [name, description]),
    profile.measurements.length?.note ?? '',
    profile.diet.description,
    ...(profile.activity ?? []),
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    ...mediaRecords.flatMap(({ alt, title, caption }) => [
      alt,
      title ?? '',
      caption ?? '',
    ]),
  ].join(' ');
  assert.match(
    editorialText,
    /(?=[\s\S]*软甲纲.{0,20}口足目)(?=[\s\S]*(?:不是真正的|不属于).{0,20}十足目)/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*14[—–-]23\s*米\/秒)(?=[\s\S]*(?:掠肢|棒状指节).{0,80}(?:不是|不能写成).{0,20}(?:整只动物|游速))/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*1,501\s*牛)(?=[\s\S]*平面钢传感器.{0,30}最高)(?=[\s\S]*(?:不是|不代表).{0,30}(?:每次|每拳|自然猎物))/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*(?:冲击峰|第一个力峰))(?=[\s\S]*空化.{0,30}(?:第二个峰|泡塌陷峰))(?=[\s\S]*390[—–-]480\s*微秒)/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*(?:三个暗点|三个暗色假瞳孔))(?=[\s\S]*假瞳孔)(?=[\s\S]*(?:不是|而非).{0,12}(?:三个)?真实瞳孔)/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*(?:最多\s*)?12\s*个颜色视觉通道)(?=[\s\S]*(?:不表示|不等于).{0,30}十二倍.{0,10}(?:颜色|色彩))(?=[\s\S]*(?:色觉精度|色差判断))/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*紫外)(?=[\s\S]*线性偏振)(?=[\s\S]*(?:圆偏振|左右旋))/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*眼内滤光结构)(?=[\s\S]*体表附肢)(?=[\s\S]*外源激发)(?=[\s\S]*(?:不是|不属于)生物发光)(?=[\s\S]*(?:自然)?功能.{0,8}(?:未知|未明))/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*雌体.{0,20}(?:持抱|抱住).{0,20}卵团)(?=[\s\S]*(?:不能给出|缺可靠).{0,30}固定卵数)(?=[\s\S]*孵育时长)(?=[\s\S]*幼体阶段)(?=[\s\S]*4[—–-]6\s*年寿命)/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*水族(?:展示)?贸易.{0,20}(?:确认存在|已经确认存在))(?=[\s\S]*(?:缺少|未知).{0,30}采集量)(?=[\s\S]*(?:种群效应|种群影响).{0,20}(?:资料|未知|未量化))/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*IUCN.{0,30}(?:尚无|尚未).{0,20}(?:全球评估|评估))(?=[\s\S]*NE.{0,30}(?:不等于|不能解释成).{0,20}(?:LC|无危))(?=[\s\S]*CITES.{0,40}(?:缺席|未列).{0,30}(?:不能|不代表).{0,30}(?:安全|可持续))/,
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'peacock-mantis-shrimp',
    basenames: [
      '01-reef-burrow-portrait',
      '02-external-morphology',
      '03-raptorial-club-strike',
      '04-compound-eye-midband',
      '05-burrow-maintenance',
      '06-egg-mass-care',
    ],
    verifyAcceptedHashes: true,
  });

  const galleryCaptions = new Map(
    (profile.media.gallery ?? []).map(({ image, caption }) => [
      image.split('/').at(-1) ?? '',
      caption ?? '',
    ]),
  );
  assert.match(
    galleryCaptions.get('02-external-morphology.webp') ?? '',
    /不能确认物种.{0,40}不能核验.{0,40}(?:齿数|刺数|纵脊)/,
  );
  assert.match(
    galleryCaptions.get('03-raptorial-club-strike.webp') ?? '',
    /不能测量.{0,60}(?:速度|加速度).{0,30}(?:冲击力|空化力).{0,30}(?:两峰间隔|空化)/,
  );
  assert.match(
    galleryCaptions.get('04-compound-eye-midband.webp') ?? '',
    /不能显示.{0,60}(?:感受器|光谱通道).{0,30}偏振敏感.{0,40}(?:色觉精度|所见颜色)/,
  );
  assert.match(
    galleryCaptions.get('05-burrow-maintenance.webp') ?? '',
    /不能证明.{0,50}(?:建造者|洞穴建造者).{0,40}(?:长度|形状).{0,50}(?:领地归属|底质偏好)/,
  );
  assert.match(
    galleryCaptions.get('06-egg-mass-care.webp') ?? '',
    /不能确定.{0,30}卵数.{0,30}(?:孵育时长|胚胎阶段).{0,50}(?:配偶制度|孵化率)/,
  );

  assert.equal(profile.sources.length, 28);
  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-09-01'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'general', 'ecology', 'distribution', 'conservation']),
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/aphia.php?p=taxdetails&id=220297',
    'https://doi.org/10.11646/zootaxa.5713.1.1',
    'https://doi.org/10.1038/428819a',
    'https://doi.org/10.1242/jeb.01831',
    'https://doi.org/10.1242/jeb.006486',
    'https://doi.org/10.1007/s00359-009-0491-y',
    'https://doi.org/10.1016/j.cub.2008.02.066',
    'https://doi.org/10.1371/journal.pone.0292476',
    'https://ocean.si.edu/ocean-life/invertebrates/mantis-shrimp-carries-eggs',
    'https://www.iucnredlist.org/search?query=Odontodactylus%20scyllarus&searchType=species',
    'https://checklist.cites.org/',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `Peacock Mantis Shrimp sources should include ${requiredUrl}`,
    );
  }

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-09-01');
  assert.equal(profile.updatedAt, '2026-09-01');
});

test('registers the Seventeen-year Cicada as a bounded Magicicada septendecim profile', async () => {
  const profile = findSpecies('seventeen-year-cicada');

  assert.equal(profile.id, 'species-magicicada-septendecim');
  assert.equal(profile.slug, 'seventeen-year-cicada');
  assert.equal(profile.names.zh, '十七年蝉');
  assert.equal(profile.names.en, 'Seventeen-year Cicada');
  assert.ok(profile.names.aliases?.includes('法老蝉'));
  assert.ok(profile.names.aliases?.includes('Pharaoh cicada'));
  assert.ok(profile.names.aliases?.includes('17-year locust'));
  assert.equal(profile.scientificName, 'Magicicada septendecim');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Arthropoda', '节肢动物门'],
      ['class', 'Insecta', '昆虫纲'],
      ['order', 'Hemiptera', '半翅目'],
      ['family', 'Cicadidae', '蝉科'],
      ['genus', 'Magicicada', '周期蝉属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'NT',
      trend: 'unknown',
      assessedYear: 1996,
      criteria: undefined,
    },
  );

  assert.deepEqual(profile.distribution.realms, ['terrestrial']);
  assert.deepEqual(profile.distribution.continents, ['北美洲']);
  assert.deepEqual(profile.distribution.countries, ['美国']);
  assert.deepEqual(profile.distribution.endemicTo, ['北美洲东部']);
  assert.deepEqual(profile.distribution.center, { lat: 39.5, lng: -82.5 });
  assert.match(profile.distribution.range, /北美洲东部/);
  assert.match(
    profile.distribution.range,
    /1996 年 IUCN.{0,20}加拿大与美国.{0,50}UConn.{0,30}不足以.{0,20}加拿大.{0,60}结构化国家只保留美国/,
  );
  assert.match(
    profile.distribution.range,
    /点位.{0,30}未画连续边界.{0,30}空白地点不等于缺失.{0,30}不表示当地丰度/,
  );
  assert.equal(profile.habitats.length, 3);
  assert.ok(profile.habitats.every(({ realm }) => realm === 'terrestrial'));
  assert.equal(
    profile.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );

  assert.deepEqual(profile.measurements.length, {
    min: 27,
    max: 33,
    unit: 'mm',
    note:
      'Alexander 与 Moore 1962 年物种鉴别表的头至腹端体长，不含超出腹端的翅；这是鉴别资料范围，不是所有成虫的硬下限、硬上限或图片测量。',
  });
  assert.deepEqual(profile.metrics, { adultLengthCm: [2.7, 3.3] });
  for (const excludedMetric of [
    'lifespanYears',
    'adultMassKg',
    'estimatedMatureIndividuals',
  ]) {
    assert.ok(!(excludedMetric in profile.metrics));
  }

  assert.deepEqual(profile.diet.types, ['herbivore']);
  assert.deepEqual(profile.diet.foods, [
    '若虫取食的木本植物根部木质部液体',
    '成虫取食的活木本枝条木质部液体',
  ]);
  assert.match(profile.diet.description, /2023 年分子肠内容研究/);
  assert.match(
    profile.diet.description,
    /不能给出.{0,30}宿主清单.{0,30}各树种比例.{0,20}单只摄入量/,
  );
  const activityText = (profile.activity ?? []).join(' ');
  assert.match(activityText, /地下.{0,20}十七年.{0,20}五个龄期/);
  assert.match(activityText, /离群个体.{0,15}提前或延后/);
  assert.match(activityText, /日落后/);

  assert.deepEqual(
    profile.storySections?.map(({ key }) => key),
    [
      'decim-identification',
      'seventeen-year-underground-cycle',
      'synchronized-emergence-boundaries',
      'chorus-and-wing-flick-duet',
      'twig-oviposition-and-hatching',
      'broods-and-stale-assessment',
    ],
  );
  assert.equal(new Set(profile.storySections?.map(({ key }) => key)).size, 6);
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.deepEqual(
    profile.featuredStats.map(({ key, value, unit }) => ({ key, value, unit })),
    [
      { key: 'population-cycle', value: '17', unit: '年' },
      { key: 'diagnostic-body-length', value: '27–33', unit: '毫米' },
      { key: 'nymphal-instars', value: '5', unit: '龄' },
      {
        key: 'documented-broods',
        value: 'I–X、XIII–XIV',
        unit: undefined,
      },
    ],
  );
  assert.ok(profile.featuredStats.every(({ note }) => (note?.length ?? 0) > 0));
  assert.ok(profile.tags.length > 0);
  assert.ok(profile.summary.length > 0);
  assert.ok(profile.description.length > 0);
  assert.equal(profile.keyFacts.length, 15);
  assert.equal(profile.threats.length, 6);
  assert.equal(profile.conservationActions.length, 6);

  const mediaRecords = [profile.media, ...(profile.media.gallery ?? [])];
  const editorialText = [
    profile.summary,
    profile.description,
    profile.distribution.range,
    ...profile.habitats.flatMap(({ name, description }) => [name, description]),
    profile.measurements.length?.note ?? '',
    profile.diet.description,
    ...(profile.activity ?? []),
    ...(profile.storySections ?? []).flatMap(({ label, title, body }) => [
      label,
      title,
      body,
    ]),
    ...profile.keyFacts,
    ...profile.threats,
    ...profile.conservationActions,
    ...profile.featuredStats.flatMap(({ label, value, unit, note }) => [
      label,
      value,
      unit ?? '',
      note ?? '',
    ]),
    ...mediaRecords.flatMap(({ alt, title, caption }) => [
      alt,
      title ?? '',
      caption ?? '',
    ]),
  ].join(' ');
  assert.match(
    editorialText,
    /(?=[\s\S]*Hemiptera)(?=[\s\S]*Cicadidae)(?=[\s\S]*Magicicada)(?=[\s\S]*17-year locust.{0,40}不属于直翅目的蝗虫)/,
  );
  assert.match(
    editorialText,
    /27[—–-]33\s*毫米.{0,50}(?:不含翅尖|不含超出腹端的翅).{0,60}(?:不是|不构成).{0,40}(?:硬范围|硬下限)/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*改变.{0,20}宿主树季节循环.{0,30}诱发提前变态)(?=[\s\S]*(?:完整生理时钟|完整感受与计时机制).{0,10}(?:未知|没有找出))/,
  );
  assert.match(
    editorialText,
    /straggler.{0,60}(?:不把它写成|不能当作).{0,30}固定寿命/,
  );
  assert.match(
    editorialText,
    /20\s*厘米.{0,30}17\.8\s*摄氏度.{0,60}(?:不是|不能).{0,30}(?:固定阈值|硬出土阈值)/,
  );
  assert.match(
    editorialText,
    /康涅狄格 Brood II.{0,40}日落前后.{0,40}这个地点结果.{0,20}不能.{0,20}全种统一/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*第一腹节.{0,30}鼓膜器)(?=[\s\S]*雌虫.{0,50}振翅回应)(?=[\s\S]*CI、CII、CIII)/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*每室最多约 20 枚)(?=[\s\S]*雌虫最多约 600 枚)(?=[\s\S]*6[—–-]10 周)(?=[\s\S]*属级.{0,30}(?:不能当(?:作|成)|不是).{0,30}固定)/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*brood.{0,40}记账单位)(?=[\s\S]*(?:不是|不等于).{0,30}(?:物种|亚种|单一演化种群))(?=[\s\S]*I[—–-]X、XIII[—–-]XIV)/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*IUCN.{0,30}1996)(?=[\s\S]*2\.3.{0,20}LR\/nt)(?=[\s\S]*现行汇总.{0,20}NT)(?=[\s\S]*(?:旧评估|评估年龄).{0,60}(?:不能|阻止).{0,50}(?:趋势|成熟个体数|威胁))/,
  );
  assert.match(
    editorialText,
    /(?=[\s\S]*CITES)(?=[\s\S]*2026)(?=[\s\S]*(?:未列|未列名|未列出))(?=[\s\S]*(?:不代表|不等于).{0,30}(?:无危|没有地方性保护需求|贸易没有影响))/,
  );

  await assertGeneratedImageSet({
    profile,
    slug: 'seventeen-year-cicada',
    basenames: [
      '01-adult-forest-portrait',
      '02-adult-external-morphology',
      '03-synchronized-night-emergence',
      '04-male-chorus-calling',
      '05-female-twig-oviposition',
      '06-underground-nymph-root-feeding',
    ],
    verifyAcceptedHashes: true,
  });

  const galleryCaptions = new Map(
    (profile.media.gallery ?? []).map(({ image, caption }) => [
      image.split('/').at(-1) ?? '',
      caption ?? '',
    ]),
  );
  assert.match(
    galleryCaptions.get('02-adult-external-morphology.webp') ?? '',
    /不能独立确认物种.{0,40}不能核验腹带宽度/,
  );
  assert.match(
    galleryCaptions.get('03-synchronized-night-emergence.webp') ?? '',
    /不能测量.{0,50}周期群身份.{0,30}不能证明所有个体同时出现/,
  );
  assert.match(
    galleryCaptions.get('04-male-chorus-calling.webp') ?? '',
    /静帧不能传达.{0,70}CI[—–-]CIII.{0,50}不能只凭姿态确认鸣叫和物种/,
  );
  assert.match(
    galleryCaptions.get('05-female-twig-oviposition.webp') ?? '',
    /不能确认.{0,30}卵数.{0,30}孵化期.{0,40}树种适宜性/,
  );
  assert.match(
    galleryCaptions.get('06-underground-nymph-root-feeding.webp') ?? '',
    /不能确定真实深度.{0,30}龄期.{0,30}宿主树种.{0,40}季节计数机制/,
  );

  assert.equal(profile.sources.length, 17);
  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-09-01'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'general', 'ecology', 'distribution', 'conservation']),
  );
  for (const requiredUrl of [
    'https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=847190',
    'https://cicadas.uconn.edu/species/m_septendecim/',
    'https://cicadas.uconn.edu/behavior/',
    'https://cicadas.uconn.edu/broods/',
    'https://deepblue.lib.umich.edu/items/858cf767-7c61-4baa-bd5a-5e09fcd59950',
    'https://doi.org/10.1093/aesa/75.1.14',
    'https://doi.org/10.2307/2423537',
    'https://doi.org/10.1046/j.1461-0248.2000.00164.x',
    'https://doi.org/10.1163/156853901753172674',
    'https://doi.org/10.1093/molbev/msz051',
    'https://doi.org/10.1093/jisesa/iead082',
    'https://doi.org/10.2305/IUCN.UK.1996.RLTS.T12691A3373584.en',
    'https://explorer.natureserve.org/Taxon/ELEMENT_GLOBAL.2.112782/Magicicada_septendecim',
    'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
    'https://checklist.cites.org/',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `Seventeen-year Cicada sources should include ${requiredUrl}`,
    );
  }

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-09-01');
  assert.equal(profile.updatedAt, '2026-09-01');
});

test('registers the Lion as a bounded Panthera leo profile', async () => {
  const profile = findSpecies('lion');

  assert.equal(profile.id, 'species-panthera-leo');
  assert.equal(profile.slug, 'lion');
  assert.equal(profile.names.zh, '狮');
  assert.equal(profile.names.en, 'Lion');
  assert.ok(profile.names.aliases?.includes('狮子'));
  assert.equal(profile.scientificName, 'Panthera leo');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Chordata', '脊索动物门'],
      ['class', 'Mammalia', '哺乳纲'],
      ['order', 'Carnivora', '食肉目'],
      ['family', 'Felidae', '猫科'],
      ['genus', 'Panthera', '豹属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
      assessedYear: profile.conservation.assessedYear,
      criteria: profile.conservation.criteria,
    },
    {
      code: 'VU',
      trend: 'decreasing',
      assessedYear: 2025,
      criteria: 'A2c',
    },
  );

  assert.deepEqual(profile.distribution.realms, ['terrestrial']);
  assert.ok(profile.habitats.length > 0);
  assert.equal(
    profile.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.equal(profile.storySections?.length, 6);
  assert.equal(
    new Set(profile.storySections?.map(({ key }) => key) ?? []).size,
    6,
  );
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.equal(profile.featuredStats.length, 4);
  assert.equal(
    new Set(profile.featuredStats.map(({ key }) => key)).size,
    4,
  );
  assert.ok(
    profile.featuredStats.every(
      ({ label, value, note }) =>
        label.length > 0 && value.length > 0 && (note?.length ?? 0) > 0,
    ),
  );
  assert.ok(profile.tags.length > 0);
  assert.ok(profile.summary.length > 0);
  assert.ok(profile.description.length > 0);
  assert.ok(profile.keyFacts.length > 0);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);

  await assertGeneratedImageSet({
    profile,
    slug: 'lion',
    basenames: [
      '01-savanna-dawn-male-portrait',
      '02-adult-lioness-profile',
      '03-pride-resting-in-acacia-shade',
      '04-cooperative-wildebeest-approach',
      '05-communal-cub-care',
      '06-camera-trap-monitoring',
    ],
    verifyAcceptedHashes: true,
  });

  const galleryCaptions = new Map(
    (profile.media.gallery ?? []).map(({ image, caption }) => [
      image.split('/').at(-1) ?? '',
      caption ?? '',
    ]),
  );
  const assertBoundedCaption = (basename, subjectPattern) => {
    const caption = galleryCaptions.get(`${basename}.webp`) ?? '';
    assert.match(caption, subjectPattern);
    assert.match(caption, /(?:不能|无法|不代表|不证明|不足以|不可)/);
  };
  assertBoundedCaption(
    '03-pride-resting-in-acacia-shade',
    /(?:狮群|群体|成员|组成|亲缘|社会关系|数量|规模)/,
  );
  assertBoundedCaption(
    '04-cooperative-wildebeest-approach',
    /(?:合作|协作|围猎|捕猎|分工|成功|猎物)/,
  );
  assertBoundedCaption(
    '05-communal-cub-care',
    /(?:共同照护|幼崽|亲缘|哺乳|照护|存活)/,
  );
  assertBoundedCaption(
    '06-camera-trap-monitoring',
    /(?:相机|监测|个体|密度|数量|种群|趋势|占域)/,
  );

  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-09-01'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'general', 'ecology', 'distribution', 'conservation']),
  );
  for (const requiredUrl of [
    'https://doi.org/10.2305/IUCN.UK.2025-2.RLTS.T15951A280792135.en',
    'https://www.mammaldiversity.org/taxon/1006020/',
    'https://www.catsg.org/living-species-lions',
    'https://cites.org/sites/default/files/eng/app/2026/E-Appendices-2026-03-05.pdf',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `Lion sources should include ${requiredUrl}`,
    );
  }

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-09-01');
  assert.equal(profile.updatedAt, '2026-09-01');
});

test('registers the Gumboot Chiton as a bounded Cryptochiton stelleri profile', async () => {
  const profile = findSpecies('gumboot-chiton');

  assert.equal(profile.id, 'species-cryptochiton-stelleri');
  assert.equal(profile.slug, 'gumboot-chiton');
  assert.equal(profile.names.zh, '橡胶靴石鳖');
  assert.equal(profile.names.en, 'Gumboot Chiton');
  assert.equal(profile.scientificName, 'Cryptochiton stelleri');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Mollusca', '软体动物门'],
      ['class', 'Polyplacophora', '多板纲'],
      ['order', 'Chitonida', '石鳖目'],
      ['family', 'Mopaliidae', '鬃毛石鳖科'],
      ['genus', 'Cryptochiton', '隐石鳖属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
    },
    { code: 'NE', trend: 'unknown' },
  );
  assert.equal(Object.hasOwn(profile.conservation, 'assessedYear'), false);
  assert.equal(Object.hasOwn(profile.conservation, 'criteria'), false);

  assert.deepEqual(profile.distribution.realms, ['marine']);
  assert.equal(
    profile.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(profile.habitats.every(({ realm }) => realm === 'marine'));
  assert.deepEqual(
    {
      max: profile.measurements.length?.max,
      unit: profile.measurements.length?.unit,
    },
    { max: 36, unit: 'cm' },
  );
  assert.match(
    profile.measurements.length?.note ?? '',
    /最大报道.{0,20}(?:不代表|不是)/,
  );
  assert.deepEqual(profile.diet.types, ['herbivore']);
  assert.deepEqual(profile.metrics, {});

  assert.equal(profile.storySections?.length, 6);
  assert.equal(
    new Set(profile.storySections?.map(({ key }) => key) ?? []).size,
    6,
  );
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.deepEqual(
    profile.featuredStats.map(({ key, value, unit }) => ({ key, value, unit })),
    [
      { key: 'plate-count', value: '8', unit: '枚' },
      { key: 'maximum-length', value: '36', unit: '厘米' },
      { key: 'maximum-estimated-age', value: '≥40', unit: '年' },
      { key: 'radula-mineral', value: '磁铁矿', unit: undefined },
    ],
  );
  assert.equal(
    new Set(profile.featuredStats.map(({ key }) => key)).size,
    4,
  );
  assert.ok(
    profile.featuredStats.every(
      ({ label, value, note }) =>
        label.length > 0 && value.length > 0 && (note?.length ?? 0) > 0,
    ),
  );
  assert.ok(profile.tags.length > 0);
  assert.ok(profile.summary.length > 0);
  assert.ok(profile.description.length > 0);
  assert.ok(profile.keyFacts.length > 0);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);

  await assertGeneratedImageSet({
    profile,
    slug: 'gumboot-chiton',
    basenames: [
      '01-north-pacific-rocky-reef-adult-portrait',
      '02-juvenile-eight-exposed-valves',
      '03-adult-concealed-valves-girdle-macro',
      '04-ventral-foot-and-gill-grooves',
      '05-radula-tooth-mineralization-macro',
      '06-newly-hatched-trochophore-microscopy',
    ],
    verifyAcceptedHashes: true,
  });

  const galleryCaptions = new Map(
    (profile.media.gallery ?? []).map(({ image, caption }) => [
      image.split('/').at(-1) ?? '',
      caption ?? '',
    ]),
  );
  const assertBoundedCaption = (basename, subjectPattern, boundaryPattern) => {
    const caption = galleryCaptions.get(`${basename}.webp`) ?? '';
    assert.match(caption, subjectPattern);
    assert.match(caption, boundaryPattern);
    assert.match(caption, /(?:不能|无法|不代表|不证明|不可|并非|不是)/);
  };
  assertBoundedCaption(
    '02-juvenile-eight-exposed-valves',
    /(?=[\s\S]*幼体)(?=[\s\S]*八枚.{0,12}(?:外露)?背板)/,
    /(?:不能|无法|不代表|不证明).{0,50}(?:年龄|体长|尺寸|地点|全分布区|普遍)/,
  );
  assertBoundedCaption(
    '03-adult-concealed-valves-girdle-macro',
    /(?=[\s\S]*成体)(?=[\s\S]*(?:背板|甲片).{0,20}(?:完全)?(?:覆盖|遮住|不可见))(?=[\s\S]*外套带)/,
    /(?:不能|无法|不代表|不证明).{0,50}(?:骨针|密度|组织|年龄|物种鉴定|鉴定物种)/,
  );
  assertBoundedCaption(
    '04-ventral-foot-and-gill-grooves',
    /(?=[\s\S]*(?:肌足|腹足))(?=[\s\S]*(?:两侧|两条).{0,20}(?:鳃沟|外套沟))(?=[\s\S]*鳃)/,
    /(?:不能|无法|不代表|不证明|不是).{0,50}(?:鳃数|吸附力|附着力|自然翻身|常见姿态|行为)/,
  );
  assertBoundedCaption(
    '05-radula-tooth-mineralization-macro',
    /(?=[\s\S]*磁铁矿)(?=[\s\S]*(?:铁磷酸盐|磷酸铁))(?=[\s\S]*(?:齿舌|齿列|齿尖))/,
    /(?:不能|无法|不代表|不证明|不是).{0,60}(?:化学成分|矿物成分|磁性|导航|吸铁|放电)/,
  );
  assertBoundedCaption(
    '06-newly-hatched-trochophore-microscopy',
    /(?=[\s\S]*(?:初孵|担轮幼体))(?=[\s\S]*(?:没有|不具|尚无).{0,20}(?:背板|眼点))(?=[\s\S]*(?:不摄食|卵黄))/,
    /(?=[\s\S]*(?:12\s*°?C|12\s*℃|46\s*小时))(?=[\s\S]*(?:不能|无法|不代表|不是).{0,50}(?:全分布区|固定时序|普遍|恒定|常数))/,
  );

  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-09-01'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'general', 'ecology', 'distribution', 'conservation']),
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/aphia.php?p=taxdetails&id=240776',
    'https://www.nmns.edu.tw/collect/catalog/detail/?id=32208',
    'https://www.adfg.alaska.gov/static-f/species/speciesinfo/_aknhp/Gumboot_Chiton.pdf',
    'https://marine.ucsc.edu/target/cryptochiton/',
    'https://doi.org/10.1093/mollus/eyr004',
    'https://doi.org/10.4002/040.055.0104',
    'https://doi.org/10.1038/s41598-018-37839-2',
    'https://nrl.iucnredlist.org/search',
    'https://aquarium.org/animals/gumboot-chiton/',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `Gumboot Chiton sources should include ${requiredUrl}`,
    );
  }

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-09-01');
  assert.equal(profile.updatedAt, '2026-09-01');
});

test('registers the Common Tusk Shell as a bounded Antalis vulgaris profile', async () => {
  const profile = findSpecies('common-tusk-shell');

  assert.equal(profile.id, 'species-antalis-vulgaris');
  assert.equal(profile.slug, 'common-tusk-shell');
  assert.equal(profile.names.zh, '普通角贝');
  assert.equal(profile.names.en, 'Common Tusk Shell');
  assert.equal(profile.scientificName, 'Antalis vulgaris');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Mollusca', '软体动物门'],
      ['class', 'Scaphopoda', '掘足纲'],
      ['order', 'Dentaliida', '角贝目'],
      ['family', 'Dentaliidae', '角贝科'],
      ['genus', 'Antalis', '安塔角贝属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
    },
    { code: 'NE', trend: 'unknown' },
  );
  assert.equal(Object.hasOwn(profile.conservation, 'assessedYear'), false);
  assert.equal(Object.hasOwn(profile.conservation, 'criteria'), false);

  assert.deepEqual(profile.distribution.realms, ['marine']);
  assert.equal(
    profile.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(profile.habitats.every(({ realm }) => realm === 'marine'));
  assert.deepEqual(
    {
      max: profile.measurements.length?.max,
      unit: profile.measurements.length?.unit,
    },
    { max: 6, unit: 'cm' },
  );
  assert.match(
    profile.measurements.length?.note ?? '',
    /最大报道.{0,50}(?:不代表|不是)/,
  );
  assert.deepEqual(profile.diet.types, ['carnivore']);
  assert.deepEqual(profile.metrics, {});

  assert.equal(profile.storySections?.length, 6);
  assert.equal(
    new Set(profile.storySections?.map(({ key }) => key) ?? []).size,
    6,
  );
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.deepEqual(
    profile.featuredStats.map(({ key, value, unit }) => ({ key, value, unit })),
    [
      { key: 'shell-openings', value: '2', unit: '端' },
      { key: 'maximum-shell-length', value: '60', unit: '毫米' },
      { key: 'reported-depth', value: '5–1000', unit: '米' },
      { key: 'radular-teeth-per-row', value: '5', unit: '枚' },
    ],
  );
  assert.equal(
    new Set(profile.featuredStats.map(({ key }) => key)).size,
    4,
  );
  assert.ok(
    profile.featuredStats.every(
      ({ label, value, note }) =>
        label.length > 0 && value.length > 0 && (note?.length ?? 0) > 0,
    ),
  );
  assert.ok(profile.tags.length > 0);
  assert.ok(profile.summary.length > 0);
  assert.ok(profile.description.length > 0);
  assert.ok(profile.keyFacts.length > 0);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);

  await assertGeneratedImageSet({
    profile,
    slug: 'common-tusk-shell',
    basenames: [
      '01-in-situ-buried-adult-portrait',
      '02-double-open-shell-macro',
      '03-burrowing-foot-and-captacula',
      '04-captacula-foraminifer-feeding-macro',
      '05-gillless-mantle-cavity-cutaway',
      '06-benthic-grab-survey',
    ],
    verifyAcceptedHashes: true,
  });

  const galleryCaptions = new Map(
    (profile.media.gallery ?? []).map(({ image, caption }) => [
      image.split('/').at(-1) ?? '',
      caption ?? '',
    ]),
  );
  const assertBoundedCaption = (basename, subjectPattern, boundaryPattern) => {
    const caption = galleryCaptions.get(`${basename}.webp`) ?? '';
    assert.match(caption, subjectPattern);
    assert.match(caption, boundaryPattern);
    assert.match(caption, /(?:不能|无法|不代表|不证明|不可|并非|不是)/);
  };
  assertBoundedCaption(
    '02-double-open-shell-macro',
    /(?=[\s\S]*(?:管壳|管状壳))(?=[\s\S]*(?:两端|两个).{0,12}壳口)/,
    /(?:不能|无法|不代表|不证明).{0,60}(?:纵纹数|壳长|隔板|鉴定|近似种)/,
  );
  assertBoundedCaption(
    '03-burrowing-foot-and-captacula',
    /(?=[\s\S]*(?:足|肌足))(?=[\s\S]*captacula)(?=[\s\S]*(?:并置|同时))/,
    /(?:不代表|不能|无法|不证明).{0,70}(?:同时|数量|排列|掘穴速度|软体解剖)/,
  );
  assertBoundedCaption(
    '04-captacula-foraminifer-feeding-macro',
    /(?=[\s\S]*captacula)(?=[\s\S]*有孔虫)/,
    /(?:不能|无法|不代表|不证明).{0,70}(?:触丝数量|猎物选择率|选择率|摄食量|摄入量)/,
  );
  assertBoundedCaption(
    '05-gillless-mantle-cavity-cutaway',
    /(?=[\s\S]*(?:无专门鳃|没有鳃|无鳃))(?=[\s\S]*(?:外套|换水|气体交换))/,
    /(?:不能|无法|不代表|不证明).{0,70}(?:水流方向|流速|氧耗|换气效率|独有结构|本种独有)/,
  );
  assertBoundedCaption(
    '06-benthic-grab-survey',
    /(?=[\s\S]*(?:单枚壳|角贝壳))(?=[\s\S]*(?:监测|调查|样品|站位))/,
    /(?:不能|无法|不代表|不证明).{0,70}(?:活体状态|物种身份|丰度|趋势)/,
  );

  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-09-01'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'general', 'ecology', 'distribution', 'conservation']),
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/aphia.php?p=taxdetails&id=196380',
    'https://sciencepress.mnhn.fr/sites/default/files/articles/pdf/z2004n4a1.pdf',
    'https://ns-mollusca.linnaeus.naturalis.nl/linnaeus_ng/app/views/species/taxon.php?epi=183&id=121491',
    'https://doris.ffessm.fr/Especes/Antalis-vulgaris-Dentale-commun-375',
    'https://doi.org/10.1016/S0065-2881(02)42014-7',
    'https://doi.org/10.1016/S0022-5320(83)90132-6',
    'https://doi.org/10.1002/jez.1402490114',
    'https://www.sealifebase.ca/summary/Antalis-vulgaris.html',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `Common Tusk Shell sources should include ${requiredUrl}`,
    );
  }

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-09-01');
  assert.equal(profile.updatedAt, '2026-09-01');
});

test('registers the Giant Tube Worm as a bounded Riftia pachyptila profile', async () => {
  const profile = findSpecies('giant-tube-worm');

  assert.equal(profile.id, 'species-riftia-pachyptila');
  assert.equal(profile.slug, 'giant-tube-worm');
  assert.equal(profile.names.zh, '巨型管虫');
  assert.equal(profile.names.en, 'Giant Tube Worm');
  assert.equal(profile.scientificName, 'Riftia pachyptila');
  assert.deepEqual(
    getSpeciesTaxonomyPath(profile).map(({ rank, taxon }) => [
      rank,
      taxon.scientificName,
      taxon.zhName,
    ]),
    [
      ['kingdom', 'Animalia', '动物界'],
      ['phylum', 'Annelida', '环节动物门'],
      ['class', 'Polychaeta', '多毛纲'],
      ['order', 'Sabellida', '缨鳃虫目'],
      ['family', 'Siboglinidae', '西伯加虫科'],
      ['genus', 'Riftia', '巨型管虫属'],
    ],
  );
  assert.deepEqual(
    {
      code: profile.conservation.code,
      trend: profile.conservation.trend,
    },
    { code: 'NE', trend: 'unknown' },
  );
  assert.equal(Object.hasOwn(profile.conservation, 'assessedYear'), false);
  assert.equal(Object.hasOwn(profile.conservation, 'criteria'), false);

  assert.deepEqual(profile.distribution.realms, ['marine']);
  assert.deepEqual(profile.distribution.continents, []);
  assert.deepEqual(profile.distribution.countries, []);
  assert.match(profile.distribution.range, /27°N.{0,120}38°S/);
  assert.equal(
    profile.habitats.filter(({ isPrimary }) => isPrimary).length,
    1,
  );
  assert.ok(profile.habitats.every(({ realm }) => realm === 'marine'));
  assert.deepEqual(
    {
      max: profile.measurements.length?.max,
      unit: profile.measurements.length?.unit,
    },
    { max: 2, unit: 'm' },
  );
  assert.match(
    profile.measurements.length?.note ?? '',
    /软体.{0,20}1\.5 米.{0,30}栖管.{0,20}2\.65 米.{0,50}(?:不代表|不能)/,
  );
  assert.deepEqual(profile.metrics, {});
  assert.deepEqual(profile.diet.types, ['bacterivore']);
  assert.match(
    profile.diet.description,
    /成体没有口和消化道.{0,100}trophosome.{0,80}硫氧化细菌/,
  );

  assert.equal(profile.storySections?.length, 6);
  assert.equal(
    new Set(profile.storySections?.map(({ key }) => key) ?? []).size,
    6,
  );
  assert.ok(
    profile.storySections?.every(
      ({ label, title, body }) =>
        label.length > 0 && title.length > 0 && body.length > 0,
    ),
  );
  assert.deepEqual(
    profile.featuredStats.map(({ key, value, unit }) => ({ key, value, unit })),
    [
      { key: 'maximum-size', value: '2', unit: '米' },
      { key: 'reported-depth', value: '1900—3600', unit: '米' },
      { key: 'maximum-tube-growth', value: '约 85', unit: '厘米/年' },
      { key: 'modeled-larval-lifespan', value: '38', unit: '天' },
    ],
  );
  assert.equal(
    new Set(profile.featuredStats.map(({ key }) => key)).size,
    4,
  );
  assert.ok(profile.tags.length > 0);
  assert.ok(profile.summary.length > 0);
  assert.ok(profile.description.length > 0);
  assert.ok(profile.keyFacts.length > 0);
  assert.ok(profile.threats.length > 0);
  assert.ok(profile.conservationActions.length > 0);

  await assertGeneratedImageSet({
    profile,
    slug: 'giant-tube-worm',
    basenames: [
      '01-diffuse-flow-adult-cover',
      '02-branchial-plume-diagnostic',
      '03-gutless-trophosome-cutaway',
      '04-trophosome-bacteriocyte-micrograph',
      '05-juvenile-skin-symbiont-acquisition',
      '06-rov-thicket-monitoring',
    ],
    verifyAcceptedHashes: true,
  });

  const galleryCaptions = new Map(
    (profile.media.gallery ?? []).map(({ image, caption }) => [
      image.split('/').at(-1) ?? '',
      caption ?? '',
    ]),
  );
  const assertBoundedCaption = (basename, subjectPattern, boundaryPattern) => {
    const caption = galleryCaptions.get(`${basename}.webp`) ?? '';
    assert.match(caption, subjectPattern);
    assert.match(caption, boundaryPattern);
    assert.match(caption, /(?:不能|无法|不代表|不证明|不可|并非|不是)/);
  };
  assertBoundedCaption(
    '02-branchial-plume-diagnostic',
    /(?=[\s\S]*鳃羽)(?=[\s\S]*轴向结构)(?=[\s\S]*管口)/,
    /不能.{0,60}(?:鳃丝数|交换面积|个体尺寸)/,
  );
  assertBoundedCaption(
    '03-gutless-trophosome-cutaway',
    /(?=[\s\S]*鳃羽)(?=[\s\S]*trophosome)(?=[\s\S]*循环分支)/,
    /(?:不是真实解剖|不能.{0,60}(?:器官比例|血管排列))/,
  );
  assertBoundedCaption(
    '04-trophosome-bacteriocyte-micrograph',
    /(?=[\s\S]*胞内位置)(?=[\s\S]*叶内分区)/,
    /不能.{0,60}(?:菌株|含硫颗粒|细胞阶段|菌数)/,
  );
  assertBoundedCaption(
    '05-juvenile-skin-symbiont-acquisition',
    /(?=[\s\S]*经皮侵入)(?=[\s\S]*暂时性消化道)(?=[\s\S]*trophosome)/,
    /不能.{0,60}(?:发育阶段|入侵方向|持续时间|细菌身份)/,
  );
  assertBoundedCaption(
    '06-rov-thicket-monitoring',
    /(?=[\s\S]*一帧)(?=[\s\S]*调查画面)/,
    /不能.{0,60}(?:物种身份|丰度|趋势|健康状况)/,
  );

  assert.equal(profile.sources.length, 29);
  assert.equal(
    new Set(profile.sources.map(({ url }) => url)).size,
    profile.sources.length,
  );
  assert.ok(profile.sources.every(({ title }) => title.length > 0));
  assert.ok(profile.sources.every(({ url }) => URL.canParse(url)));
  assert.ok(profile.sources.every(({ url }) => url.startsWith('https://')));
  assert.ok(
    profile.sources.every(({ accessedAt }) => accessedAt === '2026-09-01'),
  );
  assert.deepEqual(
    new Set(profile.sources.map(({ kind }) => kind)),
    new Set(['taxonomy', 'general', 'distribution', 'ecology', 'conservation']),
  );
  for (const requiredUrl of [
    'https://www.marinespecies.org/aphia.php?p=taxdetails&id=266010',
    'https://www.marinespecies.org/rest/AphiaClassificationByAphiaID/266010',
    'https://www.biodiversitylibrary.org/part/45641',
    'https://doi.org/10.1111/j.1096-3642.2001.tb02271.x',
    'https://www.mbari.org/animal/giant-tubeworm/',
    'https://doi.org/10.1134/S1062359016090132',
    'https://doi.org/10.1186/1471-2148-11-96',
    'https://doi.org/10.1126/science.213.4505.340',
    'https://doi.org/10.1073/pnas.95.15.8997',
    'https://doi.org/10.1128/mBio.02243-19',
    'https://doi.org/10.1038/35075063',
    'https://doi.org/10.1038/nature04793',
    'https://doi.org/10.1038/371663a0',
    'https://doi.org/10.1038/s41467-024-52631-9',
    'https://www.iucnredlist.org/search?query=Riftia%20pachyptila&searchType=species',
    'https://doi.org/10.1016/j.marpol.2018.01.020',
  ]) {
    assert.ok(
      profile.sources.some(({ url }) => url === requiredUrl),
      `Giant Tube Worm sources should include ${requiredUrl}`,
    );
  }

  assert.equal(profile.featured, true);
  assert.equal(profile.publishedAt, '2026-09-01');
  assert.equal(profile.updatedAt, '2026-09-01');
});

test('counts descendant species on shared taxon branches', () => {
  const tree = buildTaxonomyTree(species);

  assert.equal(species.length, 107);

  for (const node of flatten(tree).filter((candidate) => candidate.kind === 'taxon')) {
    assert.equal(
      node.speciesCount,
      countCatalogueDescendants(node),
      `${node.rank} ${node.taxon.scientificName} should count its catalogue descendants`,
    );
  }

  assert.equal(findTaxon(tree, 'genus', 'Sinosturio'), undefined);
  assert.equal(findTaxon(tree, 'phylum', 'Cnidaria')?.speciesCount, 3);
  assert.equal(findTaxon(tree, 'class', 'Anthozoa')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Scyphozoa')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Hydrozoa')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Siphonophorae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Physaliidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Physalia')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'phylum', 'Echinodermata')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'class', 'Asteroidea')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Valvatida')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Acanthasteridae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Acanthaster')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Holothuroidea')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Synallactida')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Stichopodidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Apostichopus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'phylum', 'Annelida')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'class', 'Clitellata')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Crassiclitellata')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Megascolecidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Megascolides')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Polychaeta')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Sabellida')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Siboglinidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Riftia')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'phylum', 'Brachiopoda')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Lingulata')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Lingulida')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Lingulidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Lingula')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'phylum', 'Bryozoa')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Gymnolaemata')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Cheilostomatida')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Bugulidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Bugula')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'phylum', 'Arthropoda')?.speciesCount, 17);
  assert.equal(findTaxon(tree, 'class', 'Branchiopoda')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Anomopoda')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Daphniidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Daphnia')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Chilopoda')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Scolopendromorpha')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Scolopendridae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Scolopendra')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Diplopoda')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Spirostreptida')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Spirostreptidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Archispirostreptus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Malacostraca')?.speciesCount, 4);
  assert.equal(findTaxon(tree, 'order', 'Stomatopoda')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Odontodactylidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Odontodactylus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Decapoda')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'family', 'Coenobitidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Birgus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Euphausiacea')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Euphausiidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Euphausia')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'phylum', 'Mollusca')?.speciesCount, 6);
  assert.equal(findTaxon(tree, 'class', 'Scaphopoda')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Dentaliida')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Dentaliidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Antalis')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Polyplacophora')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Chitonida')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Mopaliidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Cryptochiton')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Cephalopoda')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'order', 'Nautilida')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Nautilidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Nautilus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Octopoda')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Octopodidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Octopus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Gastropoda')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Nudibranchia')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Glaucidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Glaucus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Bivalvia')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Cardiida')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Cardiidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Tridacna')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Insecta')?.speciesCount, 7);
  assert.equal(findTaxon(tree, 'order', 'Hemiptera')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Cicadidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Magicicada')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Lepidoptera')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'family', 'Bombycidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Bombyx')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Mantodea')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Mantidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Tenodera')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Coleoptera')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Coccinellidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Coccinella')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Odonata')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Aeshnidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Anax')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Arachnida')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'order', 'Araneae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Theraphosidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Theraphosa')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Scorpiones')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Scorpionidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Pandinus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Merostomata')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Xiphosurida')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Limulidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Tachypleus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Reptilia')?.speciesCount, 10);
  assert.equal(findTaxon(tree, 'order', 'Crocodylia')?.speciesCount, 3);
  assert.equal(findTaxon(tree, 'family', 'Alligatoridae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Alligator')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Gavialidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Gavialis')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Crocodylidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Crocodylus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Testudines')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'family', 'Cheloniidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Chelonia')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Dermochelyidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Dermochelys')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Rhynchocephalia')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Sphenodontidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Sphenodon')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Squamata')?.speciesCount, 4);
  assert.equal(findTaxon(tree, 'family', 'Helodermatidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Heloderma')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Iguanidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Amblyrhynchus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Amphibia')?.speciesCount, 7);
  assert.equal(findTaxon(tree, 'order', 'Anura')?.speciesCount, 4);
  assert.equal(findTaxon(tree, 'family', 'Conrauidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Conraua')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Pipidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Pipa')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Phyllomedusidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Agalychnis')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Gymnophiona')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Siphonopidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Siphonops')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'kingdom', 'Animalia')?.speciesCount, 107);
  assert.equal(findTaxon(tree, 'phylum', 'Nematoda')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Chromadorea')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Rhabditida')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Rhabditidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Caenorhabditis')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'phylum', 'Platyhelminthes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Rhabditophora')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Tricladida')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Dugesiidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Dugesia')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'phylum', 'Porifera')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Hexactinellida')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Lyssacinosida')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Euplectellidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Euplectella')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'phylum', 'Ctenophora')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Tentaculata')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Lobata')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Bolinopsidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Mnemiopsis')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'phylum', 'Chordata')?.speciesCount, 71);
  assert.equal(findTaxon(tree, 'class', 'Mammalia')?.speciesCount, 29);
  assert.equal(findTaxon(tree, 'order', 'Eulipotyphla')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Talpidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Condylura')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Tubulidentata')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Orycteropodidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Orycteropus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Actinopterygii')?.speciesCount, 4);
  assert.equal(findTaxon(tree, 'order', 'Gobiiformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Oxudercidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Boleophthalmus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Scombriformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Scombridae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Thunnus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Osteoglossiformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Arapaimidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Arapaima')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Petromyzonti')?.speciesCount, 1);
  assert.equal(
    findTaxon(tree, 'order', 'Petromyzontiformes')?.speciesCount,
    1,
  );
  assert.equal(findTaxon(tree, 'family', 'Petromyzontidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Petromyzon')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Myxini')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Myxiniformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Myxinidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Myxine')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Chondrichthyes')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'order', 'Torpediniformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Torpedinidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Torpedo')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Leptocardii')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Amphioxiformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Branchiostomatidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Branchiostoma')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Aves')?.speciesCount, 13);
  assert.equal(findTaxon(tree, 'order', 'Opisthocomiformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Opisthocomidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Opisthocomus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Psittaciformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Strigopidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Strigops')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Struthioniformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Struthionidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Struthio')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Charadriiformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Laridae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Sterna')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Galliformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Phasianidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Pavo')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Accipitriformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Accipitridae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Aquila')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Falconiformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Falconidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Falco')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Strigiformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Strigidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Bubo')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Pelecaniformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Threskiornithidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Nipponia')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Gruiformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Gruidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Grus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Sarcopterygii')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'order', 'Coelacanthiformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Latimeriidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Latimeria')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Ceratodontiformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Ceratodontidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Neoceratodus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Neoceratodontidae'), undefined);
  assert.equal(findTaxon(tree, 'class', 'Thaliacea')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Pyrosomatida')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Pyrosomatidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Pyrosoma')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Panthera')?.speciesCount, 3);
  assert.equal(findTaxon(tree, 'genus', 'Tigris'), undefined);
  assert.equal(findTaxon(tree, 'family', 'Mustelidae')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'genus', 'Lutra')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Enhydra')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Primates')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'family', 'Cercopithecidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Rhinopithecus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Artiodactyla')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Bovidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Pantholops')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Proboscidea')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'family', 'Elephantidae')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'genus', 'Loxodonta')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Elephas')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Monotremata')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'family', 'Ornithorhynchidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Ornithorhynchus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Tachyglossidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Tachyglossus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Cetacea')?.speciesCount, 3);
  assert.equal(findTaxon(tree, 'family', 'Balaenopteridae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Delphinidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Phocoenidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Neophocaena')?.speciesCount, 1);
});

test('keeps every branch in canonical rank order with species at the leaf', () => {
  const tree = buildTaxonomyTree(species);
  const orderedRanks = [...TAXONOMY_RANKS, 'species'];

  function verify(nodes, expectedIndex) {
    for (const node of nodes) {
      assert.equal(node.rank, orderedRanks[expectedIndex]);

      if (node.kind === 'species') {
        assert.equal(expectedIndex, orderedRanks.length - 1);
        assert.deepEqual(node.children, []);
      } else {
        assert.ok(node.children.length > 0);
        verify(node.children, expectedIndex + 1);
      }
    }
  }

  verify(tree, 0);
});

test('exposes complete, stable taxonomy paths for search and node identity', () => {
  const panda = findSpecies('giant-panda');

  const path = getSpeciesTaxonomyPath(panda);
  assert.deepEqual(
    path.map(({ rank, taxon }) => [rank, taxon.scientificName]),
    [
      ['kingdom', 'Animalia'],
      ['phylum', 'Chordata'],
      ['class', 'Mammalia'],
      ['order', 'Carnivora'],
      ['family', 'Ursidae'],
      ['genus', 'Ailuropoda'],
    ],
  );

  for (const [index, entry] of path.entries()) {
    assert.deepEqual(
      JSON.parse(entry.key.slice('taxonomy:'.length)),
      path
        .slice(0, index + 1)
        .map(({ rank, taxon }) => [rank, taxon.scientificName]),
      'a node key should contain its full parent path and own identity',
    );
  }
});

function visibleFrontierKeys(nodes, collapsedTaxonKeys) {
  return nodes.flatMap((node) => {
    if (node.kind === 'species' || collapsedTaxonKeys.has(node.key)) return [node.key];
    return visibleFrontierKeys(node.children, collapsedTaxonKeys);
  });
}

function projectedRowNodeKey(row) {
  return row.kind === 'taxon' ? row.node.key : row.leaf.key;
}

test('projects every species leaf in tree order when no taxon is collapsed', () => {
  const tree = buildTaxonomyTree(species);
  const speciesLeaves = flatten(tree).filter((node) => node.kind === 'species');
  const projection = projectTaxonomyOverview(tree, new Set());

  assert.deepEqual([...projection.collapsedTaxonKeys], []);
  assert.equal(projection.rows.length, speciesLeaves.length);
  assert.ok(projection.rows.every((row) => row.kind === 'species'));
  assert.deepEqual(
    projection.rows.map(projectedRowNodeKey),
    speciesLeaves.map(({ key }) => key),
    'the fully expanded frontier should keep taxonomy-tree order',
  );
});

test('toggles one known taxon without mutating the requested collapse state', () => {
  const tree = buildTaxonomyTree(species);
  const taxonNodes = flatten(tree).filter((node) => node.kind === 'taxon');
  const knownTaxonKeys = new Set(taxonNodes.map(({ key }) => key));
  const mammalClass = findTaxon(tree, 'class', 'Mammalia');
  assert.ok(mammalClass);
  const initialKeys = new Set();

  const collapsedKeys = toggleOverviewTaxon(
    initialKeys,
    mammalClass.key,
    knownTaxonKeys,
  );
  assert.notEqual(collapsedKeys, initialKeys);
  assert.deepEqual(initialKeys, new Set());
  assert.deepEqual(collapsedKeys, new Set([mammalClass.key]));

  const expandedKeys = toggleOverviewTaxon(
    collapsedKeys,
    mammalClass.key,
    knownTaxonKeys,
  );
  assert.deepEqual(expandedKeys, new Set());
  assert.deepEqual(collapsedKeys, new Set([mammalClass.key]));

  const unchangedKeys = toggleOverviewTaxon(
    expandedKeys,
    'taxonomy:unknown-taxon',
    knownTaxonKeys,
  );
  assert.equal(unchangedKeys, expandedKeys);
});

test('lets every taxon replace its descendants as one collapsed frontier row', () => {
  const tree = buildTaxonomyTree(species);
  const taxonNodes = flatten(tree).filter((node) => node.kind === 'taxon');

  for (const taxon of taxonNodes) {
    const collapsedTaxonKeys = new Set([taxon.key]);
    const projection = projectTaxonomyOverview(tree, collapsedTaxonKeys);
    const taxonRows = projection.rows.filter((row) => row.kind === 'taxon');
    const descendantLeaves = flatten(taxon.children)
      .filter((node) => node.kind === 'species');

    assert.deepEqual(new Set(projection.collapsedTaxonKeys), collapsedTaxonKeys);
    assert.deepEqual(
      projection.rows.map(projectedRowNodeKey),
      visibleFrontierKeys(tree, collapsedTaxonKeys),
      `${taxon.rank} ${taxon.taxon.scientificName} should own one stable frontier position`,
    );
    assert.equal(taxonRows.length, 1);
    assert.equal(taxonRows[0]?.node.key, taxon.key);
    assert.deepEqual(
      taxonRows[0]?.leafSlugs,
      descendantLeaves.map(({ species: profile }) => profile.slug),
    );
  }
});

test('keeps parent, child, and sibling collapse state independent', () => {
  const tree = buildTaxonomyTree(species);
  const mammalClass = findTaxon(tree, 'class', 'Mammalia');
  const carnivoreOrder = findTaxon(tree, 'order', 'Carnivora');
  const primateOrder = findTaxon(tree, 'order', 'Primates');
  assert.ok(mammalClass);
  assert.ok(carnivoreOrder);
  assert.ok(primateOrder);

  const childOnly = projectTaxonomyOverview(tree, new Set([carnivoreOrder.key]));
  assert.ok(
    childOnly.rows.some(
      (row) => row.kind === 'taxon' && row.node.key === carnivoreOrder.key,
    ),
  );
  assert.ok(
    childOnly.rows.some(
      (row) =>
        row.kind === 'species' &&
        getSpeciesTaxonomyPath(row.leaf.species).some(({ key }) => key === primateOrder.key),
    ),
    'collapsing Carnivora should leave its Primates sibling visible',
  );

  const parentAndChildKeys = new Set([mammalClass.key, carnivoreOrder.key]);
  const parentAndChild = projectTaxonomyOverview(tree, parentAndChildKeys);
  assert.deepEqual(new Set(parentAndChild.collapsedTaxonKeys), parentAndChildKeys);
  assert.ok(
    parentAndChild.rows.some(
      (row) => row.kind === 'taxon' && row.node.key === mammalClass.key,
    ),
  );
  assert.ok(
    !parentAndChild.rows.some(
      (row) => row.kind === 'taxon' && row.node.key === carnivoreOrder.key,
    ),
    'a collapsed parent should hide a collapsed child without discarding its state',
  );

  const parentExpanded = projectTaxonomyOverview(tree, new Set([carnivoreOrder.key]));
  assert.ok(
    parentExpanded.rows.some(
      (row) => row.kind === 'taxon' && row.node.key === carnivoreOrder.key,
    ),
    'expanding the parent should reveal the child in its prior collapsed state',
  );

  const siblingsCollapsed = projectTaxonomyOverview(
    tree,
    new Set([carnivoreOrder.key, primateOrder.key]),
  );
  assert.deepEqual(
    new Set(siblingsCollapsed.collapsedTaxonKeys),
    new Set([carnivoreOrder.key, primateOrder.key]),
  );
});

test('discards unknown and species keys without modifying the taxonomy tree or request set', () => {
  const tree = buildTaxonomyTree(species);
  const treeBeforeProjection = JSON.stringify(tree);
  const mammalClass = findTaxon(tree, 'class', 'Mammalia');
  const pandaLeaf = flatten(tree).find(
    (node) => node.kind === 'species' && node.species.slug === 'giant-panda',
  );
  assert.ok(mammalClass);
  assert.ok(pandaLeaf);
  const requestedKeys = new Set([
    'taxonomy:unknown-taxon',
    pandaLeaf.key,
    mammalClass.key,
  ]);
  const requestedKeysBeforeProjection = new Set(requestedKeys);

  const projection = projectTaxonomyOverview(tree, requestedKeys);

  assert.equal(JSON.stringify(tree), treeBeforeProjection);
  assert.deepEqual(requestedKeys, requestedKeysBeforeProjection);
  assert.deepEqual(new Set(projection.collapsedTaxonKeys), new Set([mammalClass.key]));
  assert.equal(
    new Set(projection.rows.map(({ key }) => key)).size,
    projection.rows.length,
    'taxon and species frontier row keys should stay unique',
  );
});

test('rejects one scientific taxon identity with conflicting Chinese names', () => {
  const panda = findSpecies('giant-panda');
  const redPanda = findSpecies('red-panda');

  const conflictingRedPanda = withTaxon(redPanda, 'family', {
    scientificName: panda.taxonomy.family.scientificName,
    zhName: '冲突熊科名',
  });

  assert.throws(
    () => buildTaxonomyTree([panda, conflictingRedPanda]),
    (error) =>
      error instanceof TaxonomyConflictError &&
      /Ursidae/.test(error.message) &&
      /conflicting Chinese names/.test(error.message),
  );
});

test('rejects one ranked scientific taxon identity beneath conflicting parents', () => {
  const panda = findSpecies('giant-panda');
  const redPanda = findSpecies('red-panda');

  const conflictingRedPanda = withTaxon(redPanda, 'genus', panda.taxonomy.genus);

  assert.throws(
    () => buildTaxonomyTree([panda, conflictingRedPanda]),
    (error) =>
      error instanceof TaxonomyConflictError &&
      /Ailuropoda/.test(error.message) &&
      /conflicting parents/.test(error.message),
  );
});
