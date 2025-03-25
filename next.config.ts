import type { NextConfig } from 'next';

const nextConfig: NextConfig = {

  // Optional: Set the base path if deploying to a subdirectory (e.g., GitHub Pages)
  basePath: '/my-v0-project',

  // Additional configurations you may need
  reactStrictMode: true, // Enable React Strict Mode for development
  images: {
    domains: ['quizapp.com'], // Specify image domains for optimization
  },
};

export default nextConfig;