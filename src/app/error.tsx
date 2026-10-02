"use client";

import { StatusScreen } from "@/components/layout/StatusScreen";

type RootErrorProps = { error: Error & { digest?: string }; retry: () => void };

/** Giriş, kayıt ve onboarding gibi kabuk dışı sayfalardaki hatalar. */
export default function RootError({ retry }: RootErrorProps) {
  return <StatusScreen kind="error" onRetry={retry} />;
}
