const express = require('express');

const passportRouter = require('./routes/passport')
const utils = require('./utils/index');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }))
app.use(express.json());


app.use(utils.checkLogin, passportRouter);


app.listen(port, () => {
    console.log(`express serve going at ${port}!`)
})