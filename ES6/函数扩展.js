/*
 * 函数扩展
 */
/***************************************************************
 * 1.箭头函数
 *  - var add = (a,b) => {return a+b;}
 *       函数名  形参      函数内容
 *  - 箭头函数的this永远绑定在当前环境下，即指向当前环境的this
 */
var add = (a,b) => {return a+b;};
console.log(add(10,20));
console.log(parseInt(Math.random()*255));
//点击div使其每隔1s变色。使用定时调用
window.onload = function(){
    var div = document.getElementById("div");
    div.innerHTML = "点我一下"
    div.onclick = function(){
        setInterval(() => {
            /**
             * 这里，定时调用函数如果不用箭头函数而是用传统函数：
             *     setInterval(function(){...},1000)
             *     此时，定时调用函数的this是window，即不能用this.style
             * 但是，如果用如上写的箭头函数
             *     此时，定时调用函数的this永远绑定在当前环境下，即指向onclick函数的this
             */
            this.style.backgroundColor = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`;
        }, 1000);
    }
}
/*******************************************************************
 * 2.扩展运算符...
 *  - 可以在参数不确定数量时使用（运算符）
 *  - 可以将数组解构传参
 *  - 在复制数组时可以让其指向不同的数组，即新创建一个数组对象
 */
//声明时
function fun1(...arr){
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;
    console.log(arr);
}
fun1();
//调用时
var arr1 = ["孙悟空","猪八戒","沙和尚"];
function fun2(...arr){
    console.log(arr.join("--"));
}
fun2(...arr1);
//复制并创建一个新数组
var arr2 = ["红孩儿","铁扇公主","牛魔王"];
var arr3 = [...arr2];
console.log(arr2);
console.log(arr3);
console.log(arr2 == arr3);
