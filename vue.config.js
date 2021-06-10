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
  }
}

