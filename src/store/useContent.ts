import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ContentFormat, ContentStyle, PlatformId, Post, PostSuggestion } from "@/types";
import { persistOptions } from "./persist";

type PostPatch = Partial<Omit<Post, "id" | "origin" | "createdAt">>;

type ContentState = {
  posts: Post[];
  suggestions: PostSuggestion[];
  /** Kullanıcının içeriğe dönüştürdüğü ya da gizlediği öneriler. */
  usedSuggestionIds: string[];
  /** Verisi yüklenmiş platformlar; yeniden bağlanan hesap verisi iki kez eklenmez. */
  seededPlatforms: PlatformId[];

  /** Bağlanan bir platformun verisini ekler (bkz. store/workspace.connectPlatform). */
  addPlatformData: (
    platform: PlatformId,
    data: { posts: Post[]; suggestions: PostSuggestion[] },
  ) => void;
  /** Öneriden taslak oluşturur ve yeni postun id'sini döner. */
  createFromSuggestion: (suggestion: PostSuggestion) => string;
  /** Öneri olmadan, boş bir taslak oluşturur ve id'sini döner. */
  createBlankPost: (input: {
    platform: PlatformId;
    format: ContentFormat;
    theme: ContentStyle;
  }) => string;
  addSuggestion: (suggestion: PostSuggestion) => void;
  updatePost: (id: string, patch: PostPatch) => void;
  schedulePost: (id: string, scheduledAt: string) => void;
  publishPost: (id: string) => void;
  deletePost: (id: string) => void;
  dismissSuggestion: (id: string) => void;
  reset: () => void;
};

const now = () => new Date().toISOString();

const emptyContent = { posts: [], suggestions: [], usedSuggestionIds: [], seededPlatforms: [] };

export const useContent = create<ContentState>()(
  persist(
    (set) => ({
      ...emptyContent,

      addPlatformData: (platform, data) =>
        set((state) => ({
          posts: [...state.posts, ...data.posts],
          suggestions: [...state.suggestions, ...data.suggestions],
          seededPlatforms: [...state.seededPlatforms, platform],
        })),

      createFromSuggestion: (suggestion) => {
        const id = `post-${crypto.randomUUID()}`;
        const timestamp = now();
        const post: Post = {
          id,
          platform: suggestion.platform,
          format: suggestion.format,
          status: "draft",
          title: suggestion.title,
          caption: suggestion.caption,
          hashtags: suggestion.hashtags,
          music: suggestion.music,
          cta: suggestion.cta,
          media: suggestion.media,
          theme: suggestion.theme,
          createdAt: timestamp,
          updatedAt: timestamp,
          scheduledAt: suggestion.suggestedAt,
          // Kullanıcının yayınladığı içerik de AI tahminine yakın performans gösterir.
          performanceHint: suggestion.estimate.potential,
          origin: "user",
          suggestionId: suggestion.id,
        };
        set(({ posts, usedSuggestionIds }) => ({
          posts: [post, ...posts],
          usedSuggestionIds: [...usedSuggestionIds, suggestion.id],
        }));
        return id;
      },

      createBlankPost: ({ platform, format, theme }) => {
        const id = `post-${crypto.randomUUID()}`;
        const timestamp = now();
        const post: Post = {
          id,
          platform,
          format,
          status: "draft",
          title: "",
          caption: "",
          hashtags: [],
          media: [],
          theme,
          createdAt: timestamp,
          updatedAt: timestamp,
          origin: "user",
        };
        set(({ posts }) => ({ posts: [post, ...posts] }));
        return id;
      },

      addSuggestion: (suggestion) =>
        set(({ suggestions }) => ({ suggestions: [suggestion, ...suggestions] })),

      updatePost: (id, patch) =>
        set(({ posts }) => ({
          posts: posts.map((post) =>
            post.id === id ? { ...post, ...patch, updatedAt: now() } : post,
          ),
        })),

      schedulePost: (id, scheduledAt) =>
        set(({ posts }) => ({
          posts: posts.map((post) =>
            post.id === id ? { ...post, status: "scheduled", scheduledAt, updatedAt: now() } : post,
          ),
        })),

      publishPost: (id) =>
        set(({ posts }) => ({
          posts: posts.map((post) =>
            post.id === id
              ? {
                  ...post,
                  status: "published",
                  publishedAt: now(),
                  scheduledAt: undefined,
                  updatedAt: now(),
                }
              : post,
          ),
        })),

      deletePost: (id) => set(({ posts }) => ({ posts: posts.filter((post) => post.id !== id) })),

      dismissSuggestion: (id) =>
        set(({ usedSuggestionIds }) => ({ usedSuggestionIds: [...usedSuggestionIds, id] })),

      reset: () => set(emptyContent),
    }),
    persistOptions("content"),
  ),
);
