function segitigaPascal(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    let arrB = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        arrB.push(1);
      }else {
        arrB.push(arr[i-1][j-1] + arr[i-1][j]);
      }
    }
    arr.push(arrB)
  }
  
  let str = '';
  for (let i = 0; i < num; i++) {
    for (let j = i; j < num-1; j++) {
        str += '  ';
    }
    for (let j = 0; j <= i; j++) {
      if (arr[i][j] < 10) {
        str += arr[i][j] + '   '
      }else str += arr[i][j] + '  '
    }
    str += '\n';
  }
  return str;
}
console.log(segitigaPascal(9));