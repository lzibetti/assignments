var readline = require("readline-sync");
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(readline.question("How many letters would you like to shift? "))

var result = "";
var alphabet ="abcdefghijklmnopqrstuvwxyz";
for (var i = 0; i < input.length; i++) {
    var currentCharIndex = alphabet.indexOf(input[i]);
    if (currentCharIndex === -1) {
        result += input[i];
        continue;
    }
    var newIndex = alphabet.indexOf(input[i]) + shift;
    if (newIndex > 25) {
        newIndex -= 26;
    }
    result += alphabet[newIndex];
}
console.log(result);