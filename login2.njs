#!/usr/local/bin/node

var fs = require('fs');
var qs = require('qs');
var param = qs.parse(fs.readFileSync('/dev/stdin','utf-8'));

console.log('Content-type:text/html; charset=utf-8\n');

var mysql = require('mysql');
var flag=0;
var connection =mysql.createConnection({
  host:'localhost',
  user:'groupl',
  password:'1234',
  database:'uidd2017_groupL',
});

connection.connect();

connection.query('select username from sign_up where ?', {email: param.email}, (err,res) =>{
    console.log(res[0].username);
    connection.end();
});
