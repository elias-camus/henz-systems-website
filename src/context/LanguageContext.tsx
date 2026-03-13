"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { ja, en, Lang, Translations } from "@/i18n";

const translations: Record<Lang, Translations> = { ja, en };

type LanguageContextType = {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "ja",
  t: ja,
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ja");
  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "ja" ? "en" : "ja"));
  }, []);
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
