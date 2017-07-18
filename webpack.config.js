var path = require('path');
var wepack = require('webpack');

module.exports = {
  entry: './index.js',
  output: { path: __dirname, filename: 'prod/bundle.js'},
  watch: true,
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
};
