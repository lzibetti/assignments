var str = "hello";
var numb = 4;

var assert = function(actual, expected){
    if(actual != expected) {
        throw "What have here is a failure to communicate";
    } else {
        console.log("You want the truth? You can\'t handle the truth!!")
    }
}

var describe = function(errMessage, testFunc) {  
  try {
    testFunc();
  } catch(err) {
    console.error("Failure", err);
  }
};

describe("Test time", function() {
    assert(true, true);
    assert(numb, 4);
    assert(str, "help");
});
