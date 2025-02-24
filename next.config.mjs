/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/Union-HCI' : '',
    assetPrefix: isProd ? '/Union-HCI' : '',
    output: 'export',
    reactStrictMode: true,

    images: {
        unoptimized: true,
        domain: ['https://union-hci-nlhp.vercel.app/']
    }
}

export default nextConfig;
