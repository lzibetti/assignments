let defaultState = {
    items: []
    
    // items: [],
    // filteredItems: [],
    // filter: "ALL"
}

let mainReducer = function(state = defaultState, action){
    let newItems = [...state.items];
    switch(action.type) {
        case "LOAD_DATA":
            return {
                items: action.data
            }
        case "ADD_ITEM":
            newItems.push(action.item)
            return {
                items: newItems
            }
        case "EDIT_ITEM":
            newItems[action.index] = action.item;
            return {
                ...state,
                items: newItems
            }
        case "DELETE_ITEM":
            newItems.splice(action.index, 1);
            return {
                items: newItems
            }
        default:
            return {
                ...state
            }
    }
}

export default mainReducer;