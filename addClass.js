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
//js修改类名className
/*element.classNmae = value; 替换类名
 * 如果不想替换，而是追加
   element.className = element.className+" balue";
   即 element.className += " value";
                        （空格不能省）
    通过这个方法可以写个addClass函数，给目标节点加类名，
    在css中给该类设置样式
 */
