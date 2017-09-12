import React from "react";
import Navbar from "./navbar"

class Header extends React.Component {
    constructor() {
        super();
        this.navLinks = ["Home", "Milestones", "Story Store"]
    }
    render() {
        return (
            <div className="header-wrapper">
                <h1 className="header-title">Story Store</h1>
                <Navbar navLinks = {this.navLinks}/>
            </div>
        )
    }
}


export default Header;