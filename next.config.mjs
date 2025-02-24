/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    basePath: '/Union-HCI',
    images: {
        domains: ["https://union-hci.vercel.app/team"],
    }
}

export default nextConfig;
