document.write("100")
function openWin(winURL){
    window.open(winURL,"newWindow","width=400,height=600");
}

window.onload = prepare; //在加载完html之后在加载js
function prepare(){
    //向后兼容，保证老版本浏览器兼容
    if(!document.getElementsByTagName)  //如果浏览器不支持getElementsByTsgName
    {                          //就返回false
        return false;
    }
    //如下方法可以将js与html分离
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].getAttribute("class") == "example1")
        {
            links[i].onclick = function(){
                openWin(this.getAttribute("href"));
                return false;
            }
        }
    }
}