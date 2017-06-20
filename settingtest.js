$('#change').click(function(){
  $.ajax({
    type:"POST",
    url:"setting.njs",
    data:{
      username:$('input[name="username"]').val(),
      pwd:$('input[name="pwd"]').val(),
      pwd1:$('input[name="pwd1"]').val(),
    },
    success:function(msg){
      if(msg == 1){
        window.location.href= "http://luffy.ee.ncku.edu.tw/~poyushen/login_main";
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
