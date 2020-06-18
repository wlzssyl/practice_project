/**
 * 简单文件读取
 * 异步和同步
 * fs.readFile(fd, [options,] callback)
 * fs.readFileSync(fd, [options,])
 *  - path，文件路径
 *  - options，选项，对象形式传递参数 
 *  - callback，回调函数，有两个参数。
 *           - err 错误
 *           - data 读取的数据，以Buffer形式返回
 */
var fs = require("fs");

fs.readFile("hello.txt",function(err,data){
    if(!err){
        console.log(data.toString());
    }
});
var rs = fs.readFileSync("hello.txt");
console.log(rs);