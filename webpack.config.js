const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // This is to work around another issue in expo-modules-core/build/uuid/uuid.web.js
  config.externals = { crypto: "crypto" };
  return config;
};
