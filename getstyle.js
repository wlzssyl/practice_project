//getstyle函数，获得目标元素样式，返回该值
//兼容ie8  对象.currentStyle.样式名
//兼容正常浏览器  getComputeStyle(元素,null).样式名
function getStyle(element,stylename){
    //正常浏览器方式
    if(window.getComputedStyle) {
        return getComputedStyle(element,null)[stylename]; 
    } 
    else{
    //ie8的方式
        return element.currentStyle[stylename];
    }
//return getComputedStyle ? getComputedStyle(element,null)[stylename]:element.currentStyle[stylename];
}
