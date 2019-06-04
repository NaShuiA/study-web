var express = require('express');

var router = express.Router();

//加载首页
router.get('/',function(req,res) {
  res.render('index.html')
})
//渲染登录页面
router.get('/login',(req,res)=>{
  res.render('login.html')
})
router.get('/register',(req,res)=>{
  res.render('register.html')
})
//渲染注册页面
router.get('/register',(req,res)=>{
  res.render('register.html')
})
//处理注册页面
router.post('/register',(req,res)=>{
  //1.获取表单的数据
  //2.操作数据库
  //3.发表响应

  //1
  var body = req.body;
  //console.log(body);
  //判断用户名或者邮箱是否注册过
  
})




module.exports = router;