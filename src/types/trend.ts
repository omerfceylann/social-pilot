import type { PlatformId } from "./platform";

export type TrendCategory = "audio" | "format" | "topic" | "hashtag";

export type Trend = {
  id: string;
  title: string;
  description: string;
  category: TrendCategory;
  platforms: PlatformId[];
  /** Son 7 günde büyüme (%). */
  momentum: number;
  /** Bu trendin markaya nasıl uyarlanabileceği (✦ AI Trend Insight). */
  insight: string;
  hashtags: string[];
};

/** AI medya analizi sonucu (spec §20). */
export type MediaAnalysis = {
  kind: "image" | "video";
  summary: string;
  suggestions: string[];
};
