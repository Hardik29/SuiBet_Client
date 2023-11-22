/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
        {
            source: '/index',
            destination: '/indexPage',
        },
    ]
},
}

module.exports = nextConfig
