"use client";

import {
  Check,
  FileText,
  Heart,
  MessageCircle,
  Pencil,
  Repeat2,
  Send,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { AIBadge } from "@/components/ai/AIBadge";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Textarea } from "@/components/ui/Input";
import { Skeleton } from "@/components/ui/Skeleton";
import { useT } from "@/i18n/useT";
import { formatCompact, formatRelative } from "@/lib/format";
import { revealVariants, transition } from "@/lib/motion";
import { generateReply } from "@/services/aiService";
import { useBrand } from "@/store/useBrand";
import { useInbox } from "@/store/useInbox";
import { toast } from "@/store/useToasts";
import type { Comment, CommentIntent } from "@/types";

const INTENT_TONE: Record<CommentIntent, "accent" | "success" | "danger" | "neutral"> = {
  question: "accent",
  purchase: "success",
  praise: "success",
  complaint: "danger",
  feedback: "neutral",
};

type CommentCardProps = { comment: Comment };

/**
 * Bir yorum ve Smart Comment Replier (spec §26): önce orijinal yorum (platformun
 * kendi düzeninde), altında ✦ AI Yanıtı. AI metni her zaman ayrı bir kutuda ve
 * rozetle durur; kullanıcının yazdığı ya da gönderdiği yanıtla karışmaz.
 */
export const CommentCard = ({ comment }: CommentCardProps) => {
  const { t } = useT();
  return (
    <Card padding="none" className="flex flex-col gap-4 p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="flex min-w-0 items-center gap-1.5 text-caption text-fg-muted">
          <FileText className="size-3.5 shrink-0" aria-hidden />
          <span className="truncate">{comment.postTitle}</span>
        </span>
        <Badge tone={INTENT_TONE[comment.intent]}>{t(`commentIntent.${comment.intent}`)}</Badge>
      </div>

      <PlatformComment comment={comment} />

      <AnimatePresence mode="wait" initial={false}>
        {comment.reply ? (
          <motion.div key="replied" variants={revealVariants} initial="initial" animate="animate">
            <BrandReply comment={comment} />
          </motion.div>
        ) : (
          <motion.div key="replier" exit={{ opacity: 0, y: -4 }} transition={transition.fast}>
            <SmartReplier comment={comment} />
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

/**
 * Yorumun kendisi, platformun düzenine benzer biçimde: Instagram'da kullanıcı adı
 * metnin başında, YouTube'da @kullanıcı, X'te ad + @kullanıcı, LinkedIn'de gri balon.
 */
const PlatformComment = ({ comment }: CommentCardProps) => {
  const { t, language } = useT();
  const { author } = comment;
  const time = formatRelative(comment.createdAt, language);
  const likes = formatCompact(comment.likes, language);

  const avatar = <Avatar name={author.name} src={author.avatarUrl} size="sm" />;
  const meta = (children: ReactNode) => (
    <div className="flex items-center gap-3 text-caption text-fg-muted">{children}</div>
  );

  switch (comment.platform) {
    case "instagram":
      return (
        <div className="flex gap-3">
          {avatar}
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <p className="text-body text-fg">
              <span className="mr-1.5 font-semibold">{author.handle}</span>
              {comment.text}
            </p>
            {meta(
              <>
                <span>{time}</span>
                <span>{t("inbox.likes", { count: likes })}</span>
                <span className="font-medium">{t("inbox.reply")}</span>
              </>,
            )}
          </div>
          <Heart className="mt-1 size-3.5 shrink-0 text-fg-muted" aria-hidden />
        </div>
      );
    case "tiktok":
      return (
        <div className="flex gap-3">
          {avatar}
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <span className="text-small text-fg-muted">{author.name}</span>
            <p className="text-body text-fg">{comment.text}</p>
            {meta(
              <>
                <span>{time}</span>
                <span className="font-medium">{t("inbox.reply")}</span>
              </>,
            )}
          </div>
          <span className="flex shrink-0 flex-col items-center gap-0.5 text-caption text-fg-muted">
            <Heart className="size-4" aria-hidden />
            {likes}
          </span>
        </div>
      );
    case "youtube":
      return (
        <div className="flex gap-3">
          {avatar}
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <span className="text-small">
              <span className="font-medium text-fg">@{author.handle}</span>
              <span className="ml-1.5 text-fg-muted">{time}</span>
            </span>
            <p className="text-body text-fg">{comment.text}</p>
            {meta(
              <>
                <span className="flex items-center gap-1">
                  <ThumbsUp className="size-3.5" aria-hidden />
                  {likes}
                </span>
                <ThumbsDown className="size-3.5" aria-hidden />
                <span className="font-medium">{t("inbox.reply")}</span>
              </>,
            )}
          </div>
        </div>
      );
    case "x":
      return (
        <div className="flex gap-3">
          {avatar}
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <span className="truncate text-small">
              <span className="font-bold text-fg">{author.name}</span>
              <span className="ml-1 text-fg-muted">
                @{author.handle} · {time}
              </span>
            </span>
            <p className="text-body text-fg">{comment.text}</p>
            <div className="flex max-w-60 items-center justify-between pt-0.5 text-caption text-fg-muted">
              <MessageCircle className="size-3.5" aria-hidden />
              <Repeat2 className="size-3.5" aria-hidden />
              <span className="flex items-center gap-1">
                <Heart className="size-3.5" aria-hidden />
                {likes}
              </span>
            </div>
          </div>
        </div>
      );
    case "linkedin":
      return (
        <div className="flex gap-3">
          {avatar}
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <div className="rounded-lg rounded-tl-none bg-surface-muted px-3 py-2">
              <span className="flex items-baseline justify-between gap-2 text-small">
                <span className="font-semibold text-fg">{author.name}</span>
                <span className="shrink-0 text-caption text-fg-muted">{time}</span>
              </span>
              <p className="mt-1 text-body text-fg">{comment.text}</p>
            </div>
            {meta(
              <>
                <span className="font-medium">{t("inbox.like")}</span>
                <span className="font-medium">{t("inbox.reply")}</span>
                <span className="flex items-center gap-1">
                  <ThumbsUp className="size-3" aria-hidden />
                  {likes}
                </span>
              </>,
            )}
          </div>
        </div>
      );
    default:
      return assertNever(comment.platform);
  }
};

const assertNever = (value: never): never => {
  throw new Error(`Bilinmeyen platform: ${String(value)}`);
};

type ReplierState =
  | { status: "loading" }
  | { status: "suggested"; aiText: string }
  | { status: "editing"; aiText: string; draft: string };

/** ✦ AI Yanıtı + [Düzenle] [Gönder]. Düzenlenen metin artık kullanıcınındır, AI rozeti kalkar. */
const SmartReplier = ({ comment }: CommentCardProps) => {
  const { t } = useT();
  const rules = useBrand((state) => state.profile?.rules);
  const replyToComment = useInbox((state) => state.replyToComment);
  const [state, setState] = useState<ReplierState>({ status: "loading" });

  useEffect(() => {
    if (!rules) return;
    let cancelled = false;
    void generateReply(comment, rules).then((aiText) => {
      if (!cancelled) setState({ status: "suggested", aiText });
    });
    return () => {
      cancelled = true;
    };
  }, [comment, rules]);

  const send = (text: string, edited: boolean) => {
    if (!text.trim()) return;
    replyToComment(comment.id, text.trim(), edited);
    toast.success(t("toasts.replySent"));
  };

  if (state.status === "loading") {
    return (
      <div
        className="flex flex-col gap-2 rounded-lg border border-accent/15 bg-accent-soft p-3.5"
        aria-busy
      >
        <AIBadge>{t("ai.thinking")}</AIBadge>
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-3/5" />
      </div>
    );
  }

  if (state.status === "editing") {
    return (
      <motion.form
        variants={revealVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          send(state.draft, state.draft.trim() !== state.aiText);
        }}
      >
        <label htmlFor={`reply-${comment.id}`} className="text-small font-medium text-fg">
          {t("inbox.yourReply")}
        </label>
        <Textarea
          id={`reply-${comment.id}`}
          rows={3}
          autoFocus
          value={state.draft}
          onChange={(event) => setState({ ...state, draft: event.target.value })}
        />
        <div className="flex justify-end gap-2">
          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={() => setState({ status: "suggested", aiText: state.aiText })}
          >
            {t("common.cancel")}
          </Button>
          <Button type="submit" size="sm" variant="primary" disabled={!state.draft.trim()}>
            <Send />
            {t("common.send")}
          </Button>
        </div>
      </motion.form>
    );
  }

  return (
    <motion.div
      variants={revealVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col gap-3 rounded-lg border border-accent/15 bg-accent-soft p-3.5"
    >
      <AIBadge>{t("ai.reply")}</AIBadge>
      <p className="text-body text-fg">{state.aiText}</p>
      <div className="flex justify-end gap-2">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setState({ status: "editing", aiText: state.aiText, draft: state.aiText })}
        >
          <Pencil />
          {t("common.edit")}
        </Button>
        <Button size="sm" variant="primary" onClick={() => send(state.aiText, false)}>
          <Send />
          {t("common.send")}
        </Button>
      </div>
    </motion.div>
  );
};

/** Gönderilmiş yanıt: markanın kendi yanıtı gibi, yorumun altında içeriden. AI rozeti yok. */
const BrandReply = ({ comment }: CommentCardProps) => {
  const { t, language } = useT();
  const profile = useBrand((state) => state.profile);
  if (!comment.reply) return null;
  return (
    <div className="ml-4 flex gap-3 border-l-2 border-border pl-4 sm:ml-11">
      <Avatar name={profile?.name ?? ""} size="xs" className="mt-0.5" />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="text-body text-fg">
          <span className="mr-1.5 font-semibold">{profile?.handle}</span>
          {comment.reply.text}
        </p>
        <span className="flex items-center gap-1.5 text-caption text-fg-muted">
          <Check className="size-3.5 text-success" aria-hidden />
          {t("inbox.replied", { time: formatRelative(comment.reply.sentAt, language) })}
          {comment.reply.edited && ` · ${t("inbox.editedBeforeSend")}`}
        </span>
      </div>
    </div>
  );
};
