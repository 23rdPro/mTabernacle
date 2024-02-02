/** @type {import('next').NextConfig} */

const nextConfig = {
    // async headers() {
    //     return [
    //         {
    //             source: "/api/:path*",
    //             headers: [
    //                 { key: "Access-Control-Allow-Credentials", value: "true" },
    //                 { key: "Access-Control-Allow-Origin", value: "*" },
    //                 { key: "Access-Control-Allow-Methods", value: "GET,POST" },
    //                 { 
    //                     key: "Access-Control-Allow-Headers", 
    //                     value:"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Versio"
    //                 }
    //             ]
    //         }
    //     ]
    // },
    reactStrictMode: true,
    // async rewrites() {
    //     return [
    //         {
    //             source: '/api/:path*',
    //             destination: 'http://localhost:3000/:path*' // Proxy to Backend
    //         }
    //     ]
    // },
    experimental: { optimizeCss: true },
    images: { 
        // disableStaticImages: true 
        remotePatterns: [
            { protocol: 'https', hostname: 'pbs.twimg.com' },
            { protocol: 'https', hostname: 'abs.twimg.com' },
        ],
    }
};

module.exports = nextConfig


