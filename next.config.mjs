/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/Instasany/" : "",
  basePath: isProd ? "/Instasany" : "",
};
