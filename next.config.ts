import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "134.199.200.55",
        port: "8055",
        pathname: "/assets/**",
      },
    ],
    dangerouslyAllowLocalIP: true,
  },
};

export default nextConfig;
