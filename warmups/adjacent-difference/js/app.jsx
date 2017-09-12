function strDiff(arry) {
    let count = 0;
    let index = 0;
    let lenArr = arry.map((str)=> {
        return str.length;
    });
    for(let i = 0; i < lenArr.length; i++) {
        let temp = lenArr[i] + lenArr[i+1] + lenArr[i+2];
        if(temp > count){
            count = temp;
            index = i;
        }
    }
    return arry.splice(index, 3)
};

module.exports = strDiff;