import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  BrandProfile,
  Comment,
  Conversation,
  PlatformId,
  Post,
  PostSuggestion,
  SocialAccount,
} from "@/types";
import { persistOptions } from "./persist";
import type { User } from "./useSession";

/** Bir kullanıcının çalışma alanının tamamı; çıkışta alınır, girişte geri yüklenir. */
export type WorkspaceSnapshot = {
  profile: BrandProfile | null;
  socialAccounts: Partial<Record<PlatformId, SocialAccount>>;
  posts: Post[];
  suggestions: PostSuggestion[];
  usedSuggestionIds: string[];
  seededPlatforms: PlatformId[];
  comments: Comment[];
  conversations: Conversation[];
};

export type DirectoryEntry = {
  user: User;
  onboarded: boolean;
  /** Onboarding bitmeden çıkış yapılırsa null. */
  snapshot: WorkspaceSnapshot | null;
  lastActiveAt: string;
};

type UserDirectoryState = {
  /** Anahtar: normalize edilmiş kullanıcı adı. */
  entries: Record<string, DirectoryEntry>;
  save: (entry: DirectoryEntry) => void;
  clear: () => void;
};

/**
 * Mock kullanıcı veritabanı (tarayıcıda). Kayıt olan herkes burada kalır;
 * "uygulamayı bir süredir kullanan" kullanıcı kullanıcı adıyla geri döner.
 */
export const useUserDirectory = create<UserDirectoryState>()(
  persist(
    (set) => ({
      entries: {},
      save: (entry) =>
        set(({ entries }) => ({ entries: { ...entries, [entry.user.username]: entry } })),
      clear: () => set({ entries: {} }),
    }),
    persistOptions("directory"),
  ),
);
