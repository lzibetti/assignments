import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';

import mainReducer from "./redux/reducers/index"
import {Provider} from "react-redux"

import App from "./main/App";


ReactDOM.render(<Provider>
                    <Router>
                        <App/>
                    </Router>
                </Provider>
                , document.getElementById("root"));