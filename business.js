var qrcode;
$.ajax({
  type:"POST",
  url:"business.njs",
  data:{
  },
  success:function(msg){
    console.log(msg);
    localStorage.setItem("user_remainder",msg);
  },
  error:function(){
    console.log('error');
  },
});
$('#check').click(function(){
  $.ajax({
    type:"POST",
    url:"business.njs",
    data:{
      money: $('input[name="money"]').val(),
      username: qrcode,
    },
    success:function(msg){
//      console.log(msg);
//      localStorage.setItem("user_remainder",msg);
//      location.reload();
   }
  });
});

function setQRCode(qr) {
    qrcode = qr;
}

window.setQRCode = setQRCode;
