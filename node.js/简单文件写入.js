/**
 * 简单文件写入即把同步，异步写入方法封装起来便于使用
 */

 /**
  * 同步 fs.writeFileSync(file,data[,options])
  * 异步 fs.writeFile(file,data[,options],callback)
  *   - file 要打开的文件路径
  *   - data 要写入的数据内容
  *   - options 选项
  *   - callback 回调函数
  */
// 引入fs模块
var fs = require("fs");

fs.writeFile("hello3.txt","简单写入数据内容",function(){

});