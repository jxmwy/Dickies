let express = require("express")()
// console.log(express)
let port = 8080;
// Node解决跨域问题
express.all("/*", function (req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
})

let mysql = require("mysql")
let sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "dickies",
    timezone: "08:00"//改变时间格式
})
sql.connect();
// 登录接口
express.get("/login", (request, response) => {
    let username = request.query.username;
    let password = request.query.password;
    sql.query(`SELECT * FROM vip WHERE username="${username}"AND password="${password}"`, (error, data) => {

        if (error) {
            console.log(error)
            response.send("error")
        } else {
            if (!data.length) {
                response.send("error")
            }
            else {
                response.send("success")
            }
        }
    })
})
// 注册接口
express.get("/addUser", (request, response) => {
    let username = request.query.username;
    let password = request.query.password;
    sql.query(`INSERT INTO vip(username,password) values("${username}","${password}")`, (error) => {
        if (error) {
            console.log(error)
            response.send("error")
        } else {
            response.send("success")
        }
    })
})



// 获取学生数据接口
express.get("/getStudent", (request, response) => {
    let id = request.query.id;

    // let num=id?`SELECT * FROM students where id="${id}"`:`SELECT * FROM students`
    sql.query(`SELECT * FROM students `, (error, data) => {
        if (error) {
            console.log(error)
            response.send("error")
        } else {
            response.send(data)
        }
    })
})

//删除学生接口
express.get("/deleteStudent", (request, response) => {
    let id = request.query.id;
    sql.query(`DELETE FROM students WHERE id=${id} `, (error) => {
        if (error) {
            console.log(error)
            response.send("error")
        } else {
            response.send("success")
        }
    })
})

//增加学生接口
express.get("/addStudent", (request, response) => {
    const id = request.query.id;
    const name = request.query.name;
    const age = request.query.age;
    const sex = request.query.sex;
    const city = request.query.city;
    const joinDate = request.query.date;
    if (id && name && age && sex && city && joinDate) {
        sql.query(`INSERT INTO students (id,name,age,sex,city,joinDate) VALUES (${id},${name},${age},${sex},${city},${joinDate})`, (error) => {
            if (error) {
                console.log(error)
                response.send("error")
            } else {
                response.send("success")
            }
        })
    }
    else {
        response.send("error")
    }
})
//更新信息接口
express.get("/updateStudent", (request, response) => {
    const id = request.query.id;
    const name = request.query.name;
    const age = request.query.age;
    const city = request.query.city;

    sql.query(`UPDATE students SET name=${name},age=${age} ,city=${city} WHERE id=${id}`, (error) => {
        if (error) {
            console.log(error)
            response.send("error")
        } else {
            response.send("success")
        }
    })
})

express.listen(port)
console.log("server is running at " + port)