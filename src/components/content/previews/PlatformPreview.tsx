"use client";

import { AnimatePresence, motion } from "motion/react";
import { useT } from "@/i18n/useT";
import { formatCompact, formatRelative } from "@/lib/format";
import { transition } from "@/lib/motion";
import { fieldsFor } from "@/lib/content";
import { createRandom } from "@/lib/random";
import type { Post, PostAnalytics } from "@/types";
import {
  InstagramFeedPreview,
  InstagramReelPreview,
  InstagramStoryPreview,
} from "./InstagramPreview";
import { LinkedInPreview } from "./LinkedInPreview";
import { TikTokPreview } from "./TikTokPreview";
import { XPreview } from "./XPreview";
import { YouTubeShortsPreview, YouTubeVideoPreview } from "./YouTubePreview";
import type { PreviewData } from "./shared";

type PlatformPreviewProps = {
  post: Post;
  brandName: string;
  handle: string;
  followers: number;
  /** Yayınlandıysa gerçek (mock) analitik; değilse sayılar tahmin edilir. */
  analytics?: PostAnalytics | null;
};

/**
 * Yayınlanmamış içerik için önizleme sayıları: takipçiye göre makul bir tahmin.
 * Post id'siyle tohumlanır; her tuşta değişip göz yormaz.
 */
const estimateStats = (postId: string, followers: number): PreviewData["stats"] => {
  const random = createRandom(`preview:${postId}`);
  const views = Math.round(Math.max(300, followers * random.between(0.35, 0.9)));
  const likes = Math.round(views * random.between(0.05, 0.09));
  return {
    views,
    likes,
    comments: Math.round(likes * random.between(0.03, 0.07)),
    shares: Math.round(likes * random.between(0.05, 0.12)),
    saves: Math.round(likes * random.between(0.06, 0.14)),
  };
};

const assertNever = (value: never): never => {
  throw new Error(`Bilinmeyen platform: ${String(value)}`);
};

const PreviewFor = ({ data, post }: { data: PreviewData; post: Post }) => {
  switch (post.platform) {
    case "instagram":
      if (post.format === "reel") return <InstagramReelPreview data={data} />;
      if (post.format === "story") return <InstagramStoryPreview data={data} />;
      return <InstagramFeedPreview data={data} />;
    case "tiktok":
      return <TikTokPreview data={data} />;
    case "youtube":
      return post.format === "short" ? (
        <YouTubeShortsPreview data={data} />
      ) : (
        <YouTubeVideoPreview data={data} />
      );
    case "linkedin":
      return <LinkedInPreview data={data} />;
    case "x":
      return <XPreview data={data} />;
    default:
      return assertNever(post.platform);
  }
};

/**
 * Her platformun kendi tasarım dilinde önizleme (spec §21, §40). Platform ya da
 * biçim değişince önizleme anında atlamaz, yumuşakça geçer (spec §7).
 */
export const PlatformPreview = ({
  post,
  brandName,
  handle,
  followers,
  analytics,
}: PlatformPreviewProps) => {
  const { t, language } = useT();
  const formatCount = (value: number) => formatCompact(value, language);

  // Önizleme paylaşılacak içerikle birebir aynı: biçimde olmayan alanlar boş gider,
  // CTA metne ekleniyorsa açıklamanın sonunda görünür.
  const fields = fieldsFor(post.platform, post.format);
  const cta = post.cta?.trim();
  const caption = fields.caption ? post.caption : "";
  const mediaList = post.media.slice(0, fields.media.max);

  const data: PreviewData = {
    format: post.format,
    title: post.title,
    caption:
      fields.cta === "inCaption" && cta ? [caption, cta].filter(Boolean).join("\n\n") : caption,
    hashtags: fields.hashtags ? post.hashtags : [],
    music: fields.music ? post.music : undefined,
    cta: fields.cta === "linkSticker" ? cta : undefined,
    media: mediaList[0],
    mediaList,
    brandName,
    handle,
    followers,
    stats: analytics ?? estimateStats(post.id, followers),
    timeLabel: post.publishedAt ? formatRelative(post.publishedAt, language) : t("preview.now"),
    formatCount,
    labels: {
      more: t("preview.more"),
      follow: t("preview.follow"),
      subscribe: t("preview.subscribe"),
      likes: (count) => t("preview.likes", { count }),
      viewAllComments: (count) => t("preview.viewAllComments", { count }),
      sendMessage: t("preview.sendMessage"),
      followers: (count) => t("preview.followers", { count }),
      subscribers: (count) => t("preview.subscribers", { count }),
      views: (count) => t("preview.views", { count }),
      commentsCount: (count) => t("preview.commentsCount", { count }),
      repostsCount: (count) => t("preview.repostsCount", { count }),
      forYou: t("preview.forYou"),
      following: t("preview.following"),
      originalSound: t("preview.originalSound"),
      home: t("preview.home"),
      friends: t("preview.friends"),
      inbox: t("preview.inbox"),
      profile: t("preview.profile"),
      like: t("preview.like"),
      dislike: t("preview.dislike"),
      comment: t("preview.comment"),
      repost: t("preview.repost"),
      remix: t("preview.remix"),
      send: t("preview.send"),
      share: t("preview.share"),
      save: t("preview.save"),
      addMedia: t("preview.addMedia"),
      previous: t("preview.previous"),
      next: t("preview.next"),
      slide: (index, total) => t("preview.slide", { index, total }),
      untitled: t("content.untitled"),
      postPreview: t("preview.postPreview"),
    },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={`${post.platform}-${post.format}`}
        initial={{ opacity: 0, y: 8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -6, scale: 0.98 }}
        transition={transition.base}
      >
        <PreviewFor data={data} post={post} />
      </motion.div>
    </AnimatePresence>
  );
};
