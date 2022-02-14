const fs = require('fs');
const path = require('path');
const util = require('util');

let filePath1 = path.join(__dirname,'text1.txt');
let filePath2 = path.join(__dirname,'text2.txt');
let filePath3 = path.join(__dirname,'text3.txt');
let filePath4 = path.join(__dirname,'index.txt');



let readFilePromise = util.promisify(fs.readFile);
let writeFilePromise = util.promisify(fs.writeFile);
// function readFilePromise(path) {
//     return new Promise((reslove, reject) => {
//         fs.readFile(path, "utf-8", (error, data) => {
//             if(error){
//                 reject(error);
//             }
//             reslove(data);
//         })
//     })
// }

// await 必须放在async function 函数内部
// await 后面应跟promise对象
// async function 和我们之前使用的方式是一致的
async function fun() {
    let detail1 = await readFilePromise(filePath1); // 得到promise成功的数据，reslove()的实参 
    let detail2 = await readFilePromise(filePath2);  
    let detail3 = await readFilePromise(filePath3); 
    await writeFilePromise(filePath4, detail1+detail2+detail3) 
    console.log(detail1+detail2+detail3);
}

fun();