var user;
user=localStorage.getItem("name");
console.log(user);
$.ajax({
  type:"POST",
  url:"process.njs",
  data:{
    user:user
  },
  success:function(receive_data){
    console.log(receive_data);
    localStorage.setItem('user_money',receive_data);
  },
  error:function(){
    console.log('err');
  },
});
