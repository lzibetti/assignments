// Given a string, write a function that returns an array of all the combinations of its substrings.
// substringCombos("abc");
//returns ["a","b","c", "ab","bc","abc"];

function sCombos(str){
    let arry = [];
    for(i = 0 ; i < str.length; i++) {
        for(j = str.length; j >  i; j--) {
            arry.push(str.substring(i, j));
        }
    }
    return arry;
}

module.exports = sCombos;