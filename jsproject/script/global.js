
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

//photo图片页
//showPic函数
function showPic(whichpic){
    if(!document.getElementById("placeholder")) return true;
    var sourse = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",sourse);
    if(whichpic.getAttribute("title")){
        var text = whichpic.getAttribute("title");
    }
    else{
        var text = "";
    }
    var description = document.getElementById("description");
    if(description.lastChild.nodeType ==3){
        description.lastChild.nodeValue = text;
    }
    return false;
}
//preparePlaceHolder()函数
function preparePlaceHolder(){
    if(!document.getElementById("img-list")) return false;
    //使用DOM方法创建img和p元素节点，还有文本节点
    var placeholder = document.createElement("img");
    var description = document.createElement("p");
    var des_text = document.createTextNode("点击图片预览大图");
    placeholder.setAttribute("id","placeholder");
    description.setAttribute("id","description");
    description.appendChild(des_text);
    insertAfter(description,document.getElementById("img-list"));
    insertAfter(placeholder,description);
    //遍历a元素节点并调用showPic函数
    var imgs = document.getElementById("img-list");
    var links = imgs.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick = function(){
            return showPic(this);  //这里使用匿名函数
        }
    }
}
//动画页
//给表格添加偶数行颜色改变样式stripeTables()函数
function stripeTables(){
    if(!document.getElementById("anime")) return false;
    var tables = document.getElementsByTagName("table");
    for(var i=0;i<tables.length;i++){
        var rows = tables[i].getElementsByTagName("tr");
        var odd = false;
        for(var j=0;j<rows.length;j++){
            if(odd == true){
                 //rows[j].style.backgroundColor = "#fff";
                addClass(rows[j],"odd");
                odd = false;
            }
            else{
                odd = true;
            }
        }
    }  
}
//给表格hover效果，hightlightRows()函数
function highlightRows(){
    if(!document.getElementById("anime")) return false;
    var tables = document.getElementsByTagName("table");
    var rows = document.getElementsByTagName("tr");
    for(var i=0;i<rows.length;i++){
        rows[i].oldClassName = rows[i].className;
        rows[i].onmouseover = function(){
            addClass(this,"highlight");
        }
        rows[i].onmouseout = function(){
        this.className = this.oldClassName;
        }
    }
}
//更多页
//isemail函数,含有@和.就return true
function isEmail(field){
    return (field.value.indexOf("@") != -1 && field.value.indexOf(".") !=-1);
}
//validateForm函数，若返回true表示表单可以提交给服务器，返回false提交会被取消
function validateForm(whichform){   
    for(var i=0;i<whichform.elements.length;i++){
        var element = whichform.elements[i];
        if(element.name == 'name'){
            if(!isEmail(element)){
                alert("用户名邮箱格式不正确。");
                return false;
            }
        }
        if(element.name == 'message'){
                alert("内容已提交，感谢您的支持！");
                return false;
        }
    }
    return true;
}
//prepareForms函数，准备提交表单
function prepareForms(){
    if(!document.getElementById("log-in")) return false;
    for(var i=0;i<document.forms.length;i++){
        var thisform = document.forms[i];
        thisform.onsubmit = function(){
            if(!validateForm(this)) return false;
            //return validateForm(this);//若返回false,则拒绝提交
            var article = document.getElementsByTagName("article")[0];
            if(submitFormWithAjax(this,article)) return false;
            return true;
        }
    }
}
//利用Ajax，submitFormWithAjax函数,第一个参数是form对象，第二个是目标替换对象
function submitFormWithAjax(whichform,thetarget){
    var request = new XMLHttpRequest;
    if(!request) return false;
    dispalyAjaxLoading(thetarget);
    var dataParts = [];
    var element;
    for(var i=0;i<whichform.elements.length;i++){
        element = whichform.elements[i];
        dataParts[i] = element.name + '=' +encodeURIComponent(element.value);
        //encodeURIComponent()函数把表单里元素值编码成URL字符串，以便传送
    }
    var data = dataParts.join('&');//收到所有数据后用&符号连接起来
    //向表单action属性指定的处理函数发送post请求
    request.open('GET',whichform.getAttribute("action"),true);
    //并在请求中添加application/x-www-form-urlencoded头部，这对于POST是必须的
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //onreadystatechange会在服务器给XMLHttpRequest对象送回响应时被触发执行，它是一个事件处理函数
    request.onreadystatechange = function(){
        if(request.readyState == 4){
            //console.log(request.readyState);//调试使用
          //  console.log(request.status); //调试使用
            if(request.status == 200||request.status == 0){
                //正则表达式，捕获article标签里内容
                var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
                if(matches.length>0){
                    //innerHTML方法替换
                    thetarget.innerHTML = matches[1];
                }
                else{
                    thetarget.innerHTML = '<p>出现了一个错误。</p>';
                }
            }
            else{
                thetarget.innerHTML = '<p>'+request.statusText+'</p>';
            }
        }
    }
    request.send(data);
    return true;
}
//dispalyAjaxLoading函数，就是删除元素添加load图片
function dispalyAjaxLoading(element){
    while(element.hasChildNodes()){
        element.removeChild(element.lastChild);
    }
    var content = document.createElement("img");
    content.setAttribute("src","./img/loading.gif");
    // element.appendChild(content);
}


addLoadEvent(highLightPage);
addLoadEvent(preparePicshow);
addLoadEvent(prepareInternalnav);
addLoadEvent(preparePlaceHolder);
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(prepareForms);



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
 * 6.01
      - var imgs = document.getElementById("img-list");
        var links = imgs.getElementsByTagName("a");
        for(var i=0;i<links.length;i++){
            links[i].onclick = function(){
                return showPic(this);  这里要返回showPic函数
            }
         }     
      -  rows[i].oldClassName = rows[i].className;
         创建新属性，把之前的类名存入。
         在onmouseout方法时更换为旧类名即可
 *
 * 6.02
 *    - element.focus();在某元素上获取光标焦点 
 *      element.onblur();焦点移出触发
 * 
 * 6.03
 *    - var request = new XMLHttpRequest;
        request.open('POST',whichform.getAttribute("action"),true);
         POST如果给静态页面传数据的话，一般会报405错，即不被允许。因此代码中用的GET
      - request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
         如果用POST，上述代码是必要的
      - request.onreadystatechange = function(){ }
         .onreadystatechange方法是一个事件处理函数，
         会在服务器给XMLHttpRequest对象送回响应时被触发执行。
      - request.readyState
         .readyState会返回0-4，五种值。
            0: 请求未初始化
            1: 服务器连接已建立
            2: 请求已接收
            3: 请求处理中
            4: 请求已完成，且响应已就绪
 */