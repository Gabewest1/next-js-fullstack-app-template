/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.pravatar.cc"], // Add whitelist of domains to pull data from. Nextjs will throw errors
  },
}

module.exports = nextConfig
