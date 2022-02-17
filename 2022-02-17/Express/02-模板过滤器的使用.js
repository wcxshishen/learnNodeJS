const express = require('express');
const path = require('path');

// 1.引入art-template
const template = require('art-template');

const app = express();
const port = 3000;

app.engine('html',require('express-art-template'));
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','html');

// 2.书写模板过滤器
template.defaults.imports.timestamp = function(value) {
    return value * 1000;
};
template.defaults.imports.changeName = function(value) {
    return value + 'shishen'
}
// 3. 在模板中使用过滤器函数 timestamp

app.get("/", (req, res) => {

    let data = {
        num:20,
        name:'wcx'
    }
    res.render("index", data)
})

app.listen(3000, () => {
    console.log(`express serve going at ${port}!`)
})