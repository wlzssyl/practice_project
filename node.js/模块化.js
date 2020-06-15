/*require（）可以用来引入外部模块,会将模块作为对象返回
    - 核心模块  node提供，直接写名字
    - 文件模块  用户自己创建，括号内写文件路径
*/
var math = require("./math");
console.log(math.add(1,5));
/********************************************* */
/**
 * - gloebal是node的全局对象，类似window
 *    声明全局变量不用var,直接a = 10;
 * - 因为node每个模块都是包在一个函数里面
 *   即function (exports, require, module, __filename, __dirname) {
 *     }
 *    exports 向外部暴露变量和函数
 *    require 引入外部模块
 *    module 即当前模块本身 exports == module.exports
 *    __filename 当前模块完整路径
 *    __dirname 当前模块所在文件夹路径
 */   
console.log(arguments.callee+"");

/**
 * exports只能用.方式向外暴露变量和函数
 * module.exports即可以用.方式，也可以直接赋值暴露函数和变量
 */