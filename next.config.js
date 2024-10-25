/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: ["lh3.googleusercontent.com", "i.pinimg.com", "static.wikia.nocookie.net", "avatarfiles.alphacoders.com", "xquality.com.br", "m.media-amazon.com"]
  },
};