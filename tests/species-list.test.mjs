import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const [appSource, stylesSource] = await Promise.all([
  readFile(new URL('../src/App.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/styles.css', import.meta.url), 'utf8'),
]);

function blockStartingAt(source, marker) {
  const markerIndex = source.indexOf(marker);
  assert.notEqual(markerIndex, -1, `${marker} should be present`);

  const openingBrace = source.indexOf('{', markerIndex);
  assert.notEqual(openingBrace, -1, `${marker} should open a block`);

  let depth = 0;
  for (let index = openingBrace; index < source.length; index += 1) {
    if (source[index] === '{') depth += 1;
    if (source[index] === '}') depth -= 1;
    if (depth === 0) return source.slice(markerIndex, index + 1);
  }

  assert.fail(`${marker} should close its block`);
}

const cardSource = appSource.slice(
  appSource.indexOf('function SpeciesCard'),
  appSource.indexOf('interface SpeciesDetailProps'),
);
const layoutSource = stylesSource.slice(
  stylesSource.indexOf('@layer layout'),
  stylesSource.indexOf('@layer responsive'),
);
const extraWideGridSource = blockStartingAt(stylesSource, '@media (min-width: 1600px)');
const mediumGridSource = blockStartingAt(stylesSource, '@media (max-width: 1100px)');
const compactCardSource = blockStartingAt(
  stylesSource,
  '@media (width > 760px) and (width <= 1100px)',
);
const narrowGridSource = blockStartingAt(stylesSource, '@media (max-width: 760px)');

test('species list sizing is presentation-driven instead of featured-content-driven', () => {
  assert.ok(cardSource, 'SpeciesCard should be present');
  assert.doesNotMatch(cardSource, /item\.featured|species-card--featured/);
  assert.match(cardSource, /className="species-card"/);
  assert.match(cardSource, /<TaxonArtwork item=\{item\} index=\{index\} large \/>/);
  assert.match(appSource, /className="species-grid__item"/);
});

test('standard desktop species list presents two large cards per row', () => {
  assert.match(
    layoutSource,
    /\.species-grid\s*{[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/s,
  );
  assert.match(layoutSource, /\.atlas-section\s*{[^}]*max-width:\s*1920px/s);
  assert.match(stylesSource, /\.species-card\s*{[^}]*display:\s*flex/s);
  assert.match(stylesSource, /\.species-card\s*{[^}]*height:\s*100%/s);
  assert.match(stylesSource, /\.species-card\s*{[^}]*flex-direction:\s*column/s);
  assert.match(stylesSource, /\.species-card__content\s*{[^}]*flex:\s*1/s);
  assert.match(stylesSource, /\.species-card\s*{[^}]*min-height:\s*573px/s);
  assert.match(stylesSource, /\.species-card h3\s*{[^}]*font-size:\s*clamp\(2\.2rem,\s*3vw,\s*3\.4rem\)/s);
});

test('extra-wide species list presents three large cards per row', () => {
  assert.match(
    extraWideGridSource,
    /\.species-grid\s*{[^}]*grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/s,
  );
});

test('medium species list pairs one large card with one equal-height compact card', () => {
  assert.match(
    mediumGridSource,
    /\.species-grid\s*{[^}]*grid-template-columns:\s*minmax\(0,\s*2fr\)\s*minmax\(240px,\s*1fr\)/s,
  );
  assert.doesNotMatch(compactCardSource, /\.species-grid__item:nth-child\(even\) \.species-card\s*{/);
  assert.doesNotMatch(compactCardSource, /min-height:\s*525px/);
  assert.match(
    compactCardSource,
    /\.species-grid__item:nth-child\(even\) \.taxon-art\s*{[^}]*min-height:\s*245px/s,
  );
  assert.match(
    compactCardSource,
    /\.species-grid__item:nth-child\(even\) \.taxon-art > svg\s*{[^}]*width:\s*74px[^}]*height:\s*74px/s,
  );
  assert.match(
    compactCardSource,
    /\.species-grid__item:nth-child\(even\) \.species-card h3\s*{[^}]*font-size:\s*clamp\(1\.8rem,\s*2\.2vw,\s*2\.55rem\)/s,
  );
});

test('narrow species list returns every entry to one full-width large card', () => {
  assert.match(narrowGridSource, /\.species-grid\s*{[^}]*grid-template-columns:\s*1fr/s);
  assert.match(narrowGridSource, /\.species-card\s*{[^}]*min-height:\s*510px/s);
  assert.match(narrowGridSource, /\.species-card \.taxon-art\s*{[^}]*min-height:\s*255px/s);
  assert.doesNotMatch(narrowGridSource, /species-grid__item:nth-child\(even\)/);
});

test('species status filter exposes not-evaluated profiles', () => {
  assert.match(appSource, /<option value="NE">NE · 未评估<\/option>/);
  assert.match(appSource, /IUCN 尚未评估/);
});
