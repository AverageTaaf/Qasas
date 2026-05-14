// Trigger redeploy for Vercel fix: 2026-05-09_02
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed output: "export" for better Vercel optimization
  // Vercel will still serve static pages but with better edge routing
  trailingSlash: true,
};

export default nextConfig;
