import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import type { Lang } from "@/i18n";

export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <LanguageProvider lang={lang}>
      <Header />
      <main>
        <Hero />
        <div className="w-full max-w-4xl mx-auto px-6">
          <hr className="border-border" />
        </div>
        <About />
        <Services />
        <div className="w-full max-w-4xl mx-auto px-6">
          <hr className="border-border" />
        </div>
        <Works />
        <Team />
        <div className="w-full max-w-4xl mx-auto px-6">
          <hr className="border-border" />
        </div>
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
