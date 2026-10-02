"use client";

import { ArrowLeft, CalendarClock, Ellipsis, FileQuestion, Send, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AIInsight } from "@/components/ai/AIInsight";
import { PageContainer } from "@/components/layout/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Dropdown } from "@/components/ui/Dropdown";
import { EmptyState } from "@/components/ui/EmptyState";
import { IconButton } from "@/components/ui/IconButton";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { useContentEditor } from "@/hooks/useContentEditor";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { fieldsFor, findPublishProblem } from "@/lib/content";
import { formatCompact, formatDateTime, formatPercent } from "@/lib/format";
import { addDays } from "@/lib/time";
import { PLATFORMS } from "@/mock/platforms";
import { simulateLatency } from "@/services/latency";
import { useContent } from "@/store/useContent";
import { toast } from "@/store/useToasts";
import { publishPost } from "@/store/workspace";
import type { PostStatus } from "@/types";
import { PlatformPreview } from "../previews/PlatformPreview";
import { ContentFields } from "./ContentFields";
import { MediaField } from "./MediaField";
import { PlatformFormatPicker } from "./PlatformFormatPicker";
import { PostPerformance } from "./PostPerformance";
import { DeleteContentModal, PublishSuccessModal, ScheduleModal } from "./PublishDialogs";

const STATUS_TONE: Record<PostStatus, "neutral" | "accent" | "success"> = {
  draft: "neutral",
  scheduled: "accent",
  published: "success",
};

const TAB_FOR_STATUS: Record<PostStatus, string> = {
  draft: "drafts",
  scheduled: "scheduled",
  published: "published",
};

/** Plan önerisi yoksa: yarın sabah 10:00. */
const DEFAULT_SCHEDULE_HOUR = 10;

type MobilePane = "edit" | "preview";
type Dialog = "schedule" | "success" | "delete" | null;

/**
 * İçerik çalışma alanı (spec §19–22): solda kontroller, sağda canlı platform
 * önizlemesi. Mobilde iki sütun sıkıştırılmaz; "Düzenle | Önizle" geçişi var (spec §42).
 */
export const ContentEditor = ({ postId }: { postId: string }) => {
  const { t, language } = useT();
  const router = useRouter();
  const editor = useContentEditor(postId);
  const { post, suggestion, trend, analytics, profile, account, connected, readOnly } = editor;
  const schedulePost = useContent((state) => state.schedulePost);
  const deletePost = useContent((state) => state.deletePost);

  const [pane, setPane] = useState<MobilePane>("edit");
  const [dialog, setDialog] = useState<Dialog>(null);
  const [publishing, setPublishing] = useState(false);
  const [leaving, setLeaving] = useState(false);
  /** Planlama penceresinin açılış anı ve başlangıç değeri (render'da değil, tıklamada hesaplanır). */
  const [scheduleSeed, setScheduleSeed] = useState({ openedAt: 0, initialValue: "" });

  if (leaving) return null;
  if (!post || !profile) {
    return (
      <PageContainer>
        <EmptyState
          icon={<FileQuestion />}
          title={t("content.editor.notFoundTitle")}
          description={t("content.editor.notFoundDescription")}
          action={
            <Button asChild variant="secondary">
              <Link href="/content">{t("content.editor.back")}</Link>
            </Button>
          }
        />
      </PageContainer>
    );
  }

  const where = t(`platformLocative.${post.platform}`);

  const handlePublish = async () => {
    const problem = findPublishProblem(post);
    if (problem) {
      toast.error(
        t(`content.editor.problem.${problem}`, {
          platform: PLATFORMS[post.platform].name,
          limit: PLATFORMS[post.platform].captionLimit,
          min: fieldsFor(post.platform, post.format).media.min,
        }),
      );
      if (problem === "needsMedia" || problem === "needsMoreMedia") setPane("edit");
      return;
    }
    setPublishing(true);
    await simulateLatency(700, 1200);
    publishPost(post.id);
    setPublishing(false);
    // Onay penceresi mesajı zaten gösteriyor; aynı metni bir de toast'ta tekrarlamıyoruz.
    setDialog("success");
  };

  const openSchedule = () => {
    const now = Date.now();
    const candidates = [post.scheduledAt, suggestion?.suggestedAt].filter(
      (iso): iso is string => iso !== undefined && new Date(iso).getTime() > now,
    );
    const tomorrow = addDays(new Date(now), 1);
    tomorrow.setHours(DEFAULT_SCHEDULE_HOUR, 0, 0, 0);
    setScheduleSeed({ openedAt: now, initialValue: candidates[0] ?? tomorrow.toISOString() });
    setDialog("schedule");
  };

  const handleSchedule = (iso: string) => {
    schedulePost(post.id, iso);
    setDialog(null);
    toast.success(
      t("content.editor.scheduledToast"),
      t("content.editor.scheduledDetail", { where, date: formatDateTime(iso, language) }),
    );
  };

  const handleDelete = () => {
    setLeaving(true);
    router.replace(`/content?tab=${TAB_FOR_STATUS[post.status]}`);
    deletePost(post.id);
    toast.info(t("content.editor.deleted"));
  };

  const preview = (
    <div className="flex flex-col gap-4">
      <div className="hidden items-center justify-between lg:flex">
        <span className="text-small font-medium text-fg-secondary">
          {t("content.editor.preview")}
        </span>
        <span className="text-caption text-fg-muted">
          {PLATFORMS[post.platform].name} · {t(`formats.${post.format}`)}
        </span>
      </div>
      <PlatformPreview
        post={post}
        brandName={profile.name}
        handle={account?.handle ?? profile.handle}
        followers={account?.followers ?? 0}
        analytics={analytics}
      />
    </div>
  );

  return (
    <PageContainer className="gap-8 lg:gap-10">
      <header className="flex flex-col gap-4">
        <Link
          href={`/content?tab=${TAB_FOR_STATUS[post.status]}`}
          className="inline-flex w-fit items-center gap-1.5 text-small text-fg-secondary transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-4" aria-hidden />
          {t("content.editor.back")}
        </Link>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex min-w-0 flex-col gap-2">
            <h1 className="text-title break-words sm:text-display">
              {post.title || t("content.untitled")}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-small text-fg-muted">
              <Badge tone={STATUS_TONE[post.status]}>{t(`postStatus.${post.status}`)}</Badge>
              {post.status === "scheduled" && post.scheduledAt && (
                <span>{formatDateTime(post.scheduledAt, language)}</span>
              )}
              {!readOnly && <span>· {t("content.editor.autosaved")}</span>}
            </div>
          </div>

          {!readOnly && (
            <div className="flex shrink-0 gap-2">
              <Dropdown>
                <Dropdown.Trigger asChild>
                  <IconButton
                    label={t("content.editor.moreActions")}
                    icon={<Ellipsis />}
                    variant="ghost"
                  />
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <Dropdown.Item icon={<Trash2 />} destructive onSelect={() => setDialog("delete")}>
                    {t("common.delete")}
                  </Dropdown.Item>
                </Dropdown.Content>
              </Dropdown>
              <Button variant="secondary" onClick={openSchedule} className="flex-1 sm:flex-none">
                <CalendarClock />
                {post.status === "scheduled"
                  ? t("content.editor.reschedule")
                  : t("content.editor.schedule")}
              </Button>
              <Button
                variant="primary"
                onClick={() => void handlePublish()}
                loading={publishing}
                className="flex-1 sm:flex-none"
              >
                <Send />
                {t("content.editor.share")}
              </Button>
            </div>
          )}
        </div>
      </header>

      <SegmentedControl
        value={pane}
        onChange={setPane}
        options={[
          {
            value: "edit",
            label: readOnly ? t("content.editor.detailsTab") : t("content.editor.editTab"),
          },
          { value: "preview", label: t("content.editor.previewTab") },
        ]}
        aria-label={t("content.editor.preview")}
        className="w-full lg:hidden"
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-12">
        <div className={cn("flex min-w-0 flex-col gap-8", pane !== "edit" && "max-lg:hidden")}>
          {readOnly ? (
            <>
              {analytics && (
                <PostPerformance analytics={analytics} publishedAt={post.publishedAt} />
              )}
              <PublishedDetails caption={post.caption} hashtags={post.hashtags} />
            </>
          ) : (
            <>
              <PlatformFormatPicker
                platform={post.platform}
                format={post.format}
                available={connected}
                recommended={editor.recommended}
                onPlatformChange={editor.setPlatform}
                onFormatChange={(format) => editor.update({ format })}
              />

              {suggestion && (
                <AIInsight label={t("content.editor.whyThis")}>
                  <p>{suggestion.reasoning}</p>
                  <p className="mt-2 text-caption text-fg-secondary tabular-nums">
                    {t("content.editor.estimate", {
                      min: formatCompact(suggestion.estimate.reach[0], language),
                      max: formatCompact(suggestion.estimate.reach[1], language),
                      rate: formatPercent(suggestion.estimate.engagementRate, language),
                    })}
                    {trend && ` · ${t("content.editor.relatedTrend", { title: trend.title })}`}
                  </p>
                </AIInsight>
              )}

              <MediaField
                post={post}
                tips={editor.mediaTips}
                limits={fieldsFor(post.platform, post.format).media}
                onChange={(media) => editor.update({ media })}
              />

              <ContentFields
                post={post}
                suggestion={suggestion}
                profile={profile}
                update={editor.update}
              />
            </>
          )}
        </div>

        <aside
          className={cn(
            "min-w-0 lg:sticky lg:top-8 lg:self-start",
            pane !== "preview" && "max-lg:hidden",
          )}
          aria-label={t("content.editor.preview")}
        >
          {preview}
        </aside>
      </div>

      <ScheduleModal
        open={dialog === "schedule"}
        onOpenChange={(open) => setDialog(open ? "schedule" : null)}
        platform={post.platform}
        initialValue={scheduleSeed.initialValue}
        openedAt={scheduleSeed.openedAt}
        onConfirm={handleSchedule}
      />
      <PublishSuccessModal
        open={dialog === "success"}
        onOpenChange={(open) => setDialog(open ? "success" : null)}
        platform={post.platform}
        onViewPublished={() => router.push("/content?tab=published")}
      />
      <DeleteContentModal
        open={dialog === "delete"}
        onOpenChange={(open) => setDialog(open ? "delete" : null)}
        title={post.title || t("content.untitled")}
        onConfirm={handleDelete}
      />
    </PageContainer>
  );
};

/** Yayınlanan içerik düzenlenemez; metni okunur biçimde gösterilir. */
const PublishedDetails = ({ caption, hashtags }: { caption: string; hashtags: string[] }) => {
  const { t } = useT();
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-heading">{t("content.editor.caption")}</h2>
      <p className="text-body whitespace-pre-line text-fg-secondary">{caption}</p>
      {hashtags.length > 0 && <p className="text-small text-accent-text">{hashtags.join(" ")}</p>}
    </section>
  );
};
