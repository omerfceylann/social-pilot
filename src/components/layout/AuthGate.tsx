"use client";

import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useHydrated } from "@/store/useHydration";
import { useSession } from "@/store/useSession";
import { useUserDirectory } from "@/store/useUserDirectory";
import { AppShellSkeleton } from "./AppShellSkeleton";

type AuthGateProps = { children: ReactNode };

type GateDecision = "wait" | "toLogin" | "toRegister" | "toOnboarding" | "allow";

/**
 * Uygulama sayfalarının koruması. Oturum localStorage'da olduğu için sunucu
 * göremez; karar tarayıcıda, store'lar yüklendikten sonra verilir.
 * Bu arada kabuk şeklinde skeleton gösterilir.
 */
export const AuthGate = ({ children }: AuthGateProps) => {
  const router = useRouter();
  const hydrated = useHydrated();
  const user = useSession((state) => state.user);
  const onboarded = useSession((state) => state.onboarded);
  const hasRegisteredUsers = useUserDirectory((state) => Object.keys(state.entries).length > 0);

  const decision: GateDecision = !hydrated
    ? "wait"
    : !user
      ? hasRegisteredUsers
        ? "toLogin"
        : "toRegister"
      : !onboarded
        ? "toOnboarding"
        : "allow";

  useEffect(() => {
    if (decision === "toLogin") router.replace("/login");
    if (decision === "toRegister") router.replace("/register");
    if (decision === "toOnboarding") router.replace("/onboarding");
  }, [decision, router]);

  return decision === "allow" ? children : <AppShellSkeleton />;
};
