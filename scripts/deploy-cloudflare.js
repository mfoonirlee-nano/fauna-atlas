import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { parseEnv } from 'node:util';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const wrangler = join(root, 'node_modules/wrangler/bin/wrangler.js');

export function deployCloudflare({ args, env, run = execFileSync }) {
  if (args.length && !(args.length === 1 && args[0] === '--check')) {
    throw new Error('Usage: npm run deploy:cloudflare [-- --check]');
  }
  const checkOnly = args[0] === '--check';
  if (!checkOnly) {
    for (const key of ['CLOUDFLARE_API_TOKEN', 'CLOUDFLARE_ACCOUNT_ID']) {
      if (!env[key]?.trim()) throw new Error(`Missing ${key}. Set it in .env or the shell environment.`);
    }
    if (!/^[a-f0-9]{32}$/i.test(env.CLOUDFLARE_ACCOUNT_ID)) {
      throw new Error('CLOUDFLARE_ACCOUNT_ID must be a 32-character hexadecimal account ID.');
    }
  }

  const options = { cwd: root, stdio: 'inherit', env };
  // Rebuild and verify lazy profiles and image URLs before any upload.
  run('npm', ['run', 'test:dist-subpath'], options);
  run(process.execPath, [wrangler, 'deploy', '--config', join(root, 'wrangler.jsonc'), '--dry-run'], options);
  if (checkOnly) {
    console.log('Build, asset checks and Wrangler dry run passed; nothing was deployed.');
    return;
  }
  run(process.execPath, [wrangler, 'deploy', '--config', join(root, 'wrangler.jsonc')], options);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const env = { ...process.env };
    const envPath = join(root, '.env');
    if (existsSync(envPath)) {
      const local = parseEnv(readFileSync(envPath, 'utf8'));
      for (const key of ['CLOUDFLARE_API_TOKEN', 'CLOUDFLARE_ACCOUNT_ID']) {
        env[key] ??= local[key];
      }
    }
    // Keep Wrangler's local logs inside the ignored workspace directory.
    env.WRANGLER_LOG_PATH ??= join(root, '.wrangler/logs');
    // The banner starts an npm update request that can keep an offline dry run alive.
    env.WRANGLER_HIDE_BANNER = 'true';
    env.CI = 'true';
    deployCloudflare({ args: process.argv.slice(2), env });
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
