// node中的path包，（用来获取绝对路径）
// 需要npm init
const path = require("path");

module.exports = {
  entry:"./src/main.js",
  output:{
    path:path.resolve(__dirname,"dist"),  //__dirname就是package所在绝对路径,resolve将两者拼接成所需路径 
    filename:"bundle.js"
  }
};