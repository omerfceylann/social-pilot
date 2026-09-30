import { translate } from "@/i18n/translate";
import { connectAccount } from "@/services/accountService";
import {
  buildFirstReactions,
  buildPlatformSeed,
  resolveDataset,
  resolvePlatformHistory,
} from "@/services/workspaceService";
import type { BrandProfile, PlatformId, SocialAccount } from "@/types";
import { useBrand } from "./useBrand";
import { useContent } from "./useContent";
import { useInbox } from "./useInbox";
import { usePreferences } from "./usePreferences";
import { useSocialAccounts } from "./useSocialAccounts";
import { toast } from "./useToasts";
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

// ---------- Paylaşım ve ilk yorumlar ----------

/** Paylaşımdan ilk yorumlara kadar geçen süre; demo için kısa tutuldu. */
const FIRST_REACTION_DELAY_MS = 20_000;
/** Sayfa yeniden açıldığında eksik kalan ilk yorumlar için kısa bekleme. */
const CATCH_UP_DELAY_MS = 3_000;

/** Aynı post için birden fazla zamanlayıcı kurulmasın (sayfa ömrü boyunca). */
const scheduledReactions = new Set<string>();

/**
 * Zamanı gelince ilk yorumları ekler. Bu arada kullanıcı çıkış yapmış, post
 * silinmiş ya da yorumlar zaten gelmişse hiçbir şey yapmaz.
 */
const deliverFirstReactions = (postId: string) => {
  const profile = useBrand.getState().profile;
  const post = useContent.getState().posts.find((item) => item.id === postId);
  const alreadyReacted = useInbox.getState().reactedPostIds.includes(postId);
  if (!profile || !post || post.status !== "published" || alreadyReacted) return;

  const comments = buildFirstReactions({ dataset: resolveDataset(profile.sector), profile, post });
  useInbox.getState().addFirstReactions(postId, comments);

  const language = usePreferences.getState().language;
  toast.info(
    translate(language, "toasts.firstComments"),
    translate(language, "toasts.firstCommentsDetail", {
      title: post.title,
      count: comments.length,
    }),
  );
};

const scheduleFirstReactions = (postId: string, delayMs: number) => {
  if (scheduledReactions.has(postId)) return;
  scheduledReactions.add(postId);
  setTimeout(() => {
    scheduledReactions.delete(postId);
    deliverFirstReactions(postId);
  }, delayMs);
};

/**
 * Postu yayınlar ve ilk yorumları zamanlar. Arayüzdeki "Paylaş" bunu çağırır;
 * yayınlanan post İçerikler, Takvim ve Analitik'te aynı kaynaktan görünür.
 */
export const publishPost = (postId: string) => {
  useContent.getState().publishPost(postId);
  scheduleFirstReactions(postId, FIRST_REACTION_DELAY_MS);
};

/**
 * Zamanlayıcı sayfa kapanınca kaybolur. Sayfa açılışında ve girişte, yayınlanmış
 * ama ilk yorumunu almamış kullanıcı postları için eksik yorumları tamamlar.
 */
export const catchUpFirstReactions = () => {
  const { reactedPostIds } = useInbox.getState();
  useContent
    .getState()
    .posts.filter(
      (post) =>
        post.origin === "user" && post.status === "published" && !reactedPostIds.includes(post.id),
    )
    .forEach((post) => scheduleFirstReactions(post.id, CATCH_UP_DELAY_MS));
};

// ---------- Anlık görüntü ----------

export const captureWorkspace = (): WorkspaceSnapshot => {
  const { posts, suggestions, usedSuggestionIds, seededPlatforms } = useContent.getState();
  const { comments, conversations, reactedPostIds } = useInbox.getState();
  return {
    profile: useBrand.getState().profile,
    socialAccounts: useSocialAccounts.getState().accounts,
    posts,
    suggestions,
    usedSuggestionIds,
    seededPlatforms,
    comments,
    conversations,
    reactedPostIds,
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
  useInbox.setState({
    comments: snapshot.comments,
    conversations: snapshot.conversations,
    reactedPostIds: snapshot.reactedPostIds,
  });
};

export const clearWorkspace = () => {
  useBrand.getState().reset();
  useSocialAccounts.getState().reset();
  useContent.getState().reset();
  useInbox.getState().reset();
};
