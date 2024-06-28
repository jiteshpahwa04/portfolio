import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // this is to get images from cloudinary (external images)
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            }
        ],
    },
};

export default nextConfig;
