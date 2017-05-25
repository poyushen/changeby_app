 $.ajax({
      url:'record2.njs',
      success:
      function(data)
      {
      $("#data").html(data);
            /*console.log(data[0]);  /*測試*/
 /*           localStorage.setItem("reco",data[0]);
            var j = 2;
            for(var i = 0; i < data[0] ;i++)
            {
            localStorage.setItem("recordrowy[i]",data[j]+data[j+1]+data[j+2]+data[j+3]);
            j = j + 5 ;
            
            if(data[j+1]=="\n")
            {
            localStorage.setItem("recordrowm[i]",data[j]);
            j = j + 2 ;
            }
            else if(data[j+2]=="\n")
            {
            localStorage.setItem("recordrowm[i]",data[j]+data[j+1]);
            j = j + 3 ;
            }

            if(data[j+1]=="\n")
            {          
            localStorage.setItem("recordrowd[i]",data[j]);
            j = j + 2 ;
            }
            else if(data[j+2]=="\n")
            {
            localStorage.setItem("recordrowd[i]",data[j]+data[j+1]);
            j = j + 3 ;
            }
            
            if(data[j+1]=="\n")
            {
            localStorage.setItem("recordrowh[i]",data[j]);
            j = j + 2 ;
            }
            else if(data[j+2]=="\n")
            {
            localStorage.setItem("recordrowh[i]",data[j]+data[j+1]);
            j = j + 3 ;
            }
            
            if(data[j+1]=="\n")
            {
            localStorage.setItem("recordrowmin[i]",data[j]);
            j = j + 2 ;
            }
            else if(data[j+2]=="\n")
            {
            localStorage.setItem("recordrowmin[i]",data[j]+data[j+1]);
            j = j + 3 ;
            }
            if(data[j+1]=="\n")
            {             
            localStorage.setItem("recordrownt[i]",data[j]);
            j = j + 2 ;
            }
            else if(data[j+2]=="\n")
            {
            localStorage.setItem("recordrownt[i]",data[j]+data[j+1]);
            j = j + 3 ;
            }


            }
            j = 2;
*/
console.log('a');
      },
      error:
      function()
      {
            console.log('err');
      },

 });

