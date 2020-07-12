// node中的path包，（用来获取绝对路径）
// 需要npm init
const path = require("path");

module.exports = {
  entry:"./src/main.js",
  output:{
    path:path.resolve(__dirname,"dist"),  //__dirname就是package所在绝对路径,resolve将两者拼接成所需路径 
    filename:"bundle.js"
  },
  //在webpack文档中可复制下面的css-loader配置代码
  module: {
    rules: [
      { test: /\.css$/, 
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ] 
      }
    ]
  }
};