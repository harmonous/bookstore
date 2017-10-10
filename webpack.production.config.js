const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

// const extractSass = new ExtractTextPlugin({
//   filename: "[name].[contenthash].css",
// });

/* eslint-disable no-useless-computed-key */
module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: ['src/stylesheets'],
          },
        }],
      },
      { test: /\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=[name].[ext]' },
      { test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=[name].[ext]' },
      { test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=[name].[ext]' },
      { test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]' },
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=100000' },
      { test: /\.json$/, loader: 'json-loader' },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      // path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
    alias: {
      ['~']: path.join(__dirname, '/src'),
      resource: path.join(__dirname, '/resource'),
    },
  },
};
