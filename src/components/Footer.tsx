"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);
  return (
    <footer className="w-full bg-card border-t border-border mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row justify-between gap-8 text-foreground">
        <div className="max-w-md">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-white font-serif font-bold italic">Q</div>
            <span className="font-serif text-2xl font-bold text-heading">Qasas</span>
          </Link>
          <p className="text-sm opacity-80 mb-4">
            &quot;This website aims to share stories based on the Holy Quran and authentic sources. All respect is accorded to the Prophets (peace be upon them).&quot;
          </p>
          <p className="text-sm opacity-80">
            Sources: Stories derived from the Holy Quran and classical Tafsir.
          </p>
        </div>
        
        <div className="flex flex-col gap-2">
          <h3 className="font-serif font-bold text-lg text-heading mb-2">Sitemap</h3>
          <Link href="/" className="text-sm hover:text-brand-accent transition-colors">Home</Link>
          <Link href="/about" className="text-sm hover:text-brand-accent transition-colors">About</Link>
          <Link href="/references" className="text-sm hover:text-brand-accent transition-colors">References</Link>
          <Link href="/contact" className="text-sm hover:text-brand-accent transition-colors">Contact</Link>
          <Link href="/sitemap" className="text-sm hover:text-brand-accent transition-colors font-medium text-brand-accent/80">HTML Sitemap</Link>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-6 border-t border-border text-center text-xs opacity-70 flex flex-col md:flex-row justify-between items-center text-foreground">
        <p>&copy; {mounted ? new Date().getFullYear() : ""} Qasas. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Last updated: {mounted ? new Date().toLocaleDateString() : ""}</p>
      </div>
    </footer>
  );
}
