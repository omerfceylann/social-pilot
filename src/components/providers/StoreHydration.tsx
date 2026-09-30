"use client";

import { useEffect } from "react";
import { useAccounts } from "@/store/useAccounts";
import { useBrand } from "@/store/useBrand";
import { useContent } from "@/store/useContent";
import { useHydration } from "@/store/useHydration";
import { useInbox } from "@/store/useInbox";
import { usePreferences } from "@/store/usePreferences";
import { useSession } from "@/store/useSession";

/** Yeni kalıcı store eklendikçe buraya eklenir. */
const persistedStores = [usePreferences, useSession, useBrand, useAccounts, useContent, useInbox];

/**
 * Kalıcı store'ları sayfa tarayıcıda oturduktan sonra localStorage'dan yükler,
 * hepsi bitince useHydrated() true olur.
 */
export const StoreHydration = () => {
  useEffect(() => {
    void Promise.all(persistedStores.map((store) => store.persist.rehydrate())).then(() =>
      useHydration.getState().markHydrated(),
    );
  }, []);

  return null;
};
