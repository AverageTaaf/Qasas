import Link from "next/link";
import prophetsData from "@/data/prophets.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap | Qasas",
  description: "A complete list of all pages and Prophet stories on Qasas.",
};

export default function SitemapPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-fade-up">
      <header className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-heading mb-4">
          HTML Sitemap
        </h1>
        <p className="text-lg text-foreground/60">
          A comprehensive directory of all content on Qasas.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        <section>
          <h2 className="font-serif text-2xl font-bold text-heading mb-6 border-b pb-2">
            Main Pages
          </h2>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-lg hover:text-brand-accent transition-colors font-medium">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-lg hover:text-brand-accent transition-colors font-medium">About Qasas</Link>
            </li>
            <li>
              <Link href="/references" className="text-lg hover:text-brand-accent transition-colors font-medium">Authentic References</Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg hover:text-brand-accent transition-colors font-medium">Contact Us</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-heading mb-6 border-b pb-2">
            Prophet Stories (PBUH)
          </h2>
          <ul className="grid grid-cols-1 gap-2">
            {prophetsData.map((prophet) => (
              <li key={prophet.id}>
                <Link 
                  href={`/prophet/${prophet.slug}`} 
                  className="text-base hover:text-brand-accent transition-colors flex items-center gap-2"
                >
                  <span className="text-foreground/40 font-mono text-sm">{prophet.id.toString().padStart(2, '0')}.</span>
                  {prophet.name_en}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
