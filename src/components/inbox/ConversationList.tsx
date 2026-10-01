"use client";

import { Avatar } from "@/components/ui/Avatar";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { formatRelative } from "@/lib/format";
import { lastMessage } from "@/lib/inbox";
import type { Conversation } from "@/types";

type ConversationListProps = {
  conversations: Conversation[];
  activeId?: string;
  onOpen: (id: string) => void;
};

/** DM listesi: okunmamışlar kalın ve noktalı; son mesajı marka attıysa "Sen:" ile başlar. */
export const ConversationList = ({ conversations, activeId, onOpen }: ConversationListProps) => {
  const { t, language } = useT();
  return (
    <ul className="flex flex-col gap-1" aria-label={t("inbox.conversations")}>
      {conversations.map((conversation) => {
        const last = lastMessage(conversation);
        const active = conversation.id === activeId;
        return (
          <li key={conversation.id}>
            <button
              type="button"
              onClick={() => onOpen(conversation.id)}
              aria-current={active ? "true" : undefined}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors",
                active ? "bg-surface-muted" : "hover:bg-surface-muted/60",
              )}
            >
              <Avatar
                name={conversation.customer.name}
                src={conversation.customer.avatarUrl}
                size="md"
              />
              <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="flex items-baseline justify-between gap-2">
                  <span
                    className={cn(
                      "truncate text-body text-fg",
                      conversation.unread ? "font-semibold" : "font-medium",
                    )}
                  >
                    {conversation.customer.name}
                  </span>
                  {last && (
                    <span className="shrink-0 text-caption text-fg-muted">
                      {formatRelative(last.sentAt, language)}
                    </span>
                  )}
                </span>
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      "truncate text-small",
                      conversation.unread ? "text-fg" : "text-fg-muted",
                    )}
                  >
                    {last?.from === "brand" && `${t("inbox.you")}: `}
                    {last?.text}
                  </span>
                  {conversation.unread && (
                    <span
                      className="size-2 shrink-0 rounded-full bg-accent"
                      aria-label={t("inbox.unread")}
                    />
                  )}
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
