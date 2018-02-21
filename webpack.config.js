// Webpack config file
var webpack = require('webpack'),
    path = require('path')

var BUILD_DIR = path.resolve(__dirname + '/public/')
var APP_DIR = path.resolve(__dirname + '/private/')

module.exports = {
  entry: APP_DIR + '/Index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
      inline: true,
      contentBase: BUILD_DIR,
      port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

