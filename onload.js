//逐一为.onload绑事件，后面函数会把前面覆盖
// 一种解决方法
window.onload = function(){
     firstFun();
     secondFun();
 }

/**
 * 最佳方案
 * addLoadEvent函数
 */
function addLoadEvent(func){
    var oldonload = window.onload;
    if(window.onload != 'function'){
        window.onload = func;
    }
    else{
        window.onload = function{
            oldonload();
            func();
        }
    }
}
/*此时若要给window.onload绑定多个函数
  使用该队列即可*/
   addLoadEvent(firstFun);
   addLoadEvent(secondFun);