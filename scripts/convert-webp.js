// Temporary PNG inputs live under src/assets/source; retain only accepted WebP.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, renameSync, rmSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const sourceDir = join(root, 'src/assets/source');

function listSources(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? listSources(path) : entry.name.endsWith('-source.png') ? [path] : [];
  });
}

export function convertSource(source, { inputDir = sourceDir, outputDir = join(root, 'public/images') } = {}) {
  const input = resolve(source);
  const rel = relative(resolve(inputDir), input);
  if (rel.startsWith(`..${sep}`) || rel === '..' || !rel.endsWith('-source.png')) {
    throw new Error('Input must be a *-source.png file inside the source directory');
  }
  const target = join(outputDir, rel.replace(/-source\.png$/, '.webp'));
  mkdirSync(dirname(target), { recursive: true });
  const temporary = `${target}.${process.pid}.tmp.webp`;
  try {
    execFileSync('cwebp', ['-quiet', '-q', '82', '-m', '6', '-mt', input, '-o', temporary]);
    const dimensions = (path) => execFileSync('magick', ['identify', '-format', '%w|%h|%n', path], { encoding: 'utf8' });
    if (dimensions(input) !== dimensions(temporary)) throw new Error('Converted image dimensions or frame count changed');
    execFileSync('magick', [temporary, 'null:']);
    const bytes = statSync(temporary).size;
    if (!bytes) throw new Error('Converted image is empty');
    renameSync(temporary, target);
    return { target, bytes };
  } finally {
    if (existsSync(temporary)) rmSync(temporary);
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const requested = process.argv.slice(2);
  const sources = requested.length ? requested : listSources(sourceDir);
  if (!sources.length) console.log('No temporary PNG inputs to convert. Accepted WebP files are already in public/images.');
  for (const source of sources) {
    try {
      const { target, bytes } = convertSource(source);
      console.log(`${relative(root, target)}: ${(bytes / 1024).toFixed(1)} KiB. Inspect before deleting the PNG input.`);
    } catch (error) {
      console.error(`${source}: ${error.message}`);
      process.exitCode = 1;
    }
  }
}
