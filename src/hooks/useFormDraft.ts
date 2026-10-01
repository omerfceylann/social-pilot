"use client";

import { useState } from "react";

/**
 * "Kaydet / Vazgeç" formları için taslak. Kaynak (store) değişmeden önce kullanıcı
 * istediği kadar düzenler; Kaydet'e basınca tek seferde yazılır, Vazgeç geri alır.
 * Kirlilik (dirty) yapısal karşılaştırmayla bulunur; değer geri alınırsa çubuk kaybolur.
 */
export const useFormDraft = <T>(source: T) => {
  const [draft, setDraft] = useState(source);
  const dirty = JSON.stringify(draft) !== JSON.stringify(source);
  return {
    draft,
    dirty,
    update: (patch: Partial<T>) => setDraft((current) => ({ ...current, ...patch })),
    reset: () => setDraft(source),
  };
};
