"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { useT } from "@/i18n/useT";
import { easeOutSoft } from "@/lib/motion";
import type { PlatformId } from "@/types";

/** ISO zaman ↔ <input type="datetime-local"> değeri (yerel saat, saniyesiz). */
const toLocalInput = (iso: string) => {
  const date = new Date(iso);
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(
    date.getHours(),
  )}:${pad(date.getMinutes())}`;
};

type ScheduleModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  platform: PlatformId;
  /** Açılış anında hesaplanan öneri: mevcut plan, AI'ın önerdiği zaman ya da yarın sabah. */
  initialValue: string;
  /** Geçmiş zaman seçimini engellemek için açılış anı. */
  openedAt: number;
  onConfirm: (iso: string) => void;
};

/** "Planla": tarih ve saat seçimi. Seçilen zaman takvimde görünür. */
export const ScheduleModal = ({
  open,
  onOpenChange,
  platform,
  initialValue,
  openedAt,
  onConfirm,
}: ScheduleModalProps) => {
  const { t } = useT();
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={t("content.editor.scheduleTitle")}
      closeLabel={t("common.close")}
      size="sm"
    >
      {/* key: her açılışta form başlangıç değerine döner. */}
      {open && (
        <ScheduleForm
          key={`${initialValue}:${openedAt}`}
          platform={platform}
          initialValue={initialValue}
          openedAt={openedAt}
          onCancel={() => onOpenChange(false)}
          onConfirm={onConfirm}
        />
      )}
    </Modal>
  );
};

const ScheduleForm = ({
  platform,
  initialValue,
  openedAt,
  onCancel,
  onConfirm,
}: Omit<ScheduleModalProps, "open" | "onOpenChange"> & { onCancel: () => void }) => {
  const { t } = useT();
  const [value, setValue] = useState(() => toLocalInput(initialValue));
  const selected = new Date(value).getTime();
  const isPast = Number.isNaN(selected) || selected <= openedAt;

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        if (!isPast) onConfirm(new Date(value).toISOString());
      }}
    >
      <Field
        label={t("content.editor.scheduleLabel")}
        hint={t("content.editor.scheduleHint", { where: t(`platformLocative.${platform}`) })}
        error={value && isPast ? t("content.editor.schedulePast") : undefined}
      >
        <Input
          type="datetime-local"
          value={value}
          min={toLocalInput(new Date(openedAt).toISOString())}
          onChange={(event) => setValue(event.target.value)}
        />
      </Field>
      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <Button type="button" variant="secondary" onClick={onCancel}>
          {t("common.cancel")}
        </Button>
        <Button type="submit" variant="primary" disabled={isPast}>
          {t("content.editor.scheduleConfirm")}
        </Button>
      </div>
    </form>
  );
};

type PublishSuccessModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  platform: PlatformId;
  onViewPublished: () => void;
};

/** Paylaşım sonrası onay (spec §22): çizilen bir onay işareti ve iki net yol. */
export const PublishSuccessModal = ({
  open,
  onOpenChange,
  platform,
  onViewPublished,
}: PublishSuccessModalProps) => {
  const { t } = useT();
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={t("toasts.contentPublished")}
      hideHeader
      size="sm"
      closeLabel={t("common.close")}
    >
      <div className="flex flex-col items-center gap-5 py-4 text-center">
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, ease: easeOutSoft }}
          className="flex size-16 items-center justify-center rounded-full bg-success-soft text-success"
        >
          <svg viewBox="0 0 24 24" className="size-8" fill="none" aria-hidden>
            <motion.path
              d="M5 12.5l4.5 4.5L19 7.5"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: easeOutSoft }}
            />
          </svg>
        </motion.span>
        <div className="flex flex-col gap-1.5">
          <p className="text-title">{t("toasts.contentPublished")}</p>
          <p className="text-body text-fg-secondary">
            {t("toasts.publishedOn", { where: t(`platformLocative.${platform}`) })}
          </p>
          <p className="text-small text-fg-muted">{t("content.editor.firstReactionsHint")}</p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:flex-row-reverse">
          <Button variant="primary" className="flex-1" onClick={onViewPublished}>
            {t("content.editor.viewPublished")}
          </Button>
          <Button variant="secondary" className="flex-1" onClick={() => onOpenChange(false)}>
            {t("content.editor.stayHere")}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

type DeleteModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  onConfirm: () => void;
};

/** Silme geri alınamaz; bu yüzden önce sorulur. */
export const DeleteContentModal = ({ open, onOpenChange, title, onConfirm }: DeleteModalProps) => {
  const { t } = useT();
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={t("content.editor.deleteTitle")}
      description={t("content.editor.deleteDescription", { title })}
      closeLabel={t("common.close")}
      size="sm"
      footer={
        <>
          <Button variant="secondary" onClick={() => onOpenChange(false)}>
            {t("common.cancel")}
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            {t("common.delete")}
          </Button>
        </>
      }
    />
  );
};
