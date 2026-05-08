import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const notoNaskh = Noto_Naskh_Arabic({ subsets: ["arabic"], variable: "--font-arabic" });

export const metadata: Metadata = {
  title: {
    default: "Qasas - Stories of the 25 Prophets",
    template: "%s | Qasas"
  },
  description: "Explore the complete and detailed stories of the 25 Prophets mentioned in the Holy Quran. Learn about their lives, miracles, and timeless lessons through a premium educational experience.",
  keywords: ["Prophets in Islam", "Stories of the Prophets", "Qasas ul Anbiya", "Islamic Education", "25 Prophets of Quran", "Prophet Stories", "Quranic Miracles"],
  authors: [{ name: "Qasas Team" }],
  creator: "Qasas Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qasas-prophetic.vercel.app/",
    siteName: "Qasas - Stories of the Prophets",
    title: "Qasas - Stories of the 25 Prophets",
    description: "Discover the detailed stories, miracles, and lessons of the 25 Prophets mentioned in the Quran.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Qasas - Stories of the Prophets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qasas - Stories of the 25 Prophets",
    description: "Detailed stories and lessons of the 25 Prophets of the Quran.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://qasas-prophetic.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${notoNaskh.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Qasas",
              "url": "https://qasas-prophetic.vercel.app/",
              "logo": "https://qasas-prophetic.vercel.app/logo.png",
              "description": "An educational platform dedicated to the stories of the 25 Prophets mentioned in the Quran.",
              "sameAs": [
                "https://twitter.com/qasas_prophetic",
                "https://facebook.com/qasas_prophetic"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans islamic-pattern bg-repeat">
        <Header />
        <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-6 py-8">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
