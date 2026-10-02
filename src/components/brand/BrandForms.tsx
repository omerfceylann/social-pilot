"use client";

import { Check } from "lucide-react";
import { useId } from "react";
import { SaveBar } from "@/components/settings/SaveBar";
import { SettingsSection } from "@/components/settings/SettingsSection";
import { ChipGroup } from "@/components/ui/ChipGroup";
import { Field } from "@/components/ui/Field";
import { Input, Textarea } from "@/components/ui/Input";
import { LabelledRow } from "@/components/ui/LabelledRow";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { Select } from "@/components/ui/Select";
import { TagInput } from "@/components/ui/TagInput";
import { useFormDraft } from "@/hooks/useFormDraft";
import { COUNTRY_CODES, LANGUAGES } from "@/i18n/config";
import { useT } from "@/i18n/useT";
import { formatCountry } from "@/lib/format";
import { toast } from "@/store/useToasts";
import { updateBrandProfile } from "@/store/workspace";
import {
  BRAND_GOALS,
  BRAND_PERSONALITIES,
  CONTENT_STYLES,
  type BrandProfile,
  type BrandRules,
} from "@/types";

const AGE_LIMITS = { min: 13, max: 80 } as const;

type FormProps = { profile: BrandProfile };

/** Kaydet: marka profiline tek seferde yazar ve bildirir. */
const useSave = () => {
  const { t } = useT();
  return (patch: Partial<BrandProfile>) => {
    updateBrandProfile(patch);
    toast.success(t("toasts.brandUpdated"));
  };
};

// ---------- Profil ----------

/** Kimlik ve hedef kitle. Sektör değişmez: içerik verisi sektöre göre yüklendi. */
export const BrandProfileForm = ({ profile }: FormProps) => {
  const { t, language } = useT();
  const save = useSave();
  const languageLabelId = useId();
  const { draft, dirty, update, reset } = useFormDraft({
    name: profile.name,
    tagline: profile.tagline,
    website: profile.website ?? "",
    country: profile.country,
    language: profile.language,
    audience: profile.audience,
  });
  const [ageMin, ageMax] = draft.audience.ageRange;
  const invalidAge = ageMin < AGE_LIMITS.min || ageMax > AGE_LIMITS.max || ageMin >= ageMax;
  const sectorLabel =
    profile.sector.kind === "preset" ? t(`sectors.${profile.sector.id}`) : profile.sector.label;
  const setAudience = (patch: Partial<BrandProfile["audience"]>) =>
    update({ audience: { ...draft.audience, ...patch } });

  return (
    <div className="flex flex-col gap-6">
      <SettingsSection title={t("brand.identity")} description={t("brand.identityHint")}>
        <Field label={t("auth.brandName")} hint={t("brand.nameHint")}>
          <Input value={draft.name} onChange={(event) => update({ name: event.target.value })} />
        </Field>
        <Field label={t("brand.tagline")}>
          <Textarea
            rows={2}
            value={draft.tagline}
            onChange={(event) => update({ tagline: event.target.value })}
          />
        </Field>
        <Field label={t("onboarding.basics.website")} optional={t("common.optional")}>
          <Input
            type="url"
            value={draft.website}
            onChange={(event) => update({ website: event.target.value })}
            placeholder="https://"
          />
        </Field>
        <div className="flex flex-col gap-1.5">
          <span className="text-small font-medium text-fg">{t("onboarding.basics.sector")}</span>
          <p className="text-body text-fg-secondary">
            {sectorLabel}
            <span className="ml-2 text-caption text-fg-muted">{t("brand.sectorLocked")}</span>
          </p>
        </div>
      </SettingsSection>

      <SettingsSection title={t("brand.market")} description={t("brand.marketHint")}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
              className="self-start"
            />
          </div>
        </div>
      </SettingsSection>

      <SettingsSection title={t("brand.audience")} description={t("brand.audienceHint")}>
        <Field label={t("brand.audienceSummary")}>
          <Input
            value={draft.audience.summary}
            onChange={(event) => setAudience({ summary: event.target.value })}
          />
        </Field>
        <div className="grid grid-cols-2 gap-3 sm:max-w-xs">
          <Field label={t("brand.ageMin")} error={invalidAge ? t("brand.invalidAge") : undefined}>
            <Input
              type="number"
              inputMode="numeric"
              min={AGE_LIMITS.min}
              max={AGE_LIMITS.max}
              value={ageMin}
              onChange={(event) => setAudience({ ageRange: [Number(event.target.value), ageMax] })}
            />
          </Field>
          <Field label={t("brand.ageMax")}>
            <Input
              type="number"
              inputMode="numeric"
              min={AGE_LIMITS.min}
              max={AGE_LIMITS.max}
              value={ageMax}
              onChange={(event) => setAudience({ ageRange: [ageMin, Number(event.target.value)] })}
            />
          </Field>
        </div>
        <Field label={t("brand.audienceDescription")} optional={t("common.optional")}>
          <Textarea
            rows={3}
            value={draft.audience.description}
            onChange={(event) => setAudience({ description: event.target.value })}
          />
        </Field>
      </SettingsSection>

      <SaveBar
        visible={dirty}
        onDiscard={reset}
        onSave={() => {
          if (!draft.name.trim() || invalidAge) {
            toast.error(t("brand.fixErrors"));
            return;
          }
          save({
            ...draft,
            name: draft.name.trim(),
            website: draft.website.trim() || undefined,
          });
        }}
      />
    </div>
  );
};

// ---------- Marka DNA'sı ----------

/** Kişilik, ses tonu, içerik stilleri ve hedefler (spec §30: "Brand DNA should be editable"). */
export const BrandDnaForm = ({ profile }: FormProps) => {
  const { t } = useT();
  const save = useSave();
  const toneId = useId();
  const { draft, dirty, update, reset } = useFormDraft({
    personality: profile.personality,
    tone: profile.tone,
    contentStyles: profile.contentStyles,
    goals: profile.goals,
  });

  return (
    <div className="flex flex-col gap-6">
      <SettingsSection title={t("brand.personality")} description={t("brand.personalityHint")}>
        <ChipGroup
          aria-label={t("brand.personality")}
          value={draft.personality}
          onChange={(personality) => update({ personality })}
          options={BRAND_PERSONALITIES.map((value) => ({
            value,
            label: t(`personality.${value}`),
          }))}
        />
      </SettingsSection>

      <SettingsSection title={t("brand.tone")} description={t("brand.toneHint")}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={toneId} className="sr-only">
            {t("brand.tone")}
          </label>
          <TagInput
            id={toneId}
            value={draft.tone}
            onChange={(tone) => update({ tone })}
            placeholder={t("brand.tonePlaceholder")}
            removeLabel={(word) => t("onboarding.rules.removeWord", { word })}
          />
        </div>
      </SettingsSection>

      <SettingsSection title={t("brand.styles")} description={t("brand.stylesHint")}>
        <ChipGroup
          aria-label={t("brand.styles")}
          value={draft.contentStyles}
          onChange={(contentStyles) => update({ contentStyles })}
          options={CONTENT_STYLES.map((value) => ({ value, label: t(`contentStyles.${value}`) }))}
        />
      </SettingsSection>

      <SettingsSection title={t("brand.goals")} description={t("brand.goalsHint")}>
        <ChipGroup
          aria-label={t("brand.goals")}
          value={draft.goals}
          onChange={(goals) => update({ goals })}
          options={BRAND_GOALS.map((value) => ({ value, label: t(`goals.${value}`) }))}
        />
      </SettingsSection>

      <SaveBar
        visible={dirty}
        onDiscard={reset}
        onSave={() => {
          if (draft.personality.length === 0 || draft.contentStyles.length === 0) {
            toast.error(t("brand.pickAtLeastOne"));
            return;
          }
          save(draft);
        }}
      />
    </div>
  );
};

// ---------- İçerik kuralları ----------

/**
 * AI'ın her öneride uyduğu kurallar. Üstte okunur bir özet (spec §30 örneğindeki
 * ✓ listesi), altında düzenleme kontrolleri.
 */
export const BrandRulesForm = ({ profile }: FormProps) => {
  const { t } = useT();
  const save = useSave();
  const bannedId = useId();
  const preferredId = useId();
  const customId = useId();
  const { draft: rules, dirty, update, reset } = useFormDraft<BrandRules>(profile.rules);
  const removeLabel = (word: string) => t("onboarding.rules.removeWord", { word });

  const summary = [
    t(`brand.rulesSummary.emoji.${rules.emojiUsage}`),
    t(`brand.rulesSummary.length.${rules.captionLength}`),
    t(`brand.rulesSummary.cta.${rules.ctaStyle}`),
    ...rules.customRules,
  ];

  return (
    <div className="flex flex-col gap-6">
      <SettingsSection
        title={t("brand.rulesSummaryTitle")}
        description={t("brand.rulesSummaryHint")}
      >
        <ul className="flex flex-col gap-2">
          {summary.map((rule) => (
            <li key={rule} className="flex items-start gap-2.5 text-body text-fg">
              <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
              {rule}
            </li>
          ))}
        </ul>
      </SettingsSection>

      <SettingsSection title={t("brand.writing")} description={t("brand.writingHint")}>
        <LabelledRow label={t("onboarding.rules.emoji")}>
          {(labelId) => (
            <SegmentedControl
              aria-labelledby={labelId}
              value={rules.emojiUsage}
              onChange={(emojiUsage) => update({ emojiUsage })}
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
              onChange={(captionLength) => update({ captionLength })}
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
              onChange={(ctaStyle) => update({ ctaStyle })}
              options={[
                { value: "none", label: t("onboarding.rules.ctaNone") },
                { value: "soft", label: t("onboarding.rules.ctaSoft") },
                { value: "direct", label: t("onboarding.rules.ctaDirect") },
              ]}
            />
          )}
        </LabelledRow>
      </SettingsSection>

      <SettingsSection title={t("brand.words")} description={t("brand.wordsHint")}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={bannedId} className="text-small font-medium text-fg">
            {t("onboarding.rules.bannedWords")}
          </label>
          <TagInput
            id={bannedId}
            value={rules.bannedWords}
            onChange={(bannedWords) => update({ bannedWords })}
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
            onChange={(preferredWords) => update({ preferredWords })}
            placeholder={t("onboarding.rules.wordsPlaceholder")}
            removeLabel={removeLabel}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor={customId} className="text-small font-medium text-fg">
            {t("brand.customRules")}
          </label>
          <TagInput
            id={customId}
            value={rules.customRules}
            onChange={(customRules) => update({ customRules })}
            placeholder={t("brand.customRulesPlaceholder")}
            removeLabel={removeLabel}
          />
        </div>
      </SettingsSection>

      <SaveBar visible={dirty} onDiscard={reset} onSave={() => save({ rules })} />
    </div>
  );
};
