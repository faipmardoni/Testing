function prima(value) {
    var prime=''
    var a='' 
      if(value>2&&value%2!==0) {
        for (var i=2; i<value; i++) {
          if(i%2!==0) {
            if(value%i===0) {
              prime+='0';
            }else {
              prime+='1';
            }
          }
        }
      } else if(value==2) {
          prime+='1';
      } else {
          prime+='0'
      }
      if (prime.indexOf("0") >= 0) {
        a+= value + ' bukan bilangan prima'
      } else {
        a+= value + ' bilangan prima'
      }
      return a;
    }
    console.log(prima(13));