function sumOfPrimeDigits (numbers) {
  var arr = [];
  if (numbers.length === 0) {
    return arr;
  }
  for (var i = 0; i < numbers.length; i++) {
    var sum = 0;
    var prime = false;
    if (numbers[i]%2 !== 0) {
      if (numbers[i]%i !== 0) {
        numbers[i] = numbers[i].toString().split('');
        prime = true;
        for (var j = 0; j < numbers[i].length; j++) {
          numbers[i][j] = Number(numbers[i][j]);
          sum += numbers[i][j];
        }
      }
    }
    if (prime === true) {
      arr.push(sum);
    }
  }
  return arr
}

console.log(sumOfPrimeDigits([40, 21, 13, 12, 7, 11, 37]));
// [4, 7, 2, 10]

console.log(sumOfPrimeDigits([90, 33, 31, 18, 17, 47]));
// [4, 8, 11]

console.log(sumOfPrimeDigits([]));