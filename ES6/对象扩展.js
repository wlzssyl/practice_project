/**
 * 对象的扩展
 ********************************************************/
//通过Object.create（）创建新对象
 var a = {
     name:"孙悟空",
     name2:"大徒弟",
     age:17
 };
 //第一个参数是b对象的原型对象
 //第二个参数是b需要新添加的属性，是对象形式，里面有三个属性可以配置
 var b = Object.create(a,{
     num:{
         value:1,//值
         writable:false,//是否可修改,false不可修改
         configurable:true,//是否可删除
         enumerable:true//是否可枚举
     }
 });
/***************************************************** */
//第一种修改属性的方法(设置单个)
//Object.defineProperty()第一个参数是要修改的对象，第二个参数是修改的属性名字符串
//第三个参数是修改的内容
var c = Object.defineProperty(b,"num",{ //var c不要也可
    value:100,
    writable:true,
    configurable:true,
    enumerable:true
})
//这样即使writable是不可修改的，b的num属性的值就变成了100

/********************************************************* */
//第二种修改属性的方法（设置多个）
//Object.defineProperties()第一个参数是要修改的对象，
//第二个参数是对象形式，
var d = Object.defineProperties(b,{
    fullName:{
        //get,获取fullName这个属性值时，调用get后面函数
        get:function(){
            return this.name+"-"+this.name2;
        },
        //set，设置fullName这个属性值时，调用set后面函数
        set:function(data){//data是设置的数据
            //console.log(data.split("-"));
            this.name = data.split("-")[0];
            this.name2 = data.split("-")[1];
        }
    }
})
//重点是get 和 set 的掌握

/******************************************************** */
//bind()和call（）的传参方式一样，
//bind不会立即调用函数，而是将函数返回
