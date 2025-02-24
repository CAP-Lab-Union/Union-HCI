/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/Union-HCI' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cap-lab-union.github.io/Union-HCI/' : '',
    output: 'export',
    reactStrictMode: true,

    images: {
        unoptimized: true,
    }
}

export default nextConfig;
