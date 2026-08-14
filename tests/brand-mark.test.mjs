import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const appPath = fileURLToPath(new URL('../src/App.tsx', import.meta.url));
const faviconPath = fileURLToPath(new URL('../public/favicon.svg', import.meta.url));
const stylesPath = fileURLToPath(new URL('../src/styles.css', import.meta.url));

const [appSource, faviconSource, stylesSource] = await Promise.all([
  readFile(appPath, 'utf8'),
  readFile(faviconPath, 'utf8'),
  readFile(stylesPath, 'utf8'),
]);

const brandMarkStart = appSource.indexOf('function BrandMark');
const brandMarkEnd = appSource.indexOf('\nfunction ', brandMarkStart + 1);
const brandMarkSource =
  brandMarkStart >= 0
    ? appSource.slice(brandMarkStart, brandMarkEnd >= 0 ? brandMarkEnd : undefined)
    : '';

function firstRuleBody(selector) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return stylesSource.match(new RegExp(`${escapedSelector}\\s*\\{([^}]*)\\}`))?.[1] ?? '';
}

function shapeGeometry(source, tag, attributes) {
  return [...source.matchAll(new RegExp(`<${tag}\\b([^>]*)>`, 'g'))].map((tagMatch) =>
    attributes.map(
      (attribute) =>
        tagMatch[1].match(new RegExp(`\\b${attribute}="([^"]+)"`))?.[1] ?? null,
    ),
  );
}

test('brand mark and favicon share one SVG geometry', () => {
  const faviconViewBox = faviconSource.match(/viewBox="([^"]+)"/)?.[1];
  const componentViewBox = brandMarkSource.match(/viewBox="([^"]+)"/)?.[1];

  assert.ok(brandMarkSource, 'BrandMark component should be present');
  assert.equal(componentViewBox, faviconViewBox, 'component and favicon should share one viewBox');
  assert.deepEqual(
    shapeGeometry(brandMarkSource, 'path', ['d']),
    shapeGeometry(faviconSource, 'path', ['d']),
    'component and favicon should share the same paths',
  );
  assert.deepEqual(
    shapeGeometry(brandMarkSource, 'circle', ['cx', 'cy', 'r']),
    shapeGeometry(faviconSource, 'circle', ['cx', 'cy', 'r']),
    'component and favicon should share the same circles',
  );
  assert.match(brandMarkSource, /className="brand-mark__icon"/);
  assert.match(brandMarkSource, /focusable="false"/);
  assert.doesNotMatch(
    brandMarkSource,
    /<span className="brand-mark__(?:orbit|leaf|star)"/,
    'logo geometry should not depend on separately positioned HTML fragments',
  );
});

test('compact mark keeps its own box size on narrow layouts', () => {
  const baseRule = firstRuleBody('.brand-mark');
  const compactRule = firstRuleBody('.brand-mark--compact');
  const iconRule = firstRuleBody('.brand-mark__icon');
  const narrowStart = stylesSource.indexOf('@media (max-width: 760px)');
  const narrowEnd = stylesSource.indexOf('\n  @media ', narrowStart + 1);
  const narrowRules = narrowStart >= 0 ? stylesSource.slice(narrowStart, narrowEnd) : '';

  assert.ok(
    /--brand-mark-size:\s*39px/.test(baseRule) &&
      /width:\s*var\(--brand-mark-size\)/.test(baseRule) &&
      /height:\s*var\(--brand-mark-size\)/.test(baseRule),
    'base mark should own its dimensions through --brand-mark-size',
  );
  assert.ok(
    /--brand-mark-size:\s*27px/.test(compactRule),
    'compact mark should set a 27px component size',
  );
  assert.ok(
    /\.site-header \.brand-mark\s*{[^}]*--brand-mark-size:\s*34px/.test(narrowRules),
    'only the site-header mark should receive the narrow-layout size',
  );
  assert.doesNotMatch(
    narrowRules,
    /(?:^|\n)\s*\.brand-mark\s*{[^}]*--brand-mark-size/,
    'narrow layouts must not override every mark variant',
  );
  assert.ok(
    /display:\s*block/.test(iconRule) && /width:\s*100%/.test(iconRule) && /height:\s*100%/.test(iconRule),
    'the SVG should fill its box without an inline baseline gap',
  );
});
