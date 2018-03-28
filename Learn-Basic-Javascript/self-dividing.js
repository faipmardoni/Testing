var selfDividingNumbers = function(left, right) {
    var number = [];
    for (var i=left; i<=right; i++) {
        number.push(i);
    }
    var dividing = []
    for (var j=0; j<number.length; j++) {
        var a = number[j].toString();
        var b = a.split('')
        dividing.push(b)
    }
    var angka = []
    for (var k=0; k<number.length; k++) {
        num = []
        num.push(number[k])
        for (var l=0; l<dividing[k].length; l++) {
            if(number[k]%dividing[k][l]===0) {
                num.push(true);
            }else {
                num.push(false);
            }
        }
        angka.push(num)
    }
    var output = [];
    for (var m=0; m<angka.length; m++) {
        if(angka[m].indexOf(false)==-1) {
            output.push(angka[m][0])
        }
    }
    return output;
};

console.log(selfDividingNumbers(1,22));