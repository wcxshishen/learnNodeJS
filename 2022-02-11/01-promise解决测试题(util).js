const path = require("path");
const fs = require("fs");
const util = require("util");

let filePath1 = path.join(__dirname,'text1.txt');
let filePath2 = path.join(__dirname,'text2.txt');
let filePath3 = path.join(__dirname,'text3.txt');

let readFilePromise = util.promisify(fs.readFile);

let str = '';

readFilePromise(filePath1, "utf-8").then( data => {
    str += data;
    return readFilePromise(filePath2, "utf-8");
}).catch( error => {
    console.log(error);
}).then( data => {
    str += data;
    return readFilePromise(filePath3, "utf-8");
}).catch( error => {
    console.log(error);
}).then( data => {
    str += data;
    console.log(str);
}).catch( error => {
    console.log(error);
})