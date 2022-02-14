const fs = require('fs');
const path = require('path');


let filePath1 = path.join(__dirname,'text1.txt');
let filePath2 = path.join(__dirname,'text2.txt');
let filePath3 = path.join(__dirname,'text3.txt');
let filePath4 = path.join(__dirname,'data.txt');


function readFilePromise(path) {
    return new Promise((reslove, reject) => {
        fs.readFile(path, "utf-8", (error, data) => {
            if(error){
                reject(error);
                return;
            }
            reslove(data);
        })
    })
}

function writeFilePromise(path, content) {
    return new Promise((reslove, reject) => {
        fs.writeFile(path, content, (error) => {
            if(error){
                reject(error);
                return;
            }
            reslove();
        })
    })
}

// Promise.all([Promise对象1, Promise对象2]).then( data => {
//     // data是一个数组，数组的每一个元素就是上面每一个promise对象成功时候的值。
//  // 在所有promise对象执行成功后，执行这里的代码，也是执行一次
// })

Promise.all([readFilePromise(filePath1), readFilePromise(filePath2), readFilePromise(filePath3)]).then( data => {
    console.log(data.join(''))
    writeFilePromise(filePath4, data.join(''))
})