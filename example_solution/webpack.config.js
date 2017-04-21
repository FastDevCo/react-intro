var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './index.jsx',
  output: {
    path: __dirname + '/dist',
    publicPath: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // js / jsx
        loader: 'babel-loader?presets[]=es2015&presets[]=react'  // is handled by babel loader with es2015 support
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // what file extensions babel looks for in imports
    modules: [  // where to look for modules
      __dirname,
      'node_modules'
    ],
  }
}
