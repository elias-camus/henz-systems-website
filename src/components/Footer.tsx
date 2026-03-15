"use client";

import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-muted">
          &copy; {new Date().getFullYear()} {t.footer.copyright}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`https://${t.contact.blog}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-muted hover:text-text-secondary transition-colors"
          >
            {t.nav.blog}
          </a>
          <a
            href={`mailto:${t.contact.email}`}
            className="font-mono text-xs text-text-muted hover:text-text-secondary transition-colors"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
