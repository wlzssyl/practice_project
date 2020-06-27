/**
 * 代理
 */
/******************************************************
 * 1.代理对象Proxy
 *  - 声明代理对象var p = new Proxy(target，handler)
 *  - target是要代理的对象，对象handler是对代理对象做一些事情
 *  - handler对象中有get和set方法
 *       get(target,attr),traget是代理对象，attr是对象的属性名
 *       set(target,attr,value),value是要重新设置的值，其余同上
 */ 
//声明一个代理对象
var obj = {
    name:"唐僧",
    age:20,
    level:0
}
var p = new Proxy(obj,{
    //这里的target指的是代理对象p，attr指的是p的属性名
    get(target,attr){//当代理对象访问属性时，就执行get函数
        console.log("get函数");
        console.log(target);
        return target[attr];//当代理对象访问属性时，就返回这个返回值
    },  //,别丢，这里是对象内的两个方法
    set(target,attr,value){
        console.log("set函数");
        target[attr] = value; //修改代理对象属性值时，调用set函数
    }
});
console.log(p);
//p.name就执行了handler对象的get方法
console.log(p.name);
p.age = 30;
console.log(p.age);
// - 因此个人理解代理对象p的属性其实就是obj的属性，
//   而访问p的属性则需要handler对象来操作