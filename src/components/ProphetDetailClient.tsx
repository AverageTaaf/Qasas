"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Copy, Share2, X, BookOpen } from "lucide-react";

export default function ProphetDetailClient({ 
  prophet, 
  prevProphet, 
  nextProphet 
}: { 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prophet: any, 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevProphet: any, 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nextProphet: any 
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=Read about Prophet ${prophet.name_en} (PBUH): ${window.location.href}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=Read about Prophet ${prophet.name_en} (PBUH)&url=${window.location.href}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank');
  };

  return (
    <div className="animate-fade-up">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-foreground/60 mb-8">
        <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-foreground font-medium">Prophet {prophet.name_en} — peace be upon him</span>
      </nav>

      {/* Header Area */}
      <header className="text-center mb-12">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-heading mb-4">
          {prophet.name_en}
        </h1>
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="font-arabic text-4xl md:text-5xl text-foreground/90">{prophet.name_ar}</span>
          <span className="text-lg text-foreground/60">({prophet.name_transliteration})</span>
          <span className="text-sm font-medium text-brand-gold bg-brand-gold/10 px-4 py-1 rounded-full mt-2">
            Peace be upon him
          </span>
        </div>
        {prophet.name_en === "Muhammad" && (
          <p className="mt-4 text-sm text-foreground/60 italic max-w-md mx-auto">
            The final Prophet, presented with utmost respect. No physical description or depiction.
          </p>
        )}
      </header>

      {/* Quick Stats Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
          <div className="text-sm text-foreground/60 mb-1">Mentioned in Quran</div>
          <div className="font-serif text-2xl font-bold text-brand-accent">{prophet.mentioned_in_quran_times} times</div>
        </div>
        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
          <div className="text-sm text-foreground/60 mb-1">Sent to</div>
          <div className="font-serif text-xl font-bold text-heading">{prophet.sent_to}</div>
        </div>
        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
          <div className="text-sm text-foreground/60 mb-1">Key miracle</div>
          <div className="font-serif text-xl font-bold text-heading">{prophet.key_miracle}</div>
        </div>
        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
          <div className="text-sm text-foreground/60 mb-1">Known for</div>
          <div className="font-serif text-2xl font-bold text-brand-gold">{prophet.known_for}</div>
        </div>
      </div>

      {/* Detailed Story Section */}
      <article className="max-w-3xl mx-auto mb-16 bg-card p-6 md:p-10 rounded-3xl border border-border shadow-sm">
        {prophet.story_sections.map((section: { heading: string; paragraphs: string[] }, idx: number) => (
          <div key={idx} className="mb-10 last:mb-0">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-heading mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-brand-gold"></span>
              {section.heading}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
              {section.paragraphs.map((p: string, pIdx: number) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          </div>
        ))}

        {/* Quranic Verses Box */}
        {prophet.quran_verses && prophet.quran_verses.length > 0 && (
          <div className="mt-12 p-6 md:p-8 bg-brand-gold/5 dark:bg-brand-gold/10 rounded-2xl border border-brand-gold/20">
            <h3 className="font-serif text-xl font-bold text-heading mb-6 flex items-center gap-2">
              <BookOpen size={20} />
              From the Holy Quran
            </h3>
            {prophet.quran_verses.map((verse: { text_en: string; text_ar?: string; surah: string; verse_start: number; verse_end: number }, vIdx: number) => (
              <div key={vIdx} className="mb-6 last:mb-0">
                {verse.text_ar && (
                  <p className="font-arabic text-2xl leading-loose text-right text-heading mb-4" dir="rtl">
                    {verse.text_ar}
                  </p>
                )}
                <p className="text-lg italic text-foreground/80 border-l-4 border-brand-gold pl-4">
                  &quot;{verse.text_en}&quot;
                </p>
                <p className="text-sm font-medium text-gray-500 mt-2">
                  — Surah {verse.surah} ({verse.verse_start}{verse.verse_start !== verse.verse_end ? `-${verse.verse_end}` : ''})
                </p>
              </div>
            ))}
          </div>
        )}
      </article>

      {/* Lessons Learned */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-3xl font-bold text-center text-heading mb-8">
          Lessons Learned
        </h2>
        <div className="grid gap-4">
          {prophet.lessons.map((lesson: string, idx: number) => (
            <div key={idx} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
              <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-bold shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <p className="text-lg text-foreground">{lesson}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Summarise Button */}
      <div className="flex justify-center mb-16">
        <button 
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 px-8 py-4 bg-brand-btn hover:bg-brand-btn-hover text-white rounded-full font-medium text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          <BookOpen size={20} />
          Summarise This Story
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-4xl mx-auto mb-16 pt-8 border-t border-border">
        {prevProphet ? (
          <Link href={`/prophet/${prevProphet.slug}`} className="flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:bg-foreground/5 text-foreground transition-colors w-full sm:w-auto justify-center">
            <ChevronLeft size={20} />
            Previous Prophet
          </Link>
        ) : <div className="hidden sm:block sm:w-[180px]"></div>}
        
        <div className="text-center">
          <span className="text-sm text-foreground/60">
            {prophet.chronological_order} of 25
          </span>
        </div>

        {nextProphet ? (
          <Link href={`/prophet/${nextProphet.slug}`} className="flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:bg-foreground/5 text-foreground transition-colors w-full sm:w-auto justify-center">
            Next Prophet
            <ChevronRight size={20} />
          </Link>
        ) : <div className="hidden sm:block sm:w-[180px]"></div>}
      </div>

      {/* Share Section */}
      <div className="flex flex-col items-center gap-4 pb-12">
        <h3 className="font-serif text-xl font-medium text-heading">Share this story</h3>
        <div className="flex gap-4">
          <button 
            onClick={handleCopyLink}
            className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-brand-accent hover:text-white hover:border-brand-accent text-foreground transition-all relative group"
            aria-label="Copy link"
          >
            <Copy size={20} />
            {copied && (
              <span className="absolute -top-10 bg-black text-white text-xs px-2 py-1 rounded">Copied!</span>
            )}
          </button>
          <button 
            onClick={shareOnWhatsApp}
            className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#128C7E] transition-colors"
            aria-label="Share on WhatsApp"
          >
            <Share2 size={20} />
          </button>
          <button 
            onClick={shareOnTwitter}
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
            aria-label="Share on X"
          >
            <span className="font-bold">X</span>
          </button>
          <button 
            onClick={shareOnFacebook}
            className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-[#0C58C2] transition-colors"
            aria-label="Share on Facebook"
          >
            <span className="font-bold font-serif">f</span>
          </button>
        </div>
      </div>

      {/* Summary Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setModalOpen(false)}>
          <div 
            className="bg-card w-full max-w-[600px] rounded-3xl p-6 md:p-8 shadow-2xl relative animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-foreground/10 text-foreground transition-colors"
            >
              <X size={24} />
            </button>
            
            <h2 className="font-serif text-2xl font-bold text-heading mb-6 pr-8">
              Summary of Prophet {prophet.name_en}&apos;s Story
            </h2>
            
            <div className="prose dark:prose-invert max-w-none mb-8">
              <p className="text-lg leading-relaxed text-foreground/90">
                {prophet.summary}
              </p>
            </div>
            
            <button 
              onClick={() => setModalOpen(false)}
              className="w-full py-3 bg-foreground/5 hover:bg-foreground/10 text-foreground rounded-xl font-medium transition-colors"
            >
              Read Full Story Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
