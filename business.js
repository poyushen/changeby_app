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
    }
  });
});

function setQRCode(qr) {
  qrcode = qr;
}

window.setQRCode = setQRCode;
