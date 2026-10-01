"use client";

import {
  Building2,
  Car,
  Coffee,
  Dumbbell,
  Ellipsis,
  GraduationCap,
  HeartPulse,
  Laptop,
  Plane,
  Scissors,
  Shirt,
  ShoppingBag,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { RadioGroup } from "radix-ui";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { transition } from "@/lib/motion";
import { SECTOR_IDS, type SectorId } from "@/types";

const SECTOR_ICONS: Record<SectorId, LucideIcon> = {
  restaurant: Coffee,
  ecommerce: ShoppingBag,
  beauty: Scissors,
  fitness: Dumbbell,
  technology: Laptop,
  education: GraduationCap,
  realEstate: Building2,
  localService: Wrench,
  fashion: Shirt,
  health: HeartPulse,
  automotive: Car,
  travel: Plane,
};

type SectorValue = SectorId | "other";

const isSectorValue = (value: string): value is SectorValue =>
  value === "other" || SECTOR_IDS.some((id) => id === value);

type SectorPickerProps = {
  value: SectorValue | null;
  otherLabel: string;
  onChange: (value: SectorValue) => void;
  onOtherLabelChange: (label: string) => void;
  labelledBy: string;
};

/** 12 sektör + "Diğer" (spec §13). Ok tuşlarıyla gezilebilen bir radyo grubu. */
export const SectorPicker = ({
  value,
  otherLabel,
  onChange,
  onOtherLabelChange,
  labelledBy,
}: SectorPickerProps) => {
  const { t } = useT();
  const options: { value: SectorValue; label: string; icon: LucideIcon }[] = [
    ...SECTOR_IDS.map((id) => ({ value: id, label: t(`sectors.${id}`), icon: SECTOR_ICONS[id] })),
    { value: "other", label: t("sectors.other"), icon: Ellipsis },
  ];

  return (
    <div className="flex flex-col gap-4">
      <RadioGroup.Root
        value={value ?? ""}
        onValueChange={(next) => isSectorValue(next) && onChange(next)}
        aria-labelledby={labelledBy}
        className="grid grid-cols-2 gap-2 sm:grid-cols-3"
      >
        {options.map((option) => {
          const Icon = option.icon;
          const selected = option.value === value;
          return (
            <RadioGroup.Item
              key={option.value}
              value={option.value}
              className={cn(
                "flex h-14 items-center gap-3 rounded-lg border px-3 text-left text-small font-medium",
                "transition-[background-color,border-color,color,transform] duration-150 active:scale-97",
                selected
                  ? "border-accent/50 bg-accent-soft text-fg"
                  : "border-border bg-surface text-fg-secondary hover:border-border-strong hover:text-fg",
              )}
            >
              <Icon
                className={cn(
                  "size-[18px] shrink-0",
                  selected ? "text-accent-text" : "text-fg-muted",
                )}
                aria-hidden
              />
              <span className="leading-tight">{option.label}</span>
            </RadioGroup.Item>
          );
        })}
      </RadioGroup.Root>

      <AnimatePresence initial={false}>
        {value === "other" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={transition.base}
            className="overflow-hidden"
          >
            <Field label={t("onboarding.basics.otherSector")}>
              <Input
                autoFocus
                placeholder={t("sectors.otherPlaceholder")}
                value={otherLabel}
                onChange={(event) => onOtherLabelChange(event.target.value)}
              />
            </Field>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
