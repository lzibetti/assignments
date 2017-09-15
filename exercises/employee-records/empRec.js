// what is an Object constructor functions, use uppcase to name constructor function
// var animal {
//   key: "value"
// }
// animals['key']

function Employee (fName, title, salary, status){
  this.fullName = fName;
  this.title = title;
  this.salary = salary;
  this.status = status || 'Full Time';
  this.printEmp = function(employees) {
    console.log("Hi, I work as a " + this.title + ", I am a " + this.status + "employee. My salary is $" + this.salary + ".00 per annum.");
  }
}

var employees = [];
var employee1 = new Employee('Laius Zibetti', 'machinist', 'not your affair');
var employee2 = new Employee("Record Balm", "mechanic", "45,000");
var employee3 = new Employee("Blue Speaker", "printer", "$30,000");
var employee4 = new Employee("Single Case", "binder", "$27,000");
var employee5 = new Employee("Celon Dayquam", "entertainer", "$15,000", "contract");
//employees.push(employee1);
//employees.push(employee2);
//employees.push(employee3);
//employees.push(employee4);
//employees.push(employee5);


//Employee.printEmp();
//console.log(Employee(employee1));
console.log(employee1)