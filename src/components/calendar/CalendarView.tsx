"use client";

import { CalendarX2, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { PageContainer, PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { IconButton } from "@/components/ui/IconButton";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { useCalendar } from "@/hooks/useCalendar";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import type { CalendarItem } from "@/lib/content";
import { formatDateTime } from "@/lib/format";
import { transition } from "@/lib/motion";
import { toDayKey } from "@/lib/time";
import type { CalendarStatus } from "@/types";
import { STATUS_STYLE } from "./CalendarEvent";
import { Agenda, MonthGrid, WeekGrid } from "./CalendarGrids";
import { DatePicker } from "./DatePicker";
import { EventDrawer } from "./EventDrawer";

const LEGEND: CalendarStatus[] = ["published", "scheduled", "draft", "suggested"];

/**
 * Takvim (spec §28): "Ne paylaştım?" ve "Ne paylaşacağım?". Ay ve hafta görünümü,
 * durum + platform ikonları; bir öğeye tıklayınca detay çekmecesi açılır.
 */
export const CalendarView = () => {
  const { t, language } = useT();
  const calendar = useCalendar();
  const { view, anchor, today, weeks, items, itemsByDay } = calendar;
  const [openItem, setOpenItem] = useState<CalendarItem | null>(null);
  /** Mobil ay görünümünde ajandası gösterilen gün. */
  const [selectedDay, setSelectedDay] = useState<Date>(today);

  // Sadece öneriler varsa (ya da hiçbir şey yoksa) takvim "boş" sayılır (spec §35).
  const hasPlannedContent = items.some(
    (item) => item.status === "scheduled" || item.status === "published",
  );
  const markedDays = useMemo(() => new Set(itemsByDay.keys()), [itemsByDay]);
  const week = weeks[0] ?? [];
  const firstDay = week[0];
  const lastDay = week.at(-1);
  const periodLabel =
    view === "month"
      ? formatDateTime(anchor.toISOString(), language, { month: "long", year: "numeric" })
      : firstDay && lastDay
        ? `${formatDateTime(firstDay.toISOString(), language, { day: "numeric", month: "short" })} – ${formatDateTime(lastDay.toISOString(), language, { day: "numeric", month: "short", year: "numeric" })}`
        : "";

  return (
    <PageContainer className="gap-8">
      <PageHeader
        title={t("nav.calendar")}
        description={t("calendar.subtitle")}
        actions={
          <Button asChild variant="primary">
            <Link href="/content">
              <Plus />
              {t("dashboard.createContent")}
            </Link>
          </Button>
        }
      />

      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1">
            <IconButton
              label={view === "month" ? t("calendar.previousMonth") : t("calendar.previousWeek")}
              icon={<ChevronLeft />}
              onClick={() => calendar.step(-1)}
            />
            <IconButton
              label={view === "month" ? t("calendar.nextMonth") : t("calendar.nextWeek")}
              icon={<ChevronRight />}
              onClick={() => calendar.step(1)}
            />
            <DatePicker
              value={anchor}
              today={today}
              markedDays={markedDays}
              label={periodLabel}
              onSelect={(date) => {
                calendar.goToDate(date);
                // Mobil ay görünümünde seçilen günün listesi de açılsın.
                setSelectedDay(date);
              }}
            />
            <Button size="sm" variant="secondary" onClick={calendar.goToday} className="ml-3">
              {t("calendar.today")}
            </Button>
          </div>
          <SegmentedControl
            value={view}
            onChange={calendar.setView}
            options={[
              { value: "month", label: t("calendar.month") },
              { value: "week", label: t("calendar.week") },
            ]}
            aria-label={t("calendar.viewLabel")}
          />
        </div>

        {!hasPlannedContent && (
          <EmptyState icon={<CalendarX2 />} title={t("empty.noScheduled")} className="py-8" />
        )}

        <ul className="flex flex-wrap gap-x-4 gap-y-1.5" aria-label={t("calendar.legend")}>
          {LEGEND.map((status) => (
            <li key={status} className="flex items-center gap-1.5 text-caption text-fg-secondary">
              <span className={cn("size-2 rounded-full", STATUS_STYLE[status].dot)} aria-hidden />
              {t(`postStatus.${status}`)}
            </li>
          ))}
        </ul>

        {/* key: dönem değişince ızgara yumuşakça yenilenir. */}
        <motion.div
          key={`${view}-${toDayKey(view === "month" ? new Date(anchor.getFullYear(), anchor.getMonth(), 1) : (firstDay ?? anchor))}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition.base}
          className="flex flex-col gap-6"
        >
          {view === "month" ? (
            <>
              <MonthGrid
                weeks={weeks}
                today={today}
                anchor={anchor}
                itemsByDay={itemsByDay}
                selectedDay={selectedDay}
                onSelectDay={setSelectedDay}
                onOpen={setOpenItem}
                onShowWeek={calendar.openWeek}
              />
              <Agenda
                days={[selectedDay]}
                today={today}
                itemsByDay={itemsByDay}
                onOpen={setOpenItem}
                className="md:hidden"
              />
            </>
          ) : (
            <>
              <WeekGrid weeks={weeks} today={today} itemsByDay={itemsByDay} onOpen={setOpenItem} />
              <Agenda
                days={week}
                today={today}
                itemsByDay={itemsByDay}
                onOpen={setOpenItem}
                className="md:hidden"
              />
            </>
          )}
        </motion.div>
      </div>

      <EventDrawer item={openItem} onClose={() => setOpenItem(null)} />
    </PageContainer>
  );
};
