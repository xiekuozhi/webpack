var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',  //入口
  output: {     //出口
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({  //生成空的html并且引用js
      title: '抄代码啦',  //设置名字
      template: 'src/assets/index.html'
    }), 
  ],
  module: {
      rules:[
        {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader',]
        },
        {
       
          test: /\.styl$/i,
          loader:["style-loader","css-loader","stylus-loader"]
        },
        {
        test: /\.less$/,
            loader: ["style-loader","css-loader","less-loader" ]// compiles Less to CSS
        },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          "css-loader",  
          {loader:"sass-loader",
          options:{
            implementation:require('dart-sass')
          }
        }],
      },
    ],
  },
};
