import type { AspectRatio, MediaAsset } from "@/types";

/**
 * Mock içerik görselleri Unsplash'ten gelir. Veride sadece fotoğraf kimliği
 * tutulur; URL ve boyut burada kurulur. (Kimlikler Faz 2'de HTTP 200 ile doğrulandı.)
 */

const ASPECT_SIZE: Record<AspectRatio, { w: number; h: number }> = {
  "1:1": { w: 1080, h: 1080 },
  "4:5": { w: 1080, h: 1350 },
  "9:16": { w: 1080, h: 1920 },
  "16:9": { w: 1920, h: 1080 },
};

export const unsplash = (photoId: string, aspect: AspectRatio = "4:5") => {
  const { w, h } = ASPECT_SIZE[aspect];
  return `https://images.unsplash.com/photo-${photoId}?w=${w}&h=${h}&fit=crop&crop=entropy&auto=format&q=75`;
};

export const photo = (
  id: string,
  photoId: string,
  aspect: AspectRatio,
  alt: string,
): MediaAsset => ({
  id,
  kind: "image",
  url: unsplash(photoId, aspect),
  alt,
  aspect,
});

/** Video için kapak karesi görseli kullanılır; oynatma simüle edilir. */
export const video = (
  id: string,
  photoId: string,
  aspect: AspectRatio,
  alt: string,
  durationSec: number,
): MediaAsset => ({ ...photo(id, photoId, aspect, alt), kind: "video", durationSec });

export const avatar = (photoId: string) =>
  `https://images.unsplash.com/photo-${photoId}?w=160&h=160&fit=crop&crop=faces&auto=format&q=70`;

/** Yorum ve DM yazarları için ortak yüz havuzu. */
export const PEOPLE = {
  elif: "1494790108377-be9c29b29330",
  mert: "1507003211169-0a1dd7228f2d",
  zeynep: "1438761681033-6461ffad8d80",
  can: "1500648767791-00dcc994a43e",
  selin: "1544005313-94ddf0286df2",
  emre: "1506794778202-cad84cf45f1d",
  deniz: "1534528741775-53994a69daeb",
  burak: "1531427186611-ecfd6d936c79",
  ece: "1517841905240-472988babdf9",
  kerem: "1539571696357-5a69c17a67c6",
  ayse: "1524504388940-b1c1722653e1",
  irem: "1488426862026-3ee34a7d66df",
  ozan: "1472099645785-5658abf4ff4e",
  melis: "1580489944761-15a19d654956",
  arda: "1599566150163-29194dcaad36",
} as const;
