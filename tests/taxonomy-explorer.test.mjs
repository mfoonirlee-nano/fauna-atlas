import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const [explorerSource, diagramSource, styles] = await Promise.all([
  readFile(new URL('../src/components/TaxonomyExplorer.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/TaxonomyDiagram.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/TaxonomyExplorer.css', import.meta.url), 'utf8'),
]);

function ruleBodies(selector) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return [...styles.matchAll(new RegExp(`${escapedSelector}\\s*\\{([^}]*)\\}`, 'gs'))]
    .map((match) => match[1]);
}

test('gives the desktop overview and mobile map one dynamic viewport of height', () => {
  assert.doesNotMatch(explorerSource, /items\.length\s*\*\s*42/);

  const overviewRule = ruleBodies('.taxonomy-panel--overview')
    .find((body) => /height:\s*100dvh/.test(body));
  const mobileRule = ruleBodies('.taxonomy-mobile-map')
    .find((body) => /height:\s*100dvh/.test(body));

  assert.ok(overviewRule, 'the desktop overview should declare a dynamic viewport height');
  assert.ok(mobileRule, 'the mobile map should declare a dynamic viewport height');
  for (const rule of [overviewRule, mobileRule]) {
    assert.match(rule, /height:\s*100vh;\s*height:\s*100dvh;/);
    assert.doesNotMatch(rule, /100svh|min\(|max-height|calc\([^)]*-\s*\d+px/);
  }

  assert.match(
    styles,
    /\.taxonomy-panel--overview\s*>\s*\.taxonomy-panel__scroll\s*\{[^}]*min-height:\s*0[^}]*overflow:\s*auto/s,
  );
  assert.match(
    styles,
    /\.taxonomy-mobile-map__diagram-scroll\s*\{[^}]*min-height:\s*0[^}]*overflow-y:\s*auto/s,
  );
});

test('keeps every taxon toggleable through the responsive VariantA overview', () => {
  assert.match(explorerSource, /projectTaxonomyOverview\(tree, collapsedTaxonKeys\)/);
  const rowPitch = explorerSource.match(/const overviewRowPitch = (\d+);/)?.[1];
  const variantAStart = explorerSource.indexOf('function VariantA');
  const variantAEnd = explorerSource.indexOf('function VariantB');
  const variantASource = explorerSource.slice(variantAStart, variantAEnd);
  assert.ok(rowPitch, 'the overview should declare an explicit row pitch');
  assert.ok(Number(rowPitch) >= 50, 'the row pitch should keep node hit areas from overlapping');
  assert.ok(variantAStart >= 0 && variantAEnd > variantAStart, 'VariantA should remain inspectable');

  const overviewDiagramStart = explorerSource.indexOf('function makeOverviewDiagram');
  const overviewDiagramSignatureEnd = explorerSource.indexOf('): DiagramData {', overviewDiagramStart);
  const overviewColumns = [
    ...explorerSource
      .slice(overviewDiagramStart, overviewDiagramSignatureEnd)
      .matchAll(/\b0\.\d+\b/g),
  ].map(([value]) => Number(value));
  const overviewMinWidths = ruleBodies('.taxonomy-diagram')
    .flatMap((body) => [...body.matchAll(/min-width:\s*(\d+)px/g)])
    .map((match) => Number(match[1]));
  const taxonWidth = Number(
    ruleBodies('.taxonomy-diagram__node--taxon')[0]?.match(/width:\s*(\d+)px/)?.[1],
  );
  assert.equal(overviewColumns.length, 7, 'the overview should expose all seven columns');
  assert.ok(overviewMinWidths.length > 0, 'the overview should keep an explicit minimum width');
  assert.ok(taxonWidth > 0, 'taxon buttons should keep an explicit hit-box width');
  assert.ok(
    Math.min(...overviewMinWidths)
      * ((overviewColumns[6] ?? 0) - (overviewColumns[5] ?? 0))
      >= taxonWidth,
    'the genus and species hit boxes must not overlap at the narrowest overview width',
  );

  assert.match(diagramSource, /node\.disclosure/);
  assert.match(diagramSource, /onToggleTaxon/);
  assert.match(diagramSource, /aria-expanded=\{(?:node\.)?disclosure\.expanded\}/);
  assert.match(diagramSource, /(?:node\.)?disclosure\.expanded\s*\?\s*'收起'\s*:\s*'展开'/);
  assert.match(diagramSource, /(?:node\.)?disclosure\.speciesCount/);
  assert.match(diagramSource, /data-taxonomy-node=/);
  assert.match(
    diagramSource,
    /disclosure\s*\?\s*\([\s\S]*?<button[\s\S]*?taxonomy-diagram__node--taxon/,
  );
  assert.match(
    explorerSource,
    /const addTaxon[\s\S]*?disclosure:\s*interactiveTaxa/,
  );

  const overviewClass = variantASource.match(
    /<div className="([^"]*taxonomy-panel--overview[^"]*)">/,
  )?.[1];
  assert.ok(overviewClass, 'VariantA should render the complete taxonomy overview');
  assert.doesNotMatch(
    overviewClass,
    /taxonomy-desktop-map/,
    'the overview must remain visible below the mobile breakpoint',
  );
  assert.match(
    styles,
    /\.taxonomy-desktop-map\s*\{[^}]*display:\s*none/s,
    'the responsive hiding class should remain explicit',
  );
  assert.doesNotMatch(variantASource, /<MobileLineageMap/);

  const overviewToggleBindings = variantASource.match(/onToggleTaxon=\{toggleTaxon\}/g) ?? [];
  assert.equal(
    overviewToggleBindings.length,
    1,
    'one responsive overview should bind the taxon toggle for desktop and mobile',
  );

  assert.match(diagramSource, /aria-pressed=\{onSelectSpecies \? isSelected : undefined\}/);
  assert.match(diagramSource, /打开.*物种档案/);
  assert.match(diagramSource, /onDeactivateSpecies/);
  const speciesButtonSource = diagramSource.slice(
    diagramSource.indexOf("return node.kind === 'species'"),
    diagramSource.indexOf(') : disclosure ?'),
  );
  assert.doesNotMatch(speciesButtonSource, /aria-expanded=/);
});

test('uses tinted node surfaces and preserves reduced-motion behavior', () => {
  assert.match(styles, /--taxonomy-species-surface:/);
  assert.match(styles, /--taxonomy-node-selected:/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(
    explorerSource,
    /matchMedia\(['"]\(prefers-reduced-motion: reduce\)['"]\)/,
  );
  assert.match(
    explorerSource,
    /behavior:\s*reduceMotion\s*\?\s*'auto'\s*:\s*'smooth'/,
  );
  assert.doesNotMatch(
    styles,
    /\.taxonomy-diagram__node-copy\s*\{[^}]*var\(--taxonomy-diagram-label\) 91%/s,
  );
});
