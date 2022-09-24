

var arrDataSort= [234, 43, 55, 63,  5, 6, 235, 547];

   
 
  for (let index = 0; index < (arrDataSort.length-1); index++) {
        
      
        for (let indexData = 0; indexData < (arrDataSort.length-1); indexData++) {
            //Perulangan pertama untuk looping data untuk membandingkan antara perulangan pertama dan kedua
                        

            if (arrDataSort[indexData] > arrDataSort[indexData+1]) {
                /* Statement if Jika angka pertama lebih besar daripada angka selanjutnya
                 Jika kondisi benar maka ubah posisi number */

                let temp = arrDataSort[indexData+1];
                arrDataSort[indexData+1] = arrDataSort[indexData];
                arrDataSort[indexData] = temp;
            }
            
        }
        
    }

   for (let x in arrDataSort)  {
        //Show data sorting array

        const sortingResult = arrDataSort[x];
        console.log(sortingResult);
   }


