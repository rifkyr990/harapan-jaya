import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.busharapanjaya.com",
        pathname: "/file/20200714163108.png", // cocokkan path ke gambarnya
      },
    ],
  },
};


export default nextConfig;
