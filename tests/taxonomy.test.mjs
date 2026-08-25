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

test('counts descendant species on shared taxon branches', () => {
  const tree = buildTaxonomyTree(species);

  for (const node of flatten(tree).filter((candidate) => candidate.kind === 'taxon')) {
    assert.equal(
      node.speciesCount,
      countCatalogueDescendants(node),
      `${node.rank} ${node.taxon.scientificName} should count its catalogue descendants`,
    );
  }

  assert.equal(findTaxon(tree, 'genus', 'Sinosturio'), undefined);
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
