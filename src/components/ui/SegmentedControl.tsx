"use client";

import { motion } from "motion/react";
import { RadioGroup } from "radix-ui";
import { useId } from "react";
import { cn } from "@/lib/cn";
import { transition } from "@/lib/motion";

export type SegmentOption<Value extends string> = { value: Value; label: string };

type SegmentedControlProps<Value extends string> = {
  value: Value;
  onChange: (value: Value) => void;
  options: SegmentOption<Value>[];
  "aria-label"?: string;
  "aria-labelledby"?: string;
  className?: string;
};

/**
 * Tekli seçim (form değeri). Tabs'a benzer görünür ama anlamı farklı:
 * Tabs içerik değiştirir, bu bir değer seçer. Bu yüzden altında RadioGroup var.
 */
export const SegmentedControl = <Value extends string>({
  value,
  onChange,
  options,
  className,
  ...aria
}: SegmentedControlProps<Value>) => {
  const indicatorId = useId();

  // RadioGroup değeri string verir; seçeneklerde arayarak cast'siz daraltırız.
  const handleChange = (next: string) => {
    const option = options.find((item) => item.value === next);
    if (option) onChange(option.value);
  };

  return (
    <RadioGroup.Root
      value={value}
      onValueChange={handleChange}
      orientation="horizontal"
      className={cn("inline-flex max-w-full gap-0.5 rounded-lg bg-surface-muted p-1", className)}
      {...aria}
    >
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <RadioGroup.Item
            key={option.value}
            value={option.value}
            className={cn(
              "relative h-8 flex-1 rounded-md px-3 text-small font-medium whitespace-nowrap transition-colors duration-150",
              selected ? "text-fg" : "text-fg-secondary hover:text-fg",
            )}
          >
            {selected && (
              <motion.span
                layoutId={indicatorId}
                transition={transition.indicator}
                className="absolute inset-0 rounded-md bg-surface-raised shadow-sm ring-1 ring-border"
                aria-hidden
              />
            )}
            <span className="relative">{option.label}</span>
          </RadioGroup.Item>
        );
      })}
    </RadioGroup.Root>
  );
};
