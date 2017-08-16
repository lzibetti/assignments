// what is an Object constructor functions, use uppcase to name constructer function
// var animal {
//   key: "value"
// }
// animals['key']

function Employee (fullName, job, salary, status){
  this.fName = fName;
//  this.lName = lName;
  this.job = job;
  this.salary = salary;
  this.status = status || 'Full Time';
  this.addEmp = function() {
    console.log("Hi, I work as a " + this.job + ", I am a " + this.status + "level employee.");
  }
}

var objArr = [];
for (var i = 0; i <= 100; i++) {
    var emplyees = new User('Laius Zibetti', 'machinist', 'not your affair');
  objArr.push(person);
}

emplyees.addEmp();
console.log(emplyees);
