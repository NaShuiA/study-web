var express = require('express');
var md5 = require('blueimp-md5');
var User = require('./models/user.js')
var router = express.Router();


//加载首页
router.get('/',function(req,res) {
  console.log(req.session.user)
  res.render('index.html',{
    user:req.session.user
  })
})
//渲染登录页面
router.get('/login',(req,res)=>{
  res.render('login.html')
})

router.post('/login',(req,res)=>{
  //console.log(req.body)
  var body = req.body;
  User.findOne({
    email:body.email,
    password:md5(md5(body.password))
  },function(err,user) {
    if(err) {
      return res.status(500).json({
        err_code:500,
        message:err.message
      })
    }
    if(!user) {
      return res.status(200).json({
        err_code:1,
        message:'邮箱或者密码无效'
      })
    }
    //用户存在登录成功 记录登录状态
    req.session.user = user;
    res.status(200).json({
      err_code: 0,
      message:'ok'
    })
  })
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
        err_code:1,
        message:'邮箱或昵称已存在。'
      })
    }
    body.password = md5(md5(body.password));

    new User(body).save((err,user)=>{
      if(err) {
        return res.status(500).json({
          err_code:500,
          message: '服务端错误'
        })
      }
      //注册成功使用session保存数据
      // 用户存在，登陆成功，通过 Session 记录登陆状态
      req.session.user = user;

      res.status(200).json({
        err_code:0,
        message:'ok'
      })
    })
    
  })
})

router.get('/logout',function(req,res) {
  req.session.user = null;
  res.redirect('/login')
})




module.exports = router;