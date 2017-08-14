var readline = require("readline-sync");
var name = readline.question("What is your name? ");
var playGame = "";

while (name === "") {
    name = readline.question("Please enter a name: ");
}

console.log("Hi " + name + " you have the following options in this game!");
console.log("Put hand in the wall");
console.log("Find the key");
console.log("Open the door");

while (playGame = readline.question("Play the game? t/f: ") === "t") {
    var doorKeyFound = "n";
    var doorLocked = "y";
    var tries = 0;
    while (((doorLocked == "y") && (tries < 2)) && (doorKeyFound == "n")) {
        tries++;
        //    var handInHole = "false";
        var handInHole = readline.question("Did you put your hand in hole? y/n: ");

        if (handInHole === "y") {
            console.log("It is a good day to die!!!");
            break;
        } else if (doorLocked = "y") {
            console.log("Door is locked! ");
            doorKeyFound = readline.question("Did you find the key? y/n: ");
        } else {
            if (doorKeyFound === "y") {
                doorLocked = "n";
            }
            break;
        }
        if (tries === 2) {
            console.log("key not found in time!!! ")
        } else {
            console.log("Free at last, free at last, I'm free at last!!!")
        };
    }
}
