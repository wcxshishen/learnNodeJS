// 初始化项目 yarn init -y
// 安装 express   yarn add express

// 1. 引入express
const express =  require("express");

// 2. 创建app对象（项目对象），他就是项目最大的对象）
const app = express();

// 4. 处理请求
// 参数一：请求路径
app.get("/", (req, res) => {
    // 参数二：针对这个路径的处理函数，有两个形参，req为请求对象。res为响应对象。

    // 响应一个字符串给浏览器
    res.send('hello express 框架！')
})


// 3. 监听是否有请求
app.listen(3000, () => {
    // 这里代码会在服务器启动时执行一次

    console.log("express web serve is listen at 3000")
})
