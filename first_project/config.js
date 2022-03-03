const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
// 抽取路由请求
const firstRouter = require("./routes/index");
const passPortRouter = require("./routes/passPort");

// 以函数的方式进行封装
// let appConfig = (app) => {
//     // 获取post请求参数的配置
//     app.use(express.urlencoded({extended: false}));
//     app.use(express.json());

//     // 设置cookie和session的配置
//     app.use(cookieParser());
//     app.use(cookieSession({
//         name:"my_session",
//         keys:["^&*(^*&^*&^*&kdhfklshdfhksdhfkhas**(*&(&"],
//         maxAge: 1000 * 60 * 60 * 24 * 2, // 保留两天
//     }))

//     // 配置静态资源
//     app.use(express.static(path.join(__dirname, 'public')));

//     // 关于模板的配置信息
//     app.engine('html', require('express-art-template'));
//     app.set('view options', {
//         debug: process.env.NODE_ENV !== 'production'
//     });
//     app.set('views', path.join(__dirname, 'views'));
//     app.set('view engine', 'html');
// }

// 以面向对象的方式进行抽取
// class AppConfig{
//     // 创建对象时执行的代码,创建对象时执行constructor构造器函数
//     constructor(app){
//         this.app = app;
//         // 获取post请求参数的配置
//         this.app.use(express.urlencoded({extended: false}));
//         this.app.use(express.json());

//         // 设置cookie和session的配置
//         this.app.use(cookieParser());
//         this.app.use(cookieSession({
//             name:"my_session",
//             keys:["^&*(^*&^*&^*&kdhfklshdfhksdhfkhas**(*&(&"],
//             maxAge: 1000 * 60 * 60 * 24 * 2, // 保留两天
//         }))

//         // 配置静态资源
//         this.app.use(express.static(path.join(__dirname, 'public')));

//         // 关于模板的配置信息
//         this.app.engine('html', require('express-art-template'));
//         this.app.set('view options', {
//             debug: process.env.NODE_ENV !== 'production'
//         });
//         this.app.set('views', path.join(__dirname, 'views'));
//         this.app.set('view engine', 'html');
//     }
// }

class AppConfig{
    // 创建对象时执行的代码,创建对象时执行constructor构造器函数
    constructor(app, port){
        this.app = app;
        this.port = port;
    }

    run(){
        // 获取post请求参数的配置
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());

        // 设置cookie和session的配置
        this.app.use(cookieParser());
        this.app.use(cookieSession({
            name:"my_session",
            keys:["^&*(^*&^*&^*&kdhfklshdfhksdhfkhas**(*&(&"],
            maxAge: 1000 * 60 * 60 * 24 * 2, // 保留两天
        }))

        // 配置静态资源
        this.app.use(express.static(path.join(__dirname, 'public')));

        // 关于模板的配置信息
        this.app.engine('html', require('express-art-template'));
        this.app.set('view options', {
            debug: process.env.NODE_ENV !== 'production'
        });
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'html');
    }

    // 注册路由
    registerRouter(){
        this.app.use(firstRouter);
        this.app.use(passPortRouter);
    }
}

module.exports = AppConfig;