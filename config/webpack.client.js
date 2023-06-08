// 客户端 webpack 配置

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const base = require('./webpack.config')

module.exports = merge(base, {
  entry: {
    client: path.resolve(__dirname, '../src/entry/client.entry.js'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'client.html',
    })
  ]
})