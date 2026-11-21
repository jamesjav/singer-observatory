import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { mkdir, mkdtemp, rm, symlink, writeFile } from 'node:fs/promises';
import { request } from 'node:http';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { AddressInfo } from 'node:net';
import type { NewsSnapshot } from '../src/data/providers/types.ts';
import { createServiceServer, listenOptions } from './index.ts';
import { createNewsService } from './news.ts';

const snapshot: NewsSnapshot = { events: [], sources: [], mode: 'live',
  fetchedAt: '2026-11-21T12:00:00.000Z', checkedAt: '2026-11-21T12:00:00.000Z', nextRefreshAt: '2026-11-21T12:05:00.000Z' };
const getSnapshot = vi.fn(async () => snapshot);
let root: string;
let origin: string;
let server: ReturnType<typeof createServiceServer>;

beforeAll(async () => {
  // All temporary fixtures stay inside server/, and are removed after the suite.
  root = await mkdtemp(join(dirname(fileURLToPath(import.meta.url)), '.static-test-'));
  const dist = join(root, 'dist');
  await mkdir(join(dist, 'assets'), { recursive: true });
  await writeFile(join(dist, 'index.html'), '<!doctype html><title>SPA fixture</title>');
  await writeFile(join(dist, 'assets', 'app-12345678.js'), 'export const fixture = true;');
  await writeFile(join(dist, 'assets', 'style.css'), 'body { color: white; }');
  await writeFile(join(dist, 'image.svg'), '<svg xmlns="http://www.w3.org/2000/svg"/>');
  await writeFile(join(root, 'private.txt'), 'must never leave server filesystem');
  await symlink(join(root, 'private.txt'), join(dist, 'leak.txt'));
  await symlink(root, join(dist, 'outside'));
  server = createServiceServer({ distDir: dist, newsService: { getSnapshot } });
  await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
  origin = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});

afterAll(async () => {
  if (server) {
    server.closeAllConnections();
    await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
  if (root) await rm(root, { recursive: true, force: true });
});

function rawRequest(path: string): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const req = request(origin, { path, method: 'GET' }, res => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => resolve({ status: res.statusCode!, body }));
    });
    req.on('error', reject);
    req.end();
  });
}

describe('standalone static HTTP server', () => {
  it('serves only the dist root with HTML MIME and revalidation', async () => {
    const response = await fetch(origin);
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('text/html');
    expect(response.headers.get('cache-control')).toBe('no-cache');
    expect(response.headers.get('x-content-type-options')).toBe('nosniff');
    expect(await response.text()).toContain('SPA fixture');
  });

  it('serves actual assets with MIME and safe cache headers', async () => {
    const response = await fetch(`${origin}/assets/app-12345678.js`);
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('text/javascript');
    expect(response.headers.get('cache-control')).toContain('immutable');
    expect(await response.text()).toContain('fixture = true');
    const css = await fetch(`${origin}/assets/style.css`);
    expect(css.headers.get('content-type')).toContain('text/css');
    expect(css.headers.get('cache-control')).toBe('no-cache');
    await css.text();
    const image = await fetch(`${origin}/image.svg`);
    expect(image.headers.get('content-type')).toBe('image/svg+xml');
    await image.text();
  });

  it('serves extensionless SPA navigations, not unknown API routes or missing assets', async () => {
    const response = await fetch(`${origin}/observatory/today`, { headers: { accept: 'text/html' } });
    expect(response.status).toBe(200);
    expect(await response.text()).toContain('SPA fixture');
    for (const path of ['/assets/missing.js', '/assets/missing', '/missing.png', '/api/unknown', '/src/main.ts', '/package.json']) {
      const missing = await fetch(`${origin}${path}`, { headers: { accept: 'text/html' } });
      expect(missing.status, path).toBe(404);
      expect(missing.headers.get('content-type')).not.toContain('text/html');
      expect(await missing.text()).not.toContain('SPA fixture');
    }
  });

  it.each(['/../private.txt', '/%2e%2e/private.txt', '/assets/%2e%2e/%2e%2e/private.txt',
    '/%2e%2e%2fprivate.txt', '/assets%5c..%5cprivate.txt', '/.env', '/%00private.txt', '/leak.txt', '/outside/private.txt'])('blocks traversal/dotfiles/symlink escape: %s', async path => {
    const result = await rawRequest(path);
    expect(result.status).toBe(403);
    expect(result.body).not.toContain('must never leave');
  });

  it('rejects malformed URL encoding without crashing', async () => {
    expect((await rawRequest('/%ZZ')).status).toBe(400);
    expect((await fetch(origin)).status).toBe(200);
  });

  it.each(['POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'])('returns 405 for %s', async method => {
    const response = await fetch(`${origin}/api/news`, { method });
    expect(response.status).toBe(405);
    expect(response.headers.get('allow')).toBe('GET');
    await response.text();
  });

  it('returns JSON and no-store for the API, ignoring client refresh parameters', async () => {
    const response = await fetch(`${origin}/api/news?refresh=1&url=https://untrusted.invalid`);
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('application/json');
    expect(response.headers.get('cache-control')).toBe('no-store');
    expect(await response.json()).toEqual(snapshot);
    expect(getSnapshot).toHaveBeenLastCalledWith();
  });

  it('coalesces real API requests even when each supplies a distinct refresh query', async () => {
    const fetcher = vi.fn<typeof fetch>(async () => new Response('<rss><channel/></rss>'));
    const apiServer = createServiceServer({ newsService: createNewsService({ fetchImpl: fetcher }) });
    await new Promise<void>(resolve => apiServer.listen(0, '127.0.0.1', resolve));
    try {
      const port = (apiServer.address() as AddressInfo).port;
      const responses = await Promise.all(Array.from({ length: 10 }, (_, index) => fetch(`http://127.0.0.1:${port}/api/news?refresh=${index}`).then(response => response.json())));
      expect(responses).toHaveLength(10);
      expect(fetcher).toHaveBeenCalledTimes(6);
    } finally {
      apiServer.closeAllConnections();
      await new Promise<void>(resolve => apiServer.close(() => resolve()));
    }
  });
});

describe('CLI configuration', () => {
  it('defaults to loopback port 5192 without starting a listener on import', () => {
    expect(listenOptions([], {})).toEqual({ host: '127.0.0.1', port: 5192 });
  });
  it('supports HOST/PORT and an overriding --port', () => {
    expect(listenOptions([], { HOST: 'localhost', PORT: '5200' })).toEqual({ host: 'localhost', port: 5200 });
    expect(listenOptions(['--port', '5210'], { PORT: '5200' }).port).toBe(5210);
    expect(listenOptions(['--port=5220'], {}).port).toBe(5220);
  });
  it.each([['--port'], ['--port=0'], ['--port=-1'], ['--port=65536'], ['--port=1.2'], ['--unknown']])('rejects invalid arguments %s', argument => {
    expect(() => listenOptions([argument], {})).toThrow();
  });
});
