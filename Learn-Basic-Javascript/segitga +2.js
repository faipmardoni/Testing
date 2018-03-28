function rowSumOddNumbers(n) {
  let angka = 1;
  let star = '';
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n-1; j++) {
        star += '  ';
    }
    for (let j = 0; j < i * 2; j++) {
      if (j % 2 !== 0) {
        if(angka < 10) {
          star += angka+'  ';
        }else {
          star += angka+' ';
        }
        angka += 2;
      }else {
        star += ' ';
      }
    }
    star+='\n';
  }
  return star;
}

console.log(rowSumOddNumbers(8));