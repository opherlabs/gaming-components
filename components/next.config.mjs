/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "images.unsplash.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "tailwindui.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "images.pexels.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "media.istockphoto.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "artsculturesa.wordpress.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "www.shutterstock.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "t4.ftcdn.net",
            port: "",
          },
          // Add png.pngitem.com to the allowed hostnames
          {
            protocol: "https",
            hostname: "png.pngitem.com",
            port: "",
          },
        ],
      },
};

export default nextConfig;
