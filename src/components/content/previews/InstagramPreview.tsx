"use client";

import {
  Bookmark,
  Camera,
  Clapperboard,
  Ellipsis,
  Heart,
  House,
  Link2,
  MessageCircle,
  Music2,
  Search,
  Send,
  SquarePlus,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  BrandAvatar,
  CaptionText,
  MediaCarousel,
  PhoneFrame,
  PreviewMedia,
  type PreviewData,
} from "./shared";

const IG_LINK = "text-[#00376b]";

/**
 * Instagram akışı: profil satırı (+ müzik), medya, etkileşim satırı, beğeni,
 * caption, alt menü. Üst bar ve alt menü sabit; arası gerçek uygulamadaki gibi
 * kaydırılır, böylece uzun açıklamanın tamamı okunabilir.
 */
export const InstagramFeedPreview = ({ data }: { data: PreviewData }) => {
  const { labels } = data;
  const [scrolledToEnd, setScrolledToEnd] = useState(false);
  return (
    <PhoneFrame screenClassName="bg-white text-[#0c1014]">
      <div className="flex h-full flex-col pt-9 text-[12px] leading-snug">
        <div className="flex items-center justify-between px-3 pb-2">
          <span className="font-serif text-[19px] font-semibold tracking-tight italic">
            Instagram
          </span>
          <span className="flex gap-3.5">
            <Heart className="size-[18px]" aria-hidden />
            <Send className="size-[18px]" aria-hidden />
          </span>
        </div>

        <div className="relative min-h-0 flex-1">
          <div
            className="h-full [scrollbar-width:none] overflow-y-auto overscroll-contain focus-visible:outline-none"
            tabIndex={0}
            role="region"
            aria-label={labels.postPreview}
            onScroll={(event) => {
              const element = event.currentTarget;
              setScrolledToEnd(
                element.scrollTop + element.clientHeight >= element.scrollHeight - 4,
              );
            }}
          >
            <div className="flex items-center gap-2 px-3 py-2">
              <span className="rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] p-[1.5px]">
                <span className="block rounded-full bg-white p-[1.5px]">
                  <BrandAvatar name={data.brandName} className="size-7 text-[10px]" />
                </span>
              </span>
              <span className="flex min-w-0 flex-1 flex-col leading-tight">
                <span className="truncate font-semibold">{data.handle}</span>
                {data.music && (
                  <span className="flex items-center gap-1 truncate text-[10px]">
                    <Music2 className="size-2.5 shrink-0" aria-hidden />
                    <span className="truncate">
                      {data.music.artist} · {data.music.title}
                    </span>
                  </span>
                )}
              </span>
              <Ellipsis className="size-4" aria-hidden />
            </div>

            {data.format === "carousel" ? (
              <MediaCarousel
                items={data.mediaList}
                labels={labels}
                aspectClassName="aspect-[4/5]"
              />
            ) : (
              <PreviewMedia
                media={data.media}
                addMediaLabel={labels.addMedia}
                className="aspect-[4/5] w-full"
              />
            )}

            <div className="flex items-center gap-3.5 px-3 pt-2.5">
              <Heart className="size-[19px]" aria-hidden />
              <MessageCircle className="size-[19px] -scale-x-100" aria-hidden />
              <Send className="size-[19px]" aria-hidden />
              <Bookmark className="ml-auto size-[19px]" aria-hidden />
            </div>
            <div className="flex flex-col gap-1 px-3 pt-2">
              <span className="font-semibold">
                {labels.likes(data.formatCount(data.stats.likes))}
              </span>
              <CaptionText
                caption={data.caption}
                hashtags={data.hashtags}
                hashtagClassName={IG_LINK}
                prefix={<span className="mr-1 font-semibold">{data.handle}</span>}
              />
              <span className="text-neutral-500">
                {labels.viewAllComments(data.formatCount(data.stats.comments))}
              </span>
              <span className="pb-4 text-[10px] text-neutral-500">{data.timeLabel}</span>
            </div>
          </div>
          {/* Kaydırma ipucu: altta devamı olduğunu gösteren hafif gölge. */}
          <span
            className={cn(
              "pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent transition-opacity duration-200",
              scrolledToEnd && "opacity-0",
            )}
            aria-hidden
          />
        </div>

        <nav
          className="flex items-center justify-around border-t border-neutral-200 px-2 pt-2 pb-5"
          aria-hidden
        >
          <House className="size-5" />
          <Search className="size-5" />
          <SquarePlus className="size-5" />
          <Clapperboard className="size-5" />
          <BrandAvatar name={data.brandName} className="size-5 text-[7px]" />
        </nav>
      </div>
    </PhoneFrame>
  );
};

/** Reels: tam ekran dikey video, sağda eylemler, altta profil, caption ve müzik. */
export const InstagramReelPreview = ({ data }: { data: PreviewData }) => {
  const { labels } = data;
  return (
    <PhoneFrame>
      <PreviewMedia
        media={data.media}
        addMediaLabel={labels.addMedia}
        className="absolute inset-0"
        dark
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/65" />
      <div className="absolute inset-x-0 top-9 flex items-center justify-between px-4 text-white">
        <span className="text-[17px] font-bold">Reels</span>
        <Camera className="size-5" aria-hidden />
      </div>

      <div className="absolute right-2.5 bottom-16 flex flex-col items-center gap-4 text-[10px] font-medium text-white">
        <Stat icon={<Heart className="size-6" />} value={data.formatCount(data.stats.likes)} />
        <Stat
          icon={<MessageCircle className="size-6 -scale-x-100" />}
          value={data.formatCount(data.stats.comments)}
        />
        <Stat icon={<Send className="size-6" />} value={data.formatCount(data.stats.shares)} />
        <Ellipsis className="size-5" aria-hidden />
        <BrandAvatar name={data.brandName} square className="size-7 text-[9px] ring-2 ring-white" />
      </div>

      <div className="absolute right-14 bottom-5 left-3 flex flex-col gap-2 text-[12px] text-white">
        <div className="flex items-center gap-2">
          <BrandAvatar name={data.brandName} className="size-7 text-[10px]" />
          <span className="min-w-0 truncate font-semibold">{data.handle}</span>
          <span className="shrink-0 rounded-md border border-white/70 px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap">
            {labels.follow}
          </span>
        </div>
        <CaptionText
          caption={data.caption}
          hashtags={data.hashtags}
          hashtagClassName="font-semibold"
          className="line-clamp-2"
        />
        {data.music && (
          <span className="flex w-fit max-w-full items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[11px] backdrop-blur-sm">
            <Music2 className="size-3 shrink-0" aria-hidden />
            <span className="truncate">
              {data.music.artist} · {data.music.title}
            </span>
          </span>
        )}
      </div>
    </PhoneFrame>
  );
};

/** Hikâye: üstte ilerleme çubukları, link çıkartması (CTA), altta mesaj kutusu. */
export const InstagramStoryPreview = ({ data }: { data: PreviewData }) => {
  const { labels } = data;
  return (
    <PhoneFrame>
      <PreviewMedia
        media={data.media}
        addMediaLabel={labels.addMedia}
        className="absolute inset-0"
        dark
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      <div className="absolute inset-x-3 top-9 flex flex-col gap-2.5 text-white">
        <div className="flex gap-1" aria-hidden>
          <span className="h-0.5 flex-1 rounded-full bg-white" />
          <span className="h-0.5 flex-1 rounded-full bg-white/40" />
          <span className="h-0.5 flex-1 rounded-full bg-white/40" />
        </div>
        <div className="flex items-center gap-2 text-[12px]">
          <BrandAvatar name={data.brandName} className="size-7 text-[10px]" />
          <span className="font-semibold">{data.handle}</span>
          <span className="text-white/70">{data.timeLabel}</span>
          <Ellipsis className="ml-auto size-4" aria-hidden />
          <X className="size-5" aria-hidden />
        </div>
      </div>

      {data.cta && (
        <div className="absolute inset-x-0 bottom-28 flex justify-center px-6">
          <span className="flex max-w-full items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-[12px] font-semibold text-[#0c1014] shadow-md">
            <Link2 className="size-3.5 shrink-0 text-[#0095f6]" aria-hidden />
            <span className="truncate">{data.cta}</span>
          </span>
        </div>
      )}

      <div className="absolute inset-x-3 bottom-5 flex items-center gap-3 text-white">
        <span className="flex-1 rounded-full border border-white/60 px-4 py-2 text-[12px] text-white/90">
          {labels.sendMessage}
        </span>
        <Heart className="size-6" aria-hidden />
        <Send className="size-6" aria-hidden />
      </div>
    </PhoneFrame>
  );
};

const Stat = ({ icon, value }: { icon: ReactNode; value?: string }) => (
  <span className="flex flex-col items-center gap-1" aria-hidden>
    {icon}
    {value}
  </span>
);
