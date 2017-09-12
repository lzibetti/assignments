
console.log(chckType([[, true, 3],["1","2","3"],[true, true, true]]));
//returns false (contains more than one data type)
console.log(chckType([[true,false,true][false,false,true]]));
//returns true (each data type is a boolean)

function chckType(arr){
    for (let i = 0; i < arr.lenght; i++) {
        // let type = typeof arr[i][0];
        for (let j = 0; j < arr[i].lenght; j++) {
            if (typeof arr[i][j] !== type){
                return false;
            }
        }
    }
    return true;
};



// modules.export = chckType;