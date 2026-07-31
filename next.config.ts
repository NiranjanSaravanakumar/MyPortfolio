import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  ...(isProd && {
    output: "export",
    images: { unoptimized: true },
  }),
  allowedDevOrigins: ["10.1.2.138"],
};

export default nextConfig;