import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed output: "export" for better Vercel optimization
  // Vercel will still serve static pages but with better edge routing
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
