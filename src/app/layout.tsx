import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const notoNaskh = Noto_Naskh_Arabic({ subsets: ["arabic"], variable: "--font-arabic" });

export const metadata: Metadata = {
  title: "Qasas - Stories of the 25 Prophets",
  description: "Discover the stories of the 25 Prophets mentioned in the Holy Quran. Learn their struggles, miracles, and timeless lessons.",
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
      <body className="min-h-full flex flex-col font-sans islamic-pattern bg-repeat">
        <Header />
        <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
