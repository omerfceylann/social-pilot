"use client";

import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { useT } from "@/i18n/useT";
import { transition } from "@/lib/motion";

type SaveBarProps = {
  visible: boolean;
  onSave: () => void;
  onDiscard: () => void;
};

/**
 * Kaydedilmemiş değişiklik olduğunda alttan beliren çubuk. Formun en altında
 * yapışkan durur; mobilde alt menünün üstünde kalır.
 */
export const SaveBar = ({ visible, onSave, onDiscard }: SaveBarProps) => {
  const { t } = useT();
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={transition.base}
          className="sticky bottom-[calc(5rem+env(safe-area-inset-bottom))] z-20 md:bottom-6"
          role="region"
          aria-label={t("settings.unsavedChanges")}
        >
          <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface-elevated/95 px-4 py-3 shadow-lg backdrop-blur-lg">
            <span className="text-small text-fg-secondary">{t("settings.unsavedChanges")}</span>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost" onClick={onDiscard}>
                {t("common.cancel")}
              </Button>
              <Button size="sm" variant="primary" onClick={onSave}>
                {t("common.save")}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
