"use client";

import { X } from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/cn";
import { fieldControlClasses } from "./Input";

type TagInputProps = {
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  removeLabel: (tag: string) => string;
  id?: string;
  "aria-describedby"?: string;
};

/** Kelime listesi girişi: Enter ya da virgülle eklenir, boş alanda Backspace sonuncuyu siler. */
export const TagInput = ({
  value,
  onChange,
  placeholder,
  removeLabel,
  ...inputProps
}: TagInputProps) => {
  const [draft, setDraft] = useState("");

  const commit = () => {
    const tag = draft.trim().replace(/,$/, "");
    if (
      tag &&
      !value.some((item) => item.toLocaleLowerCase("tr") === tag.toLocaleLowerCase("tr"))
    ) {
      onChange([...value, tag]);
    }
    setDraft("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      commit();
    } else if (event.key === "Backspace" && draft === "" && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  return (
    <div
      className={cn(
        fieldControlClasses,
        "flex min-h-10 flex-wrap items-center gap-1.5 py-1.5 focus-within:border-accent focus-within:ring-3 focus-within:ring-accent-soft",
      )}
    >
      {value.map((tag) => (
        <span
          key={tag}
          className="inline-flex h-7 items-center gap-1 rounded-md bg-surface-muted pr-1 pl-2.5 text-small text-fg"
        >
          {tag}
          <button
            type="button"
            onClick={() => onChange(value.filter((item) => item !== tag))}
            aria-label={removeLabel(tag)}
            className="rounded p-0.5 text-fg-muted transition-colors hover:text-fg [&_svg]:size-3.5"
          >
            <X />
          </button>
        </span>
      ))}
      <input
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={commit}
        placeholder={value.length === 0 ? placeholder : undefined}
        className="h-7 min-w-24 flex-1 bg-transparent text-body text-fg outline-none placeholder:text-fg-muted"
        {...inputProps}
      />
    </div>
  );
};
