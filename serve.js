let express = require('express');
let Mock = require('mockjs');

let app = express();


// 为app添加中间件处理跨域请求
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.all('/login', function (req, res) {
    res.json(Mock.mock({
        "data|1": [{
            "status": 200,
            "message": "用户登录成功",
            "token": "430426199709148288"
        }]
    }));
})

app.listen('8090', function () {
    console.log('服务器启动成功')
});