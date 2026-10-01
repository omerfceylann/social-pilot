export const LANGUAGES = ["tr", "en"] as const;
export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "tr";

/** Marka ülkesi seçenekleri (ISO 3166); adları Intl.DisplayNames ile arayüz dilinde gösterilir. */
export const COUNTRY_CODES = ["TR", "DE", "NL", "GB", "US", "AZ", "CY"] as const;
