/*****************************************************
 * async函数
 *  - async function(){...}; async用于声明一个异步函数
 * await 
 *  - await用于等待一个异步任务完成的结果
 *  - await 只出现在async函数中
 */
//准备工作，使用promise对象
var httpURL = "https://api.apiopen.top/musicRankings";

//声明异步函数来请求数据
window.onload = function(){
    async function getText(){
        //将json字符串转为js对象
        var jsonStr = await getAjax(httpURL);
        var data = JSON.parse(jsonStr);
        console.log(data);
        //遍历数据中的result数组，并把name属性添加到document中
        for(let i=0;i<data.result.length;i++){
            var list = document.createElement("h4");
            var p = document.createTextNode(data.result[i].name)
            list.appendChild(p);
            document.getElementsByTagName("body")[0].appendChild(list);
            /*获取result的每个content属性的titles属性
               下面方法是同步的，性能不佳
            */
            // for(let j=0;j<data.result[i].content.length;j++){
            //     var list2 = document.createElement("p");
            //     var p2 = document.createTextNode(data.result[i].content[j].title)
            //     list2.appendChild(p2);
            //     document.getElementsByTagName("body")[0].appendChild(list2);
            // }
            /***
             * 采用async函数，用异步获取每个歌单的详细歌曲
             */
            for(let j=0;j<data.result[i].content.length;j++){
                async function getSong(){
                    //获取每个歌曲id，并设置url
                    var httpID = "https://api.apiopen.top/musicDetails?id="+data.result[i].content[j].song_id;
                    //同样await等待详情页的异步事件
                    var jsonSong = await getAjax(httpID);
                    var songData = JSON.parse(jsonSong);
                    //渲染到页面
                    var list2 = document.createElement("p");
                    var p2 = document.createTextNode(data.result[i].content[j].title+" id:"+data.result[i].content[j].song_id)
                    list2.appendChild(p2);
                    document.getElementsByTagName("body")[0].appendChild(list2);
                   // console.log(data.result[i].content[j].title+" id:"+data.result[i].content[j].song_id);
                }
                getSong();
            }            
        }
        
    }
    getText();
}
