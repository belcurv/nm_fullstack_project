const path = require('path');

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
        test : /\.(png|svg|jpg|gif)$/,
        use  : [
          'file-loader'
        ]
      }
    ]
  }

};
