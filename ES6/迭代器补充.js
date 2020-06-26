/**
 * 迭代器生成器补充
 */
/*******************************************************
 * 1.ES6数组、Set、Map、字符串可以迭代，默认Object即对象不可迭代
 *  - 可以通过Symbol.iterator给对象创建迭代器
 */
var student = {
    name:"孙悟空",
    age:18,
    gender:"男",
    //**[Symbol.iterator](){...}类似*函数，生成迭代器
    *[Symbol.iterator](){
        for(let name in this){
            yield [name,this[name]];
            //name即属性名，this[name]即属性值,两者封装成数组
        }
    }
}
//此时for of就可以迭代遍历对象student了
for(let [name,value] of student){
    //[name,value]将数组解构赋值
    console.log(name);
    console.log(value);
}
/**********************************************************
 * 2.数组、Set、Map内部有.entries()方法，.values()方法，.keys()方法
 *  - .entries()方法返回[索引，值]的迭代器
 *  - .values()方法返回 值 的迭代器
 *  - .key()方法返回 索引的迭代器
 */
var arr = ["孙悟空","猪八戒","沙和尚",3];
for(let value of arr.entries()){
    console.log(value);
}
for(let value of arr.values()){
    console.log(value);
}
/*********************************************************
 * 3.DOM节点也可以使用迭代器
 */

//总结
//迭代器生成器即*函数，就是可以中断的函数，每次中断都将yield后的值返回
// - return的返回权限最大