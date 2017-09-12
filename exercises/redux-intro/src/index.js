import React from "react";
import ReactDOM from "react-dom";
import App from "./main/App.js";

//redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import mainReducer from "./redux/reducers/index.js"
import "./index.css";

let store = createStore(mainReducer);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById("root"));
