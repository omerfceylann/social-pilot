"use client";

import { SocialAccountCard } from "@/components/social/SocialAccountCard";
import { useT } from "@/i18n/useT";
import { resolvePlatformHistory } from "@/services/workspaceService";
import { useBrand } from "@/store/useBrand";
import { useSocialAccounts } from "@/store/useSocialAccounts";
import { PLATFORM_IDS } from "@/types";
import { StepHeader } from "../StepHeader";

/**
 * Hesap bağlama. "Kullandığın platformlar"da seçilenler üstte ve geçmişli veri alır;
 * diğerleri yeni hesap sayılır ("Hesap oluştur" + bağla → başlangıç önerileri).
 */
export const ConnectStep = () => {
  const { t } = useT();
  const profile = useBrand((state) => state.profile);
  const accounts = useSocialAccounts((state) => state.accounts);
  if (!profile) return null;

  const platforms = PLATFORM_IDS.toSorted(
    (a, b) => Number(profile.usedPlatforms.includes(b)) - Number(profile.usedPlatforms.includes(a)),
  );

  return (
    <div className="flex flex-col gap-8">
      <StepHeader
        title={t("onboarding.connect.title")}
        subtitle={t("onboarding.connect.subtitle")}
      />
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
    </div>
  );
};
