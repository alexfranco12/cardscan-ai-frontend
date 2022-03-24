const path = require('path');
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  target: "web",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[fullhash:8].js',
    publicPath: '/'
  },
  devtool: "source-map",
  devServer: {
    port: 3000,
    static: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './public/index.html'
    }),
    new NodePolyfillPlugin(),
    new MiniCSSExtractPlugin(),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset"
      }
    ]
  }
};