import HomeClient from "@/components/HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Stories of the 25 Prophets",
  description: "Discover the detailed stories, miracles, and lessons of the 25 Prophets mentioned in the Quran. A comprehensive educational guide for all ages.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Qasas",
            "url": "https://qasas-prophetic.vercel.app/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://qasas-prophetic.vercel.app/?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <HomeClient />
    </>
  );
}

