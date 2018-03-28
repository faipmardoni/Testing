/*
===========================
Initial Grouping Descending
==========================
[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.
[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output: 
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!
RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort 
*/

function initialGroupingDescending(studentsArr) {

  for (let i = studentsArr.length-1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if(studentsArr[i][0] >= studentsArr[j][0]) {
        let temp = studentsArr[i];
        studentsArr[i] = studentsArr[j];
        studentsArr[j] = temp;
      }
    }
  }
  let arr = [];
  let arrAbjad = [];
  let patokan = studentsArr[0][0];
  for (let i = 0; i < studentsArr.length; i++) {
    if(patokan === studentsArr[i][0]) {
      if(arrAbjad[0] !== patokan) {
        arrAbjad.push(studentsArr[i][0])
        arrAbjad.push(studentsArr[i]);
      }else {
        arrAbjad.push(studentsArr[i]);
      }
    }else {
      arr.push(arrAbjad);
      arrAbjad = [studentsArr[i][0]];
      arrAbjad.push(studentsArr[i]);
      patokan = studentsArr[i][0];
    }
  }
  arr.push(arrAbjad);
  return arr
}
console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
Rock', 'Stone', 'Brick', 'Rocker', 'Sticker
Stone', 'Rock', 'Brick', 'Rocker', 'Sticker
Stone', 'Sticket', 'Rocker', 'Rock', 'Brick

[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/