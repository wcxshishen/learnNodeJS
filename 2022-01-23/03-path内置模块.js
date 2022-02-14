const path = require("path");

console.log(__dirname); //得到当前执行文件的绝对路径，不包括文件名.
console.log(__filename); //得到当前执行文件的绝对路径，包括文件名.

let extname = path.extname(__filename); // 获取指定文件的文件的扩展名。
let basename = path.basename(__filename); // 获取指定文件的文件名，包含扩展名。
let dirname = path.dirname(__filename); // 获取指定文件当前所在路径(路径不包含此前文件)。
let parseObj = path.parse(__filename); // 把路径解析成一个对象（所在盘符，所在路径，文件名后缀）
console.log(dirname)
console.log(extname);
console.log(basename);
console.log(parseObj);

// 拼接操作
// let fullPath = path.join('path.js');
// let fullPath = path.join(__dirname,'模块化使用.js'); // 获取01这个文件的完整路径
let fullPath = path.join(__dirname,'modules','模块化使用.js'); // 一层目录就是一个参数
console.log(fullPath);