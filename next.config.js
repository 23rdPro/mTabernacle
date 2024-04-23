/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    experimental: { optimizeCss: true },
    images: { 
        remotePatterns: [
            { protocol: 'https', hostname: 'pbs.twimg.com' },
            { protocol: 'https', hostname: 'abs.twimg.com' },
        ],
    }
};

module.exports = nextConfig


