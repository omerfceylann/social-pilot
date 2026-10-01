"use client";

import { Check, ExternalLink } from "lucide-react";
import { useState } from "react";
import { PlatformIcon } from "@/components/social/PlatformIcon";
import { SocialAccountCard } from "@/components/social/SocialAccountCard";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { formatCompact } from "@/lib/format";
import { PLATFORMS } from "@/mock/platforms";
import { resolvePlatformHistory } from "@/services/workspaceService";
import { useBrand } from "@/store/useBrand";
import { useSocialAccounts } from "@/store/useSocialAccounts";
import { PLATFORM_IDS, type PlatformId } from "@/types";

/**
 * Beş platformun durumu tek bakışta: bağlı olanlar takipçisiyle, bağlı olmayanlar
 * "Bağla" ve "Kayıt ol" eylemleriyle. Bağlama, tek platformluk bir modalda yapılır.
 */
export const PlatformStrip = () => {
  const { t, language } = useT();
  const profile = useBrand((state) => state.profile);
  const accounts = useSocialAccounts((state) => state.accounts);
  const [target, setTarget] = useState<PlatformId | null>(null);
  if (!profile) return null;

  // Hesap bağlanınca modal kendiliğinden kapanır: açık olma durumu store'dan türetilir.
  const modalOpen = target !== null && !accounts[target];

  return (
    <section aria-label={t("dashboard.platforms")} className="@container">
      {/*
        Yerleşim ekran genişliğine değil şeridin kendi genişliğine göre (container query):
        kenar çubuğu açıkken 1024px'te bile yer dar. Beş sütun için ≥56rem gerekir; daha
        dar alanda yatay kaydırma (bir sonraki kartın kenarı görünür).
      */}
      <ul className="-mx-4 flex snap-x snap-mandatory scroll-px-4 [scrollbar-width:none] gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:scroll-px-0 sm:px-0 @4xl:grid @4xl:grid-cols-5 @4xl:overflow-visible">
        {PLATFORM_IDS.map((platform) => {
          const account = accounts[platform];
          const meta = PLATFORMS[platform];
          return (
            <li
              key={platform}
              className={cn(
                "flex w-44 shrink-0 snap-start flex-col gap-3 rounded-xl border bg-surface p-4 transition-colors @4xl:w-auto",
                account ? "border-success/30" : "border-border",
              )}
            >
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-surface-muted">
                  <PlatformIcon platform={platform} colored />
                </span>
                <span className="truncate text-body font-medium text-fg">{meta.name}</span>
              </div>

              {account ? (
                <div className="flex flex-1 flex-col justify-center gap-0.5">
                  <span className="inline-flex items-center gap-1.5 text-small font-medium text-success">
                    <span className="flex size-4 items-center justify-center rounded-full bg-success text-white [&_svg]:size-2.5">
                      <Check strokeWidth={3} />
                    </span>
                    {t("dashboard.connected")}
                  </span>
                  <span className="truncate text-caption text-fg-secondary">@{account.handle}</span>
                  <span className="text-caption text-fg-muted tabular-nums">
                    {t("onboarding.connect.followers", {
                      count: formatCompact(account.followers, language),
                    })}
                  </span>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => setTarget(platform)}
                    aria-label={t("dashboard.connectPlatform", { platform: meta.name })}
                  >
                    {t("dashboard.connect")}
                  </Button>
                  <Button asChild size="sm" variant="ghost">
                    <a
                      href={meta.signupUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("dashboard.signUpPlatform", { platform: meta.name })}
                    >
                      {t("dashboard.signUp")}
                      <ExternalLink />
                    </a>
                  </Button>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <Modal
        open={modalOpen}
        onOpenChange={(open) => !open && setTarget(null)}
        title={target ? t("dashboard.connectPlatform", { platform: PLATFORMS[target].name }) : ""}
        description={t("onboarding.connect.subtitle")}
        closeLabel={t("common.close")}
        size="sm"
      >
        {target && (
          <div className="p-4 sm:p-6">
            <SocialAccountCard
              platform={target}
              history={resolvePlatformHistory(profile, target)}
              account={accounts[target]}
            />
          </div>
        )}
      </Modal>
    </section>
  );
};
