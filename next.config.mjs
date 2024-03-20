/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: process.env.SERVER_URL,
    APP_URL: process.env.APP_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: ""
      }
    ]
  }
}

export default nextConfig
