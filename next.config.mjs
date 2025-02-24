/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/Union-HCI',
    output: 'export',
    reactStrictMode: true,
    images: {
        domains: ["https://union-hci.vercel.app/team"],
    }
}

export default nextConfig;
