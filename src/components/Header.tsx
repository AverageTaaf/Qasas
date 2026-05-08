"use client";

import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = document.documentElement.classList.contains("dark") || window.matchMedia("(prefers-color-scheme: dark)").matches;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDarkMode(isDark);
      if (isDark) document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-white font-serif font-bold italic">Q</div>
          <span className="font-serif text-2xl font-bold text-heading">Qasas</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-brand-accent transition-colors text-foreground">Home</Link>
          <Link href="/about" className="text-sm font-medium hover:text-brand-accent transition-colors text-foreground">About</Link>
          <Link href="/references" className="text-sm font-medium hover:text-brand-accent transition-colors text-foreground">References</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-brand-accent transition-colors text-foreground">Contact</Link>
          
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-foreground/10 transition-colors text-foreground" aria-label="Toggle dark mode">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
        
        <div className="flex md:hidden items-center gap-4 text-foreground">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-foreground/10 transition-colors" aria-label="Toggle dark mode">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-full hover:bg-foreground/10 transition-colors" aria-label="Menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-card border-b border-border py-4 px-4 flex flex-col gap-4 shadow-lg text-foreground">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-brand-accent transition-colors">Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-brand-accent transition-colors">About</Link>
          <Link href="/references" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-brand-accent transition-colors">References</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-brand-accent transition-colors">Contact</Link>
        </div>
      )}
    </header>
  );
}
