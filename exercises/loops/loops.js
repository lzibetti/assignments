// Function to process input and print each letter individualy
//var rl = require("readline-sync");
//var input = rl.question("Type your favorite phrase? ");
//function singleChar(str){
//    var strHold = str.split("");
//    for(var i = 0; i < str.length; i++){
//      console.log(strHold[i]);
//    }
//    return strHold;
//}
//console.log(singleChar(input));

// Function to process input, find given char. Return char if not found in input
//var rl = require("readline-sync");
//var answer = rl.question("Type your favorite phrase? ");
//var singleChar = rl.question("Type a character you want me to find! ");
//var position = "";
//var foundOne = 0
//function findChar(str) {
//    for (var i = 0; i < str.length; i++) {
//        if (singleChar === str[i]) {
//            position = str.indexOf(str[i]);
//            foundOne = 1;
//            return singleChar;
//        }
//    }
//    return str;
//}
//findChar(answer);
//if (foundOne === 1) {
//    console.log(singleChar + " is found at position, #" + position + " in the string.")
//} else {
//    console.log("Cannot find " + singleChar + " in the phrase " + answer);
//};

//Function processes array of numbers, end process when 42 found and inform user
//function smallArray() {
//    var num = document.getElementById("numArray").value;
//    document.getElementById("output").innerHTML = respond(num);
//    document.getElementById("numArray").value = "";
//
//}
//function respond(num) {
//    var echo = "I don't think " + num + " is your favorite number?";
//    var response = "";
//    if (document.getElementById("numArray").value != 42) {
//        response += echo + "<br>";
//        return response;
//    } else {
//        document.getElementById("clear").style.display = "none";
//        return num + " is the best number!! GO HOME";
//    }
//};

// Function processes array to find smallest number
var rl = require("readline-sync");
var smallArray = [];
var count = 0;
while (count < 10) {
    smallArray.push(rl.question("Enter any number, press enter "));
    count++;
};
function findSmallest(arry){
    var temp = arry[0];
    for(var i = 0; i < arry.length; i++){
            if(arry[i] < temp){
                temp = arry[i];
            } 
        }
        return temp + " is the smallest number in the array!";
};
console.log(findSmallest(smallArray));
