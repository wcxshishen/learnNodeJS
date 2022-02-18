const express = require('express');
const path = require('path');

const cookieSession = require('cookie-session');

const app = express();
const port = 3000;

app.use(cookieSession({
    name:"my_session",
    keys:["wcxshishen"],
    maxAge: 1000*60*60*30 // 过期时间
}))

// 设置session细腻系
app.get('/setSession', (req, res) => {
    // 因为session是保存在服务器的，所以要在请求体中设置！
    req.session["name"] = "nodejs_session";
    req.session["age"] = 12;
    res.send("设置了session数据！")
})

// 获取session信息
app.get("/getSession", (req, res) => {
    console.log(req.session["name"]);
    console.log(req.session["age"]);
    res.send('获取到的cookie信息')
})

app.listen(3000, () => {
    console.log(`express serve going at ${port}!`)
})