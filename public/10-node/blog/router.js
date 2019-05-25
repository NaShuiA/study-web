var express = require('express');
var router = express.Router();
var User = require('./models/user');

//首页
router.get('/',(req,res)=>{
  res.render('index.html')
})
//登录注册
router.get('/login',(req,res)=>{
  res.render('login.html')
})
//
router.post('/login',(req,res)=>{
  
})
//
router.get('/register',(req,res)=>{
  res.render('register.html')
})
//
router.post('/register',(req,res)=>{
  //console.log(req.body)
  var body = req.body;
  User.findOne({
    // email:body.email
    $or: [
      {
        email:body.email
      },
      {
        nickname:body.nickname
      }
   ]
  },function(err,data) {
    if(err) {
      return res.status(500).json({
        err_code:1,
        message:'服务端错误'
      })
    }
    if(data) {
      return res.status(200).json ({
          err_code:1,
          message:'邮箱或者昵称已存在'
      })
    }
    new User(body).save(function(err,user){
      if(err) {
        return res.status(500).json({
          err_code:500,
          message:'服务端错误'
        })
      }
      res.status(200).json({
        err_code:0,
        message:'ok'
      })
    }) 
  })
})
//


module.exports = router;