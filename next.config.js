const path = require("path");

module.exports = {
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...(!options.isServer
        ? {
            [path.resolve(__dirname, "libs/test.server.js")]: path.resolve(
              __dirname,
              "webpack-utils/emptyFile.js"
            ),
          }
        : {}),
    };

    return config;
  },
  future: {
    webpack5: true,
  },
};
