"use client";

import { DropdownMenu } from "radix-ui";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * İkincil eylemler için bağlamsal menü (spec §47: "Primary + Secondary + More").
 * Kullanım: <Dropdown><Dropdown.Trigger/><Dropdown.Content><Dropdown.Item/></Dropdown.Content></Dropdown>
 */

const DropdownContent = ({
  className,
  align = "end",
  sideOffset = 6,
  ...props
}: ComponentProps<typeof DropdownMenu.Content>) => (
  <DropdownMenu.Portal>
    <DropdownMenu.Content
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-44 rounded-lg border border-border bg-surface-elevated p-1 shadow-md",
        "origin-(--radix-dropdown-menu-content-transform-origin)",
        "data-[state=closed]:animate-pop-out data-[state=open]:animate-pop-in",
        className,
      )}
      {...props}
    />
  </DropdownMenu.Portal>
);

type DropdownItemProps = ComponentProps<typeof DropdownMenu.Item> & {
  icon?: ReactNode;
  destructive?: boolean;
};

const DropdownItem = ({ icon, destructive, className, children, ...props }: DropdownItemProps) => (
  <DropdownMenu.Item
    className={cn(
      "flex h-9 cursor-pointer items-center gap-2.5 rounded-md px-2.5 text-body outline-none select-none",
      "text-fg data-[highlighted]:bg-surface-muted",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "[&_svg]:size-4 [&_svg]:text-fg-muted",
      destructive && "text-danger [&_svg]:text-danger",
      className,
    )}
    {...props}
  >
    {icon}
    {children}
  </DropdownMenu.Item>
);

const DropdownSeparator = () => <DropdownMenu.Separator className="my-1 h-px bg-border" />;

export const Dropdown = Object.assign(DropdownMenu.Root, {
  Trigger: DropdownMenu.Trigger,
  Content: DropdownContent,
  Item: DropdownItem,
  Separator: DropdownSeparator,
});
