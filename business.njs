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

connection.query('select money from sign_up where ?', {username: 'store'}, (err, res) => {
  var current = parseInt(res[0].money);
  var change_money=parseInt(param.money);
  console.log(current-change_money);
  connection.query('update sign_up set money = ? where username = ?', [current - change_money, 'store'] , () => {
    connection.end();  
  });
});
connection.query('select money from sign_up where ?', {username: param.username }, (err, res) => {
  var current_user = parseInt(res[0].money);
  var change_money=parseInt(param.money);
  connection.query('update sign_up set money = ? where username = ?', [current_user + change_money, param.username] , () => {
    connection.end();
  });
});
