/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['yt3.ggpht.com', 'instagram.frec17-1.fna.fbcdn.net', 'p77-sign-va.tiktokcdn.com'],
  }
}

module.exports = nextConfig
