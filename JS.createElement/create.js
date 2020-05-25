//innerHTML直接全部替换,简单粗暴
var inner = document.getElementById("inner");
inner.innerHTML = "<p>我是替换的<em>文本元素</em>啊！</p>";
console.log("<p>我是替换的<em>文本元素</em>啊！</p>");

//DOM的 createElenmt方法
var pEle = document.createElement("p");
var emEle = document.createElement("em");
var txt1 = document.createTextNode("我是DOM创建的");
var txt2 = document.createTextNode("文本元素");
var txt3 = document.createTextNode("啊!");
var create = document.getElementById("create");
create.appendChild(pEle);
pEle.appendChild(txt1);
pEle.appendChild(emEle);
pEle.appendChild(txt3);
emEle.appendChild(txt2);
// 小结
//   .createElement(" ")    创建元素节点
//   .createTextNode(" ")    创建文本节点
//   .appendChild( )         插入子节点
