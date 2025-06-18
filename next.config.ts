import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'cv'; // Replace with your actual repository name

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
