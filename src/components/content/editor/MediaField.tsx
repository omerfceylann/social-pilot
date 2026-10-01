"use client";

import { ImagePlus, Images, Play, Plus, Upload, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { AIInsight } from "@/components/ai/AIInsight";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { Modal } from "@/components/ui/Modal";
import { Skeleton } from "@/components/ui/Skeleton";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import type { FormatFields } from "@/lib/content";
import { isSupportedMedia, readMediaFile } from "@/lib/mediaFile";
import { transition } from "@/lib/motion";
import { analyzeMedia } from "@/services/aiService";
import { useContent } from "@/store/useContent";
import { toast } from "@/store/useToasts";
import type { MediaAnalysis, MediaAsset, MediaTips, Post } from "@/types";

/** Yükleme hissi için en az bu kadar sürer; gerçek okuma daha hızlı bitse bile. */
const MIN_UPLOAD_MS = 1200;
const LIBRARY_LIMIT = 24;

type MediaFieldProps = {
  post: Post;
  tips?: MediaTips;
  /** Biçimin medya sınırları (bkz. lib/content.fieldsFor): carousel 2–10, diğerleri 1. */
  limits: FormatFields["media"];
  onChange: (media: MediaAsset[]) => void;
};

type UploadState = { status: "idle" } | { status: "uploading"; label: string };

/**
 * Medya (spec §20): yükleme simüle edilir, seçilen medya gösterilir ve paylaşmadan
 * önce ✦ AI analizi gelir. Carousel'de birden çok görsel sıralı bir ızgarada durur.
 * Tekli biçime geçilince fazla görseller silinmez; sadece ilki kullanılır.
 */
export const MediaField = ({ post, tips, limits, onChange }: MediaFieldProps) => {
  const { t } = useT();
  const inputRef = useRef<HTMLInputElement>(null);
  const [upload, setUpload] = useState<UploadState>({ status: "idle" });
  const [libraryOpen, setLibraryOpen] = useState(false);
  const multiple = limits.max > 1;
  const items = post.media.slice(0, limits.max);
  const first = items[0];
  const capacity = multiple ? limits.max - items.length : 1;
  const belowMinimum = multiple && items.length < limits.min;

  /** Tekli modda ilk öğe değişir (diğerleri saklı kalır); çoklu modda sona eklenir. */
  const addAssets = (assets: MediaAsset[]) => {
    if (multiple) onChange([...items, ...assets].slice(0, limits.max));
    else if (assets[0]) onChange([assets[0], ...post.media.slice(1)]);
  };

  const handleFiles = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (files.length === 0) return;
    if (!files.every(isSupportedMedia)) {
      toast.error(t("content.editor.unsupportedFile"));
      return;
    }
    const accepted = files.slice(0, Math.max(capacity, 1));
    setUpload({
      status: "uploading",
      label:
        accepted.length === 1
          ? (accepted[0]?.name ?? "")
          : t("content.editor.filesCount", { count: accepted.length }),
    });
    try {
      const [assets] = await Promise.all([
        Promise.all(accepted.map(readMediaFile)),
        new Promise((resolve) => setTimeout(resolve, MIN_UPLOAD_MS)),
      ]);
      addAssets(assets);
    } catch {
      toast.error(t("content.editor.mediaError"));
    } finally {
      setUpload({ status: "idle" });
    }
  };

  const actions = (
    <div className="flex gap-1">
      <Button
        size="sm"
        variant="ghost"
        onClick={() => inputRef.current?.click()}
        disabled={multiple && capacity === 0}
      >
        <Upload />
        {t("content.editor.upload")}
      </Button>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => setLibraryOpen(true)}
        disabled={multiple && capacity === 0}
      >
        {t("content.editor.library")}
      </Button>
    </div>
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-baseline gap-2 text-small font-medium text-fg">
          {t("content.editor.media")}
          {multiple && (
            <span
              className={cn(
                "text-caption font-normal tabular-nums",
                belowMinimum ? "text-warning" : "text-fg-muted",
              )}
            >
              {t("content.editor.mediaCount", { count: items.length, max: limits.max })}
            </span>
          )}
        </span>
        {first && upload.status === "idle" && actions}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/*"
        multiple={multiple}
        className="sr-only"
        tabIndex={-1}
        aria-hidden
        onChange={(event) => void handleFiles(event)}
      />

      <AnimatePresence mode="wait" initial={false}>
        {upload.status === "uploading" ? (
          <motion.div
            key="uploading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition.fast}
            className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4"
            role="status"
          >
            <div className="flex items-center justify-between gap-3 text-small">
              <span className="truncate text-fg">{upload.label}</span>
              <span className="shrink-0 text-fg-muted">{t("content.editor.uploading")}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-surface-muted">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={{ width: "4%" }}
                animate={{ width: "100%" }}
                transition={{ duration: MIN_UPLOAD_MS / 1000, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ) : first && multiple ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={transition.base}
            className="flex flex-col gap-4"
          >
            <ol className="grid grid-cols-4 gap-2 sm:grid-cols-5">
              {items.map((item, index) => (
                <motion.li
                  key={`${item.id}-${index}`}
                  layout
                  transition={transition.base}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-surface-muted"
                >
                  <Thumbnail media={item} sizes="120px" />
                  <span className="absolute top-1.5 left-1.5 flex size-5 items-center justify-center rounded-full bg-black/60 text-[10px] font-semibold text-white tabular-nums">
                    {index + 1}
                  </span>
                  <IconButton
                    label={t("content.editor.removeMediaItem", { index: index + 1 })}
                    icon={<X />}
                    size="sm"
                    showTooltip={false}
                    onClick={() => onChange(items.filter((_, itemIndex) => itemIndex !== index))}
                    className="absolute top-1 right-1 size-6 rounded-full bg-black/60 text-white opacity-100 hover:bg-black/80 hover:text-white sm:opacity-0 sm:group-focus-within:opacity-100 sm:group-hover:opacity-100 [&_svg]:size-3.5"
                  />
                </motion.li>
              ))}
              {capacity > 0 && (
                <li>
                  <button
                    type="button"
                    onClick={() => setLibraryOpen(true)}
                    className="flex aspect-square w-full flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-border-strong text-caption text-fg-secondary transition-colors hover:border-accent hover:text-accent-text"
                  >
                    <Plus className="size-4" aria-hidden />
                    {t("content.editor.addMore")}
                  </button>
                </li>
              )}
            </ol>
            {belowMinimum && (
              <p className="text-caption text-warning" aria-live="polite">
                {t("content.editor.minMedia", { min: limits.min })}
              </p>
            )}
            <MediaAnalysisPanel
              key={`${first.id}:${post.platform}:${post.format}`}
              post={post}
              media={first}
              tips={tips}
            />
          </motion.div>
        ) : first ? (
          <motion.div
            key={first.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={transition.base}
            className="flex gap-4"
          >
            <span className="relative size-24 shrink-0 overflow-hidden rounded-lg bg-surface-muted">
              <Thumbnail media={first} sizes="96px" />
            </span>
            <MediaAnalysisPanel
              key={`${first.id}:${post.platform}:${post.format}`}
              post={post}
              media={first}
              tips={tips}
            />
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition.fast}
            className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border-strong px-4 py-8 text-center"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-surface-muted text-fg-secondary">
              <ImagePlus className="size-5" aria-hidden />
            </span>
            <p className="text-small text-fg-secondary">
              {multiple
                ? t("content.editor.minMedia", { min: limits.min })
                : t("content.editor.uploadHint")}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Button size="sm" variant="secondary" onClick={() => inputRef.current?.click()}>
                <Upload />
                {t("content.editor.upload")}
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setLibraryOpen(true)}>
                <Images />
                {t("content.editor.library")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <MediaLibrary
        open={libraryOpen}
        onOpenChange={setLibraryOpen}
        multiple={multiple}
        capacity={capacity}
        currentId={multiple ? undefined : first?.id}
        onConfirm={(assets) => {
          addAssets(assets);
          setLibraryOpen(false);
        }}
      />
    </div>
  );
};

const Thumbnail = ({ media, sizes }: { media: MediaAsset; sizes: string }) => (
  <>
    <Image src={media.url} alt={media.alt} fill sizes={sizes} className="object-cover" />
    {media.kind === "video" && (
      <span className="absolute right-1.5 bottom-1.5 flex size-6 items-center justify-center rounded-full bg-black/55 text-white">
        <Play className="size-3 fill-current" aria-hidden />
      </span>
    )}
  </>
);

type MediaAnalysisPanelProps = { post: Post; media: MediaAsset; tips?: MediaTips };

/** Medya, platform ya da biçim değişince (key ile) yeniden analiz edilir. */
const MediaAnalysisPanel = ({ post, media, tips }: MediaAnalysisPanelProps) => {
  const { t } = useT();
  const [analysis, setAnalysis] = useState<MediaAnalysis | null>(null);

  useEffect(() => {
    if (!tips) return;
    let cancelled = false;
    void analyzeMedia({
      kind: media.kind,
      platform: post.platform,
      format: post.format,
      tips,
    }).then((result) => {
      if (!cancelled) setAnalysis(result);
    });
    return () => {
      cancelled = true;
    };
  }, [media.kind, post.format, post.platform, tips]);

  if (!analysis) {
    return (
      <div className="flex min-w-0 flex-1 flex-col gap-2" aria-busy>
        <span className="text-caption text-fg-muted">{t("content.editor.analyzing")}</span>
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-3/5" />
      </div>
    );
  }

  return (
    <AIInsight
      className="min-w-0 flex-1"
      label={analysis.kind === "video" ? t("ai.videoAnalysis") : t("ai.imageAnalysis")}
    >
      <p className="font-medium">{analysis.summary}</p>
      <ul className="mt-2 flex list-disc flex-col gap-1 pl-4 text-fg-secondary marker:text-accent-text">
        {analysis.suggestions.map((suggestion) => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    </AIInsight>
  );
};

type MediaLibraryProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Carousel: birden çok görsel seçilip "Ekle (n)" ile eklenir. */
  multiple: boolean;
  /** Çoklu modda en fazla kaç görsel daha eklenebilir. */
  capacity: number;
  /** Tekli modda şu an seçili medya. */
  currentId?: string;
  onConfirm: (assets: MediaAsset[]) => void;
};

/** Çalışma alanındaki önerilerin ve postların görselleri: demoda hızlı medya seçimi. */
const MediaLibrary = ({
  open,
  onOpenChange,
  multiple,
  capacity,
  currentId,
  onConfirm,
}: MediaLibraryProps) => {
  const { t } = useT();
  const posts = useContent((state) => state.posts);
  const suggestions = useContent((state) => state.suggestions);
  /** Seçim sırası korunur: carousel'e bu sırayla eklenir. */
  const [selected, setSelected] = useState<MediaAsset[]>([]);

  const assets = [...suggestions, ...posts]
    .flatMap((item) => item.media)
    .filter((asset, index, all) => all.findIndex((other) => other.url === asset.url) === index)
    .slice(0, LIBRARY_LIMIT);

  const handleOpenChange = (next: boolean) => {
    if (!next) setSelected([]);
    onOpenChange(next);
  };

  const toggle = (asset: MediaAsset) => {
    if (!multiple) {
      onConfirm([asset]);
      return;
    }
    setSelected((current) =>
      current.some((item) => item.id === asset.id)
        ? current.filter((item) => item.id !== asset.id)
        : current.length < capacity
          ? [...current, asset]
          : current,
    );
  };

  return (
    <Modal
      open={open}
      onOpenChange={handleOpenChange}
      title={t("content.editor.libraryTitle")}
      description={
        multiple
          ? t("content.editor.libraryMultiple", { count: capacity })
          : t("content.editor.libraryDescription")
      }
      closeLabel={t("common.close")}
      size="lg"
      footer={
        multiple && (
          <>
            <Button variant="secondary" onClick={() => handleOpenChange(false)}>
              {t("common.cancel")}
            </Button>
            <Button
              variant="primary"
              disabled={selected.length === 0}
              onClick={() => {
                onConfirm(selected);
                setSelected([]);
              }}
            >
              {t("content.editor.addSelected", { count: selected.length })}
            </Button>
          </>
        )
      }
    >
      <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {assets.map((asset) => {
          const order = selected.findIndex((item) => item.id === asset.id);
          const isSelected = multiple ? order >= 0 : asset.id === currentId;
          return (
            <li key={asset.id}>
              <button
                type="button"
                onClick={() => toggle(asset)}
                aria-pressed={isSelected}
                aria-label={asset.alt}
                disabled={multiple && !isSelected && selected.length >= capacity}
                className={cn(
                  "relative block aspect-square w-full overflow-hidden rounded-lg bg-surface-muted ring-offset-2 ring-offset-surface-elevated transition-[box-shadow,opacity] hover:opacity-90 disabled:opacity-40",
                  isSelected && "ring-2 ring-accent",
                )}
              >
                <Thumbnail media={asset} sizes="160px" />
                {multiple && order >= 0 && (
                  <span className="absolute top-1.5 right-1.5 flex size-6 items-center justify-center rounded-full bg-accent text-caption font-semibold text-accent-fg tabular-nums">
                    {order + 1}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </Modal>
  );
};
