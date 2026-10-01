import { createRandom } from "@/lib/random";
import type {
  AnalyticsBaseline,
  BrandRules,
  Comment,
  ContentFormat,
  Conversation,
  MediaAnalysis,
  MediaTips,
  MusicTrack,
  PlatformId,
  Post,
  PostSuggestion,
  SuggestionAlternatives,
  Trend,
} from "@/types";
import { computeInsights } from "./analyticsService";
import { applyTextRules, filterByBannedWords, limitHashtags } from "./brandRules";
import { simulateAiLatency } from "./latency";

/**
 * Mock AI. Gerçek model yok; ama yanıtlar sektöre (veri havuzu), platforma,
 * içerik biçimine ve marka kurallarına göre değişir (spec §33).
 * Hepsi async: gerçek bir API'ye geçildiğinde imzalar aynı kalır.
 */

export type EditableField = keyof SuggestionAlternatives;

export type FieldSuggestionMap = {
  title: string[];
  caption: string[];
  hashtags: string[][];
  cta: string[];
  music: MusicTrack[];
};

/** Editörde bir alana tıklanınca gösterilen diğer AI seçenekleri (spec §19). */
export const generateFieldSuggestions = async <Field extends EditableField>(
  field: Field,
  alternatives: SuggestionAlternatives,
  rules: BrandRules,
): Promise<FieldSuggestionMap[Field]> => {
  await simulateAiLatency();
  const byField: FieldSuggestionMap = {
    title: filterByBannedWords(alternatives.title, rules),
    caption: filterByBannedWords(alternatives.caption, rules).map((text) =>
      applyTextRules(text, rules),
    ),
    hashtags: alternatives.hashtags.map((set) => limitHashtags(set, rules.maxHashtags)),
    cta: rules.ctaStyle === "none" ? [] : filterByBannedWords(alternatives.cta, rules),
    music: alternatives.music,
  };
  return byField[field];
};

export const generateCaptionSuggestion = (
  alternatives: SuggestionAlternatives,
  rules: BrandRules,
) => generateFieldSuggestions("caption", alternatives, rules);

/** Öneri kartını açmadan önce kurallara göre düzeltilmiş hâli. */
export const applyRulesToSuggestion = (
  suggestion: PostSuggestion,
  rules: BrandRules,
): PostSuggestion => ({
  ...suggestion,
  caption: applyTextRules(suggestion.caption, rules),
  hashtags: limitHashtags(suggestion.hashtags, rules.maxHashtags),
  cta: rules.ctaStyle === "none" ? "" : suggestion.cta,
});

/**
 * Yeni bir öneri varyasyonu üretir: mevcut önerilerden birini alıp başlık ve
 * caption'ı alternatifleriyle değiştirir. "Yeni öneri üret" butonu için.
 */
export const generatePostSuggestion = async (
  pool: PostSuggestion[],
  rules: BrandRules,
  attempt: number,
): Promise<PostSuggestion | null> => {
  await simulateAiLatency();
  const random = createRandom(`suggestion:${attempt}`);
  const base = pool[random.int(0, pool.length - 1)];
  if (!base) return null;
  const pick = <T>(options: T[], fallback: T) =>
    options[random.int(0, options.length - 1)] ?? fallback;
  return applyRulesToSuggestion(
    {
      ...base,
      id: `${base.id}-v${attempt}`,
      title: pick(base.alternatives.title, base.title),
      caption: pick(filterByBannedWords(base.alternatives.caption, rules), base.caption),
      hashtags: pick(base.alternatives.hashtags, base.hashtags),
    },
    rules,
  );
};

/** Smart Comment Replier (spec §26). */
export const generateReply = async (comment: Comment, rules: BrandRules) => {
  await simulateAiLatency();
  return applyTextRules(comment.aiReply, { ...rules, captionLength: "medium" });
};

/** DM için AI önerisi; "yeniden üret" her çağrıda sıradaki seçeneğe geçer (spec §27). */
export const generateMessageSuggestion = async (
  conversation: Conversation,
  index: number,
  rules: BrandRules,
) => {
  await simulateAiLatency();
  const options = filterByBannedWords(conversation.aiSuggestions, rules);
  const nextIndex = options.length === 0 ? 0 : index % options.length;
  return {
    index: nextIndex,
    text: applyTextRules(options[nextIndex] ?? "", { ...rules, captionLength: "long" }),
  };
};

const PLATFORM_MEDIA_TIPS: Partial<Record<PlatformId, string>> = {
  tiktok: "İlk saniyede bir kanca kullan: soru, şaşırtıcı bir an ya da sonucu göster.",
  youtube: "Kapak karesinde yüz ya da net bir ürün görseli tıklanma oranını artırır.",
  linkedin: "Profesyonel bağlam ekle: ekibi, süreci ya da bir sonucu gösteren kare.",
  x: "Görsel üzerindeki metni kısa tut; akışta küçük görüntülenecek.",
};

const FORMAT_MEDIA_TIPS: Partial<Record<ContentFormat, string>> = {
  story: "Anket ya da soru çıkartması ekleyerek etkileşimi artır.",
  carousel: "İlk karede merak uyandıran bir başlık kullan; kaydırma oranı artar.",
  video: "Altyazı ekle: izleyicilerin çoğu videoyu sessiz izliyor.",
};

/** Yüklenen medyanın simüle AI analizi (spec §20). Gerçek analiz yapılmaz. */
export const analyzeMedia = async ({
  kind,
  platform,
  format,
  tips,
}: {
  kind: "image" | "video";
  platform: PlatformId;
  format: ContentFormat;
  tips: MediaTips;
}): Promise<MediaAnalysis> => {
  await simulateAiLatency();
  const sectorTips = kind === "video" ? tips.video : tips.image;
  // YouTube uzun video yataydır; "9:16'da tut" önerisi burada yanlış olur.
  const relevant =
    platform === "youtube" && format === "video"
      ? sectorTips.filter((tip) => !tip.includes("9:16")).concat("Videoyu 16:9 formatında tut.")
      : sectorTips;
  const extras = [PLATFORM_MEDIA_TIPS[platform], FORMAT_MEDIA_TIPS[format]].filter(
    (tip): tip is string => Boolean(tip),
  );
  return {
    kind,
    summary: kind === "video" ? tips.videoSummary : tips.imageSummary,
    suggestions: [...relevant.slice(0, 4), ...extras].slice(0, 5),
  };
};

/** ✦ AI Trend Insight: trendin markaya nasıl uyarlanacağı. */
export const generateTrendInsight = async (trend: Trend) => {
  await simulateAiLatency();
  return trend.insight;
};

/** ✦ AI Insight + AI Recommendation, gerçek post verisinden hesaplanır. */
export const generateAnalyticsInsight = async (posts: Post[], baseline: AnalyticsBaseline) => {
  await simulateAiLatency();
  return computeInsights(posts, baseline);
};
