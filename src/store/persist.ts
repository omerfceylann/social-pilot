import type { PersistOptions } from "zustand/middleware";

/**
 * Tüm kalıcı store'ların ortak ayarı. skipHydration: sunucu ile ilk istemci
 * render'ı aynı kalsın diye localStorage okuması StoreHydration'da elle yapılır.
 * version: veri şekli değişirse eski kayıtları taşımak (migrate) için.
 */
export const persistOptions = <State>(
  name: string,
  extra: Partial<PersistOptions<State>> = {},
): PersistOptions<State> => ({
  name: `socialpilot:${name}`,
  version: 1,
  skipHydration: true,
  ...extra,
});
