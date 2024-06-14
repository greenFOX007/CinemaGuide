/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cinemaguide.skillbox.cc",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
