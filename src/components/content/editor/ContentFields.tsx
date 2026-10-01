"use client";

import { ChevronDown, Music2, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useId, useState, type ReactNode } from "react";
import { AIBadge } from "@/components/ai/AIBadge";
import { IconButton } from "@/components/ui/IconButton";
import { Input, Textarea } from "@/components/ui/Input";
import { TagInput } from "@/components/ui/TagInput";
import type { ContentEditorState } from "@/hooks/useContentEditor";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { preferredMusic, supportsMusic } from "@/lib/content";
import { transition } from "@/lib/motion";
import { POPULAR_TRACKS } from "@/mock/music";
import { PLATFORMS } from "@/mock/platforms";
import {
  generateFieldSuggestions,
  type EditableField,
  type FieldSuggestionMap,
} from "@/services/aiService";
import type { MusicTrack, Post, PostSuggestion } from "@/types";
import { AIAlternatives } from "./AIAlternatives";

const sameTags = (a: string[], b: string[]) =>
  a.length === b.length && a.every((tag, index) => tag === b[index]);
const sameTrack = (a: MusicTrack | undefined, b: MusicTrack | undefined) =>
  a?.title === b?.title && a?.artist === b?.artist;
const trackKey = (track: MusicTrack) => `${track.title}·${track.artist}`;

/**
 * Alanın üstündeki işaret:
 * - "ai": değer AI'ın en uygun gördüğü seçenek → ✦ AI Önerisi
 * - "edited": kullanıcı elle yazdı → Düzenlendi
 * - null: listeden başka bir öneri seçildi ya da içerik öneriden gelmedi → işaret yok
 */
type Provenance = "ai" | "edited" | null;

type EditorFieldProps = {
  label: string;
  provenance: Provenance;
  /** Alternatif önerisi olan alanlarda: panel açık mı? */
  open?: boolean;
  onToggle?: () => void;
  alternatives?: ReactNode;
  meta?: ReactNode;
  error?: string;
  children: (ids: { controlId: string; describedBy?: string }) => ReactNode;
};

/**
 * Editör alanı: etiket, kaynak işareti (✦ AI Önerisi / Düzenlendi), kontrol ve
 * altında açılan "Diğer AI önerileri". Alana odaklanmak da paneli açar (spec §19).
 */
const EditorField = ({
  label,
  provenance,
  open = false,
  onToggle,
  alternatives,
  meta,
  error,
  children,
}: EditorFieldProps) => {
  const { t } = useT();
  const controlId = useId();
  const errorId = `${controlId}-error`;
  const panelId = `${controlId}-alternatives`;

  return (
    <div
      className="flex flex-col gap-2"
      onFocusCapture={(event) => {
        // Sadece kontrolün kendisine odaklanınca aç; panel içindeki butonlar kapatmasın.
        if (!open && onToggle && event.target.id === controlId) onToggle();
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={controlId} className="text-small font-medium text-fg">
          {label}
        </label>
        <div className="flex items-center gap-3">
          {meta}
          {provenance === "ai" && <AIBadge>{t("ai.suggestion")}</AIBadge>}
          {provenance === "edited" && (
            <span className="text-caption text-fg-muted">{t("content.editor.edited")}</span>
          )}
          {onToggle && (
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={open}
              aria-controls={panelId}
              className="inline-flex items-center gap-1 rounded-md text-caption font-medium text-accent-text hover:underline"
            >
              {t("content.editor.alternatives")}
              <ChevronDown
                className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")}
                aria-hidden
              />
            </button>
          )}
        </div>
      </div>
      {children({ controlId, describedBy: error ? errorId : undefined })}
      {error && (
        <p id={errorId} role="alert" className="text-caption text-danger">
          {error}
        </p>
      )}
      <AnimatePresence initial={false}>
        {open && alternatives && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={transition.base}
            className="overflow-hidden"
          >
            <div className="pt-1">{alternatives}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

type ContentFieldsProps = Pick<ContentEditorState, "profile" | "update"> & {
  post: Post;
  suggestion?: PostSuggestion;
};

/** Başlık, caption, hashtag, müzik ve CTA alanları. */
export const ContentFields = ({ post, suggestion, profile, update }: ContentFieldsProps) => {
  const { t } = useT();
  const [openField, setOpenField] = useState<EditableField | null>(null);
  const rules = profile?.rules;
  const toggleField = (field: EditableField) => () =>
    setOpenField(openField === field ? null : field);
  /** Metin alanlarının alternatifleri öneriden gelir; öneri yoksa panel de yok. */
  const toggle = (field: EditableField) => (suggestion && rules ? toggleField(field) : undefined);

  /** AI'ın en uygun seçeneği listenin başında; kullanıcı her zaman ona dönebilir. */
  const load =
    <Field extends EditableField>(
      field: Field,
      preferred: FieldSuggestionMap[Field][number] | undefined,
    ) =>
    async (): Promise<FieldSuggestionMap[Field][number][]> => {
      if (!suggestion || !rules) return [];
      const alternatives = await generateFieldSuggestions(field, suggestion.alternatives, rules);
      return preferred === undefined ? alternatives : [preferred, ...alternatives];
    };

  const provenance = (isPreferred: boolean, isAlternative: boolean): Provenance => {
    if (!suggestion || isPreferred) return suggestion ? "ai" : null;
    return isAlternative ? null : "edited";
  };
  const textProvenance = (field: "title" | "caption" | "cta", value: string) =>
    provenance(
      suggestion?.[field] === value,
      suggestion?.alternatives[field].includes(value) ?? false,
    );

  const captionLimit = PLATFORMS[post.platform].captionLimit;
  const captionTooLong = post.caption.length > captionLimit;
  const showMusic = supportsMusic(post.platform, post.format);
  const preferredTrack = suggestion ? preferredMusic(suggestion) : undefined;
  const isPopular = (track: MusicTrack) => POPULAR_TRACKS.some((item) => sameTrack(item, track));

  return (
    <div className="flex flex-col gap-6">
      <EditorField
        label={t("content.editor.title")}
        provenance={textProvenance("title", post.title)}
        open={openField === "title"}
        onToggle={toggle("title")}
        alternatives={
          <AIAlternatives<string>
            load={load("title", suggestion?.title)}
            getKey={(item) => item}
            render={(item) => item}
            isSelected={(item) => item === post.title}
            isPreferred={(item) => item === suggestion?.title}
            onSelect={(title) => update({ title })}
          />
        }
      >
        {({ controlId }) => (
          <Input
            id={controlId}
            value={post.title}
            onChange={(event) => update({ title: event.target.value })}
            placeholder={t("content.editor.titlePlaceholder")}
          />
        )}
      </EditorField>

      <EditorField
        label={t("content.editor.caption")}
        provenance={textProvenance("caption", post.caption)}
        open={openField === "caption"}
        onToggle={toggle("caption")}
        meta={
          <span
            className={cn(
              "text-caption tabular-nums",
              captionTooLong ? "text-danger" : "text-fg-muted",
            )}
          >
            {post.caption.length}/{captionLimit}
          </span>
        }
        error={
          captionTooLong
            ? t("content.editor.captionTooLong", {
                platform: PLATFORMS[post.platform].name,
                limit: captionLimit,
              })
            : undefined
        }
        alternatives={
          <AIAlternatives<string>
            load={load("caption", suggestion?.caption)}
            getKey={(item) => item}
            render={(item) => <span className="line-clamp-3 whitespace-pre-line">{item}</span>}
            isSelected={(item) => item === post.caption}
            isPreferred={(item) => item === suggestion?.caption}
            onSelect={(caption) => update({ caption })}
          />
        }
      >
        {({ controlId, describedBy }) => (
          <Textarea
            id={controlId}
            rows={6}
            value={post.caption}
            onChange={(event) => update({ caption: event.target.value })}
            placeholder={t("content.editor.captionPlaceholder")}
            aria-invalid={captionTooLong || undefined}
            aria-describedby={describedBy}
          />
        )}
      </EditorField>

      <EditorField
        label={t("content.editor.hashtags")}
        provenance={provenance(
          suggestion ? sameTags(suggestion.hashtags, post.hashtags) : false,
          suggestion?.alternatives.hashtags.some((set) => sameTags(set, post.hashtags)) ?? false,
        )}
        open={openField === "hashtags"}
        onToggle={toggle("hashtags")}
        alternatives={
          <AIAlternatives<string[]>
            load={load("hashtags", suggestion?.hashtags)}
            getKey={(item) => item.join(" ")}
            render={(item) => <span className="text-accent-text">{item.join(" ")}</span>}
            isSelected={(item) => sameTags(item, post.hashtags)}
            isPreferred={(item) => (suggestion ? sameTags(item, suggestion.hashtags) : false)}
            onSelect={(hashtags) => update({ hashtags })}
          />
        }
      >
        {({ controlId }) => (
          <TagInput
            id={controlId}
            value={post.hashtags}
            onChange={(hashtags) =>
              update({ hashtags: hashtags.map((tag) => (tag.startsWith("#") ? tag : `#${tag}`)) })
            }
            placeholder={t("content.editor.hashtagsPlaceholder")}
            removeLabel={(tag) => t("content.editor.removeTag", { tag })}
          />
        )}
      </EditorField>

      {showMusic && (
        <EditorField
          label={t("content.editor.music")}
          provenance={provenance(sameTrack(preferredTrack, post.music), post.music !== undefined)}
          open={openField === "music"}
          // Popüler şarkılar her içerikte var: müzik paneli öneri olmadan da açılır.
          onToggle={toggleField("music")}
          alternatives={
            <AIAlternatives<MusicTrack>
              load={async () => [...(await load("music", preferredTrack)()), ...POPULAR_TRACKS]}
              getKey={trackKey}
              render={(track) => (
                <span className="flex items-center justify-between gap-3">
                  <span className="flex min-w-0 flex-col">
                    <span className="truncate font-medium text-fg">{track.title}</span>
                    <span className="truncate text-caption text-fg-muted">{track.artist}</span>
                  </span>
                  {isPopular(track) && (
                    <span className="shrink-0 rounded-full bg-surface-muted px-2 py-0.5 text-caption text-fg-secondary">
                      {t("content.editor.popular")}
                    </span>
                  )}
                </span>
              )}
              isSelected={(track) => sameTrack(track, post.music)}
              isPreferred={(track) => sameTrack(track, preferredTrack)}
              onSelect={(music) => update({ music })}
            />
          }
        >
          {({ controlId }) => (
            <div className="flex items-center gap-2">
              <button
                id={controlId}
                type="button"
                onClick={toggleField("music")}
                className="flex h-11 min-w-0 flex-1 items-center gap-3 rounded-lg border border-border bg-surface px-3 text-left transition-colors hover:border-border-strong"
              >
                <Music2 className="size-4 shrink-0 text-fg-muted" aria-hidden />
                {post.music ? (
                  <span className="min-w-0 truncate text-body text-fg">
                    {post.music.title}
                    <span className="text-fg-muted"> · {post.music.artist}</span>
                  </span>
                ) : (
                  <span className="text-body text-fg-muted">{t("content.editor.noMusic")}</span>
                )}
              </button>
              {post.music && (
                <IconButton
                  label={t("content.editor.removeMusic")}
                  icon={<X />}
                  variant="ghost"
                  onClick={() => update({ music: undefined })}
                />
              )}
            </div>
          )}
        </EditorField>
      )}

      <EditorField
        label={t("content.editor.cta")}
        provenance={textProvenance("cta", post.cta ?? "")}
        open={openField === "cta"}
        onToggle={rules?.ctaStyle === "none" ? undefined : toggle("cta")}
        alternatives={
          <AIAlternatives<string>
            load={load("cta", suggestion?.cta)}
            getKey={(item) => item}
            render={(item) => item}
            isSelected={(item) => item === post.cta}
            isPreferred={(item) => item === suggestion?.cta}
            onSelect={(cta) => update({ cta })}
          />
        }
      >
        {({ controlId }) => (
          <Input
            id={controlId}
            value={post.cta ?? ""}
            onChange={(event) => update({ cta: event.target.value })}
            placeholder={t("content.editor.ctaPlaceholder")}
          />
        )}
      </EditorField>
    </div>
  );
};
