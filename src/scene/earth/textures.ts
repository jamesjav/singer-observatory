import { DataTexture, LinearFilter, LinearMipmapLinearFilter, NoColorSpace, RepeatWrapping, RGBAFormat, SRGBColorSpace, TextureLoader, UnsignedByteType } from 'three';
import type { Texture, WebGLRenderer } from 'three';

type TextureKind = 'day' | 'night' | 'normal' | 'specular' | 'clouds';
export type TextureSet = Record<TextureKind, Texture>;
export interface TextureStatus { loaded: number; total: number; warnings: string[]; complete: boolean }

function emergencyTexture(kind: TextureKind): DataTexture {
  const w = 256;
  const h = 128;
  const data = new Uint8Array(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const polar = Math.abs(y / h - 0.5) > 0.42;
      const color = kind === 'normal' ? [128, 128, 255] : kind === 'day' ? (polar ? [115, 125, 131] : [16, 38, 56]) : [0, 0, 0];
      data.set([...color, 255], i);
    }
  }
  const texture = new DataTexture(data, w, h, RGBAFormat, UnsignedByteType);
  texture.needsUpdate = true;
  return texture;
}

export async function loadEarthTextures(renderer: WebGLRenderer, onStatus: (status: TextureStatus) => void): Promise<TextureSet> {
  const warnings: string[] = [];
  let loaded = 0;
  const kinds: TextureKind[] = ['day', 'night', 'normal', 'specular', 'clouds'];
  const loader = new TextureLoader();
  const anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const entries = await Promise.all(kinds.map(async (kind) => {
    let texture: Texture;
    try {
      texture = await loader.loadAsync(`${import.meta.env.BASE_URL}textures/earth/${kind}.jpg`);
    } catch {
      try {
        texture = await loader.loadAsync(`${import.meta.env.BASE_URL}textures/earth/${kind}-fallback.jpg`);
        warnings.push(`${kind}：高分辨率资源不可用，已使用本地低分辨率副本`);
      } catch {
        texture = emergencyTexture(kind);
        warnings.push(`${kind}：本地资源不可用，已启用简化材质（非真实地理纹理）`);
      }
    }
    texture.colorSpace = kind === 'day' || kind === 'night' ? SRGBColorSpace : NoColorSpace;
    texture.wrapS = RepeatWrapping;
    texture.minFilter = LinearMipmapLinearFilter;
    texture.magFilter = LinearFilter;
    texture.generateMipmaps = true;
    texture.anisotropy = anisotropy;
    texture.needsUpdate = true;
    loaded++;
    onStatus({ loaded, total: kinds.length, warnings: [...warnings], complete: loaded === kinds.length });
    return [kind, texture] as const;
  }));
  return Object.fromEntries(entries) as TextureSet;
}
