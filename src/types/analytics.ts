import type { ContentStyle } from "./brand";
import type { PerformanceTier } from "./content";
import type { ContentFormat, PlatformId } from "./platform";

export type PostAnalytics = {
  postId: string;
  views: number;
  reach: number;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  /** Yüzde olarak, ör. 7.8 */
  engagementRate: number;
  tier: PerformanceTier;
};

export const METRIC_KEYS = ["reach", "engagement", "followers", "views"] as const;
export type MetricKey = (typeof METRIC_KEYS)[number];

export type DailyPoint = { date: string; value: number };

export type MetricSummary = {
  key: MetricKey;
  value: number;
  /** Önceki döneme göre yüzde değişim. */
  changePct: number;
  series: DailyPoint[];
};

/** Sektörün "normal" hesap performansı; tüm analitik sayılar buradan türetilir. */
export type AnalyticsBaseline = {
  followers: Record<PlatformId, number>;
  avgViews: Record<PlatformId, number>;
  /** Ortalama etkileşim oranı (%). */
  engagementRate: number;
  dailyReach: number;
  dailyFollowerGrowth: number;
};

/**
 * Veriden hesaplanan içgörü. Metin değil yapı döner; metni arayüz
 * seçili dile göre kurar (bkz. i18n "insights").
 */
export type AnalyticsInsight =
  | { kind: "themeLift"; theme: ContentStyle; format: ContentFormat; liftPct: number }
  | { kind: "bestTime"; weekday: number; hour: number }
  | { kind: "platformLead"; platform: PlatformId; liftPct: number };

export type AnalyticsRecommendation = {
  theme: ContentStyle;
  format: ContentFormat;
  platform: PlatformId;
  withinDays: number;
};

/** Dashboard'daki kompakt AI Agent kartı (spec §9). */
export type AgentActivity = {
  trendsAnalyzed: number;
  opportunitiesFound: number;
  commentsReviewed: number;
};
