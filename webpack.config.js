const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const cssnano = require('cssnano');

const entry = path.join(__dirname, './app/src/index.js');
const outputPath = path.join(__dirname, '/dist/');
const PATHS = {
  // Path to main app dir
  src: path.join(__dirname, './app/src'),
  // Path to Output dir
  dist: path.join(__dirname, './dist'),
  // Path to Second Output dir (js/css/fonts etc folder)
  assets: 'assets/',
};
module.exports = {
  entry,
  output: {
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['/node_modules/'],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        },
        'css-loader'],
      },
      {
        test: /\.(gif|png|jpg|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/img',
          },
        },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      template: './app/src/page/delivery.html',
      filename: './page/delivery.html',
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
      cssProcessorPluginOptions: {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
        }],
      },
      canPrint: true,
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/img`, to: `${PATHS.assets}/img` },
    ]),
  ],
};
