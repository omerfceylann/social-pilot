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

export const NOTIFICATION_KEYS = ["comments", "messages", "aiSuggestions", "weeklyReport"] as const;
export type NotificationKey = (typeof NOTIFICATION_KEYS)[number];

type PreferencesState = {
  mode: ColorMode;
  accent: AccentTheme;
  language: Language;
  /** Masaüstünde sidebar daraltılmış mı (tablette her zaman dar). */
  sidebarCollapsed: boolean;
  /** Ayarlar > Bildirimler (mock; tercih saklanır, bildirim gönderilmez). */
  notifications: Record<NotificationKey, boolean>;
};

type PreferencesActions = {
  setMode: (mode: ColorMode) => void;
  setAccent: (accent: AccentTheme) => void;
  setLanguage: (language: Language) => void;
  toggleSidebar: () => void;
  setNotification: (key: NotificationKey, enabled: boolean) => void;
};

export const usePreferences = create<PreferencesState & PreferencesActions>()(
  persist(
    (set) => ({
      mode: DEFAULT_COLOR_MODE,
      accent: DEFAULT_ACCENT,
      language: DEFAULT_LANGUAGE,
      sidebarCollapsed: false,
      notifications: { comments: true, messages: true, aiSuggestions: true, weeklyReport: false },
      setMode: (mode) => set({ mode }),
      setAccent: (accent) => set({ accent }),
      setLanguage: (language) => set({ language }),
      toggleSidebar: () => set(({ sidebarCollapsed }) => ({ sidebarCollapsed: !sidebarCollapsed })),
      setNotification: (key, enabled) =>
        set(({ notifications }) => ({ notifications: { ...notifications, [key]: enabled } })),
    }),
    {
      name: PREFERENCES_STORAGE_KEY,
      // Sunucu ile ilk istemci render'ı aynı kalsın diye elle rehydrate ediyoruz
      // (bkz. components/providers/StoreHydration).
      skipHydration: true,
      partialize: ({ mode, accent, language, sidebarCollapsed, notifications }) => ({
        mode,
        accent,
        language,
        sidebarCollapsed,
        notifications,
      }),
    },
  ),
);
