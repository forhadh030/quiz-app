/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/quiz-app",         // GitHub Pages repo name
  assetPrefix: "/quiz-app/",     // Ensure assets load properly
  trailingSlash: true,           // Fix broken routes and assets
};

module.exports = nextConfig;
