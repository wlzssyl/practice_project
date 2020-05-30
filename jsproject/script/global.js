






//highLightPage函数
function highLightPage(){
    if(!document.getElementsByTagName) return false;
    var navs = document.getElementsByTagName("nav");
    var links = navs[0].getElementsByTagName("a");
    var linkurl;
    for(var i=0;i<links.length;i++){
         linkurl = links[i].getAttribute("href");
        if(window.location.href.indexOf(linkurl) != -1){
            links[i].className = "here";
           // addClass(links[i],"here");
           //将当前页面路径最后一个子元素值设为body的id
           var linktext = links[i].lastChild.nodeValue.toLowerCase();
           document.body.setAttribute("id",linktext);
           
        }
    }
}
addLoadEvent(highLightPage);



//addClass函数，增加类名
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
//insertAfter函数可，让new节点插入到target节点后面
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }
    else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
//addLoadEvent函数
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
