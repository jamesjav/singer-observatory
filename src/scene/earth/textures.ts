import { DataTexture, LinearFilter, LinearMipmapLinearFilter, NoColorSpace, RepeatWrapping, RGBAFormat, SRGBColorSpace, TextureLoader, UnsignedByteType } from 'three';
import type { Texture, WebGLRenderer } from 'three';

export type TextureKind = 'day' | 'night' | 'normal' | 'specular' | 'clouds';
export type TextureSet = Record<TextureKind, Texture>;
export interface TextureStatus { loaded: number; total: number; warnings: string[]; complete: boolean }

const STAGE1_ORDER: TextureKind[] = ['day', 'night', 'specular', 'normal', 'clouds'];
const STAGE2_ORDER: TextureKind[] = ['day', 'night', 'clouds', 'normal', 'specular'];

function configureTexture(texture: Texture, kind: TextureKind, anisotropy: number) {
  texture.colorSpace = kind === 'day' || kind === 'night' ? SRGBColorSpace : NoColorSpace;
  texture.wrapS = RepeatWrapping;
  texture.minFilter = LinearMipmapLinearFilter;
  texture.magFilter = LinearFilter;
  texture.generateMipmaps = true;
  texture.anisotropy = anisotropy;
  texture.needsUpdate = true;
  return texture;
}

function emergencyTexture(kind: TextureKind, anisotropy: number): DataTexture {
  const w = 256;
  const h = 128;
  const data = new Uint8Array(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const polar = Math.abs(y / h - 0.5) > 0.42;
      const color = kind === 'normal'
        ? [128, 128, 255]
        : kind === 'specular'
          ? [170, 170, 170]
          : kind === 'day'
            ? (polar ? [132, 144, 152] : [22, 48, 72])
            : [0, 0, 0];
      data.set([...color, 255], i);
    }
  }
  const texture = new DataTexture(data, w, h, RGBAFormat, UnsignedByteType);
  return configureTexture(texture, kind, anisotropy) as DataTexture;
}

export function createInitialEarthTextures(renderer: WebGLRenderer): TextureSet {
  const anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  return {
    day: emergencyTexture('day', anisotropy),
    night: emergencyTexture('night', anisotropy),
    normal: emergencyTexture('normal', anisotropy),
    specular: emergencyTexture('specular', anisotropy),
    clouds: emergencyTexture('clouds', anisotropy),
  };
}

function delay(ms: number) {
  return new Promise<void>((resolve) => { window.setTimeout(resolve, ms); });
}

async function loadWithRetry(
  loader: TextureLoader,
  url: string,
  kind: TextureKind,
  anisotropy: number,
  maxAttempts: number,
  isDisposed?: () => boolean,
): Promise<Texture> {
  let lastError: unknown;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (isDisposed?.()) throw new Error('disposed');
    try {
      const requestUrl = attempt === 0 ? url : `${url}${url.includes('?') ? '&' : '?'}r=${attempt}`;
      const texture = await loader.loadAsync(requestUrl);
      if (isDisposed?.()) {
        texture.dispose();
        throw new Error('disposed');
      }
      return configureTexture(texture, kind, anisotropy);
    } catch (error) {
      lastError = error;
      if (attempt + 1 < maxAttempts && !isDisposed?.()) {
        await delay(350 * (attempt + 1));
      }
    }
  }
  throw lastError ?? new Error(`Failed to load ${url}`);
}

async function runPool<T>(items: readonly T[], concurrency: number, worker: (item: T) => Promise<void>) {
  let index = 0;
  const runners = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (index < items.length) {
      const current = items[index++];
      await worker(current);
    }
  });
  await Promise.all(runners);
}

export async function loadEarthTextures(
  renderer: WebGLRenderer,
  onStatus: (status: TextureStatus) => void,
  onTextureReady: (kind: TextureKind, texture: Texture, tier: 'fallback' | 'hi') => void,
  isDisposed?: () => boolean,
): Promise<void> {
  const loader = new TextureLoader();
  const anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const base = `${import.meta.env.BASE_URL}textures/earth/`;
  const tierByKind: Record<TextureKind, 'emergency' | 'fallback' | 'hi'> = {
    day: 'emergency', night: 'emergency', normal: 'emergency', specular: 'emergency', clouds: 'emergency',
  };
  let loaded = 0;

  const emitStatus = (finalStage: boolean) => {
    if (isDisposed?.()) return;
    const warnings: string[] = [];
    for (const kind of STAGE1_ORDER) {
      if (tierByKind[kind] === 'emergency' && (finalStage || loaded >= STAGE1_ORDER.length)) {
        warnings.push(`${kind}：本地资源不可用，已启用简化材质（非真实地理纹理）`);
      } else if (finalStage && tierByKind[kind] === 'fallback') {
        warnings.push(`${kind}：高分辨率资源不可用，已使用本地低分辨率副本`);
      }
    }
    onStatus({ loaded, total: STAGE1_ORDER.length, warnings, complete: loaded === STAGE1_ORDER.length });
  };

  // Stage 1: Load compact 1K textures (concurrency 2) with retries so the globe renders rapidly without resetting connections.
  await runPool(STAGE1_ORDER, 2, async (kind) => {
    if (isDisposed?.()) return;
    try {
      const texture = await loadWithRetry(loader, `${base}${kind}-fallback.jpg`, kind, anisotropy, 3, isDisposed);
      tierByKind[kind] = 'fallback';
      onTextureReady(kind, texture, 'fallback');
    } catch {
      try {
        const texture = await loadWithRetry(loader, `${base}${kind}.jpg`, kind, anisotropy, 2, isDisposed);
        tierByKind[kind] = 'hi';
        onTextureReady(kind, texture, 'hi');
      } catch {
        // Keep the initial procedural texture cleanly; warning will be reported.
      }
    }
    loaded++;
    emitStatus(false);
  });

  if (isDisposed?.()) return;

  // Stage 2: Sequentially upgrade to 2048x1024 textures in the background (concurrency 1 avoids HTTP/2 resets).
  void (async () => {
    for (const kind of STAGE2_ORDER) {
      if (isDisposed?.()) return;
      if (tierByKind[kind] === 'hi') continue;
      try {
        const hiRes = await loadWithRetry(loader, `${base}${kind}.jpg`, kind, anisotropy, 3, isDisposed);
        if (isDisposed?.()) {
          hiRes.dispose();
          return;
        }
        tierByKind[kind] = 'hi';
        onTextureReady(kind, hiRes, 'hi');
      } catch {
        // Keep the already-rendered 1K fallback texture cleanly.
      }
    }
    emitStatus(true);
  })();
}
