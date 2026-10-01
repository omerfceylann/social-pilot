import type { Language } from "@/i18n/config";

/** Sayı ve tarih biçimleri dile göre değişir: 24,8 B (tr) / 24.8K (en). */
const LOCALE: Record<Language, string> = { tr: "tr-TR", en: "en-US" };

export const formatNumber = (value: number, language: Language) =>
  new Intl.NumberFormat(LOCALE[language]).format(value);

/** 24800 → "24,8 B" / "24.8K" */
export const formatCompact = (value: number, language: Language) =>
  new Intl.NumberFormat(LOCALE[language], { notation: "compact", maximumFractionDigits: 1 }).format(
    value,
  );

/** 7.8 → "%7,8" / "7.8%" */
export const formatPercent = (value: number, language: Language) =>
  new Intl.NumberFormat(LOCALE[language], { style: "percent", maximumFractionDigits: 1 }).format(
    value / 100,
  );

/** "12 dk önce", "3 gün sonra" */
export const formatRelative = (iso: string, language: Language, now = new Date()) => {
  const diffMinutes = Math.round((new Date(iso).getTime() - now.getTime()) / 60_000);
  const format = new Intl.RelativeTimeFormat(LOCALE[language], { numeric: "auto", style: "short" });
  const abs = Math.abs(diffMinutes);
  if (abs < 60) return format.format(diffMinutes, "minute");
  if (abs < 60 * 24) return format.format(Math.round(diffMinutes / 60), "hour");
  if (abs < 60 * 24 * 30) return format.format(Math.round(diffMinutes / (60 * 24)), "day");
  return format.format(Math.round(diffMinutes / (60 * 24 * 30)), "month");
};

export const formatDateTime = (
  iso: string,
  language: Language,
  options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  },
) => new Intl.DateTimeFormat(LOCALE[language], options).format(new Date(iso));

export const weekdayName = (weekday: number, language: Language) =>
  // 2023-01-01 bir Pazar; üzerine gün ekleyerek hafta gününün adını alırız.
  new Intl.DateTimeFormat(LOCALE[language], { weekday: "long" }).format(
    new Date(2023, 0, 1 + weekday),
  );

/** "TR" → "Türkiye" / "Turkey": ülke adları tarayıcıdan, elle çeviri gerekmez. */
export const formatCountry = (code: string, language: Language) =>
  new Intl.DisplayNames([LOCALE[language]], { type: "region" }).of(code) ?? code;
