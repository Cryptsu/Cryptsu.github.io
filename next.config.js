/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: "export",

  // Image optimization
  images: {
    loader: "akamai",
    path: ""
  },
}

const webpack_override_svg_viewbox_rule = {
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
}

const webpackConfig = {
  webpack(config) {
    config.module.rules.push({
      ...webpack_override_svg_viewbox_rule,
      test: /\.svg$/,
    });
    return config;
  },
}

const turbopackConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          webpack_override_svg_viewbox_rule
        ],
        as: '*.js',
      },
    },
  },
}

module.exports = {
  ...nextConfig,
  ...webpackConfig,
  ...turbopackConfig,
}
