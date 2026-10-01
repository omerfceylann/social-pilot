"use client";

import { ChipGroup } from "@/components/ui/ChipGroup";
import { PlatformIcon } from "@/components/social/PlatformIcon";
import { useT } from "@/i18n/useT";
import { PLATFORMS } from "@/mock/platforms";
import { BRAND_GOALS, BRAND_PERSONALITIES, CONTENT_STYLES, PLATFORM_IDS } from "@/types";
import { StepHeader } from "../StepHeader";
import type { StepProps } from "./types";

/**
 * Aynı kalıbı izleyen çoklu seçim adımları: başlık + çip grubu.
 * Seçenek listeleri types/'taki tek kaynaktan gelir.
 */

export const PersonalityStep = ({ draft, update }: StepProps) => {
  const { t } = useT();
  const title = t("onboarding.personality.title");
  return (
    <div className="flex flex-col gap-8">
      <StepHeader title={title} subtitle={t("onboarding.personality.subtitle")} />
      <ChipGroup
        aria-label={title}
        value={draft.personality}
        onChange={(personality) => update({ personality })}
        options={BRAND_PERSONALITIES.map((value) => ({ value, label: t(`personality.${value}`) }))}
      />
    </div>
  );
};

export const StyleStep = ({ draft, update }: StepProps) => {
  const { t } = useT();
  const title = t("onboarding.style.title");
  return (
    <div className="flex flex-col gap-8">
      <StepHeader title={title} subtitle={t("onboarding.style.subtitle")} />
      <ChipGroup
        aria-label={title}
        value={draft.contentStyles}
        onChange={(contentStyles) => update({ contentStyles })}
        options={CONTENT_STYLES.map((value) => ({ value, label: t(`contentStyles.${value}`) }))}
      />
    </div>
  );
};

export const GoalsStep = ({ draft, update }: StepProps) => {
  const { t } = useT();
  const title = t("onboarding.goals.title");
  return (
    <div className="flex flex-col gap-8">
      <StepHeader title={title} subtitle={t("onboarding.goals.subtitle")} />
      <ChipGroup
        aria-label={title}
        value={draft.goals}
        onChange={(goals) => update({ goals })}
        options={BRAND_GOALS.map((value) => ({ value, label: t(`goals.${value}`) }))}
      />
    </div>
  );
};

/** "Hangi hesapları zaten kullanıyorsun?" Seçilenler bağlanınca geçmişli veri alır. */
export const PlatformsUsedStep = ({ draft, update }: StepProps) => {
  const { t } = useT();
  const title = t("onboarding.platformsUsed.title");
  return (
    <div className="flex flex-col gap-8">
      <StepHeader title={title} subtitle={t("onboarding.platformsUsed.subtitle")} />
      <div className="flex flex-col gap-4">
        <ChipGroup
          aria-label={title}
          value={draft.platformsUsed}
          onChange={(platformsUsed) => update({ platformsUsed })}
          options={PLATFORM_IDS.map((value) => ({
            value,
            label: PLATFORMS[value].name,
            icon: <PlatformIcon platform={value} />,
          }))}
        />
        <p className="text-small text-fg-muted">{t("onboarding.platformsUsed.hint")}</p>
      </div>
    </div>
  );
};
