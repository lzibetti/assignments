var ask = require('readline-sync');  
var letsPlay = "y";
var fName = "";
var lName = "";
var flName = "";
var age = 0;
var line = "";
var startIdx = 0;

console.log('Hello! My name is Stag. Help me get to know you!\n');  

fName = ask.question('What is your first name? ');
lName = " " + ask.question("and your last name? ");
flName = fName.concat(lName);

console.log("Sweet! It's a pleasure to meet you " + fName.toUpperCase() + ".\n");

age = ask.question("Well, I'm 289421389245 milliseconds old (9.17 years in human terms) How old are you? ");

console.log("\n");
console.log("Awesome. I now know your name is " + flName + " and you're " + age + " years old. \n");

line = ask.question("Tell me a little about yourself.\nI'll try to remember and repeat it back to you. ");

function longStr(word) {
    if (word.length > 20){
        return word.substr(word.length / 2, word.length);
    }
    return "Here is what you wrote in it's entriety " + word;
}

console.log("The info you typed is " + line.length + " characters long.\n");
console.log(longStr(line));

while(letsPlay === "y") {
    startIdx = line.length;
    startIdx = ask.question("Would you like to start at a different point from the info you provided. Choose a number between [0-" + startIdx + "]: ")
    console.log(line.substr(startIdx, line.length))
    if (letsPlay === "y") {
        console.log(line);
        letsPlay = ask.question("Type [y] to continue with a different range, [q] to quit.");
        } else letsPlay = "n";
}
console.log("Nice to have met you.");
