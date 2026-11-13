import type { NextConfig } from 'next';

// Static export: `next build` writes plain HTML, CSS and JS to /out,
// which any static host can serve (Vercel, Netlify, GitHub Pages).
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
