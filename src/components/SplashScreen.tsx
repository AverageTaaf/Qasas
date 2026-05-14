"use client";
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (hasSeenSplash) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("hasSeenSplash", "true");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted || !show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background islamic-pattern bg-repeat animate-fade-out" style={{ animationDelay: '2s', animationDuration: '0.5s', animationFillMode: 'forwards' }}>
      <div className="relative flex flex-col items-center animate-fade-in">
        {/* Animated outer rings */}
        <div className="absolute -inset-6 rounded-full border-t-2 border-r-2 border-brand-accent/40 animate-[spin_3s_linear_infinite]"></div>
        <div className="absolute -inset-6 rounded-full border-b-2 border-l-2 border-brand-gold/40 animate-[spin_2s_linear_infinite_reverse]"></div>
        <div className="absolute -inset-2 rounded-full border border-brand-heading/20 animate-ping" style={{ animationDuration: '3s' }}></div>
        
        {/* Logo/Icon */}
        <div className="w-24 h-24 rounded-full bg-brand-accent flex items-center justify-center text-white shadow-[0_0_30px_rgba(26,127,107,0.4)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-btn to-brand-accent animate-pulse"></div>
          <span className="font-serif text-6xl font-bold italic relative z-10">Q</span>
        </div>
        
        {/* Loading text */}
        <h2 className="mt-10 font-serif text-3xl font-bold text-heading tracking-wider animate-pulse">Qasas</h2>
        <p className="mt-3 text-foreground/70 font-medium text-xs tracking-[0.3em] uppercase">Journey through faith</p>
        
        {/* Progress bar line */}
        <div className="mt-8 w-40 h-[2px] bg-border overflow-hidden relative rounded-full">
          <div className="absolute top-0 left-0 h-full bg-brand-gold rounded-full w-full animate-progress origin-left"></div>
        </div>
      </div>
    </div>
  );
}
