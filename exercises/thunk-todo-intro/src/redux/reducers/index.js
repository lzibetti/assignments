let defaultState = {
    todos: [],
    filter: "all"
};
let mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                todos: action.todos
            };
        case "CHANGE_FILTER":
            return {
                ...state,
                filter: action.filter
            }
        default:
            return { 
                ...state
            };
    }
}

export default mainReducer;
