/*准备工作*******************************************/
//对象获取
var pointer = document.getElementById("pointer");
var imglist = document.getElementById("img-list");
var lis = pointer.getElementsByTagName("li");
var imgs = imglist.getElementsByTagName("li");
//声明全局变量
var index = 0;
var timer;
//获取图片数量，确定图片ul长度，确定点按钮ul的宽度及水平位置
function styleSet(){   
    var numOfli = imglist.getElementsByTagName("li").length;
    //图片ul长度为li数量乘以520px
    imglist.style.width = numOfli*520+"px";
    //点按钮ul宽度  
    pointer.style.width = numOfli*24+"px";
    //点按钮位置
    var imgdiv = document.getElementById("img-div");
    var divWidth = imgdiv.offsetWidth;
    var potleft = (parseInt(divWidth)-numOfli*24)/2;
    pointer.style.left = potleft+"px";
}
/*************************************************** */
window.onload = function(){
    styleSet();
    click();
    autoChange();
}
/*函数************************************************/
//给点按钮绑点击事件
function click(){
    var pots = pointer.getElementsByTagName("a");
    //为默认第一张图片对应的按钮设置样式
    lis[0].style.backgroundColor = "#fff";
    lis[0].style.borderColor = "rgba(146, 135, 135, 0.637)";
    //遍历每个按钮
    for(var i=0;i<pots.length;i++){
        //给每个按钮设置索引属性
        pots[i].num = i;
        //给每个按钮绑事件
        pots[i].onclick = function(){
                //不用动画的切换方法
                //imglist.style.left = this.num*(-520)+"px";
                /* console.log(this.num); */
            //index储存点击的按钮索引
            index = this.num;
            //保证点击优先级，清除自动轮播的计数器
            clearInterval(timer);
             //调用setA
             setA();
             //调用move函数实现动画
             move(imglist,"left",(-520)*index,100,function(){
                 //点击动画结束后重新开启自动轮播
                 autoChange();
             });
        }    
    }
}
//setA函数，设置当前图片对应按钮样式
function setA(){
    //轮换到最后一张图时换代第一张
    if(index >= imgs.length-1){
        index = 0;
        imglist.style.left = 0+"px";
    }
    //将所有按钮设置统一样式后，根据index索引改样式
    for(var i=0;i<lis.length;i++){
        lis[i].style.backgroundColor = "";
        lis[i].style.borderColor = "";
    }
    lis[index].style.backgroundColor = "#fff";
    lis[index].style.borderColor = "rgba(146, 135, 135, 0.637)";
}
//autoChange函数，自动轮播
function autoChange(){
    timer = setInterval(function(){
        index++;
        index %= imgs.length;
        move(imglist,"left",(-520)*index,100,function(){
            //回调函数中设置按钮样式，使其跟随自动轮播
            setA();console.log(index);
        });      
    }, 2000);
}



/*其他需要调用的函数************************************/
//move函数
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
        //obj.style.position = "absolute";
        var num = parseInt(getStyle(obj,attr));
        var newValue = num + speed
        obj.style[attr] = newValue+"px";
        //停止条件
        if(speed>=0 && newValue>target || speed<0 && newValue<target){
             newValue = target;
        }
        obj.style[attr] = newValue+"px";
       //则清除计时器,动画停止
        if(newValue == target){
            clearInterval(obj.timer);
            //动画停止时回调函数，如果存在执行，不存在不执行
               callback && callback(); 
        }  
                  
    },100);  
        
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
