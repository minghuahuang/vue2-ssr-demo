// 服务端 webpack 配置

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const base = require('./webpack.config')

module.exports = merge(base, {
  target: 'node',
  entry: {
    server: path.resolve(__dirname, '../src/entry/server.entry.js'),
  },
  output: {
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.ssr.html'),
      filename: 'server.html',
      excludeChunks: [ 'server' ],
      minify: false,
      client: '/client.bundle.js',
      // files: {
      //   js: 'client.bundle.js'
      // }
    })
  ],
})