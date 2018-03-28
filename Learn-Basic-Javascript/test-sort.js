var arr =[1,15,2];
arr.sort(function(value1,value2) {return value1<value2});
console.log(arr);

var arr1 = [0,1,2,3,4];
var irisan1 = arr1.slice(1,3);
console.log(irisan1);
var irisan2 = arr1.slice(1);
console.log(irisan2);
var irisan3 = arr1.slice(2,3);
console.log(irisan3);
var irisan4 = arr1.slice(2,2);
console.log(irisan4);

var arr2 = ['buku','laptop','komputer'];
arr2.splice(2,0,'televisi');
console.log(arr2);
arr2.splice(0,2);
console.log(arr2);
arr2.splice(0,1,'majalah','koran');
console.log(arr2);

var kalimat = 'saya adalah full-stack javascript programmer!';
var kata = kalimat.split(' ');
console.log(kata);

var arr2D = [[1,2], [3,4], [5,6]];
var murid = [['Budi','SD 1 Cicayur'], ['Suci','SD 23 Beji']];

console.log(arr2D[0]);
console.log(arr2D[0][1]);
console.log(murid[1]);
console.log(murid[1][1]);

arr2D.push([7,8]);
console.log(arr2D)
arr2D[1].push(0);
console.log(arr2D)
arr2D[0].pop();
console.log(arr2D)
arr2D[2].pop();
console.log(arr2D)

