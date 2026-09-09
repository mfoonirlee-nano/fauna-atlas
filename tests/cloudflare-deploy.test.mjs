import assert from 'node:assert/strict';
import test from 'node:test';
import { deployCloudflare } from '../scripts/deploy-cloudflare.js';

const credentials = { CLOUDFLARE_API_TOKEN: 'test-token', CLOUDFLARE_ACCOUNT_ID: 'a'.repeat(32) };

test('check mode validates the build without credentials or publishing', () => {
  const calls = [];
  deployCloudflare({ args: ['--check'], env: {}, run: (...args) => calls.push(args) });
  assert.equal(calls.length, 2);
  assert.deepEqual(calls[0][1], ['run', 'test:dist-subpath']);
  assert.ok(calls[1][1].includes('--dry-run'));
});

test('publishing requires credentials and rejects unknown arguments before running commands', () => {
  for (const [args, env] of [[[], {}], [[], { ...credentials, CLOUDFLARE_ACCOUNT_ID: 'invalid' }], [['--force'], credentials]]) {
    assert.throws(() => deployCloudflare({ args, env, run: () => assert.fail('must not run') }));
  }
});

test('a failed build or dry run prevents publishing', () => {
  for (const failAt of [1, 2]) {
    let calls = 0;
    assert.throws(() => deployCloudflare({
      args: [], env: credentials,
      run: () => { if (++calls === failAt) throw new Error('validation failed'); },
    }), /validation failed/);
    assert.equal(calls, failAt);
  }
});

test('publishing runs only after build checks and Wrangler validation', () => {
  const calls = [];
  deployCloudflare({ args: [], env: credentials, run: (...args) => calls.push(args) });
  assert.equal(calls.length, 3);
  assert.ok(calls[1][1].includes('--dry-run'));
  assert.equal(calls[2][1][1], 'deploy');
  assert.ok(!calls[2][1].includes('--dry-run'));
  assert.equal(calls[2][2].env.CLOUDFLARE_API_TOKEN, credentials.CLOUDFLARE_API_TOKEN);
});
