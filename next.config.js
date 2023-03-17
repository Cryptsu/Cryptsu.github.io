/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image optimization
  images: {
    loader: "akamai",
    path: ""
  },

  // Allows Github Page to find /_next folder.
  basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages",
}

const webpackConfig = {
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: { removeViewBox: false },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
}

module.exports = {
  ...nextConfig,
  ...webpackConfig,
}
