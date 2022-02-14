const fs = require('fs');
const path = require('path');
const util = require('util');

let filePath1 = path.join(__dirname,'text1.txt');
let filePath2 = path.join(__dirname,'text2.txt');
let filePath3 = path.join(__dirname,'text3.txt');
let filePath4 = path.join(__dirname,'data.txt');

let readFilePromise = util.promisify(fs.readFile);
let writeFilePromise = util.promisify(fs.writeFile);

// Promise.race([Promise对象1, Promise对象2]).then( data => {
//    // Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
// })

Promise.race([readFilePromise(filePath1, "utf-8"), readFilePromise(filePath2, "utf-8")]).then( data => {
    console.log(data);
}).catch( error => {
    console.log(error);
})