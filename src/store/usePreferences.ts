import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_LANGUAGE, type Language } from "@/i18n/config";
import {
  DEFAULT_ACCENT,
  DEFAULT_COLOR_MODE,
  PREFERENCES_STORAGE_KEY,
  type AccentTheme,
  type ColorMode,
} from "@/lib/theme";

type PreferencesState = {
  mode: ColorMode;
  accent: AccentTheme;
  language: Language;
  /** Masaüstünde sidebar daraltılmış mı (tablette her zaman dar). */
  sidebarCollapsed: boolean;
};

type PreferencesActions = {
  setMode: (mode: ColorMode) => void;
  setAccent: (accent: AccentTheme) => void;
  setLanguage: (language: Language) => void;
  toggleSidebar: () => void;
};

export const usePreferences = create<PreferencesState & PreferencesActions>()(
  persist(
    (set) => ({
      mode: DEFAULT_COLOR_MODE,
      accent: DEFAULT_ACCENT,
      language: DEFAULT_LANGUAGE,
      sidebarCollapsed: false,
      setMode: (mode) => set({ mode }),
      setAccent: (accent) => set({ accent }),
      setLanguage: (language) => set({ language }),
      toggleSidebar: () => set(({ sidebarCollapsed }) => ({ sidebarCollapsed: !sidebarCollapsed })),
    }),
    {
      name: PREFERENCES_STORAGE_KEY,
      // Sunucu ile ilk istemci render'ı aynı kalsın diye elle rehydrate ediyoruz
      // (bkz. components/providers/StoreHydration).
      skipHydration: true,
      partialize: ({ mode, accent, language, sidebarCollapsed }) => ({
        mode,
        accent,
        language,
        sidebarCollapsed,
      }),
    },
  ),
);
