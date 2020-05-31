






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
//首页预览图功能
function preparePicshow(){
    if(!document.getElementById("intro")) return false;
    if(!document.getElementsByTagName) return false;
    //在intro后添加预览图picshow节点
    var intro = document.getElementById("intro");
    var picshow = document.createElement("div");
    picshow.setAttribute("id","picshow");
    var img = document.createElement("img");
    img.setAttribute("src","img/1.jpg");
    img.setAttribute("id","showimg");
    img.setAttribute("alt"," ");
    picshow.appendChild(img);
    insertAfter(picshow,intro);
    //给正文中标签a添加hover功能
    var pars = document.getElementsByTagName("p");
    var links = pars[1].getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onmouseover = function(){
            if(this.lastChild.nodeValue == "炭治郎")
            img.setAttribute("src","img/tzl.jpg");  
            if(this.lastChild.nodeValue == "祢豆子")         
            img.setAttribute("src","img/ndz.jpg")
        }
    }
}
//about详情页
//showSection函数
function showSection(id){
    var sections = document.getElementsByTagName("section");
    for(var i=0;i<sections.length;i++){
        if(sections[i].getAttribute("id") != id){
            sections[i].style.display = "none";
        }
        else{
            sections[i].style.display = "block";
        }
    }
}
//prepareInternalnav()函数
function prepareInternalnav(){
    if(!document.getElementById("main")) return false;
    if(!document.getElementsByTagName("section")) return false;
    var articles = document.getElementsByTagName("article");
    var navs = articles[0].getElementsByTagName("nav");
    var links = navs[0].getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        //split("#")[0]方法，以#为分隔符取出两个字符串
        var sectionID = links[i].getAttribute("href").split("#")[1];
        if(!document.getElementById(sectionID)) continue;
        //设置刚加载时所有section都不显示
        document.getElementById(sectionID).style.display = "none";
        //为links[i]创建新属性，用来保存点击的sectionid值
        links[i].secid = sectionID;
        links[i].onclick = function(){
            showSection(this.secid);
            return false;//阻止跳转
        }
    }
}

addLoadEvent(highLightPage);
addLoadEvent(preparePicshow);
addLoadEvent(prepareInternalnav);



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

/**小结
 * 5.30 
 *    - var linkurl = links[i].getAttribute("href");
        if(window.location.href.indexOf(linkurl) != -1）
        indexOf()方法可以在字符串中寻找字符串的位置，如果没有匹配到
        则会返回-1
 * 
 * 5.31
 *    -  for(var i=0;i<links.length;i++){
        links[i].onmouseover = function(){
            if(this.lastChild.nodeValue == "炭治郎")
            img.setAttribute("src","img/tzl.jpg");  
        }
        this.lastChild.nodeValue表示，这个节点最后一个子节点的节点值
          在这个for循环内匿名函数中，用this而不用links[i]

      -  var sectionID = links[i].getAttribute("href").split("#")[1];
          此处.split(" ")[ ]方法，可根据分隔符返回两个字符串，括号里为分隔符
          即string.split()[0]和string.split()[1]
 */