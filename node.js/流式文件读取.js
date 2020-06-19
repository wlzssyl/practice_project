/**
 * 流式文件读取
 * 需要绑定data事件进行读取
 *  - rs.on("data",callback)
 *    若需要向流中写，在上述callback回调函数中使用写入流即可。
 *     callback中参数data，即读取的数据
 * 还可以用.pipe()方法，将可读流与可写刘连接管道，
 * 这样可读流内容直接会输出的可写流上
 */
var fs = require("fs");
//创建可读流
var rs = fs.createReadStream("hello2.txt");
//监控
rs.once("open",function(){
    console.log("可读流打开");   
});
rs.once("close",function(){
    console.log("可读流关闭");  
});
//绑定data事件，读
rs.on("data",function(data){
    console.log(data);
});

//创建可写流
var ws = fs.createWriteStream("hello22.txt");
//监控
ws.once("open",function(){
    console.log("可写流打开");   
});
ws.once("close",function(){
    console.log("可写流关闭");  
});
//.pipe()方法
rs.pipe(ws);