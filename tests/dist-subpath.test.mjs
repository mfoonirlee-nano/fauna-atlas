import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative, resolve, sep } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const distDirectory = resolve(fileURLToPath(new URL('../dist/', import.meta.url)));
const deploymentPath = '/__fauna_atlas__/';
// A standalone extension used to restore compact filenames is not an asset URL.
const imageReferencePattern = /(["'`])((?!https?:\/\/|data:)[^"'`\s<>]+?\.(?:avif|gif|ico|jpe?g|png|svg|webp)(?:[?#][^"'`\s<>]*)?)\1/gi;

async function listBuildFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? listBuildFiles(path) : [path];
    }),
  );
  return files.flat();
}

async function startStaticServer() {
  const server = createServer(async (request, response) => {
    const requestUrl = new URL(request.url ?? '/', 'http://127.0.0.1');
    if (!requestUrl.pathname.startsWith(deploymentPath)) {
      response.writeHead(404).end();
      return;
    }

    const requestedPath = decodeURIComponent(requestUrl.pathname.slice(deploymentPath.length));
    const relativePath = requestedPath === '' ? 'index.html' : requestedPath;
    const filePath = resolve(distDirectory, relativePath);
    const isInsideDist = filePath === distDirectory || filePath.startsWith(`${distDirectory}${sep}`);

    if (!isInsideDist) {
      response.writeHead(403).end();
      return;
    }

    try {
      const bytes = await readFile(filePath);
      response.writeHead(200).end(bytes);
    } catch {
      response.writeHead(404).end();
    }
  });

  await new Promise((resolveListening, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolveListening);
  });

  const address = server.address();
  assert(address && typeof address === 'object');
  return { server, origin: `http://127.0.0.1:${address.port}` };
}

test('built images remain reachable when dist is hosted below a subpath', async (context) => {
  const { server, origin } = await startStaticServer();
  context.after(() => new Promise((resolveClose, reject) => {
    server.close((error) => error ? reject(error) : resolveClose());
    server.closeAllConnections();
  }));

  const documentUrl = new URL(deploymentPath, origin);
  const buildFiles = (await listBuildFiles(distDirectory)).filter((file) =>
    ['.css', '.html', '.js', '.webmanifest'].includes(extname(file)),
  );
  const references = [];

  for (const file of buildFiles) {
    const source = await readFile(file, 'utf8');
    const sourcePath = relative(distDirectory, file).split(sep).join('/');
    const sourceUrl = new URL(sourcePath, documentUrl);
    const referenceBase = ['.css', '.webmanifest'].includes(extname(file)) ? sourceUrl : documentUrl;

    for (const match of source.matchAll(imageReferencePattern)) {
      // Vite resolves imported assets against the JS module, not the document.
      const moduleRelative = extname(file) === '.js'
        && /new\s+URL\(\s*$/.test(source.slice(0, match.index))
        && /^\s*,\s*import\.meta\.url\s*\)/.test(source.slice(match.index + match[0].length));
      references.push({ sourcePath, value: match[2], resolved: new URL(match[2], moduleRelative ? sourceUrl : referenceBase) });
    }
  }

  assert.notEqual(references.length, 0, 'the build should contain image references');

  for (const reference of references) {
    assert.ok(
      reference.resolved.pathname.startsWith(deploymentPath),
      `${reference.sourcePath} contains ${JSON.stringify(reference.value)}, which escapes ${deploymentPath}`,
    );
    const response = await fetch(reference.resolved);
    assert.equal(response.status, 200, `${reference.resolved.pathname} should be served from dist`);
    await response.body?.cancel();
  }

  const manifestPath = join(distDirectory, 'site.webmanifest');
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  const manifestUrl = new URL('site.webmanifest', documentUrl);

  for (const [field, value] of Object.entries({
    id: manifest.id,
    start_url: manifest.start_url,
    scope: manifest.scope,
  })) {
    const resolvedUrl = new URL(value, manifestUrl);
    assert.ok(
      resolvedUrl.pathname.startsWith(deploymentPath),
      `site.webmanifest ${field}=${JSON.stringify(value)} escapes ${deploymentPath}`,
    );
  }
});

test('the initial JS stays small and full profiles load independently without data loss', async (context) => {
  const manifest = JSON.parse(await readFile(join(distDirectory, '.vite/manifest.json'), 'utf8'));
  const visited = new Set();
  function collectInitial(key) {
    if (visited.has(key)) return;
    visited.add(key);
    for (const dependency of manifest[key].imports ?? []) collectInitial(dependency);
  }
  collectInitial('index.html');
  let initialBytes = 0;
  for (const key of visited) {
    const bytes = (await readFile(join(distDirectory, manifest[key].file))).byteLength;
    initialBytes += bytes;
    assert.ok(bytes < 350_000, `${key} exceeds the individual JS budget: ${bytes}`);
  }
  assert.ok(initialBytes < 550_000, `initial JS budget exceeded: ${initialBytes}`);

  const sourceCode = await readFile(new URL('../node_modules/.tmp/taxonomy-test/data/species.js', import.meta.url), 'utf8');
  const { species } = await import(`data:text/javascript;base64,${Buffer.from(sourceCode).toString('base64')}`);
  const profiles = Object.entries(manifest).filter(([key]) => key.startsWith('virtual:species-profile/'));
  assert.equal(profiles.length, species.length);
  const { server, origin } = await startStaticServer();
  context.after(() => new Promise((done) => { server.close(done); server.closeAllConnections(); }));
  const { pathToFileURL } = await import('node:url');
  for (const item of species) {
    const key = `virtual:species-profile/${item.slug}`;
    assert.ok(!visited.has(key), `${item.slug} should not be statically imported by the entry`);
    const chunk = manifest[key];
    assert.ok(chunk?.isDynamicEntry, `${item.slug} must have a lazy entry`);
    assert.equal((chunk.imports ?? []).length, 0, 'one profile must not fetch the other profiles');
    const { default: profile } = await import(pathToFileURL(join(distDirectory, chunk.file)).href);
    assert.deepEqual(profile, item, `${item.slug} must retain the full editorial source`);
    const response = await fetch(new URL(chunk.file, `${origin}${deploymentPath}`));
    assert.equal(response.status, 200, `${item.slug} chunk resolves under a subpath`);
    await response.body?.cancel();
  }
});

test('the compact catalogue preserves every browsing field and taxonomy rank', async () => {
  const { createServer: createViteServer } = await import('vite');
  const server = await createViteServer({
    server: { middlewareMode: true, watch: null, hmr: false },
    appType: 'custom',
  });
  try {
    const { species: summaries } = await server.ssrLoadModule('virtual:species-catalogue');
    const sourceCode = await readFile(new URL('../node_modules/.tmp/taxonomy-test/data/species.js', import.meta.url), 'utf8');
    const { species } = await import(`data:text/javascript;base64,${Buffer.from(sourceCode).toString('base64')}`);
    assert.equal(summaries.length, species.length);
    for (const [index, summary] of summaries.entries()) {
      const original = species[index];
      for (const key of ['id', 'slug', 'names', 'scientificName', 'taxonomy', 'tags', 'summary']) {
        assert.deepEqual(summary[key], original[key], `${original.slug}: ${key}`);
      }
      assert.deepEqual(summary.conservation, { code: original.conservation.code });
      assert.deepEqual(summary.distribution, JSON.parse(JSON.stringify({
        regions: original.distribution.regions,
        realms: original.distribution.realms,
        center: original.distribution.center,
      })));
      assert.deepEqual(summary.habitats, original.habitats.map(({ name }) => ({ name })));
      assert.deepEqual(summary.media, JSON.parse(JSON.stringify({
        image: original.media.image, alt: original.media.alt, focalPoint: original.media.focalPoint,
      })));
    }
  } finally {
    await server.close();
  }
});
