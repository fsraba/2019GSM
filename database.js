// //mysql연결
// var mysql = require('mysql');

// var mySqlClient = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '1234',
//     port     : '80',
//     database : 'stu_info'
// });

// // ort.insertRequest = function()




// var sql = 'INSERT INTO table (stu_name,id) VALUES(stuinfo,fin_id)';

// app.get('/fin_enroll',function(req,res){
//     fs.readFile('insert.html','utf8',function(error,data){
//         if(error){
//             console.log('readFile Error');
//         }else{
//             res.send(data);
//         }
//     });
// });

// app.post('/fin_enroll',function(req,res){
//     var body = req.body;

//     dbconfig.query('insert into info(stu_name,id) values(stuinfo,fin_id)',
//     [body.stuinfo, body.fin_id],
//     function(error,result){
//         if(error){
//             console.log('insert error: ', error.message);
//         }else{
//             res.redirect('/');
//         }
//     }
//     );
// });



// // app.get('/getdata',function(req,res){
// //     fs.readFile('list.ejs','uft8',function(error,data){
// //         if(error){
// //             console.log('readFile error');
// //         }else{
// //             connection.query('select * from info', function(error,results){
// //                 if(error){
// //                     console.log('error:',error.message);
// //                 }else{
// //                     res.send(ejs.render(data,{
// //                         pro
// //                     }))  
// //                 }
// //             })
// //         }
// //     })
// // })

// // app.get('/getdata',(req,res)=>{
// //     connection.query(sql,function(err,rows){
// //         if(err) throw err;
// //         else{
// //             for(var i=0; i<rows.length;i++){
// //                 res.send(rows[i].stu_info+"|"+rows[i].id);
// //             }
// //         }
       
// //     });
// // });

