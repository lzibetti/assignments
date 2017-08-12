//Write a function that returns the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the "d", so "cope" and "cooe" would also count.
//
//countCode("aaacodebbb") -> 1 
//countCode("codexxcode") -> 2 
//countCode("cozexxcope") -> 2

var count = 0
function countCode(strFeed) {
    var regex = strFeed.match(/co.e/g);
    console.log(regex);
    return regex.length;
}

console.log(countCode("aaacodebcopebcozeb"));
console.log(countCode("xxcopexxcodeuiw"));













////Short code
//function matchRuleShort(str, rule) {
//  return new RegExp("^" + rule.split("*").join(".*") + "$").test(str);
//}
//
////Explanation code
//function matchRuleExpl(str, rule) {
//  // "."  => Find a single character, except newline or line terminator
//  // ".*" => Matches any string that contains zero or more characters
//  rule = rule.split("*").join(".*");
//
//  // "^"  => Matches any string with the following at the beginning of it
//  // "$"  => Matches any string with that in front at the end of it
//  rule = "^" + rule + "$"
//
//  //Create a regular expression object for matching string
//  var regex = new RegExp(rule);
//
//  //Returns true if it finds a match, otherwise it returns false
//  return regex.test(str);
//}
//
////Examples
//alert(
//    "1. " + matchRuleShort("bird123", "bird*") + "\n" +
//    "2. " + matchRuleShort("123bird", "*bird") + "\n" +
//    "3. " + matchRuleShort("123bird123", "*bird*") + "\n" +
//    "4. " + matchRuleShort("bird123bird", "bird*bird") + "\n" +
//    "5. " + matchRuleShort("123bird123bird123", "*bird*bird*") + "\n"
//);