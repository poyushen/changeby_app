$('#create').click(function(){
  $.ajax({
    type:"POST",
    url:'signup.njs',
    data:{username:$('input[name="username"]').val(),
          pwd:$('input[name="pwd"]').val(),
          email:$('input[name="email"]').val(),
          year:$('#year').val(),
          month:$('#month').val(),
          day:$('#day').val(),
          bank:$('input[name="bank_name"]').val(),
          bankcode:$('input[name="bank_code"]').val(),
          card:$('input[name="debit_card"]').val()
          
          },
    success:function(response){
      var check=[];

      if($('input[name="username"]').val()==''){
        document.getElementById("username_position").innerHTML="帳號名稱不可空白";
        document.getElementById("username_position").style.color="red";
        check[0]=0;
      }
      else{
        document.getElementById("username_position").innerHTML="帳號名稱";
        document.getElementById("username_position").style.color="#a87b4f";
        check[0]=1;
      }

      if($('input[name="pwd"]').val()==''){
        document.getElementById("pwd_text").innerHTML="密碼不可空白";
        document.getElementById("pwd_text").style.color="red";
        check[1]=0;
      }
      else{
        document.getElementById("pwd_text").innerHTML="密碼";
        document.getElementById("pwd_text").style.color="#a87b4f";
        check[1]=1;
      }

      if($('input[name="checkpwd"]').val()==''){
        document.getElementById("checkpwd_text").innerHTML="密碼不可空白";
        document.getElementById("checkpwd_text").style.color="red";
        check[2]=0;
      }
      else{
        document.getElementById("checkpwd_text").innerHTML="確認密碼";
        document.getElementById("checkpwd_text").style.color="#a87b4f";
        check[2]=1;
      }

      if($('input[name="email"]').val()==''){
        document.getElementById("email_text").innerHTML="email不可空白";
        document.getElementById("email_text").style.color="red";
        check[3]=0;
      }
      else{
        var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!filter.test($('input[name="email"]').val())){
          document.getElementById("email_text").innerHTML="email格式錯誤";
          document.getElementById("email_text").style.color="red";
          check[3]=0;
        }

        else{
        document.getElementById("email_text").innerHTML="Email";
        document.getElementById("email_text").style.color="#a87b4f";
        check[3]=1; 
        }
      }

      if($('#year').val()==''||$('#month').val()==''||$('#day').val()==''){
        document.getElementById("birthday_text").innerHTML="生日不可空白";
        document.getElementById("birthday_text").style.color="red";
        check[4]=0;
      }
      else{
        document.getElementById("birthday_text").innerHTML="生日";
        document.getElementById("birthday_text").style.color="#a87b4f";
        check[4]=1;
      }
      if($('input[name="bank_code"]').val()==''){
        document.getElementById("bank_code_text").innerHTML="銀行代號不可空白";
        document.getElementById("bank_code_text").style.color="red";
        check[5]=0;
      }
      else{
        document.getElementById("bank_code_text").innerHTML="銀行代號";
        document.getElementById("bank_code_text").style.color="#a87b4f";
        check[5]=1;
      }
      if($('input[name="bank_name"]').val()==''){
        document.getElementById("bank_name_text").innerHTML="戶名不可空白";
        document.getElementById("bank_name_text").style.color="red";
        check[6]=0;
      }
      else{
        document.getElementById("bank_name_text").innerHTML="戶名";
        document.getElementById("bank_name_text").style.color="#a87b4f";
        check[6]=1;
      }
      if($('input[name="debit_card"]').val()==''){
        document.getElementById("debit_card_text").innerHTML="銀行帳號不可空白";
        document.getElementById("debit_card_text").style.color="red";
        check[7]=0;
      }
      else{
        document.getElementById("debit_card_text").innerHTML="銀行帳號";
        document.getElementById("debit_card_text").style.color="#a87b4f";
        check[7]=1;
      }

      if($('input[name="pwd"]').val()!=$('input[name="checkpwd"]').val()
          || ($('input[name="pwd"]').val()=='' && $('input[name="pwd"]').val()=='')){
        document.getElementById("checkpwd_text").innerHTML="請再次確認密碼";
        document.getElementById("checkpwd_text").style.color="red"; 
        check[8]=0;
      }

      else{
        document.getElementById("checkpwd_text").innerHTML="確認密碼";
        document.getElementById("checkpwd_text").style.color="#a87b4f"; 
        check[8]=1;
        /*if($('input[name="username"]').val()!='' && $('input[name="pwd"]').val()!='' 
           && $('input[name="checkpwd"]').val()!='' && $('input[name="email"]').val()!=''
           && $('#year').val()!='' && $('#month').val()!='' && $('#day').val()!=''
           && $('input[name="bank_code"]').val()!='' && $('input[name="bank_name"]').val()!='' 
           && $('input[name="debit)card"]').val()!='' ){
  
            localStorage.setItem('key',$('input[name="username"]').val());
            window.location.href="http://luffy.ee.ncku.edu.tw/~poyushen/profile";
        }*/
      }
      for(var i=0;i<9;i++){
        
        console.log(i+":"+check[i]);
        if(check[i]==1){
          check[9]=1;
        }
        else{
          check[9]=0;
          break;
        }
      }
      if(check[9]==1){
        localStorage.setItem('key',$('input[name="username"]').val());
        window.location.href="http://luffy.ee.ncku.edu.tw/~poyushen/profile";
 
      }
    },
    error:function(){
      console.log('err');
    }
  });
});
