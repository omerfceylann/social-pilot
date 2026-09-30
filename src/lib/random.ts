/**
 * Tohumlu (deterministik) rastgelelik.
 * Aynı tohum her zaman aynı sayı dizisini üretir: bir postun analitiği
 * sayfa yenilense de değişmez, ama postlar arasında doğal farklılık olur.
 */

/** Metni 32-bit bir sayıya çevirir (FNV-1a). */
const hashString = (text: string) => {
  let hash = 2166136261;
  for (let index = 0; index < text.length; index++) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

/** Mulberry32: küçük, hızlı ve yeterince dağınık bir PRNG. */
const mulberry32 = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let value = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
  return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
};

export type SeededRandom = {
  /** [0, 1) */
  next: () => number;
  /** [min, max] aralığında ondalıklı sayı. */
  between: (min: number, max: number) => number;
  /** [min, max] aralığında tam sayı. */
  int: (min: number, max: number) => number;
};

export const createRandom = (seed: string): SeededRandom => {
  const next = mulberry32(hashString(seed));
  const between = (min: number, max: number) => min + next() * (max - min);
  return {
    next,
    between,
    int: (min, max) => Math.floor(between(min, max + 1)),
  };
};
