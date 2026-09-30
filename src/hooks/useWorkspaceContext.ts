"use client";

import { useMemo } from "react";
import { resolveWorkspaceContext, type WorkspaceContext } from "@/services/workspaceService";
import { useBrand } from "@/store/useBrand";

/**
 * Markanın analitik tabanı, AI Agent sayıları, trendler ve medya ipuçları.
 * Yeni marka ile mevcut marka farklı taban kullanır. Marka yoksa (onboarding öncesi) null.
 */
export const useWorkspaceContext = (): WorkspaceContext | null => {
  const profile = useBrand((state) => state.profile);
  return useMemo(() => (profile ? resolveWorkspaceContext(profile) : null), [profile]);
};
