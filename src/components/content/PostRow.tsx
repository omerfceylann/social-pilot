"use client";

import { ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlatformIcon } from "@/components/social/PlatformIcon";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { formatCompact, formatDateTime, formatPercent, formatRelative } from "@/lib/format";
import { PLATFORMS } from "@/mock/platforms";
import type { PerformanceTier, Post, PostAnalytics } from "@/types";

const TIER_DOT: Record<PerformanceTier, string> = {
  high: "bg-success",
  average: "bg-warning",
  low: "bg-danger",
};

type PostRowProps = {
  post: Post;
  /** Sadece yayınlanan postlarda: satırda küçük performans özeti. */
  analytics?: PostAnalytics;
};

/**
 * Taslak, planlanan ve yayınlanan içeriklerin liste satırı. Tamamı tek bir
 * bağlantı: tıklanınca editör açılır. Durumun en önemli bilgisi sağda.
 */
export const PostRow = ({ post, analytics }: PostRowProps) => {
  const { t, language } = useT();
  const media = post.media[0];

  const timeLabel =
    post.status === "published" && post.publishedAt
      ? formatRelative(post.publishedAt, language)
      : post.status === "scheduled" && post.scheduledAt
        ? formatDateTime(post.scheduledAt, language)
        : t("content.editedAgo", { time: formatRelative(post.updatedAt, language) });

  return (
    <Link
      href={`/content/${post.id}`}
      className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-3 transition-[border-color,box-shadow] duration-200 hover:border-border-strong hover:shadow-sm sm:p-4"
    >
      <span className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-surface-muted sm:size-16">
        {media ? (
          <Image src={media.url} alt="" fill sizes="64px" className="object-cover" />
        ) : (
          <span className="flex size-full items-center justify-center text-fg-muted">
            <PlatformIcon platform={post.platform} className="size-5" />
          </span>
        )}
        {media?.kind === "video" && (
          <span className="absolute right-1 bottom-1 flex size-5 items-center justify-center rounded-full bg-black/55 text-white">
            <Play className="size-2.5 fill-current" aria-hidden />
          </span>
        )}
      </span>

      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="truncate text-body font-medium text-fg">
          {post.title || t("content.untitled")}
        </span>
        <span className="flex min-w-0 items-center gap-1.5 text-caption text-fg-muted">
          <PlatformIcon platform={post.platform} colored className="size-3.5 shrink-0" />
          <span className="truncate">
            {PLATFORMS[post.platform].name} · {t(`formats.${post.format}`)} · {timeLabel}
          </span>
        </span>
      </span>

      {analytics && (
        <span className="hidden shrink-0 flex-col items-end gap-0.5 sm:flex">
          <span className="text-small font-medium text-fg tabular-nums">
            {t("content.views", { count: formatCompact(analytics.views, language) })}
          </span>
          <span className="inline-flex items-center gap-1.5 text-caption text-fg-muted tabular-nums">
            <span className={cn("size-1.5 rounded-full", TIER_DOT[analytics.tier])} aria-hidden />
            {t("content.engagement", { value: formatPercent(analytics.engagementRate, language) })}
          </span>
        </span>
      )}
      <ChevronRight
        className="size-4 shrink-0 text-fg-muted transition-transform duration-150 group-hover:translate-x-0.5"
        aria-hidden
      />
    </Link>
  );
};
