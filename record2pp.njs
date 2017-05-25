#!/usr/local/bin/node

var mysql=require('mysql');

var connection = mysql.createConnection
({
  host:'localhost',
  user:'groupl',
  password:'1234',
  database:'uidd2017_groupL'
});

connection.connect();
console.log("Content-type: text/html; charset='utf-8'\n")

connection.query('select * from record where ?',{username: 'B'}, (err,res) => {

var rowcount = res.length;
// console.log(res.length);
if(rowcount>5)
{
  rowcount = 5;
}
else
{
  rowcount=rowcount;
}


for(var i=0;i<rowcount;i++)
{
  console.log('<div id="data_packet">');
  console.log('<div id ="data_date">');
  console.log('<p id ="data_word_date">'+res[i].dateyear+'/'+res[i].datemonth+'/'+res[i].dateday+'</p>');
  console.log('</div>');
  console.log('<div id ="data_time">');
  console.log('<p id ="data_word_time">'+res[i].timehour+':'+res[i].timeminute+'</p>');
  console.log('</div>');
  console.log('<div id ="data_NT">');
  console.log('<p id ="data_word_NT">'+res[i].NT+'</p>');
  console.log('</div>');                                                                                                                                         console.log('</div>');
}
connection.end();
});
                      
