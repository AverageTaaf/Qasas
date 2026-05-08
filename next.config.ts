// Trigger redeploy for Vercel fix: 2026-05-08_02
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed output: "export" for better Vercel optimization
  // Vercel will still serve static pages but with better edge routing
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
