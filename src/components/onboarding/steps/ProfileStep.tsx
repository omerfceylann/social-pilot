"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { AIBadge } from "@/components/ai/AIBadge";
import { Badge } from "@/components/ui/Badge";
import { useT } from "@/i18n/useT";
import { revealVariants, staggerContainer } from "@/lib/motion";
import { useBrand } from "@/store/useBrand";
import { StepHeader } from "../StepHeader";

type SectionProps = { title: string; children: ReactNode };

const Section = ({ title, children }: SectionProps) => (
  <motion.div variants={revealVariants} className="flex flex-col gap-2.5">
    <h2 className="text-caption font-medium tracking-wide text-fg-muted uppercase">{title}</h2>
    {children}
  </motion.div>
);

const ChipList = ({
  items,
  tone = "neutral",
}: {
  items: string[];
  tone?: "neutral" | "accent";
}) => (
  <div className="flex flex-wrap gap-1.5">
    {/* Kullanıcı aynı kuralı elle de ekleyebilir; tekrar edenler bir kez gösterilir. */}
    {[...new Set(items)].map((item) => (
      <Badge key={item} tone={tone} className="px-2.5 py-1 text-small">
        {item}
      </Badge>
    ))}
  </div>
);

/** Oluşturulan marka profilinin özeti; bölümler sırayla açılır (spec §7 "AI suggestions: smooth reveal"). */
export const ProfileStep = () => {
  const { t } = useT();
  const profile = useBrand((state) => state.profile);
  if (!profile) return null;

  const emojiLabel = {
    none: t("onboarding.rules.emojiNone"),
    minimal: t("onboarding.rules.emojiMinimal"),
    moderate: t("onboarding.rules.emojiModerate"),
    rich: t("onboarding.rules.emojiRich"),
  }[profile.rules.emojiUsage];
  const lengthLabel = {
    short: t("onboarding.rules.lengthShort"),
    medium: t("onboarding.rules.lengthMedium"),
    long: t("onboarding.rules.lengthLong"),
  }[profile.rules.captionLength];
  const sectorLabel =
    profile.sector.kind === "preset" ? t(`sectors.${profile.sector.id}`) : profile.sector.label;

  return (
    <div className="flex flex-col gap-8">
      <StepHeader
        eyebrow={<AIBadge variant="filled">{t("ai.analysis")}</AIBadge>}
        title={t("onboarding.profile.title")}
        subtitle={t("onboarding.profile.subtitle")}
      />

      <motion.div
        variants={staggerContainer(0.07)}
        initial="initial"
        animate="animate"
        className="flex flex-col gap-6 rounded-xl border border-border bg-surface p-5 sm:p-6"
      >
        <motion.div variants={revealVariants} className="flex flex-col gap-1">
          <p className="text-title">{profile.name}</p>
          <p className="text-body text-fg-secondary">
            {sectorLabel} · {profile.tagline}
          </p>
        </motion.div>

        <Section title={t("onboarding.profile.personality")}>
          <ChipList
            items={profile.personality.map((trait) => t(`personality.${trait}`))}
            tone="accent"
          />
        </Section>
        <Section title={t("onboarding.profile.tone")}>
          <ChipList items={profile.tone} />
        </Section>
        <Section title={t("onboarding.profile.styles")}>
          <ChipList items={profile.contentStyles.map((style) => t(`contentStyles.${style}`))} />
        </Section>
        {profile.origin === "existing" && (
          <Section title={t("onboarding.profile.goals")}>
            <ChipList items={profile.goals.map((goal) => t(`goals.${goal}`))} />
          </Section>
        )}
        <Section title={t("onboarding.profile.audience")}>
          <p className="text-body text-fg">
            {profile.audience.summary} ·{" "}
            {t("onboarding.profile.ages", {
              min: profile.audience.ageRange[0],
              max: profile.audience.ageRange[1],
            })}
          </p>
        </Section>
        <Section title={t("onboarding.profile.rules")}>
          <ChipList
            items={[
              t("onboarding.profile.ruleEmoji", { value: emojiLabel }),
              t("onboarding.profile.ruleLength", { value: lengthLabel }),
              t("onboarding.profile.ruleHashtags", { count: profile.rules.maxHashtags }),
              ...profile.rules.customRules,
            ]}
          />
        </Section>
      </motion.div>
    </div>
  );
};
