"use client";

import { useId, type ReactNode } from "react";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { TagInput } from "@/components/ui/TagInput";
import { useT } from "@/i18n/useT";
import { StepHeader } from "../StepHeader";
import type { EditableRules } from "../useOnboardingWizard";
import type { StepProps } from "./types";

type LabelledRowProps = { label: string; children: (labelId: string) => ReactNode };

/** Etiket + kontrol; kontrolün aria-labelledby'si etiketin id'sine bağlanır. */
const LabelledRow = ({ label, children }: LabelledRowProps) => {
  const labelId = useId();
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <span id={labelId} className="text-small font-medium text-fg">
        {label}
      </span>
      {children(labelId)}
    </div>
  );
};

/** İçerik kuralları (spec §11). Sektör önerileriyle önceden dolu gelir; sonradan düzenlenebilir. */
export const RulesStep = ({ draft, update }: StepProps) => {
  const { t } = useT();
  const bannedId = useId();
  const preferredId = useId();
  if (!draft.rules) return null;
  const rules = draft.rules;
  const setRule = (patch: Partial<EditableRules>) => update({ rules: { ...rules, ...patch } });
  const removeLabel = (word: string) => t("onboarding.rules.removeWord", { word });

  return (
    <div className="flex flex-col gap-8">
      <StepHeader title={t("onboarding.rules.title")} subtitle={t("onboarding.rules.subtitle")} />

      <div className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-5">
        <LabelledRow label={t("onboarding.rules.emoji")}>
          {(labelId) => (
            <SegmentedControl
              aria-labelledby={labelId}
              value={rules.emojiUsage}
              onChange={(emojiUsage) => setRule({ emojiUsage })}
              options={[
                { value: "none", label: t("onboarding.rules.emojiNone") },
                { value: "minimal", label: t("onboarding.rules.emojiMinimal") },
                { value: "moderate", label: t("onboarding.rules.emojiModerate") },
                { value: "rich", label: t("onboarding.rules.emojiRich") },
              ]}
            />
          )}
        </LabelledRow>
        <LabelledRow label={t("onboarding.rules.captionLength")}>
          {(labelId) => (
            <SegmentedControl
              aria-labelledby={labelId}
              value={rules.captionLength}
              onChange={(captionLength) => setRule({ captionLength })}
              options={[
                { value: "short", label: t("onboarding.rules.lengthShort") },
                { value: "medium", label: t("onboarding.rules.lengthMedium") },
                { value: "long", label: t("onboarding.rules.lengthLong") },
              ]}
            />
          )}
        </LabelledRow>
        <LabelledRow label={t("onboarding.rules.cta")}>
          {(labelId) => (
            <SegmentedControl
              aria-labelledby={labelId}
              value={rules.ctaStyle}
              onChange={(ctaStyle) => setRule({ ctaStyle })}
              options={[
                { value: "none", label: t("onboarding.rules.ctaNone") },
                { value: "soft", label: t("onboarding.rules.ctaSoft") },
                { value: "direct", label: t("onboarding.rules.ctaDirect") },
              ]}
            />
          )}
        </LabelledRow>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={bannedId} className="text-small font-medium text-fg">
          {t("onboarding.rules.bannedWords")}
        </label>
        <TagInput
          id={bannedId}
          value={rules.bannedWords}
          onChange={(bannedWords) => setRule({ bannedWords })}
          placeholder={t("onboarding.rules.wordsPlaceholder")}
          removeLabel={removeLabel}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor={preferredId} className="text-small font-medium text-fg">
          {t("onboarding.rules.preferredWords")}
        </label>
        <TagInput
          id={preferredId}
          value={rules.preferredWords}
          onChange={(preferredWords) => setRule({ preferredWords })}
          placeholder={t("onboarding.rules.wordsPlaceholder")}
          removeLabel={removeLabel}
        />
      </div>
      <Field label={t("onboarding.rules.visualStyle")}>
        <Input
          value={rules.visualStyle}
          onChange={(event) => setRule({ visualStyle: event.target.value })}
          placeholder={t("onboarding.rules.visualStylePlaceholder")}
        />
      </Field>
    </div>
  );
};
