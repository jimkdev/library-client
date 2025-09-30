import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true
      },
      {
        source: "/dashboard",
        destination: "/dashboard/home",
        permanent: true
      }
    ]
  }
};

export default nextConfig;
