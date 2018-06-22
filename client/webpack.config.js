const path = require('path');

module.exports = {

  mode : process.env.NODE_ENV === 'production' ? 'production' : 'development',

  entry : [
    'webpack-dev-server/client?http://localhost:8080',
    './src/index.jsx'
  ],

  output : {
    path     : path.join(__dirname, 'dist'),
    filename : 'bundle.js'
  },

  devtool : 'source-map',

  devServer : {
    contentBase : './dist'
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
        test : /\.(png|svg|jpg|gif)$/,
        use  : [
          'file-loader'
        ]
      }
    ]
  },

  externals : {
    'react'     : 'React',
    'react-dom' : 'ReactDOM'
  }

};
