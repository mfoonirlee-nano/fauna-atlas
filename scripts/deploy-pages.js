import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));

function git(cwd, ...args) {
  return execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();
}

// Use a separate repository so publishing never switches or stages the source checkout.
export function publishSite({ siteDir, remote, name, email, sourceCommit }) {
  for (const file of ['index.html', '.nojekyll']) {
    if (!existsSync(join(siteDir, file))) throw new Error(`Missing site file: ${file}`);
  }
  if (existsSync(join(siteDir, '.git'))) throw new Error('Site directory must not contain .git');
  const checkout = mkdtempSync(join(tmpdir(), 'fauna-pages-'));
  try {
    git(checkout, 'init', '--initial-branch=gh-pages');
    git(checkout, 'config', 'user.name', name);
    git(checkout, 'config', 'user.email', email);
    git(checkout, 'remote', 'add', 'origin', remote);
    const previous = git(checkout, 'ls-remote', '--heads', 'origin', 'refs/heads/gh-pages');
    if (previous) {
      git(checkout, 'fetch', '--depth=1', 'origin', 'gh-pages');
      git(checkout, 'checkout', '-B', 'gh-pages', 'FETCH_HEAD');
    }
    for (const entry of readdirSync(checkout)) {
      if (entry === '.git') continue;
      // Keep an existing custom domain unless the build supplies a replacement.
      if (entry === 'CNAME' && !existsSync(join(siteDir, 'CNAME'))) continue;
      rmSync(join(checkout, entry), { recursive: true, force: true });
    }
    for (const entry of readdirSync(siteDir)) {
      cpSync(join(siteDir, entry), join(checkout, entry), { recursive: true });
    }
    git(checkout, 'add', '--all');
    if (!git(checkout, 'diff', '--cached', '--name-only')) {
      console.log('gh-pages already contains this build.');
      return;
    }
    git(checkout, 'commit', '-m', `build(pages): publish site from ${sourceCommit}`);
    // A concurrent update is rejected by Git; never force-push deployment history.
    git(checkout, 'push', 'origin', 'HEAD:refs/heads/gh-pages');
    console.log('Published static files to origin/gh-pages. Check Pages deployment status.');
  } finally {
    rmSync(checkout, { recursive: true, force: true });
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    if (args.length && !(args.length === 1 && args[0] === '--check')) {
      throw new Error('Usage: npm run deploy:pages [-- --check]');
    }
    execFileSync('npm', ['run', 'test:dist-subpath'], { cwd: root, stdio: 'inherit' });
    if (!existsSync(join(root, 'dist', '.nojekyll'))) throw new Error('Build is missing .nojekyll');
    if (args[0] === '--check') {
      console.log('Build and subpath checks passed; nothing was pushed.');
    } else {
      publishSite({
        siteDir: join(root, 'dist'),
        remote: git(root, 'remote', 'get-url', '--push', 'origin'),
        name: git(root, 'config', 'user.name'),
        email: git(root, 'config', 'user.email'),
        sourceCommit: git(root, 'rev-parse', '--short', 'HEAD'),
      });
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
