/**
 * Buffer 
 * Buffer与数组类似。但数组不能存二进制数据，
 * Buffer专门用来存二进制数据
 */

//创建一个10字节的Buffer，直接操作内存，长度不能改变
var buf1 = Buffer.alloc(10);
console.log(buf1);
//从结果中看出，Buffer存二进制数据，但显示16进制
//且申请内存后会把数据全部清零

//Buffer。allocUnsafe()
var buf2 = Buffer.allocUnsafe(10);
console.log(buf2);
//不安全在于，没有清理数据，可能泄露数据信息

//Buffer.form(""),将字符串转为buffer二进制
var str = "hello 世界";
var buf3 = Buffer.from(str);
console.log(buf3);
//一个汉字并不是对应一个字节