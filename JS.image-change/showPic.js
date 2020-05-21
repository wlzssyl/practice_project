//var a=document.write("100");
//alert(100);
console.log(1);

function showPic(whichpic){
    var sourse = whichpic.getAttribute("href");
    var show = document.getElementById("show");
    show.setAttribute("src",sourse);
    var description = whichpic.getAttribute("title");
    var showDes = document.getElementById("description").childNodes[0];
    showDes.nodeValue = description;
}

function countBodyChildren(){
    var body_element = document.getElementsByTagName('body')[0];
   // alert (body_element.childNodes.length);
   //alert (body_element.nodeType);
}
window.onload = countBodyChildren;

/* 小结
    - childNodes 该属性返回的是含有所有子元素的数组
    - nodeType   
               返回 1 说明该节点是元素节点
                    2            属性节点
                    3            文本节点 
    - nodeValue 可用来检查和设置节点的值
    - firstChild,lastChild  相当于xxx.childNodes[0]
                        xxx.childNodes[xxx.childNodes.length-1]
*/


