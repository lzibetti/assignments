export function up(incrementAmt, decrementAmt){
    return {
        type: "UP",
        incrementAmt: incrementAmt,
        decrementAmt: decrementAmt    
    }
}

// export function down(decrementAmt){
//     return {
//         type: "DOWN",
//         decrementAmt: decrementAmt    
//     }
// }

export function reset(){
    return {
        type: "RESET"
    }
}