var star='';
var num = 5;
for (var i=1; i<num*3; i++) {
    //TOP
    if(i <= num) {
        for (var j=i; j<num*3; j++) {
            star+=' ';
        }
        for (var k=1; k<i*2; k++) {
            star+='*';
        }
    //MIDDLE
    } else if (i>num && i<num*2) {
        for (var k=1; k<=i+num; k++) {
            star+=' '
        }
        for (var l=i*2; l<num*4-1; l++) {
            star+='*';
        }
    //BOTTOM
    } else {
        for (var num=i; num<num*3; num++) {
            star+=' ';
        }
        for (var o=1; o<num*2; o++) {
            star+='*';
        }
        for (var p=num*3; p<=i*2-num; p++) {
            star+=' ';
        }
        for (var q=1; q<num*2; q++) {
            star+='*';
        }
    }
    star+='\n';
}
console.log(star);