/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx'],
    reactStrictMode: true,
    experimental: {
        scrollRestoration: true,
    },
    images: {
        unoptimized: true,
    }
}


export default nextConfig;
