/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    function reverseString(str) {
        if (str === "")
          return "";
        else
          return reverseString(str.substr(1)) + str.charAt(0);
    }

    var areverse = s.split(' ');
    kata = []
    for (var i=0; i<areverse.length; i++) {
         kata.push(reverseString(areverse[i]))
    }
    
    
    return kata.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"))