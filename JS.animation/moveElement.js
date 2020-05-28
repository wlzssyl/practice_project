//将moveElement函数抽象化
function moveElement(elementID,final_x,final_y,step){
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;  
    var elem = document.getElementById(elementID);
    //安全检查
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if(xpos == final_x && ypos == final_y){
        return true;
    }
    if(xpos < final_x){
        dist = Math.ceil((final_x-xpos)/10) //相比于xpos++可以根据距离改变步长
        xpos += dist;
    }
    if(xpos > final_x){
        dist = Math.ceil((xpos-final_x)/10)
        xpos -= dist;
    }
    if(ypos < final_y){
        dist = Math.ceil((final_y-ypos)/10) 
        ypos += dist;
    }
    if(ypos > final_y){
        dist = Math.ceil((ypos-final_y)/10)
        ypos -= dist;
    }
    elem.style.left = xpos+"px";
    elem.style.top = ypos+"px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+step+")";
    //movement没有用var声明，为全局变量
    //movement = setTimeout(repeat,step); //setTimeout（“function”，interval）             
                                        //设定经过interval毫秒后，执行function函数
    //全局变量会有隐患，因此创建为elem对象的属性
    elem.movement = setTimeout(repeat,step);
    
}
window.onload = textPosition();
function textPosition(){
    var text = document.getElementById("move");
    text.style.color = "red";
    text.style.position = "absolute";
    text.style.top = "10px";
    text.style.left = "10px";
    moveElement("move",100,300,100);
}

/**小结
 * - setTimeout(“function”，interval)  
 *             （字符串，数值）
 *    设定经过interval毫秒后，执行function函数
 * - clearTimeout(" "); 清除setTimeout
 * - 
 * 
 */