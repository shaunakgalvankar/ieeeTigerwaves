var express=require('express')

var app=express();
//
var MongoClient = require('mongodb').MongoClient;




//set the template engine to ejs
app.set('view engine','ejs');

//express middleware so that we dont have to write a route for every stylsheet linked to an html file.
app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
  res.render('landingpage');
});

app.get('/home',function(req,res){
  res.render('homepage');
});

app.get('/home/committee',function(req,res){
  res.render('committee');
});

app.get('/home/newsletter',function(req,res){
  res.render('newsletter');
});

app.get('/home/mentorship',function(req,res){
  res.render('mentorship');
});

//listen on the declared port

app.listen(3000);
