<?php 
mysql_connect("localhost","groupl","1234");
mysql_select_db("uidd2017_groupL");
mysql_query("set names utf8");
$data=mysql_query("select * from record where username='B'");

?>
