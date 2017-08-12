// Write a fuction that finds the biggest number in an array
[1, 2, 3, 100, 20000, 80, 3456, 35]

function biggest(array) {
return Math.max.apply(null, array);
    
}
console.log(biggest([1, 2, 3, 100, 20000, 80, 3456, 35]))


function printChar (stringChar) {
  var splitString = ''
  for (var i = 0; i <= stringChar.length; i++) {
    if (stringChar.fromCharCode(160) !== " ") {
        splitString += stringChar[i] + ', ';
    } else splitString += stringChar[i];
  }
    return splitString;
}
console.log(printChar("separate but equal"));
