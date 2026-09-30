"use client";

import { useEffect } from "react";
import type { ResolvedColorMode } from "@/lib/theme";
import { usePreferences } from "@/store/usePreferences";

const DARK_QUERY = "(prefers-color-scheme: dark)";

const resolveSystemMode = (): ResolvedColorMode =>
  window.matchMedia(DARK_QUERY).matches ? "dark" : "light";

/** Tema değişirken tüm transition'ları bir kareliğine kapatır; renkler aynı anda değişir. */
const withoutTransitions = (apply: () => void) => {
  const style = document.createElement("style");
  style.textContent = "*,*::before,*::after{transition:none!important}";
  document.head.appendChild(style);
  apply();
  // Stil hesaplamasını zorla, sonra kuralı kaldır.
  void window.getComputedStyle(document.body).opacity;
  requestAnimationFrame(() => style.remove());
};

const setRootAttribute = (name: string, value: string) => {
  const root = document.documentElement;
  if (root.getAttribute(name) === value) return;
  withoutTransitions(() => root.setAttribute(name, value));
};

/** Tercih store'unu <html> attribute'larıyla senkron tutar. Görsel çıktısı yok. */
export const ThemeSync = () => {
  const mode = usePreferences((state) => state.mode);
  const accent = usePreferences((state) => state.accent);
  const language = usePreferences((state) => state.language);

  useEffect(() => {
    if (mode !== "system") {
      setRootAttribute("data-mode", mode);
      return;
    }
    const media = window.matchMedia(DARK_QUERY);
    const sync = () => setRootAttribute("data-mode", resolveSystemMode());
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [mode]);

  useEffect(() => setRootAttribute("data-accent", accent), [accent]);
  useEffect(() => document.documentElement.setAttribute("lang", language), [language]);

  return null;
};
