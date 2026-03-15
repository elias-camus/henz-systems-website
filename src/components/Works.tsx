"use client";

import { useLang } from "@/context/LanguageContext";
import SectionReveal from "./SectionReveal";

export default function Works() {
  const { t } = useLang();

  return (
    <section id="works" className="scroll-mt-28 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-xs tracking-[0.3em] text-text-muted mb-4 uppercase">
            {t.works.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16">
            {t.works.title}
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {t.works.items.map((item, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="border border-border rounded-lg p-8 h-full flex flex-col hover:border-text-muted transition-colors duration-500 group">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] tracking-wider text-text-muted uppercase px-2 py-1 border border-border rounded-full">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-light mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
