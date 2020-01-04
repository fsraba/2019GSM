//mysql db 연결
var mysql = require('mysql');

//mysql에 연결 connection 객체 생성
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'stu_info',
 });
 
 connection.connect().then(() => {console.log("DB 동작중");});
 
 //info 테이블 데이터 가져오기
var sql = 'SELECT * FROM info';
connection.query(sql,function(err,rows,fields){ //row는 '행' 행ㅎ앻앻ㅇ행ㅎ^ㅁ^
    if(err){
        console.log(err);
    }else{
        for(var i=0;i<rows.length;i++){
            console.log(rows[i].title + ":" + rows[i].description);
        }
    }
});


connection.end();

//  exports.selectStudentsData = function(cb){
//     sql = 'SELECT * FROM info';
//     connection.query(sql, function (error, results, fields) {
//       if(!error){
//         cb(results);
//       }else{
//         console.log(error);
//       }
//     });
//   }

exports.loginProcess = function(formData, cb){
    sql = 'SELECT * FROM member WHERE id = ?';
    connection.query(sql, [formData.stuinfo], function(err, results, fields){
        if(!err){
          //console.log('loginProcess select data');
          //console.log(results[0]);
          cb(results[0]);     // 검색된 row 하나만 리턴{id:, pwd:, name:, class:}
        }else{
          console.log('loginProcess 에러 발생');
          console.log(err.message);
        }
    })
}
 var mysql = require('mysql');
 const connection = mysql.createConnection(require(''));

 connection.connect((err)=>{
   if(err){
     console.log(err);
     return;
   }
   console.log('mysql connect success');
 });
 router.get('/',(req,res)=>{
   const sql = 'SELECT * FROM info';
   connection.query(sql,(err,results,field)=>{
     console.log(results);
     res.render('index',{
       projects:results
     });
   });
});
