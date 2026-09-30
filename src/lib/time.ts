import type { RelativeTime } from "@/types";

const MINUTE_MS = 60_000;
const DAY_MS = 86_400_000;

/** { day: -3, time: "18:30" } → üç gün önce saat 18:30 (yerel saat), ISO olarak. */
export const resolveRelativeTime = ({ day, time }: RelativeTime, now: Date) => {
  const [hours = 0, minutes = 0] = time.split(":").map(Number);
  const date = new Date(now);
  date.setDate(date.getDate() + day);
  date.setHours(hours, minutes, 0, 0);
  return date.toISOString();
};

export const minutesAgo = (minutes: number, now: Date) =>
  new Date(now.getTime() - minutes * MINUTE_MS).toISOString();

export const addDays = (date: Date, days: number) => new Date(date.getTime() + days * DAY_MS);

/** Yerel takvim günü anahtarı: "2026-09-30". Takvim ve günlük seriler bunu kullanır. */
export const toDayKey = (value: Date | string) => {
  const date = typeof value === "string" ? new Date(value) : value;
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
};

export const isPast = (iso: string, now = new Date()) => new Date(iso).getTime() < now.getTime();
