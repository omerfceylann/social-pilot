import type { CalendarItem } from "./content";
import { toDayKey } from "./time";

/**
 * Takvim ızgarası yardımcıları. Hafta Pazartesi başlar (Türkiye ve ISO 8601).
 * Hepsi saf fonksiyon: aynı tarih her zaman aynı ızgarayı üretir.
 */

export const CALENDAR_VIEWS = ["month", "week"] as const;
export type CalendarView = (typeof CALENDAR_VIEWS)[number];

export const isCalendarView = (value: string | null): value is CalendarView =>
  CALENDAR_VIEWS.some((view) => view === value);

const DAYS_IN_WEEK = 7;

/** Saat bilgisini atılmış yeni bir tarih (yerel saatle gün başı). */
export const startOfDay = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

/** Pazartesi = 0 … Pazar = 6 */
const mondayIndex = (date: Date) => (date.getDay() + 6) % DAYS_IN_WEEK;

export const startOfWeek = (date: Date) => {
  const day = startOfDay(date);
  day.setDate(day.getDate() - mondayIndex(day));
  return day;
};

export const shiftDays = (date: Date, days: number) => {
  const next = startOfDay(date);
  next.setDate(next.getDate() + days);
  return next;
};

/** Ayın 1'inden başlayarak ay kaydırır (31 Ocak + 1 ay → 1 Şubat, Mart'a taşmaz). */
export const shiftMonths = (date: Date, months: number) =>
  new Date(date.getFullYear(), date.getMonth() + months, 1);

export const weekDays = (anchor: Date) => {
  const start = startOfWeek(anchor);
  return Array.from({ length: DAYS_IN_WEEK }, (_, index) => shiftDays(start, index));
};

/** Ayın tüm günlerini kapsayan tam haftalar (5 ya da 6 satır). */
export const monthWeeks = (anchor: Date) => {
  const first = new Date(anchor.getFullYear(), anchor.getMonth(), 1);
  const last = new Date(anchor.getFullYear(), anchor.getMonth() + 1, 0);
  const weeks: Date[][] = [];
  for (let start = startOfWeek(first); start <= last; start = shiftDays(start, DAYS_IN_WEEK)) {
    weeks.push(weekDays(start));
  }
  return weeks;
};

export const isSameMonth = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();

/** Takvim öğelerini güne göre gruplar; her gün kendi içinde saate göre sıralı. */
export const groupByDay = (items: CalendarItem[]) => {
  const byDay = new Map<string, CalendarItem[]>();
  for (const item of items) {
    const key = toDayKey(item.date);
    byDay.set(key, [...(byDay.get(key) ?? []), item]);
  }
  for (const [key, dayItems] of byDay) {
    byDay.set(
      key,
      dayItems.toSorted((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    );
  }
  return byDay;
};

/** "2026-10-05" → yerel gün başı. Geçersizse null. */
export const parseDayKey = (value: string | null) => {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  const date = new Date(year, month - 1, day);
  return Number.isNaN(date.getTime()) ? null : date;
};
