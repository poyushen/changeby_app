#!/usr/local/bin/node

var fs=require('fs');
var qs=require('qs');
var param=qs.parse(fs.readFileSync('/dev/stdin','utf-8'));

var mysql=require('mysql');
console.log('Content-type:text/html; charset=utf-8\n');

var connection=mysql.createConnection({
  host:'localhost',
  user:'groupl',
  password:'1234',
  database:'uidd2017_groupL'
});

connection.connect();
var currentmoney=1000-param.money;

connection.query("UPDATE sign_up SET money=? WHERE username=?",[currentmoney,'store'],function(err,result){
  if(err)
    throw err;
});
connection.end();
