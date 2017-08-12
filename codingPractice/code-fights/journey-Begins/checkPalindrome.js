function checkPalindrome(inputString) {
  var revr = inputString.split("").reverse().join("");
  if(revr === inputString) {
    return true;
  }
  return false;
}
console.log(checkPalindrome('aakbkaa'));


