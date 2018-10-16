//路由模块
//作用：处理分发
//1.导包 express
const express = require('express');
const c_user = require('./controllers/c_user');
//2，获取路由对象express。Router（）
const router = express.Router();
//3，router。get（）
router.get('/signin',c_user.showSignin)
//4，导出router
module.exports = router;
//
//
