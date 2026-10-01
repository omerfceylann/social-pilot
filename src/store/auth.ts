import {
  AuthError,
  assertValidUsername,
  normalizeUsername,
  simulateAuthRequest,
} from "@/services/authService";
import { useSession, type User } from "./useSession";
import { useUserDirectory, type DirectoryEntry } from "./useUserDirectory";
import {
  captureWorkspace,
  catchUpFirstReactions,
  clearWorkspace,
  restoreWorkspace,
} from "./workspace";

/**
 * Kayıt, giriş ve çıkış akışları (mock).
 * - Yeni kullanıcı: kayıt → onboarding → hesap bağlama. Her platformun verisi,
 *   "Kullandığın platformlar"da seçilip seçilmediğine göre geçmişli ya da başlangıç
 *   verisidir (bkz. workspaceService.resolvePlatformHistory).
 * - Uygulamayı bir süredir kullanan: kullanıcı adıyla giriş → kaydedilmiş çalışma alanı.
 */

/** Aktif kullanıcının güncel hâlini dizine yazar. Hesap değişmeden önce çağrılır. */
const persistActiveUser = () => {
  const { user, onboarded } = useSession.getState();
  if (!user) return;
  useUserDirectory.getState().save({
    user,
    onboarded,
    snapshot: onboarded ? captureWorkspace() : null,
    lastActiveAt: new Date().toISOString(),
  });
};

export type RegisterInput = Omit<User, "username"> & { username: string };

export const registerUser = async (input: RegisterInput) => {
  const username = normalizeUsername(input.username);
  assertValidUsername(username);
  await simulateAuthRequest();
  if (useUserDirectory.getState().entries[username]) throw new AuthError("usernameTaken");

  persistActiveUser();
  clearWorkspace();
  const user: User = {
    username,
    name: input.name.trim(),
    email: input.email.trim(),
    brandName: input.brandName.trim(),
  };
  useSession.getState().start({ user, onboarded: false });
  persistActiveUser();
  return user;
};

/** Aktif kullanıcıyı kaydeder, sonra seçilen kullanıcının çalışma alanını yükler. */
const activate = (entry: DirectoryEntry) => {
  persistActiveUser();
  clearWorkspace();
  if (entry.snapshot) restoreWorkspace(entry.snapshot);
  useSession.getState().start({ user: entry.user, onboarded: entry.onboarded });
  catchUpFirstReactions();
  return entry;
};

export const signIn = async (rawUsername: string) => {
  const username = normalizeUsername(rawUsername);
  await simulateAuthRequest();
  const entry = useUserDirectory.getState().entries[username];
  if (!entry) throw new AuthError("userNotFound");
  return activate(entry).user;
};

/**
 * Kenar çubuğundaki hesap menüsünden, bu cihazdaki başka bir hesaba anında geçiş.
 * Kimlik zaten bu cihazda doğrulandığı için ağ gecikmesi simüle edilmez.
 * Hesabın onboarding'i bitmiş mi bilgisini döner (yönlendirme için).
 */
export const switchAccount = (username: string) => {
  const entry = useUserDirectory.getState().entries[username];
  if (!entry) throw new AuthError("userNotFound");
  return activate(entry).onboarded;
};

/**
 * Kayıtlı bir hesabı ve çalışma alanını bu cihazdan siler (geri alınamaz).
 * Aktif hesap silinemez; önce çıkış yapılmalı.
 */
export const removeSavedAccount = (username: string) => {
  if (useSession.getState().user?.username === username) return;
  useUserDirectory.getState().remove(username);
};

export const signOut = () => {
  persistActiveUser();
  clearWorkspace();
  useSession.getState().reset();
};

/** Onboarding bitti: oturumu işaretle ve dizini güncelle. */
export const finishOnboarding = () => {
  useSession.getState().completeOnboarding();
  persistActiveUser();
};

/** Demo'yu tamamen sıfırlar: tüm kayıtlı kullanıcılar dahil (tercihler kalır). */
export const resetDemo = () => {
  clearWorkspace();
  useSession.getState().reset();
  useUserDirectory.getState().clear();
};
