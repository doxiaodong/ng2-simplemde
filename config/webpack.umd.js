const path = require('path')
const webpack = require('webpack')

const ENV = 'umd'

module.exports = {
  devtool: '#inline-source-map',
  entry: './index.ts',
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
    ),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,

      mangle: {
        screw_ie8: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
}
