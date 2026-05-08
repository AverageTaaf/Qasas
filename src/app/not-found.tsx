import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 animate-fade-up">
      <div className="w-24 h-24 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-8">
        <span className="font-serif text-5xl font-bold italic">404</span>
      </div>
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-heading mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-foreground/60 max-w-md mb-12">
        The story you are looking for doesn&apos;t seem to exist or has been moved to a different location.
      </p>
      <Link 
        href="/" 
        className="flex items-center gap-2 px-8 py-3 bg-brand-btn hover:bg-brand-btn-hover text-white rounded-full font-medium transition-all shadow-md hover:shadow-lg"
      >
        <Home size={20} />
        Back to Home
      </Link>
    </div>
  );
}
