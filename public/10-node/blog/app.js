var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
//路由模块
var router = require('./router')
var app = express();

//开放静态资源
app.use('/public/',express.static(path.join(__dirname,'/public/')));
app.use('/node_modules/',express.static(path.join(__dirname,'/node_modules/')));

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/')) // 默认就是 ./views 目录
//post请求体中间件
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())	
app.use(router)
//挂在路由
app.get('/',(req,res)=>{
  res.render('index.html')
})

app.listen(3000,()=>{
  console.log('running...')
})
