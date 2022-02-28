const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// 关于模板的配置信息
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


app.get('/', (req,res) => {
    res.render("index")
})

app.listen(port,() => {
    console.log(`express serve going at ${port}!`)
})
