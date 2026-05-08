"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import prophetsData from "@/data/prophets.json";

const QURAN_QUOTES = [
  {
    arabic: "وَلَقَدْ بَعَثْنَا فِي كُلِّ أُمَّةٍ رَّسُولًا",
    english: "And We certainly sent into every nation a messenger",
    reference: "Surah An-Nahl 16:36"
  },
  {
    arabic: "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ",
    english: "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers.",
    reference: "Surah Al-Baqarah 2:285"
  },
  {
    arabic: "وَمَا أَرْسَلْنَا مِن رَّسُولٍ إِلَّا بِلِسَانِ قَوْمِهِ لِيُبَيِّنَ لَهُمْ",
    english: "And We did not send any messenger except [speaking] in the language of his people to state clearly for them.",
    reference: "Surah Ibrahim 14:4"
  },
  {
    arabic: "لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِّأُولِي الْأَلْبَابِ",
    english: "There was certainly in their stories a lesson for those of understanding.",
    reference: "Surah Yusuf 12:111"
  },
  {
    arabic: "أُولَٰئِكَ الَّذِينَ هَدَى اللَّهُ ۖ فَبِهُدَاهُمُ اقْتَدِهْ",
    english: "Those are the ones whom Allah has guided, so from their guidance take an example.",
    reference: "Surah Al-An'am 6:90"
  }
];

function HomeContent() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get("search") || "");
  const [filter, setFilter] = useState("Chronological Order");
  const [quote, setQuote] = useState(QURAN_QUOTES[0]);

  // Sync search state if URL changes externally
  const urlQuery = searchParams.get("search") || "";
  const [prevUrlQuery, setPrevUrlQuery] = useState(urlQuery);
  if (urlQuery !== prevUrlQuery) {
    setPrevUrlQuery(urlQuery);
    setSearch(urlQuery);
  }

  useEffect(() => {
    // Set a random quote only on mount to avoid hydration mismatch
    const randomQuote = QURAN_QUOTES[Math.floor(Math.random() * QURAN_QUOTES.length)];
    setTimeout(() => setQuote(randomQuote), 0);
  }, []);
  
  const filters = [
    "Chronological Order",
    "Alphabetical Order",
    "Beginner",
    "Intermediate",
    "Advanced",
    "Patience",
    "Wealth & Power",
    "Miracles",
    "Family",
    "Community Rejection"
  ];

  const filteredProphets = useMemo(() => {
    let result = [...prophetsData];

    // Search filter
    if (search) {
      const s = search.toLowerCase();
      result = result.filter(p => 
        p.name_en.toLowerCase().includes(s) || 
        p.name_ar.includes(s) || 
        p.name_transliteration.toLowerCase().includes(s)
      );
    }

    // Category filter
    if (filter === "Alphabetical Order") {
      result.sort((a, b) => a.name_en.localeCompare(b.name_en));
    } else if (filter === "Chronological Order") {
      result.sort((a, b) => a.chronological_order - b.chronological_order);
    } else if (["Beginner", "Intermediate", "Advanced"].includes(filter)) {
      result = result.filter(p => p.difficulty_level === filter);
    } else {
      // Theme filter
      result = result.filter(p => p.theme_tags.includes(filter));
    }

    return result;
  }, [search, filter]);

  return (
    <div className="flex flex-col gap-12 animate-fade-up">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 flex flex-col items-center justify-center gap-6 rounded-3xl bg-card/60 backdrop-blur-sm border border-border shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none"></div>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-heading relative z-10">
          The 25 Prophets
        </h1>
        <div className="max-w-2xl relative z-10 space-y-4">
          <p className="font-arabic text-xl md:text-2xl text-heading/80 min-h-[40px] transition-opacity duration-500">
            &quot;{quote.arabic}&quot;
          </p>
          <p className="font-serif text-lg md:text-xl italic text-foreground/80 min-h-[60px] transition-opacity duration-500">
            &quot;{quote.english}&quot; <br/>
            <span className="text-sm not-italic opacity-70">— {quote.reference}</span>
          </p>
          <p className="mt-6 text-foreground max-w-xl mx-auto">
            Discover the stories of the 25 Prophets mentioned in the Holy Quran. Learn their struggles, miracles, and timeless lessons.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="flex flex-col gap-6 sticky top-[72px] z-40 bg-background/90 backdrop-blur-md py-4 rounded-xl">
        <div className="relative max-w-md mx-auto w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 opacity-40" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-3 rounded-full border border-border bg-card focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all shadow-sm outline-none text-foreground placeholder:text-foreground/40"
            placeholder="Search Prophet's name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="w-full overflow-x-auto pb-4 -mb-4 scrollbar-hide px-2">
          <div className="flex gap-2 w-max mx-auto">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f 
                    ? "bg-brand-accent text-white shadow-md" 
                    : "bg-card border border-border hover:bg-foreground/5 text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Prophets Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProphets.length > 0 ? (
          filteredProphets.map((prophet, index) => (
            <Link 
              href={`/prophet/${prophet.slug}`} 
              key={prophet.id}
              className={`group flex flex-col bg-card rounded-2xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 border border-border animate-fade-up delay-${Math.min(index * 100, 500)}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center text-brand-accent">
                  <div className="font-serif font-bold text-xl">{prophet.id}</div>
                </div>
                <div className="text-right">
                  <h3 className="font-serif text-2xl font-bold text-heading group-hover:text-brand-accent transition-colors">
                    {prophet.name_en}
                  </h3>
                  <p className="font-arabic text-xl text-foreground/60 mt-1">
                    {prophet.name_ar}
                  </p>
                </div>
              </div>
              
              <div className="flex-grow">
                <p className="text-sm text-foreground/80 italic mb-4">
                  &quot;{prophet.one_line_glimpse}&quot;
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {prophet.theme_tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-foreground/10 rounded-md text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
                <span className="text-sm font-medium text-brand-btn group-hover:text-brand-btn-hover transition-colors">
                  Learn Story
                </span>
                <div className="w-8 h-8 rounded-full bg-brand-btn text-white flex items-center justify-center group-hover:bg-brand-btn-hover transition-colors">
                  <ChevronRight size={16} />
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-foreground/50">
            No Prophets found matching your search criteria.
          </div>
        )}
      </section>
    </div>
  );
}

export default function HomeClient() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading stories...</div>}>
      <HomeContent />
    </Suspense>
  );
}
