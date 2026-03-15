"use client";

import { useLang } from "@/context/LanguageContext";
import SectionReveal from "./SectionReveal";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="scroll-mt-28 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-xs tracking-[0.3em] text-text-muted mb-4 uppercase">
            {t.contact.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">
            {t.contact.title}
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p className="text-lg text-text-secondary leading-relaxed mb-12 max-w-2xl">
            {t.contact.description}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href={`mailto:${t.contact.email}`}
              className="inline-flex items-center gap-3 text-sm border border-border px-8 py-4 rounded-full text-text-secondary hover:text-text-primary hover:border-text-muted transition-all duration-300 group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
              {t.contact.email}
            </a>
            <a
              href={`https://${t.contact.blog}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm border border-border px-8 py-4 rounded-full text-text-secondary hover:text-text-primary hover:border-text-muted transition-all duration-300 group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
              {t.contact.blog}
            </a>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <p className="mt-6 text-sm text-text-muted max-w-2xl leading-relaxed">
            {t.contact.note}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
