const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/Union-HCI' : '',
    assetPrefix: isProd ? '/Union-HCI/' : '',
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
