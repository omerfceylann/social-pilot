"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, type FormEvent } from "react";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { useT } from "@/i18n/useT";
import { AuthError } from "@/services/authService";
import { signIn } from "@/store/auth";
import { useUserDirectory } from "@/store/useUserDirectory";
import { AuthHeading } from "./AuthLayout";

const MAX_SAVED_ACCOUNTS = 4;

/**
 * Kullanıcı adıyla giriş (şifre yok, prototip). "Bu cihazdaki hesaplar"
 * bir hesap seçici gibi çalışır: demoda hesaplar arasında hızlı geçiş sağlar.
 */
export const LoginForm = () => {
  const { t } = useT();
  const router = useRouter();
  const entries = useUserDirectory((state) => state.entries);
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState<string | null>(null);

  const savedAccounts = useMemo(
    () =>
      Object.values(entries)
        .toSorted((a, b) => b.lastActiveAt.localeCompare(a.lastActiveAt))
        .slice(0, MAX_SAVED_ACCOUNTS),
    [entries],
  );

  const continueAs = async (value: string) => {
    setPending(value);
    setError(null);
    try {
      const user = await signIn(value);
      const onboarded = useUserDirectory.getState().entries[user.username]?.onboarded ?? false;
      router.replace(onboarded ? "/" : "/onboarding");
    } catch (caught) {
      if (!(caught instanceof AuthError)) throw caught;
      setError(t("errors.userNotFound"));
      setPending(null);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!username.trim()) return setError(t("auth.required"));
    void continueAs(username);
  };

  return (
    <>
      <AuthHeading title={t("auth.loginTitle")} subtitle={t("auth.loginSubtitle")} />

      {savedAccounts.length > 0 && (
        <div className="mb-8 flex flex-col gap-3">
          <p className="text-small font-medium text-fg-secondary">{t("auth.savedAccounts")}</p>
          <ul className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface">
            {savedAccounts.map(({ user }) => (
              <li key={user.username} className="border-b border-border last:border-b-0">
                <button
                  type="button"
                  onClick={() => void continueAs(user.username)}
                  disabled={pending !== null}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-surface-muted disabled:opacity-60"
                >
                  <Avatar name={user.brandName} size="sm" />
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-body font-medium text-fg">{user.brandName}</span>
                    <span className="truncate text-caption text-fg-muted">@{user.username}</span>
                  </span>
                  <ChevronRight className="size-4 text-fg-muted" aria-hidden />
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 text-caption text-fg-muted">
            <span className="h-px flex-1 bg-border" />
            {t("auth.or")}
            <span className="h-px flex-1 bg-border" />
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <Field label={t("auth.username")} error={error ?? undefined}>
          <Input
            name="username"
            autoComplete="username"
            autoCapitalize="none"
            spellCheck={false}
            placeholder={t("auth.usernamePlaceholder")}
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
              setError(null);
            }}
          />
        </Field>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={pending !== null && pending === username}
          className="w-full"
        >
          {t("auth.signIn")}
        </Button>
      </form>
      <p className="mt-6 text-center text-body text-fg-secondary">
        {t("auth.noAccount")}{" "}
        <Link href="/register" className="font-medium text-accent-text hover:underline">
          {t("auth.createAccount")}
        </Link>
      </p>
    </>
  );
};
