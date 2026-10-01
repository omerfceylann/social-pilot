import { AuthLayout } from "@/components/auth/AuthLayout";
import { SessionGate } from "@/components/layout/SessionGate";

/** Sadece giriş yapmamış kullanıcılar için: giriş yapmışsa panele ya da onboarding'e gider. */
export default function AuthGroupLayout({ children }: LayoutProps<"/">) {
  return (
    <SessionGate audience="guest" fallback={<div className="min-h-dvh" />}>
      <AuthLayout>{children}</AuthLayout>
    </SessionGate>
  );
}
