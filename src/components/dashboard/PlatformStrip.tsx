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
    <section aria-label={t("dashboard.platforms")}>
      {/* Mobilde yatay kaydırma, masaüstünde beş eşit sütun. */}
      <ul className="-mx-4 flex snap-x snap-mandatory scroll-px-4 [scrollbar-width:none] gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-5">
        {PLATFORM_IDS.map((platform) => {
          const account = accounts[platform];
          const meta = PLATFORMS[platform];
          return (
            <li
              key={platform}
              className={cn(
                "flex w-40 shrink-0 snap-start flex-col gap-3 rounded-xl border bg-surface p-4 transition-colors sm:w-auto",
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
                <div className="flex min-h-8 flex-col justify-center gap-0.5">
                  <span className="inline-flex items-center gap-1.5 text-small font-medium text-success">
                    <span className="flex size-4 items-center justify-center rounded-full bg-success text-white [&_svg]:size-2.5">
                      <Check strokeWidth={3} />
                    </span>
                    {t("dashboard.connected")}
                  </span>
                  <span className="truncate text-caption text-fg-muted tabular-nums">
                    @{account.handle} ·{" "}
                    {t("onboarding.connect.followers", {
                      count: formatCompact(account.followers, language),
                    })}
                  </span>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="primary"
                    className="flex-1"
                    onClick={() => setTarget(platform)}
                    aria-label={t("dashboard.connectPlatform", { platform: meta.name })}
                  >
                    {t("dashboard.connect")}
                  </Button>
                  <Button asChild size="sm" variant="secondary" className="flex-1">
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
