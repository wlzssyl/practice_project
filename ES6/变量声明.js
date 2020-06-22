/**
 * 变量声明
 */
/******************************************************
 * 1.var 全局变量
 */
/****************************************************
 * 2.const 定义常量
 */
const IP = "193.193.0.1";
console.log(IP);
/*****************************************************
 * 3.let 局部变量
 * - let和const只在块级作用域有效
 */
window.onload = function(){
    //闭包的一种实例
    var buttons = document.getElementsByTagName("button");
    for(var i=0;i<buttons.length;i++){
       (function(i){
            buttons[i].onclick = function(){
                console.log(i);
            }
        })(i);
    }
    //let可以实现闭包
    // for(let i=0;i<buttons.length;i++){
    //     buttons[i].onclick = function(){
    //         console.log(i);       
    //     }
    // }
}

