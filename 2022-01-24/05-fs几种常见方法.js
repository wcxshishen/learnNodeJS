const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname,'wcx.js')

// 异步修改文件名
// fs.rename(filePath,path.join(__dirname,'hello.txt'),(error)=>{
//     if(error){
//         console.log(error);
//         return;
//     }
//     console.log('修改成功！');
// })

// 异步读取当前路径下的文件名列表
// fs.readdir(__dirname,(error, data)=>{
//     if(error){
//         console.log(error);
//         return;
//     }
//     console.log(data); // 返回一个字符串数组
// })

