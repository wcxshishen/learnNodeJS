const express = require('express');
const path = require('path');

// 1.引入art-template
const template = require('art-template');

const app = express();
const port = 3000;

app.engine('html',require('express-art-template'));
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','html');

// 子模板
app.get('/child', (req, res) => {
    res.render('child');
})

app.listen(3000, () => {
    console.log(`express serve going at ${port}!`)
})