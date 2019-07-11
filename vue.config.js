module.exports = {
  // publicPath: './',
  devServer: {
    proxy: {
      '/dcm-etrade-deploy': {
        // target: 'http://www.dcfund.com.cn', // 准生产环境转发
        target: 'http://59.40.77.47:7033', // 测试境转发
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/dcm-etrade-deploy': '/dcm-etrade-deploy'
        }
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 75,
            exclude: /(node_module)/,
            minPixelValue: 3
          })
        ]
      }
    }
  }
}
