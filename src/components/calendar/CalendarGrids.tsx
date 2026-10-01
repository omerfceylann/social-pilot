"use client";

import { useT } from "@/i18n/useT";
import { isSameMonth } from "@/lib/calendar";
import { cn } from "@/lib/cn";
import type { CalendarItem } from "@/lib/content";
import { formatDateTime } from "@/lib/format";
import { toDayKey } from "@/lib/time";
import { CalendarEvent, STATUS_STYLE } from "./CalendarEvent";

/** Bir gün hücresinde en fazla bu kadar öğe; fazlası "+n daha" (spec §28: tarihleri boğma). */
const MAX_EVENTS_PER_DAY = 3;

type GridProps = {
  weeks: Date[][];
  today: Date;
  itemsByDay: Map<string, CalendarItem[]>;
  onOpen: (item: CalendarItem) => void;
};

const isSameDay = (a: Date, b: Date) => toDayKey(a) === toDayKey(b);

/** Pazartesi'den başlayan kısa gün adları, dile göre ("Pzt" / "Mon"). */
const WeekdayHeader = ({ days }: { days: Date[] }) => {
  const { language } = useT();
  return (
    <div className="grid grid-cols-7 border-b border-border" aria-hidden>
      {days.map((day) => (
        <span
          key={toDayKey(day)}
          className="px-2 py-2 text-center text-caption font-medium text-fg-muted uppercase"
        >
          {formatDateTime(day.toISOString(), language, { weekday: "short" })}
        </span>
      ))}
    </div>
  );
};

type MonthGridProps = GridProps & {
  anchor: Date;
  selectedDay: Date;
  onSelectDay: (day: Date) => void;
  onShowWeek: (day: Date) => void;
};

/**
 * Ay görünümü. Masaüstünde her günde en fazla üç çip; mobilde hücreler küçük
 * olduğu için sadece durum noktaları, seçilen günün listesi altta (ajanda).
 */
export const MonthGrid = ({
  weeks,
  today,
  anchor,
  itemsByDay,
  selectedDay,
  onSelectDay,
  onOpen,
  onShowWeek,
}: MonthGridProps) => {
  const { t, language } = useT();
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <WeekdayHeader days={weeks[0] ?? []} />
      <div className="grid grid-cols-7">
        {weeks.flat().map((day) => {
          const key = toDayKey(day);
          const dayItems = itemsByDay.get(key) ?? [];
          const inMonth = isSameMonth(day, anchor);
          const isToday = isSameDay(day, today);
          const selected = isSameDay(day, selectedDay);
          const hidden = dayItems.length - MAX_EVENTS_PER_DAY;
          const dayLabel = formatDateTime(day.toISOString(), language, {
            weekday: "long",
            day: "numeric",
            month: "long",
          });

          return (
            <div
              key={key}
              className={cn(
                "flex min-h-14 flex-col gap-1 border-r border-b border-border p-1 md:min-h-32 md:p-1.5 [&:nth-child(7n)]:border-r-0",
                !inMonth && "bg-surface-muted/40",
              )}
            >
              <button
                type="button"
                onClick={() => onSelectDay(day)}
                aria-label={t("calendar.dayLabel", { date: dayLabel, count: dayItems.length })}
                aria-pressed={selected}
                className={cn(
                  "flex flex-col items-center gap-1 rounded-md py-1 md:pointer-events-none md:items-end md:py-0",
                  selected && "max-md:bg-surface-muted",
                )}
              >
                <span
                  className={cn(
                    "flex size-6 items-center justify-center rounded-full text-small tabular-nums",
                    isToday
                      ? "bg-accent font-semibold text-accent-fg"
                      : inMonth
                        ? "text-fg"
                        : "text-fg-muted",
                  )}
                >
                  {day.getDate()}
                </span>
                {/* Mobil: durum noktaları */}
                <span className="flex h-1.5 gap-0.5 md:hidden" aria-hidden>
                  {dayItems.slice(0, MAX_EVENTS_PER_DAY).map((item) => (
                    <span
                      key={item.id}
                      className={cn("size-1.5 rounded-full", STATUS_STYLE[item.status].dot)}
                    />
                  ))}
                </span>
              </button>

              {/* Masaüstü: çipler */}
              <ul className="hidden flex-col gap-1 md:flex">
                {dayItems.slice(0, MAX_EVENTS_PER_DAY).map((item) => (
                  <li key={item.id}>
                    <CalendarEvent item={item} onOpen={onOpen} />
                  </li>
                ))}
              </ul>
              {hidden > 0 && (
                <button
                  type="button"
                  onClick={() => onShowWeek(day)}
                  className="hidden self-start rounded px-1.5 text-caption font-medium text-fg-secondary hover:text-fg md:block"
                >
                  {t("calendar.more", { count: hidden })}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/** Hafta görünümü (masaüstü): yedi sütun, her öğe iki satırlık kart. */
export const WeekGrid = ({ weeks, today, itemsByDay, onOpen }: GridProps) => {
  const { t, language } = useT();
  const days = weeks[0] ?? [];
  return (
    <div className="hidden overflow-hidden rounded-xl border border-border bg-surface md:block">
      <div className="grid grid-cols-7">
        {days.map((day) => {
          const key = toDayKey(day);
          const dayItems = itemsByDay.get(key) ?? [];
          const isToday = isSameDay(day, today);
          return (
            <section
              key={key}
              className="flex min-h-96 flex-col border-r border-border last:border-r-0"
              aria-label={formatDateTime(day.toISOString(), language, {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            >
              <header className="flex flex-col items-center gap-1 border-b border-border py-3">
                <span className="text-caption font-medium text-fg-muted uppercase">
                  {formatDateTime(day.toISOString(), language, { weekday: "short" })}
                </span>
                <span
                  className={cn(
                    "flex size-8 items-center justify-center rounded-full text-body font-semibold tabular-nums",
                    isToday ? "bg-accent text-accent-fg" : "text-fg",
                  )}
                >
                  {day.getDate()}
                </span>
              </header>
              <ul className="flex flex-1 flex-col gap-1.5 p-1.5">
                {dayItems.map((item) => (
                  <li key={item.id}>
                    <CalendarEvent item={item} onOpen={onOpen} variant="card" />
                  </li>
                ))}
                {dayItems.length === 0 && (
                  <li className="pt-4 text-center text-caption text-fg-muted">
                    {t("calendar.empty")}
                  </li>
                )}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
};

type AgendaProps = {
  days: Date[];
  today: Date;
  itemsByDay: Map<string, CalendarItem[]>;
  onOpen: (item: CalendarItem) => void;
  className?: string;
};

/** Gün gün liste: mobilde hafta görünümü ve ay görünümünde seçilen gün. */
export const Agenda = ({ days, today, itemsByDay, onOpen, className }: AgendaProps) => {
  const { t, language } = useT();
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      {days.map((day) => {
        const dayItems = itemsByDay.get(toDayKey(day)) ?? [];
        return (
          <section key={toDayKey(day)} className="flex flex-col gap-2">
            <h3
              className={cn(
                "text-small font-semibold",
                isSameDay(day, today) ? "text-accent-text" : "text-fg",
              )}
            >
              {isSameDay(day, today) && `${t("calendar.today")} · `}
              {formatDateTime(day.toISOString(), language, {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </h3>
            {dayItems.length === 0 ? (
              <p className="text-small text-fg-muted">{t("calendar.empty")}</p>
            ) : (
              <ul className="flex flex-col gap-1.5">
                {dayItems.map((item) => (
                  <li key={item.id}>
                    <CalendarEvent item={item} onOpen={onOpen} variant="card" />
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}
    </div>
  );
};
