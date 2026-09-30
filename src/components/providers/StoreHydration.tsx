"use client";

import { useEffect } from "react";
import { useSocialAccounts } from "@/store/useSocialAccounts";
import { useBrand } from "@/store/useBrand";
import { useContent } from "@/store/useContent";
import { useHydration } from "@/store/useHydration";
import { useInbox } from "@/store/useInbox";
import { usePreferences } from "@/store/usePreferences";
import { useSession } from "@/store/useSession";
import { useUserDirectory } from "@/store/useUserDirectory";
import { catchUpFirstReactions } from "@/store/workspace";

/** Yeni kalıcı store eklendikçe buraya eklenir. */
const persistedStores = [
  usePreferences,
  useSession,
  useBrand,
  useSocialAccounts,
  useContent,
  useInbox,
  useUserDirectory,
];

/**
 * Kalıcı store'ları sayfa tarayıcıda oturduktan sonra localStorage'dan yükler,
 * hepsi bitince useHydrated() true olur.
 */
export const StoreHydration = () => {
  useEffect(() => {
    void Promise.all(persistedStores.map((store) => store.persist.rehydrate())).then(() => {
      useHydration.getState().markHydrated();
      // Sayfa kapalıyken gelmesi gereken ilk yorumları tamamla.
      catchUpFirstReactions();
    });
  }, []);

  return null;
};
