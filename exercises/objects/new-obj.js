//  Objects
// let person = {
//     gender: "male",
//     name: "Bobo",
//     age: 23,
//     isMarried: true,
//     children: [
//         {name: "Sam", age: 2},
//         {name: "Ham", age: 5}
//     ],
//     talk: ()=> "hello" //a function inside of an object becomes a method
// };

// console.log()

//Constructors
const ask = require("readline-sync");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}



let peopleList = [];
while (true) {
    if(ask.question("See 'list' or 'add' new person? ") === "list"){
        console.log(peopleList);
    } else {
        let newPerson = new Person(ask.question("Name: "), ask.question("Age: "));
        console.log(newPerson);
        peopleList.push(newPerson)
    }
}
let name = ask.question("enter name: ");

// console.log("name");