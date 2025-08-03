/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
    ignoreDuringBuilds: true,
  },
    images: {
        // Add sharp as an external package
        unoptimized: true,
      },
    reactStrictMode:false,
    webpack:true,
    webpack:(config)=>{
        config.resolve.fallback={fs:false};
        return config;
    }
};

export default nextConfig;