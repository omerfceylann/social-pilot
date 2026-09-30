import { buildWorkspaceSeed, resolveDataset } from "@/services/workspaceService";
import type { BrandProfile } from "@/types";
import { useAccounts } from "./useAccounts";
import { useBrand } from "./useBrand";
import { useContent } from "./useContent";
import { useInbox } from "./useInbox";
import { useSession } from "./useSession";

/**
 * Store'ları koordine eden tek yer. Store'lar birbirini import etmez;
 * birden fazla store'u birlikte değiştiren işlemler burada.
 */

/** Onboarding sonunda (ya da sektör değişince) çalışma alanını sektör verisiyle doldurur. */
export const initializeWorkspace = (profile: BrandProfile) => {
  const seed = buildWorkspaceSeed(resolveDataset(profile.sector));
  useBrand.getState().setProfile(profile);
  useContent.getState().seed(seed);
  useInbox.getState().seed(seed);
};

/** Demo'yu baştan başlatmak için tüm kullanıcı verisini siler (tercihler kalır). */
export const resetWorkspace = () => {
  useSession.getState().reset();
  useBrand.getState().reset();
  useAccounts.getState().reset();
  useContent.getState().reset();
  useInbox.getState().reset();
};
