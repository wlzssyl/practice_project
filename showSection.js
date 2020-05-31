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
    //if(!document.getElementById("main")) return false;
   // if(!document.getElementsByTagName("section")) return false;
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