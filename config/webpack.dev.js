/*
    ./webpack.dev.js
*/

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
				test: /\.scss?$/,
				loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
			}
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
});
