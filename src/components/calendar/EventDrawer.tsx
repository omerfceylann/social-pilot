"use client";

import { ArrowRight, CalendarClock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AIInsight } from "@/components/ai/AIInsight";
import { PostPerformance } from "@/components/content/editor/PostPerformance";
import { PlatformPreview } from "@/components/content/previews/PlatformPreview";
import { PlatformIcon } from "@/components/social/PlatformIcon";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Drawer } from "@/components/ui/Drawer";
import { useWorkspaceContext } from "@/hooks/useWorkspaceContext";
import { useT } from "@/i18n/useT";
import { fieldsFor, suggestionAsPost, withInboxComments, type CalendarItem } from "@/lib/content";
import { formatDateTime } from "@/lib/format";
import { PLATFORMS } from "@/mock/platforms";
import { getPostAnalytics } from "@/services/analyticsService";
import { useBrand } from "@/store/useBrand";
import { useContent } from "@/store/useContent";
import { useInbox } from "@/store/useInbox";
import { useSocialAccounts } from "@/store/useSocialAccounts";
import type { CalendarStatus } from "@/types";

const STATUS_TONE: Record<CalendarStatus, "success" | "accent" | "neutral" | "outline"> = {
  published: "success",
  scheduled: "accent",
  draft: "neutral",
  suggested: "outline",
};

type EventDrawerProps = {
  item: CalendarItem | null;
  onClose: () => void;
};

/**
 * Takvimdeki bir öğenin detayı (spec §28): önizleme, platform, zaman, metin,
 * durum ve yayınlandıysa analitik. Öneriyse "İçeriği oluştur" ile taslağa dönüşür.
 */
export const EventDrawer = ({ item, onClose }: EventDrawerProps) => {
  const { t, language } = useT();
  return (
    <Drawer
      open={item !== null}
      onOpenChange={(open) => !open && onClose()}
      title={item?.title || t("content.untitled")}
      description={
        item
          ? `${PLATFORMS[item.platform].name} · ${formatDateTime(item.date, language, {
              weekday: "long",
              day: "numeric",
              month: "long",
              hour: "2-digit",
              minute: "2-digit",
            })}`
          : undefined
      }
      closeLabel={t("common.close")}
      className="max-w-md"
    >
      {item && <EventDetails item={item} />}
    </Drawer>
  );
};

const EventDetails = ({ item }: { item: CalendarItem }) => {
  const { t } = useT();
  const router = useRouter();
  const profile = useBrand((state) => state.profile);
  const account = useSocialAccounts((state) => state.accounts[item.platform]);
  const comments = useInbox((state) => state.comments);
  const createFromSuggestion = useContent((state) => state.createFromSuggestion);
  const context = useWorkspaceContext();

  const post =
    item.source.kind === "post" ? item.source.post : suggestionAsPost(item.source.suggestion);
  const fields = fieldsFor(post.platform, post.format);
  const rawAnalytics =
    item.source.kind === "post" && context ? getPostAnalytics(post, context.analytics) : null;
  const analytics = rawAnalytics ? withInboxComments(rawAnalytics, post, comments) : null;

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={STATUS_TONE[item.status]}>{t(`postStatus.${item.status}`)}</Badge>
        <span className="inline-flex items-center gap-1.5 text-small text-fg-secondary">
          <PlatformIcon platform={post.platform} colored className="size-4" />
          {PLATFORMS[post.platform].name} · {t(`formats.${post.format}`)}
        </span>
      </div>

      {item.source.kind === "suggestion" && (
        <AIInsight label={t("content.editor.whyThis")}>
          {item.source.suggestion.reasoning}
        </AIInsight>
      )}

      {analytics && <PostPerformance analytics={analytics} publishedAt={post.publishedAt} />}

      <div className="rounded-xl bg-surface-muted/50 py-5">
        <PlatformPreview
          post={post}
          brandName={profile?.name ?? ""}
          handle={account?.handle ?? profile?.handle ?? ""}
          followers={account?.followers ?? 0}
          analytics={analytics}
        />
      </div>

      {fields.caption && post.caption && (
        <section className="flex flex-col gap-2">
          <h3 className="text-small font-medium text-fg">{t("content.editor.caption")}</h3>
          <p className="text-body whitespace-pre-line text-fg-secondary">{post.caption}</p>
          {fields.hashtags && post.hashtags.length > 0 && (
            <p className="text-small text-accent-text">{post.hashtags.join(" ")}</p>
          )}
        </section>
      )}

      <div className="sticky bottom-0 -mx-4 border-t border-border bg-surface-elevated px-4 pt-4 pb-1 sm:-mx-6 sm:px-6">
        {item.source.kind === "suggestion" ? (
          <Button
            variant="primary"
            className="w-full"
            onClick={() => {
              if (item.source.kind !== "suggestion") return;
              router.push(`/content/${createFromSuggestion(item.source.suggestion)}`);
            }}
          >
            {t("content.createFromSuggestion")}
            <ArrowRight />
          </Button>
        ) : (
          <Button
            asChild
            variant={item.status === "published" ? "secondary" : "primary"}
            className="w-full"
          >
            <Link href={`/content/${post.id}`}>
              {item.status === "published" ? (
                t("calendar.openContent")
              ) : (
                <>
                  <CalendarClock />
                  {t("calendar.editContent")}
                </>
              )}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};
