import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Use static export for GitHub Pages, standalone for Docker
  output: isGitHubPages ? "export" : "standalone",

  // Base path for GitHub Pages (repo name)
  basePath: isGitHubPages ? "/Tagent" : "",

  // Trailing slashes for GitHub Pages compatibility
  trailingSlash: isGitHubPages,

  // Disable image optimization for static export
  images: isGitHubPages ? {
    unoptimized: true,
  } : undefined,

  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
