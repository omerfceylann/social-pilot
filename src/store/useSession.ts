import { create } from "zustand";
import { persist } from "zustand/middleware";
import { persistOptions } from "./persist";

export type User = {
  username: string;
  name: string;
  email: string;
  /** Kayıtta alınır; mock verideki {brand} yer tutucusu bununla doldurulur. */
  brandName: string;
};

type SessionState = {
  /** O an giriş yapmış kullanıcı. */
  user: User | null;
  onboarded: boolean;
  start: (session: { user: User; onboarded: boolean }) => void;
  completeOnboarding: () => void;
  /** Ayarlar > Hesap: ad, e-posta (kullanıcı adı değişmez; giriş anahtarı). */
  updateUser: (patch: Partial<Pick<User, "name" | "email" | "brandName">>) => void;
  reset: () => void;
};

/**
 * Aktif oturum. Kayıt / giriş / çıkış akışları store/auth.ts'te;
 * bu store sadece o an kimin içeride olduğunu tutar.
 */
export const useSession = create<SessionState>()(
  persist(
    (set) => ({
      user: null,
      onboarded: false,
      start: ({ user, onboarded }) => set({ user, onboarded }),
      completeOnboarding: () => set({ onboarded: true }),
      updateUser: (patch) => set(({ user }) => (user ? { user: { ...user, ...patch } } : {})),
      reset: () => set({ user: null, onboarded: false }),
    }),
    persistOptions("session"),
  ),
);
