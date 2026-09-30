"use client";

import { cloneElement, isValidElement, useId, type ReactElement, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type ControlProps = {
  id?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
};

type FieldProps = {
  label: ReactNode;
  /** Etiketin yanında küçük not, ör. "İsteğe bağlı". */
  optional?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  className?: string;
  /** Tek bir form kontrolü (Input, Textarea…). id ve aria bağlantıları otomatik eklenir. */
  children: ReactElement<ControlProps>;
};

/**
 * Etiket + kontrol + yardım/hata metni. label, hint ve error'u kontrolle
 * id/aria üzerinden bağlar; ekran okuyucu hepsini birlikte okur.
 */
export const Field = ({ label, optional, hint, error, className, children }: FieldProps) => {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  const control = isValidElement(children)
    ? cloneElement(children, {
        id,
        "aria-describedby": describedBy,
        "aria-invalid": error ? true : undefined,
      })
    : children;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="flex items-baseline gap-2 text-small font-medium text-fg">
        {label}
        {optional && <span className="text-caption font-normal text-fg-muted">{optional}</span>}
      </label>
      {control}
      {hint && !error && (
        <p id={hintId} className="text-caption text-fg-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="text-caption text-danger">
          {error}
        </p>
      )}
    </div>
  );
};
