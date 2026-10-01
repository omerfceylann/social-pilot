"use client";

import { Field } from "@/components/ui/Field";
import { Textarea } from "@/components/ui/Input";
import { useT } from "@/i18n/useT";
import { StepHeader } from "../StepHeader";
import type { StepProps } from "./types";

/** Mevcut marka: şu anki içerik stili ve geliştirmek istediği şey (spec §12). */
export const CurrentStateStep = ({ draft, update }: StepProps) => {
  const { t } = useT();
  return (
    <div className="flex flex-col gap-8">
      <StepHeader
        title={t("onboarding.currentState.title")}
        subtitle={t("onboarding.currentState.subtitle")}
      />
      <Field label={t("onboarding.currentState.currentStyle")} optional={t("common.optional")}>
        <Textarea
          rows={3}
          value={draft.currentStyle}
          onChange={(event) => update({ currentStyle: event.target.value })}
          placeholder={t("onboarding.currentState.currentStylePlaceholder")}
        />
      </Field>
      <Field label={t("onboarding.currentState.improvement")} optional={t("common.optional")}>
        <Textarea
          rows={3}
          value={draft.improvementFocus}
          onChange={(event) => update({ improvementFocus: event.target.value })}
          placeholder={t("onboarding.currentState.improvementPlaceholder")}
        />
      </Field>
    </div>
  );
};
