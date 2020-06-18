/**
 * 流文件用于大文件写入，和读取
 */
var fs = require("fs");
//创建写入流
var ws  = fs.createWriteStream("hello4.txt");
//监听流
ws.once("open",function(){
    console.log("写入流已打开。");  
})
ws.once("close",function(){
    console.log("写入流已关闭。");   
})
//写
ws.write("流文件第一次写入。");
ws.write("流文件第二次写入。");
ws.write("流文件第三次写入。");
//关闭流
ws.end();

/****************************************************
 * 首先创建流，然后在流中可以写文件，写完可以关闭流
 *  - 创建流 
 *        可写流var ws = fs.createWriteStream(path[,options]);
 *        可读流var rs = fs.createReadStream(path[,options]);
 *  - 写入 ws.write("写入的内容")；
 *  - 结束流  ws.end;
 *  - 通过监视流，监视打开和关闭
 *        ws.once("open",callback);
 *        ws.once("close",callback);
 */
