import { FALLBACK_SECTOR_ID, SECTOR_DATASETS } from "@/mock/sectors";
import { minutesAgo, resolveRelativeTime } from "@/lib/time";
import type {
  Comment,
  Conversation,
  Post,
  PostSuggestion,
  SectorDataset,
  SectorId,
  SectorSelection,
  SeedPost,
} from "@/types";

/** Seçilen sektör için yüklenecek veri. Özel sektörlerde yedek veri döner (spec §13). */
export const resolveDataset = (sector: SectorSelection): SectorDataset => {
  const sectorId: SectorId = sector.kind === "preset" ? sector.id : FALLBACK_SECTOR_ID;
  const dataset = SECTOR_DATASETS[sectorId] ?? SECTOR_DATASETS[FALLBACK_SECTOR_ID];
  if (!dataset) throw new Error(`Yedek sektör verisi bulunamadı: ${FALLBACK_SECTOR_ID}`);
  return dataset;
};

export const hasDedicatedDataset = (sector: SectorSelection) =>
  sector.kind === "preset" && sector.id in SECTOR_DATASETS;

export type WorkspaceSeed = {
  posts: Post[];
  suggestions: PostSuggestion[];
  comments: Comment[];
  conversations: Conversation[];
};

const toPost = (seed: SeedPost, now: Date): Post => {
  const { at, ...rest } = seed;
  const when = resolveRelativeTime(at, now);
  // Oluşturulma zamanı: yayından birkaç gün önce, gelecekteki içerik için bugünden önce.
  const createdAt = resolveRelativeTime({ day: Math.min(at.day, 0) - 2, time: "10:00" }, now);
  return {
    ...rest,
    origin: "seed",
    createdAt,
    updatedAt: createdAt,
    scheduledAt: seed.status === "published" ? undefined : when,
    publishedAt: seed.status === "published" ? when : undefined,
  };
};

/**
 * Göreli zamanlı mock veriyi, "şimdi"ye göre gerçek tarihli workspace verisine çevirir.
 * Onboarding bittiğinde bir kez çalışır; sonrasında tek kaynak store'lardır.
 */
export const buildWorkspaceSeed = (dataset: SectorDataset, now = new Date()): WorkspaceSeed => ({
  posts: dataset.posts.map((seed) => toPost(seed, now)),
  suggestions: dataset.suggestions.map(({ suggestedAt, ...rest }) => ({
    ...rest,
    suggestedAt: resolveRelativeTime(suggestedAt, now),
  })),
  comments: dataset.comments.map(({ minutesAgo: ago, ...rest }) => ({
    ...rest,
    createdAt: minutesAgo(ago, now),
  })),
  conversations: dataset.conversations.map(({ messages, ...rest }) => ({
    ...rest,
    messages: messages.map(({ minutesAgo: ago, ...message }) => ({
      ...message,
      sentAt: minutesAgo(ago, now),
    })),
  })),
});
