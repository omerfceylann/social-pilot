"use client";

import { ArrowLeft, Check, CheckCheck, Pencil, RefreshCw, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AIBadge } from "@/components/ai/AIBadge";
import { PlatformIcon } from "@/components/social/PlatformIcon";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { Textarea } from "@/components/ui/Input";
import { Skeleton } from "@/components/ui/Skeleton";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { formatDateTime } from "@/lib/format";
import { awaitsBrandReply } from "@/lib/inbox";
import { revealVariants, transition } from "@/lib/motion";
import { PLATFORMS } from "@/mock/platforms";
import { generateMessageSuggestion } from "@/services/aiService";
import { useBrand } from "@/store/useBrand";
import { useInbox } from "@/store/useInbox";
import { sendDirectMessage } from "@/store/workspace";
import type { Conversation, DirectMessage, MessageStatus } from "@/types";

type ConversationThreadProps = {
  conversation: Conversation;
  /** Mobilde listeye dönüş. */
  onBack: () => void;
};

/**
 * Bir DM konuşması (spec §27): kişi ve platform kimliği, mesaj geçmişi, saatler,
 * mesaj durumu; altta ✦ AI Yanıt Önerisi (kabul et / düzenle / yeniden üret) ve yazma alanı.
 */
export const ConversationThread = ({ conversation, onBack }: ConversationThreadProps) => {
  const { t } = useT();
  const markConversationRead = useInbox((state) => state.markConversationRead);
  const [draft, setDraft] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { customer, platform } = conversation;

  // Konuşma açılınca okundu sayılır (rozet düşer).
  useEffect(() => {
    if (conversation.unread) markConversationRead(conversation.id);
  }, [conversation.id, conversation.unread, markConversationRead]);

  // Yeni mesajda en alta kay. scrollIntoView sayfayı da kaydırırdı; sadece mesaj alanını kaydırırız.
  useEffect(() => {
    const element = scrollRef.current;
    if (element) element.scrollTop = element.scrollHeight;
  }, [conversation.messages.length]);

  const send = (text: string) => {
    if (!text.trim()) return;
    sendDirectMessage(conversation.id, text.trim());
    setDraft("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter gönderir, Shift+Enter yeni satır (mesajlaşma uygulamalarındaki alışkanlık).
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      send(draft);
    }
  };

  return (
    <section className="flex h-full min-h-0 flex-col" aria-label={customer.name}>
      <header className="flex items-center gap-3 border-b border-border px-4 py-3">
        <IconButton
          label={t("inbox.backToList")}
          icon={<ArrowLeft />}
          size="sm"
          showTooltip={false}
          onClick={onBack}
          className="-ml-1 lg:hidden"
        />
        <Avatar name={customer.name} src={customer.avatarUrl} size="md" />
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-body font-semibold text-fg">{customer.name}</span>
          <span className="flex items-center gap-1.5 truncate text-caption text-fg-muted">
            <PlatformIcon platform={platform} colored className="size-3.5" />
            {PLATFORMS[platform].name} · @{customer.handle}
          </span>
        </span>
      </header>

      <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto px-4 py-5">
        <ol className="flex flex-col gap-3">
          <AnimatePresence initial={false}>
            {conversation.messages.map((message) => (
              <motion.li
                key={message.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={transition.base}
                className={cn("flex", message.from === "brand" ? "justify-end" : "justify-start")}
              >
                <MessageBubble message={message} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>
      </div>

      <div className="flex flex-col gap-3 border-t border-border p-4">
        {awaitsBrandReply(conversation) && (
          <ReplySuggestion
            key={conversation.messages.length}
            conversation={conversation}
            onAccept={send}
            onEdit={(text) => {
              setDraft(text);
              inputRef.current?.focus();
            }}
          />
        )}
        <form
          className="flex items-end gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            send(draft);
          }}
        >
          <label htmlFor={`dm-${conversation.id}`} className="sr-only">
            {t("inbox.messagePlaceholder")}
          </label>
          <Textarea
            ref={inputRef}
            id={`dm-${conversation.id}`}
            rows={1}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t("inbox.messagePlaceholder")}
            className="[field-sizing:content] max-h-32 min-h-11 resize-none"
          />
          <IconButton
            type="submit"
            label={t("common.send")}
            icon={<Send />}
            variant="primary"
            disabled={!draft.trim()}
          />
        </form>
      </div>
    </section>
  );
};

const STATUS_ICON: Record<MessageStatus, typeof Check> = {
  sent: Check,
  delivered: CheckCheck,
  read: CheckCheck,
};

const MessageBubble = ({ message }: { message: DirectMessage }) => {
  const { t, language } = useT();
  const fromBrand = message.from === "brand";
  const StatusIcon = message.status ? STATUS_ICON[message.status] : null;
  return (
    <div className={cn("flex max-w-[80%] flex-col gap-1", fromBrand ? "items-end" : "items-start")}>
      <p
        className={cn(
          "rounded-2xl px-3.5 py-2 text-body whitespace-pre-line",
          fromBrand
            ? "rounded-br-md bg-accent text-accent-fg"
            : "rounded-bl-md bg-surface-muted text-fg",
        )}
      >
        {message.text}
      </p>
      <span className="flex items-center gap-1 text-caption text-fg-muted">
        {formatDateTime(message.sentAt, language, { hour: "2-digit", minute: "2-digit" })}
        {message.status && StatusIcon && (
          <>
            <span aria-hidden>·</span>
            <StatusIcon
              className={cn("size-3.5", message.status === "read" && "text-accent-text")}
              aria-hidden
            />
            {t(`inbox.status.${message.status}`)}
          </>
        )}
      </span>
    </div>
  );
};

type SuggestionState = { status: "loading" } | { status: "ready"; index: number; text: string };

type ReplySuggestionProps = {
  conversation: Conversation;
  onAccept: (text: string) => void;
  onEdit: (text: string) => void;
};

/** ✦ AI Yanıt Önerisi: kabul et (gönderir), düzenle (yazma alanına alır), yeniden üret. */
const ReplySuggestion = ({ conversation, onAccept, onEdit }: ReplySuggestionProps) => {
  const { t } = useT();
  const rules = useBrand((state) => state.profile?.rules);
  const [state, setState] = useState<SuggestionState>({ status: "loading" });
  const [requestIndex, setRequestIndex] = useState(0);
  // Sadece öneri havuzuna bağlı: konuşma "okundu" işaretlenince öneri yeniden yüklenmez.
  const suggestions = conversation.aiSuggestions;

  useEffect(() => {
    if (!rules) return;
    let cancelled = false;
    void generateMessageSuggestion({ suggestions, index: requestIndex, rules }).then((result) => {
      if (!cancelled) setState({ status: "ready", ...result });
    });
    return () => {
      cancelled = true;
    };
  }, [suggestions, requestIndex, rules]);

  const regenerate = () => {
    setState({ status: "loading" });
    setRequestIndex((index) => index + 1);
  };

  return (
    <div className="flex flex-col gap-2.5 rounded-lg border border-accent/15 bg-accent-soft p-3.5">
      <AIBadge>{state.status === "loading" ? t("ai.thinking") : t("ai.replySuggestion")}</AIBadge>
      {state.status === "loading" ? (
        <div className="flex flex-col gap-2" aria-busy>
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      ) : (
        <motion.div variants={revealVariants} initial="initial" animate="animate" key={state.text}>
          <p className="text-body text-fg">{state.text}</p>
        </motion.div>
      )}
      <div className="flex flex-wrap justify-end gap-2">
        <Button
          size="sm"
          variant="ghost"
          onClick={regenerate}
          disabled={state.status === "loading"}
        >
          <RefreshCw />
          {t("inbox.regenerate")}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          disabled={state.status === "loading"}
          onClick={() => state.status === "ready" && onEdit(state.text)}
        >
          <Pencil />
          {t("common.edit")}
        </Button>
        <Button
          size="sm"
          variant="primary"
          disabled={state.status === "loading"}
          onClick={() => state.status === "ready" && onAccept(state.text)}
        >
          <Send />
          {t("inbox.accept")}
        </Button>
      </div>
    </div>
  );
};
