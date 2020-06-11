window.onload = function(){
    //获取开始结束按钮      
    var img = document.getElementById("img-list");
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    //创建imgs数组存放图片路径
    var imgs = ["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg","img/banner4.jpg","img/banner5.jpg"];
    //声明定时器标识让end.click可见
    var timer;
    start.onclick = function(){
        //每次点击开始添加定时器时，要把之前的定时器给关闭在开启新的
        clearInterval(timer);
        //setInterval函数可以将函数每延迟一段时间调用一次
        //index计数
        var index = 0;
         timer = setInterval(function(){
            img.src = imgs[index++];
            index%=5;
        },500);
    }
    end.onclick = function(){
        //clearInterval函数，关闭清除定时器。
        clearInterval(timer);
    }
}