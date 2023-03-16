/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const webpackConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = {
  ...nextConfig,
  ...webpackConfig,
}
