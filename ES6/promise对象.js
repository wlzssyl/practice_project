/**
 * promise对象
 * 可以将异步操作以同步流程表达出来
 */
/*************************************************************/
//创建一个promise,promise必须有一个函数参数，且函数必须有resolve()和reject()方法
var p1 = new Promise((resolve,reject) => {
    if(true)
    resolve(101);//解决，表示异步完成，调用resolve
    reject();    //拒绝，表示异步失败，调用reject
});
//.then(function1,function2)方法
p1.then(function(res){ //第一个参数(函数)是异步成功时resolve会调用
    console.log(res);
},function(){   //第二个参数(函数)是异步失败时reject会调用
    console.log(2);
});
//注意resolve（）里的参数可以传到then后面的函数里，reject同理。

//用promise封装Ajax**********************************************
var httpURL = "https://api.apiopen.top/getJoke?page=1&count=2&type=video";
var Ajax_P = getAjax(httpURL);
function getAjax(url){
    return new Promise((resolve,reject) => {
        var request = new XMLHttpRequest();
        request.open("GET",url);
        request.onreadystatechange = function(){
            if(request.readyState == 4){
                if(request.status == 200 || request.status == 304){
                    //请求成功，则执行resolve
                    resolve(request);
                }
                else{
                    //请求失败，则执行reject
                    reject(null);
                }
            }
        }
        request.send();//send发送
    });
}

Ajax_P.then(function(res){
    console.log(res);
},function(){
    console.log("请求失败。");
});
/************************************************************ */
//es6已经用promise封装好Ajax了
var p2 = fetch(httpURL);
p2.then(function(res){
    console.log(res);
},function(){
    console.log("请求失败。");
});

