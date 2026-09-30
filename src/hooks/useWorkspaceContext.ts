"use client";

import { useMemo } from "react";
import { resolveWorkspaceContext, type WorkspaceContext } from "@/services/workspaceService";
import { useBrand } from "@/store/useBrand";
import { useSocialAccounts } from "@/store/useSocialAccounts";

/**
 * Bağlı hesaplardan hesaplanan analitik tabanı, trendler ve medya ipuçları.
 * Hesap bağlandıkça ya da kesildikçe yeniden hesaplanır. Marka yoksa null.
 */
export const useWorkspaceContext = (): WorkspaceContext | null => {
  const profile = useBrand((state) => state.profile);
  const accounts = useSocialAccounts((state) => state.accounts);
  return useMemo(
    () => (profile ? resolveWorkspaceContext(profile, accounts) : null),
    [profile, accounts],
  );
};
