import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',                   // Static export
  basePath: '/quiz-app',              // Base path for GitHub Pages
  assetPrefix: '/quiz-app/',          // Ensures assets load from the right location
  reactStrictMode: true,
  images: {
    unoptimized: true                 // Ensure images are statically exported
  }
};

export default nextConfig;