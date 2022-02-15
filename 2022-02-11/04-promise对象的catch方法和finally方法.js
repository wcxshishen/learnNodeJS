const fs = require("fs");
const path = require("path");

let filePathOne = path.join(__dirname, "text", "text1.txt");

let p1 = new Promise((resolve, reject)=>{
    fs.readFile(filePathOne, "utf-8", (error, data)=>{
        if(error){
            reject(error);
            return;
        }
        resolve(data);
    })
});



let str = ""; //这个变量保存字符串

p1.then( data => {
    console.log(data);
}).catch( error => {
    // catch()相当于then中的第二个参数，但是catch可以捕获到then第一个参数抛出的错误，而第二个参数函数则不能。
    console.log(error);
}).finally(() => {
    // finally()这里的代码不管成功与否，都会执行。
    console.log('wcxshsihen')
})
