/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mafilala.github.io",
        port: "", // No port needed
        pathname: "/**", // Allow all paths under this domain
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "", // No port needed
        pathname: "/**", // Allow all paths under this domain
      },
    ],
  },
};

export default nextConfig;
