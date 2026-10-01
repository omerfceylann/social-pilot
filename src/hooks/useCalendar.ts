"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import {
  groupByDay,
  isCalendarView,
  monthWeeks,
  parseDayKey,
  shiftDays,
  shiftMonths,
  startOfDay,
  weekDays,
  type CalendarView,
} from "@/lib/calendar";
import { buildCalendarItems } from "@/lib/content";
import { toDayKey } from "@/lib/time";
import { useContent } from "@/store/useContent";
import { useSocialAccounts } from "@/store/useSocialAccounts";
import { PLATFORM_IDS } from "@/types";
import { useNow } from "./useNow";

const DAYS_IN_WEEK = 7;

/**
 * Takvimin durumu (spec §28). Görünüm (ay/hafta) ve odak tarihi adreste:
 * /calendar?view=week&date=2026-10-05. Öğeler İçerikler ile aynı store'dan
 * türetilir; paylaşılan bir post burada kendiliğinden "yayınlandı" olur.
 */
export const useCalendar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const now = useNow();
  const posts = useContent((state) => state.posts);
  const suggestions = useContent((state) => state.suggestions);
  const usedSuggestionIds = useContent((state) => state.usedSuggestionIds);
  const accounts = useSocialAccounts((state) => state.accounts);

  const today = useMemo(() => startOfDay(new Date(now)), [now]);
  const requestedView = searchParams.get("view");
  const view: CalendarView = isCalendarView(requestedView) ? requestedView : "month";
  const anchor = parseDayKey(searchParams.get("date")) ?? today;

  const items = useMemo(() => {
    const connected = PLATFORM_IDS.filter((id) => id in accounts);
    return buildCalendarItems(posts, suggestions, usedSuggestionIds, connected);
  }, [accounts, posts, suggestions, usedSuggestionIds]);
  const itemsByDay = useMemo(() => groupByDay(items), [items]);

  const navigate = useCallback(
    (next: { view: CalendarView; date: Date }) => {
      const params = new URLSearchParams({ view: next.view, date: toDayKey(next.date) });
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router],
  );

  return {
    view,
    anchor,
    today,
    items,
    itemsByDay,
    weeks: view === "month" ? monthWeeks(anchor) : [weekDays(anchor)],
    setView: (next: CalendarView) => navigate({ view: next, date: anchor }),
    goToday: () => navigate({ view, date: today }),
    /** Gün seçiciden: ay görünümünde o günün ayı, hafta görünümünde o günün haftası açılır. */
    goToDate: (date: Date) => navigate({ view, date }),
    /** Ay görünümünde bir ay, hafta görünümünde bir hafta ileri/geri. */
    step: (direction: 1 | -1) =>
      navigate({
        view,
        date:
          view === "month"
            ? shiftMonths(anchor, direction)
            : shiftDays(anchor, direction * DAYS_IN_WEEK),
      }),
    /** "+2 daha" → o günün haftası. */
    openWeek: (date: Date) => navigate({ view: "week", date }),
  };
};

export type CalendarState = ReturnType<typeof useCalendar>;
