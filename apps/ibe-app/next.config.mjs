/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    /** Customise the built-in ESLint pass during `next build` */
    eslint: {
        ignoreDuringBuilds: false,
    },

    /** Customise the built-in TypeScript pass during `next build` */
    typescript: {
        ignoreBuildErrors: false,
    },
};

export default nextConfig;
