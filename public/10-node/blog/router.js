var express = require('express');
var md5 = require('blueimp-md5');
var router = express.Router();
var User = require('./models/user.js')

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
  User.findOne({
    $or: [
      {email: body.email},
      {nickname: body.nickname}
   ]
  },(err,data)=>{
    if(err) {
      return res.status(500).json({
        err_code:1,
        message: '服务端错误'
      })
    };
    if(data) {
      return res.status(200).json({
        err_code:0,
        message:'邮箱或昵称已存在。'
      })
    }
    body.password = md5(md5(body.password));
    new User(body).save((err,data)=>{
      if(err) {
        return res.status(500).json({
          err_code:500,
          message: '服务端错误'
        })
      }
      res.status(200).json({
        err_code:0,
        message:'ok'
      })
    })
    
  })
})




module.exports = router;