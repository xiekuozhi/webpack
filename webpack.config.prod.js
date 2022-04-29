var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base =require('./webpack.config.base.js');
const { BADHINTS } = require('dns');


module.exports = {
  ...base,
  mode: "production",//development或production 开发或用户观看
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[contenthash].css",         
      chunkFilename: "[id].[contenthash].css",  
    }),
  ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,        //正则表达$表示以css结尾，\.表示转义
        use: [
          {
            loader: MiniCssExtractPlugin.loader,    //抽成文件
            options: {
              publicPath: "/public/path/to/",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
