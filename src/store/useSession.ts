import { create } from "zustand";
import { persist } from "zustand/middleware";
import { persistOptions } from "./persist";

export type User = { name: string; email: string };

type SessionState = {
  user: User | null;
  onboarded: boolean;
  register: (user: User) => void;
  completeOnboarding: () => void;
  reset: () => void;
};

/** Mock oturum: gerçek kimlik doğrulama yok, kayıt formu sadece kullanıcıyı saklar. */
export const useSession = create<SessionState>()(
  persist(
    (set) => ({
      user: null,
      onboarded: false,
      register: (user) => set({ user, onboarded: false }),
      completeOnboarding: () => set({ onboarded: true }),
      reset: () => set({ user: null, onboarded: false }),
    }),
    persistOptions("session"),
  ),
);
