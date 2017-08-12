// gobal scope is universal
// lexical scope is confined to a specific context
//"use strict";

// old es5 method to create funtion
//let directory = {
//    names: ["Henry", "Sam", "Harry", "Zoe", "Jay"],
//    filtered: [],
//    filterNames : function(){
//        var self = this;
//        this.names.forEach(function(name) {
//            if(name.length > 3) {
//                self.filtered.push(name);
//            }
//        })
//    }
//}


// es6 function creation using the =>, keyword function dropped and this can be used through out without having to set it to a local this. If creating a method use es5 method
//let directory = {
//    names: ["Henry", "Sam", "Harry", "Zoe", "Jay"],
//    filtered: [],
//    filterNames : function() {
//        this.names.forEach(name => {
//            if(name.length > 3) {
//                this.filtered.push(name);
//            }
//        })
//    }
//}
//
//directory.filterNames();
//console.log(directory.filtered);

// setting default values in es6
//var Person = function(name = "John", age = 0, occupation = "missing") {
//    this.name = name;
//    this.age = age;
//    this.occupation = ocupation;
//}
//Person.prototype.greeting = function() {
//    console.log("Hello");
//}

// react classes and temporal litterals
class Person {
    constructor(name = "Joe", age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation;
    }
    greeting() {
        console.log("Hi, I am ", + this.name)
    }
    goodbye() {
        console.log("Bye");
    }
    intro() {
        console.log(`Hi, my name is  ${this.name} and \nI am ${this.age} years old. \nI do ${this.occupation} for a living."`)
    }
}
"Hi, my name is " + this.name + " and I am " + this.age + " years old. I do " + this.occupation + " for a living."


class Woman extends Person {
    constructor(name = "Sarah") {
        super(name);
        this.gender = "Woman"
    }
}

let newWoman = new Woman
console.log(newWoman);

newWoman.intro();