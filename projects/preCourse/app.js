//"Laius".length;
/*if ("Laius".length >= 4 ) 
{
    console.log("Let's go down the first road!");
}
else 
{
    // What should we do if the condition is false? Fill in here:
    console.log("We have reached Nirvana");
}*/

var output = function (input) {
  document.getElementById("output").innerHTML = input;
};

var quit = false;

while (quit !== true) {
switch (prompt("Choose menu item \'f\', \'c\', \'s\' to continue or \'q\' to quit")) {
  case "f":
    var i = prompt("Find cousin by last name");
   if( i == "Brave"){ 
     var text = "";
//     var person = {fname:"Nova", lname:"Brave", age:"2", sex:"girl"}; 
     var person = ["Nova", "Brave", "2", "girl"]; 
     var x;
     for (x = 0; x < person.length; x++) {
       text += person[x] + " ";
     }
     console.log(text)
     document.getElementById("text").innerHTML = text;
   }
   break;
 case "c":
   console.log("Find cousin by first name");
   break;
 case "s":
   console.log("Find cousin by sex");
   break;
  case "q": quit = true;
    if(confirm('Are you sure you want to exit?') == true){ 
    break;
    }
    else {break;}
 default:
   console.log("Try again");
   break;
 }
}

