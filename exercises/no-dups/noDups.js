var input = 'bbookkeeper larry';
var noDup = "";
var misFits = "";

function deDupe(str) {
    for (var i = 0; i < str.length; i++) {
        if (noDup.indexOf(str[i]) < 0) {
            noDup += str[i];
        } else {
            misFits += str[i];
        }
    }
    return noDup;
}
console.log("Duplicates removed " + deDupe(input));
console.log("These are the misFits" + misFits);
