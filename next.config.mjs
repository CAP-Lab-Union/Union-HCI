/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/Union-HCI' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Union-HCI/' : '',
    output: 'export',
    reactStrictMode: true,

    images: {
        unoptimized: true,
        domains: ["https://union-hci.vercel.app/team"],
    }
}

export default nextConfig;
