import prophetsData from "@/data/prophets.json";
import ProphetDetailClient from "@/components/ProphetDetailClient";
import { Metadata } from "next";

export async function generateStaticParams() {
  return prophetsData.map((prophet) => ({
    slug: prophet.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const prophet = prophetsData.find(p => p.slug === resolvedParams.slug);
  
  if (!prophet) {
    return {
      title: "Prophet Not Found",
    };
  }

  return {
    title: `Prophet ${prophet.name_en} (PBUH) | Qasas`,
    description: `${prophet.name_en}: ${prophet.one_line_glimpse} Learn about the life and miracles of Prophet ${prophet.name_en} from the Holy Quran.`,
    alternates: {
      canonical: `/prophet/${prophet.slug}`,
    },
  };
}



export default async function ProphetPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const prophetIndex = prophetsData.findIndex(p => p.slug === resolvedParams.slug);
  
  if (prophetIndex === -1) {
    return <div>Prophet not found</div>;
  }

  const prophet = prophetsData[prophetIndex];
  const prevProphet = prophetIndex > 0 ? prophetsData[prophetIndex - 1] : null;
  const nextProphet = prophetIndex < prophetsData.length - 1 ? prophetsData[prophetIndex + 1] : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": `Story of Prophet ${prophet.name_en} (PBUH)`,
            "description": prophet.summary,
            "author": {
              "@type": "Organization",
              "name": "Qasas"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Qasas",
              "logo": {
                "@type": "ImageObject",
                "url": "https://qasas-prophetic.vercel.app/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://qasas-prophetic.vercel.app/prophet/${prophet.slug}`
            }
          })
        }}
      />
      <ProphetDetailClient 
        prophet={prophet} 
        prevProphet={prevProphet} 
        nextProphet={nextProphet} 
      />
    </>
  );
}

