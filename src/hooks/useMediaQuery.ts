"use client";

import { useSyncExternalStore } from "react";

/**
 * CSS medya sorgusunu React'te okur. useSyncExternalStore, tarayıcının
 * "dış" durumuna (pencere genişliği) güvenli abone olmanın React yolu.
 * Sunucuda pencere yok; orada her zaman false döner.
 */
export const useMediaQuery = (query: string) =>
  useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );

/** Tailwind'in lg kırılımı (1024px): tam sidebar bu genişlikten itibaren. */
export const useIsDesktop = () => useMediaQuery("(min-width: 1024px)");
