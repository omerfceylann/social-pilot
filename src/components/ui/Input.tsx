import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Input ve Textarea'nın ortak görünümü. */
export const fieldControlClasses = cn(
  "w-full rounded-lg border border-border bg-surface px-3 text-body text-fg shadow-xs",
  "placeholder:text-fg-muted",
  "transition-[border-color,box-shadow] duration-150",
  "hover:border-border-strong",
  "focus-visible:border-accent focus-visible:ring-3 focus-visible:ring-accent-soft focus-visible:outline-none",
  "aria-invalid:border-danger aria-invalid:focus-visible:ring-danger-soft",
  "disabled:cursor-not-allowed disabled:opacity-50",
);

export const Input = ({ className, ...props }: ComponentProps<"input">) => (
  <input className={cn(fieldControlClasses, "h-10", className)} {...props} />
);

export const Textarea = ({ className, rows = 4, ...props }: ComponentProps<"textarea">) => (
  <textarea
    rows={rows}
    className={cn(fieldControlClasses, "resize-y py-2.5 leading-relaxed", className)}
    {...props}
  />
);
