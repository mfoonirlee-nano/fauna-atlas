import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { publishSite } from '../scripts/deploy-pages.js';

test('publishes static files and updates gh-pages without discarding history', () => {
  const workspace = mkdtempSync(join(tmpdir(), 'fauna-pages-test-'));
  const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim();
  try {
    const remote = join(workspace, 'remote.git');
    const siteDir = join(workspace, 'site');
    git('init', '--bare', remote);
    mkdirSync(siteDir);
    writeFileSync(join(siteDir, 'index.html'), '<h1>First build</h1>');
    writeFileSync(join(siteDir, '.nojekyll'), '');
    writeFileSync(join(siteDir, 'old.js'), 'old asset');
    const options = { siteDir, remote, name: 'Pages Test', email: 'pages@example.test', sourceCommit: 'abc123' };
    publishSite(options);
    const first = git('--git-dir', remote, 'rev-parse', 'gh-pages');
    assert.equal(git('--git-dir', remote, 'show', 'gh-pages:.nojekyll'), '');
    writeFileSync(join(siteDir, 'index.html'), '<h1>Second build</h1>');
    rmSync(join(siteDir, 'old.js'));
    publishSite({ ...options, sourceCommit: 'def456' });
    assert.equal(git('--git-dir', remote, 'rev-parse', 'gh-pages^'), first);
    assert.equal(git('--git-dir', remote, 'show', 'gh-pages:index.html'), '<h1>Second build</h1>');
    assert.equal(git('--git-dir', remote, 'ls-tree', '--name-only', 'gh-pages'), '.nojekyll\nindex.html');
    const second = git('--git-dir', remote, 'rev-parse', 'gh-pages');
    publishSite(options);
    assert.equal(git('--git-dir', remote, 'rev-parse', 'gh-pages'), second);
    rmSync(join(siteDir, '.nojekyll'));
    assert.throws(() => publishSite(options), /Missing site file: .nojekyll/);
  } finally {
    rmSync(workspace, { recursive: true, force: true });
  }
});
