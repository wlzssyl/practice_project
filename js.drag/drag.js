//1.onmousedown按下鼠标
//2.onmousemove拖动
//3.onmouseup松开鼠标


window.onload = function(){
    drag("box1");
    drag("box2");
};
//drag函数封装,elementId是元素id字符串
function drag(elementId){
    var box = document.getElementById(elementId);
    box.onmousedown = function(event){
        //点下开启定位
        this.style.position = "absolute";
        //获取初始点击位置，使体验更好
        var left = event.clientX-box.offsetLeft; 
        var top = event.clientY-box.offsetTop; 
        //拖动动作
        document.onmousemove = function(event){                    
            box.style.left = event.clientX-left+"px";
            box.style.top = event.clientY-top+"px";
        }
        //松开
        document.onmouseup = function(){
            document.onmousemove = null;
            //鼠标松开取消（即只触发一次）
            document.onmouseup = null;
        }
    }
    return false;
}

