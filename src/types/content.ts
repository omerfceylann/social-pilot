import type { ContentStyle } from "./brand";
import type { AspectRatio, ContentFormat, PlatformId } from "./platform";

export type PostStatus = "draft" | "scheduled" | "published";

/** Takvimde görünen tüm durumlar: postlar + henüz oluşturulmamış AI önerileri. */
export type CalendarStatus = PostStatus | "suggested";

export type PerformanceTier = "high" | "average" | "low";

export type MediaAsset = {
  id: string;
  kind: "image" | "video";
  /** Görsel ya da videonun kapak karesi. */
  url: string;
  alt: string;
  aspect: AspectRatio;
  durationSec?: number;
};

export type MusicTrack = {
  title: string;
  artist: string;
};

/** Taslak, planlanan ya da yayınlanan bir içerik. */
export type Post = {
  id: string;
  platform: PlatformId;
  format: ContentFormat;
  status: PostStatus;
  title: string;
  caption: string;
  hashtags: string[];
  music?: MusicTrack;
  cta?: string;
  media: MediaAsset[];
  /** İçeriğin konusu; analitik içgörüler bu alana göre gruplanır. */
  theme: ContentStyle;
  createdAt: string;
  updatedAt: string;
  /** Planlanan ya da taslak için hedeflenen yayın zamanı. */
  scheduledAt?: string;
  publishedAt?: string;
  /** Mock postların performans eğilimi; analitik bunu gerçekçi varyasyonla sayıya çevirir. */
  performanceHint?: PerformanceTier;
  origin: "seed" | "user";
  /** Bir AI önerisinden oluşturulduysa kaynağı. */
  suggestionId?: string;
};

export type PerformanceEstimate = {
  reach: [number, number];
  engagementRate: number;
  potential: PerformanceTier;
};

/** Her alan için AI'ın sunduğu diğer seçenekler (spec §19). */
export type SuggestionAlternatives = {
  title: string[];
  caption: string[];
  hashtags: string[][];
  cta: string[];
  music: MusicTrack[];
};

/** "starter": yeni markanın ilk haftası. "growth": geçmiş veriye dayanan öneri. */
export type SuggestionStage = "starter" | "growth";

/** AI'ın önerdiği, henüz oluşturulmamış içerik (spec §18). */
export type PostSuggestion = {
  id: string;
  stage: SuggestionStage;
  platform: PlatformId;
  format: ContentFormat;
  title: string;
  description: string;
  caption: string;
  hashtags: string[];
  music?: MusicTrack;
  cta: string;
  media: MediaAsset[];
  theme: ContentStyle;
  /** Neden bu içerik, neden şimdi. */
  reasoning: string;
  relatedTrendId?: string;
  estimate: PerformanceEstimate;
  alternatives: SuggestionAlternatives;
  /** AI'ın önerdiği yayın zamanı; takvimde "önerilen" olarak görünür. */
  suggestedAt: string;
};
