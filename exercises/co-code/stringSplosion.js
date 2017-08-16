//Given a non-empty string like "Code" return a string like "CCoCodCode".
var inputStr = "Code";
// parse the string and rebuild it to create a new string using letters from the old string
function coCode(inputString) {
    var build = "";
    var explode = [];
    for(var i = 0; i < inputString.length; i++) {
      build += inputString[i];
      explode.push(build)
    } 
    return  explode.join("");   // output the new rebuilt string
}
console.log(coCode(inputStr));  // read string into a variable
