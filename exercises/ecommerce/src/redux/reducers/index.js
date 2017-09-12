let defaultState = {
    men: [],
    women: []
}

let mainReducer = (state = defaultState, action) => {
    let newMen = [...state.men]
    switch(action.type){
        case "LOAD_DATA":
            return {
                men: action.men, women: action.women
            }
        default:
            return {
                ...state
            };
    }
};

export default mainReducer;