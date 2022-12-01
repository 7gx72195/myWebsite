const { defineConfig } = require('@vue/cli-service')
module.exports = {
  // publicPath 為 project-name，根目錄地址為上傳的網域
  publicPath: '/myWebsite/',
  filenameHashing: false,
  assetsDir: 'tools',
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
};

