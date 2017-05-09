#!/usr/local/bin/node
var querystring = require('querystring');
var param = querystring.parse(process.env.QUERY_STRING);
var mysql = require('mysql');
console.log('Content-type" text/html; charset=utf-8\n');

var connection=mysql.createConnection({
  host: 'localhost',
  user: 'groupl',
  password: '1234',
  database: 'uidd2017_groupL',
});

connection.connect();
console.log('test');
connection.query('select money from sign_up where ?',{username: 'poyushen'},(err,res)=> {
  var remainder = parseInt(res[0].money);
  console.log(remainder);
  if(!err){
    console.log(remainder);
  }
  connection.end();
  if(err){
    throw err;
    console.log('error');
  }
});
