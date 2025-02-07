/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'm.media-amazon.com',
          port: '',
          pathname: '/images/**',
        },
        {
          protocol: 'https',
          hostname: 'www.exileeditions.com',
          port: '',
          pathname: '/**', // Adjust the pathname based on the image path structure you need
        },
      ],
    },
  };
  
  export default nextConfig;
  