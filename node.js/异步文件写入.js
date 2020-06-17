/**
 * 异步文件写入 没有Sync，有回调函数
 */

 //引入fs模块
 var fs = require("fs");
 //打开文件fs.open(path,flags,[mdoe],callback)
 /**
  * fs.open的回调函数的参数有二
  *  - err 无错误则null
  *  - fd 文件描述符
  */
 fs.open("hello2.txt","w",function(err, fd){
     if(!err){
        console.log("打开成功！");
     }
     /**
      * fs.write(fd,"写入内容"，callback)
      * fs.write的回调函数参数有三
      *  - err 无错误则null
      *  - written 
      *  - string
      */
     fs.write(fd,"我是异步写入文件的内容。",function(err){
         if(!err){
             console.log("写入成功！");
             
         }
     });
     /**
      * fs.close(fd,callback)
      * fs.close回调函数参数只有一个err
      */
     fs.close(fd,function(err){
         if(!err){
             console.log("关闭成功！");           
         }
     })
 });