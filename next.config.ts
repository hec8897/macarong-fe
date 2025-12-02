import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    turbopack: {
      root: __dirname,
    },
  },
};

export default nextConfig;
