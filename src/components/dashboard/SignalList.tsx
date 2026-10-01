"use client";

import {
  CalendarClock,
  ChevronRight,
  Lightbulb,
  MessageCircle,
  Send,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useT } from "@/i18n/useT";
import { formatRelative } from "@/lib/format";
import { revealVariants, staggerContainer } from "@/lib/motion";
import type { Post } from "@/types";

type Signal = { href: string; icon: LucideIcon; text: string; meta?: string };

type SignalListProps = {
  opportunities: number;
  pendingComments: number;
  unreadMessages: number;
  nextPost?: Post;
};

const MAX_SIGNALS = 3;

/**
 * Az sayıda önemli sinyal (spec §9). Bildirim duvarı değil: sıfır olanlar gizli,
 * en fazla üç tane; her biri ilgili bölüme götürür.
 */
export const SignalList = ({
  opportunities,
  pendingComments,
  unreadMessages,
  nextPost,
}: SignalListProps) => {
  const { t, language } = useT();
  const signals: Signal[] = [];
  if (opportunities > 0) {
    signals.push({
      href: "/content",
      icon: Lightbulb,
      text: t("dashboard.signalOpportunities", { count: opportunities }),
    });
  }
  if (pendingComments > 0) {
    signals.push({
      href: "/inbox",
      icon: MessageCircle,
      text: t("dashboard.signalComments", { count: pendingComments }),
    });
  } else if (unreadMessages > 0) {
    signals.push({
      href: "/inbox",
      icon: Send,
      text: t("dashboard.signalMessages", { count: unreadMessages }),
    });
  }
  if (nextPost?.scheduledAt) {
    signals.push({
      href: "/calendar",
      icon: CalendarClock,
      text: t("dashboard.signalNextPost", { title: nextPost.title }),
      meta: formatRelative(nextPost.scheduledAt, language),
    });
  }
  if (signals.length === 0) return null;

  return (
    <section aria-label={t("dashboard.signals")}>
      <motion.ul
        variants={staggerContainer(0.06)}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 gap-2 sm:grid-cols-3"
      >
        {signals.slice(0, MAX_SIGNALS).map(({ href, icon: Icon, text, meta }) => (
          <motion.li key={text} variants={revealVariants}>
            <Link
              href={href}
              className="group flex h-full items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:border-border-strong"
            >
              <Icon className="size-4 shrink-0 text-accent-text" aria-hidden />
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-small font-medium text-fg">{text}</span>
                {meta && <span className="text-caption text-fg-muted">{meta}</span>}
              </span>
              <ChevronRight
                className="size-4 shrink-0 text-fg-muted transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
