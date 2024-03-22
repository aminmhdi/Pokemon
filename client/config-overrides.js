module.exports = function override(config, env) {
  config.resolve.fallback = {
    child_process: false,
    fs: false,
    os: false
  };
  return config;
};
