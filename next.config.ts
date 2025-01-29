/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable Next.js image optimization (useful for static export)
  },
  output: 'export', // Static export (replaces `next export`)
  trailingSlash: false, // No trailing slashes in routes (e.g., `/about` instead of `/about/`)
};

module.exports = nextConfig;
