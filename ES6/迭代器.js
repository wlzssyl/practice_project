/**
 * 迭代器及其生成
 */
//function *fun(){...} 迭代生成器函数，即返回一个迭代器对象
//yeild 可以理解为在此处中断
function *fun1(){
    yield 1;
    yield 2;
    yield 3;
}
var aterator = fun1();
console.log(aterator);
//使用一次.next()方法就会迭代一次。
//每次迭代都从上一次中断的位置开始，直到再次遇到yeild中断结束
console.log(aterator.next());
//done属性，false表示迭代进行中，true表示迭代完成
console.log(aterator.next().done);
console.log(aterator.next().value);

//一个稍微复杂的例子
var arr = [0,1,1,2];
//fun2函数实现斐波那契数列
function *fun2(count){//count参数控制迭代次数
    let num = 0;
    let prev = 0,next = 1,result = 0;
    if(num == 0){
        num++;
        yield 0;
    }
    while(num <= count){
        num++;
        result = prev+next;
        prev = next;
        next = result;
        yield result;
    }
}
var Fibonacci = fun2(10);
console.log(Fibonacci);
//一次.next()方法迭代一次
console.log(Fibonacci.next());
console.log(Fibonacci.next());
console.log(Fibonacci.next());
console.log(Fibonacci.next());
console.log(Fibonacci.next());
console.log(Fibonacci.next());
//也可也用for...of 遍历值value
for(let value of Fibonacci){
    console.log(value);
}
/**
 * 注意查看输出结果，for循环是接着上边的继续迭代，而不是从头迭代
 */


