// count number of each letter in phrase
// get an input string
//var readline = require("readline-sync");
//var stringArr = readline.question("Please enter a phrase . . . ").toLowerCase;
//var letterCount = {};
//
//function count(array) {
//    for (var i = 0; i <= array.length; i++) {
//        
//    }
//}
//
//console.log(count(stringArr);

// count how many times each letter is used in the string
// use an empty object to keep count of each letter
            
//            
//            
function frequency(str) {
    var obj ={};
    var noDupes = "";
    for (var i= 0; i < str.length; i++) {
//             obj[str[i]] = obj[str[i]] +1 || 1;
        if (obj[str[i]] === undefined) {
            obj[str[i]] = 1;
            noDupes += str[i];
        } else {
            obj[str[i]] ++;
        }
    }
    return {
        noDupes: noDupes,
        frequency: obj
}

console.log(frequency("slimy smelly solution"));


//function frequency(str) {
//    var freq = str.split("").reduce(function (acc, current) {
//        acc[current] = acc[current] + 1 || 1;
//        return acc                                    
//    }, {};
//    return freq;
//}
    
// create array of keys
var key = Object.keys(frequency);    