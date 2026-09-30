import type { Language } from "./config";
import { en } from "./dictionaries/en";
import { tr, type Dictionary } from "./dictionaries/tr";

const DICTIONARIES: Record<Language, Dictionary> = { tr, en };

/**
 * Sözlükteki tüm geçerli anahtarlar: "nav.overview" | "sectors.fitness" | …
 * Yanlış yazılmış anahtar derleme hatası verir.
 */
type Leaves<T, Prefix extends string = ""> = {
  [Key in keyof T & string]: T[Key] extends string
    ? `${Prefix}${Key}`
    : Leaves<T[Key], `${Prefix}${Key}.`>;
}[keyof T & string];

export type TranslationKey = Leaves<Dictionary>;
export type TranslationParams = Record<string, string | number>;

const lookup = (dictionary: Dictionary, key: string) => {
  let node: unknown = dictionary;
  for (const part of key.split(".")) {
    if (typeof node !== "object" || node === null || !Object.hasOwn(node, part)) return undefined;
    // Reflect.get sonucu unknown'a atanır ve bir sonraki turda yeniden daraltılır; cast gerekmez.
    const child: unknown = Reflect.get(node, part);
    node = child;
  }
  return typeof node === "string" ? node : undefined;
};

/** React dışında da kullanılabilen çeviri fonksiyonu. */
export const translate = (language: Language, key: TranslationKey, params?: TranslationParams) => {
  const template = lookup(DICTIONARIES[language], key) ?? lookup(tr, key) ?? key;
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in params ? String(params[name]) : match,
  );
};
