let defaultState = {
    counter: 0
}

let mainReducer = function(state = defaultState, action){
    switch(action.type) {
        case "UP":
            return {
                counter: state.counter + action.incrementAmt                
            }
        // case "DOWN":
        //     return {
        //         counter: state.counter - action.decrementAmt              
        //     }
        case "RESET":
            return {
                ...defaultState
            }
        default:
            return {
                ...defaultState
            }
    }
}

export default mainReducer;