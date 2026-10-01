"use client";

import { Inbox, Link2, MessageCircle, MessagesSquare } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { PageContainer, PageHeader } from "@/components/layout/PageHeader";
import { PlatformIcon } from "@/components/social/PlatformIcon";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { useInboxView, type InboxViewKind } from "@/hooks/useInboxView";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { revealVariants, staggerContainer } from "@/lib/motion";
import type { Comment } from "@/types";
import { CommentCard } from "./CommentCard";
import { ConversationList } from "./ConversationList";
import { ConversationThread } from "./ConversationThread";
import { PlatformSwitcher } from "./PlatformSwitcher";

/**
 * Gelen Kutusu (spec §24–27): CRM değil. Üstte platform, altında Yorumlar | Mesajlar.
 * Platform değişince yorumlar, mesajlar ve platform rengi birlikte değişir.
 */
export const InboxView = () => {
  const { t } = useT();
  const inbox = useInboxView();
  const { platform, view } = inbox;

  if (!platform) {
    return (
      <PageContainer>
        <PageHeader title={t("nav.inbox")} description={t("inbox.subtitle")} />
        <EmptyState
          icon={<Link2 />}
          title={t("inbox.noAccountsTitle")}
          description={t("inbox.noAccountsDescription")}
          action={
            <Button asChild variant="primary">
              <Link href="/">{t("empty.connectAccount")}</Link>
            </Button>
          }
        />
      </PageContainer>
    );
  }

  const counts = inbox.pendingByPlatform.get(platform);
  const viewLabel = (kind: InboxViewKind, count = 0) => {
    const label = kind === "comments" ? t("inbox.comments") : t("inbox.messages");
    return count > 0 ? `${label} · ${count}` : label;
  };

  return (
    <PageContainer className="gap-8">
      <PageHeader title={t("nav.inbox")} description={t("inbox.subtitle")} />

      <div className="flex flex-col gap-6">
        <PlatformSwitcher
          platforms={inbox.connected}
          value={platform}
          onChange={inbox.selectPlatform}
          pending={inbox.pendingByPlatform}
        />
        <SegmentedControl
          value={view}
          onChange={inbox.selectView}
          options={[
            { value: "comments", label: viewLabel("comments", counts?.comments) },
            { value: "messages", label: viewLabel("messages", counts?.messages) },
          ]}
          aria-label={t("nav.inbox")}
          className="self-start"
        />

        {/* key: platform/görünüm değişince içerik yumuşakça yeniden belirir. */}
        <motion.div
          key={`${platform}-${view}`}
          variants={revealVariants}
          initial="initial"
          animate="animate"
        >
          {view === "comments" ? (
            <CommentsPanel pending={inbox.comments.pending} answered={inbox.comments.answered} />
          ) : !inbox.supportsMessages ? (
            <EmptyState
              icon={<PlatformIcon platform={platform} />}
              title={t("inbox.noDirectMessagesTitle", { where: t(`platformLocative.${platform}`) })}
              description={t("inbox.noDirectMessagesDescription")}
              action={
                <Button variant="secondary" onClick={() => inbox.selectView("comments")}>
                  {t("inbox.goToComments")}
                </Button>
              }
            />
          ) : inbox.conversations.length === 0 ? (
            <EmptyState
              icon={<MessagesSquare />}
              title={t("empty.inboxClean")}
              description={t("inbox.noMessagesDescription")}
            />
          ) : (
            <Card
              padding="none"
              // Yükseklik ekrana göre: başlık + seçiciler (~21rem) ile birlikte tek ekrana sığar,
              // yazma alanına odaklanınca sayfa kaymaz.
              className="grid h-[clamp(440px,calc(100dvh-21rem),720px)] grid-cols-1 overflow-hidden lg:grid-cols-[320px_minmax(0,1fr)]"
            >
              <div
                className={cn(
                  "min-h-0 overflow-y-auto border-border p-2 lg:border-r",
                  inbox.activeConversation && "max-lg:hidden",
                )}
              >
                <ConversationList
                  conversations={inbox.conversations}
                  activeId={inbox.activeConversation?.id}
                  onOpen={inbox.openConversation}
                />
              </div>
              <div className={cn("min-h-0", !inbox.activeConversation && "max-lg:hidden")}>
                {inbox.activeConversation ? (
                  <ConversationThread
                    key={inbox.activeConversation.id}
                    conversation={inbox.activeConversation}
                    onBack={() => inbox.openConversation(undefined)}
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
                    <span className="flex size-12 items-center justify-center rounded-full bg-surface-muted text-fg-secondary">
                      <MessageCircle className="size-5" aria-hidden />
                    </span>
                    <p className="text-body text-fg-secondary">{t("inbox.selectConversation")}</p>
                  </div>
                )}
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </PageContainer>
  );
};

type CommentsPanelProps = { pending: Comment[]; answered: Comment[] };

/** Yanıt bekleyenler önce; yanıtlananlar altta, ayrı başlıkla. */
const CommentsPanel = ({ pending, answered }: CommentsPanelProps) => {
  const { t } = useT();

  if (pending.length === 0 && answered.length === 0) {
    return (
      <EmptyState
        icon={<Inbox />}
        title={t("inbox.noCommentsTitle")}
        description={t("inbox.noCommentsDescription")}
      />
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {pending.length > 0 ? (
        <CommentList comments={pending} />
      ) : (
        <EmptyState icon={<Inbox />} title={t("empty.inboxClean")} className="py-8" />
      )}
      {answered.length > 0 && (
        <section className="flex flex-col gap-3" aria-labelledby="answered-heading">
          <h2 id="answered-heading" className="text-heading text-fg-secondary">
            {t("inbox.answered")}
          </h2>
          <CommentList comments={answered} />
        </section>
      )}
    </div>
  );
};

const CommentList = ({ comments }: { comments: Comment[] }) => (
  <motion.ul
    variants={staggerContainer(0.05)}
    initial="initial"
    animate="animate"
    className="flex flex-col gap-3"
  >
    {comments.map((comment) => (
      <motion.li key={comment.id} variants={revealVariants} layout="position">
        <CommentCard comment={comment} />
      </motion.li>
    ))}
  </motion.ul>
);
