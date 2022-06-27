var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// 문제1 
// 문제3
// 문제4
// 문제5
// 문제7 당기세요
// 문제10 머리부터
// 문제11 
// 문제13
// 문제16
// 문제17
// 문제18
// 문제19


// public을 정적인 파일으로 하겠다
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
// app.get('/',function(req,res){
//     res.send('Hello home page');
// })
// app.get('/login',function(req,res){
//     res.send("login!");
// })
app.use('/users', usersRouter);

module.exports = app;
