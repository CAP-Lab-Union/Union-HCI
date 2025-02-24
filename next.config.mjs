/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/Union-HCI' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cap-lab-union.github.io/Union-HCI/' : '',
    output: 'export',
    reactStrictMode: true,

    images: {
        unoptimized: true,
        domains: ["https://union-hci.vercel.app/team", "https://union-hci-nlhp.vercel.app/"],
    }
}

export default nextConfig;
