"use client";

import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useHydrated } from "@/store/useHydration";
import { useSession } from "@/store/useSession";
import { useUserDirectory } from "@/store/useUserDirectory";

/** Sayfanın kimlere açık olduğu. */
export type GateAudience = "guest" | "onboarding" | "app";

type Destination = "/" | "/login" | "/register" | "/onboarding";
type Decision = { kind: "wait" } | { kind: "allow" } | { kind: "redirect"; to: Destination };

type SessionSnapshot = {
  hydrated: boolean;
  signedIn: boolean;
  onboarded: boolean;
  hasRegisteredUsers: boolean;
};

/**
 * Yönlendirme tablosu (tek kaynak):
 *
 *                     guest         onboarding    app
 * giriş yok           göster        → giriş/kayıt → giriş/kayıt
 * onboarding bitmedi  → onboarding  göster        → onboarding
 * onboarding bitti    → panel       → panel       göster
 */
export const decide = (audience: GateAudience, session: SessionSnapshot): Decision => {
  if (!session.hydrated) return { kind: "wait" };

  if (!session.signedIn) {
    if (audience === "guest") return { kind: "allow" };
    return { kind: "redirect", to: session.hasRegisteredUsers ? "/login" : "/register" };
  }
  if (!session.onboarded) {
    return audience === "onboarding" ? { kind: "allow" } : { kind: "redirect", to: "/onboarding" };
  }
  return audience === "app" ? { kind: "allow" } : { kind: "redirect", to: "/" };
};

type SessionGateProps = {
  audience: GateAudience;
  /** Karar verilene kadar gösterilir; sayfanın şeklini korumalı (spec §36). */
  fallback: ReactNode;
  children: ReactNode;
};

/**
 * Oturum localStorage'da olduğu için sunucu göremez; karar tarayıcıda,
 * store'lar yüklendikten sonra verilir. Bu arada fallback gösterilir.
 */
export const SessionGate = ({ audience, fallback, children }: SessionGateProps) => {
  const router = useRouter();
  const hydrated = useHydrated();
  const signedIn = useSession((state) => state.user !== null);
  const onboarded = useSession((state) => state.onboarded);
  const hasRegisteredUsers = useUserDirectory((state) => Object.keys(state.entries).length > 0);

  const decision = decide(audience, { hydrated, signedIn, onboarded, hasRegisteredUsers });
  const redirectTo = decision.kind === "redirect" ? decision.to : null;

  useEffect(() => {
    if (redirectTo) router.replace(redirectTo);
  }, [redirectTo, router]);

  return decision.kind === "allow" ? children : fallback;
};
