import type { NextConfig } from 'next';

const nextConfig: NextConfig = {

  output: 'export', 

  // Optional: Set the base path if deploying to a subdirectory (e.g., GitHub Pages)
  basePath: '/quiz-app',

  // Additional configurations you may need
  reactStrictMode: true, // Enable React Strict Mode for development
  images: {
    unoptimized: true,
  },
};

export default nextConfig;