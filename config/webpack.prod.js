const path = require('path')
const webpackMerge = require('webpack-merge')
const webpack = require('webpack')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const commonConfig = require('./webpack.common')

const ENV = 'prod'

module.exports = webpackMerge(commonConfig, {
  devtool: '#source-map',
  output: {
    path: path.resolve(__dirname, '../docs'),
    publicPath: './',
    filename: '[name].[hash].js',
    sourceMapFilename: '[file].map',
    chunkFilename: '[id].[hash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new MinifyPlugin()
  ]
})
