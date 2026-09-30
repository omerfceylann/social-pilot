import { buildWorkspaceSeed, resolveDataset } from "@/services/workspaceService";
import type { BrandProfile } from "@/types";
import { useBrand } from "./useBrand";
import { useContent } from "./useContent";
import { useInbox } from "./useInbox";
import { useSocialAccounts } from "./useSocialAccounts";
import type { WorkspaceSnapshot } from "./useUserDirectory";

/**
 * Çalışma alanı store'larını (marka, içerik, gelen kutusu, sosyal hesaplar) birlikte
 * yöneten tek yer. Store'lar birbirini import etmez.
 */

/**
 * Onboarding sonunda çalışma alanını doldurur.
 * starter → sektörün başlangıç paketi, established → sektörün hazır verisi.
 * Her iki durumda da metinler kullanıcının marka adıyla kişiselleştirilir.
 */
export const initializeWorkspace = (profile: BrandProfile) => {
  const seed = buildWorkspaceSeed({ dataset: resolveDataset(profile.sector), profile });
  useBrand.getState().setProfile(profile);
  useContent.getState().seed(seed);
  useInbox.getState().seed(seed);
};

export const captureWorkspace = (): WorkspaceSnapshot => {
  const { posts, suggestions, usedSuggestionIds } = useContent.getState();
  const { comments, conversations } = useInbox.getState();
  return {
    profile: useBrand.getState().profile,
    socialAccounts: useSocialAccounts.getState().accounts,
    posts,
    suggestions,
    usedSuggestionIds,
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
  });
  useInbox.setState({ comments: snapshot.comments, conversations: snapshot.conversations });
};

export const clearWorkspace = () => {
  useBrand.getState().reset();
  useSocialAccounts.getState().reset();
  useContent.getState().reset();
  useInbox.getState().reset();
};
