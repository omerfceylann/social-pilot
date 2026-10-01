"use client";

import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { Popover } from "@/components/ui/Popover";
import { useT } from "@/i18n/useT";
import { isSameMonth, monthWeeks, shiftMonths } from "@/lib/calendar";
import { cn } from "@/lib/cn";
import { formatDateTime } from "@/lib/format";
import { toDayKey } from "@/lib/time";

type DatePickerProps = {
  /** Takvimin odak tarihi; seçicide vurgulanır. */
  value: Date;
  today: Date;
  /** İçerik olan günler (gün anahtarı); küçük bir noktayla işaretlenir. */
  markedDays: Set<string>;
  /** Tetikleyicide görünen metin, ör. "Ekim 2026" ya da "28 Eyl – 4 Eki 2026". */
  label: string;
  onSelect: (date: Date) => void;
};

/**
 * Takvim başlığına tıklayınca açılan gün seçici. İçinde ay değiştirilip bir gün
 * seçilir; takvim o günün ayına (ay görünümü) ya da haftasına (hafta görünümü) gider.
 */
export const DatePicker = ({ value, today, markedDays, label, onSelect }: DatePickerProps) => {
  const { t, language } = useT();
  const [open, setOpen] = useState(false);
  /** Seçicide gezilen ay; takvimi seçim yapılana kadar değiştirmez. */
  const [visibleMonth, setVisibleMonth] = useState(value);
  const weeks = monthWeeks(visibleMonth);

  const handleOpenChange = (next: boolean) => {
    // Her açılışta seçili tarihin ayından başla.
    if (next) setVisibleMonth(value);
    setOpen(next);
  };

  const select = (day: Date) => {
    onSelect(day);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <Popover.Trigger asChild>
        <button
          type="button"
          aria-label={t("calendar.pickDate", { period: label })}
          className="ml-1 inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-heading capitalize transition-colors hover:bg-surface-muted data-[state=open]:bg-surface-muted"
        >
          <span aria-live="polite">{label}</span>
          <ChevronDown
            className={cn(
              "size-4 text-fg-muted transition-transform duration-200",
              open && "rotate-180",
            )}
            aria-hidden
          />
        </button>
      </Popover.Trigger>
      <Popover.Content className="w-72" aria-label={t("calendar.pickDateTitle")}>
        <div className="flex items-center justify-between gap-2 pb-2">
          <IconButton
            label={t("calendar.previousMonth")}
            icon={<ChevronLeft />}
            size="sm"
            showTooltip={false}
            onClick={() => setVisibleMonth(shiftMonths(visibleMonth, -1))}
          />
          <span className="text-body font-semibold capitalize" aria-live="polite">
            {formatDateTime(visibleMonth.toISOString(), language, {
              month: "long",
              year: "numeric",
            })}
          </span>
          <IconButton
            label={t("calendar.nextMonth")}
            icon={<ChevronRight />}
            size="sm"
            showTooltip={false}
            onClick={() => setVisibleMonth(shiftMonths(visibleMonth, 1))}
          />
        </div>

        <div className="grid grid-cols-7 gap-0.5">
          {(weeks[0] ?? []).map((day) => (
            <span
              key={`head-${toDayKey(day)}`}
              className="py-1 text-center text-caption font-medium text-fg-muted uppercase"
              aria-hidden
            >
              {formatDateTime(day.toISOString(), language, { weekday: "narrow" })}
            </span>
          ))}
          {weeks.flat().map((day) => {
            const key = toDayKey(day);
            const isSelected = key === toDayKey(value);
            const isToday = key === toDayKey(today);
            const inMonth = isSameMonth(day, visibleMonth);
            return (
              <button
                key={key}
                type="button"
                onClick={() => select(day)}
                aria-pressed={isSelected}
                aria-label={formatDateTime(day.toISOString(), language, {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                className={cn(
                  "relative flex aspect-square flex-col items-center justify-center rounded-lg text-small tabular-nums transition-colors",
                  isSelected
                    ? "bg-accent font-semibold text-accent-fg"
                    : isToday
                      ? "font-semibold text-accent-text ring-1 ring-accent/40 ring-inset hover:bg-surface-muted"
                      : inMonth
                        ? "text-fg hover:bg-surface-muted"
                        : "text-fg-muted hover:bg-surface-muted",
                )}
              >
                {day.getDate()}
                {markedDays.has(key) && (
                  <span
                    className={cn(
                      "absolute bottom-1 size-1 rounded-full",
                      isSelected ? "bg-accent-fg" : "bg-accent",
                    )}
                    aria-hidden
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-2 flex justify-end border-t border-border pt-2">
          <button
            type="button"
            onClick={() => select(today)}
            className="rounded-md px-2 py-1 text-small font-medium text-accent-text hover:bg-surface-muted"
          >
            {t("calendar.today")}
          </button>
        </div>
      </Popover.Content>
    </Popover>
  );
};
