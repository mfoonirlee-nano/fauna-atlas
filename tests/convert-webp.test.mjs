import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { convertSource } from '../scripts/convert-webp.js';

test('converts temporary PNGs and preserves accepted output when conversion fails', () => {
  const root = mkdtempSync(join(tmpdir(), 'fauna-convert-'));
  try {
    const inputDir = join(root, 'source');
    const outputDir = join(root, 'runtime');
    mkdirSync(inputDir);
    const input = join(inputDir, 'scene-source.png');
    execFileSync('magick', ['-size', '32x24', 'xc:green', input]);
    const { target } = convertSource(input, { inputDir, outputDir });
    assert.equal(target, join(outputDir, 'scene.webp'));
    assert.ok(existsSync(input), 'keep input until visual acceptance');
    const accepted = readFileSync(target);
    assert.ok(accepted.length);
    writeFileSync(input, 'invalid image');
    assert.throws(() => convertSource(input, { inputDir, outputDir }));
    assert.deepEqual(readFileSync(target), accepted);
    assert.deepEqual(readdirSync(outputDir), ['scene.webp']);
    assert.throws(() => convertSource(join(root, 'outside-source.png'), { inputDir, outputDir }), /inside the source directory/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
