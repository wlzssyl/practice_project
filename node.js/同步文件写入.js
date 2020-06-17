/**  fs模块，用于文档交互
 * 同步文件写入。有Sync的是同步，没有Sync的是异步
 */
//引入fs模块
var fs = require("fs");
/**
 * 同步文件打开
 * fs.openSync(path,flags,mode)
 * path - 要打开文件的路径
 * flags - 对文件要进行什么操作，"r"只读"w"可写
 * mode - 文件操作权限
 * 该函数会返回所打开的文件的描述符
 */
var fd = fs.openSync("./hello.txt","w");
console.log(fd);
/**
 * 同步文件写入
 * fs.writeSync(fd,string,position,encode)
 * fd - 要写的文件的描述符
 * string - 写入的内容
 * position - 从什么位置开始写
 * encode - 默认utf-8
 */

var number = fs.writeSync(fd,"我是node.js写入的内容。");
console.log(number);

/**
 * 同步文件关闭
 * fs.closeSync(fd)
 * fd - 要关闭的文件描述符
 */
fs.closeSync(fd);