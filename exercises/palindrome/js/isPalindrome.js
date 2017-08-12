function isPalindrome(inputString) {
    inputString = inputString.replace(/\W/g,"").toLowerCase();
    var revr = inputString.split("").reverse().join("");
    return (revr === inputString);
}

isPalindrome('aak bka!a');   // true 
isPalindrome("Star Rats!");  // true  
isPalindrome("palindrome");  // false  
isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");  // true 


module.exports = {
    isPalindrome
}