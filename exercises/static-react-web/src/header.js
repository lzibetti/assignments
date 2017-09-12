import React from "react";
import Navbar from "./navbar.js"

class Header extends React.Component {
    render() {
        return (
            <div className="header-wrapper">
                <h1 className="header-title">Welcome to your new home</h1>
                <Navbar />
            </div>
        )
    }
};


export default Header;