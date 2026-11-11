import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync, existsSync } from 'node:fs';
import { auditSpecies, buildAudit, renderInventory } from '../scripts/species-learning-audit.mjs';

const fixture = (overrides = {}) => ({
  id: 'example', slug: 'example', names: { zh: '示例动物' }, scientificName: 'Example animal',
  taxonomy: { kingdom: { scientificName: 'Animalia' } },
  summary: '示例', description: '身体结构帮助它取得食物。', diet: { foods: ['植物'], description: '取食植物。' },
  distribution: { range: '示例地区' }, habitats: [{ name: '森林' }],
  conservation: { system: 'IUCN Red List', code: 'LC', assessedYear: 2020, trend: 'unknown' },
  sources: [{ title: '示例来源', url: 'https://example.org', kind: 'conservation' }],
  media: { image: './images/example.webp', alt: '示例动物' },
  ...overrides,
});

test('finding text or an image never grants editorial or biological approval', () => {
  const input = fixture();
  const before = structuredClone(input);
  const row = auditSpecies(input);
  assert.equal(row.coverage.body.status, 'candidate-found');
  assert.equal(row.media.biologicalReview, 'pending');
  assert.equal(row.conservation.reviewStatus, 'pending');
  assert.ok(row.workflow.includes('pending-editorial-review'));
  assert.equal(row.reviewedAt, null);
  assert.deepEqual(input, before);
});

test('historical EX, EW, NE and editorial UNVERIFIED retain different meanings', () => {
  const historical = auditSpecies(fixture({ conservation: { system: 'Historical and fossil evidence', code: 'EX' } }));
  assert.equal(historical.lifeStatus, 'extinct');
  assert.ok(!historical.conservation.issues.includes('assessment-year-missing'));
  const ew = auditSpecies(fixture({ conservation: { system: 'IUCN Red List', code: 'EW', assessedYear: 2020 } }));
  assert.equal(ew.lifeStatus, 'extinct-in-wild');
  const ne = auditSpecies(fixture({ conservation: { system: 'IUCN Red List', code: 'NE' } }));
  assert.ok(!ne.conservation.issues.includes('assessment-year-missing'));
  assert.ok(!ne.conservation.issues.includes('assessment-unverified'));
  const unverified = auditSpecies(fixture({ conservation: { system: 'Unverified', code: 'UNVERIFIED', trend: 'unknown' } }));
  assert.ok(unverified.conservation.issues.includes('assessment-unverified'));
  assert.ok(!unverified.conservation.issues.includes('unverified-evidence-conflict'));
});

test('flags extinct map points and conflicting historical assessment years', () => {
  const row = auditSpecies(fixture({
    conservation: { system: 'Historical and fossil evidence', code: 'EX', assessedYear: 1000 },
    distribution: { range: '历史范围', center: { lat: 1, lng: 1 } },
  }));
  assert.ok(row.conservation.issues.includes('historical-evidence-conflict'));
  assert.ok(row.conservation.issues.includes('extinct-current-map-point'));
});

test('retained pending assets cannot count as public images', () => {
  const row = auditSpecies(fixture({ media: { alt: '待修复' }, pendingMedia: {
    reason: '结构错误', assets: { image: './images/withdrawn.webp' },
  } }));
  assert.equal(row.media.publicImageCount, 0);
  assert.deepEqual(row.media.images, []);
  assert.equal(row.media.pendingReason, '结构错误');
  assert.ok(row.workflow.includes('pending-media'));
});

test('detects broken public image references, empty food records and absent topic candidates', () => {
  const row = auditSpecies(fixture({ description: '', diet: { foods: [], description: '' } }), { assetExists: () => false });
  assert.deepEqual(row.media.missingAssets, ['./images/example.webp']);
  assert.ok(row.gaps.includes('food'));
  assert.equal(row.coverage.growth.status, 'no-candidate');
  assert.ok(row.workflow.includes('pending-research'));
});

test('rejects duplicate catalogue identities', () => {
  assert.throws(() => buildAudit([fixture(), fixture()]), /Duplicate/);
});

test('saved inventory and material candidates cover the live catalogue exactly', async () => {
  const { species } = await import('../node_modules/.tmp/taxonomy-test/data/species.js');
  const inventory = JSON.parse(readFileSync(new URL('../todo/learning-refactor/inventory.json', import.meta.url)));
  const media = JSON.parse(readFileSync(new URL('../todo/learning-refactor/media-todo.json', import.meta.url)));
  const expected = species.map(({ id, slug }) => [id, slug]);
  assert.deepEqual(inventory.species.map(({ id, slug }) => [id, slug]), expected);
  assert.deepEqual(media.tasks.map(({ speciesId, slug }) => [speciesId, slug]), expected);
  assert.equal(inventory.summary.total, species.length);
  for (const row of inventory.species) {
    assert.ok(existsSync(new URL(`../src/data/species/${row.slug}.ts`, import.meta.url)), row.slug);
    assert.equal(row.owner, null);
    assert.equal(row.reviewedAt, null);
  }
  for (const task of media.tasks) assert.equal(task.status, 'candidate-needs-review');
  assert.match(renderInventory(inventory), /不代表科学审核/);
});


test('structured learning sections are candidates even without a matching keyword, never automatic approval', () => {
  const row = auditSpecies(fixture({ learning: { version: 1, sections: [
    { key: 'ecology', paragraphs: ['与其他生命的联系。'], sources: [] },
  ] } }));
  assert.ok(row.coverage.ecology.candidatePaths.includes('learning.sections.0'));
  assert.equal(row.media.biologicalReview, 'pending');
  assert.ok(row.workflow.includes('pending-editorial-review'));
  assert.deepEqual(row.learning.sections, ['ecology']);
});
