"use client";

import { useCallback } from "react";
import { usePreferences } from "@/store/usePreferences";
import { translate, type TranslationKey, type TranslationParams } from "./translate";

/**
 * Bileşenlerde çeviri: const { t } = useT(); t("nav.overview").
 * Dil değişince bu hook'u kullanan bileşenler yeniden render olur.
 */
export const useT = () => {
  const language = usePreferences((state) => state.language);
  const t = useCallback(
    (key: TranslationKey, params?: TranslationParams) => translate(language, key, params),
    [language],
  );
  return { t, language };
};
