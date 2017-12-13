/*
    ./webpack.prod.js
*/

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  module: {
    loaders: [
      {
				test: /\.scss?$/,
				loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: { minimize: true }
          }, 'sass-loader']
        })
			}
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new ExtractTextPlugin('style.css')
  ]
});
