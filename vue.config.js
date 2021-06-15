module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'views': '@/views',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
      }
    }
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 128
          })
        ]
      }
    }
  }
}

