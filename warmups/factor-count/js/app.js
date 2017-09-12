function primeFactor(num) {
    let count = 0;
    for (let i = num; i >= 2; i--) {
        if (num % i === 0) {
            count++;
        }
    }
//    if(count > 1) return num + " is not prime"; else return num + " is prime";
    if(count > 1) return num; else return;
}

//console.log(primeFactor(32893879));
module.exports = primeFactor;

// class solution
//function primeFactor(num){
//    let output = 0;
//    for(let i = 1; i <= num/2; i++){
//        if(i % 2 === 0) output;
//    }
//    switch(output){
//        case 0: return 1;
//        case 1: prime;
//        default: return output + 1;
//    }
//}