/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wefit-react-web-test.s3.amazonaws.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
