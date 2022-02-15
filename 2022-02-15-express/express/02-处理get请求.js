const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/register", (req, res) => {
    // 获取文件路径
    let filePath =  path.join(__dirname, "views", "register.html");
    let content = fs.readFileSync(filePath, "utf-8");

    res.send(content)
})

app.get('/', (req, res)=> {
    console.log("首页内容");
    res.send("首页");
})



app.listen(3000,() => {
    console.log("express web serve is listen at 3000")
})