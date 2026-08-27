import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
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

const [speciesModule, taxonomyModule] = await Promise.all([
  importCompiledModule('../node_modules/.tmp/taxonomy-test/data/species.js'),
  importCompiledModule('../node_modules/.tmp/taxonomy-test/domain/taxonomy.js'),
]);
const { species } = speciesModule;
const {
  TAXONOMY_RANKS,
  TaxonomyConflictError,
  buildTaxonomyTree,
  getSpeciesTaxonomyPath,
} = taxonomyModule;

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

test('counts descendant species on shared taxon branches', () => {
  const tree = buildTaxonomyTree(species);

  assert.equal(species.length, 62);

  for (const node of flatten(tree).filter((candidate) => candidate.kind === 'taxon')) {
    assert.equal(
      node.speciesCount,
      countCatalogueDescendants(node),
      `${node.rank} ${node.taxon.scientificName} should count its catalogue descendants`,
    );
  }

  assert.equal(findTaxon(tree, 'genus', 'Sinosturio'), undefined);
  assert.equal(findTaxon(tree, 'class', 'Reptilia')?.speciesCount, 8);
  assert.equal(findTaxon(tree, 'order', 'Crocodylia')?.speciesCount, 2);
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
  assert.equal(findTaxon(tree, 'order', 'Squamata')?.speciesCount, 3);
  assert.equal(findTaxon(tree, 'family', 'Iguanidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Amblyrhynchus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Amphibia')?.speciesCount, 4);
  assert.equal(findTaxon(tree, 'order', 'Anura')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'family', 'Conrauidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Conraua')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'phylum', 'Chordata')?.speciesCount, 57);
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
  assert.equal(findTaxon(tree, 'class', 'Leptocardii')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Amphioxiformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Branchiostomatidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Branchiostoma')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Aves')?.speciesCount, 11);
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
  assert.equal(findTaxon(tree, 'class', 'Sarcopterygii')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Coelacanthiformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Latimeriidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Latimeria')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Panthera')?.speciesCount, 2);
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
