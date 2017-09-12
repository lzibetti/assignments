var readline = require("readline-sync");
var num1 = parseInt(readline.question("Please enter 1st num "));
var num2 = parseInt(readline.question("Please enter 2nd num "));
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
    console.log("The resulting addition is ", result);
} else if (operation === "sub") {
    var result = sub(num1, num2);
    console.log("The resulting subtraction is ", result);
} else if (operation === "mul") {
    var result = mul(num1, num2);
    console.log("The resulting multiplication is ", result);
} else if (operation === "div") {
    var result = div(num1, num2);
    console.log("The resulting division is ", result);
}
