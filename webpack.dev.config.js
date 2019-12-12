const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin");
const fs = require('fs');
const webpack = require('webpack');

const PATHS = {
  page: path.join(__dirname, './app/src/page'),
};

const PAGES = fs.readdirSync(PATHS.page).filter((fileName) => fileName.endsWith('.html'));
module.exports = {
  mode: 'development',
  entry: {
    index: './app/src/index.js',
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
        test: /\.js$/,
        use: ['babel-loader'/* , 'eslint-loader' */],
        exclude: [
          /node_modules/
        ]
      },
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
    ...PAGES.map((page) => new HtmlWebPackPlugin({
      template: `${PATHS.page}/${page}`,
      filename: `./page/${page}`,
      excludeChunks: [ 'server' ]
    })),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}