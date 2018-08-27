
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
var Student = require('./student')

var router = express.Router()



/**
 * 渲染首页
 */
router.get('/student', function (req, res) {

    Student.find(function (err, students) {

        if (err) {

            return res.status(500).send('Server error.')

        }
        
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

/**
 * 渲染添加学生页面
 */
router.get('/student/new', function (req, res) {

    res.render('new.html', {

        title: 'CRUD',
        fruits: [
            '苹果',
            '香蕉',
            '西瓜',
            '火龙果'
        ]

    })


})

/**
 * 处理添加学生请求
 */
router.post('/student/new', function (req, res) {

    Student.save(req.body, function (err) {

        if (err) {

            return res.status(500).send('Server error.')

        }

        res.redirect('/student')

    })


})

/**
 * 渲染编辑页面
 */
router.get('/student/edit', function (req, res) {
    
    Student.findById(parseInt(req.query.id), function (err, student) {

        if (err) {

            return res.status(500).send('Server error.')

        }

        res.render('edit.html', {

            title: 'CRUD',
            fruits: [
                '苹果',
                '香蕉',
                '西瓜',
                '火龙果'
            ],
            student: student

        })

    })


})

/**
 * 处理编辑页面
 */
router.post('/student/edit', function (req, res) {

    Student.updateById(req.body, function (err) {

        if (err) {

            return res.status(500).send('Server error.')

        }

        res.redirect('/student')
    })


})

/**
 * 处理删除请求
 */
router.get('/student/delete', function (req, res) {

    Student.deleteById(parseInt(req.query.id), function (err) {

        if (err) {

            return res.status(500).send('Server error.')

        }

        res.redirect('/student')



    })


})

module.exports = router