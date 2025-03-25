/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    basePath: "/quiz-app",
    compiler: {
      minify: false,  // Disable minification
    },
  };
  
  module.exports = nextConfig;
  