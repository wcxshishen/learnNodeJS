const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }))
app.use(express.json());


// 这四句代码起到模板引擎的初始化工作

// 1. 告诉express框架使用什么模板引擎(express-art-template)渲染什么后缀的模板文件(html)
app.engine('html',require('express-art-template'));

// 2. 生产环境的设置
// 生产环境（线上）：production
// 开发环境：development
app.set('view options', {
    debug: process.env.NODE_ENV !== 'development'
});

// 3. 告诉express框架模板存放的位置是什么
// 第一个views是固定的(不用动),是express的配置项名字，第二个是告诉express框架模板存放的位置。
app.set('views',path.join(__dirname, 'views'));
// 第二个views是文件夹的名字,设置模板的后缀名为html
app.set('view engine','html');;

app.get('/', (req, res) => {
    // 我们可以在接口中查询数据库，得到数据后传送给模板
    let data = {
        num1:20,
        num2:10,
        user:{
            name:'wcx',
            age:18
        },
        arr:[1,2,3]
    }
    // res.send("hello!");
    res.render("index", data); // 参数一：返回index页面给浏览器,参数二：传给模板data数据
})

app.listen(port, () => {
    console.log(`express serve going at ${port}!`)
})