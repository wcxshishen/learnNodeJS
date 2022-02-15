const http = require('http');
const fs = require('fs');
const path = require("path");
const port = 8081;


// 什么样的标签会发起请求
// link href
// script src
// img src
// a 点击

// 封装函数
function responseEnd(response, dirName, fileName){
    let filePath = path.join(__dirname,'assets',dirName,fileName);
    let content = fs.readFileSync(filePath,"utf-8");
    response.end(content);
}

const server = http.createServer((request,response)=>{
    // 每有一次请求就执行一次这里的代码
    // 判断浏览器需要那个资源文件
    let reqUrl = request.url;
    if(reqUrl === "/" || reqUrl === "/index.html"){
        responseEnd(response, 'html', 'index.html');
    }
    else if(reqUrl === "/detail.html"){
        responseEnd(response, 'html', 'detail.html');
    }
    else if(reqUrl.endsWith('.css')){
        responseEnd(response, 'css', 'index.css');
    }
    else if(reqUrl.endsWith('.js')){
        responseEnd(response, 'js', 'index.js');
    }
    else if(reqUrl == "/get_data"){
        response.end("接收到ajax的get请求！这是给响应给浏览器的数据");
    }
    else if(reqUrl == "/login_post"){
        setTimeout(() => {
            // 处理post请求参数
            request.on("data", (propsData) => {

                // propsData就是post请求传递过来的参数。
                console.log(JSON.parse(propsData.toString()));

                let {userName, passWord} = JSON.parse(propsData.toString());

                if(userName && passWord){
                    response.end("登录成功！");
                } else {
                    response.end("用户名或密码错误！")
                }
                
            })
        }, 5000);
    }
    else if(reqUrl == "/login.html"){
        responseEnd(response, 'html', 'login.html');
    }
    else {
        // 遵循http协议,设置响应头
        response.setHeader("Content-type","text/html;charset=utf-8");
        response.end("404");
    }
    // 读取页面的内容，返回信息
    // response.end();
})

server.listen(port,(error)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log(`webserver is listerning at port ${port}!`);
})