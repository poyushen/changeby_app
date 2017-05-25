$.ajax({
url:'record2pp.njs',
success:
function(data)
{
  $("#data").html(data);
  console.log('a');
},
error:
function()
{
console.log('err');
},

});
                                           
