"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RadioGroup } from "radix-ui";
import { useId, useState } from "react";
import { PageContainer, PageHeader } from "@/components/layout/PageHeader";
import { PlatformIcon } from "@/components/social/PlatformIcon";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { Switch } from "@/components/ui/Switch";
import { useFormDraft } from "@/hooks/useFormDraft";
import { LANGUAGES } from "@/i18n/config";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { formatCompact } from "@/lib/format";
import { ACCENT_SWATCHES, ACCENT_THEMES, COLOR_MODES, isColorMode } from "@/lib/theme";
import { PLATFORMS } from "@/mock/platforms";
import { resetDemo } from "@/store/auth";
import { NOTIFICATION_KEYS, usePreferences } from "@/store/usePreferences";
import { useSession, type User } from "@/store/useSession";
import { useSocialAccounts } from "@/store/useSocialAccounts";
import { toast } from "@/store/useToasts";
import { PLATFORM_IDS } from "@/types";
import { SaveBar } from "./SaveBar";
import { SettingsSection } from "./SettingsSection";

/**
 * Ayarlar (spec §31): Görünüm, Dil, Hesap, Bildirimler, Bağlı hesaplar. Sade:
 * tercihler anında uygulanır; sadece hesap bilgileri "Kaydet" ister.
 */
export const SettingsView = () => {
  const { t } = useT();
  const user = useSession((state) => state.user);
  if (!user) return null;

  return (
    <PageContainer className="gap-6">
      <PageHeader title={t("nav.settings")} description={t("settings.subtitle")} />
      <AppearanceSection />
      <LanguageSection />
      <AccountSection key={user.username} user={user} />
      <NotificationsSection />
      <ConnectedAccountsSection />
      <DemoSection />
    </PageContainer>
  );
};

const AppearanceSection = () => {
  const { t } = useT();
  const mode = usePreferences((state) => state.mode);
  const setMode = usePreferences((state) => state.setMode);
  const accent = usePreferences((state) => state.accent);
  const setAccent = usePreferences((state) => state.setAccent);
  const modeLabelId = useId();
  const accentLabelId = useId();

  return (
    <SettingsSection title={t("settings.appearance")} description={t("settings.appearanceHint")}>
      <div className="flex flex-col gap-2">
        <span id={modeLabelId} className="text-small font-medium text-fg">
          {t("settings.mode")}
        </span>
        <SegmentedControl
          aria-labelledby={modeLabelId}
          value={mode}
          onChange={(next) => isColorMode(next) && setMode(next)}
          options={COLOR_MODES.map((value) => ({ value, label: t(`settings.modes.${value}`) }))}
          className="self-start"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span id={accentLabelId} className="text-small font-medium text-fg">
          {t("settings.accent")}
        </span>
        <RadioGroup.Root
          aria-labelledby={accentLabelId}
          value={accent}
          onValueChange={(next) => {
            const match = ACCENT_THEMES.find((value) => value === next);
            if (match) setAccent(match);
          }}
          orientation="horizontal"
          className="flex flex-wrap gap-3"
        >
          {ACCENT_THEMES.map((value) => (
            <RadioGroup.Item
              key={value}
              value={value}
              aria-label={t(`settings.accents.${value}`)}
              className={cn(
                "flex size-9 items-center justify-center rounded-full ring-offset-2 ring-offset-surface transition-[box-shadow,transform] duration-150 hover:scale-105",
                accent === value && "ring-2 ring-fg",
              )}
              style={{ backgroundColor: ACCENT_SWATCHES[value] }}
            >
              {accent === value && <Check className="size-4 text-white drop-shadow" aria-hidden />}
            </RadioGroup.Item>
          ))}
        </RadioGroup.Root>
      </div>
    </SettingsSection>
  );
};

const LanguageSection = () => {
  const { t } = useT();
  const language = usePreferences((state) => state.language);
  const setLanguage = usePreferences((state) => state.setLanguage);
  return (
    <SettingsSection title={t("settings.language")} description={t("settings.languageHint")}>
      <SegmentedControl
        aria-label={t("settings.language")}
        value={language}
        onChange={setLanguage}
        options={LANGUAGES.map((code) => ({ value: code, label: t(`languages.${code}`) }))}
        className="self-start"
      />
    </SettingsSection>
  );
};

const AccountSection = ({ user }: { user: User }) => {
  const { t } = useT();
  const updateUser = useSession((state) => state.updateUser);
  const { draft, dirty, update, reset } = useFormDraft({ name: user.name, email: user.email });
  const invalidEmail = !/^\S+@\S+\.\S+$/.test(draft.email);

  return (
    <SettingsSection title={t("settings.account")} description={t("settings.accountHint")}>
      <Field label={t("auth.name")}>
        <Input value={draft.name} onChange={(event) => update({ name: event.target.value })} />
      </Field>
      <Field
        label={t("auth.email")}
        error={dirty && invalidEmail ? t("auth.invalidEmail") : undefined}
      >
        <Input
          type="email"
          value={draft.email}
          onChange={(event) => update({ email: event.target.value })}
        />
      </Field>
      <Field label={t("auth.username")} hint={t("settings.usernameHint")}>
        <Input value={`@${user.username}`} readOnly disabled />
      </Field>
      <SaveBar
        visible={dirty}
        onDiscard={reset}
        onSave={() => {
          if (!draft.name.trim() || invalidEmail) return;
          updateUser({ name: draft.name.trim(), email: draft.email.trim() });
          toast.success(t("settings.accountSaved"));
        }}
      />
    </SettingsSection>
  );
};

const NotificationsSection = () => {
  const { t } = useT();
  const notifications = usePreferences((state) => state.notifications);
  const setNotification = usePreferences((state) => state.setNotification);
  return (
    <SettingsSection
      title={t("settings.notifications")}
      description={t("settings.notificationsHint")}
    >
      <ul className="flex flex-col divide-y divide-border">
        {NOTIFICATION_KEYS.map((key) => (
          <li
            key={key}
            className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
          >
            {/* Ad: sadece başlık; açıklama ekran okuyucuda ayrıca okunur. */}
            <div className="flex flex-col gap-0.5">
              <label htmlFor={`notify-${key}`} className="text-body font-medium text-fg">
                {t(`settings.notify.${key}.title`)}
              </label>
              <span id={`notify-${key}-hint`} className="text-small text-fg-secondary">
                {t(`settings.notify.${key}.description`)}
              </span>
            </div>
            <Switch
              id={`notify-${key}`}
              aria-describedby={`notify-${key}-hint`}
              checked={notifications[key]}
              onCheckedChange={(checked) => setNotification(key, checked)}
            />
          </li>
        ))}
      </ul>
    </SettingsSection>
  );
};

const ConnectedAccountsSection = () => {
  const { t, language } = useT();
  const accounts = useSocialAccounts((state) => state.accounts);
  const connected = PLATFORM_IDS.flatMap((id) => {
    const account = accounts[id];
    return account ? [account] : [];
  });

  return (
    <SettingsSection
      title={t("settings.connectedAccounts")}
      description={t("settings.connectedAccountsHint")}
    >
      {connected.length === 0 ? (
        <p className="text-body text-fg-secondary">{t("empty.noAccounts")}</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {connected.map((account) => (
            <li key={account.platform} className="flex items-center gap-3 text-body">
              <PlatformIcon platform={account.platform} colored className="size-5" />
              <span className="font-medium text-fg">{PLATFORMS[account.platform].name}</span>
              <span className="truncate text-fg-secondary">@{account.handle}</span>
              <span className="ml-auto shrink-0 text-small text-fg-muted tabular-nums">
                {t("onboarding.connect.followers", {
                  count: formatCompact(account.followers, language),
                })}
              </span>
            </li>
          ))}
        </ul>
      )}
      <Button asChild variant="secondary" className="self-start">
        <Link href="/brand?tab=accounts">{t("settings.manageAccounts")}</Link>
      </Button>
    </SettingsSection>
  );
};

/** Mülakat demosu için: tüm kayıtlı kullanıcıları ve verileri siler (tercihler kalır). */
const DemoSection = () => {
  const { t } = useT();
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  return (
    <SettingsSection title={t("settings.demo")} description={t("settings.demoHint")}>
      <Button variant="danger" className="self-start" onClick={() => setConfirming(true)}>
        {t("settings.resetDemo")}
      </Button>
      <Modal
        open={confirming}
        onOpenChange={setConfirming}
        title={t("settings.resetDemoTitle")}
        description={t("settings.resetDemoDescription")}
        closeLabel={t("common.close")}
        size="sm"
        footer={
          <>
            <Button variant="secondary" onClick={() => setConfirming(false)}>
              {t("common.cancel")}
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                resetDemo();
                router.replace("/register");
              }}
            >
              {t("settings.resetDemo")}
            </Button>
          </>
        }
      />
    </SettingsSection>
  );
};
