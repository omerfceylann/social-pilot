import type { MusicTrack } from "@/types";

/**
 * Platformlarda şu an en çok kullanılan şarkılar (mock). Sektörden bağımsız:
 * her içeriğin müzik önerilerinde, AI'ın sektöre özel seçimlerinin ardından gelir.
 */
/** Boş olamaz: AI seçimi yoksa ilk şarkı varsayılan olur. */
export const POPULAR_TRACKS: [MusicTrack, ...MusicTrack[]] = [
  { title: "Espresso", artist: "Sabrina Carpenter" },
  { title: "APT.", artist: "ROSÉ & Bruno Mars" },
  { title: "Die With A Smile", artist: "Lady Gaga & Bruno Mars" },
  { title: "BIRDS OF A FEATHER", artist: "Billie Eilish" },
];
