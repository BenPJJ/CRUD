
var express = require('express')
var fs = require('fs')

var dbPath = './db.json'

/**
 * 
 * @param {Function} cellback 回调函数
 */
exports.find = function (cellback) {

    fs.readFile(dbPath, 'utf8', function (err, data) {

        if (err) {

            return cellback(err)

        }
        
        cellback(null, JSON.parse(data).students)

    })  


}

/**
 * 
 * @param {Objeck} student 学生对象
 * @param {Function} cellback 回调函数
 */
exports.save = function (student, cellback) {

    fs.readFile(dbPath, 'utf8', function (err, data) {

        if (err) {

            return cellback(err)

        }
        
        var students = JSON.parse(data).students

        // 处理 id 唯一的，不重复
        student.id = students[students.length - 1].id + 1

        // 把用户传递的对象保存到数组中
        students.push(student)

        // 把对象数据转换为字符串
        var fileDate = JSON.stringify({

            students: students

        })

        // 把字符串保存到文件中
        fs.writeFile(dbPath, fileDate, function (err) {
            
            if (err) {
                // 错误就是把错误对象传递给它
                return cellback(err)
            }
            
            // 成功就没错，所以错误对象是 null
            cellback(null)

        })

    }) 


}

/**
 * 
 * @param {Number} id 学生 id
 * @param {Function} cellback 回调函数
 */
exports.findById = function (id, cellback) {

    fs.readFile(dbPath, function (err, data){
        
        if (err) {

            return cellback(err)

        }

        var students = JSON.parse(data).students

        var ret = students.find(function (item) {

            return item.id === parseInt(id)

        })

        cellback(null, ret)


    })


}

/**
 * 
 * @param {Objeck} student 学生对象
 * @param {Function} cellback 回调函数
 */
exports.updateById = function (student, cellback) {

    fs.readFile(dbPath, 'utf8',function (err, data) {

        if (err) {

            return cellback(err)

        }

        var students = JSON.parse(data).students

        student.id = parseInt(student.id)

        var stu = students.find(function (item) {

            return item.id === student.id

        })

        for (var key in student) {

            stu[key] = student[key]

        }

        students.push(stu)

        var fileDate = JSON.stringify({

            students: students

        })

        fs.writeFile(dbPath, fileDate, function (err, data) {

            if (err) {

                return cellback(err)

            }

            cellback(null)

        })

    })


}

exports.deleteById = function (id, cellback) {

    fs.readFile(dbPath, function (err, data) {

        if (err) {

            return cellback(err)

        }

        var students = JSON.parse(data).students

        var deleteId = students.findIndex(function (item) {

            return item.id === parseInt(id)

        })

        students.splice(deleteId, 1)

        var fileDate = JSON.stringify({

            students: students

        })

        fs.writeFile(dbPath, fileDate, function (err) {

            if (err) {

                return cellback(err)

            }

            cellback(null)

        })

    })


}