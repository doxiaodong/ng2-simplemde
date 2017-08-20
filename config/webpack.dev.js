const path = require('path')
const webpackMerge = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./webpack.common')

const ENV = 'dev'

module.exports = webpackMerge(commonConfig, {
  devtool: '#eval-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
})
