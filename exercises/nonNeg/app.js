// replaced the long version with more effeciency
var comp = function(parm1, parm2) {
    return parm1 % 10 === parm2 % 10;
//    var x = parm1 % 10,
//        y = parm2 % 10;
//    if (x === y){
//        return true;    
//    }
//    return false;
} 
console.log(comp(27, 4397));