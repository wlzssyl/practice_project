//遍历某元素节点的下一个元素节点
function getNextElement(nextElement){
    if(nextElement.nodeType == 1){
        return nextElement;
    }
    if(nextElement.nextSibling){
        return getNextElement(nextElement.nextSibling);
    }
    return null;
}

//将某元素的下一个节点输入喊函数，返回下一个元素节点