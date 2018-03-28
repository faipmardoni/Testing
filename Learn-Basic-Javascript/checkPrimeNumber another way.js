/* MENAMPILKAN BILANGAN PRIMA */

function bilanganPrima(angka) {
    var bilPrima='';
    var prima=true
    for (var i=2; i<=angka; i++) {
        if(i>=2){
            var prima=false;
            for(var j=2; j<i; j++) {
                if(i%j==0){
                    prima=true;
                }
            }
        }
        if(prima===false) {
            bilPrima+=i+','
        }
    }
    return bilPrima;
}
console.log(bilanganPrima(500));