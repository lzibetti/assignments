//let phrase = "turn this-string_into_camel-case";
let camelCase = function(str) {
    let camelCased = "";
    for (let i = 0; i < str.length; i++) {
//        if (str[i] === " " || str[i] === "-" || str[i] === "_") {
            if (" -_".includes(str[i])) {
            camelCased += str[i + 1].toUpperCase();
            i++;
        } else {
            camelCased += str[i];
        }
    }
    return camelCased;
}




//console.log(camelCase(phrase));
module.exports = camelCase;