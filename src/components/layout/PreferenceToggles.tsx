"use client";

import { Moon, Sun } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { LANGUAGES } from "@/i18n/config";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { usePreferences } from "@/store/usePreferences";

/**
 * Koyu/açık tema arasında geçiş. Tercih "sistem" ise ekranda gerçekte görünen
 * temaya bakılır: kullanıcı neyi görüyorsa butona basınca tersi gelir.
 */
export const ThemeToggle = () => {
  const { t } = useT();
  const mode = usePreferences((state) => state.mode);
  const setMode = usePreferences((state) => state.setMode);
  const systemDark = useMediaQuery("(prefers-color-scheme: dark)");
  const isDark = mode === "system" ? systemDark : mode === "dark";

  return (
    <IconButton
      label={isDark ? t("shell.switchToLight") : t("shell.switchToDark")}
      icon={isDark ? <Sun /> : <Moon />}
      onClick={() => setMode(isDark ? "light" : "dark")}
    />
  );
};

/** Arayüz dili: TR | EN. Mock içerik (caption, yorum) marka dilinde kalır. */
export const LanguageSwitch = ({ className }: { className?: string }) => {
  const { t } = useT();
  const language = usePreferences((state) => state.language);
  const setLanguage = usePreferences((state) => state.setLanguage);
  return (
    <SegmentedControl
      value={language}
      onChange={setLanguage}
      options={LANGUAGES.map((value) => ({ value, label: value.toLocaleUpperCase("en") }))}
      aria-label={t("shell.language")}
      className={className}
    />
  );
};

/** Sağ üstteki tema + dil seçimi; giriş, onboarding ve uygulama kabuğunda aynı. */
export const PreferenceToggles = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-2", className)}>
    <LanguageSwitch />
    <ThemeToggle />
  </div>
);
