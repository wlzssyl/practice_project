// node中的path包，（用来获取绝对路径）
// 需要npm init
const path = require("path");

module.exports = {
  entry:"./src/main.js",
  output:{
    path:path.resolve(__dirname,"dist"),  //__dirname就是package所在绝对路径,resolve将两者拼接成所需路径 
    filename:"bundle.js",
    publicPath:"dist/" //publicPath时设置file-loader的输出文件
  },
  //在webpack文档中可复制下面的css-loader配置代码
  module: {
    rules: [
      { test: /\.css$/, 
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader'   }
        ] 
      },
      //配置less-loader
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      //到webpack官网配置url-loader
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,  //limit限制图片大小，单位为b，这里8192是8kb
                          //8kb以下的直接编译为base64字符串格式
                          //8kb以上要用file-loader发送文件到输出文件夹
              name:"img/[name].[hash:8].[ext]"
              /*这个name属性是给8kb以上图片输出时命名，其中
                - img/是创建一个新文件夹
                - [name]是继续沿用原文件名
                - [hash:8]是取8位的哈希字符
                - [ext]是后缀名 ，所有的[]表示随动，而不是固定
              */  
            }
          }
        ]
      }
    ]
  }
};