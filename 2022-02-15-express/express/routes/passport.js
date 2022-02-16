const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// app.all() 合并相同路径的请求
router.all('/register', (req, res) => {

    // 鲜果去请求方式，根据请求方式来执行对应的代码
    if(req.method == 'GET'){
        let content = fs.readFileSync(path.join(__dirname, '../views', 'register.html'), 'utf-8');
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
router.get('/login', (req, res) => {
    let filePath = path.join(__dirname, "../views", "login.html");
    let content = fs.readFileSync(filePath, "utf-8");
    res.send(content); // 返回注册页
})

// 导出路由
module.exports = router;