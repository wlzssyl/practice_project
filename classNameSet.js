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
//删除一个元素中的类名
//element-要操作的元素对象
//name-类名字符串
function removeClass(element,name){
    //使用正则表达式判断
    var reg = new RegExp("\\b"+name+"\\b");
    //使用replace方法
    element.className = element.className.replace(reg,"");
}
//切换类名，即有就删，没有就添加
//element-要操作的元素对象
//name-类名字符串
function toggleClass(element,name){
    if(hasClass(element,name)){
        removeClass(element,name);
    }
    else{
        addClass(element,name);
    }
}

/**************************************************** */
window.onload = function(){
    var p = document.getElementsByTagName("p")[0];
    var btn1 = document.getElementById("btn1");
    addClass(p,"name");addClass(p,"name");addClass(p,"name");
    // removeClass(p,"a");
    console.log(hasClass(p,"name"));
    btn1.onclick = function(){
        toggleClass(p,"name");
    }
}
