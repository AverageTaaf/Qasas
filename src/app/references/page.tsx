import { Metadata } from "next";
import prophetsData from "@/data/prophets.json";

export const metadata: Metadata = {
  title: "References | Qasas",
  description: "Primary sources and Quranic references for the stories of the 25 Prophets.",
};

export default function ReferencesPage() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-up">
      <header className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-heading mb-4">
          References
        </h1>
        <p className="text-lg text-foreground/60">
          Primary sources and Quranic verses
        </p>
      </header>

      <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-sm mb-12">
        <h2 className="font-serif text-2xl font-bold text-heading mb-6 border-b border-border pb-4">
          Primary Sources
        </h2>
        <p className="text-lg leading-relaxed text-foreground/90 mb-4">
          The stories presented on Qasas are derived directly from the Holy Quran. Secondary context, when necessary for historical flow, is drawn exclusively from classical, widely accepted exegesis (Tafsir), such as <i>Tafsir Ibn Kathir</i>.
        </p>
      </div>

      <h2 className="font-serif text-3xl font-bold text-center text-heading mb-8">
        Quranic Mentions by Prophet
      </h2>

      <div className="grid gap-6">
        {prophetsData.map((prophet) => (
          <div key={prophet.id} className="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col md:flex-row gap-4 md:items-center">
            <div className="w-12 h-12 shrink-0 rounded-full bg-foreground/5 flex items-center justify-center text-brand-accent font-serif font-bold text-xl">
              {prophet.id}
            </div>
            <div className="flex-grow">
              <h3 className="font-serif text-xl font-bold text-heading">
                Prophet {prophet.name_en}
              </h3>
              <p className="text-sm text-foreground/60 mt-1">
                Mentioned {prophet.mentioned_in_quran_times} times in the Quran.
              </p>
            </div>
            <div className="md:text-right max-w-md">
              {prophet.quran_verses && prophet.quran_verses.length > 0 ? (
                <p className="text-sm text-foreground/80">
                  Primary reference: <span className="font-medium text-brand-accent">Surah {prophet.quran_verses[0].surah} ({prophet.quran_verses[0].verse_start}{prophet.quran_verses[0].verse_start !== prophet.quran_verses[0].verse_end ? `-${prophet.quran_verses[0].verse_end}` : ''})</span>
                </p>
              ) : (
                <p className="text-sm text-foreground/50 italic">Multiple references throughout the Quran.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
