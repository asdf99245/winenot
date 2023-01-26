/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true, // styled-components 적용
    removeConsole: process.env.NODE_ENV === 'production', // 배포 환경일시 console.* 제거
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
