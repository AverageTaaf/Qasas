import { Metadata } from "next";
import { BookHeart, ScrollText, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Qasas",
  description: "Learn about Qasas, an educational website dedicated to sharing the stories of the 25 Prophets mentioned in the Holy Quran.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-up">
      <header className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-heading mb-4">
          About Qasas
        </h1>
        <p className="text-lg text-foreground/60">
          Illuminating the paths of the Messengers
        </p>
      </header>

      <div className="grid gap-12">
        <section className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500">
            <BookHeart size={120} />
          </div>
          <div className="relative z-10">
            <h2 className="font-serif text-3xl font-bold text-heading mb-4 flex items-center gap-3">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90">
              Qasas was created with a clear, heartfelt mission: to provide an educational, respectful, and authentic representation of the Prophetic stories. We aim to present these timeless narratives in a clean, accessible, and family-friendly format, allowing readers of all ages to draw wisdom from the lives of the 25 Prophets mentioned in the Holy Quran.
            </p>
          </div>
        </section>

        <section className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500">
            <ScrollText size={120} />
          </div>
          <div className="relative z-10">
            <h2 className="font-serif text-3xl font-bold text-heading mb-4 flex items-center gap-3">
              Our Methodology
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90 mb-4">
              We strictly adhere to authentic sources. Every story is derived primarily from the Holy Quran and widely accepted classical Tafsir (exegesis). 
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              We deliberately avoid <i>israʼiliyyat</i> (unverified or fabricated historical tales) to ensure the purity and authenticity of the lessons. Furthermore, out of profound respect, we do not include any facial depictions of Prophets, angels, or animate beings.
            </p>
          </div>
        </section>

        <section className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500">
            <Users size={120} />
          </div>
          <div className="relative z-10">
            <h2 className="font-serif text-3xl font-bold text-heading mb-4 flex items-center gap-3">
              Who is this for?
            </h2>
            <ul className="list-disc list-inside text-lg leading-relaxed text-foreground/90 space-y-2">
              <li>Families and parents teaching their children Islamic history.</li>
              <li>New Muslims (reverts) seeking clear, foundational knowledge.</li>
              <li>Students of knowledge reviewing the lives of the Messengers.</li>
              <li>Interfaith readers interested in understanding the Quranic perspective.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
