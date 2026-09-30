"use client";

import { CircleAlert, CircleCheck, Info, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { transition } from "@/lib/motion";
import { useToasts, type ToastTone } from "@/store/useToasts";

const toneIcon: Record<ToastTone, ReactNode> = {
  success: <CircleCheck className="text-success" />,
  error: <CircleAlert className="text-danger" />,
  info: <Info className="text-accent-text" />,
};

/** Ekranın altında (masaüstünde sağ altta) toast yığını. Providers içinde bir kez render edilir. */
export const Toaster = () => {
  const toasts = useToasts((state) => state.toasts);
  const dismiss = useToasts((state) => state.dismiss);

  return (
    <div
      aria-live="polite"
      className={cn(
        "pointer-events-none fixed inset-x-4 z-[60] flex flex-col items-center gap-2",
        // Mobilde alt navigasyonun üstünde kalır.
        "bottom-[calc(5rem+env(safe-area-inset-bottom))] md:inset-x-auto md:right-6 md:bottom-6 md:items-end",
      )}
    >
      <AnimatePresence initial={false}>
        {toasts.map((item) => (
          <motion.div
            key={item.id}
            layout
            role={item.tone === "error" ? "alert" : "status"}
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97, transition: transition.fast }}
            transition={transition.base}
            className="pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-xl border border-border bg-surface-elevated py-3 pr-2 pl-4 shadow-lg [&>svg]:mt-0.5 [&>svg]:size-4 [&>svg]:shrink-0"
          >
            {toneIcon[item.tone]}
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <p className="text-body font-medium text-fg">{item.title}</p>
              {item.description && (
                <p className="text-small text-fg-secondary">{item.description}</p>
              )}
            </div>
            <button
              type="button"
              onClick={() => dismiss(item.id)}
              aria-label="Bildirimi kapat"
              className="-my-0.5 rounded-md p-1 text-fg-muted transition-colors hover:bg-surface-muted hover:text-fg [&_svg]:size-3.5"
            >
              <X />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
