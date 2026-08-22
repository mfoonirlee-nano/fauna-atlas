/* global console */
// Regenerates runtime WebP assets in public/images from the editable PNG
// sources in src/assets/source, using the conversion settings documented in
// each species image-set README.
//
//   scripts/convert-webp.js            convert every source PNG
//   scripts/convert-webp.js <png>...   convert only the given sources
import { execFileSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const PERCENT_SCALE = 100;
const BYTES_PER_KIB = 1024;
const LOG_FILE_COLUMN_WIDTH = 72;
const SIZE_COLUMN_WIDTH = 10;

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const sourceDir = join(root, "src", "assets", "source");
const publicImages = join(root, "public", "images");

function listSources() {
  const sources = [join(sourceDir, "fauna-hero-source.png")];
  const speciesDir = join(sourceDir, "species");
  for (const slug of readdirSync(speciesDir)) {
    for (const file of readdirSync(join(speciesDir, slug))) {
      if (file.endsWith("-source.png")) {
        sources.push(join(speciesDir, slug, file));
      }
    }
  }
  return sources;
}

const requested = process.argv.slice(2);
const sources = requested.length > 0 ? requested : listSources();

let totalBefore = 0;
let totalAfter = 0;

for (const source of sources) {
  const rel = relative(sourceDir, source); // e.g. species/<slug>/01-name-source.png
  const target = join(publicImages, rel.replace(/-source\.png$/, ".webp"));
  try {
    execFileSync("cwebp", ["-quiet", "-q", "82", "-m", "6", "-mt", source, "-o", target]);
    const after = statSync(target).size;
    const before = statSync(source).size;
    totalBefore += before;
    totalAfter += after;
    const saved = (((before - after) / before) * PERCENT_SCALE).toFixed(1);
    console.log(`✓ ${rel.padEnd(LOG_FILE_COLUMN_WIDTH)} ${kb(before)} → ${kb(after)}  (-${saved}%)`);
  } catch (err) {
    console.error(`✗ ${rel}: ${err.message}`);
  }
}

const totalSaved = (((totalBefore - totalAfter) / Math.max(totalBefore, 1)) * PERCENT_SCALE).toFixed(1);
console.log(`\nTotal: ${kb(totalBefore)} → ${kb(totalAfter)}  (-${totalSaved}%)`);

function kb(bytes) {
  return `${(bytes / BYTES_PER_KIB).toFixed(1)}KB`.padStart(SIZE_COLUMN_WIDTH);
}
