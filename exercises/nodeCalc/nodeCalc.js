var readline = require("readline-sync");
var num1 = parseInt(readline.question("Please enter 1st num!"));
var num2 = parseInt(readline.question("Please enter 1st num!"));
var operation = readline.question("Enter operation ('add', 'sub', 'mul', or 'div'): ");


function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}


if (operation === "add") {
    var result = add(num1, num2);
} else if (operation === "sub") {
    var result = sub(num1, num2);
} else if (operation === "mul") {
    var result = mul(num1, num2);
} else if (operation === "div") {
    var result = div(num1, num2);
}

switch (operation) {
    case "add":
        result = (num1, num2);
        break;
                 }
    case "sub":
        result = (num1, num2);
        break;
                 }
    case "mul":
        result = (num1, num2);
        break;
                 }
    case "div":
        result = (num1, num2);
        break;
                 }
    default
console.log("The result is ", result);
