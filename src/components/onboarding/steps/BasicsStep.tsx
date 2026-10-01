"use client";

import { useId } from "react";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { Select } from "@/components/ui/Select";
import { LANGUAGES } from "@/i18n/config";
import { useT } from "@/i18n/useT";
import { formatCountry } from "@/lib/format";
import { SectorPicker } from "../SectorPicker";
import { StepHeader } from "../StepHeader";
import type { StepProps } from "./types";

const COUNTRY_CODES = ["TR", "DE", "NL", "GB", "US", "AZ", "CY"] as const;

/** Temel bilgiler. Yeni markada ülke ve dil de sorulur; mevcut markada sadece kimlik. */
export const BasicsStep = ({ draft, update }: StepProps) => {
  const { t, language } = useT();
  const sectorLabelId = useId();
  const languageLabelId = useId();
  const isNew = draft.origin === "new";

  return (
    <div className="flex flex-col gap-8">
      <StepHeader title={t("onboarding.basics.title")} subtitle={t("onboarding.basics.subtitle")} />

      <Field label={t("auth.brandName")}>
        <Input
          value={draft.brandName}
          onChange={(event) => update({ brandName: event.target.value })}
          placeholder={t("auth.brandNamePlaceholder")}
          autoComplete="organization"
        />
      </Field>

      <div className="flex flex-col gap-3">
        <span id={sectorLabelId} className="text-small font-medium text-fg">
          {t("onboarding.basics.sector")}
        </span>
        <SectorPicker
          value={draft.sector}
          otherLabel={draft.otherSector}
          onChange={(sector) => update({ sector })}
          onOtherLabelChange={(otherSector) => update({ otherSector })}
          labelledBy={sectorLabelId}
        />
      </div>

      {isNew && (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={t("onboarding.basics.country")}>
            <Select
              value={draft.country}
              onChange={(event) => update({ country: event.target.value })}
            >
              {COUNTRY_CODES.map((code) => (
                <option key={code} value={code}>
                  {formatCountry(code, language)}
                </option>
              ))}
            </Select>
          </Field>
          <div className="flex flex-col gap-1.5">
            <span id={languageLabelId} className="text-small font-medium text-fg">
              {t("onboarding.basics.language")}
            </span>
            <SegmentedControl
              aria-labelledby={languageLabelId}
              value={draft.language}
              onChange={(value) => update({ language: value })}
              options={LANGUAGES.map((code) => ({ value: code, label: t(`languages.${code}`) }))}
              className="w-full"
            />
          </div>
        </div>
      )}

      <Field label={t("onboarding.basics.website")} optional={t("common.optional")}>
        <Input
          type="url"
          inputMode="url"
          value={draft.website}
          onChange={(event) => update({ website: event.target.value })}
          placeholder={t("onboarding.basics.websitePlaceholder")}
          autoCapitalize="none"
          spellCheck={false}
        />
      </Field>
    </div>
  );
};
