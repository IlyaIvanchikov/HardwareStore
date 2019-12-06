const path = require('path');
const fs = require('fs');
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
  src: path.join(__dirname, './app/src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/',
  page: path.join(__dirname, './app/src/page'),
};
const PAGES = fs.readdirSync(PATHS.page).filter(fileName => fileName.endsWith('.html'));

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
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
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
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PATHS.page}/${page}`,
      filename: `./page/${page}`
    })),
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
      { from: `${PATHS.src}/fonts`, to: `${PATHS.assets}/fonts` },
    ]),
  ],
};
