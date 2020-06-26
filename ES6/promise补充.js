/**
 * promise补充
 */
/********************************************************
 * 1.Symbol数据类型
 *  - symbol类型与其他类型计算
 *  - symbol类型属性对应值唯一，是为了解决命名冲突
 *  - for in for of不遍历symbol属性
 */
//创建一个symbol类型
var mySymbol = Symbol();
var obj = {
    name:"孙悟空",
    age:18,
    [mySymbol]:"hello"//不能用.应该用属性选择器[]
}
console.log(obj);
/***************************************************
 * 2.promise派生
 */
//class声明，extends继承
class myPromise extends Promise{//myPromise派生出来并继承Promise
    //添加新方法success()
    success(resolve,reject){
        return this.then(resolve,reject);
    }
    //添加新方法failer（）
    failer(reject){
        return this.catch(reject);
    }
}

var pro = new myPromise((resolve,reject) =>{
    if(true){
        resolve(110);
    }
    reject();
});
//可以调用自定义的方法了
pro.success(
    (res) =>{console.log(res);},
    (err) => {console.log("错误");}
);
