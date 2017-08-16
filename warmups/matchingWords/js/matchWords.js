let matchWords = function(str) {
    let graph = {} ;
    let output = [];
    let arr = str.split(" ");
    for(let i = 0; i < arr.length; i++){
        if(!graph[arr[i]]) {
            graph[arr[i]] = arr[i];
        } else {
            if(!output.includes(arr[i])) {
                output.push(arr[i]);
            }
        }
    }
    return output.reverse();
//    return output;
}

//console.log(matchWords("this", "is", "an", "example", "test"));
module.exports = matchWords;