function palindrome(num) {
  str = num.toString();
  if (str.length <= 1) return true;
  if (str[str.length-1] === str[0]) {
    return palindrome(str.substring(1,str.length-1))
  }else {
    return false;
  }
}

function angkaPalindrome(num) {
  num++
  if(palindrome(num)===true) return num;
  return angkaPalindrome(num++)
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1040)); // 1001