//bind函数，为指定元素/对象绑定事件，这些事件不会覆盖。
//三个参数  1.obj       要绑定的对象
//         2.eventStr   事件字符串 (不加on)
//         3.callback   回调函数
function bind(obj,eventStr,callback){
    if(obj.addEventListener){
        obj.addEventListener(eventStr,callback,false);
    }
    else{//attachEvent里的this指向window
        obj.attachEvent("on"+eventStr,function(){
            callback.call(obj);
        });
    }
}
window.onload = function(){
    var p = document.getElementsByTagName("p")[0];
    bind(p,"click",callbox1);
    bind(p,"click",callbox2);
    bind(p,"click",callbox3);
    function callbox1(){
        alert(1);
    }
    function callbox2(){
        alert(2);
    }
    function callbox3(){
        alert(this.innerHTML);
    }  
}