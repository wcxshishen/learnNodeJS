const fs = require('fs');
const path = require('path');

// 同步读取：读取文件时，要等到文件读取完毕，才会执行后面的代码，看到（sync 同步）
// fs.readFileSync(文件的路径)
// const content =  fs.readFileSync(path.join(__dirname,'hello.txt'), 'utf-8'); // 读取文件信息，把整个文件读取完后才会向下执行。
// console.log(content);
// console.log(content.toString());

// 异步读取：不用等待文件读取完毕，就可以执行后面的代码.(路径， 编码格式， callback(error, data))
// 异步读取文件时需要第三个参数，也就是回调函数。
fs.readFile(path.join(__dirname,'hello.txt'), 'utf-8', (error, data)=>{
  console.log(error); // 没有报错时为 null。
  console.log(data); // 若报错时，则data为undefined。
});
console.log('----------end'); // 先执行