module.exports = {
  // lintOnSave: true,
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require('postcss-pxtorem')({
  //           rootValue: 16,
  //           selectorBlackList: ['el'], // 忽略转换正则匹配项
  //           propList: ['*'],
  //         }),
  //         require('postcss-px-to-viewport')({
  //           viewportWidth: 750, //根据视觉稿的宽度进行设置
  //           unitPrecision: 5,
  //           viewportUnit: 'vw',
  //           selectorBlackList: ['el'], //忽略转换的css选择器
  //           minPixelValue: 1,
  //           mediaQuery: false
  //         }),
  //       ]
  //     }
  //   }
  // },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {//配置跨域
      '/api/': {
        target: 'http://localhost:5555/',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/api/': ''//请求的时候使用这个api就可以
        }
      }

    }
  }

}