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
connection.query('SELECT money FROM sign_up WHERE ?' ,{username:'poyushen'} , (err, res) => {
  var current=parseInt(res[0].money);
  console.log(current);
  connection.end();
});
