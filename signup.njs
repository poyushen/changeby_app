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

var signup_data={
  username:param.username,
  password:param.pwd,
  email:param.email,
  year:param.year,
  month:param.month,
  day:param.day,
  bank:param.bank,
  bankcode:param.bankcode,
  card:param.card

};
  connection.query('INSERT INTO sign_up SET ?',signup_data,function(err,res){
    if(err){
      console.log(err);
      throw error;
    }

});

connection.end();
