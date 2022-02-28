const express = require("express");
const app = express();

// const appConfig = require("./config") // 函数的方式
const AppConfig = require("./config"); // 面向对象的方式

// appConfig(app); // 函数的方式
let appConfig = new AppConfig(app,3000); // 面向对象方式导出，在new时执行了constructor构造器函数、
// 进行配置
appConfig.run();
// 注册路由
appConfig.registerRouter();

app.listen(appConfig.port,() => {
    console.log(`express serve going at ${appConfig.port}!`)
})
