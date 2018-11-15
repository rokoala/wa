const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPath = require('./paths');

module.exports = {
  entry: commonPath.entryPath,
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPath.fontsFolder
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.css', '.scss']
  },
  serve: {
    content: commonPath.entryPath,
    dev: {
      publicPath: commonPath.outputPath
    },
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: commonPath.templatePath
    })
  ]
};
