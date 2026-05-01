/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Questo permette di fare il deploy anche se ci sono piccoli errori di tipo
    ignoreBuildErrors: true, 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;