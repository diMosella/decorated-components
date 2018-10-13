const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });
  defaultConfig.watch = true,
  defaultConfig.watchOptions = {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: ['node_modules', 'src/**/*.spec.js']
  }
  defaultConfig.resolve.extensions.push(".scss");
  return defaultConfig;
};
