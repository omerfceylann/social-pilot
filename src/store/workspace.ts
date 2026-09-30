import { connectAccount } from "@/services/accountService";
import {
  buildPlatformSeed,
  resolveDataset,
  resolvePlatformHistory,
} from "@/services/workspaceService";
import type { BrandProfile, PlatformId, SocialAccount } from "@/types";
import { useBrand } from "./useBrand";
import { useContent } from "./useContent";
import { useInbox } from "./useInbox";
import { useSocialAccounts } from "./useSocialAccounts";
import type { WorkspaceSnapshot } from "./useUserDirectory";

/**
 * Çalışma alanı store'larını (marka, içerik, gelen kutusu, sosyal hesaplar) birlikte
 * yöneten tek yer. Store'lar birbirini import etmez.
 *
 * Veri platform platform yüklenir: bir hesap bağlanmadan o platformun önerisi,
 * postu ya da yorumu olmaz.
 */

/** Onboarding sonunda markayı kaydeder. İçerik, hesaplar bağlandıkça gelir. */
export const initializeWorkspace = (profile: BrandProfile) => {
  useBrand.getState().setProfile(profile);
  useContent.getState().reset();
  useInbox.getState().reset();
};

/**
 * Bir sosyal hesabı bağlar ve o platformun verisini yükler. Onboarding'deki
 * bağlantı adımı da, sonradan Marka/Ayarlar'dan bağlama da bunu kullanır.
 * - "Kullandığın platformlar"da seçildiyse → geçmişli veri
 * - Seçilmediyse (yeni açılan hesap) → başlangıç önerileri
 * Hata durumunda ConnectAccountError fırlatır; arayüz code'a göre mesaj gösterir.
 */
export const connectPlatform = async ({
  platform,
  handle,
}: {
  platform: PlatformId;
  handle: string;
}): Promise<SocialAccount> => {
  const profile = useBrand.getState().profile;
  if (!profile) throw new Error("Hesap bağlamadan önce marka profili oluşturulmalı.");

  const dataset = resolveDataset(profile.sector);
  const history = resolvePlatformHistory(profile, platform);
  const account = await connectAccount({
    platform,
    handle,
    displayName: profile.name,
    history,
    followers: history === "established" ? dataset.analytics.followers[platform] : 0,
  });
  useSocialAccounts.getState().connect(account);

  if (!useContent.getState().seededPlatforms.includes(platform)) {
    const seed = buildPlatformSeed({ dataset, profile, platform, history });
    useContent.getState().addPlatformData(platform, seed);
    useInbox.getState().addPlatformData(seed);
  }
  return account;
};

/** Bağlantıyı keser. Geçmiş postlar kalır; o platformun önerileri seçicide gizlenir. */
export const disconnectPlatform = (platform: PlatformId) => {
  useSocialAccounts.getState().disconnect(platform);
};

export const captureWorkspace = (): WorkspaceSnapshot => {
  const { posts, suggestions, usedSuggestionIds, seededPlatforms } = useContent.getState();
  const { comments, conversations } = useInbox.getState();
  return {
    profile: useBrand.getState().profile,
    socialAccounts: useSocialAccounts.getState().accounts,
    posts,
    suggestions,
    usedSuggestionIds,
    seededPlatforms,
    comments,
    conversations,
  };
};

export const restoreWorkspace = (snapshot: WorkspaceSnapshot) => {
  useBrand.setState({ profile: snapshot.profile });
  useSocialAccounts.setState({ accounts: snapshot.socialAccounts });
  useContent.setState({
    posts: snapshot.posts,
    suggestions: snapshot.suggestions,
    usedSuggestionIds: snapshot.usedSuggestionIds,
    seededPlatforms: snapshot.seededPlatforms,
  });
  useInbox.setState({ comments: snapshot.comments, conversations: snapshot.conversations });
};

export const clearWorkspace = () => {
  useBrand.getState().reset();
  useSocialAccounts.getState().reset();
  useContent.getState().reset();
  useInbox.getState().reset();
};
