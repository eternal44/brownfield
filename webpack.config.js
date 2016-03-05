// const webpack = require('webpack');
// const path = require('path');

// module.exports = {
//   devtool: 'source-map',
//   entry: [
//     path.join(__dirname, 'src/index.js')
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     publicPath: 'dist/',
//     filename: 'bundle.js',
//     hot: true,
//     inline: true,
//     progress: true
//   },
//   module: {
//     loaders: [{
//       test: /\.js?$/,
//       exclude: /node_modules/,
//       loaders: ['react-hot', 'babel'],
//       include: path.join(__dirname, 'src')
//     }]
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   devServer: {
//     contentBase: './dist',
//     historyApiFallback: true,
//     hot: true,
//     inline: true,
//     progress: true
//   }
// };
const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/index.js')
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }]
  },

  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    inline: true,
    progress: true
  }
}