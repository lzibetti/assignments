var count = 0
function countCode(strFeed) {
    var regex = strFeed.match(/co.e/g);
    console.log(regex);
    return regex.length;
}
console.log(countCode("aaacodebcopebcozeb"));
console.log(countCode("xxcopexxcodeuiw"));
countCode("aaacodebbb"); 
countCode("codexxcode"); 
countCode("cozexxcope");
