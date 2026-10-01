"use client";

import { useCallback, useMemo } from "react";
import { withInboxComments } from "@/lib/content";
import { PLATFORMS } from "@/mock/platforms";
import { getPostAnalytics } from "@/services/analyticsService";
import { useBrand } from "@/store/useBrand";
import { useContent } from "@/store/useContent";
import { useInbox } from "@/store/useInbox";
import { useSocialAccounts } from "@/store/useSocialAccounts";
import { PLATFORM_IDS, type PlatformId, type Post } from "@/types";
import { useWorkspaceContext } from "./useWorkspaceContext";

export type EditablePostFields = Pick<
  Post,
  "title" | "caption" | "hashtags" | "music" | "cta" | "media" | "platform" | "format"
>;

/**
 * İçerik editörünün verisi ve eylemleri (spec §19). Düzenlemeler doğrudan
 * store'a yazılır (otomatik kayıt): sayfa kapansa da taslak kaybolmaz.
 */
export const useContentEditor = (postId: string) => {
  const post = useContent((state) => state.posts.find((item) => item.id === postId));
  const suggestion = useContent((state) =>
    post?.suggestionId
      ? state.suggestions.find((item) => item.id === post.suggestionId)
      : undefined,
  );
  const updatePost = useContent((state) => state.updatePost);
  const profile = useBrand((state) => state.profile);
  const accounts = useSocialAccounts((state) => state.accounts);
  const comments = useInbox((state) => state.comments);
  const context = useWorkspaceContext();

  const connected = useMemo(() => PLATFORM_IDS.filter((id) => id in accounts), [accounts]);
  const trend = useMemo(
    () => context?.trends.find((item) => item.id === suggestion?.relatedTrendId),
    [context, suggestion?.relatedTrendId],
  );
  const analytics = useMemo(() => {
    const result = post && context ? getPostAnalytics(post, context.analytics) : null;
    return post && result ? withInboxComments(result, post, comments) : result;
  }, [comments, context, post]);

  const update = useCallback(
    (patch: Partial<EditablePostFields>) => updatePost(postId, patch),
    [postId, updatePost],
  );

  /** Platform değişince biçim o platformda yoksa platformun varsayılanına geçer. */
  const setPlatform = useCallback(
    (platform: PlatformId) => {
      if (!post) return;
      const meta = PLATFORMS[platform];
      const format = meta.formats.includes(post.format) ? post.format : meta.defaultFormat;
      update({ platform, format });
    },
    [post, update],
  );

  return {
    post,
    suggestion,
    trend,
    analytics,
    profile,
    account: post ? accounts[post.platform] : undefined,
    connected,
    mediaTips: context?.mediaTips,
    readOnly: post?.status === "published",
    update,
    setPlatform,
  };
};

export type ContentEditorState = ReturnType<typeof useContentEditor>;
