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

connection.query('SELECT * from sign_up',function(err,rows,fields){
  if(!err)
    console.log('solution:',rows);
  else
    console.log('error');
});
var data={
  username:param.username,
  password:param.pwd,
  email:param.email,
  year:param.year,
  month:param.month,
  day:param.day,
  bankname:param.bank_name,
  bankcode:param.bank_code,
  card:param.debit_card

};
  console.log(data);
  connection.query('INSERT INTO sign_up SET ?',data,function(err,res){
    if(err){
      console.log('error');
      throw error;
    }
});
connection.end();
