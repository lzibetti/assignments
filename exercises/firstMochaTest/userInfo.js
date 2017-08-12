var User = function(fName, lName, age, gender) {  
  this.firstname = fName;
  this.lastname = lName;
  this.age = age;
  this.gender = gender;
  this.greeting = function() {
    return "Hello, " + this.firstname + " " + this.lastname + ". Your are " + age + " years old and " + this.gender + ".";
  };
};