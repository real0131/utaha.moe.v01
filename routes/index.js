var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req,res){
  res.render('index',{title: 'Utaha'});
});

router.get('/about',function(req,res){
  res.render('about',{title: 'about'});
});

router.get('/projects',function(req,res){
  res.render('projects',{title: 'projects'});
});

router.get('/donate',function(req,res){
  res.render('donate',{title: 'donate'});
});

module.exports = router;
