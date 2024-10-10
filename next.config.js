/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 300,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Add any additional Next.js configuration options here if needed
}

module.exports = nextConfig;
