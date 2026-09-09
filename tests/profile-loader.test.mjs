import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
const code = await readFile(new URL('../node_modules/.tmp/taxonomy-test/domain/profile-loader.js', import.meta.url), 'utf8');
const { createProfileLoader } = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
const deferred = () => { let resolve, reject; const promise = new Promise((a, b) => { resolve = a; reject = b; }); return { promise, resolve, reject }; };

test('out-of-order profile responses and cancellation cannot reopen stale profiles', async () => {
  const first = deferred(); const second = deferred();
  const loader = createProfileLoader((slug) => slug === 'first' ? first.promise : second.promise);
  const a = loader.load('first'); const b = loader.load('second');
  second.resolve({ slug: 'second' });
  assert.equal((await b).slug, 'second');
  first.resolve({ slug: 'first' });
  assert.equal(await a, undefined);
  const pending = deferred();
  const cancelled = createProfileLoader(() => pending.promise);
  const c = cancelled.load('third'); cancelled.cancel(); pending.resolve({ slug: 'third' });
  assert.equal(await c, undefined);
});

test('failed requests can retry; successful profiles are cached', async () => {
  let calls = 0;
  const loader = createProfileLoader(async () => {
    calls += 1;
    if (calls === 1) throw new Error('offline');
    return { slug: 'first' };
  });
  await assert.rejects(loader.load('first'), /offline/);
  const result = await loader.load('first');
  assert.equal(result.slug, 'first');
  assert.equal(await loader.load('first'), result);
  assert.equal(calls, 2);
});

test('a late failed request does not replace the current view with an error', async () => {
  const first = deferred();
  const loader = createProfileLoader((slug) => slug === 'first' ? first.promise : Promise.resolve({ slug }));
  const a = loader.load('first');
  assert.equal((await loader.load('second')).slug, 'second');
  first.reject(new Error('offline'));
  assert.equal(await a, undefined);
});
