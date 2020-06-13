//给元素增加一个类名
//element-要添加的元素对象
//name-类名字符串
function addClass(element,name){
    if(!hasClass(element,name))  //判断如果没有才加
    element.className += " "+name;
}
//判断是否含有类名
//element-要检查的元素对象
//name-类名字符串
function hasClass(element,name){
    //使用正则表达式判断
    var reg = new RegExp("\\b"+name+"\\b");
    return reg.test(element.className);
}
window.onload = function(){
    var p = document.getElementsByTagName("p")[0];
    addClass(p,"name");addClass(p,"name");addClass(p,"name");
    console.log(hasClass(p,"name"))
}