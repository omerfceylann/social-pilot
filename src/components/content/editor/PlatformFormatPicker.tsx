"use client";

import { RadioGroup } from "radix-ui";
import { useId } from "react";
import { AIBadge, AISparkle } from "@/components/ai/AIBadge";
import { PlatformIcon } from "@/components/social/PlatformIcon";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import type { PublishTarget } from "@/lib/content";
import { PLATFORMS } from "@/mock/platforms";
import type { ContentFormat, PlatformId } from "@/types";
import { PLATFORM_IDS } from "@/types";

type PlatformFormatPickerProps = {
  platform: PlatformId;
  format: ContentFormat;
  /** Bağlı platformlar; içeriğin mevcut platformu bağlı olmasa da listede kalır. */
  available: PlatformId[];
  /** AI'ın bu içerik için önerdiği platform + biçimler; boşsa işaret gösterilmez. */
  recommended: PublishTarget[];
  onPlatformChange: (platform: PlatformId) => void;
  onFormatChange: (format: ContentFormat) => void;
};

/**
 * İçeriğin yayınlanacağı platform ve biçim. Değişince önizleme animasyonla geçer.
 * AI'ın içeriği hazırladığı (ya da içeriğin eksiksiz taşındığı) seçenekler ✦ ile işaretlenir.
 */
export const PlatformFormatPicker = ({
  platform,
  format,
  available,
  recommended,
  onPlatformChange,
  onFormatChange,
}: PlatformFormatPickerProps) => {
  const { t, language } = useT();
  const isRecommendedPlatform = (id: PlatformId) =>
    recommended.some((item) => item.platform === id);
  const isRecommendedFormat = (value: ContentFormat) =>
    recommended.some((item) => item.platform === platform && item.format === value);
  const targetName = ({ platform: id, format: value }: PublishTarget) =>
    PLATFORMS[id].formats.length > 1
      ? `${PLATFORMS[id].name} ${t(`formats.${value}`)}`
      : PLATFORMS[id].name;
  const preparedFor = new Intl.ListFormat(language, { type: "conjunction" }).format(
    recommended.map(targetName),
  );
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
              {isRecommendedPlatform(id) && (
                <AIMark label={t("content.editor.aiRecommendedPlatform")} />
              )}
            </RadioGroup.Item>
          ))}
        </RadioGroup.Root>
        {recommended.length > 0 && (
          <AIBadge>{t("content.editor.aiPreparedFor", { targets: preparedFor })}</AIBadge>
        )}
      </div>

      {formats.length > 1 && (
        <div className="flex flex-col gap-2">
          <span id={formatLabelId} className="text-small font-medium text-fg">
            {t("content.editor.format")}
          </span>
          <SegmentedControl
            value={format}
            onChange={onFormatChange}
            options={formats.map((value) => ({
              value,
              label: t(`formats.${value}`),
              adornment: isRecommendedFormat(value) && (
                <AIMark label={t("content.editor.aiRecommendedPlatform")} />
              ),
            }))}
            aria-labelledby={formatLabelId}
            className="self-start"
          />
        </div>
      )}
    </div>
  );
};

type AIMarkProps = { label: string };

/** Seçeneğin yanındaki ✦; ekran okuyucu "AI önerisi" olarak okur. */
const AIMark = ({ label }: AIMarkProps) => (
  <span className="inline-flex text-accent-text">
    <AISparkle />
    <span className="sr-only">{label}</span>
  </span>
);
