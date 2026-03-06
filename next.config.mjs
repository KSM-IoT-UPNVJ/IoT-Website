/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Perhatikan: properti standar adalah 'deviceSizes' atau 'imageSizes',
    // tapi jika kamu ingin kualitas default, Next.js biasanya mengaturnya otomatis.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  output: 'standalone',
  transpilePackages: [
    'lucide-react',
    'framer-motion',
    'swiper',
    'slick-carousel',
  ],
};

export default nextConfig;
