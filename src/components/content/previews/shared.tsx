"use client";

import { ChevronLeft, ChevronRight, ImageIcon, Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { ContentFormat, MediaAsset, MusicTrack } from "@/types";

/**
 * Önizlemelerin ortak verisi. Önizlemeler store'u bilmez: sadece "ne
 * görünecek" verisini alır; böylece takvim drawer'ında da kullanılabilir.
 */
export type PreviewData = {
  format: ContentFormat;
  title: string;
  caption: string;
  hashtags: string[];
  music?: MusicTrack;
  cta?: string;
  media?: MediaAsset;
  /** Carousel'de tüm görseller sırayla; diğer biçimlerde tek öğe. */
  mediaList: MediaAsset[];
  brandName: string;
  handle: string;
  followers: number;
  /** Önizlemede gösterilen sayılar: yayınlandıysa gerçek analitik, değilse tahmin. */
  stats: { likes: number; comments: number; shares: number; saves: number; views: number };
  /** "Az önce", "2 sa." gibi; yayınlanmamışsa "Şimdi". */
  timeLabel: string;
  /** Biçimlenmiş sayı (dile göre 1,2 B / 1.2K). */
  formatCount: (value: number) => string;
  labels: PreviewLabels;
};

/** Önizlemedeki arayüz metinleri; platformun kendi diline benzer ama i18n'den gelir. */
export type PreviewLabels = {
  more: string;
  follow: string;
  subscribe: string;
  likes: (count: string) => string;
  viewAllComments: (count: string) => string;
  sendMessage: string;
  followers: (count: string) => string;
  subscribers: (count: string) => string;
  views: (count: string) => string;
  commentsCount: (count: string) => string;
  repostsCount: (count: string) => string;
  forYou: string;
  following: string;
  originalSound: string;
  home: string;
  friends: string;
  inbox: string;
  profile: string;
  like: string;
  dislike: string;
  comment: string;
  repost: string;
  remix: string;
  send: string;
  share: string;
  save: string;
  addMedia: string;
  previous: string;
  next: string;
  slide: (index: number, total: number) => string;
  untitled: string;
  postPreview: string;
};

/** Dikey içerikler (Reel, Story, TikTok, Shorts) ve Instagram akışı için telefon çerçevesi. */
export const PhoneFrame = ({
  children,
  className,
  screenClassName,
}: {
  children: ReactNode;
  className?: string;
  screenClassName?: string;
}) => (
  <div
    className={cn(
      "relative mx-auto w-full max-w-[300px] rounded-[2.75rem] bg-neutral-900 p-2.5 shadow-lg ring-1 ring-black/10",
      className,
    )}
  >
    <div
      className={cn(
        "relative aspect-[9/19] overflow-hidden rounded-[2.2rem] bg-black",
        screenClassName,
      )}
    >
      {/* Dynamic Island */}
      <span
        className="absolute top-2 left-1/2 z-30 h-5 w-20 -translate-x-1/2 rounded-full bg-black"
        aria-hidden
      />
      {children}
    </div>
  </div>
);

/** Medya ya da (henüz yoksa) yer tutucu. Video kapak karesi + oynat ikonu. */
export const PreviewMedia = ({
  media,
  addMediaLabel,
  className,
  sizes = "300px",
  showPlay = false,
  dark = false,
}: {
  media?: MediaAsset;
  addMediaLabel: string;
  className?: string;
  sizes?: string;
  showPlay?: boolean;
  dark?: boolean;
}) => (
  <div
    className={cn(
      "relative overflow-hidden",
      dark ? "bg-neutral-800" : "bg-neutral-100",
      className,
    )}
  >
    {media ? (
      <>
        <Image src={media.url} alt={media.alt} fill sizes={sizes} className="object-cover" />
        {showPlay && media.kind === "video" && (
          <span className="absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm">
            <Play className="size-5 translate-x-px fill-current" aria-hidden />
          </span>
        )}
      </>
    ) : (
      <span
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center gap-2 text-[11px]",
          dark ? "text-neutral-400" : "text-neutral-500",
        )}
      >
        <ImageIcon className="size-6" aria-hidden />
        {addMediaLabel}
      </span>
    )}
  </div>
);

const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toLocaleUpperCase("tr"))
    .join("") || "•";

/** Markanın profil fotoğrafı yerine: baş harfler, accent geçişli zemin. */
export const BrandAvatar = ({
  name,
  className,
  square = false,
}: {
  name: string;
  className?: string;
  square?: boolean;
}) => (
  <span
    className={cn(
      "flex shrink-0 items-center justify-center bg-gradient-to-br from-accent to-accent-hover font-semibold text-accent-fg",
      square ? "rounded-md" : "rounded-full",
      className,
    )}
    aria-hidden
  >
    {initialsOf(name)}
  </span>
);

/** Caption + hashtag'ler; hashtag'ler platformun link renginde. */
export const CaptionText = ({
  caption,
  hashtags,
  hashtagClassName,
  className,
  prefix,
}: {
  caption: string;
  hashtags: string[];
  hashtagClassName: string;
  className?: string;
  prefix?: ReactNode;
}) => (
  <p className={cn("break-words whitespace-pre-line", className)}>
    {prefix}
    {caption}
    {hashtags.length > 0 && (
      <>
        {caption && " "}
        <span className={hashtagClassName}>{hashtags.join(" ")}</span>
      </>
    )}
  </p>
);

type MediaCarouselProps = {
  items: MediaAsset[];
  labels: Pick<PreviewLabels, "addMedia" | "previous" | "next" | "slide">;
  /** Slaytın en-boy oranı, ör. "aspect-[4/5]". */
  aspectClassName: string;
  sizes?: string;
};

/**
 * Carousel önizlemesi: yatay scroll-snap şeridi (dokunma ve trackpad ile kaydırılır),
 * ok butonları, "2/4" sayacı ve noktalar. Etkin slayt kaydırma konumundan hesaplanır.
 */
export const MediaCarousel = ({
  items,
  labels,
  aspectClassName,
  sizes = "300px",
}: MediaCarouselProps) => {
  const stripRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = items.length;
  // Görsel kaldırılınca indeks listenin dışında kalmasın.
  const index = Math.min(activeIndex, Math.max(total - 1, 0));

  const goTo = (next: number) => {
    // Sayaç kaydırmanın bitmesini beklemeden güncellenir; onScroll sonra aynı değeri doğrular.
    setActiveIndex(next);
    const strip = stripRef.current;
    if (strip) strip.scrollTo({ left: next * strip.clientWidth, behavior: "smooth" });
  };

  if (total === 0) {
    return (
      <PreviewMedia addMediaLabel={labels.addMedia} className={cn(aspectClassName, "w-full")} />
    );
  }

  return (
    <div className={cn("relative w-full", aspectClassName)}>
      <div
        ref={stripRef}
        className="absolute inset-0 flex snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto overscroll-x-contain"
        onScroll={(event) => {
          const strip = event.currentTarget;
          setActiveIndex(Math.round(strip.scrollLeft / Math.max(strip.clientWidth, 1)));
        }}
      >
        {items.map((item, itemIndex) => (
          <div
            key={`${item.id}-${itemIndex}`}
            className="relative h-full w-full shrink-0 snap-center"
            aria-label={labels.slide(itemIndex + 1, total)}
            role="group"
          >
            <PreviewMedia
              media={item}
              addMediaLabel={labels.addMedia}
              className="size-full"
              sizes={sizes}
            />
          </div>
        ))}
      </div>

      {total > 1 && (
        <>
          <span className="pointer-events-none absolute top-2.5 right-2.5 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white tabular-nums">
            {labels.slide(index + 1, total)}
          </span>
          {index > 0 && (
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label={labels.previous}
              className="absolute top-1/2 left-2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-neutral-900 shadow-sm transition-transform hover:scale-105"
            >
              <ChevronLeft className="size-4" aria-hidden />
            </button>
          )}
          {index < total - 1 && (
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label={labels.next}
              className="absolute top-1/2 right-2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-neutral-900 shadow-sm transition-transform hover:scale-105"
            >
              <ChevronRight className="size-4" aria-hidden />
            </button>
          )}
          <span
            className="pointer-events-none absolute inset-x-0 bottom-2.5 flex justify-center gap-1"
            aria-hidden
          >
            {items.map((item, dotIndex) => (
              <span
                key={`${item.id}-dot-${dotIndex}`}
                className={cn(
                  "size-1.5 rounded-full transition-colors duration-200",
                  dotIndex === index ? "bg-white" : "bg-white/45",
                )}
              />
            ))}
          </span>
        </>
      )}
    </div>
  );
};
