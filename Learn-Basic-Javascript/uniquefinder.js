/*
=============
UNIQUE FINDER
=============
Name :_____________
[INSTRUCTIONS]
uniqueFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn array yang berisi setiap kata yang ditemukan dalam kalimat.
Tidak boleh ada kata yang berulang, dan besar kecil dari kata tidak dianggap.
Sehingga, Hello dan HELLO di anggap kata yang sama.
Function harus mereturn string "NO WORD" jika di kalimat tersebut tidak ditemukan kata apapun.

[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
kata unik: saya, dan, suka, makan, nasi
output: ['saya', 'dan', 'suka', 'makan', 'nasi']

DILARANG MENGGUNAKAN SPLIT, INDEXOF, INCLUDES

*/

/*
*/

function uniqueFinder(sentence) {
  if(sentence === '') return "NO WORDS";
  let word = [];
  let str = '';
  for (let i = 0; i < sentence.length; i++) {
    if(sentence[i]!== ' ') {
      str += sentence[i].toLowerCase();
    }else {
      word.push(str);
      str = '';
    }
  }
  word.push(str)
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    let isDuplicate = false;
    if(i-1 === undefined) {
      arr.push(word[i])
    }else {
      for (let j = i-1; j >= 0; j--) {
        if(word[i] === word[j]) {
          isDuplicate = true;
        }
      }
      if (isDuplicate === false) {
        arr.push(word[i])
      }
    }
  }
  return arr
}

console.log(uniqueFinder('hello black dragon and hello red dragon')); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder('hello HELLo hEllO hlloe')); // ['hello', 'hlloe']
console.log(uniqueFinder('john is coding and he is coding')); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
console.log(uniqueFinder('')); // 'NO WORDS'