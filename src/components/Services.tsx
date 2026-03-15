"use client";

import { useLang } from "@/context/LanguageContext";
import SectionReveal from "./SectionReveal";

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="scroll-mt-28 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-xs tracking-[0.3em] text-text-muted mb-4 uppercase">
            {t.services.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16">
            {t.services.title}
          </h2>
        </SectionReveal>

        <div className="grid gap-px bg-border">
          {t.services.items.map((item, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="bg-bg p-8 md:p-12 group hover:bg-bg-elevated transition-colors duration-500">
                <div className="flex items-start gap-6">
                  <span className="font-mono text-xs text-text-muted mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-light mb-4 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
