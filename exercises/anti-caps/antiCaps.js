function isCaps(letter) {
    return letter === letter.toUpperCase();
}

function antiCaps(string) {

    let upper = '';
    let lower = '';
    let newArray = [];

    for(let i = 0; i < string.length; i++) {
        if(isCaps(string[i]) === true) {

            upper = string[i].toLowerCase();
            newArray.push(upper);
            // console.log(newArray);
        }
        else {

            lower = string[i].toUpperCase();
            newArray.push(lower);
            // console.log(newArray);
        }

    }

    return newArray.join("");
}


// change to array
// check each element if it is uppercase or lowercase
// if uppercase change to lowercase vice versa
// return a string

console.log(antiCaps("Hello"));
console.log(antiCaps("racEcar"));
console.log(antiCaps("bAnAnA"));