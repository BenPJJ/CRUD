# CRUD 项目开发流程

## 1. 起步

- 初始化

  > npm init -y


- 安装依赖

  > npm install --save express	express 框架

  	> npm install --global nodemon		nodemon 第三方命令工具

- 入口文件 app.js

``` javascript

var express = require('express')

var app = express()

app.get('/', function （req, res） {
	res.send('hello world')
})

app.listen(3000, function () {
  console.log('running...')
})

```

``` shell

# 运行命令
nodemon app.js

```

- 模板处理

  - [bootstrap](https://v3.bootcss.com/examples/dashboard/) 寻找适合个人风格的模板

  - 根目录下创建 views 和 public 文件夹

    - 用途：
      - public 文件夹下有 img、css、js 目录，用于存放公共资源，方便开发
      - views 文件夹，express 默认会去项目中的 views 目录找 index.html

  - 创建文件 index.html 把模板粘贴进来

    - 适当整理代码，处理加载包的引用路径

      - > npm install --save bootstrap		bootstrap 框架

        - 在 public/css 文件夹里创建 main.css，在 public/img 文件夹里添加 favicon.ico

``` 

<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/public/img/favicon.ico">

    <title>{{ title }}</title>

    <!-- Bootstrap core CSS -->
    <link href="/node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="/public/css/main.css" rel="stylesheet">
  </head>

  <body>

    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Help</a></li>
          </ul>
          <form class="navbar-form navbar-right">
            <input type="text" class="form-control" placeholder="Search...">
          </form>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Export</a></li>
          </ul>
          <ul class="nav nav-sidebar">
            <li><a href="">Nav item</a></li>
            <li><a href="">Nav item again</a></li>
            <li><a href="">One more nav</a></li>
            <li><a href="">Another nav item</a></li>
            <li><a href="">More navigation</a></li>
          </ul>
          <ul class="nav nav-sidebar">
            <li><a href="">Nav item again</a></li>
            <li><a href="">One more nav</a></li>
            <li><a href="">Another nav item</a></li>
          </ul>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 class="page-header">Dashboard</h1>

          <div class="row placeholders">
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
          </div>

          <h2 class="sub-header">Section title</h2>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>Lorem</td>
                  <td>ipsum</td>
                  <td>dolor</td>
                  <td>sit</td>
                </tr>
                <tr>
                  <td>1,002</td>
                  <td>amet</td>
                  <td>consectetur</td>
                  <td>adipiscing</td>
                  <td>elit</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>Integer</td>
                  <td>nec</td>
                  <td>odio</td>
                  <td>Praesent</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>libero</td>
                  <td>Sed</td>
                  <td>cursus</td>
                  <td>ante</td>
                </tr>
                <tr>
                  <td>1,004</td>
                  <td>dapibus</td>
                  <td>diam</td>
                  <td>Sed</td>
                  <td>nisi</td>
                </tr>
                <tr>
                  <td>1,005</td>
                  <td>Nulla</td>
                  <td>quis</td>
                  <td>sem</td>
                  <td>at</td>
                </tr>
                <tr>
                  <td>1,006</td>
                  <td>nibh</td>
                  <td>elementum</td>
                  <td>imperdiet</td>
                  <td>Duis</td>
                </tr>
                <tr>
                  <td>1,007</td>
                  <td>sagittis</td>
                  <td>ipsum</td>
                  <td>Praesent</td>
                  <td>mauris</td>
                </tr>
                <tr>
                  <td>1,008</td>
                  <td>Fusce</td>
                  <td>nec</td>
                  <td>tellus</td>
                  <td>sed</td>
                </tr>
                <tr>
                  <td>1,009</td>
                  <td>augue</td>
                  <td>semper</td>
                  <td>porta</td>
                  <td>Mauris</td>
                </tr>
                <tr>
                  <td>1,010</td>
                  <td>massa</td>
                  <td>Vestibulum</td>
                  <td>lacinia</td>
                  <td>arcu</td>
                </tr>
                <tr>
                  <td>1,011</td>
                  <td>eget</td>
                  <td>nulla</td>
                  <td>Class</td>
                  <td>aptent</td>
                </tr>
                <tr>
                  <td>1,012</td>
                  <td>taciti</td>
                  <td>sociosqu</td>
                  <td>ad</td>
                  <td>litora</td>
                </tr>
                <tr>
                  <td>1,013</td>
                  <td>torquent</td>
                  <td>per</td>
                  <td>conubia</td>
                  <td>nostra</td>
                </tr>
                <tr>
                  <td>1,014</td>
                  <td>per</td>
                  <td>inceptos</td>
                  <td>himenaeos</td>
                  <td>Curabitur</td>
                </tr>
                <tr>
                  <td>1,015</td>
                  <td>sodales</td>
                  <td>ligula</td>
                  <td>in</td>
                  <td>libero</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </body>
</html>

```

- 模板处理

  - 开放资源​


``` javascript
var express = require('express')

var app = express()

app.use('/node_modules/', express.static('node_modules'))
app.use('/public/', express.static('public'))

app.get('/', function （req, res） {
	res.send('hello world')
})

app.listen(3000, function () {
  console.log('running...')
})

```

- 模板处理

  - 配置 express-art-template 模板

    - > npm install --save art-template express-art-template		安装 express-art-template 模板

    - > app.engine('html', require('express-art-template'))         配置

``` javascript
var express = require('express')

var app = express()

app.engine('html', require('express-art-template'))

app.use('/node_modules/', express.static('node_modules'))
app.use('/public/', express.static('public'))

app.get('/', function （req, res） {
	res.render('index.html', {
      title: 'CRUD'
	})
})

app.listen(3000, function () {
  console.log('running...')
})

```

## 2. 路由设计

| 请求方法 | 请求路径            | get 参数 | post 参数                    | 备注       |
| ---- | --------------- | ------ | -------------------------- | -------- |
| GET  | /student        |        |                            | 渲染首页     |
| GET  | /student/new    |        |                            | 渲染添加学生页面 |
| POST | /student/new    |        | name、age、gender、hobbies    | 处理添加学生请求 |
| GET  | /student/edit   | id     |                            | 渲染编辑页面   |
| POST | /student/edit   |        | id、name、age、gender、hobbies | 处理编辑请求   |
| GET  | /student/delete | id     |                            | 处理删除请求   |

## 3. 提取路由模块

- 根目录下新建 router.js

- 提取路由模块有一个问题：

  - app 怎么传过来

- Express 提供了一种更好的方式，专门用来包装路由的

  - > express.Router()

``` javascript

/**
 * router.js 路由模块
 * 职责：
 * 1. 处理路由
 * 2. 根据不同请求方法 + 请求路径 设置具体的请求处理函数
 * 
 * 模块职责要单一，不要乱写
 * 我们划分模块的目的就是为了增强项目代码可维护性
 * 提升开发效率
 * 
 */


var express = require('express')
var fs = require('fs')

var router = express.Router()

var dbPath = './db.json'

router.get('/', function (req, res) {

    fs.readFile(dbPath, function (err, data) {
        if (err) {
            return console.log(err)
        }
        
        var students = JSON.parse(data).students
        
        res.render('index.html', {
            title: 'CRUD',
            fruits: [
                '苹果',
                '香蕉',
                '西瓜',
                '火龙果'
            ],
            students: students
        })

    })  


})

# 注意：别遗忘 导出当个成员
module.exports = router

```

- Express 提供了一种更好的方式，专门用来包装路由的
  - 入口文件 app.js 引用 router

``` javascript

var router = require('./router')

// 挂载路由
app.use(router)

```

