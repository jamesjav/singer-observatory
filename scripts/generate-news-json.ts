import { setDefaultResultOrder } from 'node:dns';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { createNewsService } from '../server/news.ts';

const REFRESH_INTERVAL_MS = 15 * 60 * 1000;

async function hasUsableExisting(target: string): Promise<boolean> {
  try {
    const parsed = JSON.parse(await readFile(target, 'utf8')) as { mode?: unknown; events?: unknown };
    return parsed.mode !== 'demo' && Array.isArray(parsed.events) && parsed.events.length > 0;
  } catch {
    return false;
  }
}

async function main() {
  setDefaultResultOrder('ipv4first');
  const outputPath = resolve(process.argv[2] ?? 'public/data/news.json');
  const service = createNewsService({ retries: 1, retryDelayMs: 500 });
  const snapshot = await service.getSnapshot();
  const online = snapshot.sources.filter((source) => source.state === 'online').length;
  const located = snapshot.events.filter((event) => typeof event.lat === 'number' && typeof event.lon === 'number').length;

  if (snapshot.mode === 'demo' || snapshot.events.length === 0) {
    if (await hasUsableExisting(outputPath)) {
      console.warn(`All sources unavailable (${online}/${snapshot.sources.length}); keeping existing snapshot at ${outputPath}`);
      return;
    }
    throw new Error(`No live news sources available (${online}/${snapshot.sources.length})`);
  }

  const nextRefreshAt = new Date(Date.parse(snapshot.checkedAt) + REFRESH_INTERVAL_MS).toISOString();
  const payload = { ...snapshot, nextRefreshAt };
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(payload)}\n`, 'utf8');
  console.info(`Wrote ${payload.events.length} items (${located} located), ${online}/${payload.sources.length} sources online -> ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
