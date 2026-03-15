import type { Metadata } from "next";
import { inter, jetbrainsMono } from "@/app/fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "henz.systems",
  description:
    "We build and improve business foundations across industries, from reservation systems and website operations to AI agent deployment.",
  alternates: {
    canonical: "https://henz.systems/en",
    languages: {
      ja: "https://henz.systems/ja",
      en: "https://henz.systems/en",
    },
  },
  openGraph: {
    title: "henz.systems",
    description:
      "We build and improve business foundations across industries, from reservation systems and website operations to AI agent deployment.",
    url: "https://henz.systems/en",
    siteName: "henz.systems",
    locale: "en_US",
    type: "website",
  },
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
