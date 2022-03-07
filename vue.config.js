module.exports = {
  // publicPath: process.env.VUE_APP_BASE_URL,
  devServer: {
    proxy: process.env.VUE_APP_API_PROXY
  },
  transpileDependencies: [
    'vuetify'
  ]
}
