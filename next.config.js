/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    output: "export",
    basePath: "/<your-repo-name>",           // Replace with your repository name
    assetPrefix: "/<your-repo-name>/",       // Ensure assets load correctly
    trailingSlash: true                      // Add trailing slash for GitHub Pages compatibility
  };
  
  module.exports = nextConfig;
  