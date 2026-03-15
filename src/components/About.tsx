"use client";

import { useLang } from "@/context/LanguageContext";
import SectionReveal from "./SectionReveal";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="scroll-mt-28 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-xs tracking-[0.3em] text-text-muted mb-4 uppercase">
            {t.about.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">
            {t.about.title}
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p className="text-lg text-text-secondary leading-relaxed mb-16 max-w-3xl">
            {t.about.description}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="border-l border-border pl-8">
            <h3 className="font-mono text-xs tracking-[0.2em] text-text-muted mb-4 uppercase">
              {t.about.vision.title}
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-3xl">
              {t.about.vision.description}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
