/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx'],
    reactStrictMode: true,
    experimental: {
        scrollRestoration: true,
    },
}


export default nextConfig;
