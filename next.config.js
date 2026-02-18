/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nextjs-blog',
  assetPrefix: '/nextjs-blog/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig