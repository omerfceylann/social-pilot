"use client";

import { useT } from "@/i18n/useT";
import { PLATFORMS } from "@/mock/platforms";
import { resolvePlatformHistory } from "@/services/workspaceService";
import { useBrand } from "@/store/useBrand";
import { useSocialAccounts } from "@/store/useSocialAccounts";
import { toast } from "@/store/useToasts";
import { disconnectPlatform } from "@/store/workspace";
import { PLATFORM_IDS } from "@/types";
import { SocialAccountCard } from "./SocialAccountCard";

/**
 * Beş platformun bağlantı listesi. Onboarding, dashboard ve Marka sayfası aynı
 * bileşeni kullanır: zaten kullanılan platformlar üstte ve geçmişli veri alır.
 */
type AccountConnectionListProps = {
  /** Marka sayfasında bağlı hesaplar kesilebilir; onboarding'de bu seçenek yok. */
  manageable?: boolean;
};

export const AccountConnectionList = ({ manageable = false }: AccountConnectionListProps) => {
  const { t } = useT();
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
          onDisconnect={
            manageable
              ? () => {
                  disconnectPlatform(platform);
                  toast.info(t("brand.disconnected", { platform: PLATFORMS[platform].name }));
                }
              : undefined
          }
        />
      ))}
    </div>
  );
};
