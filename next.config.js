
module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        "@sentry": {
          test: /[\\/]node_modules[\\/](@sentry)[\\/]/,
          name: "@sentry",
          priority: 10,
          reuseExistingChunk: false,
        },
      };
    }

    return config;
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};