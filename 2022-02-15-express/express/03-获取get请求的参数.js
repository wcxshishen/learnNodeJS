const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.get('/register', (req, res) => {
    let filePath = path.join(__dirname, "views", "register.html");
    let content = fs.readFileSync(filePath, "utf-8");
    // 请求参数在 req.query 中
    console.log(req.query);
    res.send(content);
})

app.get('/', (req, res) => {
    res.send('主页')
})

app.listen(port, () => {
    console.log("wcxshishen")
})