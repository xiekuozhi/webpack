var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base =require('./webpack.config.base.js')


module.exports = {
  ...base,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,        //正则表达$表示以css结尾，\.表示转义
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
