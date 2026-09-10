import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubActions ? '/ironman-website' : '';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
