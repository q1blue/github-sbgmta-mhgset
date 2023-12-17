const vuePlugin = require('@vitejs/plugin-vue');

module.exports = {
  plugins: [
    vuePlugin({
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }),
  ],
  build: {
    minify: false,
  },
};
