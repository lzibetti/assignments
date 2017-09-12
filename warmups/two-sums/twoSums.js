//Write a function where given two int values, it will return their sum. Unless the two values are the same, then return double their sum.
//
//function sumDouble(a, b){
//
//}
//
//sumDouble(1, 2) // 3  
//sumDouble(3, 2) // 5  
//sumDouble(2, 2) // 8 

function twoSums(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 2;
    }
    return num1 + num2;
}
console.log(twoSums(3, 3));


// higher order functions, are existing functions created to reduce coding effort

// var names = ["Ben", "Nate", "John", "Rachel", "Zoe", "Ezra", "Nova", "Evelyn"];

// var filter = function(arr){
//   var output = [];
//   for(var i = 0; i < arr.length; i++) {
//     if (arr[i].length === 4) {
//       output.push(arr[i]);
//     }
//   }
//   return output;
// };
// console.log(filter(names));

// filter, creates a new array based on specified conditions that resolve as Boolean
// names.filter(function(currentName) {
// names.filter(function(currentName, index) {  // use modulo to access the index
  // return currentName.length === 4;
  // return index%2 === 0;  // return index%2 !== 0; gives the odd index
// });

// reduce, creates a new array with specified conditions 
// var nums = [2, 4, 8, 1, 9, 7];
// var nums = function(arr){
//   var output = [];
//   for(var i = 0; i < arr.lenght; i++) {
//     if (arr[i].lenght === 4) {
//       output.push(arr[i]);

// nums.reduce(function(total, currentNumber) {
//   return total + currentNumber;
// }, 0);

// map
// var nums = [2, 4, 8, 1, 7];
// var numbs = function(arr){
//   var output = [];
//   for(var i = 0; i < arr.length; i++) {
//     output.push(arr[i] * 2);
//   }
//   return output;
// }
// console.log(numbs(nums));

// nums.map(function(currentValue) {
//   return currentValue * 2;
// });
// ////////////////////////////////////////////////////////////

// var nums = [2,5,8,3,4];



// names.filter(function(currentName, index){
//   return index%2 !== 0;
// })

// var sum = function(arr){
//   var output = 0;
//   for(var i = 0; i < arr.length; i++){
//     output+= arr[i];
//   }
//   return output;
// }

// console.log(sum(nums));

// nums.reduce(function(total,currentNumber){
//   return total + currentNumber;
// })

// var map = function(arr){
//   var output = [];
//   for(var i = 0; i < arr.length; i++){
//   var newValue = arr[i] * 2
//     output.push(newValue);
//   }
//   return output
// }

// console.log(map(nums));

// console.log(nums.map(function(currentValue){
//   var newValue = currentValue * 2;
//   return newValue;
// }))

// console.log(nums);
