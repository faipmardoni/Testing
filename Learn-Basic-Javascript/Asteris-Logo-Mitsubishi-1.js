var star = '';
var num = 5;
//Top
for (var x=1; x<num; x++) {
    for (var y=x; y<num*3; y++) {
        star+=' ';
    }
    for (var z=1; z<x*2; z++) {
        star+='*';
    }
    star+='\n';
}

//Middle
for(var a=1; a<=num; a++) {
    for (var b=1; b<a+num*2; b++) {
        star+=' ';
    }
    for (var c=a*2; c<=num*2; c++) {
        star+='*';
    }
    star+='\n';
}

// Bottom
for(var i=1; i<=num; i++) {
    for (var j=i; j<=num; j++) {
        star+=' ';
    }
    for (var k=1; k<num*2; k++) {
        star+='*';
    }
    for (var num=1; num<i*2; num++) {
        star+=' ';
    }
    for (var o=1; o<num*2; o++) {
        star+='*';
    }
    star+='\n';
}
console.log(star);
