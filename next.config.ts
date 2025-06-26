import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['woodenscale-assets.s3.ap-south-1.amazonaws.com'], // ❌ REMOVE this if not needed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
