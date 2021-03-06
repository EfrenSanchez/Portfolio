const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const DIST = path.resolve(__dirname, 'docs');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(['docs/*']),
    new CopyPlugin([ 
      { 
        from: './src/assets', 
        to: 'assets', 
        toType: 'dir' 
      } 
    ])
  ],
  output: {
    filename: '[name].bundle.js',
    path: DIST
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        use:'babel-loader',
        test:/\.js$/,
        exclude:/node_modules/
      }
    ]
  }
};