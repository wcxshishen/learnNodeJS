// pathinfo 参数，又叫pathname参数
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.engine('html',require('express-art-template'));
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','html');

app.get("/list", (req, res) => {
    res.render("list")
})

app.get("/detail/:id/:animal", (req, res) => {
    // 在这里需要知道要获取那篇文章的详情。
    // 在请求页面时，需要传递参数，传递自己的标识ID。
    // 这些参数叫做 pathinfo 参数。 
    console.log(req.params);

    res.send("detail详情页"+req.params.id+req.params.animal);
})



app.listen(3000, () => {
    console.log(`express serve going at ${port}!`)
})