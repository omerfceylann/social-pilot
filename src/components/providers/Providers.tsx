"use client";

import { MotionConfig } from "motion/react";
import { Tooltip } from "radix-ui";
import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/Toaster";
import { StoreHydration } from "./StoreHydration";
import { ThemeSync } from "./ThemeSync";

type ProvidersProps = { children: ReactNode };

export const Providers = ({ children }: ProvidersProps) => (
  // reducedMotion="user": işletim sisteminde "hareketi azalt" açıksa Motion
  // transform animasyonlarını atlar, sadece opaklık geçişlerini korur.
  <MotionConfig reducedMotion="user">
    <Tooltip.Provider delayDuration={300} skipDelayDuration={150}>
      <StoreHydration />
      <ThemeSync />
      {children}
      <Toaster />
    </Tooltip.Provider>
  </MotionConfig>
);
