$('#change').click(function(){
  $.ajax({
    type:"POST",
    url:"setting.njs",
    data:{
      email:$('input[name="email"]').val(),
      pwd:$('input[name="pwd"]').val(),
      username1:$('input[name="username1"]').val(),
      username:$('input[name="username"]').val(),
      bankcode:$('input[name="bank_code"]').val(), 
      bankcode1:$('input[name="bank_code1"]').val(),
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
