// 3 parts of redux1
// 1. Actions
// 2. Reducers
// 3. State of the app

// how it is used in react
// import {createStore} from "redux"

//in node
let redux = require("redux");
let createStore = redux.createStore;

let defaultState = {
    counter: 0
}

// create your reducer takes state and action as args
let mainReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "UP":
    // in react 
    // return {
    //     ...state,
    //     state.counter + 1
    // }
            return Object.assign(state, {counter: state.counter + action.amt});
        case "DOWN":
            return Object.assign(state, {counter: state.counter - action.amt});
        default:
            return state;
    }
};

// actions creators
let up = (amt = 1) => {
    return {
        type: "UP",
        amt
    }
}

let down = (amt = 1) => {
    return {
        type: "DOWN",
        amt
    }
}

// create the store
const store = createStore(mainReducer);

store.subscribe(() => {
    console.log(store.getState());
    
})

console.log(store.getState());

store.dispatch(up(3));
store.dispatch(down(5));
store.dispatch(up(2));

// end line