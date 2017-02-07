const path = require('path')
const commonConfig = require('./webpack.common.js')
const webpackMerge = require('webpack-merge')
const webpack = require('webpack')

const ENV = 'build'

module.exports = {
  devtool: '#inline-source-map',
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, '../bundles'),
    publicPath: '/',
    filename: 'index.umd.js',
    libraryTarget: 'umd',
    library: 'ng2-simplemde'
  },
  // require those dependencies but don't bundle them
  externals: [/^\@angular\//, /^rxjs\//],
  module: {
    rules: [
      // See: https://github.com/s-panferov/awesome-typescript-loader
      { test: /\.ts$/, use: 'awesome-typescript-loader', exclude: [/\.(spec|e2e)\.ts$/] },
      // See: https://github.com/webpack/raw-loader
      { test: /\.html$/, use: 'raw-loader', exclude: [path.resolve(__dirname, 'server/index.html')] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    // fix the warning in ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.join(__dirname, './src')
    )
  ]
}
