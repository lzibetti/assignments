import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import App from "./main/App";
import mainReducer from "./redux/reducers/index";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));