"use client";

import { Field } from "@/components/ui/Field";
import { Input, Textarea } from "@/components/ui/Input";
import { useT } from "@/i18n/useT";
import { StepHeader } from "../StepHeader";
import type { StepProps } from "./types";

type AudienceStepProps = StepProps & { ageLimits: { min: number; max: number } };

const toAge = (value: string) => Number.parseInt(value, 10) || 0;

/** Hedef kitle (spec §11). Yaş aralığı tutarsızsa iki alan birden işaretlenir. */
export const AudienceStep = ({ draft, update, ageLimits }: AudienceStepProps) => {
  const { t } = useT();
  const invalidAge =
    draft.ageMin >= draft.ageMax || draft.ageMin < ageLimits.min || draft.ageMax > ageLimits.max;
  const ageError = invalidAge ? t("onboarding.audience.invalidAge") : undefined;

  return (
    <div className="flex flex-col gap-8">
      <StepHeader
        title={t("onboarding.audience.title")}
        subtitle={t("onboarding.audience.subtitle")}
      />

      <Field label={t("onboarding.audience.summary")}>
        <Input
          value={draft.audienceSummary}
          onChange={(event) => update({ audienceSummary: event.target.value })}
          placeholder={t("onboarding.audience.summaryPlaceholder")}
        />
      </Field>

      <fieldset className="flex flex-col gap-1.5">
        <legend className="mb-1.5 text-small font-medium text-fg">
          {t("onboarding.audience.ageRange")}
        </legend>
        <div className="grid grid-cols-2 gap-3">
          <Field
            label={<span className="sr-only">{t("onboarding.audience.ageMin")}</span>}
            error={ageError}
          >
            <Input
              type="number"
              inputMode="numeric"
              min={ageLimits.min}
              max={ageLimits.max}
              value={draft.ageMin}
              onChange={(event) => update({ ageMin: toAge(event.target.value) })}
            />
          </Field>
          <Field label={<span className="sr-only">{t("onboarding.audience.ageMax")}</span>}>
            <Input
              type="number"
              inputMode="numeric"
              min={ageLimits.min}
              max={ageLimits.max}
              value={draft.ageMax}
              aria-invalid={invalidAge || undefined}
              onChange={(event) => update({ ageMax: toAge(event.target.value) })}
            />
          </Field>
        </div>
      </fieldset>

      <Field label={t("onboarding.audience.description")} optional={t("common.optional")}>
        <Textarea
          value={draft.audienceDescription}
          onChange={(event) => update({ audienceDescription: event.target.value })}
          placeholder={t("onboarding.audience.descriptionPlaceholder")}
          rows={3}
        />
      </Field>
    </div>
  );
};
