//以下为计时器应用，动画，封装函数
/****************************************************************************/
/*封装move函数
     *obj-动起来的对象
     *attr-要执行的样式，如left,top.width
     *target-目标位置或大小(数值)
     *speed-动画速度（数值）  
     *callback-回调函数
*****************************************************************************/
    function move(obj,attr,target,speed,callback){      
        //判断运动方向
        var current = parseInt(getStyle(obj,attr));
        if(current > target) speed = -speed;
        //使用定时调用
        //每次开启计时器要把之前的关闭，即同一时刻只有一个计时器
        clearInterval(obj.timer);
        //把定时器标记给obj对象，给obj创建一个timer属性
        obj.timer = setInterval(function(){         
            //speed为每次变化的大小，表现出来即为速度
            obj.style.position = "absolute";
            var num = parseInt(getStyle(obj,attr));
            obj.style[attr] = num + speed+"px";
            //停止条件
            if(speed > 0){
                if((num+speed) > target){
                    obj.style[attr] = target+"px";
                }
            }
            if(speed <0){
                if((num+speed) < target){
                    obj.style[attr] = target+"px";
                }
            }
           //则清除计时器,动画停止
            if(parseInt(obj.style[attr]) == target){
                clearInterval(obj.timer);
                //动画停止时回调函数，如果存在执行，不存在不执行
                   callback && callback(); 
            }  
                      
        },100);  
            
    }  
/****************************************************************************/
  //用法示例
    window.onload = function(){
        //获取按钮,获取元素
        var btn1 = document.getElementById("btn1");
        var btn2 = document.getElementById("btn2");
        var p1 = document.getElementsByTagName("p")[0];
        var p2 = document.getElementsByTagName("p")[1];
    
        //给按钮绑定事件
        btn1.onclick = function(){
            move(p1,"top",300,10,function(){
                    move(p1,"left",300,19,function(){
                        move(p1,"top",400,19,function(){
                            move(p1,"left",0,19)
                        })
                    })
                } );
        }
        btn2.onclick = function(){
            move(p2,"left",200,21);
        }  
    }

//getStyle函数
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