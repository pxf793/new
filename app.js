//1,导包
const express = require('express');
const router = require('./router');
//2，返回app对象
const app = express();
//使用router 
app.use(router);

//3.配置包
app.engine('html',require('express-art-template'));
//4，绑定端口
app.listen(12347,() => {
    console.log('run it');
})