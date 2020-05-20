var a=document.write("100");
//alert(100);
console.log();

function showPic(whichpic){
    var sourse = whichpic.getAttribute("href");
    var show = document.getElementById("show")
    show.setAttribute("src",sourse)
}