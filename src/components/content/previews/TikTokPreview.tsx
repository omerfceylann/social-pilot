"use client";

import {
  Bookmark,
  Forward,
  Heart,
  House,
  Inbox,
  MessageCircle,
  Music2,
  Plus,
  Search,
  User,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { BrandAvatar, CaptionText, PhoneFrame, PreviewMedia, type PreviewData } from "./shared";

/**
 * TikTok "Sana Özel" akışı: tam ekran video, sağda dikey eylem sütunu,
 * dönen müzik diski, altta kullanıcı adı + caption + müzik, siyah alt menü.
 */
export const TikTokPreview = ({ data }: { data: PreviewData }) => {
  const { labels } = data;
  return (
    <PhoneFrame>
      <div className="absolute inset-0 bottom-12">
        <PreviewMedia
          media={data.media}
          addMediaLabel={labels.addMedia}
          className="absolute inset-0"
          dark
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60" />

        <div className="absolute inset-x-0 top-9 flex items-center justify-center gap-4 text-[13px] font-semibold text-white">
          <span className="text-white/60">{labels.following}</span>
          <span className="relative">
            {labels.forYou}
            <span className="absolute -bottom-1.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-white" />
          </span>
          <Search className="absolute right-4 size-5" aria-hidden />
        </div>

        <div className="absolute right-2 bottom-4 flex flex-col items-center gap-3.5 text-[10px] font-semibold text-white">
          <span className="relative mb-2">
            <BrandAvatar name={data.brandName} className="size-10 text-[12px] ring-2 ring-white" />
            <span className="absolute -bottom-2 left-1/2 flex size-4 -translate-x-1/2 items-center justify-center rounded-full bg-[#fe2c55]">
              <Plus className="size-3" strokeWidth={3} aria-hidden />
            </span>
          </span>
          <Action
            icon={<Heart className="size-7 fill-white" />}
            value={data.formatCount(data.stats.likes)}
          />
          <Action
            icon={<MessageCircle className="size-7 fill-white" />}
            value={data.formatCount(data.stats.comments)}
          />
          <Action
            icon={<Bookmark className="size-7 fill-white" />}
            value={data.formatCount(data.stats.saves)}
          />
          <Action
            icon={<Forward className="size-7 fill-white" />}
            value={data.formatCount(data.stats.shares)}
          />
          <span className="flex size-9 animate-[spin_6s_linear_infinite] items-center justify-center rounded-full bg-gradient-to-br from-neutral-700 to-neutral-950 ring-[5px] ring-neutral-800 motion-reduce:animate-none">
            <BrandAvatar name={data.brandName} className="size-4 text-[6px]" />
          </span>
        </div>

        <div className="absolute right-16 bottom-4 left-3 flex flex-col gap-1.5 text-[12px] text-white">
          <span className="font-semibold">@{data.handle}</span>
          <CaptionText
            caption={data.caption}
            hashtags={data.hashtags}
            hashtagClassName="font-semibold"
            className="line-clamp-3"
          />
          <span className="flex items-center gap-1.5 text-[11px]">
            <Music2 className="size-3 shrink-0" aria-hidden />
            <span className="truncate">
              {data.music
                ? `${data.music.title} · ${data.music.artist}`
                : `${labels.originalSound} · ${data.brandName}`}
            </span>
          </span>
        </div>
      </div>

      <nav
        className="absolute inset-x-0 bottom-0 flex h-12 items-start justify-around bg-black pt-2 text-[8px] text-white/70"
        aria-hidden
      >
        <NavItem icon={<House className="size-[18px] text-white" />} label={labels.home} active />
        <NavItem icon={<Users className="size-[18px]" />} label={labels.friends} />
        <span className="flex h-6 w-9 items-center justify-center rounded-lg bg-white shadow-[-3px_0_0_#25f4ee,3px_0_0_#fe2c55]">
          <Plus className="size-4 text-black" strokeWidth={3} />
        </span>
        <NavItem icon={<Inbox className="size-[18px]" />} label={labels.inbox} />
        <NavItem icon={<User className="size-[18px]" />} label={labels.profile} />
      </nav>
    </PhoneFrame>
  );
};

const Action = ({ icon, value }: { icon: ReactNode; value: string }) => (
  <span className="flex flex-col items-center gap-0.5 drop-shadow" aria-hidden>
    {icon}
    {value}
  </span>
);

const NavItem = ({
  icon,
  label,
  active = false,
}: {
  icon: ReactNode;
  label: string;
  active?: boolean;
}) => (
  <span
    className={
      active
        ? "flex flex-col items-center gap-0.5 text-white"
        : "flex flex-col items-center gap-0.5"
    }
  >
    {icon}
    {label}
  </span>
);
