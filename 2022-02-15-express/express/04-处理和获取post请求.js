const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// bodyParser已经弃用，可以直接用express调用bodyParser的方法。
// // 1.引入body-parser
// const bodyParser = require("body-parser");
// // 2.把bodyParser的功能添加到项目中。把bodyParser注册到app下。app.use()方法，注册第三方包到app下！
app.use(express.urlencoded({extended: false})); // false接受的值为字符串或者数组， true则为任意类型

app.use(express.json()); // 解析json格式

app.get('/register', (req, res) => {
    let filePath = path.join(__dirname, "views", "register.html");
    let content = fs.readFileSync(filePath, "utf-8");
    console.log(req.query);
    res.send(content);
})

// 和get请求互不影响
app.post('/register', (req, res) => {

    // 一般post提交过来之后，后端需要获取提交过来的参数
    // 3. 通过req.body来获取post请求的参数
    console.log(req.body);
    res.send("post ok");
})

app.get('/', (req, res) => {
    res.send('主页')
})

app.listen(port, () => {
    console.log("wcxshishen")
})