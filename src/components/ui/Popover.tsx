"use client";

import { Popover as PopoverPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/**
 * Bir tetikleyiciye bağlı küçük panel (ör. tarih seçici). Dropdown ile aynı
 * görsel dil ve açılış animasyonu; odak yönetimi ve Esc ile kapanma Radix'ten.
 */

const PopoverContent = ({
  className,
  align = "start",
  sideOffset = 8,
  collisionPadding = 16,
  ...props
}: ComponentProps<typeof PopoverPrimitive.Content>) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      align={align}
      sideOffset={sideOffset}
      // Ekran kenarına yapışmasın: mobilde 16px'lik sayfa boşluğuyla hizalı kalır.
      collisionPadding={collisionPadding}
      className={cn(
        "z-50 rounded-xl border border-border bg-surface-elevated p-3 shadow-md outline-none",
        "origin-(--radix-popover-content-transform-origin)",
        "data-[state=closed]:animate-pop-out data-[state=open]:animate-pop-in",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
);

export const Popover = Object.assign(PopoverPrimitive.Root, {
  Trigger: PopoverPrimitive.Trigger,
  Content: PopoverContent,
  Close: PopoverPrimitive.Close,
});
