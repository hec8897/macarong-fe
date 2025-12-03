import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    // Fast Refresh 명시적 활성화
    if (dev) {
      config.watchOptions = {
        poll: 1000, // 1초마다 파일 변경 체크
        aggregateTimeout: 300, // 300ms 동안 변경사항 수집
      };
    }
    return config;
  },
};

export default nextConfig;
