module.exports = {
  swcMinify: true,
  webpack: (config, { isServer }) => {
    config.output.globalObject = 'this'
    if (!isServer) {
      config.target = 'electron-renderer';
      config.node = {
        __dirname: true,
      };
    }

    return config;
  },
};
