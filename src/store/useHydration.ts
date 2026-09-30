import { create } from "zustand";

type HydrationState = { hydrated: boolean; markHydrated: () => void };

/** Kalıcı store'lar localStorage'dan yüklendi mi? Kalıcı değil; her sayfa açılışında false başlar. */
export const useHydration = create<HydrationState>()((set) => ({
  hydrated: false,
  markHydrated: () => set({ hydrated: true }),
}));

/** Yükleme bitene kadar false: ekranlar bu sürede boş durum yerine skeleton göstermeli. */
export const useHydrated = () => useHydration((state) => state.hydrated);
