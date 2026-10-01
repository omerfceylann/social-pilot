"use client";

import { Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { transition } from "@/lib/motion";

export type ChipOption<Value extends string> = {
  value: Value;
  label: string;
  icon?: ReactNode;
};

type ChipGroupProps<Value extends string> = {
  options: ChipOption<Value>[];
  value: Value[];
  onChange: (value: Value[]) => void;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  className?: string;
};

/** Çoklu seçim çipleri. Her çip bir onay kutusu gibi davranır (role="checkbox"). */
export const ChipGroup = <Value extends string>({
  options,
  value,
  onChange,
  className,
  ...aria
}: ChipGroupProps<Value>) => {
  const toggle = (option: Value) =>
    onChange(value.includes(option) ? value.filter((item) => item !== option) : [...value, option]);

  return (
    <div role="group" className={cn("flex flex-wrap gap-2", className)} {...aria}>
      {options.map((option) => {
        const selected = value.includes(option.value);
        return (
          <button
            key={option.value}
            type="button"
            role="checkbox"
            aria-checked={selected}
            onClick={() => toggle(option.value)}
            className={cn(
              "inline-flex h-10 items-center gap-2 rounded-full border px-4 text-body font-medium",
              "transition-[background-color,border-color,color,transform] duration-150 active:scale-97",
              "[&_svg]:size-4 [&_svg]:shrink-0",
              selected
                ? "border-accent/40 bg-accent-soft text-accent-text"
                : "border-border bg-surface text-fg-secondary hover:border-border-strong hover:text-fg",
            )}
          >
            <AnimatePresence initial={false}>
              {selected && (
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={transition.fast}
                  className="-mr-1 inline-flex overflow-hidden"
                  aria-hidden
                >
                  <Check />
                </motion.span>
              )}
            </AnimatePresence>
            {!selected && option.icon}
            {option.label}
          </button>
        );
      })}
    </div>
  );
};
