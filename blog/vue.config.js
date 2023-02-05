const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    resolve: {
      fallback: {
        fs: false,
        tls: false,
        net: false,
      }
    }
  },
  devServer: {
    // 端口号
    port: 8080,
    // 配置不同的后台API地址
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
})
