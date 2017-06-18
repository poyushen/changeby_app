$.ajax({
  type:"POST",
  url:"process.njs",
//  data:{email:input[name="email"]},
  success:function(data){
    console.log(data);
    localStorage.setItem('user_money',data);
  },
  error:function(){
    console.log('err');
  },
});
