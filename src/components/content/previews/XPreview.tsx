"use client";

import {
  Bookmark,
  ChartNoAxesColumn,
  Ellipsis,
  Heart,
  MessageCircle,
  Repeat2,
  Upload,
} from "lucide-react";
import type { ReactNode } from "react";
import { BrandAvatar, CaptionText, PreviewMedia, type PreviewData } from "./shared";

/**
 * X gönderisi (koyu tema): avatar sütunu, ad · @kullanıcı · zaman, metin,
 * yuvarlak köşeli medya ve sayılı eylem satırı.
 */
export const XPreview = ({ data }: { data: PreviewData }) => {
  const { labels } = data;
  return (
    <article className="mx-auto flex w-full max-w-[460px] gap-3 rounded-2xl bg-black p-4 text-[14px] text-[#e7e9ea] shadow-lg ring-1 ring-white/10">
      <BrandAvatar name={data.brandName} className="size-10 text-[13px]" />
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <header className="flex items-center gap-1 leading-tight">
          <span className="truncate font-bold">{data.brandName}</span>
          <span className="truncate text-[#71767b]">
            @{data.handle} · {data.timeLabel}
          </span>
          <Ellipsis className="ml-auto size-4 shrink-0 text-[#71767b]" aria-hidden />
        </header>

        <CaptionText
          caption={data.caption}
          hashtags={data.hashtags}
          hashtagClassName="text-[#1d9bf0]"
          className="leading-snug"
        />

        {data.media && (
          <PreviewMedia
            media={data.media}
            addMediaLabel={labels.addMedia}
            className="aspect-[16/10] w-full rounded-2xl border border-[#2f3336]"
            sizes="400px"
            showPlay
            dark
          />
        )}

        <footer
          className="flex items-center justify-between pt-1 text-[12px] text-[#71767b]"
          aria-hidden
        >
          <Action
            icon={<MessageCircle className="size-4" />}
            value={data.formatCount(data.stats.comments)}
          />
          <Action
            icon={<Repeat2 className="size-4" />}
            value={data.formatCount(data.stats.shares)}
          />
          <Action icon={<Heart className="size-4" />} value={data.formatCount(data.stats.likes)} />
          <Action
            icon={<ChartNoAxesColumn className="size-4" />}
            value={data.formatCount(data.stats.views)}
          />
          <span className="flex gap-3">
            <Bookmark className="size-4" />
            <Upload className="size-4" />
          </span>
        </footer>
      </div>
    </article>
  );
};

const Action = ({ icon, value }: { icon: ReactNode; value: string }) => (
  <span className="flex items-center gap-1.5">
    {icon}
    {value}
  </span>
);
