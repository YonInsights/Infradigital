/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Inject environment variables at build time for SEO/meta tags
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  // webpack config: critical for pdfjs-dist Canvas API compatibility in Node.js SSR
  webpack: (config, { isServer }) => {
    if (isServer) {
      // pdfjs-dist uses browser-only Canvas API; alias to null for SSR safety
      config.resolve.alias.canvas = false;
      // Ensure pdf.worker.min.js is served from public path at runtime
      config.output.environment = { ...config.output.environment, asyncFunction: true };
    }
    return config;
  },
  // Rewrites: serve pdf.worker.min.js from public folder (required by pdfjs-dist)
  async rewrites() {
    return [
      {
        source: '/pdf.worker.min.js',
        destination: '/_next/static/worker/pdf.worker.min.js',
      },
    ];
  },
  // AdSense: Allow external scripts in CSP headers (configured in Phase 4)
  // headers: async () => [{ source: '/:path*', headers: [...] }]
};

module.exports = nextConfig;