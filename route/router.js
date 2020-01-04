var express = require('express');
var router = express.Router();

router.get('/',function(req,res, next){
  res.render('index');
});

router.get('/index',function(req,res, next){
  res.render('index');
});

router.get('/fin_enroll',function(req,res, next){
  res.render('fin_enroll');
});

router.get('/data_search',function(req,res, next){
  res.render('data_search');
});

router.get('/time_lookup',function(req,res, next){
  res.render('time_lookup');
});

router.get('/fin_delete',function(req,res, next){
  res.render('fin_delete');
});


module.exports = router;


