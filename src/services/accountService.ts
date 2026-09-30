import { PLATFORMS } from "@/mock/platforms";
import type { PlatformHistory, PlatformId, SocialAccount } from "@/types";
import { simulateLatency } from "./latency";

export type ConnectErrorCode = "invalidHandle" | "notFound";

/** Beklenen, kullanıcıya gösterilebilir bağlantı hatası. Arayüz code'a göre mesaj seçer. */
export class ConnectAccountError extends Error {
  constructor(readonly code: ConnectErrorCode) {
    super(code);
    this.name = "ConnectAccountError";
  }
}

export const normalizeHandle = (handle: string) => handle.trim().replace(/^@/, "");

/**
 * Mock hesap bağlama (spec §16). Gerçek OAuth yok: kullanıcı adı platform
 * kuralına uyuyorsa "bağlı" bir hesap döner. Takipçi sayısı geçmişe göre
 * çağıran tarafından verilir (yeni açılan hesap 0 takipçiyle başlar).
 * Hata akışını gösterebilmek için "test" / "hata" ile başlayan adlar bulunamaz.
 */
export const connectAccount = async ({
  platform,
  handle,
  displayName,
  history,
  followers,
}: {
  platform: PlatformId;
  handle: string;
  displayName: string;
  history: PlatformHistory;
  followers: number;
}): Promise<SocialAccount> => {
  const normalized = normalizeHandle(handle);
  if (!PLATFORMS[platform].handlePattern.test(normalized)) {
    throw new ConnectAccountError("invalidHandle");
  }
  await simulateLatency(900, 1600);
  if (/^(test|hata)/i.test(normalized)) throw new ConnectAccountError("notFound");

  return {
    platform,
    handle: normalized,
    displayName,
    history,
    followers,
    connectedAt: new Date().toISOString(),
  };
};
