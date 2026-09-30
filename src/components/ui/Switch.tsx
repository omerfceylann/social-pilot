import { Switch as SwitchPrimitive } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type SwitchProps = ComponentProps<typeof SwitchPrimitive.Root>;

export const Switch = ({ className, ...props }: SwitchProps) => (
  <SwitchPrimitive.Root
    className={cn(
      "inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full p-0.5",
      "bg-border-strong transition-colors duration-200 data-[state=checked]:bg-accent",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb className="block size-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-out data-[state=checked]:translate-x-4" />
  </SwitchPrimitive.Root>
);
