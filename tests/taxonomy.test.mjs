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

test('builds the current catalogue into 51 taxon nodes and 15 unique species leaves', () => {
  const tree = buildTaxonomyTree(species);
  const nodes = flatten(tree);
  const taxonNodes = nodes.filter((node) => node.kind === 'taxon');
  const speciesNodes = nodes.filter((node) => node.kind === 'species');

  assert.equal(species.length, 15, 'fixture should continue to represent the current catalogue');
  assert.equal(taxonNodes.length, 51);
  assert.equal(speciesNodes.length, 15);
  assert.equal(nodes.length, 66);
  assert.equal(new Set(nodes.map((node) => node.key)).size, 66, 'every node key is unique');

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

test('counts descendant species on shared taxon branches', () => {
  const tree = buildTaxonomyTree(species);

  assert.equal(findTaxon(tree, 'kingdom', 'Animalia')?.speciesCount, 15);
  assert.equal(findTaxon(tree, 'phylum', 'Chordata')?.speciesCount, 13);
  assert.equal(findTaxon(tree, 'class', 'Mammalia')?.speciesCount, 7);
  assert.equal(findTaxon(tree, 'order', 'Carnivora')?.speciesCount, 5);
  assert.equal(findTaxon(tree, 'family', 'Felidae')?.speciesCount, 2);
  assert.equal(findTaxon(tree, 'family', 'Mustelidae')?.speciesCount, 1);
  assert.equal(findTaxon(tree, 'genus', 'Lutra')?.speciesCount, 1);
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
