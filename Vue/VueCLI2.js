/*************************************************
 * 1.cli2初始化
 *  - vue init webpack (这里是项目名称)
 *  - 随后是一些设置
 *     runtime-compiler
 *     ESlint ， 即ES代码规范限制
 *     unit tests ， 单元测试 （可选n）
 *     e2e tests , 即end to end，端到端测试，一种自动化测试（n）
 *  
 */
/************************************************
 * 2.runtime-compiler与runtime-only的区别
 *  - 先说结论，only编译后的更小，性能更好，更适合企业开发
 *  - 理论上区别，主要区别在main.js
 *   compiler：
 *      new Vue({
           el: '#app',
           components: { App },
           template: '<App/>'
        })
    only：
        new Vue({
            el: '#app',
            render:function(h){
              return h(App)
            }
         })
   - 以上两者差别即render函数的使用，
   - 首先介绍compiler和only把模板渲染到dom的流程
 *    compiler: template -> ast(抽象语法树)-> render()函数->virtual dom(虚拟dom)-> UI(真实dom)
 *    only: render()函数-> virtual dom (虚拟dom) ->UI
 * - 即only直接从render函数开始，性能更好
 * 
 * - 上面代码中h是一个可以渲染App组件函数，也可以渲染其他元素
 *    h(组件名)
 *    或h("标签名"，{标签属性}，['标签内容'，h(可以套娃)])
 * - 之前安装的vue-template-compiler的功能就是把template编译成render处理
 * 
 */