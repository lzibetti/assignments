// function adds 2 numbers
//function add(parm1, parm2){
//  return parm1 + parm2;
//}
//console.log(add(2, 91));


// function proccesses largest of three numbers
//function biggest(greater1, greater2, greater3){
//  if (greater1 > greater2 || greater1 > greater3) {
//    return greater1;
//  } else if (greater2 > greater3){
//    return greater2;
//  } 
//  return greater3;
//} 
//console.log(biggest(300,29,1092))

// function determines if number is odd or even
//function oddOrEven(num) {
//    if (num % 2) {
//        return "This number " + num + ", is odd!";
//    }
//    return "This number " + num + ", is even!";
//}
//console.log(oddOrEven(3));

// function manipulates string
function strWork(word) {
    if (word.length <= 20){
        return word + word;
    }
    var half = word.length / 2;
    return word.substring (0, half);
}
console.log(strWork("My moma told me you better shop around"));

// functions in Uptown exercize, Rachell's work
//var lyrics = ["This", "hit", "that", "ice", "cold",  
//              "Michelle", "Pfeiffer", "that", "white", 
//              "gold", "This", "one", "for", "them", 
//              "hood", "girls", "Them", "good", "girls", 
//              "straight", "masterpieces", "Stylin'", 
//              "whilen'", "livin'", "it", "up", "in", 
//              "the", "city", "Got", "Chucks", "on", 
//              "with", "Saint", "Laurent", "Gotta", "kiss", 
//              "myself", "I'm", "so", "pretty"];//function everyOther(array) {
//    for (var i = 1; i <= array.length; i++) {
//        array.splice(i, 1);
//    }
//    return array.join(' ');
//}
//console.log(everyOther(lyrics));