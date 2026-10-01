"use client";

import {
  Bookmark,
  Ellipsis,
  Forward,
  MessageSquare,
  Music2,
  Repeat2,
  Search,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import type { ReactNode } from "react";
import { BrandAvatar, CaptionText, PhoneFrame, PreviewMedia, type PreviewData } from "./shared";

const formatDuration = (seconds = 0) =>
  `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

/**
 * YouTube izleme sayfası (koyu tema): 16:9 oynatıcı, başlık, kanal satırı +
 * Abone ol, hap biçimli eylemler ve açıklama kutusu.
 */
export const YouTubeVideoPreview = ({ data }: { data: PreviewData }) => {
  const { labels } = data;
  return (
    <div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-2xl bg-[#0f0f0f] text-[#f1f1f1] shadow-lg ring-1 ring-black/20">
      <div className="relative">
        <PreviewMedia
          media={data.media}
          addMediaLabel={labels.addMedia}
          className="aspect-video w-full"
          sizes="460px"
          showPlay
          dark
        />
        {data.media?.durationSec !== undefined && (
          <span className="absolute right-2 bottom-2 rounded bg-black/80 px-1 py-0.5 text-[11px] font-medium">
            {formatDuration(data.media.durationSec)}
          </span>
        )}
        <span className="absolute inset-x-0 bottom-0 h-[3px] bg-white/25" aria-hidden>
          <span className="block h-full w-1/4 bg-[#ff0033]" />
        </span>
      </div>

      <div className="flex flex-col gap-3 p-4 text-[13px]">
        <h4 className="line-clamp-2 text-[17px] leading-snug font-semibold">
          {data.title || labels.untitled}
        </h4>

        <div className="flex items-center gap-2.5">
          <BrandAvatar name={data.brandName} className="size-9 text-[12px]" />
          <span className="flex min-w-0 flex-1 flex-col">
            <span className="truncate font-semibold">{data.brandName}</span>
            <span className="text-[11px] text-[#aaa]">
              {labels.subscribers(data.formatCount(data.followers))}
            </span>
          </span>
          <span className="rounded-full bg-[#f1f1f1] px-3.5 py-1.5 text-[12px] font-semibold text-[#0f0f0f]">
            {labels.subscribe}
          </span>
        </div>

        <div className="flex gap-2 overflow-hidden text-[12px] font-medium" aria-hidden>
          <span className="flex shrink-0 items-center rounded-full bg-white/10">
            <span className="flex items-center gap-1.5 border-r border-white/20 py-1.5 pr-3 pl-3">
              <ThumbsUp className="size-4" />
              {data.formatCount(data.stats.likes)}
            </span>
            <span className="px-3">
              <ThumbsDown className="size-4" />
            </span>
          </span>
          <Pill icon={<Forward className="size-4" />}>{labels.share}</Pill>
          <Pill icon={<Bookmark className="size-4" />}>{labels.save}</Pill>
        </div>

        <div className="flex flex-col gap-1 rounded-xl bg-white/10 p-3 text-[12px]">
          <span className="font-semibold">
            {labels.views(data.formatCount(data.stats.views))} · {data.timeLabel}
          </span>
          <CaptionText
            caption={data.caption}
            hashtags={data.hashtags}
            hashtagClassName="text-[#3ea6ff]"
            className="line-clamp-3 text-[#f1f1f1]"
          />
          <span className="font-semibold">{labels.more}</span>
        </div>
      </div>
    </div>
  );
};

/** Shorts: dikey video, sağda eylemler (beğen, beğenme, yorum, paylaş, remix), altta kanal + Abone ol. */
export const YouTubeShortsPreview = ({ data }: { data: PreviewData }) => {
  const { labels } = data;
  return (
    <PhoneFrame>
      <PreviewMedia
        media={data.media}
        addMediaLabel={labels.addMedia}
        className="absolute inset-0"
        dark
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      <div className="absolute inset-x-0 top-9 flex items-center justify-end gap-4 px-4 text-white">
        <Search className="size-5" aria-hidden />
        <Ellipsis className="size-5" aria-hidden />
      </div>

      <div className="absolute right-2 bottom-6 flex flex-col items-center gap-4 text-[10px] font-medium text-white">
        <Action
          icon={<ThumbsUp className="size-6 fill-white" />}
          value={data.formatCount(data.stats.likes)}
        />
        <Action icon={<ThumbsDown className="size-6 fill-white" />} value={labels.dislike} />
        <Action
          icon={<MessageSquare className="size-6 fill-white" />}
          value={data.formatCount(data.stats.comments)}
        />
        <Action icon={<Forward className="size-6 fill-white" />} value={labels.share} />
        <Action icon={<Repeat2 className="size-6" />} value={labels.remix} />
        <BrandAvatar name={data.brandName} square className="size-8 text-[10px]" />
      </div>

      <div className="absolute right-16 bottom-6 left-3 flex flex-col gap-2 text-[12px] text-white">
        <div className="flex items-center gap-2">
          <BrandAvatar name={data.brandName} className="size-7 text-[10px]" />
          <span className="min-w-0 truncate font-semibold">@{data.handle}</span>
          <span className="shrink-0 rounded-full bg-[#ff0033] px-3 py-1 text-[11px] font-semibold whitespace-nowrap">
            {labels.subscribe}
          </span>
        </div>
        <p className="line-clamp-2 font-medium">{data.title || data.caption}</p>
        {data.music && (
          <span className="flex items-center gap-1.5 text-[11px]">
            <Music2 className="size-3 shrink-0" aria-hidden />
            <span className="truncate">
              {data.music.title} · {data.music.artist}
            </span>
          </span>
        )}
      </div>
    </PhoneFrame>
  );
};

const Pill = ({ icon, children }: { icon: ReactNode; children: ReactNode }) => (
  <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5">
    {icon}
    {children}
  </span>
);

const Action = ({ icon, value }: { icon: ReactNode; value: string }) => (
  <span className="flex flex-col items-center gap-1 drop-shadow" aria-hidden>
    {icon}
    {value}
  </span>
);
