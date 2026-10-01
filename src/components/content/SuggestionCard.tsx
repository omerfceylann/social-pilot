"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { AIBadge } from "@/components/ai/AIBadge";
import { PlatformIcon } from "@/components/social/PlatformIcon";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { formatCompact } from "@/lib/format";
import { PLATFORMS } from "@/mock/platforms";
import type { PerformanceTier, PostSuggestion } from "@/types";

const POTENTIAL_DOT: Record<PerformanceTier, string> = {
  high: "bg-success",
  average: "bg-warning",
  low: "bg-fg-muted",
};

type SuggestionCardProps = {
  suggestion: PostSuggestion;
  /** Sadece ilk kart AI etiketi taşır; AI'ı her yere koymayız (spec §34). */
  highlighted?: boolean;
  onCreate: (suggestion: PostSuggestion) => void;
  className?: string;
};

/**
 * Öneri kartı (spec §9): görsel, platform, başlık, kısa açıklama, AI işareti,
 * potansiyel ve eylem. Fazla bilgi yok: gerisi editörde.
 */
export const SuggestionCard = ({
  suggestion,
  highlighted = false,
  onCreate,
  className,
}: SuggestionCardProps) => {
  const { t, language } = useT();
  const media = suggestion.media[0];
  const [minReach, maxReach] = suggestion.estimate.reach;

  return (
    <Card padding="none" interactive className={cn("flex flex-col overflow-hidden", className)}>
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
        {media && (
          <Image
            src={media.url}
            alt={media.alt}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 80vw"
            className="object-cover"
          />
        )}
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-caption font-medium text-white backdrop-blur-md">
          <PlatformIcon platform={suggestion.platform} className="size-3.5" />
          {PLATFORMS[suggestion.platform].name} · {t(`formats.${suggestion.format}`)}
        </span>
        {media?.kind === "video" && (
          <span
            className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md"
            aria-label={t("content.playVideo", { seconds: media.durationSec ?? 0 })}
            role="img"
          >
            <Play className="size-3.5 fill-current" />
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        {highlighted && (
          <AIBadge variant="filled">
            {suggestion.stage === "starter" ? t("starter.firstPost") : t("ai.suggestion")}
          </AIBadge>
        )}
        <div className="flex flex-col gap-1.5">
          <h3 className="text-heading">{suggestion.title}</h3>
          <p className="line-clamp-2 text-small text-fg-secondary">{suggestion.description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <div className="flex flex-col gap-0.5">
            <span className="inline-flex items-center gap-1.5 text-caption font-medium text-fg">
              <span
                className={cn(
                  "size-1.5 rounded-full",
                  POTENTIAL_DOT[suggestion.estimate.potential],
                )}
              />
              {t(`performance.${suggestion.estimate.potential}`)}
            </span>
            <span className="text-caption text-fg-muted tabular-nums">
              {t("content.estimatedReach", {
                min: formatCompact(minReach, language),
                max: formatCompact(maxReach, language),
              })}
            </span>
          </div>
          <Button variant="secondary" size="sm" onClick={() => onCreate(suggestion)}>
            {t("content.createFromSuggestion")}
          </Button>
        </div>
      </div>
    </Card>
  );
};
