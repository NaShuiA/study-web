//引入核心模块
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var router = require('./router')
var app = express();
//==============================================================
//开放静态资源模块
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))
//--------------------------------------------------------------
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/')) // 默认就是 ./views 目录
// app.get('/',(req,res)=>{
//   res.send('hello');
// })

// 配置 body-parser
// 只要加入这个配置，则在 req 请求对象上会多出来一个属性：body
// 也就是说你就可以直接通过 req.body 来获取表单 POST 请求体数据了
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())	
//挂在到app
app.use(router);
app.listen(3000,function() {
  console.log('running......')
})
