"use client";

import { Check, ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useId, useState, type FormEvent } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { formatCompact } from "@/lib/format";
import { transition } from "@/lib/motion";
import { PLATFORMS } from "@/mock/platforms";
import { ConnectAccountError } from "@/services/accountService";
import { toast } from "@/store/useToasts";
import { connectPlatform } from "@/store/workspace";
import type { PlatformHistory, PlatformId, SocialAccount } from "@/types";
import { PlatformIcon } from "./PlatformIcon";

type SocialAccountCardProps = {
  platform: PlatformId;
  /** Bağlanınca hangi verinin geleceği; etiket ve yardım metnini belirler. */
  history: PlatformHistory;
  account?: SocialAccount;
  /** Modal gibi zaten çerçeveli bir yüzeyin içinde: kendi kenarlığı ve dolgusu olmaz. */
  bare?: boolean;
};

/**
 * Tek bir platformun bağlantı satırı (spec §16). Onboarding'de ve Marka/Ayarlar'da
 * aynı bileşen kullanılır. Gerçek OAuth yok; kullanıcı adıyla mock bağlantı.
 */
export const SocialAccountCard = ({
  platform,
  history,
  account,
  bare = false,
}: SocialAccountCardProps) => {
  const { t, language } = useT();
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const meta = PLATFORMS[platform];
  const [handle, setHandle] = useState("");
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!handle.trim()) return;
    setConnecting(true);
    setError(null);
    try {
      await connectPlatform({ platform, handle });
      toast.success(t("toasts.accountConnected", { platform: meta.name }));
    } catch (caught) {
      if (!(caught instanceof ConnectAccountError)) throw caught;
      setError(
        caught.code === "invalidHandle"
          ? t("errors.invalidHandle", { platform: meta.name })
          : t("errors.accountNotFound"),
      );
    } finally {
      setConnecting(false);
    }
  };

  return (
    <div
      className={cn(
        // @container: form düzeni ekrana değil kartın genişliğine göre seçilir (dar modalda da sığar).
        "@container flex flex-col gap-4",
        !bare && "rounded-xl border bg-surface p-4 transition-colors duration-200 sm:p-5",
        !bare && (account ? "border-success/30" : "border-border"),
      )}
    >
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-muted">
          <PlatformIcon platform={platform} colored />
        </span>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="text-body font-medium text-fg">{meta.name}</span>
          <span className="truncate text-caption text-fg-muted">
            {history === "established"
              ? t("onboarding.connect.usedHint")
              : t("onboarding.connect.newHint")}
          </span>
        </div>
        <Badge tone={history === "established" ? "accent" : "outline"}>
          {history === "established"
            ? t("onboarding.connect.usedLabel")
            : t("onboarding.connect.newLabel")}
        </Badge>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {account ? (
          <motion.div
            key="connected"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition.base}
            className="flex items-center gap-2 text-small"
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-success text-white [&_svg]:size-3">
              <Check strokeWidth={3} />
            </span>
            <span className="font-medium text-fg">{t("onboarding.connect.connected")}</span>
            <span className="text-fg-muted">·</span>
            <span className="truncate text-fg-secondary">@{account.handle}</span>
            <span className="text-fg-muted">·</span>
            <span className="text-fg-secondary tabular-nums">
              {t("onboarding.connect.followers", {
                count: formatCompact(account.followers, language),
              })}
            </span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -4 }}
            transition={transition.fast}
            onSubmit={handleSubmit}
            className="flex flex-col gap-2"
          >
            {/* Dar kartta input tam genişlikte, butonlar altında; geniş kartta tek satır. */}
            <div className="flex flex-col gap-3 @lg:flex-row @lg:gap-2">
              <label htmlFor={inputId} className="sr-only">
                {t("onboarding.connect.handleLabel", { platform: meta.name })}
              </label>
              <div className="relative flex-1">
                <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-body text-fg-muted">
                  @
                </span>
                <Input
                  id={inputId}
                  value={handle}
                  onChange={(event) => setHandle(event.target.value)}
                  placeholder={t("onboarding.connect.handlePlaceholder")}
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? errorId : undefined}
                  className="pl-7"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  type="submit"
                  variant="primary"
                  loading={connecting}
                  disabled={!handle.trim()}
                  className="flex-1 @lg:flex-none"
                >
                  {t("onboarding.connect.connect")}
                </Button>
                {history === "starter" && (
                  <Button asChild variant="secondary" className="flex-1 @lg:flex-none">
                    <a href={meta.signupUrl} target="_blank" rel="noopener noreferrer">
                      {t("onboarding.connect.createAccount")}
                      <ExternalLink />
                    </a>
                  </Button>
                )}
              </div>
            </div>
            {error && (
              <p id={errorId} role="alert" className="text-caption text-danger">
                {error}
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
