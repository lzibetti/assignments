import React from "react";
import ReactDOM from "react-dom";
import App from "./main/App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import mainReducer from "./redux/reducers/index.js";

const store = createStore(mainReducer);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById("root"));

store.subscribe(()=>{
    console.log(store.getState());
})