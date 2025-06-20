/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const repoName = 'cv'

const nextConfig = {
  // All environments
  ...(isProd && {
    // Production only
    output: 'export',
    distDir: 'dist',
    trailingSlash: true,
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    images: {
      unoptimized: true,
    },
  }),
}

export default nextConfig
