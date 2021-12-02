module.exports = {
  presets: [['@babel/env']],
  plugins: [['@babel/plugin-proposal-class-properties'], ['@babel/plugin-transform-typescript'], ['@babel/plugin-transform-runtime']],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-runtime'],
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
