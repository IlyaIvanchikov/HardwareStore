const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'development',
  entry: {
    index:  './app/src/index.js'
  },
  output: { 
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'web',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: false
          }
        }]
      },
      {
        test: /\.js$/,
        use: ['babel-loader'/* , 'eslint-loader' */],
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: './postcss.config.js' } }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img',
              name: '[name].[ext]'
            }},
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'fonts'
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./app/src/page/index.html",
      filename: "./index.html",
      excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./app/src/page/company.html",
      filename: "./company.html",
      excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./app/src/page/delivery.html",
      filename: "./delivery.html",
      excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./app/src/page/inlog.html",
      filename: "./inlog.html",
      excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./app/src/page/payment.html",
      filename: "./payment.html",
      excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./app/src/page/pbi.html",
      filename: "./pbi.html",
      excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./app/src/page/register.html",
      filename: "./register.html",
      excludeChunks: [ 'server' ]
    }),
    new CopyWebpackPlugin([
      {from: './app/src/data', to: './data'},
   ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

module.exports = config;

