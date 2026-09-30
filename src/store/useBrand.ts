import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BrandProfile, BrandRules } from "@/types";
import { persistOptions } from "./persist";

type BrandState = {
  profile: BrandProfile | null;
  setProfile: (profile: BrandProfile) => void;
  updateProfile: (patch: Partial<BrandProfile>) => void;
  updateRules: (patch: Partial<BrandRules>) => void;
  reset: () => void;
};

export const useBrand = create<BrandState>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (profile) => set({ profile }),
      updateProfile: (patch) =>
        set(({ profile }) => (profile ? { profile: { ...profile, ...patch } } : {})),
      updateRules: (patch) =>
        set(({ profile }) =>
          profile ? { profile: { ...profile, rules: { ...profile.rules, ...patch } } } : {},
        ),
      reset: () => set({ profile: null }),
    }),
    persistOptions("brand"),
  ),
);
