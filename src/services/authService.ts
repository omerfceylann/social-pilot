import { simulateLatency } from "./latency";

/**
 * Mock kimlik doğrulama. Gerçek sunucu ya da şifre yok; kullanıcılar tarayıcıdaki
 * dizinde (useUserDirectory) tutulur. Gerçek bir API'ye geçilirse değişecek yer burası.
 */

export type AuthErrorCode = "invalidUsername" | "usernameTaken" | "userNotFound";

/** Beklenen, kullanıcıya gösterilebilir hata. Arayüz code'a göre mesaj seçer. */
export class AuthError extends Error {
  constructor(readonly code: AuthErrorCode) {
    super(code);
    this.name = "AuthError";
  }
}

const USERNAME_PATTERN = /^[a-z0-9._]{3,24}$/;

/** "  @Elif.Yildiz " → "elif.yildiz" */
export const normalizeUsername = (username: string) =>
  username.trim().replace(/^@/, "").toLocaleLowerCase("tr");

/** Kullanıcı adı: 3–24 karakter; harf, rakam, nokta ve alt çizgi. */
export const assertValidUsername = (username: string) => {
  if (!USERNAME_PATTERN.test(username)) throw new AuthError("invalidUsername");
};

/** Sunucuya gidip gelme hissi: kayıt ve girişte kısa bir bekleme. */
export const simulateAuthRequest = () => simulateLatency(500, 900);
