var express=require('express');
var router=express.Router();


router.get('/',function(req,res){
  res.render('landingpage');
});

router.get('/home',function(req,res){
  res.render('homepage');
});

router.get('/home/committee',function(req,res){
  res.render('committee');
});

router.get('/home/newsletter',function(req,res){
  res.render('newsletter');
});

router.get('/home/mentorship',function(req,res){
  res.render('mentorship');
});

router.get('/home/wie',function(req,res){
  res.render('wie');
});

router.get('/home/iv',function(req,res){
  res.render('iv');
});

module.exports=router;
