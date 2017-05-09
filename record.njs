#!/usr/local/bin/node

var fs = require('fs');
var qs = require('qs');
var param = qs.parse(fs.readFileSync('/dev/stdin','utf-8'));

var mysql = require('mysql');

console.log('Content-type:text/html; charset = utf-8\n');

var connection = mysql.createConnection
({
	host:'localhost',
	user:'groupl',
	password:'1234',
	database:'uidd2017_groupL'
});

connection.connect();

var i = 0;

connection.('SELECT * from record',function(err,rows,fields){
	if(!err)
		for(var i = 0, i < rows.length, i++)
		{
			console.log('<div id="data_packet">');
			console.log('<div id ="data_date">');
			console.log('<p id ="data_word_date">',rows[i].date_year,'/',rows[i].date_month,'/',rows[i].date_day,'</p>');
			console.log('</div>');
			console.log('<div id ="data_time">:');
			console.log('<p id ="data_word_time">',rows[i].time_hour,':',rows[i].time.minute,'</p>');
			console.log('</div>');
			console.log('<div id ="data_NT">');
			console.log('<p id ="data_word_NT">',rows[i].NT,'</p>');
			console.log('</div>');
			console.log('</div>');
		}		
	else
		console.log('error');
 });
 
  
 connection.end();

