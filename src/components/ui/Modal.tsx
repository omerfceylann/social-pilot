"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Dialog } from "radix-ui";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { transition } from "@/lib/motion";
import { IconButton } from "./IconButton";

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: ReactNode;
  description?: ReactNode;
  /** Başlık görsel olarak gizlenir ama ekran okuyucu için kalır. */
  hideHeader?: boolean;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg";
  closeLabel?: string;
  children?: ReactNode;
};

const sizeClasses = { sm: "sm:max-w-sm", md: "sm:max-w-lg", lg: "sm:max-w-2xl" } as const;

export const Modal = ({
  open,
  onOpenChange,
  title,
  description,
  hideHeader = false,
  footer,
  size = "md",
  closeLabel = "Kapat",
  children,
}: ModalProps) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <AnimatePresence>
      {open && (
        <Dialog.Portal forceMount>
          <Dialog.Overlay asChild forceMount>
            <motion.div
              className="fixed inset-0 z-50 bg-overlay backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition.base}
            />
          </Dialog.Overlay>
          <div className="pointer-events-none fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
            <Dialog.Content asChild forceMount>
              <motion.div
                className={cn(
                  "pointer-events-auto flex max-h-[92dvh] w-full flex-col overflow-hidden",
                  "rounded-t-2xl border border-border bg-surface-elevated shadow-lg sm:rounded-2xl",
                  sizeClasses[size],
                )}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={transition.slow}
              >
                <div
                  className={cn(
                    "flex items-start justify-between gap-4 px-6 pt-6",
                    hideHeader && "sr-only",
                  )}
                >
                  <div className="flex flex-col gap-1">
                    <Dialog.Title className="text-heading">{title}</Dialog.Title>
                    {description && (
                      <Dialog.Description className="text-small text-fg-secondary">
                        {description}
                      </Dialog.Description>
                    )}
                  </div>
                  <Dialog.Close asChild>
                    <IconButton
                      label={closeLabel}
                      icon={<X />}
                      size="sm"
                      showTooltip={false}
                      className="-mt-1 -mr-2"
                    />
                  </Dialog.Close>
                </div>
                <div className="overflow-y-auto px-6 py-5">{children}</div>
                {footer && (
                  <div className="flex flex-col-reverse gap-2 border-t border-border px-6 py-4 sm:flex-row sm:justify-end">
                    {footer}
                  </div>
                )}
              </motion.div>
            </Dialog.Content>
          </div>
        </Dialog.Portal>
      )}
    </AnimatePresence>
  </Dialog.Root>
);
