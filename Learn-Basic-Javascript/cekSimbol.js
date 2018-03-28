function cekSimbol(word) {
    var a='';
    for (i=0; i<word.length; i++) {

        var lower=word[i].toLowerCase();
        var upper=word[i].toUpperCase();
        // 
        if(upper!=lower || lower.trim()==='') {
            a+=true;
        }else {
            a+=false;
        }
         
        // }else {
        //     a+='false,';
        // }
        // if(a='falsetrue,truefalse,falsetrue') {
        //     a+='true';
        // } else {
        //     a+='false';
        // }
    }

    return a
}
console.log(cekSimbol('++A+=d++z=')); //true,false,false

//word='++a+=d++z=';
//console.log(word.length)