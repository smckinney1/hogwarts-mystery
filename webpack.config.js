const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// __dirname: directory name for the webpack config file
// dev.contentBase: where files are served from
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      // { test: /\.html$/, exclude: /node_modules/, loader: 'file-loader' },
    ],
  },
  devServer: {
    // contentBase: './build',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
}