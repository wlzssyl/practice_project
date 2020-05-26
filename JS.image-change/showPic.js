//var a=document.write("100");
//alert(100);
console.log(1);


//遍历所需标签a，并把图片切换函数给a标签
function prepareGallery(){
    if(!document.getElementsByTagName){
        return false;
    }
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementById("img-list")){
        return false;
    }
    var imglist = document.getElementById("img-list");
    var links = imglist.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick = function(){
            showPic(this);
            return !showPic(this);//避免showPic返回false
                                  //即，平稳退化
        }   
    } 
}
// 切换图片超链接（路径）函数
function showPic(whichpic){
    if(!document.getElementById("show")){
        return false;
    }
    var sourse = whichpic.getAttribute("href");
    var show = document.getElementById("show");
    show.setAttribute("src",sourse);
    //有title则显示title，兼容没有title情况
    if(whichpic.getAttribute("title")){
        var description = whichpic.getAttribute("title");
        var showDes = document.getElementById("description");
        showDes.childNodes[0].nodeValue = description;
    }
    return true; //与fasle对应
}

//图片展示区用DOM创建
function preparePlacehloder(){
    //首先保证兼容
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("img-list")) return false;
    //添加节点
    var imgDiv = document.createElement("div");
    var imgPlace = document.createElement('img');
    var txtPlace = document.createElement("p");
    imgDiv.setAttribute("class","img");
    imgPlace.setAttribute("src","./img/10.png");
    imgPlace.setAttribute("id","show");
    imgPlace.setAttribute("alt","图片显示位置");
    txtPlace.setAttribute("id","description");
    //insertAfter(new,target);向target节点后面插入new节点
    insertAfter(imgDiv,document.getElementById("img-list"));
    imgDiv.appendChild(imgPlace);
    insertAfter(txtPlace,imgDiv);
    var imgTxt = document.createTextNode("选择一个图片");
    txtPlace.appendChild(imgTxt);
    //parent.insertBefore(new,target)方法,
    //可以将new节点插入到target节点前
}


//为.onload绑定事件
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

//.insertAfter函数，在结点树某处插入节点
function insertAfter(newElement,targetElment){
    var parent = targetElment.parentNode;
    if(parent.lastChild == targetElment){
        parent.appendChild(newElement);
    }
    else{
        parent.insertBefore(newElement,targetElment.nextSibling);
    }
}

//.onload是网页加载完毕触发的事件，把事件绑给.onload
addLoadEvent(preparePlacehloder);
addLoadEvent(prepareGallery);



 function countBodyChildren(){
     var body_element = document.getElementsByTagName('body')[0];
 //    alert (body_element.childNodes.length);
 //    alert (body_element.nodeType);
 }
/* 小结
    2020.5.21
    - childNodes 该属性返回的是含有所有子元素的数组
    - nodeType   
               返回 1 说明该节点是元素节点
                    2            属性节点
                    3            文本节点 
    - nodeValue 可用来检查和设置节点的值
    - firstChild,lastChild  相当于xxx.childNodes[0]
                        xxx.childNodes[xxx.childNodes.length-1]
*/
/* 2020.5.23
   - 先检查是否有document.getElementById等功能
   - windows.onload事件与其他事件绑定可保证HTML加载完整
   - 减量减少遍历次数
   - 非必要功能可用if兼容
   - 练习中return false覆盖了原本功能，需要用return showPic(this)
      解决平稳退化
 * 
 */
/**2020.5.25
 * - document.createElement("div")   该方法可创建元素节点
 * - document.createTextNode("123456")  该方法可创建文本节点
 * - 属性节点用setAttribute(" "," ") 即可
 * - parentNode.appendChild(new) 该方法可在子节点最后插入new子节点
 * - parentNode.inserBefore(new,target) 该方法可在target节点前插入new节点
 * - .innerHTML方法，把所有内容暴力插入与替换 
 */


