"use client";

import { StatusScreen } from "@/components/layout/StatusScreen";

type AppErrorProps = { error: Error & { digest?: string }; retry: () => void };

/**
 * Uygulama sayfalarında beklenmedik bir hata olursa kabuk (sidebar) yerinde
 * kalır, sadece sayfa alanı bu ekranla değişir.
 */
export default function AppError({ retry }: AppErrorProps) {
  return <StatusScreen kind="error" onRetry={retry} />;
}
