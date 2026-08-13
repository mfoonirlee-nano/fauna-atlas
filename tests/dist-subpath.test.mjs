import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative, resolve, sep } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const distDirectory = resolve(fileURLToPath(new URL('../dist/', import.meta.url)));
const deploymentPath = '/__fauna_atlas__/';
const imageReferencePattern = /(["'`])((?!https?:\/\/|data:)[^"'`\s<>]*?\.(?:avif|gif|ico|jpe?g|png|svg|webp)(?:[?#][^"'`\s<>]*)?)\1/gi;

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
      response.writeHead(200).end(await readFile(filePath));
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
      references.push({ sourcePath, value: match[2], resolved: new URL(match[2], referenceBase) });
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
