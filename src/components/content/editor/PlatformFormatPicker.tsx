"use client";

import { RadioGroup } from "radix-ui";
import { useId } from "react";
import { PlatformIcon } from "@/components/social/PlatformIcon";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { PLATFORMS } from "@/mock/platforms";
import type { ContentFormat, PlatformId } from "@/types";
import { PLATFORM_IDS } from "@/types";

type PlatformFormatPickerProps = {
  platform: PlatformId;
  format: ContentFormat;
  /** Bağlı platformlar; içeriğin mevcut platformu bağlı olmasa da listede kalır. */
  available: PlatformId[];
  onPlatformChange: (platform: PlatformId) => void;
  onFormatChange: (format: ContentFormat) => void;
};

/** İçeriğin yayınlanacağı platform ve biçim. Değişince önizleme animasyonla geçer. */
export const PlatformFormatPicker = ({
  platform,
  format,
  available,
  onPlatformChange,
  onFormatChange,
}: PlatformFormatPickerProps) => {
  const { t } = useT();
  const platformLabelId = useId();
  const formatLabelId = useId();
  const platforms = PLATFORM_IDS.filter((id) => id === platform || available.includes(id));
  const formats = PLATFORMS[platform].formats;

  const handlePlatform = (value: string) => {
    const next = platforms.find((id) => id === value);
    if (next) onPlatformChange(next);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <span id={platformLabelId} className="text-small font-medium text-fg">
          {t("content.editor.platform")}
        </span>
        <RadioGroup.Root
          value={platform}
          onValueChange={handlePlatform}
          orientation="horizontal"
          aria-labelledby={platformLabelId}
          className="flex flex-wrap gap-2"
        >
          {platforms.map((id) => (
            <RadioGroup.Item
              key={id}
              value={id}
              className={cn(
                "inline-flex h-9 items-center gap-2 rounded-full border px-3.5 text-small font-medium transition-colors duration-150",
                id === platform
                  ? "border-accent/40 bg-accent-soft text-fg"
                  : "border-border bg-surface text-fg-secondary hover:border-border-strong hover:text-fg",
              )}
            >
              <PlatformIcon platform={id} colored={id === platform} className="size-4" />
              {PLATFORMS[id].name}
            </RadioGroup.Item>
          ))}
        </RadioGroup.Root>
      </div>

      {formats.length > 1 && (
        <div className="flex flex-col gap-2">
          <span id={formatLabelId} className="text-small font-medium text-fg">
            {t("content.editor.format")}
          </span>
          <SegmentedControl
            value={format}
            onChange={onFormatChange}
            options={formats.map((value) => ({ value, label: t(`formats.${value}`) }))}
            aria-labelledby={formatLabelId}
            className="self-start"
          />
        </div>
      )}
    </div>
  );
};
