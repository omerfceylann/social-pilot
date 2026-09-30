"use client";

import { useMemo } from "react";
import { resolveDataset } from "@/services/workspaceService";
import { useBrand } from "@/store/useBrand";
import type { SectorDataset } from "@/types";

/**
 * Seçili markanın sektör verisi (analitik tabanı, trendler, medya ipuçları…).
 * Marka henüz yoksa (onboarding öncesi) null döner.
 */
export const useDataset = (): SectorDataset | null => {
  const sector = useBrand((state) => state.profile?.sector);
  return useMemo(() => (sector ? resolveDataset(sector) : null), [sector]);
};
