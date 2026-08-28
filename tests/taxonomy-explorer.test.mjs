import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const [explorerSource, diagramSource, styles] = await Promise.all([
  readFile(new URL('../src/components/TaxonomyExplorer.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/TaxonomyDiagram.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/TaxonomyExplorer.css', import.meta.url), 'utf8'),
]);

function ruleBodies(selector, source = styles) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return [...source.matchAll(new RegExp(`${escapedSelector}\\s*\\{([^}]*)\\}`, 'gs'))]
    .map((match) => match[1]);
}

function atRuleBody(atRule) {
  const ruleStart = styles.indexOf(atRule);
  if (ruleStart < 0) return '';

  const bodyStart = styles.indexOf('{', ruleStart);
  if (bodyStart < 0) return '';

  let depth = 0;
  for (let index = bodyStart; index < styles.length; index += 1) {
    if (styles[index] === '{') depth += 1;
    if (styles[index] !== '}') continue;
    depth -= 1;
    if (depth === 0) return styles.slice(bodyStart + 1, index);
  }

  return '';
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
  const taxonHeight = Number(
    ruleBodies('.taxonomy-diagram__node--taxon[aria-expanded]')[0]
      ?.match(/(?:^|;)\s*height:\s*(\d+)px/)?.[1],
  );
  const adjacentColumnGaps = overviewColumns.slice(1).map(
    (position, index) => position - (overviewColumns[index] ?? 0),
  );
  assert.equal(overviewColumns.length, 7, 'the overview should expose all seven columns');
  assert.ok(overviewMinWidths.length > 0, 'the overview should keep an explicit minimum width');
  assert.ok(taxonWidth > 0, 'taxon buttons should keep an explicit hit-box width');
  assert.ok(taxonHeight >= 44, 'taxon buttons should keep a comfortable hit-box height');
  assert.ok(
    taxonHeight <= Number(rowPitch),
    'taxon button hit boxes must fit inside the overview row pitch',
  );
  assert.ok(
    Math.min(...overviewMinWidths)
      * Math.min(...adjacentColumnGaps)
      >= taxonWidth,
    'adjacent overview node hit boxes must not overlap at the narrowest width',
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

test('keeps species surfaces while rendering interactive taxa as quiet labels', () => {
  const taxonCopyRule = ruleBodies(
    '.taxonomy-diagram__node--taxon[aria-expanded] .taxonomy-diagram__node-copy',
  )[0];
  const expandedTaxonRule = ruleBodies(
    ".taxonomy-diagram__node--taxon[aria-expanded='true'] .taxonomy-diagram__node-copy",
  )[0];
  const activePathTaxonRule = ruleBodies(
    '.taxonomy-diagram__node--taxon[aria-expanded].is-on-path .taxonomy-diagram__node-copy',
  )[0];
  const collapsedTaxonRule = ruleBodies(
    ".taxonomy-diagram__node--taxon[aria-expanded='false'] .taxonomy-diagram__node-copy",
  )[0];
  const taxonMarkerRule = ruleBodies(
    '.taxonomy-diagram__node--taxon[aria-expanded] .taxonomy-diagram__marker',
  )[0];
  const disclosureRule = ruleBodies('.taxonomy-diagram__disclosure')[0];
  const focusTaxonRules = ruleBodies(
    '.taxonomy-diagram__node--taxon[aria-expanded]:focus-visible .taxonomy-diagram__node-copy',
  );
  const focusOutlineRule = focusTaxonRules.find((rule) => /outline:/.test(rule));
  const focusFeedbackRule = focusTaxonRules.find((rule) => /background:/.test(rule));
  const activeTaxonRule = ruleBodies(
    '.taxonomy-diagram__node--taxon[aria-expanded]:active .taxonomy-diagram__node-copy',
  )[0];
  const hoverStyles = atRuleBody('@media (hover: hover) and (pointer: fine)');
  const hoverTaxonRule = ruleBodies(
    '.taxonomy-diagram__node--taxon[aria-expanded]:hover .taxonomy-diagram__node-copy',
    hoverStyles,
  )[0];
  const reducedMotionStyles = atRuleBody('@media (prefers-reduced-motion: reduce)');
  const forcedColorsStyles = atRuleBody('@media (forced-colors: active)');
  const forcedColorsTaxonRule = ruleBodies(
    '.taxonomy-diagram--overview .taxonomy-diagram__node--taxon[aria-expanded] .taxonomy-diagram__node-copy',
    forcedColorsStyles,
  )[0];
  const forcedColorsDarkOverviewRule = ruleBodies(
    ":root[data-theme='dark'] .taxonomy-diagram--overview",
    forcedColorsStyles,
  )[0];

  assert.match(styles, /--taxonomy-species-surface:/);
  assert.match(styles, /--taxonomy-node-selected:/);
  assert.match(taxonCopyRule, /border-color:\s*transparent/);
  assert.match(taxonCopyRule, /background:\s*var\(--taxonomy-canvas\)/);
  assert.match(taxonCopyRule, /box-shadow:\s*none/);
  assert.match(taxonMarkerRule, /width:\s*8px/);
  assert.match(taxonMarkerRule, /box-shadow:\s*none/);
  assert.match(disclosureRule, /width:\s*16px/);
  assert.match(disclosureRule, /border:\s*0/);
  assert.match(disclosureRule, /background:\s*transparent/);
  for (const persistentRule of [taxonCopyRule, expandedTaxonRule, activePathTaxonRule]) {
    assert.match(persistentRule, /border-color:\s*transparent/);
    assert.match(persistentRule, /background:\s*var\(--taxonomy-canvas\)/);
    assert.match(persistentRule, /box-shadow:\s*none/);
    assert.doesNotMatch(persistentRule, /--taxonomy-node-lift-shadow|\binset\b/);
  }
  assert.doesNotMatch(
    collapsedTaxonRule,
    /background|border-color|box-shadow|\binset\b/,
  );

  assert.match(focusOutlineRule, /outline:\s*[1-9]\d*px\s+solid/);
  assert.match(
    focusFeedbackRule,
    /background:\s*color-mix\([^;]*var\(--taxonomy-canvas\)[^;]*var\(--moss-light\)/,
  );
  assert.doesNotMatch(focusFeedbackRule, /background:[^;]*transparent/);
  assert.match(activeTaxonRule, /transform:\s*[^;]+/);
  assert.doesNotMatch(activeTaxonRule, /transform:\s*none/);
  assert.doesNotMatch(hoverStyles, /:active/);
  assert.ok(
    styles.indexOf('.taxonomy-diagram__node--taxon[aria-expanded]:active')
      > styles.indexOf('@media (hover: hover) and (pointer: fine)'),
    'the pressed state should follow hover so its scale feedback wins the cascade',
  );
  assert.match(
    hoverTaxonRule,
    /background:\s*color-mix\([^;]*var\(--taxonomy-canvas\)[^;]*var\(--moss-light\)/,
  );
  assert.doesNotMatch(hoverTaxonRule, /background:[^;]*transparent/);
  assert.match(hoverTaxonRule, /box-shadow:\s*none/);
  assert.match(
    reducedMotionStyles,
    /\.taxonomy-diagram__marker,\s*\.taxonomy-diagram__node-copy,\s*\.taxonomy-diagram__disclosure,[^{}]*\{[^}]*transition:\s*none/s,
  );
  assert.match(
    forcedColorsStyles,
    /\.taxonomy-diagram--overview\s*\{[^}]*--taxonomy-diagram-line:\s*CanvasText/s,
  );
  assert.match(forcedColorsDarkOverviewRule, /--taxonomy-diagram-line:\s*CanvasText/);
  assert.match(forcedColorsTaxonRule, /border-color:\s*CanvasText/);
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
