#!/usr/local/bin/node

var fs = require('fs');
var qs = require('qs');
var param = qs.parse(fs.readFileSync('/dev/stdin', 'utf-8'));

console.log('Content-type:text/html; charset=utf-8\n');

var mysql=require('mysql');
var flag=0;

var connection=mysql.createConnection({
  host:'localhost',
  user:'groupl',
  password:'1234',
  database:'uidd2017_groupL'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//var email = "weichen@gmail.com"
//var pwd = "1234"
//var username = "weichen"
//var bankcode1 = "1111"

connection.query('select password from sign_up where?',{username:param.username},(err,res) =>{
  if(res[0].password==param.pwd){
    var sql = "UPDATE sign_up SET password = ? WHERE username = ?";
    flag=1;
    connection.query(sql, [param.pwd1, param.username], function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
      console.log(flag);
    });
  } else {
    flag=0;
    console.log(flag);
  }
   connection.end();
});

