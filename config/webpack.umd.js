const path = require('path')
const webpack = require('webpack')
const MinifyPlugin = require('babel-minify-webpack-plugin')

const ENV = 'umd'

module.exports = {
  devtool: '#inline-source-map',
  entry: './src/index.ts',
  resolve: {
    // See: http://webpack.github.io/docs/configuration.html#resolve-extensions
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, '../bundles'),
    publicPath: '/',
    filename: 'ng2-simplemde.umd.min.js',
    libraryTarget: 'umd',
    library: 'ng2-simplemde'
  },
  // require those dependencies but don't bundle them
  externals: [/^\@angular\//, /^rxjs\//],
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', exclude: [/\.(spec|e2e)\.ts$/] },
      // See: https://github.com/webpack/raw-loader
      { test: /\.html$/, use: 'raw-loader', exclude: [path.resolve(__dirname, 'server/index.html')] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new MinifyPlugin()
  ]
}
