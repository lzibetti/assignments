// set defaultState
let defaultState = {
    memes: []
}

let mainReducer = function(state = defaultState, action) {
    switch(action.type) {
        case "ADD_POST":
            let memes = [...state.memes, action.meme]
            return {
                memes: memes
            }
        default:
            return {
                ...defaultState
            }
    }
}

export default mainReducer;