<?php
  $username;
  $password;
  $email;
  $year;
  $month;
  $day;
  $card;
  mysql_connect("localhost","groupl","1234");
  mysql_select_db("uidd2017_groupL");
  mysql_query("set names utf8");
  $data=mysql_query("select * from sign_up where username='poyu'");
  
  $rs=mysql_fetch_row($data);
  echo "$data <br> $rs <br> $rs[0] <br> $rs[1]";
  
  $rs1=mysql_fetch_row($data);
  echo "<br> $rs1[0] <br> $rs1[1]";
?>
