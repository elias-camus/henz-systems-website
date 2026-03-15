export { ja } from "./ja";
export { en } from "./en";
export type Lang = "ja" | "en";

export function isLang(value: string): value is Lang {
  return value === "ja" || value === "en";
}

type DeepString<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends readonly unknown[]
      ? DeepString<T[K]>
      : DeepString<T[K]>;
};

export type Translations = DeepString<typeof import("./ja")["ja"]>;
