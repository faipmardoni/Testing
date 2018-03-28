// PSEUDECODE

// Declare function hitungHuruf with parameter kata then
//   store arr with result of function kata.split with paramater space
//   store duplicate with empty array
//   store max with 0
//   store index with any value
//   for store i in arr do
//     store counter with 0
//     for store j with 0 and j < arr[i].length do
//       for store k = j + 1 and k < arr[i].length do
//       if arr[i][j] = arr[i][k] then
//         add counter by 1
//         break
//       end if
//       add k by 1
//       end for
//     add j by 1 
//     end for
//     add duplicate by counter
//   end for
//     if duplicate[i] > max then
//       set max = duplicate[i]
//       set index = i
//     end if
//   return arr[index]
// End function

function hitungHuruf(kata) {
  // you can only write your code here!
  let arr = kata.split(' ');
  let duplicate = [];
  let max = 0;
  let index;
  for (let i in arr) {
    let counter = 0;
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = j+1; k < arr[i].length; k++) {
          if (arr[i][j] === arr[i][k]) {
            counter++;
            break;
          }
        }
    }
    duplicate.push(counter);
    if (duplicate[i] > max) {
      max = duplicate[i];
      index = i;
    }
  }
  return arr[index]
}


// TEST CASES
console.log(hitungHuruf('Today is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau

// ALGORITMA

// 1. Split menjadi kata-kata yang terpisah
// 2. Bikin wadah untuk menampung counter di tiap kata dengan nilai array kosong
// 3. Melakukan perulangan pada setiap kata
//   3a. Bikin counter untuk menampung jumlah huruf dengan nilai awal 0
//   3b. Bikin 2 perulangan untuk mengecek huruf apakah sama huruf setelahnya
//   3c. Cek apakah ada huruf yang sama jika iya
//   3d. Tambahkan 1 pada counter
//   3e. Masukkan nilai counter di wadah

// Bandingkan banyaknya huruf yang sama pada setiap kata
// 4. Bikin wadah untuk menampung nilai max dengan nilai awal 0
// 5. Bikin wadah untuk menampung index kata dengan huruf berulang terbanyak dengan nama index
// 5. Melakukan perulangan pada setiap nilai di emberMemori sebagai i
//   5a. nilai di emberMemori bandingkan dengan nilai max, jika lebih besar jalankan 5b dan 5c
//   5b. nilai max isi dengan nilai emberMemori sekarang
//   5c. nilai index isi dengan i

// tampilkan kata dengan jumlah huruf terbanyak
// 6. Tampilkan kalimat yang di-split tadi index ke `index`