"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Dialog } from "radix-ui";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { transition } from "@/lib/motion";
import { IconButton } from "./IconButton";

type DrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: ReactNode;
  description?: ReactNode;
  side?: "right" | "left";
  /** Başlık görsel olarak gizlenir (ör. mobil navigasyon); ekran okuyucu için kalır. */
  hideHeader?: boolean;
  footer?: ReactNode;
  closeLabel?: string;
  className?: string;
  children?: ReactNode;
};

const offscreen = { right: "100%", left: "-100%" } as const;

/** Kenardan kayarak açılan panel: detay görünümleri ve mobil menü için. */
export const Drawer = ({
  open,
  onOpenChange,
  title,
  description,
  side = "right",
  hideHeader = false,
  footer,
  closeLabel = "Kapat",
  className,
  children,
}: DrawerProps) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <AnimatePresence>
      {open && (
        <Dialog.Portal forceMount>
          <Dialog.Overlay asChild forceMount>
            <motion.div
              className="fixed inset-0 z-50 bg-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition.base}
            />
          </Dialog.Overlay>
          <Dialog.Content asChild forceMount>
            <motion.div
              className={cn(
                "fixed inset-y-0 z-50 flex w-full max-w-md flex-col bg-surface-elevated shadow-lg",
                side === "right" ? "right-0 border-l" : "left-0 border-r",
                "border-border",
                className,
              )}
              initial={{ x: offscreen[side] }}
              animate={{ x: 0 }}
              exit={{ x: offscreen[side] }}
              transition={transition.drawer}
            >
              <div
                className={cn(
                  "flex items-start justify-between gap-4 border-b border-border px-6 py-5",
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
              <div className="flex-1 overflow-y-auto">{children}</div>
              {footer && (
                <div className="flex gap-2 border-t border-border px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                  {footer}
                </div>
              )}
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      )}
    </AnimatePresence>
  </Dialog.Root>
);
