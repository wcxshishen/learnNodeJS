const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());

// 设置cookie细腻系
app.get('/setCookie', (req, res) => {

    res.cookie("name","node",{maxAge:60 * 60 * 60 * 2});
    res.cookie("age",11);
    // 先传给浏览器
    res.send("设置了cookie信息！")
})

// 获取cookie信息
app.get("/getCookie", (req, res) => {
    // 从浏览器拿到cookie
    console.log(req.cookies["name"]);
    console.log(req.cookies["age"]);

    res.send('获取到的cookie信息')
})

app.listen(3000, () => {
    console.log(`express serve going at ${port}!`)
})