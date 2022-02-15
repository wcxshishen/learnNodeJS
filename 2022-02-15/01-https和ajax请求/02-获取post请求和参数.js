
const http = require('http')
// url 模块解析参数
const url = require('url')
const port = 8081;



const server = http.createServer((requset, response)=>{
    // 每触发一次请求都会执行这里的代码，无论是post还是get
    console.log(requset.method);

    // get请求获取参数
    let obj = url.parse(requset.url,true);
    console.log(obj);

    // post请求获取参数
    // 先获取用户的用户名和密码
    // 以事件的方式来接受,事件名为data，一旦接受post请求就会触发这里的代码执行
    requset.on("data",(propsData)=>{
        // 一旦接受到post请求，就会触发这里的代码
        // postData就是接收到的参数
        console.log(propsData.toString());
    })


    response.write('wcxshishen6666');
    response.end();
})


server.listen(port,(error)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log(`webserver is listerning at port ${port}!`)
})