/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   appDir: true,
  // },
  // distDir: "build",
  // images: {
  //   domains: ["firebasestorage.googleapis.com", "www.gravatar.com"],
  // },
  // webpack: config => {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ["@svgr/webpack"],
  //   });
  //   config.resolve.alias["@"] = path.join(__dirname, "app");
  //   return config;
  // },
};

module.exports = nextConfig;
