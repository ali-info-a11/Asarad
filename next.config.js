// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [{ hostname: '**' }],
  },
  experimental: {
    // enable app directory
    appDir: true,
  },
};
module.exports = nextConfig;
