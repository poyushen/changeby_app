$('#login').click(function(){
  $.ajax({
    type:"POST",
    url:"login.njs",
    data:{
      email:$('input[name="email"]') .val(),
      pwd:$('input[name="password"]').val(),
    },
    success:function(msg){
      if(msg == 1){
        window.location.href= "http://luffy.ee.ncku.edu.tw/~poyushen/profile";
      }
      else{
        document.getElementById("warn").innerHTML="輸入資料錯誤";
 
      }
    },
    error:function(){
      console.log('error');
    },
  
  });

});
