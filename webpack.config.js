const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const cssnano = require('cssnano');

const entry = path.join(__dirname, './app/src/index.js');
const outputPath = path.join(__dirname, '/dist/');

module.exports = {
  mode: 'production',
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
        test: /\.(gif|png|jpeg|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './index.html' }),
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
  ],
};
