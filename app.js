var express = require('express')
var router = require('./router')
var bodyParser = require('body-parser')

var app = express()

/**
 * 配置 body-parser     express 的中间件
 */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

/**
 * 开放资源
 */
app.use('/node_modules', express.static('node_modules'))
app.use('/public/', express.static('public'))

/**
 * 配置 express-art-template 模板
 */
app.engine('html', require('express-art-template'))

app.use(router)

app.listen(5000, function () {
    console.log('running...')
})