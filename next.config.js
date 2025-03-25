/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    basePath: "/quiz-app",           // Use your repo name
    assetPrefix: "/quiz-app/",       // Ensure assets load properly
    trailingSlash: true              // Ensure URLs end with a slash
  };
  
  module.exports = nextConfig;
  