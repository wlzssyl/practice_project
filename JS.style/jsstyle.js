//使用js改变样式

//改变每行的背景颜色
function stripeTables(){
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd = true, trs;
    for(var i=0;i<tables.length;i++){       
        trs = tables[i].getElementsByTagName("tr");
        for(var j=0;j<trs.length;j++){
            if(odd == true){
                //trs[j].style.backgroundColor = "#ffa";  //直接设置
                odd = false;   
                addClass(trs[j],"odd"); //使用类名法           
            }
            else{
                odd = true;
            }
        }
    }
}
//实现css的：hover伪类
function highlight(){
    if(!document.getElementsByTagName) return false;
    var trs = document.getElementsByTagName("tr");
    for(var i=0;i<trs.length;i++){
        trs[i].onmouseover = function(){
            this.style.fontWeight = "bold";
        }
        trs[i].onmouseout = function(){
            this.style.fontWeight = "normal";
        }
    }
}
//js修改类名className
/*element.classNmae = value; 替换类名
 * 如果不想替换，而是追加
   element.className = element.className+" balue";
   即 element.className += " value";
                        （空格不能省）
    通过这个方法可以写个addClass函数，给目标节点加类名，
    在css中给该类设置样式
 */

 function addClass(element,value){
     if(!element.className){
         element.className = value;
     }
     else{
         newClassName = element.className;
         newClassName += " ";
         newClassName += value;
         element.className = newClassName;
     }
 }

 function addLoadEvent(func){
    var oldonload = window.onload;
    if(window.onload != 'function'){
        window.onload = func();
    }
    else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(stripeTables);
addLoadEvent(highlight);
 /*小结 
    - element.style.color = " "; js设置样式
  * - .onmouseover方法   鼠标移入
    - .onmouseout方法   鼠标移出
  * - element.className  修改节点类名
  */