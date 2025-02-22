import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["digitalassets.tesla.com"], // 👈 Agrega este dominio
  },
};

export default nextConfig;
