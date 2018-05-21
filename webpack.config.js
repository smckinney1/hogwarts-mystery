const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// We are setting an environmental variable
// To run from custom port, run command port=[any other port] npm start
const port = process.env.PORT || 8080;
// console.log(process.env);

// __dirname: directory name for the webpack config file (needs ABSOLUTE path)
// module.rules[n].use: Order matters (LAST to FIRST)
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash].js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader' ],
      },
    ],
  },
  // Couldn't get this working; it'll throw an error that "dist" file was removed if attempt to do npm run dev
  // devServer: {
  //   port,
  // },
  plugins: [
    new CleanWebpackPlugin( 'dist', {} ),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: true,
    }),
  ],
}
