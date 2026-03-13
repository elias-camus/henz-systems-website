"use client";

import { useLang } from "@/context/LanguageContext";
import SectionReveal from "./SectionReveal";

export default function Team() {
  const { t } = useLang();

  return (
    <section id="team" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="font-mono text-xs tracking-[0.3em] text-text-muted mb-4 uppercase">
            {t.team.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16">
            {t.team.title}
          </h2>
        </SectionReveal>

        <div className="grid gap-8">
          {t.team.members.map((member, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-bg-elevated border border-border flex items-center justify-center shrink-0">
                  <span className="font-mono text-lg text-text-muted">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-1">{member.name}</h3>
                  <p className="font-mono text-xs text-text-muted tracking-wider mb-4">
                    {member.role}
                  </p>
                  <p className="text-text-secondary leading-relaxed max-w-xl">
                    {member.description}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
