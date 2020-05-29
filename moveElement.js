function moveElement(elementID,final_x,final_y,step){
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if(xpos == final_x && ypos == final_y){
        return true;
    }
    if(xpos < final_x){
        xpos++;
    }
    if(xpos > final_x){
        xpos--;
    }
    if(ypos < final_y){
        ypos++;
    }
    if(ypos > final_y){
        ypos--;
    }
    elem.style.left = xpos+"px";
    elem.style.top = ypos+"px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+step+")";
    movement = setTimeout(repeat,step); 
    //movement没有用var声明，全局变量
   //全局变量会有隐患，因此创建为elem对象的属性
   elem.movement = setTimeout(repeat,step);
} 

//clearTimeout(movement);取消其setTimeout
    //setTimeout（“function”，interval）
    //             （字符串，数值）
    //设定经过interval毫秒后，执行function函数