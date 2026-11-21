import { setDefaultResultOrder } from 'node:dns';
import { createServer } from 'node:http';
import { constants } from 'node:fs';
import { open, realpath } from 'node:fs/promises';
import { dirname, extname, isAbsolute, relative, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import type { Server, ServerResponse } from 'node:http';
import type { NewsService } from './news.ts';
import { CACHE_TTL_MS, createNewsService } from './news.ts';

const DEFAULT_DIST = resolve(dirname(fileURLToPath(import.meta.url)), '../dist');
const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.map': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.avif': 'image/avif', '.gif': 'image/gif', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf',
  '.wasm': 'application/wasm', '.webmanifest': 'application/manifest+json', '.mp4': 'video/mp4',
};

export interface ServerOptions {
  distDir?: string;
  newsService?: NewsService;
}

function reply(response: ServerResponse, status: number, message: string) {
  response.writeHead(status, { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' });
  response.end(message);
}

function contained(root: string, path: string): boolean {
  const rest = relative(root, path);
  return rest !== '..' && !rest.startsWith('../') && !isAbsolute(rest);
}

export function createServiceServer(options: ServerOptions = {}): Server {
  const distDir = resolve(options.distDir ?? DEFAULT_DIST);
  const news = options.newsService ?? createNewsService();
  const server = createServer(async (request, response) => {
    response.setHeader('x-content-type-options', 'nosniff');
    try {
      if (request.method !== 'GET') {
        response.setHeader('allow', 'GET');
        reply(response, 405, 'Method not allowed');
        return;
      }
      // Validate the original request target before URL normalization can hide dot segments.
      let pathname: string;
      try { pathname = decodeURIComponent((request.url ?? '/').split('?')[0]); }
      catch { reply(response, 400, 'Malformed request path'); return; }
      if (!pathname.startsWith('/') || /[\\\u0000-\u001f\u007f]/.test(pathname) ||
          pathname.split('/').some(part => part.startsWith('.'))) {
        reply(response, 403, 'Forbidden path');
        return;
      }
      if (pathname === '/api/news') {
        // Query strings are intentionally ignored: clients cannot force a source refresh.
        const snapshot = await news.getSnapshot();
        response.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
        response.end(JSON.stringify(snapshot));
        return;
      }
      if (pathname === '/api' || pathname.startsWith('/api/')) {
        reply(response, 404, 'Not found');
        return;
      }

      const root = await realpath(distDir).catch(() => null);
      if (!root) { reply(response, 404, 'Static build not found'); return; }
      const requested = resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
      if (!contained(root, requested)) { reply(response, 403, 'Forbidden path'); return; }
      let actual = await realpath(requested).catch(() => null);
      // Only extensionless navigation requests get the SPA entry. Missing assets never do.
      if (!actual && !extname(pathname) && !pathname.startsWith('/assets/') && pathname !== '/assets' &&
          request.headers.accept?.includes('text/html')) {
        actual = await realpath(resolve(root, 'index.html')).catch(() => null);
      }
      if (!actual) { reply(response, 404, 'Not found'); return; }
      if (!contained(root, actual)) { reply(response, 403, 'Forbidden path'); return; }
      const file = await open(actual, constants.O_RDONLY | constants.O_NOFOLLOW).catch(() => null);
      if (!file) { reply(response, 404, 'Not found'); return; }
      let transferred = false;
      try {
        const stat = await file.stat();
        if (!stat.isFile()) { reply(response, 404, 'Not found'); return; }
        const extension = extname(actual).toLowerCase();
        const immutable = pathname.startsWith('/assets/') && /-[\w-]{8,}\.[a-z0-9]+$/i.test(actual) && extension !== '.html';
        response.writeHead(200, {
          'content-type': MIME[extension] ?? 'application/octet-stream',
          'content-length': stat.size,
          'cache-control': immutable ? 'public, max-age=31536000, immutable' : 'no-cache',
        });
        const stream = file.createReadStream();
        transferred = true;
        stream.on('error', () => response.destroy());
        response.on('close', () => stream.destroy());
        stream.pipe(response);
      } finally {
        if (!transferred) await file.close();
      }
    } catch {
      if (!response.headersSent) reply(response, 500, 'Service unavailable');
      else response.destroy();
    }
  });
  server.requestTimeout = 30_000;
  server.headersTimeout = 10_000;
  server.keepAliveTimeout = 5_000;
  return server;
}

export function listenOptions(args: readonly string[] = process.argv.slice(2), env: NodeJS.ProcessEnv = process.env): { host: string; port: number } {
  let portValue = env.PORT ?? '5192';
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--port') {
      if (!args[i + 1]) throw new Error('--port requires a value');
      portValue = args[++i];
    } else if (args[i].startsWith('--port=')) portValue = args[i].slice(7);
    else throw new Error(`Unknown argument: ${args[i]}`);
  }
  if (!/^\d+$/.test(portValue) || Number(portValue) < 1 || Number(portValue) > 65535) throw new Error('PORT must be an integer from 1 to 65535');
  return { host: env.HOST || '127.0.0.1', port: Number(portValue) };
}

// Run directly with Node 24: node server/index.ts [--port 5192]. Importing never listens.
if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  try {
    setDefaultResultOrder('ipv4first');
    const { host, port } = listenOptions();
    const newsService = createNewsService({ retries: 1, retryDelayMs: 350 });
    const server = createServiceServer({ newsService });
    server.on('error', error => { console.error(error.message); process.exitCode = 1; });
    server.listen(port, host, () => {
      console.info(`News service: http://${host}:${port}`);
      void newsService.getSnapshot().catch(() => {});
      const warmer = setInterval(() => { void newsService.getSnapshot().catch(() => {}); }, CACHE_TTL_MS + 1000);
      warmer.unref();
    });
  } catch (error) {
    console.error(error instanceof Error ? error.message : 'Unable to start service');
    process.exitCode = 1;
  }
}
