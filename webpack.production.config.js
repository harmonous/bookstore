const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
});

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
        // use: extractSass.extract('style-loader', 'css-loader!resolve-url-loader!sass-loader?sourceMap'),
        use: extractSass.extract({
          fallback: "style-loader",
          use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
        }),
      },
      { test: /\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=[name].[ext]' },
      { test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=[name].[ext]' },
      { test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=[name].[ext]' },
      { test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]' }
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      //   loader: 'url-loader?limit=100000'
      // },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    extractSass,
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      // path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
    alias: {
      ['~']: path.resolve(__dirname + '/src'),
      // reducers: path.resolve(__dirname + '/reducers'),
    },
  },
};
