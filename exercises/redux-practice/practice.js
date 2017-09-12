let redux = require("redux");
let createStore = redux.createStore;

let defaultState = {
    comments: []
}

let post = (comment) => {
    return {
        type: "POST",
        comment
    }
}

let mainReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "POST":
            let newArr = [...state.comments, action.comment]
            // return {...state, comments: newArr}
            return Object.assign(state, {comments: newArr});
        default:
            return state
    }
}

const store = createStore(mainReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(post("oh boy"));
store.dispatch(post("Star Trek"));
store.dispatch(post("Let's play StarCraft"));
