"use client";

import {
  Ellipsis,
  Globe,
  Heart,
  MessageSquareText,
  Plus,
  Repeat2,
  Send,
  ThumbsUp,
} from "lucide-react";
import type { ReactNode } from "react";
import { BrandAvatar, CaptionText, MediaCarousel, PreviewMedia, type PreviewData } from "./shared";

/**
 * LinkedIn şirket sayfası gönderisi: kare logo, takipçi sayısı, "Takip et",
 * "…daha fazla" ile kısalan metin, medya, tepki sayıları ve dört eylem.
 */
export const LinkedInPreview = ({ data }: { data: PreviewData }) => {
  const { labels } = data;
  return (
    <div className="mx-auto w-full max-w-[460px] rounded-2xl bg-[#f4f2ee] p-3 shadow-lg ring-1 ring-black/5">
      <article className="overflow-hidden rounded-lg bg-white text-[13px] text-[#191919] ring-1 ring-black/[0.08]">
        <header className="flex items-start gap-2.5 px-3 pt-3">
          <BrandAvatar name={data.brandName} square className="size-11 text-[14px]" />
          <span className="flex min-w-0 flex-1 flex-col leading-tight">
            <span className="truncate font-semibold">{data.brandName}</span>
            <span className="text-[11px] text-[#666]">
              {labels.followers(data.formatCount(data.followers))}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-[#666]">
              {data.timeLabel} · <Globe className="size-3" aria-hidden />
            </span>
          </span>
          <span className="flex items-center gap-1 font-semibold text-[#0a66c2]">
            <Plus className="size-4" aria-hidden />
            {labels.follow}
          </span>
          <Ellipsis className="size-4 text-[#666]" aria-hidden />
        </header>

        <div className="px-3 py-2.5">
          <CaptionText
            caption={data.caption}
            hashtags={data.hashtags}
            hashtagClassName="font-semibold text-[#0a66c2]"
            className="line-clamp-3"
          />
          <span className="text-[#666]">…{labels.more}</span>
        </div>

        {data.format === "carousel" ? (
          <MediaCarousel
            items={data.mediaList}
            labels={labels}
            aspectClassName="aspect-square"
            sizes="440px"
          />
        ) : (
          (data.media || data.format !== "post") && (
            <PreviewMedia
              media={data.media}
              addMediaLabel={labels.addMedia}
              className={data.format === "video" ? "aspect-video w-full" : "aspect-square w-full"}
              sizes="440px"
              showPlay
            />
          )
        )}

        <div className="flex items-center justify-between px-3 py-2 text-[11px] text-[#666]">
          <span className="flex items-center gap-1">
            <span className="flex -space-x-1" aria-hidden>
              <Reaction className="bg-[#378fe9]">
                <ThumbsUp className="size-2.5 fill-white" />
              </Reaction>
              <Reaction className="bg-[#df704d]">
                <Heart className="size-2.5 fill-white" />
              </Reaction>
              <Reaction className="bg-[#6dae4f]">👏</Reaction>
            </span>
            {data.formatCount(data.stats.likes)}
          </span>
          <span>
            {labels.commentsCount(data.formatCount(data.stats.comments))} ·{" "}
            {labels.repostsCount(data.formatCount(data.stats.shares))}
          </span>
        </div>

        <footer
          className="mx-3 flex justify-between border-t border-black/[0.08] py-1 text-[12px] font-semibold text-[#666]"
          aria-hidden
        >
          <Action icon={<ThumbsUp className="size-4 -scale-x-100" />}>{labels.like}</Action>
          <Action icon={<MessageSquareText className="size-4" />}>{labels.comment}</Action>
          <Action icon={<Repeat2 className="size-4" />}>{labels.repost}</Action>
          <Action icon={<Send className="size-4" />}>{labels.send}</Action>
        </footer>
      </article>
    </div>
  );
};

const Reaction = ({ className, children }: { className: string; children: ReactNode }) => (
  <span
    className={`flex size-4 items-center justify-center rounded-full text-[8px] ring-2 ring-white ${className}`}
  >
    {children}
  </span>
);

const Action = ({ icon, children }: { icon: ReactNode; children: ReactNode }) => (
  <span className="flex items-center gap-1 rounded px-1.5 py-2">
    {icon}
    <span className="hidden min-[400px]:inline">{children}</span>
  </span>
);
