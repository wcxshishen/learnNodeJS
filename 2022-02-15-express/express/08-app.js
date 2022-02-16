const express = require('express');
const path = require('path');
const fs = require('fs');

// 引入路由
const passportRouter = require('./routes/passport');
const indexRouter = require('./routes/index');


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// 把路由对象注册到app下
app.use(passportRouter);
app.use(indexRouter);


app.listen(port, () => {
    console.log(`express serve going at ${port}!`)
})