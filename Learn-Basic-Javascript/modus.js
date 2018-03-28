function cariModus(arr) {
    // you can only write your code here!
    var arrModus = [];
    for (var i=0; i<arr.length; i++) { //menghitung modus dari setiap angka
        var modus=1;
        for (var j=i+1; j<arr.length; j++) {
            if(arr[i] === arr[j] && arr[i] !== arr[i-1]) {
                modus++;
            }
        }
        arrModus.push(modus);
    }
    var arrB = [];
    for(var k=0; k<arrModus.length; k++) { //menambahkan angka dan modusnya ke dalam sebuah array
        var arrA=[];
        if(arrModus[k]>1) {
            arrA.push(arr[k],arrModus[k]);
        }else {
            continue;
        }
        arrB.push(arrA);
    }
    if(arrB.length===0) {  //mengecek modus dan angka tidak ada
        return -1;
    }else if(arrB[0][1]===arr.length) { //mengecek apakah array isinya sama semua
        return -1;
    }else if(arrB.length===1) { //mengecek apakah angka modus hanya 1
        return arrB[0][0];
    }else { //mengecek apakah angka modus lebih dari 1
        for(var a=0; a<arrB.length; a++) { //menentukan modus terbesar
            for(b=0; b<arrB.length; b++) { //mensortir modus descending
                for(c=b; c<arrB.length; c++) {
                    if(arrB[b][1]<arrB[c][1]) {
                        temp=arrB[b];
                        arrB[b]=arrB[c];
                        arrB[c]=temp;
                    }
                }
            }
            return arrB[a][0];
        }
    } 
    return arrB;
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1