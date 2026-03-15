"use client";

import { createContext, useContext, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
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

export function LanguageProvider({
  children,
  lang,
}: {
  children: ReactNode;
  lang: Lang;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const t = translations[lang];
  const toggleLang = () => {
    const nextLang = lang === "ja" ? "en" : "ja";
    const nextPath = pathname.replace(/^\/(ja|en)/, `/${nextLang}`);

    router.push(nextPath);
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
