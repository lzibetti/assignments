var input = "";

try {  
  if(input == "") {
    throw "Input can not be empty";
  } else if(input.length > 5) {
    throw "Input is to big";
  } else {
    console.log("You code runs fine!");
  }
} catch(err) {
  console.log(err);
} finally {
  console.log("Runs no matter what");
  console.log("And the input was " + input);
}

var myName = "John Doe";  
try {
  console.log(name);
  if(!name)
  throw "name is not defined";
}
catch (err) {
  console.log(err);
}

function movieCheck(age) { 
  try {
    if(age < 0) {
      throw "Error cannot be less than 0";
    } else if(age <= 12) {
      console.log("You can see PG movies");
    } else if(age >= 13 && age < 18) {
      console.log("You can see PG-13 movies");
    } else if(age >= 18 && age < 150) {
      console.log("You can see R rated movies");
    } else throw "You lie!!!";
  }
  catch(err) {
    console.log(err);
  }
  
}
movieCheck(150);  