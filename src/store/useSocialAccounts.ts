import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PlatformId, SocialAccount } from "@/types";
import { persistOptions } from "./persist";

type SocialAccountsState = {
  accounts: Partial<Record<PlatformId, SocialAccount>>;
  connect: (account: SocialAccount) => void;
  disconnect: (platform: PlatformId) => void;
  reset: () => void;
};

export const useSocialAccounts = create<SocialAccountsState>()(
  persist(
    (set) => ({
      accounts: {},
      connect: (account) =>
        set(({ accounts }) => ({ accounts: { ...accounts, [account.platform]: account } })),
      disconnect: (platform) =>
        set(({ accounts }) => {
          const next = { ...accounts };
          delete next[platform];
          return { accounts: next };
        }),
      reset: () => set({ accounts: {} }),
    }),
    persistOptions("social-accounts"),
  ),
);
