const http = require('http');
const express = require("express");
const ejs = require("ejs");
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const logger = require('morgan');
const app = express();
``
var router = require('./route/router');
// app.use('/public', express.static(__dirname + '/public'));

// middle ware
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// view engine
app.set('views',path.join(__dirname, 'views'));
app.set("view engine","ejs");

//서버 구동
app.listen(3000,function(){
    console.log("팽이마냥 돌아가는 3000포트");
});

//router
app.use('/',router);

app.get('/',function(req,res){
    res.render('index');
});

//mysql db 연결
var mysql = require('mysql');

//mysql에 연결 connection 객체 생성
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'stu_info',
 });

 connection.connect((err)=>{
     if(err){
         console.log(err);
     }
     console.log("DB connedted");
 })

  //info 테이블 데이터 가져오기
// var sql = 'SELECT * FROM info';
// connection.query(sql,function(err,result,fields){ //row는 '행' 행ㅎ앻앻ㅇ행ㅎ^ㅁ^
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//     }

//insert
app.post('/fin_enroll',function(req,res){
    var stu_info = req.body('stu_info');
    var fin_id = req.body('fin_id');

    connection.query('INSERT INTO info(stu_info,id) VALUES(?,?)',[stu_info,fin_id],function(error,data){
        res.set()
    })
})
 

//fin_enroll.ejs 입력값 콘솔 출력
// app.post("/postTest",function(req,res){
//     var body = req.body;
//     var stuinfo = req.body.stuinfo;
//     var fin_id = req.body.fin_id;
//     console.log("info : ",req.body.stuinfo);
//     console.log("fin_Id : ",req.body.fin_id);
//     res.json({ok:true});
// });

// module.exports = app;