var star='';
var num = 5;

for (var i=1; i<num*3; i++) {
    //TOP
    for (var j=i; j<num*3-1; j++) {
        star+=' ';
    }
    for (var k=1; k<i*2; k++) {
        if(i<=num) {
            star+='*';
        //Middle
        } else if(i>num&&i<num*2) {
            for (l=1; l<=k/(num*2); l++) {
                star+=' ';
            }
        } else if(k<num*2) {
                star+='*';            
        }
        //BOTTOM
        else {
            for (b=1; b<k/(num*4-2); b++) {
                star+=' '
            }
        }
    }
    //Middle
    if (i>num&&i<num*2) {
        for(a=i*2; a<num*4-1; a++) {
            star+='*';
        }
    } 
    //Bottom
    else if(i>=num*2&&i<num*3) {
        for (var c=1; c<num*2; c++) {
            star+='*'
        }
    }
    star+='\n';
}
console.log(star);