const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const DIST = path.resolve(__dirname, 'docs');

module.exports = {
  entry: './src/js/index.js',
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
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  }
};