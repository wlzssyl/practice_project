/**
 * 解构赋值
 */
/******************************************************
 * 1.数组解构赋值
 *  - 可以在左边设置默认值
    - 若不设默认值右边也没赋值，为undefined
 */
{let [user1,user2,user3,user4 = "师父"] = ["孙悟空","猪八戒","沙和尚"];
console.log(user1);
console.log(user2);
console.log(user4);}
/****************************************************
 * 2.对象解构赋值
 *  - 用大括号，变量名必须与属性名相同
 *  - 可以乱序
 */
var obj = {
    name : "东海龙王",
    age : 1000,
    gender : "男"
};
var {name,gender,age} = obj;
console.log(name);
console.log(age);
console.log(gender);
/******************************************************
 * 3.字符串解构
 */
var [a,b,c,d] = "hello";
console.log(a);//a赋值为h，b赋值为e，c赋值为l
/***************************************************
 * 4.for...of   for...in
 *  - for of 可以遍历数组或map的值（value），for in遍历索引
 */
console.log("for in与for of");
var links = [10,20,30,40,50];
for(let i in links){
    console.log(i);   
    console.log(links[i]);   
}
for(let i of links){
    console.log(i); //直接遍历数组的值  
}
/**************************************************
 * 5.模板字符串（拼串）
 *  - ${}
 *  - 用反引号，不用双引号单引号
 *  - 花括号中可以运算，可以写函数。
 */
//传统写法
var str1 = "hello"+1;
console.log(str1);
//es6写法
var str2 = `hello${2}`;//反引号TAB键上方
console.log(str2);