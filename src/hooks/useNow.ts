"use client";

import { useSyncExternalStore } from "react";

const MINUTE_MS = 60_000;

const roundToMinute = (time: number) => Math.floor(time / MINUTE_MS) * MINUTE_MS;

let currentMinute = roundToMinute(Date.now());

const subscribe = (onChange: () => void) => {
  const timer = setInterval(() => {
    currentMinute = roundToMinute(Date.now());
    onChange();
  }, MINUTE_MS);
  return () => clearInterval(timer);
};

const getSnapshot = () => currentMinute;

/**
 * "Şu an", dakika çözünürlüğünde. Render içinde Date.now() çağırmak saf değildir
 * (her render farklı sonuç); zamanı React dışındaki bir kaynak gibi okuruz.
 * Dakikada bir güncellenir: "sıradaki paylaşım" gibi bilgiler kendiliğinden tazelenir.
 */
export const useNow = () => useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
