import type { Metadata } from "next";
import { inter, jetbrainsMono } from "@/app/fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "henz.systems",
  description:
    "予約システム、Web保守運用、AIエージェント導入を中心に、業界横断で事業基盤を構築・改善する。",
  alternates: {
    canonical: "https://henz.systems/ja",
    languages: {
      ja: "https://henz.systems/ja",
      en: "https://henz.systems/en",
    },
  },
  openGraph: {
    title: "henz.systems",
    description:
      "予約システム、Web保守運用、AIエージェント導入を中心に、業界横断で事業基盤を構築・改善する。",
    url: "https://henz.systems/ja",
    siteName: "henz.systems",
    locale: "ja_JP",
    type: "website",
  },
};

export default function JaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
