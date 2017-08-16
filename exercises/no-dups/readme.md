Vschool exercise, string manipulation
1) Remove all duplicate letters from a string
2) Create one string that has no duplicate letters
3) Create a second string with all the removed duplicate letters
4) Here's an example:
   // input
   var input = 'bookkeeper larry';
   // output
   No duplicates: 'bokepr lay'
   The Misfits: 'okeerr'

// received from AJ
function noDuplicates(str) {
  var noDups = "";
  var duplicatesRemoved = "";
  var twoStrings = {};
  for (var i = 0; i < str.length; i++) {
    if (noDups.indexOf(str[i]) < 0) {
      noDups += str[i];
    } else {
      duplicatesRemoved += str[i];
    }
  }
    twoStrings.minusDups = noDups;
    twoStrings.dupsRemoved = duplicatesRemoved;
    return twoStrings;  // the object is used to pass both strings back to calling fuction
}
