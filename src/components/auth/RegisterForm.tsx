"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import type { TranslationKey } from "@/i18n/translate";
import { useT } from "@/i18n/useT";
import { AuthError } from "@/services/authService";
import { registerUser } from "@/store/auth";
import { AuthHeading } from "./AuthLayout";

type FieldName = "name" | "email" | "username" | "brandName";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, TranslationKey>>;

const FIELD_ORDER: FieldName[] = ["name", "email", "username", "brandName"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (values: Values): Errors => {
  const errors: Errors = {};
  for (const field of FIELD_ORDER) {
    if (!values[field].trim()) errors[field] = "auth.required";
  }
  if (!errors.email && !EMAIL_PATTERN.test(values.email.trim())) errors.email = "auth.invalidEmail";
  return errors;
};

const AUTH_ERROR_FIELD: Record<AuthError["code"], { field: FieldName; message: TranslationKey }> = {
  invalidUsername: { field: "username", message: "errors.invalidUsername" },
  usernameTaken: { field: "username", message: "errors.usernameTaken" },
  userNotFound: { field: "username", message: "errors.userNotFound" },
};

/**
 * Kayıt: marka adı burada alınır; mock verideki {brand} bununla doldurulur.
 * Hatalar gönderimde gösterilir, kullanıcı alanı düzeltmeye başlayınca silinir.
 */
export const RegisterForm = () => {
  const { t } = useT();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    username: "",
    brandName: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const update = (field: FieldName) => (value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const focusFirstError = (nextErrors: Errors) => {
    const first = FIELD_ORDER.find((field) => nextErrors[field]);
    if (first) formRef.current?.querySelector<HTMLInputElement>(`[name="${first}"]`)?.focus();
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return focusFirstError(nextErrors);

    setSubmitting(true);
    try {
      await registerUser(values);
      router.replace("/onboarding");
    } catch (caught) {
      if (!(caught instanceof AuthError)) throw caught;
      const { field, message } = AUTH_ERROR_FIELD[caught.code];
      const authErrors = { [field]: message };
      setErrors(authErrors);
      focusFirstError(authErrors);
      setSubmitting(false);
    }
  };

  const fieldError = (field: FieldName) => {
    const key = errors[field];
    return key ? t(key) : undefined;
  };

  return (
    <>
      <AuthHeading title={t("auth.registerTitle")} subtitle={t("auth.registerSubtitle")} />
      <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <Field label={t("auth.name")} error={fieldError("name")}>
          <Input
            name="name"
            autoComplete="name"
            placeholder={t("auth.namePlaceholder")}
            value={values.name}
            onChange={(event) => update("name")(event.target.value)}
          />
        </Field>
        <Field label={t("auth.email")} error={fieldError("email")}>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder={t("auth.emailPlaceholder")}
            value={values.email}
            onChange={(event) => update("email")(event.target.value)}
          />
        </Field>
        <Field
          label={t("auth.username")}
          hint={t("auth.usernameHint")}
          error={fieldError("username")}
        >
          <Input
            name="username"
            autoComplete="username"
            autoCapitalize="none"
            spellCheck={false}
            placeholder={t("auth.usernamePlaceholder")}
            value={values.username}
            onChange={(event) => update("username")(event.target.value)}
          />
        </Field>
        <Field
          label={t("auth.brandName")}
          hint={t("auth.brandNameHint")}
          error={fieldError("brandName")}
        >
          <Input
            name="brandName"
            autoComplete="organization"
            placeholder={t("auth.brandNamePlaceholder")}
            value={values.brandName}
            onChange={(event) => update("brandName")(event.target.value)}
          />
        </Field>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={submitting}
          className="mt-2 w-full"
        >
          {t("auth.createAccount")}
        </Button>
      </form>
      <p className="mt-6 text-center text-body text-fg-secondary">
        {t("auth.haveAccount")}{" "}
        <Link href="/login" className="font-medium text-accent-text hover:underline">
          {t("auth.signIn")}
        </Link>
      </p>
    </>
  );
};
