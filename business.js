var qrcode;
$('#check').click(function(){
  $.ajax({
    type:"POST",
    url:"business.njs",
    data:{
      money: $('input[name="money"]').val(),
      username: qrcode,
    },
    success:function(msg){
      console.log(msg);
      localStorage.setItem("store_remainder",msg);
      location.reload();
   }
  });
});

function setQRCode(qr) {
    qrcode = qr;
}

window.setQRCode = setQRCode;
