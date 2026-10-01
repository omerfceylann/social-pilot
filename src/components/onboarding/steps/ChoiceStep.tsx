"use client";

import { Rocket, Store, type LucideIcon } from "lucide-react";
import { RadioGroup } from "radix-ui";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { StepHeader } from "../StepHeader";
import type { Origin } from "../useOnboardingWizard";
import type { StepProps } from "./types";

const isOrigin = (value: string): value is Origin => value === "new" || value === "existing";

/** "Yeni marka mı, mevcut marka mı?" Bu ayrım sonraki tüm soruları belirler (spec §10). */
export const ChoiceStep = ({ draft, update }: StepProps) => {
  const { t } = useT();
  const options: { value: Origin; icon: LucideIcon; title: string; description: string }[] = [
    {
      value: "new",
      icon: Rocket,
      title: t("onboarding.choice.newTitle"),
      description: t("onboarding.choice.newDescription"),
    },
    {
      value: "existing",
      icon: Store,
      title: t("onboarding.choice.existingTitle"),
      description: t("onboarding.choice.existingDescription"),
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <StepHeader title={t("onboarding.choice.title")} subtitle={t("onboarding.choice.subtitle")} />
      <RadioGroup.Root
        value={draft.origin ?? ""}
        onValueChange={(value) => isOrigin(value) && update({ origin: value })}
        aria-label={t("onboarding.choice.title")}
        className="grid grid-cols-1 gap-3"
      >
        {options.map((option) => {
          const Icon = option.icon;
          const selected = draft.origin === option.value;
          return (
            <RadioGroup.Item
              key={option.value}
              value={option.value}
              className={cn(
                "flex items-start gap-4 rounded-xl border p-5 text-left",
                "transition-[background-color,border-color,box-shadow,transform] duration-200 active:scale-[0.99]",
                selected
                  ? "border-accent/50 bg-accent-soft shadow-sm"
                  : "border-border bg-surface hover:border-border-strong",
              )}
            >
              <span
                className={cn(
                  "flex size-11 shrink-0 items-center justify-center rounded-lg transition-colors",
                  selected ? "bg-accent text-accent-fg" : "bg-surface-muted text-fg-secondary",
                )}
              >
                <Icon className="size-5" aria-hidden />
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-heading">{option.title}</span>
                <span className="text-body text-fg-secondary">{option.description}</span>
              </span>
            </RadioGroup.Item>
          );
        })}
      </RadioGroup.Root>
    </div>
  );
};
