$('#login').click(function(){
  $.ajax({
    type:"POST",
    url:"login2.njs",
    data:{
      email:$('input[name="email"]') .val(),
    },
    success:function(res){
      console.log(res);    
      localStorage.setItem('name',res);
      localStorage.setItem('flag_name','0');
    },
    error:function(){
      console.log('error');
    },
});

});
