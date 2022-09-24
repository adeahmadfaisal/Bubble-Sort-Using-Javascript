

var arr = [234, 43, 55, 63,  5, 6, 235, 547];

    for(var i = 0; i < arr.length; i++){
       
       
      for(var j = 0; j < ( arr.length - i -1 ); j++){
         
        // Statement if Jika nilai variable lebih besar daripada nilai didepannya
        
        if(arr[j] > arr[j+1]){
           
          // Jika kondisi benar maka ubah
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
    
    console.log(arr);
   
    


