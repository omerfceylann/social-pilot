import { create } from "zustand";

export type ToastTone = "success" | "error" | "info";

export type ToastItem = {
  id: string;
  tone: ToastTone;
  title: string;
  description?: string;
};

type ToastsState = {
  toasts: ToastItem[];
  push: (toast: Omit<ToastItem, "id">) => string;
  dismiss: (id: string) => void;
};

const AUTO_DISMISS_MS = 4000;
const MAX_VISIBLE = 3;

export const useToasts = create<ToastsState>()((set, get) => ({
  toasts: [],
  push: (toast) => {
    const id = crypto.randomUUID();
    set(({ toasts }) => ({ toasts: [...toasts, { ...toast, id }].slice(-MAX_VISIBLE) }));
    setTimeout(() => get().dismiss(id), AUTO_DISMISS_MS);
    return id;
  },
  dismiss: (id) => set(({ toasts }) => ({ toasts: toasts.filter((toast) => toast.id !== id) })),
}));

const show = (tone: ToastTone) => (title: string, description?: string) =>
  useToasts.getState().push({ tone, title, description });

/** Bileşen dışından da çağrılabilir: toast.success("İçerik paylaşıldı.") */
export const toast = {
  success: show("success"),
  error: show("error"),
  info: show("info"),
};
