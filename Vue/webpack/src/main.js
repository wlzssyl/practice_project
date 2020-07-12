import {name,age,gender} from "./js/a.js";
console.log(name,age,gender);

// 对css文件的依赖，可以使用common.js导入方法
require('./css/style.css');

// 对less文件的依赖, 即先npm less-loader安装包，然后去webpack.config.js里配置less-loader
require('./css/font.less');