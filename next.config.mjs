/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/Union-HCI',
    output: 'export',
    reactStrictMode: true,
    assetPrefix: '/Union-HCI/',
    images: {
        unoptimized: true,
        domains: ["https://union-hci.vercel.app/team"],
    }
}

export default nextConfig;
