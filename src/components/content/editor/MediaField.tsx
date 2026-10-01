"use client";

import { ImagePlus, Images, Play, Upload } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { AIInsight } from "@/components/ai/AIInsight";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Skeleton } from "@/components/ui/Skeleton";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
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
  onChange: (media: MediaAsset[]) => void;
};

type UploadState = { status: "idle" } | { status: "uploading"; name: string };

/**
 * Medya (spec §20): yükleme simüle edilir, seçilen medya gösterilir ve
 * paylaşmadan önce ✦ AI analizi gelir. Analiz mock'tur; dosya incelenmez.
 */
export const MediaField = ({ post, tips, onChange }: MediaFieldProps) => {
  const { t } = useT();
  const inputRef = useRef<HTMLInputElement>(null);
  const [upload, setUpload] = useState<UploadState>({ status: "idle" });
  const [libraryOpen, setLibraryOpen] = useState(false);
  const media = post.media[0];

  const handleFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!isSupportedMedia(file)) {
      toast.error(t("content.editor.unsupportedFile"));
      return;
    }
    setUpload({ status: "uploading", name: file.name });
    try {
      const [asset] = await Promise.all([
        readMediaFile(file),
        new Promise((resolve) => setTimeout(resolve, MIN_UPLOAD_MS)),
      ]);
      onChange([asset]);
    } catch {
      toast.error(t("content.editor.mediaError"));
    } finally {
      setUpload({ status: "idle" });
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <span className="text-small font-medium text-fg">{t("content.editor.media")}</span>
        {media && upload.status === "idle" && (
          <div className="flex gap-1">
            <Button size="sm" variant="ghost" onClick={() => inputRef.current?.click()}>
              {t("content.editor.replace")}
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setLibraryOpen(true)}>
              {t("content.editor.library")}
            </Button>
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/*"
        className="sr-only"
        tabIndex={-1}
        aria-hidden
        onChange={(event) => void handleFile(event)}
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
              <span className="truncate text-fg">{upload.name}</span>
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
        ) : media ? (
          <motion.div
            key={media.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={transition.base}
            className="flex gap-4"
          >
            <span className="relative size-24 shrink-0 overflow-hidden rounded-lg bg-surface-muted">
              <Image src={media.url} alt={media.alt} fill sizes="96px" className="object-cover" />
              {media.kind === "video" && (
                <span className="absolute right-1.5 bottom-1.5 flex size-6 items-center justify-center rounded-full bg-black/55 text-white">
                  <Play className="size-3 fill-current" aria-hidden />
                </span>
              )}
            </span>
            <MediaAnalysisPanel
              key={`${media.id}:${post.platform}:${post.format}`}
              post={post}
              media={media}
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
            <p className="text-small text-fg-secondary">{t("content.editor.uploadHint")}</p>
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
        selectedId={media?.id}
        onSelect={(asset) => {
          onChange([asset]);
          setLibraryOpen(false);
        }}
      />
    </div>
  );
};

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
  selectedId?: string;
  onSelect: (asset: MediaAsset) => void;
};

/** Çalışma alanındaki önerilerin ve postların görselleri: demoda hızlı medya seçimi. */
const MediaLibrary = ({ open, onOpenChange, selectedId, onSelect }: MediaLibraryProps) => {
  const { t } = useT();
  const posts = useContent((state) => state.posts);
  const suggestions = useContent((state) => state.suggestions);

  const assets = [...suggestions, ...posts]
    .flatMap((item) => item.media)
    .filter((asset, index, all) => all.findIndex((other) => other.url === asset.url) === index)
    .slice(0, LIBRARY_LIMIT);

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={t("content.editor.libraryTitle")}
      description={t("content.editor.libraryDescription")}
      closeLabel={t("common.close")}
      size="lg"
    >
      <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {assets.map((asset) => (
          <li key={asset.id}>
            <button
              type="button"
              onClick={() => onSelect(asset)}
              aria-pressed={asset.id === selectedId}
              aria-label={asset.alt}
              className={cn(
                "relative block aspect-square w-full overflow-hidden rounded-lg bg-surface-muted ring-offset-2 ring-offset-surface-elevated transition-[box-shadow,opacity] hover:opacity-90",
                asset.id === selectedId && "ring-2 ring-accent",
              )}
            >
              <Image src={asset.url} alt="" fill sizes="160px" className="object-cover" />
              {asset.kind === "video" && (
                <span className="absolute right-1.5 bottom-1.5 flex size-6 items-center justify-center rounded-full bg-black/55 text-white">
                  <Play className="size-3 fill-current" aria-hidden />
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </Modal>
  );
};
