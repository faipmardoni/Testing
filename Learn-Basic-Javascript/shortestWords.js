/*
==================================
Array Mastery: Shortest Word
==================================
Nama:________
[INSTRUCTION]
Disediakan sebuah kalimat. Function shortestWords akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan jumlah huruf paling sedikit dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan jumlah kata yang paling sedikit tersebut.
[EXAMPLE]
input (kalimat): Do you want to become a great coder.
panjang kata paling sedikit dalam kalimat: 1
output: ['a']
input (kalimat): You dont know what you have until you lose it!.
panjang kata paling sedikit dalam kalimat: 3
output: ['you', 'it!']
[CONSTRAINTS]
Dilarang menggunakan function .map/.filter/.reduce!
Diarang menggunakan regex!
/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!

function shortestWords(words) {
  // Code here
  let str = words.split(' ');
  let min = 999;
  let index = 0;
  for (let i in str) {
    if (min >= str[i].length) {
      min = str[i].length
      index = i
    }
  }
  let arrShort = []
  for (let i in str) {
    if (str[i].length === min) {
      if (arrShort.length === 0) {
        arrShort.push(str[i])
      }else if(str[i].toLowerCase() === arrShort[0].toLowerCase()){
        arrShort.shift();
        arrShort.push(str[i]);
      }else {
        arrShort.push(str[i]);
      }
    }
  }  
  return arrShort;
}

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
console.log(shortestWords('I am diligent')); // ['I']