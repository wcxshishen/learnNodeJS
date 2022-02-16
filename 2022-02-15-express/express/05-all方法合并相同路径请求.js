const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// app.all() 合并相同路径的请求
app.all('/register', (req, res) => {

    // 鲜果去请求方式，根据请求方式来执行对应的代码
    if(req.method == 'GET'){
        let content = fs.readFileSync(path.join(__dirname, 'views', 'register.html'), 'utf-8');
        console.log(req.query);
        res.send(content)
    }
    if(req.method == 'POST'){
        console.log(req.body);
        res.redirect('/login'); // 重定向到登录页
        // res.send('post in register');
    }

})

// app.get('/register', (req, res) => {
//     let content = fs.readFileSync(path.join(__dirname, 'views', 'register.html'), 'utf-8');

//     res.send(content)
// })

// app.post('/register', (req, res) => {
//     res.send('post in register')
// })

// 展示登录接口
app.get('/login', (req, res) => {
    let filePath = path.join(__dirname, "views", "login.html");
    let content = fs.readFileSync(filePath, "utf-8");
    res.send(content); // 返回注册页
})

app.listen(port, () => {
    console.log(`express serve going at ${port}!`)
})