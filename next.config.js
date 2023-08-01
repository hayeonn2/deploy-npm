const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  images: {
    domains: ["firebasestorage.googleapis.com", "www.gravatar.com"],
  },
  webpack: config => {
    config.resolve.alias["@"] = path.join(__dirname, "app");
    return config;
  },
};

module.exports = nextConfig;
