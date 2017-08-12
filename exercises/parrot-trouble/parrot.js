// We have a loud talking parrot. Write a function where the 'hour' parameter is the current hour in the range 0..23, and the 'talking' parameter is a boolean indicating if the parrot is currently talking. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.

// have talking parrot who can talk between the hours of 7 and 20
// if it is before 7 or after 20 I lose the appartment
// I need two parameter; the hour and if bird is talking

function stayOrGo(hour, talking) {
    if (hour < 0 || hour > 23) {
        return "Out of range, enter a number between 0 and 23!"
    }
    return talking && (talking < 7 || talking > 20)
}

console.log(stayOrGo(-8, true));