const path              = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  output : {
    path     : path.join(__dirname, 'dist'),
    filename : 'bundle.js'
  },

  resolve : {
    extensions : ['.js', '.jsx', '.json']
  },

  module : {
    rules : [
      {
        test    : /\.jsx?$/,
        exclude : /node_modules/,
        loader  : 'babel-loader'
      },
      {
        test : /\.css$/,
        use  : [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test    : /\.(png|svg|jpg|gif)$/,
        loader  : 'file-loader',
        options : {
          name       : '[name].[ext]',
          outputPath : 'assets/'
        }
      }
    ]
  },

  plugins : [
    new HTMLWebpackPlugin({
      template : path.join(__dirname, '/src/index.html'),
      filename : 'index.html',
      inject   : 'body'
    })
  ]

};
