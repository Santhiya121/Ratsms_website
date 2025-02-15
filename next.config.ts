// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     productionBrowserSourceMaps: true,
// };

// module.exports = nextConfig;



// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
//   });
  
//   /** @type {import('next').NextConfig} */
//   const nextConfig = {
//     reactStrictMode: true,
//     productionBrowserSourceMaps: true,
//   };
  
//   module.exports = withBundleAnalyzer(nextConfig);
  
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
  });
  
  /** @type {import('next').NextConfig} */
  const nextConfig = withBundleAnalyzer({
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
      ];
    },
  });
  
  module.exports = nextConfig;
  