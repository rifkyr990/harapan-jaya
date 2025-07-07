// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imguh.com", // ← Bukan www.imguh.com
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
