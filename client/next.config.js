/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/:path*'
      }
    ]
  },
  images: {
    domains: ['www.google.com', 'media.timeout.com']
  }
}

module.exports = nextConfig
