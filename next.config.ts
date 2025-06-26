import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['woodenscale-assets.s3.ap-south-1.amazonaws.com'], // ❌ REMOVE this if not needed
  },
};

export default nextConfig;
