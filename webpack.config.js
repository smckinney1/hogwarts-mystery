const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// We are setting an environmental variable
// To run from custom port, run command port=[any other port] npm start
const port = process.env.PORT || 8080;
// console.log(process.env);

// We're setting the MODE in package.json
// __dirname: directory name for the webpack config file (needs ABSOLUTE path)
// dev.contentBase: where files are served from
// module.rules.use: Order matters (LAST to FIRST)
module.exports = {
  // mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss$/, exclude: /node_modules/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
    ],
  },
  devServer: {
    port,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
}
