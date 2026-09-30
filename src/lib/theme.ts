export const ACCENT_THEMES = ["indigo", "violet", "blue", "emerald", "rose", "amber"] as const;
export type AccentTheme = (typeof ACCENT_THEMES)[number];

export const COLOR_MODES = ["light", "dark", "system"] as const;
export type ColorMode = (typeof COLOR_MODES)[number];
export type ResolvedColorMode = Exclude<ColorMode, "system">;

/** Dışarıdan gelen string'i (ör. Tabs değeri) gerçekten doğrulayarak daraltır. */
export const isColorMode = (value: string): value is ColorMode =>
  COLOR_MODES.some((mode) => mode === value);

export const DEFAULT_ACCENT: AccentTheme = "violet";
export const DEFAULT_COLOR_MODE: ColorMode = "system";

/** Tema seçicilerde gösterilen örnek renk (CSS token'ları ile aynı ton). */
export const ACCENT_SWATCHES: Record<AccentTheme, string> = {
  indigo: "oklch(0.58 0.19 277)",
  violet: "oklch(0.6 0.21 293)",
  blue: "oklch(0.6 0.18 255)",
  emerald: "oklch(0.72 0.15 163)",
  rose: "oklch(0.62 0.2 12)",
  amber: "oklch(0.8 0.15 75)",
};

/** Zustand persist'in localStorage anahtarı. Tema script'i de bunu okur. */
export const PREFERENCES_STORAGE_KEY = "socialpilot:preferences";
