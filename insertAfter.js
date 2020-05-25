//insertAfter函数可以让new节点插入到target节点后面
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }
    else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}


//还有parentNode.insetBefore(new,target)方法
//可以把new节点插入到target节点前面，注意需要父节点方法。