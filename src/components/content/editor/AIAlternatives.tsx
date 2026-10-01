"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { AIBadge } from "@/components/ai/AIBadge";
import { Skeleton } from "@/components/ui/Skeleton";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { revealVariants, staggerContainer } from "@/lib/motion";

type AIAlternativesProps<Item> = {
  /** Panel açılınca bir kez çağrılır (mock AI gecikmesiyle). */
  load: () => Promise<Item[]>;
  getKey: (item: Item) => string;
  render: (item: Item) => ReactNode;
  isSelected: (item: Item) => boolean;
  /** AI'ın en uygun gördüğü seçenek; sadece o ✦ AI Önerisi rozeti taşır. */
  isPreferred?: (item: Item) => boolean;
  onSelect: (item: Item) => void;
};

type LoadState<Item> = { status: "loading" } | { status: "ready"; items: Item[] };

/**
 * Bir alanın "Diğer AI önerileri" listesi (spec §19). Kullanıcının seçtiği
 * değer işaretlenir; seçmek alanı değiştirir, elle düzenleme her zaman serbest.
 */
export const AIAlternatives = <Item,>({
  load,
  getKey,
  render,
  isSelected,
  isPreferred,
  onSelect,
}: AIAlternativesProps<Item>) => {
  const { t } = useT();
  const [state, setState] = useState<LoadState<Item>>({ status: "loading" });
  // İstek panel açılırken bir kez başlar; load her render'da yeni fonksiyon olsa da tekrar çağrılmaz.
  const [request] = useState(load);

  useEffect(() => {
    let cancelled = false;
    void request.then((items) => {
      if (!cancelled) setState({ status: "ready", items });
    });
    return () => {
      cancelled = true;
    };
  }, [request]);

  // Aynı seçenek iki kez gelirse (ör. AI'ın tercihi alternatiflerde de varsa) bir kez göster;
  // ilk görülen kalır, böylece tercih edilen seçenek başta durur.
  const items =
    state.status === "ready"
      ? state.items.filter(
          (item, index, all) => all.findIndex((other) => getKey(other) === getKey(item)) === index,
        )
      : [];

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-accent/15 bg-accent-soft/60 p-3">
      <AIBadge>{state.status === "loading" ? t("ai.thinking") : t("ai.otherSuggestions")}</AIBadge>
      {state.status === "loading" ? (
        <div className="flex flex-col gap-2" aria-busy>
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-4/5" />
        </div>
      ) : items.length === 0 ? (
        <p className="text-small text-fg-secondary">{t("content.editor.noAlternatives")}</p>
      ) : (
        <motion.ul
          variants={staggerContainer(0.05)}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-1.5"
        >
          {items.map((item) => {
            const selected = isSelected(item);
            return (
              <motion.li key={getKey(item)} variants={revealVariants}>
                <button
                  type="button"
                  onClick={() => onSelect(item)}
                  aria-pressed={selected}
                  className={cn(
                    "flex w-full items-start gap-2.5 rounded-md border bg-surface px-3 py-2 text-left text-small transition-colors",
                    selected
                      ? "border-accent/40 text-fg"
                      : "border-border text-fg-secondary hover:border-border-strong hover:text-fg",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border [&_svg]:size-2.5",
                      selected ? "border-accent bg-accent text-accent-fg" : "border-border-strong",
                    )}
                    aria-hidden
                  >
                    {selected && <Check strokeWidth={3} />}
                  </span>
                  <span className="min-w-0 flex-1">{render(item)}</span>
                  {isPreferred?.(item) && (
                    <AIBadge variant="filled" className="shrink-0">
                      {t("ai.suggestion")}
                    </AIBadge>
                  )}
                </button>
              </motion.li>
            );
          })}
        </motion.ul>
      )}
    </div>
  );
};
