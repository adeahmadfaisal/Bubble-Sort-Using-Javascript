let numberArray = [234, 43, 55, 63, 5, 6, 235, 547];

for (let index = 0; index < numberArray.length - 1; index++) {
  for (let itemIndex = 0; itemIndex < numberArray.length - 1; itemIndex++) {
    // The first loop for looping data to compare between
    // the first and second iterations

    if (numberArray[itemIndex] > numberArray[itemIndex + 1]) {
      // If function If the first number is greater than the next number
      // If the condition is true then change the position of number
      let tempNumber = numberArray[itemIndex + 1];
      numberArray[itemIndex + 1] = numberArray[itemIndex];
      numberArray[itemIndex] = tempNumber;
    }
  }
}

console.log("Input", numberArray);
console.log("Output", numberArray);
