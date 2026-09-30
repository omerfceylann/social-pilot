import { Tooltip as TooltipPrimitive } from "radix-ui";
import type { ReactNode } from "react";

type TooltipProps = {
  content: ReactNode;
  children: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
};

/** Kısa açıklamalar için. Önemli bilgi asla sadece tooltip'te olmamalı. */
export const Tooltip = ({ content, children, side = "top" }: TooltipProps) => (
  <TooltipPrimitive.Root>
    <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        side={side}
        sideOffset={6}
        className="z-50 rounded-md bg-fg px-2 py-1 text-caption font-medium text-bg shadow-md data-[state=closed]:animate-pop-out data-[state=delayed-open]:animate-pop-in"
      >
        {content}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  </TooltipPrimitive.Root>
);
