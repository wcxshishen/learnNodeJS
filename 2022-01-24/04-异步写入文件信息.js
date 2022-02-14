const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname,"hello.txt");

// fs.writeFile(文件名, 写入内容, 编码格式, 回调函数)，异步重写文件内容。
fs.writeFile(filePath,'wcxshishen','utf-8',(error)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log('写入完成！');
});
