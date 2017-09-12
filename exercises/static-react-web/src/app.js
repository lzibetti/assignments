import React from "react";
import Header from "./header.js";
import Webpage from "./webpage.js";
import Footer from "./footer.js";

class App extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <Header />
                <Webpage />
                <Footer />
            </div>
        )
    }
};


export default App;