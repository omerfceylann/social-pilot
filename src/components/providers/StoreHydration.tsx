"use client";

import { useEffect } from "react";
import { usePreferences } from "@/store/usePreferences";

/**
 * Kalıcı store'ları sayfa tarayıcıda oturduktan sonra localStorage'dan yükler.
 * Yeni kalıcı store eklendikçe buraya eklenir.
 */
const persistedStores = [usePreferences];

export const StoreHydration = () => {
  useEffect(() => {
    persistedStores.forEach((store) => void store.persist.rehydrate());
  }, []);

  return null;
};
