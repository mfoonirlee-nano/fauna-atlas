import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

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

function withTaxon(profile, rank, taxon) {
  return {
    ...profile,
    taxonomy: {
      ...profile.taxonomy,
      [rank]: taxon,
    },
  };
}

test('builds the current catalogue into 102 taxon nodes and 33 unique species leaves', () => {
  const tree = buildTaxonomyTree(species);
  const nodes = flatten(tree);
  const taxonNodes = nodes.filter((node) => node.kind === 'taxon');
  const speciesNodes = nodes.filter((node) => node.kind === 'species');

  assert.equal(species.length, 33, 'fixture should continue to represent the current catalogue');
  assert.equal(taxonNodes.length, 102);
  assert.equal(speciesNodes.length, 33);
  assert.equal(nodes.length, 135);
  assert.equal(new Set(nodes.map((node) => node.key)).size, 135, 'every node key is unique');

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

test('counts descendant species on shared taxon branches', () => {
  const tree = buildTaxonomyTree(species);

  assert.equal(findTaxon(tree, 'kingdom', 'Animalia')?.speciesCount, 33);
  assert.equal(findTaxon(tree, 'phylum', 'Chordata')?.speciesCount, 28);
  assert.equal(findTaxon(tree, 'phylum', 'Arthropoda')?.speciesCount, 3);
  assert.equal(findTaxon(tree, 'class', 'Insecta')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'order', 'Lepidoptera')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Nymphalidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Danaus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Malacostraca')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Decapoda')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Ocypodidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Tubuca')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'phylum', 'Cnidaria')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'class', 'Scyphozoa')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Semaeostomeae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Ulmaridae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Aurelia')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Amphibia')?.speciesCount, 3);
  assert.equal(findTaxon(tree, 'order', 'Caudata')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'family', 'Cryptobranchidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Andrias')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Mammalia')?.speciesCount, 17);
  assert.equal(findTaxon(tree, 'order', 'Rodentia')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Castoridae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Castor')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Pilosa')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Bradypodidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Bradypus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Perissodactyla')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Rhinocerotidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Ceratotherium')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Sirenia')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Dugongidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Dugong')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Pholidota')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Manidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Manis')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'class', 'Aves')?.speciesCount, 3);
  assert.equal(findTaxon(tree, 'class', 'Reptilia')?.speciesCount, 4);
  assert.equal(findTaxon(tree, 'order', 'Squamata')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'family', 'Pythonidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Malayopython')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Carnivora')?.speciesCount, 6);
  assert.equal(findTaxon(tree, 'family', 'Felidae')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'family', 'Ursidae')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'family', 'Mustelidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Lutra')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Ursus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Primates')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Hominidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Gorilla')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Monotremata')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Ornithorhynchidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Ornithorhynchus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Diprotodontia')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Macropodidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Osphranter')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Cetacea')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'family', 'Delphinidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Tursiops')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Procellariiformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Diomedeidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Diomedea')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Apodiformes')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Trochilidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Archilochus')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'order', 'Testudines')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'family', 'Cheloniidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Chelonia')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Panthera')?.speciesCount, 1);
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
