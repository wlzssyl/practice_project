//var a=document.write("100");
//alert(100);
console.log(1);

//.onload是网页加载完毕触发的事件，把点击事件绑给.onload
window.onload = prepareGallery;
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


