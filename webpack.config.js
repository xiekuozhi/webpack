var path = require('path');

module.exports = {
  mode: "development", //development或production 开发或用户观看
  entry:'./src/index.js',  //入口
  output: {     //出口
    filename: "[name].[contenthash].js", 
  }
};




 
  