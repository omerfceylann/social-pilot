"use client";

import { resolvePlatformHistory } from "@/services/workspaceService";
import { useBrand } from "@/store/useBrand";
import { useSocialAccounts } from "@/store/useSocialAccounts";
import { PLATFORM_IDS } from "@/types";
import { SocialAccountCard } from "./SocialAccountCard";

/**
 * Beş platformun bağlantı listesi. Onboarding, dashboard ve Marka sayfası aynı
 * bileşeni kullanır: zaten kullanılan platformlar üstte ve geçmişli veri alır.
 */
export const AccountConnectionList = () => {
  const profile = useBrand((state) => state.profile);
  const accounts = useSocialAccounts((state) => state.accounts);
  if (!profile) return null;

  const platforms = PLATFORM_IDS.toSorted(
    (a, b) => Number(profile.usedPlatforms.includes(b)) - Number(profile.usedPlatforms.includes(a)),
  );

  return (
    <div className="flex flex-col gap-3">
      {platforms.map((platform) => (
        <SocialAccountCard
          key={platform}
          platform={platform}
          history={resolvePlatformHistory(profile, platform)}
          account={accounts[platform]}
        />
      ))}
    </div>
  );
};
