function sorting(number) {
    for(var i=0; i<number.length; i++) {
        for(var j=i; j<number.length; j++) {
            if(number[i]>number[j]) {
                var temp=number[i];
                number[i]=number[j];
                number[j]=temp;
            }
        }
    }return number
}

console.log(sorting([3,1,4,5,2]));