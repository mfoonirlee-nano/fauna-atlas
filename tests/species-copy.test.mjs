import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const { species } = await import(
  new URL('../node_modules/.tmp/taxonomy-test/data/species.js', import.meta.url).href,
);
const report = JSON.parse(await readFile(
  new URL('../docs/research/species-copy-review-2026-10-11.json', import.meta.url),
  'utf8',
));
const topics = ['habits', 'traits', 'range', 'history', 'naming'];

function resolveContent(profile, path) {
  return path.split('.').reduce((value, part) => (
    Array.isArray(value) && !/^\d+$/.test(part)
      ? value.find((entry) => entry.key === part)
      : value?.[part]
  ), profile);
}

test('every animal has a separate discovery and naming story', () => {
  for (const profile of species) {
    const stories = profile.storySections?.filter(({ key }) => key === 'discovery-naming');
    assert.equal(stories?.length, 1, `${profile.slug}: naming story`);
    assert.equal(stories[0].label, '发现与命名', profile.slug);
    assert.ok(stories[0].title.trim().length > 0, profile.slug);
    assert.ok(stories[0].body.trim().length >= 40, profile.slug);
  }
});

test('the prose review records content and references for all five requested topics', () => {
  assert.deepEqual(report.requiredTopics, topics);
  assert.equal(new Set(report.species.map(({ slug }) => slug)).size, report.species.length);
  assert.deepEqual(
    report.species.map(({ slug }) => slug).sort(),
    species.map(({ slug }) => slug).sort(),
  );
  for (const profile of species) {
    const review = report.species.find(({ slug }) => slug === profile.slug);
    assert.ok(review, `${profile.slug}: review evidence`);
    assert.equal(review.scientificName, profile.scientificName, profile.slug);
    for (const topic of topics) {
      const coverage = review.coverage[topic];
      if (topic === 'history' || topic === 'naming') {
        assert.equal(coverage.path, 'storySections.discovery-naming.body', profile.slug);
      }
      const content = resolveContent(profile, coverage.path);
      assert.ok(
        typeof content === 'string' && content.trim().length > 0,
        `${profile.slug}: ${topic} content`,
      );
      assert.ok(coverage.sources.length > 0, `${profile.slug}: ${topic} references`);
      assert.ok(
        coverage.sources.every((url) => profile.sources.some((source) => source.url === url)),
        `${profile.slug}: ${topic} reference missing from profile`,
      );
    }
  }
});

test('saola conservation agrees with the sourced IUCN classification', () => {
  const profile = species.find(({ slug }) => slug === 'saola');
  assert.equal(profile.conservation.code, 'CR');
  assert.deepEqual(profile.conservation.label, { zh: '极危', en: 'Critically Endangered' });
  assert.ok(profile.sources.some(({ url }) => url ===
    'https://iucn.org/news/species-survival-commission/202108/iucn-ssc-experts-urge-immediate-action-find-saola-its-too-late'));
});
