import type { BrandRules, CaptionLength, EmojiUsage } from "@/types";

/**
 * Marka kurallarını AI çıktısına uygulayan saf fonksiyonlar (spec §46:
 * "kurallar değişince sonraki öneriler bunu yansıtmalı").
 */

const EMOJI_PATTERN = /\p{Extended_Pictographic}(?:️|‍\p{Extended_Pictographic})*/gu;

const tidySpaces = (text: string) =>
  text
    .replace(/[ \t]{2,}/g, " ")
    .replace(/ +([.,!?])/g, "$1")
    .trim();

export const applyEmojiUsage = (text: string, usage: EmojiUsage) => {
  if (usage === "none") return tidySpaces(text.replace(EMOJI_PATTERN, ""));
  if (usage === "minimal") {
    let kept = 0;
    return tidySpaces(text.replace(EMOJI_PATTERN, (emoji) => (kept++ === 0 ? emoji : "")));
  }
  return text;
};

const LENGTH_LIMIT: Record<CaptionLength, number> = { short: 180, medium: 400, long: Infinity };

/** Metni cümle sınırından keserek kısaltır; cümle ortasında bırakmaz. */
export const fitCaptionLength = (text: string, length: CaptionLength) => {
  const limit = LENGTH_LIMIT[length];
  if (text.length <= limit) return text;
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text];
  let result = "";
  for (const sentence of sentences) {
    if ((result + sentence).trim().length > limit) break;
    result += sentence;
  }
  return result.trim() || text.slice(0, limit).trim();
};

export const containsBannedWord = (text: string, bannedWords: string[]) => {
  const normalized = text.toLocaleLowerCase("tr");
  return bannedWords.some((word) => word && normalized.includes(word.toLocaleLowerCase("tr")));
};

export const limitHashtags = (hashtags: string[], max: number) =>
  hashtags.slice(0, Math.max(0, max));

/** Caption'a tüm metin kurallarını uygular. */
export const applyTextRules = (text: string, rules: BrandRules) =>
  fitCaptionLength(applyEmojiUsage(text, rules.emojiUsage), rules.captionLength);

/** Yasaklı kelime içerenleri eler; hepsi elenirse orijinal listeyi korur (boş öneri gösterme). */
export const filterByBannedWords = (options: string[], rules: BrandRules) => {
  const allowed = options.filter((option) => !containsBannedWord(option, rules.bannedWords));
  return allowed.length > 0 ? allowed : options;
};
