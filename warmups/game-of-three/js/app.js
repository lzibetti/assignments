
function threeGame(number, count = 0) {
    if (number < 1) {return "invalid"}
    // if (number < 1) {return number + " is an invalid number"}
    if (number === 1) {
        return  count;
        // return "Arrived at " + number + " with " + count + " recursive loop(s).";
    }
    if (number % 3 === 0) {
        count++;
        return threeGame(number / 3, count);
        // return threeGame(number / 3);
    }
    if ((number + 1) % 3 === 0) {
        count++;
        return threeGame((number + 1) / 3, count);
        // return threeGame((number + 1) / 3);
    }
    count++;
    return threeGame((number - 1) / 3, count);
        // return threeGame((number - 1) / 3);
    
};

module.exports = threeGame;
//console.log(threeGame(1206901093831));
//console.log(threeGame(120631897204340979));
