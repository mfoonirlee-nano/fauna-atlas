import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const [explorerSource, diagramSource, styles] = await Promise.all([
  readFile(new URL('../src/components/TaxonomyExplorer.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/TaxonomyDiagram.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/TaxonomyExplorer.css', import.meta.url), 'utf8'),
]);

test('keeps the taxonomy overview and mobile map within the viewport', () => {
  assert.doesNotMatch(explorerSource, /items\.length\s*\*\s*42/);
  assert.match(styles, /\.taxonomy-panel--overview\s*\{[^}]*100svh/s);
  assert.match(
    styles,
    /\.taxonomy-panel--overview\s*>\s*\.taxonomy-panel__scroll\s*\{[^}]*overflow:\s*auto/s,
  );
  assert.match(styles, /\.taxonomy-mobile-map\s*\{[^}]*100svh/s);
  assert.match(
    styles,
    /\.taxonomy-mobile-map__diagram-scroll\s*\{[^}]*overflow-y:\s*auto/s,
  );
});

test('keeps source contracts for branch disclosure and persistent species selection', () => {
  assert.match(explorerSource, /projectTaxonomyOverview\(tree, expandedBranchKey\)/);
  const rowPitch = explorerSource.match(/const overviewRowPitch = (\d+);/)?.[1];
  assert.ok(rowPitch, 'the overview should declare an explicit row pitch');
  assert.ok(Number(rowPitch) >= 50, 'the row pitch should keep node hit areas from overlapping');
  assert.match(diagramSource, /aria-expanded=\{node\.summary\.expanded\}/);
  assert.match(diagramSource, /node\.summary\.branchName/);
  assert.match(diagramSource, /aria-pressed=\{onSelectSpecies \? isSelected : undefined\}/);
  assert.match(diagramSource, /onDeactivateSpecies/);
});

test('uses tinted node surfaces and preserves reduced-motion behavior', () => {
  assert.match(styles, /--taxonomy-species-surface:/);
  assert.match(styles, /--taxonomy-node-selected:/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.doesNotMatch(
    styles,
    /\.taxonomy-diagram__node-copy\s*\{[^}]*var\(--taxonomy-diagram-label\) 91%/s,
  );
});
