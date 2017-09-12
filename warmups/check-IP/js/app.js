function checkIP(ip){
    let arryIP = ip.split(".");
    if(arryIP.length !== 4){
        return false;        
    } else {
        for(let i = 0; i < arryIP.length; i++){
            if(arryIP[i] > 255){
              return false;
            }
        }
    }
    return true;
}
console.log(checkIP("255.234.123.42"))