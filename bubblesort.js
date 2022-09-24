var arrDataSort = [234, 43, 55, 63, 5, 6, 235, 547];

for (let index = 0; index < arrDataSort.length - 1; index++) {
  for (let indexData = 0; indexData < arrDataSort.length - 1; indexData++) {
    //The first loop for looping data to compare between the first and second iterations

    if (arrDataSort[indexData] > arrDataSort[indexData + 1]) {
      /* If" function If the first number is greater than the next number
      If the condition is true then change the position of number */

      let temp = arrDataSort[indexData + 1];
      arrDataSort[indexData + 1] = arrDataSort[indexData];
      arrDataSort[indexData] = temp;
    }
  }
}

for (let x in arrDataSort) {
  //Show data sorting array

  const sortingResult = arrDataSort[x];
  console.log(sortingResult);
}
