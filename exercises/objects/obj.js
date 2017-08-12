//// Objects
//// What is it?
//// A more specific array, an array w/ categories
//
var user = {
    firstName: "Laius",  // both this and the key below are allowed
    "first name": "LS",  // this will have to be addressed with the key in quotes
    lastName: "Zibettti",
    age: 58,
    isAwesome: true
}

//console.log(user["blah"]); // prints out as undefined, there is no "blah" property
// for loop to handle objects
for (var property in user) {
    console.log('user.${property} = ' + user[property]);
}

//user["isMarried"] = true // equivalent to
//user.isMarried = true 

//var obj = {a: 1, b: 2, c: 3};
//    
//for (var prop in obj) {
//  console.log(`obj.${prop} = ${obj[prop]}`);
//}