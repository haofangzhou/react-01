/*Loaders是webpack中最强大的功能之一了。通过使用不同的loader，webpack通过调用外部的脚本或工具可以对各种各样的格式的文件进行处理，
如分析JSON文件并把它转换为JavaScript文件；或把下一代的js文件（ES6，ES7)转换为现代浏览器可以识别的JS文件；
或对React的开发而言，合适的Loaders可以把react的JSX文件转换为JS文件。
Loaders需要单独安装并且需要在webpack.config.js下的modules关键字下进行配置。安装命令为npm install --save-dev json-loader，Loaders的配 */


var path = require('path');
var webpack=require('webpack');
module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
   plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false
      }
    }),
  ]
};
